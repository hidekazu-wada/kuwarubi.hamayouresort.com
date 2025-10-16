# CLAUDE.md - プロジェクトガイド

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 📚 ドキュメント構成

プロジェクトに関する詳細情報は、以下のセクションファイルに分割されています：

### 🎯 基本情報

- [プロジェクト基本情報](./docs/claude-info/01-project-basics.md)
  - プロジェクト概要、技術スタック、開発コマンド、プロジェクト構造

### 🏗️ アーキテクチャ・設計

- [アーキテクチャ設計](./docs/claude-info/02-architecture.md)
  - コンポーネント設計思想、レイアウト設計、Islands Architecture

### 🎨 スタイリング

- [SCSS使用ガイド](./docs/claude-info/03-scss-guide.md)
  - BEM記法、SCSSミックスイン、レスポンシブ対応

### ⚡ JavaScript実装

- [JavaScript実装ガイド](./docs/claude-info/04-javascript.md)
  - メニューシステム、モーダル、BottomBar制御
- [Swiperライブラリ](./docs/claude-info/05-swiper.md)
  - Swiperの独立実装パターン、命名規則
- [GSAPアニメーション](./docs/claude-info/06-gsap.md)
  - パララックス効果、ScrollTrigger

### 🧩 コンポーネント

- [共通UIコンポーネント](./docs/claude-info/07-components.md)
  - MoreButton、SectionWave、Breadcrumb

### 🔧 開発環境

- [TypeScript設定](./docs/claude-info/08-typescript.md)
  - 型定義システム、カスタム型定義

### 📄 ページシステム

- [アクティビティページ](./docs/claude-info/09-activities.md)
  - 動的ルーティング、データ管理
- [フィルタリング機能](./docs/claude-info/10-filtering.md)
  - コネクテッドフィルタリング、検索・ソート
- [FAQページ](./docs/claude-info/14-faq-page.md)
  - アコーディオン機能、スクロール連動ナビゲーション
- [コンタクトページ](./docs/claude-info/15-contact-page.md) 🆕
  - Formspree統合、フォームバリデーション、プライバシー同意管理

### 📖 開発ガイドライン

- [ベストプラクティス](./docs/claude-info/11-best-practices.md)
  - コーディング規約、パフォーマンス最適化
- [プロジェクトステータス](./docs/claude-info/12-milestones.md)
  - マイルストーン、完了済み実装、今後の予定
- [レイアウトリファクタリング](./docs/claude-info/13-layout-refactoring.md)
  - BaseLayout実装計画、フェーズ別作業内容

## 🚀 クイックスタート

開発を始める際は、まず以下のドキュメントを参照してください：

1. **初めての方**: [プロジェクト基本情報](./docs/claude-info/01-project-basics.md)
2. **コンポーネント開発**: [アーキテクチャ設計](./docs/claude-info/02-architecture.md) → [共通UIコンポーネント](./docs/claude-info/07-components.md)
3. **スタイル作業**: [SCSS使用ガイド](./docs/claude-info/03-scss-guide.md)
4. **機能追加**: [ベストプラクティス](./docs/claude-info/11-best-practices.md)

## 🔍 トピック別参照

### 新しいコンポーネントを作成する場合

- [アーキテクチャ設計](./docs/claude-info/02-architecture.md) - コンポーネント設計思想
- [SCSS使用ガイド](./docs/claude-info/03-scss-guide.md) - BEM記法とスタイル管理
- [共通UIコンポーネント](./docs/claude-info/07-components.md) - 再利用可能コンポーネントの例

### Swiperスライダーを追加する場合

- [Swiperライブラリ](./docs/claude-info/05-swiper.md) - 完全独立実装パターン

### フィルタ機能を拡張する場合

- [フィルタリング機能](./docs/claude-info/10-filtering.md) - 4つ目以降のフィルタ追加手順

### アニメーションを追加する場合

- [GSAPアニメーション](./docs/claude-info/06-gsap.md) - パララックス効果の実装

## 📌 重要な注意事項

- **BEM記法の厳守**: 全てのCSSクラスは`.block__element--modifier`形式
- **Swiper独立実装**: 各Swiperは`{page}-{section}__swiper`で名前空間化
- **TypeScript型安全性**: カスタム型定義で警告を解消
- **レスポンシブファースト**: モバイル基準で設計、PC拡張

## 🗂️ ドキュメント管理

