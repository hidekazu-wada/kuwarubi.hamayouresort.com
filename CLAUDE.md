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

- **メインファイル (CLAUDE.md)**: このファイル。ナビゲーションとプロジェクト概要
- **セクションファイル (docs/claude-info/)**: トピックごとに分割された詳細ドキュメント
- **進行中プロジェクト (docs/active/)**: 現在進行中のプロジェクトドキュメント
- **完了プロジェクト (docs/archive/)**: 完了済みプロジェクトのアーカイブ

## 📝 ドキュメント更新時の注意

各セクションファイルを更新する際は、以下の点に注意してください：

1. **個別ファイルを直接編集**: 各トピックのファイル（`01-project-basics.md`等）を直接更新
2. **相互参照の確認**: 他のセクションとの関連性がある場合は、適切にリンクを更新
3. **このファイルは変更不要**: CLAUDE.md（このファイル）は基本的に変更不要。新セクション追加時のみ更新

---

## 🚧 進行中のプロジェクト

### **アクティビティデータのmicroCMS移行**

**目的**: `activities.ts`で管理しているアクティビティデータをmicroCMSへ移行

**現在のステータス**: Phase 2完了、Phase 3待機中

**進捗状況**:
- ✅ Phase 1: 現状調査（完了）
- ✅ Phase 2: 移行計画の策定（完了）
- ⏳ Phase 3: microCMS環境準備（待機中）
- ⏳ Phase 4: コード移行（待機中）
- ⏳ Phase 5: テスト・検証（待機中）
- ⏳ Phase 6: 本番リリース（待機中）

**推定残り時間**: 22.5時間（3日間）

**詳細**: [アクティビティmicroCMS移行プロジェクト](./docs/active/activities-microcms-migration.md)

**関連ドキュメント**:
- [Phase 1調査結果](./docs/archive/activities-migration-phase1-results.md) - データ構造、使用箇所、問題点の詳細分析

---

## ✅ 完了済みプロジェクト

以下のプロジェクトは完了しました。詳細はアーカイブを参照してください。

### **1. 過ごし方ページのコンポーネント化と動的ルーティング**

**完了日**: 2025-01-XX

**成果**: 完全に動的な過ごし方プラン管理システムが完成。新しいプランの追加は`schedules.ts`の編集のみで可能。

- 動的ルーティング (`/enjoy/[slug].astro`)
- 5つのプラン実装
- 独立したSwiper管理
- WebP画像最適化

**詳細**: [過ごし方ページ実装](./docs/archive/completed-enjoy-pages.md)

---

### **2. 団体利用ページの実装**

**完了日**: 2025-01-XX

**成果**: 団体利用向けの専用ページが完成。サイドバーからアクセス可能。

- `/group` ページ作成
- Hero.astroコンポーネント
- サイドバーナビゲーション連携

**詳細**: [団体利用ページ実装](./docs/archive/completed-group-page.md)

---

### **3. TOPページセクションの動的化**

**完了日**: 2025-01-XX

**成果**: TOPページの各セクション（Activities、Enjoy、News、Blog）をハードコードからデータベース連携へ移行。

#### **動的化されたセクション**:

- **Activitiesセクション**: 全8アクティビティをスライダー表示
- **Enjoyセクション**: 全5過ごし方プランをカード表示
- **Newsセクション**: お知らせとイベント情報を最新4件ずつ表示
- **Blogセクション**: 最新10件のブログ記事をスライダー表示

#### **実装された機能**:

- 型定義拡張（`topPageDisplay`フィールド）
- ヘルパー関数（データ取得・フィルタリング）
- 動的map()ループによるレンダリング
- WebP最適化とレスポンシブ画像
- 自動ソート（日付降順）

#### **成果**:

- ~800行のハードコード削減
- 保守性の向上（データファイルの編集のみ）
- 一貫性の確保（単一データソース）
- 型安全性（TypeScript完全対応）
- スタイル・スクリプト100%維持

**詳細**: [TOPページセクションの動的化](./docs/archive/completed-top-page-sections.md)

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

**定義場所**: `activities.ts`の`images`フィールド（実際には未使用）

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

## 📊 プロジェクトサイズ

**CLAUDE.mdのサイズ変化**:
- **リファクタリング前**: 2,679行（92KB）
- **リファクタリング後**: 約350行（約12KB）
- **削減率**: 約87%削減

**アーカイブファイル**:
- `completed-enjoy-pages.md` - 過ごし方ページ実装
- `completed-group-page.md` - 団体利用ページ実装
- `completed-top-page-sections.md` - TOPページセクション動的化
- `activities-migration-phase1-results.md` - microCMS移行Phase 1調査結果

**進行中プロジェクト**:
- `activities-microcms-migration.md` - アクティビティmicroCMS移行

---

## 🎯 次のアクションアイテム

### **進行中プロジェクト関連**

- [ ] microCMS環境の最終確認
- [ ] バックアップの作成
- [ ] Phase 3: microCMS環境準備の開始（ユーザー承認後）

### **ドキュメント関連**

- [ ] 画像処理の2つのアプローチについて検証・方針決定
- [ ] 新しいプロジェクト開始時は`docs/active/`にドキュメント作成
- [ ] プロジェクト完了時は`docs/archive/`に移動

---

このドキュメントは、プロジェクトの進捗に応じて定期的に更新されます。
