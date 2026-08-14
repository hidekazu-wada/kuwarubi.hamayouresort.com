#!/usr/bin/env node
// ページ内の各画像が、断面ごとに実際に何vwで表示されているかを測る。
// srcset の sizes 属性を推測ではなく実測から決めるための補助スクリプト。
//
//   node scripts/measure-sizes.mjs /facility/
//
// 出力: クラス名ごとに sp / tablet / desktop の実測vwと、そのまま貼れる sizes 文字列。

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const path = process.argv[2] || '/';
const origin = process.env.ORIGIN || 'http://localhost:4321';

// sp / タブレット縦 / PC の代表幅。ブレークポイントは 744 / 1024。
const VIEWPORTS = [
  { label: 'sp', width: 390 },
  { label: 'tablet', width: 834 },
  { label: 'desktop', width: 1440 },
];

// class は img 側にあるとは限らず、親の <picture> が持っている場合がある。
// sizes は「その画像が何vwで表示されるか」で決まるので、識別子は img→picture の順に探す。
const EVAL = `
  return [...document.querySelectorAll('img')].map((i) => {
    const r = i.getBoundingClientRect();
    const own = i.getAttribute('class');
    const parent = i.closest('picture')?.getAttribute('class');
    return {
      cls: own || (parent ? 'picture:' + parent : '(no class)'),
      w: r.width,
    };
  }).filter((o) => o.w > 0);
`;

const byClass = new Map();

for (const vp of VIEWPORTS) {
  const { stdout } = await run('node', [
    'scripts/inspect.mjs',
    '--url', `${origin}${path}`,
    '--width', String(vp.width),
    '--eval', EVAL,
  ]);
  for (const { cls, w } of JSON.parse(stdout.trim())) {
    if (!byClass.has(cls)) byClass.set(cls, {});
    const rec = byClass.get(cls);
    // 同じクラスが複数あるときは最大値を採る（一番大きく出る箇所に合わせる）
    const vw = (w / vp.width) * 100;
    rec[vp.label] = Math.max(rec[vp.label] ?? 0, vw);
  }
}

const fmt = (n) => {
  const r = Math.round(n * 100) / 100;
  return `${r}vw`;
};

console.log(`\n${path}`);
console.log('─'.repeat(76));
for (const [cls, r] of [...byClass.entries()].sort()) {
  if (r.sp == null || r.tablet == null || r.desktop == null) continue;
  const sizes =
    `(min-width: 1024px) ${fmt(r.desktop)}, ` +
    `(min-width: 744px) ${fmt(r.tablet)}, ` +
    fmt(r.sp);
  console.log(`${cls}`);
  console.log(
    `  sp ${fmt(r.sp).padEnd(9)} tab ${fmt(r.tablet).padEnd(9)} pc ${fmt(r.desktop)}`
  );
  console.log(`  sizes="${sizes}"`);
}