このプロジェクトのドキュメントは、管理しやすさと参照性を考慮して以下のように構成されています：

- **メインファイル (CLAUDE.md)**: このファイル。ナビゲーションとクイックリファレンス
- **セクションファイル (docs/claude-info/)**: トピックごとに分割された詳細ドキュメント
- **バックアップ (CLAUDE.md.backup)**: 元の統合版ドキュメント（必要に応じて参照）

## 📝 ドキュメント更新時の注意

各セクションファイルを更新する際は、以下の点に注意してください：

1. **個別ファイルを直接編集**: 各トピックのファイル（`01-project-basics.md`等）を直接更新
2. **相互参照の確認**: 他のセクションとの関連性がある場合は、適切にリンクを更新
3. **このファイルは変更不要**: CLAUDE.md（このファイル）は基本的に変更不要。新セクション追加時のみ更新

---

## 🎯 完了: 過ごし方ページのコンポーネント化と動的ルーティング実装 ✅

### 📋 実装完了概要

**目的**: スケジュールデータを一元管理し、複数の過ごし方プランを動的に表示できるシステムを構築

**結果**: 完全に動的な過ごし方プラン管理システムが完成。新しいプランの追加は`schedules.ts`の編集のみで可能。

### 🎨 最終的な構成

- **データ管理**: `/src/data/schedules.ts` ですべての過ごし方データを一元管理
- **動的ルーティング**: `/enjoy/[slug].astro` で各過ごし方を表示
- **プラン一覧**: `/enjoy/index.astro` で全プランの一覧表示
- **実装済みプラン**:
  - `/enjoy/family-nature` → 子供と自然に触れ合う過ごし方
  - `/enjoy/couples` → カップル向けの過ごし方
  - `/enjoy/relaxation` → 非日常を満喫、ゆったりと過ごす
  - `/enjoy/sightseeing` → 近隣観光メインで最高拠点に楽しむ
  - `/enjoy/rainy-day` → 雨の日の過ごし方

### 📁 完成したファイル構造

```
src/
├── data/
│   └── schedules.ts              # 全プランデータの一元管理
├── components/
│   └── pages/
│       └── enjoy/
│           ├── Hero.astro        # 動的Heroコンポーネント
│           └── DaySchedule.astro # 動的スケジュール表示コンポーネント
├── pages/
│   └── enjoy/
│       ├── index.astro           # プラン一覧ページ
│       └── [slug].astro          # 動的ルーティングページ
└── assets/
    └── images/
        └── enjoy/
            ├── family-nature/     # 家族向けプランの画像
            ├── couples/          # カップル向けプランの画像
            ├── relaxation/       # リラクゼーションプランの画像
            ├── sightseeing/      # 観光プランの画像
            └── rainy-day/        # 雨の日プランの画像
```

### ✅ 完了済みの作業

#### **完了: 完全な動的ルーティングシステム（2025-01-XX）**

1. **schedules.tsの完全リファクタリング**
   - `StayPlan`型の実装（プラン全体を管理）
   - `HeroContent`型の実装（Heroセクションの動的管理）
   - `ScheduleItem`型の拡張（オプショナルリンク機能追加）
   - 5つのプランデータの完全実装
   - 画像インポートの統合管理
   - ヘルパー関数の実装（`getStayPlanBySlug`, `getAllStayPlanSlugs`）

2. **動的ルーティングページの実装**
   - `/enjoy/[slug].astro`の作成
   - `getStaticPaths()`による動的パス生成
   - プランデータの動的取得と表示
   - エラーハンドリング（404リダイレクト）

3. **プラン一覧ページの実装**
   - `/enjoy/index.astro`の作成
   - 全プランのカード表示
   - 各プランへのリンク機能

4. **Hero.astroコンポーネントの動的化**
   - `HeroContent`プロパティの実装
   - サブタイトル、メインタイトル、説明文の動的表示
   - 画像の動的表示とWebP最適化
   - メインタイトルの1行ずつ管理機能

5. **DaySchedule.astroコンポーネントの完全動的化**
   - `stayPlanId`による独立したSwiper管理
   - 動的クラス名生成（`${stayPlanId}-${dayId}__swiper-thumb`）
   - オプショナルリンク機能の実装
   - 条件付きレンダリングによる柔軟な表示制御

6. **画像構造の最適化**
   - プラン別ディレクトリ構造の実装
   - 各プランに`hero.jpg/png`と`day1/`, `day2/`ディレクトリ
   - 画像の複製と整理による管理性向上

