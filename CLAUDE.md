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

## 🎯 完了: TOPページEnjoyセクションの動的化 ✅

### 📋 実装完了概要

**目的**: TOPページのEnjoyセクションのコンテンツをハードコードから`schedules.ts`データベースを使用した動的表示に変更

**結果**: スタイルとスクリプトを完全に維持しながら、コンテンツのみが動的化されたシステムが完成。全5つの過ごし方プランがTOPページに表示可能。

### 🎨 実装内容

#### **1. schedules.tsの拡張**

- **型定義追加**: `topPageDisplay`オプショナルフィールドの実装
- **画像インポート**: TOPページEnjoy用の画像（SP用×5、Tablet以上用×5）
- **データ追加**: 全5つのプランにTOPページ表示用データを追加

#### **2. Enjoy.astroの動的化**

- **ファイル**: `/src/components/pages/top/Enjoy.astro`
- **変更**: 5つのハードコードされたカードを動的map()ループに置き換え
- **維持**: 全てのBEMクラス名、HTML構造、スタイルは完全に維持

### 📁 主な変更ファイル

```
src/
├── data/
│   └── schedules.ts              # 型定義拡張、画像インポート、データ追加
└── components/
    └── pages/
        └── top/
            └── Enjoy.astro       # ハードコード→動的map()ループに変更
```

### 🔧 技術的な実装詳細

#### **型定義拡張**

```typescript
export interface StayPlan {
  // 既存フィールド...

  // TOPページ表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean;           // TOPページに表示するか
    titleLine1: string;           // タイトル1行目（緑色）
    titleLine2: string;           // タイトル2行目（青色）
    category: string;             // カテゴリーラベル（例:「Family」）
    imageSp: any;                 // スマホ用画像（ImageMetadata）
    imageTabletUp: any;           // タブレット以上用画像（ImageMetadata）
    imageAlt: string;             // 画像のalt属性
    displayOrder: number;         // 表示順序（1から開始）
  };
}
```

#### **画像インポート（ImageMetadata方式）**

```typescript
// TOPページEnjoyセクション用画像
import top_enjoy_01_sp from '../assets/images/top/enjoy/image-01-sp.png';
import top_enjoy_01_tablet from '../assets/images/top/enjoy/image-01-tablet-up.png';
import top_enjoy_02_sp from '../assets/images/top/enjoy/image-02-sp.png';
import top_enjoy_02_tablet from '../assets/images/top/enjoy/image-02-tablet-up.png';
// ... 03, 04, 05も同様
```

#### **データ対応表**

| displayOrder | プランID | titleLine1 | titleLine2 | category | SP画像 | Tablet画像 |
|:---:|---|---|---|---|---|---|
| 1 | family-nature | 子供と一緒に | 自然に触れたい方 | Family | image-01-sp.png | image-01-tablet-up.png |
| 2 | couples | カップル・夫婦で | 自然体験をしたい方 | Couple | image-02-sp.png | image-02-tablet-up.png |
| 3 | relaxation | 非日常を満喫 | ゆったりと過ごしたい方 | Comfortable | image-03-sp.png | image-03-tablet-up.png |
| 4 | sightseeing | 近隣観光メインで | 西湖を拠点に楽しみたい方 | Tourism | image-04-sp.png | image-04-tablet-up.png |
| 5 | rainy-day | 雨の日でも | 特別な体験をしたい方 | Rainy Day | image-05-sp.png | image-05-tablet-up.png |

#### **動的レンダリング（Enjoy.astro）**

**変更前**: 5つのハードコードされた`<li>`要素

**変更後**: 動的map()ループ

```astro
---
import { getImage } from 'astro:assets';
import { allStayPlans } from '../../../data/schedules';

// TOPページに表示するプランを取得（表示順序でソート）
const topPlans = allStayPlans
  .filter((plan) => plan.topPageDisplay?.showOnTop)
  .sort(
    (a, b) =>
      (a.topPageDisplay?.displayOrder || 0) -
      (b.topPageDisplay?.displayOrder || 0),
  );

// 各プランの画像を最適化（SP用とTablet以上用）
const optimizedPlans = await Promise.all(
  topPlans.map(async (plan) => {
    const optimizedImageSp = await getImage({
      src: plan.topPageDisplay!.imageSp,
      format: 'webp',
      widths: [640],
    });
    const optimizedImageTabletUp = await getImage({
      src: plan.topPageDisplay!.imageTabletUp,
      format: 'webp',
      widths: [1680],
    });
    return {
      ...plan,
      optimizedImageSp,
      optimizedImageTabletUp,
    };
  }),
);
---

<ul class="enjoy__list">
  {optimizedPlans.map((plan) => (
    <li class="enjoy__item">
      <a href={`/enjoy/${plan.slug}`}>
        <article class="enjoy__card">
          <header class="enjoy__card-header">
            <h3 class="enjoy__card-title">
              <span class="enjoy__card-title-line first">
                {plan.topPageDisplay!.titleLine1}
              </span>
              <span class="enjoy__card-title-line second">
                {plan.topPageDisplay!.titleLine2}
              </span>
            </h3>
          </header>
          <div class="enjoy__card-content">
            <div class="enjoy__card-media">
              <picture class="enjoy__card-image">
                {/* レスポンシブ画像 */}
                <source media="(min-width: 1024px)" srcset={plan.optimizedImageTabletUp.src} />
                <source media="(min-width: 744px)" srcset={plan.optimizedImageSp.src} />
                <img src={plan.optimizedImageSp.src} alt={plan.topPageDisplay!.imageAlt} />
              </picture>
              <p class="enjoy__card-category">
                {plan.topPageDisplay!.category}
              </p>
              <!-- ボタンなど -->
            </div>
          </div>
        </article>
      </a>
    </li>
  ))}
</ul>
```

### ⚙️ 実装された機能

#### **1. 完全な動的コンテンツ管理**

- TOPページに表示するプランを`schedules.ts`で一元管理
- 表示順序の柔軟な制御（`displayOrder`フィールド）
- 表示/非表示の簡単な切り替え（`showOnTop`フラグ）

#### **2. レスポンシブ画像最適化**

- SP用とTablet以上用の2種類の画像を個別に最適化
- `getImage()`によるWebP変換
- picture要素による適切な画像の配信

#### **3. データの一元管理**

- `schedules.ts`で過ごし方プランの全データを管理
- TOPページと詳細ページで同じデータソースを使用
- データの整合性を保証

#### **4. 後方互換性**

- `topPageDisplay`はオプショナルフィールド
- 既存のプランデータに影響なし

### 🎉 成果

- **保守性の向上**: TOPページコンテンツの変更は`schedules.ts`の編集のみ
- **一貫性の確保**: 単一データソースから複数ページへの展開
- **型安全性**: TypeScriptによる完全な型チェック
- **パフォーマンス**: WebP最適化とレスポンシブ画像（2種類）
- **拡張性**: 新しいプランの追加が容易
- **スタイル完全維持**: BEMクラス名、HTML構造、SCSSが100%維持

---

## 🎯 完了: TOPページNewsセクションの動的化 ✅

### 📋 実装完了概要

**目的**: TOPページのNewsセクション（INFORMATIONとEVENT）のコンテンツをハードコードから`information.ts`データベースを使用した動的表示に変更

**結果**: スタイルとスクリプトを完全に維持しながら、コンテンツのみが動的化されたシステムが完成。最新の「お知らせ」と「イベント情報」が自動的にTOPページに表示される。

### 🎨 実装内容

#### **1. information.tsへのヘルパー関数追加**

- **関数1**: `getTopPageInformationPosts()` - 「お知らせ」カテゴリーの最新4件を取得
- **関数2**: `getTopPageEventPosts()` - 「イベント情報」カテゴリーの最新4件を取得
- **機能**: カテゴリーフィルタリング → 日付降順ソート → 最大4件取得

#### **2. News.astroの動的化**

- **ファイル**: `/src/components/pages/top/News.astro`
- **変更**: INFORMATIONとEVENTの各4つのハードコードされた`<li>`を動的map()ループに置き換え
- **リンク更新**: MoreButtonのリンク先をクエリパラメータ付きのURLに更新
- **維持**: 全てのBEMクラス名、HTML構造、スタイルは完全に維持

### 📁 主な変更ファイル

