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

## 🎯 現在の作業: 過ごし方ページのコンポーネント化と動的ルーティング実装

### 📋 作業概要
**目的**: スケジュールデータを一元管理し、複数の過ごし方プランを動的に表示できるシステムを構築する

### 🎨 最終的な構成
- **データ管理**: `/src/data/schedules.ts` ですべての過ごし方データを管理
- **動的ルーティング**: `/enjoy/[slug].astro` で各過ごし方を表示
- **例**:
  - `/enjoy/family-nature` → 子供と自然に触れ合う過ごし方
  - `/enjoy/rainy-day` → 雨の日の過ごし方
  - `/enjoy/couples` → カップル向けの過ごし方

### 📁 ファイル構造
```
src/
├── data/
│   └── schedules.ts              # すべての過ごし方データ
├── components/
│   └── pages/
│       └── enjoy/
│           └── DaySchedule.astro  # 1日分のスケジュール表示コンポーネント
├── pages/
│   └── enjoy/
│       └── [slug].astro          # 動的ルーティングページ
└── assets/
    └── images/
        └── enjoy/
            ├── family-nature/     # 子供と自然プランの画像
            │   ├── day-1/
            │   └── day-2/
            └── rainy-day/        # 雨の日プランの画像
                ├── day-1/
                └── day-2/
```

### 📝 実装手順（詳細）

#### **Step 1: schedules.tsのデータ構造拡張**
1. StayPlan型を追加（過ごし方全体を管理）
   ```typescript
   interface StayPlan {
     id: string;           // 識別子
     slug: string;         // URLパス用
     title: string;        // 表示タイトル
     description: string;  // 説明文
     thumbnail: string;    // サムネイル画像
     days: DaySchedule[];  // 各日のスケジュール
   }
   ```
2. 現在のデータを`family-nature`として整理
3. エクスポート関数の追加（getStayPlanBySlug等）

#### **Step 2: DaySchedule.astroのProps対応**
1. Props interfaceを定義
   ```astro
   interface Props {
     dayData: DaySchedule;
     stayPlanId: string;
   }
   ```
2. 画像パスの動的生成
3. Swiper IDの動的生成（`${stayPlanId}-${dayId}`）
4. データのループ処理実装

#### **Step 3: enjoy/[slug].astroの作成**
1. 動的ルーティングの設定
2. getStaticPaths()でパス生成
3. slugに応じたデータ取得
4. DayScheduleコンポーネントの複数表示

#### **Step 4: Swiper初期化の動的対応**
1. 各Dayごとに独立したSwiper初期化
2. 動的なセレクタ生成
3. グローバル変数の管理方法改善

### ⚠️ 重要な注意事項
1. **作業の進め方**:
   - 各ステップ完了後、必ずエラー確認を行う
   - ブラウザでの表示確認を行ってから次に進む

2. **Swiper独立性**:
   - 各Day（Day1, Day2等）は完全に独立したSwiperインスタンス
   - サムネイルとメインスライダーはペアで1つのユニット

3. **画像管理**:
   - パス構造: `/assets/images/enjoy/[過ごし方ID]/day-[番号]/`
   - ファイル名規則: `slide-01.jpg`, `slide-02.jpg`等

### 🔄 現在の進捗
- [x] 基本的なデータ構造（schedules.ts）作成済み
- [ ] StayPlan型への拡張
- [ ] DaySchedule.astroのProps対応
- [ ] 動的ルーティングページの作成
- [ ] Swiper初期化の動的対応

### 🚨 エラーチェックポイント
1. TypeScriptの型エラー
2. 画像パスの404エラー
3. Swiperの初期化エラー
4. レスポンシブ表示の崩れ

---