7. **旧ファイルの整理**
   - `enjoy.astro`と`enjoy-rainy.astro`の削除
   - 動的ルーティングへの完全移行

### 🎯 実装された機能

#### **1. 動的プラン管理**

- 新しいプランの追加は`schedules.ts`の編集のみ
- プランごとの独立したHeroコンテンツ管理
- 柔軟なスケジュール構造（日数はプランごとに異なる）

#### **2. 動的リンク機能**

- スケジュールアイテムごとのオプショナルリンク
- リンクがない場合は要素自体が表示されない
- URLとテキストの動的管理

#### **3. 独立したSwiper管理**

- プラン×日ごとの完全独立したSwiperインスタンス
- 動的クラス名による名前空間化
- レスポンシブ対応の維持

#### **4. 画像最適化**

- WebP形式での自動変換
- レスポンシブ画像の自動生成
- プラン別の画像管理

### 🔧 技術的な実装詳細

#### **型定義システム**

```typescript
interface StayPlan {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  hero: HeroContent;
  days: DaySchedule[];
}

interface HeroContent {
  subtitleHighlight: string;
  subtitleText: string;
  mainTitle: string[]; // 1行ずつ管理
  description: string;
  heroImage: { src: any; alt: string };
}

interface ScheduleItem {
  time: string;
  thumbnailTitle: string;
  detailTitle: string;
  description: string;
  image: { src: any; alt: string };
  link?: { url: string; text: string }; // オプショナル
}
```

#### **動的ルーティング**

```astro
export async function getStaticPaths() {
  const slugs = getAllStayPlanSlugs();
  return slugs.map((slug) => ({ params: { slug } }));
}
```

#### **条件付きレンダリング**

```astro
{item.link && (
  <a href={item.link.url} class="schedule-slider__detail-link">
    <span>{item.link.text}</span>
  </a>
)}
```

### 🚀 新しいプラン追加手順

1. **画像の準備**

   ```
   src/assets/images/enjoy/[プラン名]/
   ├── hero.jpg
   ├── day1/
   │   └── slide-01.jpg ~ slide-07.jpg
   └── day2/
       └── slide-01.jpg ~ slide-07.jpg
   ```

2. **schedules.tsの編集**

   ```typescript
   export const newPlan: StayPlan = {
     id: 'new-plan',
     slug: 'new-plan',
     title: '新しいプラン',
     description: 'プランの説明',
     thumbnail: 'サムネイル説明',
     hero: {
       subtitleHighlight: 'ハイライト',
       subtitleText: 'サブタイトル',
       mainTitle: ['メインタイトル1', 'メインタイトル2'],
       description: '詳細説明',
       heroImage: { src: new_hero_image, alt: '画像説明' },
     },
     days: [day1Schedule, day2Schedule],
   };
   ```

3. **allStayPlans配列への追加**
   ```typescript
   export const allStayPlans: StayPlan[] = [
     familyNaturePlan,
     couplesPlan,
     relaxationPlan,
     sightseeingPlan,
     rainyDayPlan,
     newPlan, // ← 追加
   ];
   ```

### 🎉 成果

- **完全な動的システム**: 新しいプランの追加はデータ編集のみ
- **保守性の向上**: 一元管理によるデータの整合性確保
- **拡張性**: 新しい機能（リンク、画像等）の簡単な追加
- **パフォーマンス**: WebP最適化とレスポンシブ画像
- **ユーザビリティ**: 直感的なプラン一覧と詳細表示

---

## 🎯 完了: 団体利用ページの実装 ✅

### 📋 実装完了概要

**目的**: 団体利用向けの専用ページを作成し、サイドバーナビゲーションとの連携を実現

**結果**: 団体利用ページが完成し、サイドバーの「団体利用の方」ボタンからアクセス可能

### 🎨 実装内容

#### **1. 団体利用ページの作成**

- **ファイル**: `/src/pages/group.astro`
- **URL**: `/group`
- **機能**: 団体利用向けの専用ランディングページ

#### **2. コンポーネント構成**

- **Hero.astro**: 団体利用向けのヒーローセクション
- **画像管理**: 団体利用専用の画像アセット
- **レスポンシブ対応**: モバイル・タブレット・デスクトップ対応

#### **3. 画像アセット構造**

