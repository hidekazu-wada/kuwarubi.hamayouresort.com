#!/usr/bin/env node
// 中身が同じ <source> を並べただけの <picture> を、srcset + sizes を持つ単一の <img> に畳む。
//
// もともと「デスクトップ/タブレット/スマホで解像度を出し分ける」意図で書かれていたが、
// 3つとも同じ srcSet を参照していたため機能しておらず、744px 未満では <source> が
// 1つもマッチせず <img src>（リサイズ前のフル解像度）が読まれていた。
//
// <picture> 自体は CSS のセレクタ対象になっているので残し、中の <source> だけを畳む。
// sizes は scripts/measure-sizes.mjs の実測値から与える。
//
//   node scripts/collapse-picture.mjs --dry    確認のみ
//   node scripts/collapse-picture.mjs          書き換え実行

import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry');

// 実測値（scripts/measure-sizes.mjs の出力）。
// キーは img の class、img に class が無い場合は 'picture:' + picture の class。
const SIZES = {
  // --- /facility/
  'equipment__image': [18.75, 22.5, 41.67],
  'hodohodo-forest__gallery-image footbath': [16.33, 19.59, 31.94],
  'hodohodo-forest__gallery-image sauna': [16.33, 19.59, 31.94],
  'hodohodo-forest__hero-image': [65.16, 65.15, 83.33],
  'hodohodo-forest__img': [30.08, 36.09, 46.8],
  'hodohodo-forest__reef-image': [91.25, 89.06, 100],
  'kokko__background-image': [91.25, 89.06, 100],
  'kokko__main-image': [53.05, 63.66, 86.11],
  'kokko__thumbnail-image': [6.05, 7.27, 10.97],
  'public-bath__background-img': [91.25, 89.06, 100],
  'public-bath__img': [39.06, 37.5, 97.22],
  'room__gallery-image': [50.78, 50.78, 86.11],
  'room__gallery-thumb-image': [7.46, 8.95, 20.97],

  // --- /
  'hospitality__img': [39.18, 43.1, 88.47],
  'hospitality__leaf hospitality__leaf--1': [7.85, 9.42, 21.25],
  'hospitality__leaf hospitality__leaf--2': [5.63, 6.75, 14.58],
  'picture:activities__tree': [8.2, 9.84, 23.61],
  'picture:top-activities__image': [19.53, 23.44, 69.44],
  'picture:enjoy__card-image': [65.63, 61.34, 88.89],
  'picture:enjoy__tree': [28.01, 33.61, 40.28],
  'picture:location__image location__image--main': [46.09, 36, 84.17],
  'picture:location__image location__image--sub': [33.87, 40.64, 75.83],
  'picture:hero__movie-thumbnail': [19.98, 23.9, 42.4],

  // --- /food/
  'bbq__gallery-image image01': [20.23, 20, 45.83],
  'bbq__gallery-image image02': [18.16, 18, 43.33],
  'bbq__gallery-image image03': [21.45, 22, 51.8],
  'bbq__gallery-image image04': [18.16, 21.8, 43.19],
  'breakfast__gallery-image image01': [20.23, 20, 45.83],
  'breakfast__gallery-image image02': [18.16, 18, 43.33],
  'breakfast__gallery-image image03': [21.45, 22, 51.8],
  'breakfast__gallery-image image04': [18.16, 21.8, 43.19],
  'curry__gallery-image image01': [20.23, 20, 45.83],
  'curry__gallery-image image02': [18.16, 18, 43.33],
  'curry__gallery-image image03': [21.45, 22, 51.8],
  'curry__gallery-image image04': [18.16, 21.8, 43.19],
  'dinner__gallery-image image01': [20.23, 20, 45.83],
  'dinner__gallery-image image02': [18.16, 18, 43.33],
  'dinner__gallery-image image03': [21.45, 22, 51.8],
  'dinner__gallery-image image04': [18.16, 21.8, 43.19],
  'houtou__gallery-image image01': [20.23, 20, 45.83],
  'houtou__gallery-image image02': [18.16, 18, 43.33],
  'houtou__gallery-image image03': [21.45, 22, 51.8],
  'houtou__gallery-image image04': [18.16, 21.8, 43.19],
  'dinner__menu-main-image-img': [69.53, 83.44, 88.89],
  'hero__img': [91.25, 89.06, 100],
  'restaurant__image left': [50.66, 50.66, 59.86],
  'restaurant__image right': [33.24, 33.24, 39.3],

  // --- /group/
  'group-hero__decoration-img': [22.77, 19, 58.33],
  'group-hero__img group-hero__img--main': [29.88, 30, 70.14],
  'group-hero__img group-hero__img--sub': [28.48, 23, 86.11],
  'slider-section__circle-image': [41.88, 50.25, 89.72],
  'slider-section__slide-image': [91.25, 89.09, 100],

  // --- /enjoy/[slug]/
  'picture:enjoy-hero__image': [48.91, 44.01, 80.55],
  'enjoy-hero__decoration': [19.73, 23.67, 50.55],
  'schedule-slider__img': [41.95, 50.34, 88.89],

  // --- /activities/
  'activity-card__img': [19.53, 23.44, 80],
  'activity-detail__image': [41.02, 41.01, 80.55],
  'point__image': [91.25, 89.06, 100],
  'popular-activities__img': [19.53, 23.44, 63.89],

  // --- /access/
  'access-hero__map-img': [91.25, 89.06, 100],
  'access-transport__route-img': [63.13, 75.75, 86.11],
};

// class が動的（テンプレートリテラル）だったり、そもそも class が無くて
// 実測値と結び付けられないブロック。ファイルと出現順で指定する。
const OVERRIDES = {
  // TOPのパララックス帯。picture にも img にも class が無い。
  'src/components/pages/top/Location.astro#3': [91.25, 89.06, 100],
};

