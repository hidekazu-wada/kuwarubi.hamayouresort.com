# Phase 4: コード移行ガイド

**作成日**: 2025-01-XX

**目的**: activities.tsからmicroCMS APIへの完全移行

**所要時間**: 約9時間

---

## 📋 目次

1. [microCMS SDKインストール](#1-microcms-sdkインストール)
2. [型定義ファイルの作成](#2-型定義ファイルの作成)
3. [画像ヘルパー関数の作成](#3-画像ヘルパー関数の作成)
4. [詳細ページの更新](#4-詳細ページの更新)
5. [一覧ページの更新](#5-一覧ページの更新)
6. [TOPページの更新](#6-topページの更新)
7. [ビルドテストと動作確認](#7-ビルドテストと動作確認)

---

## 1. microCMS SDKインストール

### Step 1-1: パッケージのインストール

プロジェクトルートで以下のコマンドを実行:

```bash
npm install microcms-js-sdk
```

または

```bash
yarn add microcms-js-sdk
```

### Step 1-2: インストール確認

`package.json` に以下が追加されていることを確認:

```json
{
  "dependencies": {
    "microcms-js-sdk": "^3.1.2"
  }
}
```

### Step 1-3: TypeScript型定義の確認

microCMS SDKにはTypeScript型定義が含まれているため、追加のインストールは不要です。

---

## 2. 型定義ファイルの作成

### ファイル: `/src/types/microcms.ts`

このファイルは既に作成済みです。内容は以下の通りです:

```typescript
// microCMS APIレスポンス用の型定義

/**
 * microCMSの画像フィールド型
 */
export interface MicroCMSImage {
  url: string;
  width: number;
  height: number;
}

/**
 * microCMS Activityコンテンツ型
 * activities.tsのActivity interfaceをmicroCMS用に変換
 */
export interface Activity {
  // microCMS標準フィールド
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;

  // 基本情報
  slug: string;
  title: string;
  category: string;

  // 画像
  gallery: MicroCMSImage[];
  pointBackgroundImage: MicroCMSImage;

  // TOPページ表示設定
  showOnTop: boolean;
  topPageCatchphrase?: string;
  topPageTitleColorClass?: string;
  displayOrder?: number;

  // 詳細コンテンツ
  introTitle: string;
  introText: string;

  pointTitleLine1: string;
  pointTitleLine2?: string;
  pointDescription: string;

  // 繰り返しフィールド: 詳細情報
  displayInfo: Array<{
    fieldId: string;
    term: string;
    description: string;
    note?: string;
  }>;

  // 繰り返しフィールド: 体験の流れ
  flow: Array<{
    fieldId: string;
    stepNumber: string;
    title: string;
    description: string;
  }>;

  // 繰り返しフィールド: 予約方法
  reservation: Array<{
    fieldId: string;
    label: string;
    value: string;
    link: string;
    hours: string;
  }>;

  // 繰り返しフィールド: バッジ
  badges: Array<{
    fieldId: string;
    type: 'reservation' | 'group';
    text: string;
  }>;

  // メタ情報
  isPopular: boolean;
  priceAdult: number;

  // フィルタリング用データ
  filterDurationHours?: number;
  filterDurationMinutes?: number;
  filterWeather?: 'all' | 'sunny' | 'rainy';
  filterSeasons?: string[];
}

/**
 * microCMS APIレスポンス型（リスト取得）
 */
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

/**
 * microCMS APIレスポンス型（単一コンテンツ取得）
 */
export type MicroCMSContentResponse<T> = T;
```

---

## 3. 画像ヘルパー関数の作成

### ファイル: `/src/utils/image.ts`

このファイルも既に作成済みです。内容は以下の通りです:

```typescript
/**
 * microCMS画像最適化ヘルパー関数
 *
 * microCMSの画像URLにクエリパラメータを追加して最適化します
 */

/**
 * 画像最適化オプション
 */
export interface ImageOptimizationOptions {
  width?: number;
  format?: 'webp' | 'jpg' | 'png';
  quality?: number; // 1-100
  fit?: 'crop' | 'contain' | 'cover';
}

/**
 * microCMSの画像URLを最適化
 *
 * @param url microCMSから取得した画像URL
 * @param options 最適化オプション
 * @returns 最適化された画像URL
 *
 * @example
 * const optimizedUrl = optimizeMicroCMSImage(
 *   'https://images.microcms-assets.io/assets/xxx/yyy.jpg',
 *   { width: 1050, format: 'webp', quality: 80 }
 * );
 */
export function optimizeMicroCMSImage(
  url: string,
  options: ImageOptimizationOptions = {}
): string {
  const params = new URLSearchParams();

  if (options.width) params.set('w', options.width.toString());
  if (options.format) params.set('fm', options.format);
  if (options.quality) params.set('q', options.quality.toString());
  if (options.fit) params.set('fit', options.fit);

  return `${url}?${params.toString()}`;
}

/**
 * レスポンシブ画像のsrcset生成
 *
 * @param url microCMSから取得した画像URL
 * @param widths 生成する幅の配列（例: [640, 1024, 1920]）
 * @param format 画像フォーマット（デフォルト: webp）
 * @returns srcset文字列
 *
 * @example
 * const srcset = generateSrcSet(
 *   'https://images.microcms-assets.io/assets/xxx/yyy.jpg',
 *   [580, 900, 1050]
 * );
 * // 結果: "https://...?w=580&fm=webp 580w, https://...?w=900&fm=webp 900w, ..."
 */
export function generateSrcSet(
  url: string,
  widths: number[],
  format: 'webp' | 'jpg' | 'png' = 'webp'
): string {
  return widths
    .map((width) => {
      const optimizedUrl = optimizeMicroCMSImage(url, { width, format });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}

/**
 * サムネイル画像URL生成（一覧ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化されたサムネイルURL
 */
export function getThumbnailUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 580,
    format: 'webp',
    quality: 80,
  });
}

/**
 * サムネイル画像srcset生成（一覧ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns srcset文字列
 */
export function getThumbnailSrcSet(url: string): string {
  return generateSrcSet(url, [580, 900, 1050]);
}

/**
 * ギャラリー画像URL生成（詳細ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化されたギャラリー画像URL
 */
export function getGalleryUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 1050,
    format: 'webp',
    quality: 85,
  });
}

/**
 * ギャラリー画像srcset生成（詳細ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns srcset文字列
 */
export function getGallerySrcSet(url: string): string {
  return generateSrcSet(url, [580, 900, 1050]);
}

/**
 * 背景画像URL生成（詳細ページポイントセクション用）
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化された背景画像URL
 */
export function getPointBackgroundUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 1920,
    format: 'webp',
    quality: 85,
  });
}

/**
 * TOPページスライダー画像URL生成
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化されたスライダー画像URL
 */
export function getTopSlideUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 800,
    format: 'webp',
    quality: 80,
  });
}
```

---

## 4. 詳細ページの更新

### 4-1. activities.tsのバックアップ

変更前に必ずバックアップを作成:

```bash
cp src/data/activities.ts src/data/activities.ts.backup
```

### 4-2. 環境変数の確認

`.env` ファイルが存在し、以下の変数が設定されていることを確認:

```env
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### 4-3. 詳細ページファイルの更新

**ファイル**: `/src/pages/activities/[slug].astro`

このファイルは約2260行あり、段階的に更新していきます。

#### 更新内容の概要

1. **インポート文の変更**
2. **getStaticPaths()の更新**（microCMS APIからデータ取得）
3. **画像最適化処理の変更**
4. **フィールド名の変更**（intro.title → introTitle等）

詳細な更新内容は別途提供します。

---

## 5. 一覧ページの更新

### ファイル: `/src/pages/activities/index.astro`

このファイルは約1249行あり、特にフィルタリングロジックの更新が重要です。

#### 更新内容の概要

1. **データ取得の変更**
2. **フィルタリングロジックの更新**（最重要）
3. **画像URLの変更**

詳細な更新内容は別途提供します。

---

## 6. TOPページの更新

### ファイル: `/src/components/pages/top/Activities.astro`

このファイルは約637行です。

#### 更新内容の概要

1. **データ取得とフィルタリング**（microCMS APIのfiltersとordersクエリ使用）
2. **画像処理の変更**

詳細な更新内容は別途提供します。

---

## 7. ビルドテストと動作確認

### 7-1. TypeScriptコンパイルチェック

```bash
npx tsc --noEmit
```

### 7-2. ローカルビルドテスト

```bash
npm run build
```

### 7-3. 開発サーバー起動

```bash
npm run dev
```

### 7-4. 確認すべきページ

- [ ] TOPページ: http://localhost:4321/
- [ ] 一覧ページ: http://localhost:4321/activities/
- [ ] 詳細ページ（9ページ全て）

---

## 📌 次のステップ

Phase 4のコード準備が完了したら、Phase 3（microCMS環境準備）と並行して進めることができます。

**Phase 3完了後の流れ**:
1. 環境変数を設定
2. `npm run dev` で開発サーバー起動
3. 各ページの動作確認
4. 問題があれば修正

---

**ドキュメント作成日**: 2025-01-XX
