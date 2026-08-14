// アクティビティの取得
//
// もともと microCMS を叩いていたが、運用開始までサイト内管理に戻したため
// src/data/activities.ts を読むだけになっている。
// 呼び出し側の型と関数名はそのまま残してあるので、CMSに戻すときは
// この中身を差し替えるだけで済む。
//
// published: false のものは、ここで落としてページ側に渡さない。
// 一覧・詳細ページ・サイトマップのどこにも出さないため、
// 「未公開なのに直リンクで見えてしまう」状態を作らない方針。

import { activities, type Activity } from '../data/activities';

export type { Activity };

/** 公開中のものだけ。表示に使うのは基本これ */
const publishedActivities = activities.filter((a) => a.published);

/**
 * 全てのアクティビティを取得（公開中のみ）
 */
export async function getAllActivities(): Promise<Activity[]> {
  return [...publishedActivities];
}

/**
 * slugから個別のアクティビティを取得（公開中のみ）
 */
export async function getActivityBySlug(slug: string): Promise<Activity | null> {
  return publishedActivities.find((a) => a.slug === slug) ?? null;
}

/**
 * TOPページ用：TOPページに表示するアクティビティを取得（表示順序でソート）
 */
export async function getTopPageActivities(): Promise<Activity[]> {
  return publishedActivities
    .filter((a) => a.showOnTop)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * 公開中の件数。TOPの「◯種類のアクティビティ」表記に使う
 */
export async function getPublishedActivityCount(): Promise<number> {
  return publishedActivities.length;
}

/**
 * 未公開分も含めた全件。
 * 公開前の原稿確認など、ページ生成以外の用途にだけ使うこと。
 * これをページの getStaticPaths に渡すと未公開ページが出力されてしまう。
 */
export async function getAllActivitiesIncludingDrafts(): Promise<Activity[]> {
  return [...activities];
}
