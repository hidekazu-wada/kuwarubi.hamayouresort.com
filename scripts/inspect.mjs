#!/usr/bin/env node
// ヘッドレスChromeをCDPで叩いて、DOMの実測値を取得する検証用スクリプト。
//
//   node scripts/inspect.mjs --url http://localhost:4321/facility/ --width 1440 \
//     --eval "return document.querySelectorAll('img').length" [--shot out.png]
//
// --eval に渡したJSは関数本体としてページ内で実行され、返り値がJSONで出る。
// スクロール連動アニメーション（js-fade-in-up）は計測前に強制的に完了させる。

import { spawn } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}

const url = arg('url');
const width = Number(arg('width', 1440));
const height = Number(arg('height', 4000));
const evalBody = arg('eval', 'return null');
const shot = arg('shot');
// 指定したセレクタの位置までスクロールし、ビューポートだけを撮る。
// 縦に長いページは captureBeyondViewport だと深い位置が白く抜けることがあるため。
const scrollTo = arg('scroll-to');

if (!url) {
  console.error('--url は必須です');
  process.exit(1);
}

const profile = await mkdtemp(join(tmpdir(), 'cdp-'));
const chrome = spawn(CHROME, [
  '--headless=new',
  '--remote-debugging-port=0',
  `--user-data-dir=${profile}`,
  `--window-size=${width},${height}`,
  '--hide-scrollbars',
  '--no-first-run',
  '--disable-extensions',
  'about:blank',
]);

// 起動ログから ws エンドポイントを拾う
const wsUrl = await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('Chrome起動タイムアウト')), 20000);
  let buf = '';
  chrome.stderr.on('data', (d) => {
    buf += d.toString();
    const m = buf.match(/ws:\/\/[^\s]+/);
    if (m) {
      clearTimeout(timer);
      resolve(m[0]);
    }
  });
});

const ws = new WebSocket(wsUrl);
let msgId = 0;
const pending = new Map();

ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
  }
});

const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });

await new Promise((r) => ws.addEventListener('open', r));

// ページターゲットに attach
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width < 744,
}, sessionId);

// 読み込み完了を待つ
const loaded = new Promise((resolve) => {
  const onMsg = (e) => {
    const m = JSON.parse(e.data);
    if (m.method === 'Page.loadEventFired') {
      ws.removeEventListener('message', onMsg);
      resolve();
    }
  };
  ws.addEventListener('message', onMsg);
});
await send('Page.navigate', { url }, sessionId);
await loaded;

// アニメーションを強制完了 + 遅延読み込み画像を確実に取得させる
await send('Runtime.evaluate', {
  expression: `(async () => {
    // 初回訪問扱いになるとローディングオーバーレイが3秒間ページを覆い、
    // スクリーンショットが真っ白になる
    document.getElementById('loading')?.remove();
    document.body.style.overflow = '';
    document.querySelectorAll('.js-fade-in-up').forEach((el) => {
      el.classList.add('is-visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
      // will-change が残っていると合成レイヤーに昇格したままになり、
      // captureBeyondViewport でビューポート外が白く抜ける
      el.style.willChange = 'auto';
    });
    document.querySelectorAll('img[loading="lazy"]').forEach((el) => {
      el.loading = 'eager';
    });
    await new Promise((r) => setTimeout(r, 400));
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? null : new Promise((r) => {
          img.addEventListener('load', r, { once: true });
          img.addEventListener('error', r, { once: true });
        })
      )
    );
    // complete だけではピクセルが出揃わない。decode() まで待たないと
    // スクリーンショットが撮影ごとにばらつく。
    await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise((r) => setTimeout(r, 500));
  })()`,
  awaitPromise: true,
}, sessionId);

const { result } = await send('Runtime.evaluate', {
  expression: `JSON.stringify((() => { ${evalBody} })())`,
  returnByValue: true,
}, sessionId);

console.log(result.value ?? 'null');

if (shot) {
  if (scrollTo) {
    await send('Runtime.evaluate', {
      expression: `(async () => {
        // html に scroll-behavior: smooth が効いているとスクロールが終わらないので殺す
        document.documentElement.style.scrollBehavior = 'auto';
        const el = document.querySelector(${JSON.stringify(scrollTo)});
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 40;
          window.scrollTo(0, y);
        }
        await new Promise((r) => setTimeout(r, 800));
      })()`,
      awaitPromise: true,
    }, sessionId);
  }
  const { data } = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: !scrollTo,
  }, sessionId);
  await writeFile(shot, Buffer.from(data, 'base64'));
}

ws.close();
chrome.kill();

// Chrome がプロファイルを掴んだまま終了することがあるので、消せなくても失敗扱いにしない
try {
  await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
} catch {
  // 一時ディレクトリなので放置してよい
}