```
src/
├── data/
│   └── information.ts           # ヘルパー関数追加
└── components/
    └── pages/
        └── top/
            └── News.astro       # ハードコード→動的map()ループに変更
```

### 🔧 技術的な実装詳細

#### **ヘルパー関数（information.ts）**

```typescript
// Helper function to get latest information posts for TOP page (max 4)
export function getTopPageInformationPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.category === 'お知らせ')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}

// Helper function to get latest event posts for TOP page (max 4)
export function getTopPageEventPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.category === 'イベント情報')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}
```

**処理フロー**:
1. `filter()` - 指定カテゴリーのみ抽出
2. `sort()` - 日付の新しい順に並び替え（`new Date().getTime()`で数値比較）
3. `slice(0, 4)` - 最大4件取得（データが不足している場合は存在する分のみ）

#### **動的レンダリング（News.astro フロントマター）**

```astro
---
import MoreButton from '../../ui/MoreButton.astro';
import {
  getTopPageInformationPosts,
  getTopPageEventPosts,
  formatDate,
} from '../../../data/information';

// TOPページ用のお知らせとイベント情報を取得
const informationPosts = getTopPageInformationPosts();
const eventPosts = getTopPageEventPosts();
---
```

#### **動的レンダリング（INFORMATIONセクション）**

**変更前**: 4つのハードコードされた`<li>`要素

**変更後**: 動的map()ループ

```astro
<ul class="news__list">
  {
    informationPosts.map((post) => {
      const formattedDate = formatDate(post.date);
      return (
        <li class="news__item">
          <a href={`/information/${post.slug}`} class="news__link">
            <article class="news__article">
              <time class="news__date" datetime={post.date}>
                {formattedDate.full}
              </time>
              <p class="news__text">{post.title}</p>
            </article>
          </a>
        </li>
      );
    })
  }
</ul>
```

**重要なポイント**:
- `formatDate(post.date)` - "2024.06.25"形式に変換
- `datetime={post.date}` - ISO形式の日付を属性に設定（SEO対策）
- `href={/information/${post.slug}}` - 各投稿の詳細ページへリンク

#### **MoreButtonリンク先の更新**

```astro
<!-- INFORMATIONセクション -->
<MoreButton
  href="/information?category=お知らせ"
  textColor="var(--green_3, #43512A)"
  hoverColor="var(--green_2, #adc400)"
  arrowColor="#43512A"
/>

<!-- EVENTセクション -->
<MoreButton
  href="/information?category=イベント情報"
  textColor="var(--green_3, #43512A)"
  hoverColor="var(--blue_5, #026995)"
  arrowColor="#43512A"
/>
```

**機能**: クエリパラメータでフィルタリングされた一覧ページへ遷移

### ⚙️ 実装された機能

#### **1. 完全な動的コンテンツ管理**

- TOPページに表示するニュースを`information.ts`で一元管理
- カテゴリー別の自動フィルタリング
- 日付の新しい順に自動ソート
- 最大4件の自動取得（件数不足時は存在する分のみ表示）

#### **2. 柔軟なデータ表示**

- 「お知らせ」が3件しかない場合 → 3件表示
- 「イベント情報」が1件しかない場合 → 1件表示
- 将来データが増えても自動的に最新4件を表示

#### **3. フィルタリング連携**

- MoreButtonから一覧ページへ遷移
- クエリパラメータでカテゴリーフィルタリング
- `/information?category=お知らせ`
- `/information?category=イベント情報`

#### **4. データの一元管理**

- `information.ts`でニュース/イベント/ブログの全データを管理
- TOPページと一覧ページで同じデータソースを使用
- データの整合性を保証

### 📊 現在のデータ状況

| カテゴリー | 投稿数 | TOP表示 | 備考 |
|:---:|:---:|:---:|---|
| お知らせ | 3件 | 3件 | 最新3件を表示 |
| イベント情報 | 1件 | 1件 | 最新1件を表示 |
| ブログ記事 | 4件 | 非表示 | TOPページには表示しない |

**将来の拡張**: データが増えれば自動的に最新4件まで表示

### 🎉 成果

- **保守性の向上**: TOPページコンテンツの変更は`information.ts`の編集のみ
- **一貫性の確保**: 単一データソースから複数ページへの展開
- **型安全性**: TypeScriptによる完全な型チェック
- **柔軟性**: データ件数の変動に自動対応
- **スタイル完全維持**: BEMクラス名、HTML構造、SCSSが100%維持
- **SEO対策**: time要素のdatetime属性による構造化データ

---

## 🎯 完了: TOPページBlogセクションの動的化 ✅

### 📋 実装完了概要

**目的**: TOPページのBlogセクションのコンテンツをハードコードから`information.ts`データベースを使用した動的表示に変更し、最新のブログ記事を自動的に表示できるようにする

**結果**: スタイルとスクリプトを完全に維持しながら、コンテンツのみが動的化されたシステムが完成。最新10件のブログ記事が日付降順でTOPページに表示される。

### 🎨 実装内容

#### **1. information.tsの拡張**

- **型定義追加**: `topPageDisplay`オプショナルフィールドの実装
- **画像インポート**: TOPページBlogスライダー用の画像（ImageMetadata）
- **ヘルパー関数**: `getTopPageBlogPosts()`の実装（最大10件、日付降順）
- **データ追加**: 合計10件のブログ記事にTOPページ表示用データを追加

#### **2. Blog.astroの動的化**

- **ファイル**: `/src/components/pages/top/Blog.astro`
- **変更**: 9つのハードコードされたスライドを動的map()ループに置き換え
- **維持**: 全てのBEMクラス名、HTML構造、スタイル、Swiperスクリプトは完全に維持

### 📁 主な変更ファイル

```
src/
├── data/
│   └── information.ts           # 型定義拡張、画像インポート、ヘルパー関数追加
├── components/
│   └── pages/
│       └── top/
│           └── Blog.astro       # ハードコード→動的map()ループに変更
└── assets/
    └── images/
        └── top/
            └── blog/
                ├── slide-01.png  # ブログスライダー用画像
                ├── slide-02.png
                ├── slide-03.png
                └── slide-04.png
```

### 🔧 技術的な実装詳細

#### **型定義拡張（information.ts）**

```typescript
export interface InformationPost {
  id: string;
  slug: string;
  date: string;
  category: 'お知らせ' | 'イベント情報' | 'ブログ記事';
  title: string;
  content: string;
  thumbnail?: string;

  // TOPページBlogスライダー表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean;           // TOPページに表示するか
    slideImage: any;              // スライダー用画像（ImageMetadata）
    displayOrder: number;         // 表示順序（1から開始）
  };
}
```

#### **画像インポート（ImageMetadata方式）**

```typescript
// TOPページBlogセクション用画像インポート
import TopBlogSlide01 from '../assets/images/top/blog/slide-01.png';
import TopBlogSlide02 from '../assets/images/top/blog/slide-02.png';
import TopBlogSlide03 from '../assets/images/top/blog/slide-03.png';
import TopBlogSlide04 from '../assets/images/top/blog/slide-04.png';
```

#### **ヘルパー関数**

```typescript
// Helper function to get blog posts for TOP page Blog slider (最大10件、日付降順)
export function getTopPageBlogPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.topPageDisplay?.showOnTop)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
}
```

**処理フロー**:
1. `filter()` - `topPageDisplay.showOnTop === true`の記事のみ抽出
2. `sort()` - 日付の新しい順に並び替え（`new Date().getTime()`で数値比較）
3. `slice(0, 10)` - 最大10件取得

#### **動的レンダリング（Blog.astro フロントマター）**

```astro
---
import { getImage } from 'astro:assets';
import MoreButton from '../../ui/MoreButton.astro';
import SectionWave from '../../ui/SectionWave.astro';
import { getTopPageBlogPosts, formatDate } from '../../../data/information';
// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// TOPページBlogスライダー用のブログ記事を取得
const blogPosts = getTopPageBlogPosts();

// 各ブログ記事のスライド画像を最適化
const optimizedBlogPosts = await Promise.all(
  blogPosts.map(async (post) => {
    const optimizedImage = await getImage({
      src: post.topPageDisplay!.slideImage,
      format: 'webp',
      widths: [500],
    });
    return {
      ...post,
      optimizedSlideImage: optimizedImage,
    };
  }),
);
---
```

#### **動的レンダリング（スライダー部分）**

