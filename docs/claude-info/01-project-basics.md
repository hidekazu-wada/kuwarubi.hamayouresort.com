# プロジェクト基本情報

## プロジェクト概要

これはkuwarubi.hamayouresort.com用のAstro プロジェクトです。観光・リゾート業界向けのWebサイトを開発しています。

## 技術スタック

- **フレームワーク**: Astro v5.12.8
- **言語**: TypeScript（tsconfig.json設定済み、カスタム型定義対応）
- **スタイル**: SCSS（sass v1.89.2）
- **アニメーション**: GSAP v3.13.0（ScrollTriggerでパララックス効果）
- **UIライブラリ**: Swiper v11.2.10（独立実装パターン）
- **パッケージマネージャー**: npm
- **開発環境**: Node.js
- **型定義**: カスタム型定義ファイル（`src/types/`）でSwiper・Astroコンポーネントをサポート

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 環境変数の設定（初回のみ）
cp .env.example .env
# .envファイルを編集して必要な値を設定

# 開発サーバーの起動（localhost:4321）
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview

# Astro CLIコマンドの実行
npm run astro [command]

# Astro CLIのヘルプ
npm run astro -- --help

# TypeScript型定義の同期（型エラー修正時）
npm run astro sync
```

## プロジェクト構造

```
/
├── public/          # 静的アセット（画像、ファビコンなど）
├── src/
│   ├── assets/      # 画像などのアセット
│   │   └── images/  # 画像ファイル
│   │       ├── top/ # TOPページ専用画像
│   │       │   ├── hero-slide/   # ヒーローセクションスライダー画像
│   │       │   ├── location/     # ロケーションセクション
│   │       │   ├── activities/   # アクティビティセクション
│   │       │   ├── enjoy/        # エンジョイセクション
│   │       │   ├── hospitality/  # ホスピタリティセクション
│   │       │   ├── blog/         # ブログセクション
│   │       │   ├── parallax/     # パララックス効果用画像
│   │       │   └── play-movie/   # 動画再生関連画像
│   ├── components/  # Astroコンポーネント
│   │   ├── ui/      # 再利用可能UIコンポーネント
│   │   │   ├── MoreButton.astro  # 共通Moreボタンコンポーネント
│   │   │   ├── SectionWave.astro # 共通Waveコンポーネント
│   │   │   └── Breadcrumb.astro  # 共通パンくずナビゲーションコンポーネント
│   │   ├── pages/   # ページ固有コンポーネント
│   │   │   └── top/ # TOPページコンポーネント
│   │   │       ├── Hero.astro        # ヒーローセクション
│   │   │       ├── Location.astro    # ロケーションセクション
│   │   │       ├── Activities.astro  # アクティビティセクション
│   │   │       ├── Enjoy.astro       # エンジョイセクション
│   │   │       ├── Hospitality.astro # ホスピタリティセクション
│   │   │       ├── Blog.astro        # ブログセクション
│   │   │       └── News.astro        # ニュースセクション
│   │   ├── BottomBar.astro       # スマホ用下部固定バー
│   │   ├── Footer.astro          # フッターコンポーネント
│   │   ├── MenuOverlay.astro     # メニューオーバーレイ
│   │   ├── Sidebar.astro         # PC用サイドバー
│   │   ├── VideoModal.astro      # 動画モーダル
│   │   └── Booking-modal.astro   # 宿泊予約モーダル
│   ├── pages/       # ページコンポーネント（ファイルベースルーティング）
│   │   ├── index.astro           # TOPページ
│   │   └── activities/           # アクティビティページ
│   │       ├── index.astro       # アクティビティ一覧 (/activities)
│   │       └── [slug].astro      # アクティビティ詳細 (/activities/*)
│   ├── data/        # 静的データファイル
│   │   └── activities.ts         # アクティビティデータ・型定義
│   ├── styles/      # SCSSファイル
│   │   ├── reset.scss      # リセットCSS
│   │   ├── _variables.scss # 変数・定数
│   │   ├── _functions.scss # カスタム関数
│   │   ├── _mixins.scss    # ミックスイン
│   │   └── main.scss       # メインSCSSファイル
│   └── types/       # TypeScript型定義ファイル
│       ├── astro-components.d.ts # Astroコンポーネント・アセット型定義
│       └── swiper.d.ts           # Swiper v11型定義
├── astro.config.mjs # Astro設定ファイル
├── package.json     # プロジェクト設定と依存関係
└── tsconfig.json    # TypeScript設定
```

## 業界コンテキスト

- 観光・ホスピタリティ業界向けサイトとして、アクセシビリティと多言語対応を考慮
- パフォーマンス重視（Astroの特性を活用）
- SEO最適化が重要