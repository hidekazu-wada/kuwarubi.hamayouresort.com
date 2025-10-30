import { client } from './microcms';
import type { Activity, MicroCMSListResponse } from '../types/microcms';

/**
 * 全てのアクティビティを取得
 */
export async function getAllActivities(): Promise<Activity[]> {
  try {
    const response = await client.get<MicroCMSListResponse<Activity>>({
      endpoint: 'activities',
      queries: {
        limit: 100, // 最大100件取得
        orders: '-createdAt', // 作成日の降順
      },
    });
    return response.contents;
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    return [];
  }
}

/**
 * slugから個別のアクティビティを取得
 */
export async function getActivityBySlug(
  slug: string
): Promise<Activity | null> {
  try {
    const response = await client.get<MicroCMSListResponse<Activity>>({
      endpoint: 'activities',
      queries: {
        filters: `slug[equals]${slug}`,
        limit: 1,
      },
    });
    return response.contents[0] || null;
  } catch (error) {
    console.error(`Failed to fetch activity with slug: ${slug}`, error);
    return null;
  }
}

/**
 * TOPページ用：TOPページ表示するアクティビティを取得（表示順序でソート）
 */
export async function getTopPageActivities(): Promise<Activity[]> {
  try {
    const response = await client.get<MicroCMSListResponse<Activity>>({
      endpoint: 'activities',
      queries: {
        filters: 'showOnTop[equals]true',
        orders: 'displayOrder', // 表示順序でソート（昇順）
        limit: 100,
      },
    });
    return response.contents;
  } catch (error) {
    console.error('Failed to fetch top page activities:', error);
    return [];
  }
}