**変更前**: 9つのハードコードされた`<div class="swiper-slide">`要素

**変更後**: 動的map()ループ

```astro
<div class="swiper-wrapper">
  {
    optimizedBlogPosts.map((post) => {
      const formattedDate = formatDate(post.date);
      return (
        <div class="swiper-slide">
          <article class="top-blog__article">
            <div class="top-blog__image-container">
              <a href={`/information/${post.slug}`} class="top-blog__image-link">
                <picture class="top-blog__image">
                  <source media="(min-width: 1024px)" srcset={post.optimizedSlideImage.srcSet.toString()} />
                  <source media="(min-width: 744px)" srcset={post.optimizedSlideImage.srcSet.toString()} />
                  <img src={post.optimizedSlideImage.src} alt={post.title} />
                </picture>
                <time class="top-blog__date" datetime={post.date}>
                  <span class="top-blog__date-month">
                    {formattedDate.year}.{formattedDate.month}
                  </span>
                  <span class="top-blog__date-day">{formattedDate.day}</span>
                </time>
              </a>
            </div>
            <h3 class="top-blog__title">
              <a href={`/information/${post.slug}`} class="top-blog__title-link">
                {post.title}
              </a>
            </h3>
          </article>
        </div>
      );
    })
  }
</div>
```

**重要なポイント**:
- `formatDate(post.date)` - 日付を年.月と日に分割して表示
- `datetime={post.date}` - ISO形式の日付を属性に設定（SEO対策）
- `href={/information/${post.slug}}` - 各ブログ記事の詳細ページへリンク
- WebP最適化とsrcSet生成による最適なレスポンシブ画像

#### **MoreButtonリンク先の更新**

```astro
<MoreButton
  href="/information?category=ブログ記事"
  textColor="var(--blue_5, #026995)"
  hoverColor="var(--green_2, #adc400)"
  arrowColor="#026995"
/>
```

**機能**: クエリパラメータでフィルタリングされたブログ一覧ページへ遷移

### ⚙️ 実装された機能

#### **1. 完全な動的コンテンツ管理**

- TOPページに表示するブログ記事を`information.ts`で一元管理
- 日付の新しい順に自動ソート
- 最大10件の自動取得

#### **2. 画像最適化**

- `getImage()`によるWebP変換
- レスポンシブ画像の自動生成（srcSet）
- ImageMetadata型による型安全性

#### **3. Swiper自動対応**

- スライド数が変わってもSwiperが自動的に対応
- ページネーションも自動生成
- スクリプトとスタイルは一切変更不要

#### **4. 後方互換性**

- `topPageDisplay`はオプショナルフィールド
- 既存のinformationデータに影響なし
- 段階的なデータ移行が可能

### 📊 実装データ

合計10件のブログ記事を実装：

| ID | タイトル | 日付 | displayOrder | 画像 |
|:---:|---|---|:---:|---|
| info-004 | 西湖周辺の隠れた絶景スポット | 2024-06-25 | 1 | slide-01.png |
| info-005 | 夏のアクティビティおすすめ5選 | 2024-05-15 | 2 | slide-02.png |
| info-006 | 地元食材を使った季節の料理 | 2024-04-10 | 3 | slide-03.png |
| info-007 | ファミリーで楽しむ自然体験 | 2024-03-05 | 4 | slide-04.png |
| info-009 | 冬のアクティビティ特集 | 2024-02-20 | 5 | slide-01.png |
| info-010 | バレンタイン特別プラン | 2024-02-10 | 6 | slide-02.png |
| info-011 | 新年のご挨拶 | 2024-01-25 | 7 | slide-03.png |
| info-012 | スキーシーズン到来 | 2024-01-15 | 8 | slide-04.png |
| info-013 | 年末年始営業のお知らせ | 2023-12-20 | 9 | slide-01.png |
| info-014 | クリスマスイベント | 2023-12-10 | 10 | slide-02.png |

**画像の再利用**: 4つの画像を10件の記事でローテーション使用

### 🎉 成果

- **保守性の向上**: TOPページコンテンツの変更は`information.ts`の編集のみ
- **一貫性の確保**: 単一データソースから複数ページへの展開
- **型安全性**: TypeScriptによる完全な型チェック
- **パフォーマンス**: WebP最適化とレスポンシブ画像
- **拡張性**: 新しいブログ記事の追加が容易
- **スタイル完全維持**: BEMクラス名、HTML構造、SCSS、Swiperスクリプトが100%維持
- **自動ソート**: 常に最新10件のブログ記事を日付降順で表示

### 🚀 新しいブログ記事追加手順

1. **画像の準備**
   ```
   src/assets/images/top/blog/
   └── slide-XX.png  （既存のslide-01～04を使い回すか、新規追加）
   ```

2. **information.tsへの追加**
   ```typescript
   {
     id: 'info-015',
     slug: 'new-blog-post',
     date: '2024-07-01',
     category: 'ブログ記事',
     title: '新しいブログ記事のタイトル',
     content: `記事の内容...`,
     thumbnail: 'demo.png',
     topPageDisplay: {
       showOnTop: true,
       slideImage: TopBlogSlide01,  // 使用する画像を選択
       displayOrder: 11,  // 次の番号を指定（実際は日付順で表示）
     },
   }
   ```

3. **ビルド確認**
   ```bash
   npm run build
   ```

**注意**: `displayOrder`は現在使用されていません（日付降順ソートのため）。将来的に削除してもOK。

---

## 🚧 進行中: アクティビティデータのmicroCMS移行プロジェクト

### 📋 プロジェクト概要

**目的**: 現在`activities.ts`で管理しているアクティビティデータをmicroCMSへ移行し、コンテンツ管理をCMS化する

**最終ゴール**: アクティビティデータをmicroCMSで管理し、既存のマークアップ・スタイリング・スクリプトに一切の変更や不具合を生じさせない

**開始日**: 2025-01-XX

---

### 🎯 現状の把握

#### 移行対象
- **activities.ts**: 全アクティビティデータ
  - データ構造、型定義
  - 画像管理（ImageMetadata方式 vs 文字列パス方式）
  - ヘルパー関数

#### 使用箇所（推定）
- `/src/pages/activities/index.astro` - アクティビティ一覧ページ
- `/src/pages/activities/[slug].astro` - アクティビティ詳細ページ
- `/src/components/pages/top/Activities.astro` - TOPページActivitiesセクション
- その他、アクティビティデータを参照しているコンポーネント

#### 既存のmicroCMS導入状況
- ✅ microCMSアカウント・プロジェクト作成済み
- ✅ Information（お知らせ・イベント・ブログ）は既にmicroCMS化済み
- ⏳ Activities APIは未作成（これから作成）

---

### ⚠️ 重要な制約事項

#### 絶対に変更してはいけないもの
1. **マークアップ（HTML構造）**: BEMクラス名を含む全てのHTML構造を維持
2. **スタイリング（SCSS）**: 既存のスタイルに一切の影響を与えない
3. **スクリプト（JavaScript/TypeScript）**: Swiper、GSAP、その他のスクリプトの動作を維持
4. **URL構造**: `/activities/[slug]`のルーティングを維持

#### 考慮すべき点
- 画像管理方式の統一（microCMS画像管理機能を使用）
- データ構造の最適化（重複・未使用フィールドの整理）
- 型定義の調整（microCMS APIレスポンスに対応）
- ビルドパフォーマンス

---

### 📝 タスクのマイルストーン

#### **Phase 1: 現状調査**（Current Phase ⏳）

- [x] **Task 1-1**: プロジェクトタスクをCLAUDE.mdに記録
- [ ] **Task 1-2**: activities.tsの完全なデータ構造分析
  - 型定義（Activity interface）の全フィールド
  - 各フィールドの用途
  - データ件数
- [ ] **Task 1-3**: アクティビティデータを使用している全ファイルの特定
  - Grep/Globによるファイル検索
  - インポート文の特定
- [ ] **Task 1-4**: 各使用箇所でのデータ利用状況の詳細分析
  - どのフィールドがどこで使われているか
  - TOPページ、一覧ページ、詳細ページごとの使用状況
- [ ] **Task 1-5**: 重複データ・未使用フィールドの特定
  - `images`フィールド（文字列パス方式）の使用状況
  - `topPageDisplay`の使用状況
  - その他のオプショナルフィールド
