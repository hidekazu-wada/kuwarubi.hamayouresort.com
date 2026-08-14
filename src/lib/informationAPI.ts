// お知らせ・イベント・ブログ記事の取得
//
// もともと microCMS を叩いていたが、運用開始までサイト内管理に戻したため
// src/data/information.ts を読むだけになっている。
// 呼び出し側の型と関数名はそのまま残してあるので、CMSに戻すときは
// この中身を差し替えるだけで済む。

import { posts, type InformationPost } from '../data/information';

export type { InformationPost };

/** 公開日の降順（新しい順）に並べる */
function sortByPublishedDesc(list: InformationPost[]): InformationPost[] {
  return [...list].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * 全てのお知らせを取得（公開日の降順）
 */
export async function getAllInformationPosts(): Promise<InformationPost[]> {
  return sortByPublishedDesc(posts);
}

/**
 * TOPページ用：お知らせカテゴリーの最新4件を取得
 */
export async function getTopPageInformationPosts(): Promise<InformationPost[]> {
  return sortByPublishedDesc(posts.filter((p) => p.category === 'お知らせ')).slice(0, 4);
}

/**
 * TOPページ用：イベント情報カテゴリーの最新4件を取得
 */
export async function getTopPageEventPosts(): Promise<InformationPost[]> {
  return sortByPublishedDesc(posts.filter((p) => p.category === 'イベント情報')).slice(0, 4);
}

/**
 * TOPページ用：ブログ記事カテゴリーの最新10件を取得
 */
export async function getTopPageBlogPosts(): Promise<InformationPost[]> {
  return sortByPublishedDesc(posts.filter((p) => p.category === 'ブログ記事')).slice(0, 10);
}

/**
 * slugから個別のお知らせを取得
 */
export async function getInformationPostBySlug(
  slug: string
): Promise<InformationPost | null> {
  return posts.find((p) => p.slug === slug) ?? null;
}

/**
 * 指定されたslugの前後の記事を取得（同じカテゴリー内のみ）
 * prev = 古い記事 / next = 新しい記事
 */
export async function getAdjacentPosts(slug: string): Promise<{
  prev: InformationPost | null;
  next: InformationPost | null;
}> {
  const all = sortByPublishedDesc(posts);
  const current = all.find((p) => p.slug === slug);
  if (!current) return { prev: null, next: null };

  const sameCategory = all.filter((p) => p.category === current.category);
  const i = sameCategory.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };

  return {
    prev: i < sameCategory.length - 1 ? sameCategory[i + 1]! : null,
    next: i > 0 ? sameCategory[i - 1]! : null,
  };
}

/**
 * 日付フォーマット関数
 */
export function formatDate(dateString: string): {
  year: string;
  month: string;
  day: string;
  full: string;
} {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return {
    year,
    month,
    day,
    full: `${year}.${month}.${day}`,
  };
}