```
src/assets/images/group/
├── hero/
│   ├── decoration.svg
│   ├── img-01.png
│   └── img-02.jpg
└── slider/
    ├── category-circle.svg
    ├── slide-01.png
    ├── slide-02.png
    ├── slide-03.png
    ├── slide-04.png
    └── slide-05.png
```

#### **4. サイドバーナビゲーションの更新**

- **ファイル**: `/src/components/Sidebar.astro`
- **変更**: 「団体利用の方」ボタンのリンク先を`/group`に更新
- **機能**: サイドバーから団体利用ページへの直接アクセス

### 🔧 技術的な実装詳細

#### **ページ構造**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import LowerPageHeader from '../components/ui/LowerPageHeader.astro';
import Breadcrumb from '../components/ui/Breadcrumb.astro';
import Hero from '../components/pages/group/hero.astro';
---

<BaseLayout
  title="団体利用 | 光風閣くわるび"
  description="団体利用に関する情報"
  pageClass="main-content--group"
>
  <Hero />
  <!-- その他のコンテンツ -->
</BaseLayout>
```

#### **画像最適化**

- WebP形式での自動変換
- レスポンシブ画像の自動生成
- `getImage`関数による最適化

### 🎉 成果

- **専用ページ**: 団体利用向けの専用ランディングページ完成
- **ナビゲーション**: サイドバーからの直接アクセス実現
- **ユーザビリティ**: 団体利用者向けの最適化された体験
- **保守性**: コンポーネント化による管理しやすい構造

---

## 🎯 完了: TOPページActivitiesセクションの動的化 ✅

### 📋 実装完了概要

**目的**: TOPページのActivitiesスライダーのコンテンツをハードコードから`activities.ts`データベースを使用した動的表示に変更

**結果**: スタイルとスクリプトを完全に維持しながら、コンテンツのみが動的化されたシステムが完成。全8つのアクティビティがTOPページに表示可能。

### 🎨 実装内容

#### **1. activities.tsの拡張**

- **型定義追加**: `topPageDisplay`オプショナルフィールドの実装
- **画像インポート**: TOPページスライダー用の画像（ImageMetadata）
- **ヘルパー関数**: `getTopPageActivities()`の実装
- **データ追加**: 全8つのアクティビティにTOPページ表示用データを追加

#### **2. Activities.astroの動的化**

- **ファイル**: `/src/components/pages/top/Activities.astro`
- **変更**: ~300行のハードコードスライドを動的map()ループに置き換え
- **維持**: 全てのBEMクラス名、HTML構造、スタイル、Swiperスクリプトは完全に維持

### 📁 主な変更ファイル

```
src/
├── data/
│   └── activities.ts              # 型定義拡張、画像インポート、ヘルパー関数追加
└── components/
    └── pages/
        └── top/
            └── Activities.astro   # ハードコード→動的map()ループに変更
```

### 🔧 技術的な実装詳細

#### **型定義拡張**

```typescript
export interface Activity {
  // 既存フィールド...

  // TOPページスライダー表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean;           // TOPページに表示するか
    slideImage: any;              // スライダー用画像（ImageMetadata）
    catchphrase: string;          // キャッチコピー
    titleColorClass?: string;     // タイトルの色クラス
    displayOrder: number;         // 表示順序（1から開始）
  };
}
```

#### **画像インポート（ImageMetadata方式）**

```typescript
// TOPページActivitiesスライダー用画像
import TopSlide01 from '../assets/images/top/activities/slide-01.png';
import TopSlide02 from '../assets/images/top/activities/slide-02.png';
import TopSlide03 from '../assets/images/top/activities/slide-03.png';
import TopSlide04 from '../assets/images/top/activities/slide-04.png';
```

#### **ヘルパー関数**

```typescript
/**
 * TOPページに表示するアクティビティを取得（表示順序でソート）
 * @returns TOPページ表示用のアクティビティ配列
 */
export function getTopPageActivities(): Activity[] {
  return activities
    .filter((activity) => activity.topPageDisplay?.showOnTop)
    .sort(
      (a, b) =>
        (a.topPageDisplay?.displayOrder || 0) -
        (b.topPageDisplay?.displayOrder || 0),
    );
}
```

#### **動的レンダリング（Activities.astro）**

**変更前**: ~300行のハードコードされたスライド

**変更後**: 動的map()ループ

```astro
---
import { getImage } from 'astro:assets';
import { getTopPageActivities } from '../../../data/activities';

const topActivities = getTopPageActivities();