- [ ] **Task 1-6**: 画像管理パターンの整理
  - ImageMetadata方式の使用箇所
  - 文字列パス方式の使用箇所
  - microCMS移行時の画像管理方針の決定

#### **Phase 2: microCMS移行計画の策定**（待機中 ⏸️）

- [ ] **Task 2-1**: microCMS APIスキーマ設計
  - activities.tsの型定義をもとにCMSフィールドを設計
  - 画像フィールドの設計（microCMS画像管理）
  - リレーションフィールドの検討
- [ ] **Task 2-2**: データマッピング計画
  - 既存データ → microCMSフィールドの対応表作成
  - 変換が必要なデータの特定
- [ ] **Task 2-3**: 移行手順書の作成
  - Step-by-Stepの移行手順
  - ロールバック手順
  - テスト計画

#### **Phase 3: microCMS環境準備**（待機中 ⏸️）

- [ ] **Task 3-1**: microCMS API作成（activities）
- [ ] **Task 3-2**: APIスキーマ設定
- [ ] **Task 3-3**: 画像アップロード
- [ ] **Task 3-4**: テストデータ登録
- [ ] **Task 3-5**: 環境変数設定（.env）

#### **Phase 4: コード移行**（待機中 ⏸️）

- [ ] **Task 4-1**: microCMSクライアント設定
- [ ] **Task 4-2**: 型定義の更新
- [ ] **Task 4-3**: データ取得処理の実装
- [ ] **Task 4-4**: 詳細ページ（[slug].astro）の更新
- [ ] **Task 4-5**: 一覧ページ（index.astro）の更新
- [ ] **Task 4-6**: TOPページ（Activities.astro）の更新
- [ ] **Task 4-7**: その他の使用箇所の更新

#### **Phase 5: テスト・検証**（待機中 ⏸️）

- [ ] **Task 5-1**: ローカル環境でのビルドテスト
- [ ] **Task 5-2**: 全ページの表示確認
- [ ] **Task 5-3**: スタイルの確認（視覚的な差異がないか）
- [ ] **Task 5-4**: スクリプトの動作確認（Swiper等）
- [ ] **Task 5-5**: レスポンシブ対応の確認
- [ ] **Task 5-6**: パフォーマンス測定

#### **Phase 6: 本番リリース**（待機中 ⏸️）

- [ ] **Task 6-1**: 本番環境へのデプロイ
- [ ] **Task 6-2**: 本番環境での動作確認
- [ ] **Task 6-3**: activities.tsファイルの削除または退避
- [ ] **Task 6-4**: ドキュメント更新（CLAUDE.md等）

---

### 🔍 調査項目の詳細

#### **1. データ構造分析で確認すること**
- [ ] Activity interfaceの全フィールドリスト
- [ ] 各フィールドの型
- [ ] オプショナルフィールドの特定
- [ ] ネストされたオブジェクトの構造（例: topPageDisplay）
- [ ] 配列フィールドの内容（例: images, tags）
- [ ] リレーション関係の有無

#### **2. 使用箇所の特定で確認すること**
- [ ] `import { ... } from '../../../data/activities'` のパターン
- [ ] `activities.ts`をインポートしている全ファイル
- [ ] ヘルパー関数の使用状況（例: `getActivityBySlug`, `getTopPageActivities`）
- [ ] コンポーネント内での直接参照

#### **3. 各使用箇所での利用状況で確認すること**
- [ ] TOPページ: どのフィールドを使用しているか
- [ ] 一覧ページ: どのフィールドを使用しているか
- [ ] 詳細ページ: どのフィールドを使用しているか
- [ ] フィルタリング機能: どのフィールドでフィルタリングしているか
- [ ] 検索機能: どのフィールドで検索しているか

#### **4. 画像管理の確認で確認すること**
- [ ] ImageMetadataとして直接インポートされている画像
- [ ] `topPageDisplay.slideImage`の使用状況
- [ ] `images`配列（文字列パス）の使用状況
- [ ] 詳細ページでの画像表示方法
- [ ] ギャラリー機能の有無

---

### 📊 現在の進捗状況

**現在のフェーズ**: Phase 1 - 現状調査

**完了タスク**:
- [x] プロジェクトタスクをCLAUDE.mdに記録

**進行中タスク**:
- [ ] activities.tsの完全なデータ構造分析（次のタスク）

**ブロッカー**: なし

---

### 📌 重要な注意事項

1. **段階的な移行**: 一度に全てを変更せず、段階的にテストしながら進める
2. **バックアップ**: 移行前に必ずactivities.tsのバックアップを取る
3. **並行稼働期間**: 移行中はactivities.tsとmicroCMSの両方が動作するよう、一時的に併存させる可能性も検討
4. **ロールバック計画**: 問題が発生した場合、即座に元に戻せる手順を確保
5. **型安全性**: TypeScriptの型定義を適切に維持し、コンパイルエラーが発生しないようにする

---

### 🔗 関連ドキュメント

- [アクティビティページ](./docs/claude-info/09-activities.md) - アクティビティシステムの仕様
- [フィルタリング機能](./docs/claude-info/10-filtering.md) - フィルタリングの実装詳細
- [ベストプラクティス](./docs/claude-info/11-best-practices.md) - コーディング規約
- [TypeScript設定](./docs/claude-info/08-typescript.md) - 型定義システム

---

### 📝 メモ・備考

- information.tsは既にmicroCMS化済み（ファイルは残っているが使用されていない）
- schedules.ts（過ごし方プラン）は今回の対象外
- 画像はmicroCMSの画像管理機能を使用する予定
- CLAUDE.mdに記載の「画像処理の2つのアプローチ」問題も、この移行で解決する

---

## 📘 Phase 1完了: 現状調査結果とmicroCMS移行計画書

### 📊 Phase 1 調査結果サマリー

**調査期間**: 2025-01-XX

**調査完了日**: 2025-01-XX

#### ✅ 完了した調査タスク

1. ✅ **activities.tsの完全なデータ構造分析**
2. ✅ **アクティビティデータを使用している全ファイルの特定**
3. ✅ **各使用箇所でのデータ利用状況の詳細分析**
4. ✅ **重複データ・未使用フィールドの特定**
5. ✅ **画像管理パターンの整理と移行方針の決定**

---

### 🔍 1. データ構造分析結果

#### **activities.ts 基本情報**

- **ファイルサイズ**: 780行
- **アクティビティ数**: 9件
- **画像総数**: 40枚（gallery×31, pointBackground×9）
- **型定義**: Activity interface（14フィールド）

#### **Activity Interface 完全フィールドリスト**

```typescript
export interface Activity {
  // 基本情報（必須）
  slug: string;                    // URL用スラッグ（例: 'sup'）
  title: string;                   // アクティビティ名（例: 'SUP'）
  category: string;                // カテゴリー（例: 'ウォーター'）

  // 画像管理（必須）
  images: {
    gallery: any[];                // ImageMetadata[] - ギャラリー画像（3-5枚）。1枚目をサムネイルとしても使用
    pointBackground: any;          // ImageMetadata - ポイントセクション背景
  };

  // TOPページ表示用（オプション）
  topPageDisplay?: {
    showOnTop: boolean;            // TOPページに表示するか（現状全てtrue）
    slideImage: any;               // ImageMetadata - TOPページスライダー用画像
    catchphrase: string;           // キャッチコピー（例: '水上散歩を楽しむ'）
    titleColorClass?: string;      // タイトル色クラス（例: 'color-blue'） ※非推奨、catchphraseColorを推奨
    displayOrder: number;          // 表示順序（1から開始、季節や人気度で調整）
  };

  // 詳細ページコンテンツ（必須）
  intro: {
    title: string;                 // イントロタイトル
    text: string;                  // イントロ本文
  };

  point: {
    titleLines: string[];          // ポイントタイトル（複数行）
    description: string;           // ポイント説明文
  };

  // 詳細情報配列（必須）
  about: Array<{
    term: string;                  // 項目名（例: '料金', '所要時間'）
    description: string;           // 項目内容
    note?: string;                 // 補足情報（オプション）
  }>;

  flow: Array<{
    stepNumber: string;            // ステップ番号（例: '01', '02'）
    title: string;                 // ステップタイトル
    description: string;           // ステップ説明
  }>;

  reservation: Array<{
    label: string;                 // 予約方法ラベル（例: '電話予約'）
    value: string;                 // 予約方法の値（例: '0555-82-2641'）
    link: string;                  // リンク（例: 'tel:0555-82-2641'）
    hours: string;                 // 受付時間（例: '9:00-18:00'）
  }>;

  // メタ情報（必須）
  badges: Array<{
    badge: '事前予約' | '当日予約' | '団体向け' | '個人向け';  // バッジ
  }>;

  isPopular: boolean;              // 人気アクティビティフラグ

  price: {
    adult: number;                 // 大人料金（円）
  };
}
```

