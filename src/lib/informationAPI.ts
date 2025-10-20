import { client } from './microcms';
import type { InformationPost, MicroCMSListResponse } from '../types/microcms';

/**
 * 全てのお知らせを取得
 */
export async function getAllInformationPosts(): Promise<InformationPost[]> {
  try {
    const response = await client.get<MicroCMSListResponse<InformationPost>>({
      endpoint: 'information',
      queries: {
        limit: 100, // 最大100件取得
        orders: '-publishedAt', // 公開日の降順
      },
    });
    return response.contents;
  } catch (error) {
    console.error('Failed to fetch information posts:', error);
    return [];
  }
}

/**
 * TOPページ用：お知らせカテゴリーの最新4件を取得
 */
export async function getTopPageInformationPosts(): Promise<
  InformationPost[]
> {
  try {
    const response = await client.get<MicroCMSListResponse<InformationPost>>({
      endpoint: 'information',
      queries: {
        limit: 4,
        filters: 'category[contains]お知らせ',
        orders: '-publishedAt',
      },
    });
    return response.contents;
  } catch (error) {
    console.error('Failed to fetch top page information posts:', error);
    return [];
  }
}

/**
 * TOPページ用：イベント情報カテゴリーの最新4件を取得
 */
export async function getTopPageEventPosts(): Promise<InformationPost[]> {
  try {
    const response = await client.get<MicroCMSListResponse<InformationPost>>({
      endpoint: 'information',
      queries: {
        limit: 4,
        filters: 'category[contains]イベント情報',
        orders: '-publishedAt',
      },
    });
    return response.contents;
  } catch (error) {
    console.error('Failed to fetch top page event posts:', error);
    return [];
  }
}

/**
 * TOPページ用：ブログ記事カテゴリーの最新10件を取得
 */
export async function getTopPageBlogPosts(): Promise<InformationPost[]> {
  try {
    const response = await client.get<MicroCMSListResponse<InformationPost>>({
      endpoint: 'information',
      queries: {
        limit: 10,
        filters: 'category[contains]ブログ記事',
        orders: '-publishedAt',
      },
    });
    return response.contents;
  } catch (error) {
    console.error('Failed to fetch top page blog posts:', error);
    return [];
  }
}

/**
 * slugから個別のお知らせを取得
 */
export async function getInformationPostBySlug(
  slug: string
): Promise<InformationPost | null> {
  try {
    const response = await client.get<MicroCMSListResponse<InformationPost>>({
      endpoint: 'information',
      queries: {
        filters: `slug[equals]${slug}`,
        limit: 1,
      },
    });
    return response.contents[0] || null;
  } catch (error) {
    console.error(`Failed to fetch information post with slug: ${slug}`, error);
    return null;
  }
}

/**
 * 指定されたslugの前後の記事を取得（同じカテゴリー内のみ）
 * @param slug - 基準となる記事のslug
 * @returns 前後の記事オブジェクト
 */
export async function getAdjacentPosts(slug: string): Promise<{
  prev: InformationPost | null;
  next: InformationPost | null;
}> {
  try {
    // 全ての記事を取得
    const allPosts = await getAllInformationPosts();

    // 現在の記事を見つける
    const currentPost = allPosts.find((post) => post.slug === slug);

    if (!currentPost) {
      return { prev: null, next: null };
    }

    // 現在の記事と同じカテゴリーの記事のみでフィルタリング（日付降順）
    const sameCategoryPosts = allPosts.filter(
      (post) => post.category[0] === currentPost.category[0]
    );

    // 同じカテゴリー内での現在の記事のインデックスを見つける
    const currentIndex = sameCategoryPosts.findIndex((post) => post.slug === slug);

    if (currentIndex === -1) {
      return { prev: null, next: null };
    }

    // prev = 古い記事（インデックスが大きい方）
    // next = 新しい記事（インデックスが小さい方）
    const prev = currentIndex < sameCategoryPosts.length - 1 ? sameCategoryPosts[currentIndex + 1] : null;
    const next = currentIndex > 0 ? sameCategoryPosts[currentIndex - 1] : null;

    return { prev, next };
  } catch (error) {
    console.error('Failed to fetch adjacent posts:', error);
    return { prev: null, next: null };
  }
}

/**
 * 日付フォーマット関数（既存のformatDate関数と同じ）
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