const sizesAttr = ([pc, tab, sp]) =>
  `(min-width: 1024px) ${pc}vw, (min-width: 744px) ${tab}vw, ${sp}vw`;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith('.astro')) out.push(p);
  }
  return out;
}

// 属性値の { } はテンプレートリテラル（alt={`${x}の様子`}）で入れ子になる。
// 素朴な [^}]* だと途中で切れて属性を壊すので、括弧の対応を数えて取り出す。
const attrsOf = (raw) => {
  const out = {};
  const re = /([a-zA-Z-]+)=/g;
  let m;
  while ((m = re.exec(raw))) {
    const name = m[1];
    let i = m.index + m[0].length;
    if (raw[i] === '"') {
      const end = raw.indexOf('"', i + 1);
      if (end === -1) break;
      out[name] = raw.slice(i, end + 1);
      re.lastIndex = end + 1;
    } else if (raw[i] === '{') {
      let depth = 0;
      let j = i;
      for (; j < raw.length; j++) {
        if (raw[j] === '{') depth++;
        else if (raw[j] === '}' && --depth === 0) break;
      }
      if (j >= raw.length) break;
      out[name] = raw.slice(i, j + 1);
      re.lastIndex = j + 1;
    }
  }
  return out;
};

let converted = 0;
const skipped = [];

for (const file of walk('src')) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes('<picture')) continue;
  const original = src;

  let blockIndex = 0;

  src = src.replace(/[ \t]*<picture([^>]*)>([\s\S]*?)<\/picture>/g, (whole, pAttrRaw, inner) => {
    const myIndex = ++blockIndex;
    const sources = [...inner.matchAll(/<source([\s\S]*?)\/>/g)];
    if (sources.length === 0) return whole;

    // srcset の中身は `x.srcSet.attribute` とは限らない（microCMS 用の自前ヘルパーは
    // 文字列を返す）。式そのものを取り出して同一性で判定する。
    const exprs = sources.map((s) => {
      const m = s[1].match(/srcset=\{([^}]*)\}/);
      return m ? m[1].trim() : null;
    });
    if (exprs.some((e) => e === null)) {
      skipped.push(`${file}: srcset を持たない source がある`);
      return whole;
    }
    // 別画像を出し分けている本物のアートディレクションは温存する
    if (new Set(exprs).size > 1) return whole;

    const expr = exprs[0];
    const imgM = inner.match(/<img([\s\S]*?)\/>/);
    if (!imgM) {
      skipped.push(`${file}: picture 内に img が無い`);
      return whole;
    }
    // JSX の条件分岐やフラグメントを含むものは構造を壊しかねないので手当てしない
    if (/\{[^}]*&&|<>|<\/>/.test(inner)) {
      skipped.push(`${file}: picture 内に JSX 条件分岐がある`);
      return whole;
    }

    const a = attrsOf(imgM[1]);

    // source と img が別の変数を指している＝SP用とPC用で画像そのものが違う
    // （アートディレクション）。畳むとSP用の絵が消えるので触らない。
    const baseOf = (s) =>
      String(s || '')
        .replace(/^\{|\}$/g, '')
        .replace(/\.(srcSet\.attribute|srcSet\.values.*|srcSet|src|url)$/, '');
    if (baseOf(expr) !== baseOf(a.src)) {
      skipped.push(`${file}: source と img が別画像（アートディレクション）`);
      return whole;
    }

    const pClass = (pAttrRaw.match(/class="([^"]*)"/) || [])[1];
    const imgClass = (a.class || '').replace(/^"|"$/g, '');
    const key = imgClass || (pClass ? `picture:${pClass}` : null);
    const dims = OVERRIDES[`${file}#${myIndex}`] || (key && SIZES[key]);
    if (!dims) {
      skipped.push(`${file}#${myIndex}: sizes 未定義 (key=${key})`);
      return whole;
    }

    // Astro の getImage 由来なら、フル解像度ではなく最大候補を fallback にする。
    // 自前ヘルパー由来（ただの文字列）のときは元の src をそのまま残す。
    const astroBase = expr.match(/^(.*)\.srcSet\.attribute$/);
    const srcExpr = astroBase
      ? `{${astroBase[1]}.srcSet.values.at(-1).url}`
      : a.src;

    const indent = (whole.match(/^([ \t]*)/) || ['', ''])[1];
    const i2 = indent + '  ';
    const i3 = indent + '    ';

    const lines = [
      `${i2}<img`,
      `${i3}src=${srcExpr}`,
      `${i3}srcset={${expr}}`,
      `${i3}sizes="${sizesAttr(dims)}"`,
      ...['alt', 'width', 'height'].filter((k) => a[k]).map((k) => `${i3}${k}=${a[k]}`),
      ...(a.class ? [`${i3}class=${a.class}`] : []),
      `${i3}loading=${a.loading ?? '"lazy"'}`,
      `${i3}decoding=${a.decoding ?? '"async"'}`,
      `${i2}/>`,
    ];

    converted++;
    return `${indent}<picture${pAttrRaw}>\n${lines.join('\n')}\n${indent}</picture>`;
  });

  if (src !== original && !DRY) fs.writeFileSync(file, src);
}

console.log(`変換: ${converted} ブロック${DRY ? '（dry-run）' : ''}`);
if (skipped.length) {
  console.log(`\n未変換 ${skipped.length} 件:`);
  const counts = {};
  for (const s of skipped) counts[s] = (counts[s] || 0) + 1;
  for (const [s, n] of Object.entries(counts)) console.log(`  x${n}  ${s}`);
}