#### **現在の9アクティビティ**

| No | slug | title | category | gallery枚数 | isPopular | showOnTop |
|:---:|---|---|---|:---:|:---:|:---:|
| 1 | sup | SUP | ウォーター | 5 | true | true |
| 2 | canoe | カヌー | ウォーター | 5 | true | true |
| 3 | trekking | トレッキング | マウンテン | 5 | false | true |
| 4 | fishing | 釣り | レイク | 5 | false | true |
| 5 | cycling | サイクリング | マウンテン | 3 | false | true |
| 6 | craft | クラフト体験 | インドア | 3 | false | true |
| 7 | camping | キャンプ | アウトドア | 3 | true | true |
| 8 | stargazing | 星空観察 | ナイト | 3 | false | true |
| 9 | winter | 冬のアクティビティ | ウィンター | 4 | false | true |

**合計**: 9アクティビティ、gallery画像31枚

---

### 🗂️ 2. 使用箇所の特定結果

#### **使用ファイル: 合計3ファイル**

1. **`/src/pages/activities/[slug].astro`** (2260行)
   - **用途**: アクティビティ詳細ページ（動的ルーティング）
   - **使用範囲**: **最も包括的** - Activity interfaceの全14フィールドを使用

2. **`/src/pages/activities/index.astro`** (1249行)
   - **用途**: アクティビティ一覧ページ（フィルタリング・検索機能付き）
   - **使用範囲**: gallery[0], about[], badges[], price, intro.text

3. **`/src/components/pages/top/Activities.astro`** (637行)
   - **用途**: TOPページのActivitiesセクション（Swiperスライダー）
   - **使用範囲**: topPageDisplay fields, gallery[0]

---

### 📋 3. フィールド使用状況マトリクス

| フィールド | 詳細ページ | 一覧ページ | TOPページ | 備考 |
|---|:---:|:---:|:---:|---|
| slug | ✅ | ✅ | ✅ | URL生成に使用 |
| title | ✅ | ✅ | ✅ | 全ページで表示 |
| category | ✅ | ✅ | ⚠️ | 一覧ページでフィルタリング使用 |
| ~~description~~ | ❌ | ❌ | ❌ | **削除済み** - 一覧ページでintro.textを使用 |
| images.gallery | ✅ | ✅ | ✅ | **gallery[0]をサムネイルとしても使用** |
| images.pointBackground | ✅ | ❌ | ❌ | 詳細ページのポイントセクション背景 |
| topPageDisplay.* | ❌ | ❌ | ✅ | TOPページ専用 |
| intro | ✅ | **✅** | ❌ | 詳細ページ + **一覧ページ（intro.text）** |
| point | ✅ | ❌ | ❌ | 詳細ページのポイントセクション |
| about[] | ✅ | ⚠️ | ❌ | 一覧ページでフィルタリングに使用 |
| flow[] | ✅ | ❌ | ❌ | 詳細ページの体験の流れ |
| reservation[] | ✅ | ❌ | ❌ | 詳細ページの予約情報 |
| badges[] | ✅ | ✅ | ❌ | 詳細・一覧ページでバッジ表示 |
| isPopular | ✅ | ✅ | ❌ | 人気バッジ表示 |
| price.adult | ✅ | ✅ | ❌ | 料金表示 |

**凡例**:
- ✅ = 使用中
- ❌ = 未使用
- ⚠️ = 重要な依存関係あり（後述の問題点参照）

---

### ⚠️ 4. 発見された問題点（4つの主要課題）

#### **問題1: 価格データの重複**

**現状**: 価格が2箇所に存在
```typescript
{
  about: [
    { term: '料金', description: '大人: 8,800円〜' }  // ← 文字列
  ],
  price: {
    adult: 8800  // ← 数値
  }
}
```

**問題点**:
- データの二重管理によるメンテナンス性の低下
- 不整合のリスク
- about[]の料金は表示用文字列、price.adultは数値計算用

**推奨解決策**:
- `about[]`から料金を削除
- `price.adult`のみを使用
- 表示時に動的にフォーマット（例: `¥${price.adult.toLocaleString()}〜`）

---

#### **問題2: about[]のterm文字列依存による型安全性の欠如**

**現状**: 一覧ページのフィルタリングが文字列比較に依存
```typescript
// /src/pages/activities/index.astro の実装
const priceItem = activity.about.find((item) => item.term === '料金');
const durationItem = activity.about.find((item) => item.term === '所要時間');
const weatherItem = activity.about.find((item) => item.term === '実施可能天気');
```

**問題点**:
- タイポによるバグのリスク（例: '所用時間'と誤記）
- TypeScriptの型チェックが効かない
- リファクタリング時の変更漏れ
- 多言語対応が困難

**推奨解決策**:
- **Option A（推奨）**: about[]を目的別に分離
  ```typescript
  {
    displayInfo: Array<{ term: string; description: string; note?: string }>;  // 表示専用
    filterableData: {
      priceRange: { min: number; max: number };
      duration: { hours: number; minutes: number };
      weather: 'all' | 'sunny' | 'rainy';
      season: string[];
    };
  }
  ```

- **Option B**: Enumによる型安全化
  ```typescript
  enum AboutTerm {
    PRICE = '料金',
    DURATION = '所要時間',
    WEATHER = '実施可能天気',
    // ...
  }
  ```

---

#### **問題3: topPageDisplay.showOnTopフラグの無意味化**

**現状**: 全9アクティビティが`showOnTop: true`（100%）

**問題点**:
- フラグの存在意義がない
- フィルタリング処理が無駄
- データ容量の浪費

**推奨解決策**:
- **Option A**: フラグを削除し、`displayOrder`のみで管理
  - `displayOrder`が存在 → TOPページに表示
  - `displayOrder`が`null` → 非表示

- **Option B**: フラグを残し、将来の拡張に備える
  - 現在は全てtrueだが、将来的に季節限定アクティビティ等で使用

---

#### **問題4: 画像管理方式の混在（実際は不使用だが定義が残存）**

**現状**: CLAUDE.mdには「方法2: 文字列パス方式」が記載されているが、**実際にはどのコンポーネントでも使用されていない**

**調査結果**:
- `activities.ts`に`images`フィールド（文字列パス配列）の定義なし
- 全ての画像は`images: { gallery[], pointBackground }`構造で**ImageMetadata方式**のみ
- gallery[0]をサムネイルとして使用（thumbnailフィールドは削除済み）

**推奨解決策**:
- microCMS移行後は、全画像をmicroCMS画像管理機能で管理
- Astroの`getImage()`は使用せず、microCMSクエリパラメータで最適化
- 詳細は「6. 画像管理移行戦略」参照

---

### 📸 5. 画像管理の現状分析

#### **現在の画像構造（ImageMetadata方式）**

| 画像タイプ | 枚数 | 使用箇所 | 最適化パターン |
|---|:---:|---|---|
| gallery | 31枚 | 詳細ページギャラリー、一覧ページ、TOPページ（[0]をサムネイルとして使用） | `widths: [580, 900, 1050]` |
| pointBackground | 9枚 | 詳細ページポイントセクション背景 | `widths: [1920]` |

**合計**: 40枚

#### **現在の最適化処理**

```astro
<!-- 詳細ページ: ギャラリー画像 -->
const optimizedGallery = await Promise.all(
  activity.images.gallery.map(async (image) => {
    return await getImage({
      src: image,
      format: 'webp',
      widths: [580, 900, 1050],
    });
  }),
);

<!-- TOPページ: スライダー画像 -->
const optimizedImage = await getImage({
  src: activity.topPageDisplay!.slideImage,
  format: 'webp',
  widths: [800],
});
```

---

### 🖼️ 6. microCMS画像管理移行戦略

#### **推奨アプローチ: microCMSクエリパラメータ方式**

