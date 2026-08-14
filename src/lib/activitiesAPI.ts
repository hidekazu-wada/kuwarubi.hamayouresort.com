// アクティビティの取得
//
// もともと microCMS を叩いていたが、運用開始までサイト内管理に戻したため
// src/data/activities.ts を読むだけになっている。
// 呼び出し側の型と関数名はそのまま残してあるので、CMSに戻すときは
// この中身を差し替えるだけで済む。

import { activities, type Activity } from '../data/activities';

export type { Activity };

/**
 * 全てのアクティビティを取得
 */
export async function getAllActivities(): Promise<Activity[]> {
  return [...activities];
}

/**
 * slugから個別のアクティビティを取得
 */
export async function getActivityBySlug(slug: string): Promise<Activity | null> {
  return activities.find((a) => a.slug === slug) ?? null;
}

/**
 * TOPページ用：TOPページに表示するアクティビティを取得（表示順序でソート）
 */
export async function getTopPageActivities(): Promise<Activity[]> {
  return activities
    .filter((a) => a.showOnTop)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
