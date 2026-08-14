// お知らせ・イベント情報・ブログ記事データ
//
// microCMS から切り離し、サイト内で管理する形にしたもの。
// 公開時に記事を書き起こすため、いまは意図的に空にしてある。
// 空でもビルドは通り、TOPのお知らせ／ブログ欄と一覧ページは
// 「記事なし」の表示に切り替わる。
//
// 記事を追加するとき:
//   1. 下の posts 配列に1件足す（slug はURLになるので半角英数とハイフンで）
//   2. 本文 content はHTML文字列。set:html でそのまま描画される
//   3. サムネイルを付ける場合は src/assets/images/information/ に画像を置き、
//      ファイル冒頭で import して thumbnail に渡す（ImageMetadata）
//
// 移行前の記事は docs/archive/microcms-export/information.json に退避してある。

import type { ImageMetadata } from 'astro';

export type InformationCategory = 'お知らせ' | 'イベント情報' | 'ブログ記事';

export interface InformationPost {
  slug: string; // URLになる識別子
  title: string;
  category: InformationCategory;
  publishedAt: string; // ISO8601（例: '2026-04-01T09:00:00.000Z'）。並び順に使う
  content: string; // 本文HTML
  thumbnail?: ImageMetadata; // ブログ記事のサムネイル
}

export const posts: InformationPost[] = [];