**選定理由**:
1. ✅ **シンプル**: Astroの`getImage()`処理を削除可能
2. ✅ **柔軟性**: クエリパラメータで動的に最適化
3. ✅ **パフォーマンス**: microCMS CDNによる高速配信
4. ✅ **メンテナンス性**: コードがシンプルになる

#### **microCMS画像最適化クエリパラメータ**

```typescript
// ヘルパー関数の実装例
interface ImageOptimizationOptions {
  width?: number;
  format?: 'webp' | 'jpg' | 'png';
  quality?: number;  // 1-100
  fit?: 'crop' | 'contain' | 'cover';
}

/**
 * microCMSの画像URLを最適化
 * @param url microCMSから取得した画像URL
 * @param options 最適化オプション
 * @returns 最適化された画像URL
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
 * @param url microCMSから取得した画像URL
 * @param widths 生成する幅の配列（例: [640, 1024, 1920]）
 * @returns srcset文字列
 */
export function generateSrcSet(url: string, widths: number[]): string {
  return widths
    .map((width) => {
      const optimizedUrl = optimizeMicroCMSImage(url, { width, format: 'webp' });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}
```

#### **使用例: 詳細ページのギャラリー**

**変更前（Astro getImage方式）**:
```astro
---
const optimizedGallery = await Promise.all(
  activity.images.gallery.map(async (image) => {
    return await getImage({
      src: image,
      format: 'webp',
      widths: [580, 900, 1050],
    });
  }),
);
---

<img src={optimizedGallery[0].src} srcset={optimizedGallery[0].srcSet} />
```

**変更後（microCMSクエリパラメータ方式）**:
```astro
---
import { optimizeMicroCMSImage, generateSrcSet } from '@/utils/image';

// activityはmicroCMS APIから取得したデータ
const gallery = activity.images.gallery;  // URL文字列の配列
---

<img
  src={optimizeMicroCMSImage(gallery[0].url, { width: 1050, format: 'webp' })}
  srcset={generateSrcSet(gallery[0].url, [580, 900, 1050])}
  sizes="(max-width: 744px) 580px, (max-width: 1024px) 900px, 1050px"
  alt={gallery[0].alt}
/>
```

**メリット**:
- `Promise.all()`の非同期処理が不要
- ビルド時間の短縮
- コードが読みやすい

#### **画像アップロード計画**

| 画像タイプ | 枚数 | microCMSフィールド名 | アップロード優先度 |
|---|:---:|---|:---:|
| gallery | 31枚 | `gallery` (複数画像フィールド) | 高 |
| pointBackground | 9枚 | `pointBackgroundImage` | 中 |

**推定作業時間**: 40枚 × 2分/枚 = **約1.3時間**

---

### 🏗️ 7. microCMS APIスキーマ設計

#### **API名**: `activities`

#### **エンドポイント**: `https://[service-name].microcms.io/api/v1/activities`

#### **APIタイプ**: リスト形式

#### **フィールド設計**

```typescript
// microCMS APIスキーマ（推奨構造）
{
  // 基本情報
  slug: string (テキストフィールド、必須、ユニーク)
  title: string (テキストフィールド、必須)
  category: string (セレクトフィールド、必須)
    選択肢: ['ウォーター', 'マウンテン', 'レイク', 'インドア', 'アウトドア', 'ナイト', 'ウィンター']

  // 画像
  gallery: 複数画像 (必須、3-5枚) ※1枚目をサムネイルとしても使用
  pointBackgroundImage: 画像 (必須)

  // TOPページ表示設定
  showOnTop: boolean (真偽値、デフォルト: false)
  topPageCatchphrase: string (テキストフィールド、必須)
  catchphraseColor: string (セレクトフィールド、必須、選択肢: ['white', 'blue'])
  displayOrder: number (数値、必須)

  // 詳細コンテンツ
  introTitle: string (テキストフィールド、必須)
  introText: string (リッチエディタ、必須)

  pointTitleLine1: string (テキストフィールド、必須)
  pointTitleLine2: string (テキストフィールド、オプション)
  pointDescription: string (リッチエディタ、必須)

  // 繰り返しフィールド: 詳細情報
  displayInfo: 繰り返しフィールド (必須)
    - term: string (テキストフィールド、必須)
    - description: string (テキストエリア、必須)
    - note: string (テキストフィールド、オプション)

  // 繰り返しフィールド: 体験の流れ
  flow: 繰り返しフィールド (必須)
    - stepNumber: string (テキストフィールド、必須)
    - title: string (テキストフィールド、必須)
    - description: string (テキストエリア、必須)

  // 繰り返しフィールド: 予約方法
  reservation: 繰り返しフィールド (必須)
    - label: string (テキストフィールド、必須)
    - value: string (テキストフィールド、必須)
    - link: string (テキストフィールド、必須)
    - hours: string (テキストフィールド、必須)

  // 繰り返しフィールド: バッジ
  badges: 繰り返しフィールド (オプション)
    - badge: string (セレクトフィールド、選択肢: ['事前予約', '当日予約', '団体向け', '個人向け'])

  // メタ情報
  isPopular: boolean (真偽値、デフォルト: false)
  priceAdult: number (数値、必須)

  // フィルタリング用データ（問題2の解決策）
  filterDurationHours: number (数値、オプション)
  filterDurationMinutes: number (数値、オプション)
  filterWeather: string (セレクトフィールド、選択肢: ['all', 'sunny', 'rainy'])
  filterSeasons: 複数選択 (選択肢: ['春', '夏', '秋', '冬'])
}
```

#### **合計フィールド数**: 約27フィールド

**⚠️ 注意**:
- `description`フィールドは削除されました。一覧ページでは`introText`を使用します。
- `thumbnail`と`topPageSlideImage`フィールドは削除されました。`gallery[0]`をサムネイルとして使用します。

---

### 📊 8. データマッピング表

#### **activities.ts → microCMS 完全対応表**

| activities.ts | microCMS | 変換処理 | 備考 |
|---|---|---|---|
| slug | slug | そのまま | ユニーク制約 |
| title | title | そのまま | - |
| category | category | そのまま | セレクトフィールド |
| ~~description~~ | - | **削除** | **一覧ページでintroTextを使用** |
| images.gallery | gallery | 画像アップロード | **複数画像フィールド、[0]をサムネイルとしても使用** |
| images.pointBackground | pointBackgroundImage | 画像アップロード | - |
| ~~topPageDisplay.slideImage~~ | - | **削除** | **gallery[0]を使用** |
| topPageDisplay.showOnTop | showOnTop | そのまま | 真偽値 |
| topPageDisplay.catchphrase | topPageCatchphrase | そのまま | 必須 |
| ~~topPageDisplay.titleColorClass~~ | catchphraseColor | **フィールド名変更** | **セレクトフィールド (white/blue)、必須** |
| topPageDisplay.displayOrder | displayOrder | そのまま | 必須、季節や人気度で調整可能 |
| intro.title | introTitle | そのまま | - |
| intro.text | introText | そのまま | **詳細ページ + 一覧ページで使用** |
| point.titleLines[0] | pointTitleLine1 | 配列→個別フィールド | - |
| point.titleLines[1] | pointTitleLine2 | 配列→個別フィールド | オプション |
| point.description | pointDescription | そのまま | - |
| about[] | displayInfo[] | **フィルタ用除外** | 料金削除推奨 |
| - | filterDurationHours | **新規追加** | about[]から抽出 |
| - | filterDurationMinutes | **新規追加** | about[]から抽出 |
| - | filterWeather | **新規追加** | about[]から抽出 |
| - | filterSeasons | **新規追加** | about[]から抽出 |
| flow[] | flow[] | そのまま | 繰り返しフィールド |
| reservation[] | reservation[] | そのまま | 繰り返しフィールド |
| badges[] | badges[] | そのまま | 繰り返しフィールド |
| isPopular | isPopular | そのまま | 真偽値 |
| price.adult | priceAdult | そのまま | 数値 |

---

### 💻 9. コード変更仕様

#### **9-1. 詳細ページ (`/src/pages/activities/[slug].astro`)**

**変更箇所1: データ取得処理**

