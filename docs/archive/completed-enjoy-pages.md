# 完了: 過ごし方ページのコンポーネント化と動的ルーティング実装 ✅

**完了日**: 2025-01-XX

**目的**: スケジュールデータを一元管理し、複数の過ごし方プランを動的に表示できるシステムを構築

**結果**: 完全に動的な過ごし方プラン管理システムが完成。新しいプランの追加は`schedules.ts`の編集のみで可能。

---

## 🎨 最終的な構成

- **データ管理**: `/src/data/schedules.ts` ですべての過ごし方データを一元管理
- **動的ルーティング**: `/enjoy/[slug].astro` で各過ごし方を表示
- **プラン一覧**: `/enjoy/index.astro` で全プランの一覧表示
- **実装済みプラン**:
  - `/enjoy/family-nature` → 子供と自然に触れ合う過ごし方
  - `/enjoy/couples` → カップル向けの過ごし方
  - `/enjoy/relaxation` → 非日常を満喫、ゆったりと過ごす
  - `/enjoy/sightseeing` → 近隣観光メインで最高拠点に楽しむ
  - `/enjoy/rainy-day` → 雨の日の過ごし方

---

## 📁 完成したファイル構造

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

---

## ✅ 完了済みの作業

### **完了: 完全な動的ルーティングシステム（2025-01-XX）**

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

---

## 🎯 実装された機能

### **1. 動的プラン管理**

- 新しいプランの追加は`schedules.ts`の編集のみ
- プランごとの独立したHeroコンテンツ管理
- 柔軟なスケジュール構造（日数はプランごとに異なる）

### **2. 動的リンク機能**

- スケジュールアイテムごとのオプショナルリンク
- リンクがない場合は要素自体が表示されない
- URLとテキストの動的管理

### **3. 独立したSwiper管理**

- プラン×日ごとの完全独立したSwiperインスタンス
- 動的クラス名による名前空間化
- レスポンシブ対応の維持

### **4. 画像最適化**

- WebP形式での自動変換
- レスポンシブ画像の自動生成
- プラン別の画像管理

---

## 🔧 技術的な実装詳細

### **型定義システム**

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

### **動的ルーティング**

```astro
export async function getStaticPaths() {
  const slugs = getAllStayPlanSlugs();
  return slugs.map((slug) => ({ params: { slug } }));
}
```

### **条件付きレンダリング**

```astro
{item.link && (
  <a href={item.link.url} class="schedule-slider__detail-link">
    <span>{item.link.text}</span>
  </a>
)}
```

---

## 🚀 新しいプラン追加手順

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

---

## 🎉 成果

- **完全な動的システム**: 新しいプランの追加はデータ編集のみ
- **保守性の向上**: 一元管理によるデータの整合性確保
- **拡張性**: 新しい機能（リンク、画像等）の簡単な追加
- **パフォーマンス**: WebP最適化とレスポンシブ画像
- **ユーザビリティ**: 直感的なプラン一覧と詳細表示