// 各アクティビティのスライド画像を最適化
const optimizedActivities = await Promise.all(
  topActivities.map(async (activity) => {
    const optimizedImage = await getImage({
      src: activity.topPageDisplay!.slideImage,
      format: 'webp',
      widths: [800],
    });
    return {
      ...activity,
      optimizedSlideImage: optimizedImage,
    };
  }),
);
---

<div class="swiper-wrapper">
  {optimizedActivities.map((activity) => (
    <div class="swiper-slide">
      <div class="top-activities__item">
        <a href={`/activities/${activity.slug}`} class="top-activities__link">
          <!-- 画像、タイトル、メタ情報など -->
        </a>
      </div>
    </div>
  ))}
</div>
```

### ⚙️ 実装された機能

#### **1. 完全な動的コンテンツ管理**

- TOPページに表示するアクティビティを`activities.ts`で一元管理
- 表示順序の柔軟な制御（`displayOrder`フィールド）
- 表示/非表示の簡単な切り替え（`showOnTop`フラグ）

#### **2. 画像最適化**

- `getImage()`によるWebP変換
- レスポンシブ画像の自動生成
- ImageMetadata型による型安全性

#### **3. 後方互換性**

- `topPageDisplay`はオプショナルフィールド
- 既存のアクティビティデータに影響なし

### 🎉 成果

- **保守性の向上**: TOPページコンテンツの変更は`activities.ts`の編集のみ
- **一貫性の確保**: 単一データソースから複数ページへの展開
- **型安全性**: TypeScriptによる完全な型チェック
- **パフォーマンス**: WebP最適化とレスポンシブ画像
- **拡張性**: 新しいアクティビティの追加が容易

---

## ⚠️ 検証が必要な項目

### 🔍 画像処理の2つのアプローチ

プロジェクト内で画像を扱う方法が2つ存在することが判明しました。

#### **方法1: ImageMetadataインポート方式（現在使用中）**

**使用場所**: TOPページActivitiesスライダー、過ごし方ページ（schedules.ts）

```typescript
// データファイル内でImageMetadataとして直接インポート
import TopSlide01 from '../assets/images/top/activities/slide-01.png';

export const activity = {
  topPageDisplay: {
    slideImage: TopSlide01,  // ImageMetadataオブジェクト
  },
};
```

```astro
<!-- コンポーネント側でgetImage()による最適化 -->
---
const optimizedImage = await getImage({
  src: activity.topPageDisplay.slideImage,
  format: 'webp',
  widths: [800],
});
---
```

**利点**:
- Astroの画像最適化機能をフル活用（WebP変換、複数解像度生成）
- TypeScriptによる型安全性（ImageMetadata型）
- ビルド時の存在チェック
- srcSet生成による最適なレスポンシブ画像

#### **方法2: 文字列パス方式（定義されているが未使用）**

**定義場所**: `activities.ts`の`images`フィールド

```typescript
export const activities: Activity[] = [
  {
    slug: 'sup',
    title: 'SUP',
    // ...
    images: [
      '/assets/images/activities/sup/gallery-01.jpg',
      '/assets/images/activities/sup/gallery-02.jpg',
      // ...
    ],
  },
];
```

**現状**: このimagesフィールドは**どのコンポーネントでも使用されていない**

**確認結果**:
- `/src/pages/activities/[slug].astro` → ハードコードされた画像インポートを使用
- `/src/pages/activities/index.astro` → ハードコードされた画像インポートを使用
- その他のページ → imagesフィールドを参照していない

### 📋 検証タスク

以下の点について今後検証が必要です：

1. **imagesフィールドの使用意図**
   - 元々どのような用途で定義されたのか？
   - 将来的にギャラリー機能で使用する予定があるのか？

2. **統一の必要性**
   - 2つの方式を併用する明確な理由があるか？
   - ImageMetadata方式に統一すべきか？

3. **パフォーマンスへの影響**
   - 文字列パス方式でもAstroの最適化は可能か？
   - どちらの方式がより効率的か？

4. **今後の方針**
   - 新しいページ/コンポーネント作成時の推奨方式は？
   - データ構造のリファクタリングが必要か？

### 💡 推奨事項（暫定）

現時点では以下のアプローチを推奨します：

- **新規実装**: ImageMetadata方式を使用（型安全性と最適化のメリット）
- **既存のimagesフィールド**: 使用予定が明確になるまで残す
- **ドキュメント化**: この2つの方式の違いと使い分けを明記

---