```astro
// 変更前
---
import { activities, type Activity } from '@/data/activities';

export async function getStaticPaths() {
  return activities.map((activity: Activity) => ({
    params: { slug: activity.slug },
    props: { activity },
  }));
}

const { activity } = Astro.props;
---

// 変更後
---
import { createClient } from 'microcms-js-sdk';
import type { Activity } from '@/types/microcms';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export async function getStaticPaths() {
  const { contents } = await client.get({
    endpoint: 'activities',
    queries: { limit: 100 },
  });

  return contents.map((activity: Activity) => ({
    params: { slug: activity.slug },
    props: { activity },
  }));
}

const { activity } = Astro.props;
---
```

**変更箇所2: 画像最適化処理**

```astro
// 変更前
---
import { getImage } from 'astro:assets';

const optimizedGallery = await Promise.all(
  activity.images.gallery.map(async (image) => {
    return await getImage({
      src: image,
      format: 'webp',
      widths: [580, 900, 1050],
    });
  }),
);
---

// 変更後
---
import { optimizeMicroCMSImage, generateSrcSet } from '@/utils/image';

const gallery = activity.gallery.map((img) => ({
  url: img.url,
  alt: activity.title,
  srcset: generateSrcSet(img.url, [580, 900, 1050]),
}));
---
```

**変更箇所3: フィールド名の変更**

```astro
// 変更前
<h2>{activity.intro.title}</h2>
<p>{activity.intro.text}</p>

// 変更後
<h2>{activity.introTitle}</h2>
<p>{activity.introText}</p>
```

**推定変更行数**: 約50-80行

---

#### **9-2. 一覧ページ (`/src/pages/activities/index.astro`)**

**変更箇所1: データ取得**

```astro
// 変更前
---
import { activities } from '@/data/activities';
---

// 変更後
---
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

const { contents: activities } = await client.get({
  endpoint: 'activities',
  queries: { limit: 100 },
});
---
```

**変更箇所2: フィルタリングロジック（重要）**

```typescript
// 変更前（問題あり）
const priceItem = activity.about.find((item) => item.term === '料金');
const durationItem = activity.about.find((item) => item.term === '所要時間');
const weatherItem = activity.about.find((item) => item.term === '実施可能天気');

// 変更後（型安全）
const priceAdult = activity.priceAdult;
const durationHours = activity.filterDurationHours;
const durationMinutes = activity.filterDurationMinutes;
const weather = activity.filterWeather;
```

**変更箇所3: サムネイル画像**

```astro
// 変更前
<img src={activity.images.gallery[0].src} alt={activity.title} />

// 変更後
<img
  src={optimizeMicroCMSImage(activity.gallery[0].url, { width: 580, format: 'webp' })}
  srcset={generateSrcSet(activity.gallery[0].url, [580, 900, 1050])}
  alt={activity.title}
/>
```

**推定変更行数**: 約100-150行

---

#### **9-3. TOPページ (`/src/components/pages/top/Activities.astro`)**

**変更箇所1: データ取得とフィルタリング**

```astro
// 変更前
---
import { getTopPageActivities } from '@/data/activities';
const topActivities = getTopPageActivities();
---

// 変更後
---
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

const { contents } = await client.get({
  endpoint: 'activities',
  queries: {
    filters: 'showOnTop[equals]true',
    orders: 'displayOrder',
    limit: 100,
  },
});

const topActivities = contents;
---
```

**変更箇所2: 画像処理**

```astro
// 変更前
const optimizedImage = await getImage({
  src: activity.topPageDisplay!.slideImage,
  format: 'webp',
  widths: [800],
});

// 変更後
const slideImageUrl = optimizeMicroCMSImage(activity.gallery[0].url, {
  width: 800,
  format: 'webp',
});
```

**推定変更行数**: 約30-50行

---

#### **9-4. 新規ファイル作成**

**ファイル1: `/src/utils/image.ts`** (画像最適化ヘルパー)

```typescript
// 上記「6. microCMS画像管理移行戦略」のヘルパー関数実装
export interface ImageOptimizationOptions { /* ... */ }
export function optimizeMicroCMSImage(/* ... */) { /* ... */ }
export function generateSrcSet(/* ... */) { /* ... */ }
```

**ファイル2: `/src/types/microcms.ts`** (型定義)

```typescript
export interface Activity {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;

  slug: string;
  title: string;
  category: string;

  gallery: MicroCMSImage[];
  pointBackgroundImage: MicroCMSImage;

  showOnTop: boolean;
  topPageCatchphrase: string;
  catchphraseColor: 'white' | 'blue';
  displayOrder: number;

  introTitle: string;
  introText: string;

  pointTitleLine1: string;
  pointTitleLine2?: string;
  pointDescription: string;

  displayInfo: Array<{
    fieldId: string;
    term: string;
    description: string;
    note?: string;
  }>;

  flow: Array<{
    fieldId: string;
    stepNumber: string;
    title: string;
    description: string;
  }>;

  reservation: Array<{
    fieldId: string;
    label: string;
    value: string;
    link: string;
    hours: string;
  }>;

  badges: Array<{
    fieldId: string;
    badge: '事前予約' | '当日予約' | '団体向け' | '個人向け';
  }>;

  isPopular: boolean;
  priceAdult: number;

  filterDurationHours?: number;
  filterDurationMinutes?: number;
  filterWeather?: 'all' | 'sunny' | 'rainy';
  filterSeasons?: string[];
}

export interface MicroCMSImage {
  url: string;
  width: number;
  height: number;
}
```

---

### ✅ 10. テストチェックリスト

#### **Phase 5-1: ローカル環境ビルドテスト**

- [ ] `npm run build` が成功する
- [ ] TypeScriptコンパイルエラーがない
- [ ] 警告が増えていない
- [ ] ビルド時間の比較（移行前後）

#### **Phase 5-2: 全ページ表示確認**

- [ ] TOPページ表示確認
  - [ ] Activitiesセクションのスライダー動作
  - [ ] 8つのアクティビティが表示される
  - [ ] 画像が正常に表示される
  - [ ] リンクが正常に機能する

- [ ] 一覧ページ表示確認
  - [ ] 全9アクティビティが表示される
  - [ ] サムネイル画像が表示される
  - [ ] バッジ表示が正常
  - [ ] 料金表示が正常

- [ ] 詳細ページ表示確認（全9ページ）
  - [ ] /activities/sup
  - [ ] /activities/canoe
  - [ ] /activities/trekking
  - [ ] /activities/fishing
  - [ ] /activities/cycling
  - [ ] /activities/craft
  - [ ] /activities/camping
  - [ ] /activities/stargazing
  - [ ] /activities/winter

#### **Phase 5-3: スタイル確認（視覚的差異チェック）**

- [ ] BEMクラス名が維持されている
- [ ] レイアウトに崩れがない
- [ ] 画像のアスペクト比が維持されている
- [ ] フォントサイズ・色が変わっていない
- [ ] スペーシングが維持されている

#### **Phase 5-4: スクリプト動作確認**

- [ ] TOPページSwiperが正常に動作する
  - [ ] スライダーの左右ナビゲーション
  - [ ] ページネーション
  - [ ] スワイプ操作（モバイル）

- [ ] 一覧ページフィルタリングが正常に動作する
  - [ ] カテゴリーフィルタ
  - [ ] 価格フィルタ
  - [ ] 所要時間フィルタ
  - [ ] 天気フィルタ
  - [ ] 検索機能
  - [ ] ソート機能

- [ ] 詳細ページのギャラリーSwiperが正常に動作する
  - [ ] サムネイル連動
  - [ ] 拡大表示

#### **Phase 5-5: レスポンシブ対応確認**

- [ ] モバイル（375px）表示確認
- [ ] タブレット（768px）表示確認
- [ ] デスクトップ（1440px）表示確認
- [ ] 画像の切り替え（srcset）が正常に機能

#### **Phase 5-6: パフォーマンス測定**

- [ ] Lighthouse スコア測定（移行前後比較）
  - [ ] Performance
  - [ ] Accessibility
  - [ ] Best Practices
  - [ ] SEO

- [ ] ビルドサイズ比較
- [ ] 画像最適化効果の確認

---

### 🔄 11. ロールバック戦略

#### **ロールバック手順**

**Step 1: 緊急ロールバック（本番環境で問題発生時）**

1. Gitで直前のコミットにrevert
   ```bash
   git revert HEAD
   git push origin main
   ```

2. Vercel/Netlifyが自動的に再デプロイ

**Step 2: activities.tsの復元**

1. バックアップファイルから復元
   ```bash
   cp src/data/activities.ts.backup src/data/activities.ts
   ```

2. microCMS関連コードの削除
   ```bash
   git checkout HEAD~1 -- src/pages/activities/
   git checkout HEAD~1 -- src/components/pages/top/Activities.astro
   ```

3. ビルド確認
   ```bash
   npm run build
   ```

**Step 3: 環境変数の無効化**

```env
# .env
# MICROCMS_SERVICE_DOMAIN=your-service
# MICROCMS_API_KEY=your-api-key
```

#### **ロールバック判断基準**

以下のいずれかが発生した場合、即座にロールバック：

- [ ] ビルドが失敗する
- [ ] 本番環境で3ページ以上が404エラー
- [ ] 画像が50%以上表示されない
- [ ] フィルタリング機能が完全に動作しない
- [ ] Swiperスライダーが全く動作しない
- [ ] ページロード時間が2倍以上に増加

---

### ⏱️ 12. タイムライン・作業時間見積もり

#### **Phase 2: microCMS移行計画の策定**（完了）

- **所要時間**: 完了済み（本ドキュメント作成）

#### **Phase 3: microCMS環境準備**

| タスク | 所要時間 | 備考 |
|---|:---:|---|
| microCMS API作成 | 30分 | activities API設定 |
| APIスキーマ設定 | 1時間 | 30フィールドの設定 |
| 画像アップロード | 1.5時間 | 49枚の画像 |
| テストデータ登録 | 2時間 | 9アクティビティ |
| 環境変数設定 | 15分 | .env設定 |
| **合計** | **5時間15分** | |

#### **Phase 4: コード移行**

| タスク | 所要時間 | 備考 |
|---|:---:|---|
| microCMSクライアント設定 | 30分 | ライブラリインストール |
| 型定義の作成 | 1時間 | /src/types/microcms.ts |
| 画像ヘルパー関数作成 | 1時間 | /src/utils/image.ts |
| 詳細ページ更新 | 2時間 | [slug].astro |
| 一覧ページ更新 | 2.5時間 | index.astro（フィルタリング含む） |
| TOPページ更新 | 1時間 | Activities.astro |
| ビルドエラー修正 | 1時間 | バッファ |
| **合計** | **9時間** | |

#### **Phase 5: テスト・検証**

| タスク | 所要時間 | 備考 |
|---|:---:|---|
| ローカルビルドテスト | 30分 | npm run build確認 |
| 全ページ表示確認 | 1.5時間 | 11ページ（TOP+一覧+詳細9） |
| スタイル確認 | 1時間 | 視覚的差異チェック |
| スクリプト動作確認 | 1.5時間 | Swiper、フィルタリング |
| レスポンシブ確認 | 1時間 | 3ブレークポイント |
| パフォーマンス測定 | 30分 | Lighthouse |
| **合計** | **6時間** | |

#### **Phase 6: 本番リリース**

| タスク | 所要時間 | 備考 |
|---|:---:|---|
| 本番環境デプロイ | 30分 | Vercel/Netlify |
| 本番環境動作確認 | 1時間 | 全ページチェック |
| activities.ts削除 | 15分 | ファイル退避 |
| ドキュメント更新 | 30分 | CLAUDE.md更新 |
| **合計** | **2時間15分** | |

#### **📊 総所要時間**

| Phase | 所要時間 |
|---|:---:|
| Phase 3: 環境準備 | 5時間15分 |
| Phase 4: コード移行 | 9時間 |
| Phase 5: テスト検証 | 6時間 |
| Phase 6: 本番リリース | 2時間15分 |
| **合計** | **22時間30分** |

**推奨スケジュール**: 3日間（1日8時間作業想定）

- **Day 1**: Phase 3完了（環境準備）
- **Day 2**: Phase 4完了（コード移行）
- **Day 3**: Phase 5-6完了（テスト・リリース）

---

### ⚠️ 13. リスク評価と軽減策

#### **リスク1: フィルタリング機能の破壊（高リスク）**

**影響度**: 🔴 高（ユーザー体験に直接影響）

**発生確率**: 中（データ構造変更による）

**軽減策**:
- [ ] フィルタリングロジックの徹底的なテスト
- [ ] 全フィルタ組み合わせのテストケース作成
- [ ] ステージング環境での先行検証

#### **リスク2: 画像表示の不具合（中リスク）**

**影響度**: 🟠 中（視覚的品質に影響）

**発生確率**: 低（実装がシンプル）

**軽減策**:
- [ ] 画像URLの事前検証
- [ ] microCMSクエリパラメータの動作確認
- [ ] 画像最適化ヘルパー関数のユニットテスト

#### **リスク3: ビルドパフォーマンスの低下（低リスク）**

**影響度**: 🟡 低（開発体験に影響）

**発生確率**: 低（microCMS APIキャッシュあり）

**軽減策**:
- [ ] microCMSのレスポンス時間を事前測定
- [ ] キャッシュ戦略の検討
- [ ] ビルド時間の定期的なモニタリング

#### **リスク4: データ不整合（中リスク）**

**影響度**: 🟠 中（コンテンツ品質に影響）

**発生確率**: 中（手動データ入力）

**軽減策**:
- [ ] データ入力チェックリストの作成
- [ ] 必須フィールドの厳密な設定
- [ ] ステージング環境での全データ検証

#### **リスク5: TypeScriptコンパイルエラー（低リスク）**

**影響度**: 🟡 低（開発時に発見可能）

**発生確率**: 低（型定義を正確に作成）

**軽減策**:
- [ ] 型定義の段階的実装
- [ ] tscコマンドでの事前チェック
- [ ] エディタのTypeScript補完を活用

---

### 🎯 14. Phase 2以降の推奨アクションプラン

#### **即座に実行すべきアクション**

1. ✅ **このドキュメントをCLAUDE.mdに追記**（完了）
2. ⏳ **microCMS環境の最終確認**
   - アカウント・プロジェクトへのアクセス確認
   - API作成権限の確認
   - 画像アップロード容量の確認

3. ⏳ **バックアップの作成**
   ```bash
   cp src/data/activities.ts src/data/activities.ts.backup
   git add .
   git commit -m "Backup: activities.ts before microCMS migration"
   git push
   ```

#### **Phase 3開始前の準備**

1. **ステージング環境の準備**
   - Vercel/NetlifyのPreview Deploymentの確認
   - microCMSの開発環境とプロダクション環境の分離検討

2. **チーム内共有**（該当する場合）
   - 移行計画の共有
   - スケジュールの調整
   - ロールバック手順の周知

#### **Phase 3実行時の注意点**

- microCMS APIスキーマは一度作成すると変更が困難
- 必ずテストデータで動作確認してから本データを入力
- 画像のファイル名規則を統一（例: `sup-gallery-01.jpg`）

---

### 📝 15. まとめと次のステップ

#### **Phase 1で達成したこと**

✅ activities.tsの完全な構造把握（780行、9アクティビティ、49画像）
✅ 使用箇所の完全特定（3ファイル）
✅ データ利用状況の詳細分析（フィールド使用マトリクス）
✅ 4つの主要問題の発見と解決策の提示
✅ 画像管理の現状分析とmicroCMS移行戦略の決定
✅ 包括的なmicroCMS移行計画書の作成

#### **Phase 1の成果物**

- ✅ 完全なデータ構造ドキュメント
- ✅ フィールド使用状況マトリクス
- ✅ microCMS APIスキーマ設計
- ✅ データマッピング表
- ✅ コード変更仕様
- ✅ テストチェックリスト
- ✅ リスク評価と軽減策
- ✅ タイムライン（総22.5時間、3日間）

#### **次のステップ: Phase 3へ進む準備**

**ユーザーへの確認事項**:

1. **このmicroCMS移行計画書の承認**
   - データ構造設計は適切か？
   - 作業時間見積もり（22.5時間）は許容範囲か？
   - リスク評価と軽減策は十分か？

2. **Phase 3開始のタイミング**
   - いつからmicroCMS環境準備を開始するか？
   - 本番リリースの希望日はあるか？

3. **追加の要望や懸念事項**
   - データ構造に追加したいフィールドはあるか？
   - 特に重点的にテストすべき機能はあるか？

**承認後の流れ**:
1. Phase 3: microCMS環境準備（5時間15分）
2. Phase 4: コード移行（9時間）
3. Phase 5: テスト・検証（6時間）
4. Phase 6: 本番リリース（2時間15分）

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
