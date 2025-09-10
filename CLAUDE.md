# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

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

## アーキテクチャ

- **ファイルベースルーティング**: `src/pages/`内の`.astro`または`.md`ファイルがページルートになります
- **コンポーネント分割**: UI要素を論理的に分離したAstroコンポーネント
- **静的アセット**: `public/`ディレクトリ内のファイルは直接提供されます
- **Islands Architecture**: 必要な部分のみでJavaScriptを動作させる部分的ハイドレーション

### コンポーネント設計思想

このプロジェクトでは、**Astroらしいコンポーネント分割**を採用しています：

#### 1. コンポーネントの責務分離

**レイアウト・ナビゲーション:**
- **Sidebar**: PC用固定サイドバー（ロゴ、メニューボタン、ソーシャルリンク）
- **BottomBar**: スマホ用下部固定バー（メニューボタンとアクション）
- **MenuOverlay**: 全画面メニューオーバーレイ（PC・スマホ共通）
- **Footer**: ページフッター（連絡先、パートナーロゴ、コピーライト）

**モーダル:**
- **VideoModal**: 動画再生用モーダル
- **BookingModal**: 宿泊予約サイト選択モーダル

**TOPページセクション:**
- **Hero**: ヒーローセクション（動画・画像スライダー）
- **Location**: ロケーション紹介セクション
- **Activities**: アクティビティ紹介セクション（Swiperスライダー）
- **Enjoy**: おすすめの過ごし方セクション
- **Hospitality**: ホスピタリティセクション（Room・Food・Onsen）
- **News**: お知らせ・イベント情報セクション

**共通UIコンポーネント:**
- **MoreButton**: 再利用可能なMoreボタンコンポーネント
- **Breadcrumb**: 再利用可能なパンくずナビゲーションコンポーネント

#### 2. JavaScript管理の中央集権化
```astro
<!-- index.astro -->
<script>
  // 全てのコンポーネント間で協調するJavaScriptを一元管理
  const pcMenuToggle = document.getElementById('menu-toggle');
  const mobileMenuToggle = document.querySelector('.bottom-bar__toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  const sidebar = document.querySelector('.sidebar');
  
  // メニュー開閉制御など
</script>
```

**なぜこの方法を採用するのか：**
- Astroコンポーネントは基本的にサーバーサイドレンダリング
- 複数コンポーネント間で協調するJavaScriptは親（index.astro）で管理が最適
- `client:*`ディレクティブは単一コンポーネント内完結の場合に使用

#### 3. スタイル管理の分散化
各コンポーネント内でSCSSを完結：
```astro
<!-- BottomBar.astro -->
<style lang="scss">
  @import '../styles/variables';
  @import '../styles/functions';
  @import '../styles/mixins';
  
  .bottom-bar {
    // コンポーネント固有のスタイル
  }
</style>
```

## SCSS使用方法

### スタイル管理の基本方針

このプロジェクトでは以下のスタイル管理ルールを採用しています：

1. **コンポーネント内でスタイル完結** - 各`.astro`ファイル内で`<style lang="scss">`を使用
2. **BEM記法の採用** - `.block__element--modifier`形式でクラス名を命名
3. **SCSSミックスイン・関数の活用** - レスポンシブ対応とpx→vw変換を統一

### BEM記法の採用例

```astro
<!-- Footer.astro -->
<footer class="footer">
  <a href="" class="footer__logo-link">
    <img class="footer__logo-image" src="..." alt="ロゴ" />
  </a>
  <nav class="footer__nav">
    <ul class="footer__nav-list">
      <li class="footer__nav-item">
        <a class="footer__nav-link">...</a>
      </li>
    </ul>
  </nav>
  <div class="footer__partner-link footer__partner-link--main">
    <!-- モディファイアで区別 -->
  </div>
</footer>

<style lang="scss">
.footer {
  &__logo-link { /* エレメント */ }
  &__logo-image { /* エレメント */ }
  &__nav { /* エレメント */ }
  &__nav-list { /* エレメント */ }
  &__nav-item { /* エレメント */ }
  &__nav-link { /* エレメント */ }
  &__partner-link {
    &--main { /* モディファイア */ }
    &--sub { /* モディファイア */ }
  }
}
</style>
```

### コンポーネント内でのSCSS使用
```astro
<style lang="scss">
// 必須：ミックスイン・関数のインポート
@import '../styles/variables';
@import '../styles/functions';
@import '../styles/mixins';

.component {
  // レスポンシブなスタイリング
  font-size: spx(16);
  @include tablet-up {
    font-size: tpx(20);
  }
  @include desktop-up {
    font-size: ppx(24);
  }
}
</style>
```

### 外部SCSSファイルのインポート
```astro
---
// グローバルスタイル
import '../styles/main.scss';
---
```

### コンポーネント内でのmixin/function使用
```astro
<style lang="scss">
// 必要なファイルを個別にインポート
@import '../styles/variables';
@import '../styles/functions';
@import '../styles/mixins';

.example {
  font-size: spx(16);
  @include tablet-up {
    font-size: tpx(20);
  }
  @include desktop-up {
    font-size: ppx(24);
  }
}
</style>
```

### SCSSファイル構造
- `main.scss`: すべてのSCSSをまとめるメインファイル
- `reset.scss`: リセットCSS（destyle.cssベース）
- `_variables.scss`: プロジェクト全体で使用する変数・定数
- `_functions.scss`: px→vw変換用カスタム関数
- `_mixins.scss`: レスポンシブ・フォント用ミックスイン

### 定義済み変数・関数・ミックスイン

**変数（_variables.scss）:**
```scss
$viewport_pc: 2560;    // PC基準ビューポート
$viewport_tab: 2048;   // タブレット基準ビューポート  
$viewport_sp: 720;     // スマホ基準ビューポート

$breakpoint-tablet-up: 744px;   // タブレット以上
$breakpoint-desktop-up: 1024px; // PC以上

$font-didot: "Didot", serif;
$font-noto-serif-jp: "Noto Serif JP", serif;
```

**関数（_functions.scss）:**
```scss
ppx($num_pc)   // PC用px→vw変換
tpx($num_tab)  // タブレット用px→vw変換
spx($num_sp)   // スマホ用px→vw変換
```

**ミックスイン（_mixins.scss）:**
```scss
@mixin tablet-up { ... }     // タブレット以上のメディアクエリ
@mixin desktop-up { ... }    // PC以上のメディアクエリ
@mixin hover { ... }         // ホバー可能デバイス用
@mixin zen-kaku-gothic-new-regular { ... }  // フォント設定
@mixin zen-kaku-gothic-new-bold { ... }     // フォント設定（太字）
```

### インポート順序（重要）
1. 変数（最初に読み込む）
2. 関数とミックスイン（変数の後に読み込む）
3. リセットCSS
4. その他のスタイル

### 使用例
```scss
// レスポンシブなフォントサイズ
.title {
  font-size: spx(20);        // スマホ: 20px相当
  @include tablet-up {
    font-size: tpx(24);      // タブレット: 24px相当
  }
  @include desktop-up {
    font-size: ppx(28);      // PC: 28px相当
  }
}

// フォントミックスイン使用
.heading {
  @include zen-kaku-gothic-new-bold;
}
```

### 注意事項
- コンポーネント内で外部のmixin/functionを使用する場合は、個別にインポートが必要
- インポート順序を守らないと変数が未定義エラーになる可能性
- `@import`は非推奨警告が出るが、現在は正常に動作

## 開発のヒント

### 基本的な開発フロー
- 新しいフレームワークの追加: `astro add [framework]`コマンドを使用
- TypeScriptサポートは標準で含まれています
- 開発サーバーはホットリロード機能付きです

### コンポーネント作成時のチェックリスト
1. **BEM記法でクラス命名** - `.block__element--modifier`形式
2. **セマンティックHTML** - `<nav>`, `<address>`, `<hr>`など適切なタグを選択
3. **SCSSインポート** - `@import '../styles/variables'`等を忘れずに
4. **レスポンシブ対応** - `spx()`, `tpx()`, `ppx()`関数を活用
5. **アクセシビリティ** - `aria-label`, `alt`属性の適切な設定

### JavaScript実装のガイドライン
- **複数コンポーネント間の協調**: `index.astro`内の`<script>`で管理
- **単一コンポーネント内のみ**: `client:load`等のディレクティブを検討
- **DOMセレクタ**: IDは一意性が保証される場合のみ使用、クラスセレクタを基本とする
- **nullチェック**: DOM要素の存在確認を必ず行う

### スタイリングのベストプラクティス
- **コンポーネント内完結**: 各`.astro`ファイル内で`<style lang="scss">`
- **ネストの適切な使用**: BEM記法に合わせた`&__element`形式
- **レスポンシブファースト**: モバイル基準で`@include tablet-up`で拡張
- **z-index管理**: オーバーレイ(10) < サイドバー(20) の階層を維持

## 業界コンテキスト

- 観光・ホスピタリティ業界向けサイトとして、アクセシビリティと多言語対応を考慮
- パフォーマンス重視（Astroの特性を活用）
- SEO最適化が重要

## メニューシステムの実装

### 現在の実装状況

このプロジェクトでは、**マルチデバイス対応のメニューシステム**を構築しています：

#### コンポーネント構成
- **Sidebar**: PC用固定サイドバー（`position: fixed`）
- **BottomBar**: スマホ用下部固定バー（`position: fixed`）
- **MenuOverlay**: 全画面メニューオーバーレイ（PC・スマホ共通）

#### JavaScript制御（index.astro）
```javascript
<script>
  const pcMenuToggle = document.getElementById('menu-toggle');           // PC用
  const mobileMenuToggle = document.querySelector('.bottom-bar__toggle'); // スマホ用
  const mobileMenuClose = document.querySelector('.menu-overlay__close'); // 閉じるボタン
  const menuOverlay = document.getElementById('menu-overlay');
  const sidebar = document.querySelector('.sidebar');

  // 共通のメニュー開閉制御
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menuOverlay.classList.add('show');
      if (sidebar) sidebar.classList.add('menu-open');
      document.body.style.overflow = 'hidden'; // スクロール禁止
    } else {
      menuOverlay.classList.remove('show');
      if (sidebar) sidebar.classList.remove('menu-open');
      document.body.style.overflow = ''; // スクロール復元
    }
  }

  // 各ボタンに同じ関数を割り当て
  if (pcMenuToggle) pcMenuToggle.addEventListener('click', toggleMenu);
  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
</script>
```

#### 設計の利点
1. **一元管理**: 全てのメニュー制御が1箇所に集約
2. **デバイス統一**: PC・スマホで同じオーバーレイを使用
3. **Astroらしい実装**: サーバーサイドレンダリング + 最小限のクライアントJS

## レイアウト設計思想

### CSS Grid + 固定要素ハイブリッド設計

このプロジェクトでは、メインレイアウトにCSS Gridを使用しながらも、サイドバーなど一部の要素は意図的にグリッドエリアに含めない設計を採用しています。

#### 設計の狙い

**1. スクロール動作の最適化**
- サイドバーを`grid-area: sidebar`で指定すると、右側コンテンツ（main + footer）の自然なスクロール動作が阻害される
- サイドバーを`position: fixed`で浮遊させることで、メインコンテンツエリア全体が一体となってスクロールできる

**2. レイアウト余白の適切な確保**
- CSS Gridで`grid-template-columns: sidebar-width 1fr`を指定することで、浮遊しているサイドバー分の余白を確実に確保
- サイドバーの幅変更時も、グリッド定義を変更するだけで全体レイアウトが自動調整される

#### 実装パターン

```scss
.layout-container {
  display: grid;
  // サイドバー分の余白を確保するが、サイドバー自体はグリッドに含めない
  grid-template:
    'main'
    'footer'
    / 1fr;
  
  @include tablet-up {
    grid-template:
      'sidebar main'
      'sidebar footer'
      / tpx($sidebar-width) 1fr; // サイドバー用の余白を確保
  }
}

// サイドバーは浮遊要素として別途配置
.sidebar {
  position: fixed; // グリッドに依存しない独立した配置
  // grid-area: sidebar; ← 意図的に指定しない
}
```

#### この設計の利点

- **UX向上**: 自然なページスクロール動作
- **保守性**: サイドバー幅の変更が容易
- **柔軟性**: 固定要素（BottomBar、MenuOverlayなど）も同様に配置可能
- **レスポンシブ対応**: スマホ時はグリッドが`'main' 'footer'`に自動変化

この設計思想により、モダンなWebアプリケーションに適したレイアウトシステムを実現しています。

## Swiperライブラリの使用ルール（重要）

### 基本方針：完全独立コンポーネント化

このプロジェクトではSwiperライブラリを使用する際、**コンポーネント間の干渉を完全に防ぐ**ために厳格なルールを設けています。

### 実装パターン（必須）

#### 1. 名前空間による完全独立化
```astro
<!-- ❌ 間違い：汎用クラス名（他のSwiperと衝突） -->
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">

<!-- ✅ 正解：ページ-セクション名で独立化 -->
<div class="top-hero__swiper">        <!-- コンテナのみ独自命名 -->
  <div class="swiper-wrapper">        <!-- Swiperの必須クラス名は維持 -->
    <div class="swiper-slide">        <!-- Swiperの必須クラス名は維持 -->
      <div class="top-hero__slide-content"> <!-- カスタム要素は独自命名 -->
```

#### 2. JavaScript初期化の独立化
```javascript
// ✅ 正解：独自コンテナクラスでSwiperを初期化
new Swiper('.top-hero__swiper', {
  modules: [Autoplay, EffectFade],
  effect: 'fade',
  // ...設定
});

new Swiper('.top-activities__swiper', {
  modules: [Navigation, Pagination, Autoplay],
  // effect指定なし = 横スライド
  // ...設定
});
```

#### 3. CSSスタイルの名前空間化
```scss
/* ✅ 正解：名前空間でスコープ化 */
.top-hero__swiper {
  width: 100%;
  height: 100%;
}

.top-hero__swiper .swiper-slide {
  display: block;
}

@keyframes top-hero-zoom-out {
  // アニメーション名も独立化
}

.top-hero__swiper .swiper-slide-active img {
  animation: top-hero-zoom-out 4s ease-out forwards;
}
```

### Swiper標準クラス名（変更禁止）

以下のクラス名はSwiperライブラリが内部的に参照するため、**絶対に変更してはいけません**：

- `swiper-wrapper` - スライドを包むラッパー
- `swiper-slide` - 各スライド要素
- `swiper-slide-active` - アクティブスライド（自動付与）
- `swiper-button-next` - 次へボタン（Navigation使用時）
- `swiper-button-prev` - 前へボタン（Navigation使用時）
- `swiper-pagination` - ページネーション（Pagination使用時）

### 新しいSwiper追加時の手順

#### 1. 命名規則の決定
- **パターン**: `{ページ名}-{セクション名}__swiper`
- **例**: 
  - `top-hero__swiper` (TOPページのHero)
  - `top-activities__swiper` (TOPページのActivities)
  - `about-gallery__swiper` (Aboutページのギャラリー)
  - `contact-testimonials__swiper` (Contactページの口コミ)

#### 2. ファイル作成・設定
```astro
---
// Swiper CSS (必要なモジュールのみ)
import 'swiper/css';
import 'swiper/css/navigation';    // ナビゲーション使用時
import 'swiper/css/pagination';    // ページネーション使用時
import 'swiper/css/effect-fade';   // フェード効果使用時
---

<div class="{ページ名}-{セクション名}__swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="{ページ名}-{セクション名}__slide-content">
        <!-- コンテンツ -->
      </div>
    </div>
  </div>
  
  <!-- ナビゲーション（必要に応じて） -->
  <div class="swiper-button-next {ページ名}-{セクション名}__swiper-next"></div>
  <div class="swiper-button-prev {ページ名}-{セクション名}__swiper-prev"></div>
  
  <!-- ページネーション（必要に応じて） -->
  <div class="swiper-pagination {ページ名}-{セクション名}__swiper-pagination"></div>
</div>

<script>
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.{ページ名}-{セクション名}__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    // 設定...
    navigation: {
      nextEl: '.{ページ名}-{セクション名}__swiper-next',
      prevEl: '.{ページ名}-{セクション名}__swiper-prev',
    },
    pagination: {
      el: '.{ページ名}-{セクション名}__swiper-pagination',
      clickable: true,
    },
  });
});
</script>
```

### 実装済みSwiper一覧

- **top-hero__swiper**: TOPページHeroセクション（フェード効果、オートプレイ）
- **top-activities__swiper**: TOPページActivitiesセクション（横スライド、ページネーション）
- **top-blog__swiper**: TOPページBlogセクション（横スライド、ページネーション、オートプレイ）

### 注意事項・トラブルシューティング

1. **クラス名衝突**: 汎用的なクラス名（`.swiper`等）は絶対に使用しない
2. **Swiper標準クラス**: `swiper-wrapper`、`swiper-slide`は変更禁止
3. **JavaScript分離**: 各コンポーネント内でSwiper初期化を完結させる
4. **CSS名前空間**: 全てのスタイルを独自のクラス名でスコープ化する
5. **アニメーション独立**: `@keyframes`の名前も独自化する

この方針により、サイト内で複数のSwiperを使用しても完全に独立し、互いに干渉することがありません。

## GSAPパララックス効果システム

### 概要

プロジェクトではGSAP（GreenSock Animation Platform）v3.13.0とScrollTriggerプラグインを使用して、洗練されたパララックススクロール効果を実装しています。

### 技術仕様

- **ライブラリ**: GSAP v3.13.0 + ScrollTrigger プラグイン
- **実装場所**: `src/pages/index.astro`のメインスクリプト内
- **対象要素**: `.parallax-image`クラスの付いた画像要素

### 実装パターン

```javascript
// GSAP ScrollTriggerによるパララックス効果
gsap.registerPlugin(ScrollTrigger);

// パララックス画像の初期化と設定
function initParallax() {
  const parallaxImages = document.querySelectorAll('.parallax-image');
  
  parallaxImages.forEach((img) => {
    gsap.to(img, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top", 
        scrub: true,
        onToggle: self => {
          console.log(`Parallax effect toggled for`, img, self.isActive);
        }
      }
    });
  });
}

// DOMロード完了後にパララックス効果を初期化
document.addEventListener('DOMContentLoaded', initParallax);
```

### 使用箇所

- **Locationセクション**: 背景パララックス画像でセクション間の視覚的つながりを演出
- **その他のセクション**: 必要に応じてパララックス画像を追加可能

### HTML構造パターン

```astro
<!-- パララックス画像用のコンテナ -->
<div class="parallax-container">
  <picture>
    <!-- レスポンシブ対応画像 -->
    <source media="(min-width: 1024px)" srcset={parallaxImage.src} />
    <img 
      class="parallax-image"
      src={parallaxImage.src} 
      alt="" 
    />
  </picture>
</div>
```

### CSS設計

```scss
.parallax-container {
  position: relative;
  overflow: hidden;
  
  .parallax-image {
    width: 100%;
    height: auto;
    will-change: transform; // パフォーマンス最適化
  }
}
```

### パフォーマンス考慮事項

- **will-change**: CSSで`will-change: transform`を指定してGPUアクセラレーション有効化
- **scrub**: ScrollTriggerの`scrub: true`でスムーズなスクロール連動
- **コンソールログ**: 開発時のデバッグ用ログ出力（本番環境では削除推奨）

### 拡張方法

新しいセクションにパララックス効果を追加する場合：
1. 画像に`parallax-image`クラスを付与
2. 親要素にoverflow設定
3. 必要に応じて`yPercent`や`scrollTrigger`設定をカスタマイズ

この実装により、モダンで洗練された視覚的体験を提供しています。

## プロジェクト開発マイルストーン

### 🎯 フェーズ1: TOPページ開発 [完了]

**期間**: プロジェクト開始 〜 現在  
**目標**: 完全な機能を持つTOPページの構築

**主要成果物**:
- ✅ 基本アーキテクチャとプロジェクト構造
- ✅ 7つの主要セクション（Hero・Location・Activities・Enjoy・Hospitality・Blog・News）
- ✅ レスポンシブデザイン（モバイル・タブレット・デスクトップ）
- ✅ ナビゲーション・メニューシステム（PC・モバイル統合）
- ✅ モーダルシステム（動画再生・宿泊予約）
- ✅ 再利用可能UIコンポーネント（MoreButton・SectionWave）
- ✅ 高度なアニメーション（Swiper・GSAPパララックス）
- ✅ TypeScript型安全性の確保

**技術的成果**:
- Astroらしい設計思想の確立
- BEM記法によるスケーラブルなCSS設計
- コンポーネント間の適切な責務分離
- パフォーマンス最適化（WebP画像、レスポンシブ対応）

### 🚀 フェーズ2: 下層ページ開発 [次期開始予定]

**目標**: サイト全体のページ構造完成

**予定作業内容**:
- 各下層ページのテンプレート作成
- 共通レイアウトの抽出・リファクタリング
- ページ間遷移とルーティングの実装
- パンくずナビゲーション
- サイトマップ構築

### 🔄 フェーズ3: CMS統合・動的コンテンツ [将来実装]

**目標**: コンテンツ管理機能の実装

**予定技術スタック**:
- ヘッドレスCMS（検討中）
- 動的データ取得・表示機能
- 管理画面との連携

### 📊 フェーズ4: 最終調整・デプロイ [最終段階]

**目標**: 本番環境への対応準備

**予定作業**:
- パフォーマンス最終調整
- SEO最適化
- アクセシビリティ監査
- 本番デプロイ準備

## プロジェクト現在のステータス

### 完了済み実装
✅ **基本アーキテクチャ**: Astroプロジェクトの土台構築完了  
✅ **コンポーネント分割**: UI要素の論理的分離完了  
✅ **レイアウトシステム**: CSS Grid + 固定要素ハイブリッド設計完了  
✅ **メニューシステム**: PC・スマホ統一メニュー制御完了  
✅ **スタイル管理**: BEM記法 + SCSS ミックスイン活用完了  
✅ **モーダルシステム**: VideoModal・BookingModal実装完了
✅ **Swiperシステム**: Hero・Activities・Blogセクションでの独立実装完了
✅ **TOPページセクション**: 全7セクション（Hero・Location・Activities・Enjoy・Hospitality・Blog・News）実装完了
✅ **GSAPパララックス効果**: ScrollTrigger使用したパララックス画像統合完了
✅ **共通UIコンポーネント**: MoreButton・SectionWave実装・各セクションで活用中
✅ **ホバーエフェクト**: Activities・Enjoy・Hospitality・Blogで統一されたホバー演出実装完了
✅ **レスポンシブ画像**: 全セクションでAstro getImage() + WebP最適化完了
✅ **セマンティックHTML**: 適切なHTML要素・構造でアクセシビリティ対応完了
✅ **TypeScript型定義**: カスタム型定義でSwiper・Astroコンポーネント警告解消完了
✅ **アクティビティページ基盤**: 一覧・詳細ページの動的ルーティングと静的データ管理システム完了

### 現在のコンポーネント構成

**メインページ:**
- **index.astro**: TOPページ（JavaScript中央管理、レイアウト定義、全セクション統合）

**下層ページ:**
- **activities/index.astro**: アクティビティ一覧ページ（フィルタリング・ソート対応予定）
- **activities/[slug].astro**: アクティビティ詳細ページ（動的ルーティング対応）

**レイアウト・ナビゲーション:**
- **Sidebar.astro**: PC用固定サイドバー
- **BottomBar.astro**: スマホ用下部固定バー（TOPページのみスクロール連動、下層ページは常時表示）
- **MenuOverlay.astro**: 全画面メニューオーバーレイ
- **Footer.astro**: ページフッター

**モーダル:**
- **VideoModal.astro**: 動画再生用モーダル
- **BookingModal.astro**: 宿泊予約サイト選択モーダル

**TOPページセクション（実装順）:**
1. **Hero.astro**: ヒーローセクション（Swiper fadeエフェクト、動画サムネイル、GSAPパララックス対応）
2. **Location.astro**: ロケーション紹介セクション（レスポンシブ画像、縦書きテキスト、GSAPパララックス統合）
3. **Activities.astro**: アクティビティ紹介セクション（Swiper横スライド、ページネーション、ホバーエフェクト）
4. **Enjoy.astro**: おすすめの過ごし方セクション（5つのカード、ホバーエフェクト、装飾画像）
5. **Hospitality.astro**: ホスピタリティセクション（Room・Food・Onsen、装飾リーフ、レスポンシブレイアウト）
6. **Blog.astro**: ブログセクション（Swiper横スライド、ページネーション、ホバーエフェクト）
7. **News.astro**: お知らせ・イベント情報セクション（Information・Event、セマンティックHTML）

**共通UIコンポーネント:**
- **MoreButton.astro**: 再利用可能Moreボタン（Props対応、カスタマイズ可能）
- **SectionWave.astro**: 再利用可能Waveコンポーネント（色カスタマイズ対応）
- **Breadcrumb.astro**: 再利用可能パンくずナビゲーション（2-4+レベル対応）

**データ管理:**
- **activities.ts**: アクティビティの静的データと型定義（将来的にCMS統合予定）

### 技術的特徴
- **Astroらしい設計**: サーバーサイドレンダリング中心、最小限のクライアントJS
- **レスポンシブファースト**: スマホ基準でPC拡張のアプローチ
- **保守性重視**: コンポーネント内でスタイル完結、BEM記法採用
- **UX最適化**: 自然なスクロール動作、統一されたメニュー体験

### 開発時の重要ポイント
1. **JavaScript**: 複数コンポーネント間協調は`index.astro`で中央管理
2. **スタイル**: 各コンポーネント内でSCSS完結、必要な関数・ミックスインをインポート
3. **レイアウト**: サイドバー等の固定要素はグリッドエリアに含めない
4. **クラス命名**: BEM記法を厳守（`.block__element--modifier`）
5. **Swiper実装**: 必ず名前空間による独立化を行う（`{page}-{section}__swiper`）
6. **画像最適化**: Astro getImage()でWebP変換・複数解像度対応
7. **ホバーエフェクト**: `@include hover`で対応デバイス限定・統一トランジション
8. **セマンティックHTML**: `<time>`, `<article>`, `<header>`等を適切に使用
9. **再利用コンポーネント**: 共通UI要素（MoreButton等）は`ui/`ディレクトリに配置
10. **レスポンシブ設計**: spx/ppx/tpx関数でデバイス別最適化

## モーダルシステムの実装

### 実装済みモーダル機能

このプロジェクトでは、**階層化されたモーダルシステム**を構築しています：

#### モーダルの種類と役割
- **VideoModal**: 動画再生用モーダル（z-index: 100）
- **BookingModal**: 宿泊予約サイト選択用モーダル（z-index: 110）

#### 共通設計パターン

**HTML構造（BEM記法）:**
```astro
<div class="modal-name" id="modal-name">
  <div class="modal-name__overlay">
    <div class="modal-name__container">
      <div class="modal-name__content">
        <!-- モーダルの中身 -->
      </div>
      <button class="modal-name__close">
        <!-- 閉じるボタンSVG -->
      </button>
    </div>
  </div>
</div>
```

**CSS設計:**
```scss
.modal-name {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100; // 階層に応じて調整
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  &__overlay {
    background-color: rgba(255, 255, 255, 0.95);
    width: 100vw;
    height: 100svh;
    display: grid;
    place-items: center;
  }
  
  &__container {
    position: relative;
  }
  
  &__close {
    position: absolute;
    left: 50%;
    bottom: spx(-25);
    transform: translate(-50%, 100%);
    // ホバー効果込み
  }
}
```

**JavaScript制御パターン:**
```javascript
// モーダル要素の取得
const modal = document.querySelector('.modal-name') as HTMLElement | null;
const modalClose = document.querySelector('.modal-name__close') as HTMLElement | null;
const triggerElements = document.querySelectorAll('.trigger-selector');

// 開く関数
function openModal() {
  if (modal) {
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    document.body.style.overflow = 'hidden'; // スクロール禁止
  }
}

// 閉じる関数
function closeModal() {
  if (modal) {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    document.body.style.overflow = ''; // スクロール復元
  }
}

// イベントリスナー設定
if (modalClose) modalClose.addEventListener('click', closeModal);
triggerElements.forEach(trigger => {
  trigger.addEventListener('click', openModal);
});

// オーバーレイクリックで閉じる
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal || (e.target as HTMLElement).classList.contains('modal-name__overlay')) {
      closeModal();
    }
  });
}
```

#### 宿泊予約モーダルの特徴

**トリガー要素（複数デバイス対応）:**
- **PC/タブレット**: サイドバーの「宿泊予約」ボタン (`.sidebar-menu-button`)
- **スマホ（メニュー内）**: メニューオーバーレイの「宿泊予約」ボタン (`.menu-overlay__button`)
- **スマホ（下部バー）**: BottomBarの「宿泊予約」ボタン (`.bottom-bar__button`)

**予約サイトリンク:**
```astro
<nav class="booking-modal__nav" aria-label="宿泊予約サイト選択">
  <ul class="booking-modal__list">
    <li class="booking-modal__item">
      <a href="#" class="booking-modal__link">
        <span class="booking-modal__text">じゃらんで予約</span>
        <svg class="booking-modal__arrow"><!-- 矢印アイコン --></svg>
      </a>
    </li>
    <!-- 楽天トラベルなど他のサイト -->
  </ul>
</nav>
```

#### モーダルシステムの利点

1. **統一されたUX**: 全モーダルで同じ操作感
2. **アクセシビリティ**: セマンティックHTML、適切なARIAラベル
3. **レスポンシブ対応**: 全デバイスで適切な表示
4. **保守性**: 共通パターンで新しいモーダル追加が容易

## BottomBar スクロール制御機能

### トップページ専用のスクロール連動表示

BottomBar（スマホ用下部固定バー）に、**トップページでのみ動作するスクロール連動表示機能**を実装しています：

#### 動作仕様
- **トップページ**: 初期非表示 → 30pxスクロールでふわっと表示 → 上部戻りでふわっと非表示
- **その他ページ**: 最初からずっと表示（JavaScript非実行のため自然に表示される）

#### 実装パターン

**CSS（BottomBar.astro）:**
```scss
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  transform: translateY(0);
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &.hide-on-top {
    /* トップページで上部にいる時の非表示状態 */
    transform: translateY(100%);
    opacity: 0;
  }
  
  &.show-on-scroll {
    /* スクロール時の表示状態 */
    transform: translateY(0);
    opacity: 1;
  }
}
```

**JavaScript（index.astro）:**
```javascript
// BottomBarスクロール表示制御（トップページのみ）
const bottomBar = document.querySelector('.bottom-bar') as HTMLElement | null;
const isTopPage = window.location.pathname === '/' || window.location.pathname === '/index.html';

if (bottomBar && isTopPage) {
  // トップページでは初期状態で非表示
  bottomBar.classList.add('hide-on-top');
  
  let scrollTimeout: number | null = null;
  
  // スクロールイベント（スロットリング付き）
  function handleScroll() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = window.setTimeout(() => {
      if (!bottomBar) return; // nullチェック
      
      const scrollY = window.scrollY;
      const scrollThreshold = 30; // 30px閾値
      
      if (scrollY > scrollThreshold) {
        // 30px以上スクロール：表示
        bottomBar.classList.remove('hide-on-top');
        bottomBar.classList.add('show-on-scroll');
      } else {
        // 30px以下：非表示
        bottomBar.classList.add('hide-on-top');
        bottomBar.classList.remove('show-on-scroll');
      }
    }, 16); // 60FPS対応
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 初期状態チェック
}
```

#### パフォーマンス最適化

1. **スロットリング**: `setTimeout`で16ms間隔（60FPS対応）
2. **ページ判定**: `isTopPage`でトップページのみ処理実行
3. **メモリ効率**: `clearTimeout`で重複実行防止
4. **Type安全性**: TypeScript対応、適切なnullチェック

#### 設計の利点

- **スマートな制御**: トップページでのみ動作、他ページは常時表示
- **ユーザビリティ**: 自然なスクロール連動でアクセスしやすさ向上
- **パフォーマンス**: 最小限のJavaScript実行でバッテリー効率化

## 再利用可能UIコンポーネント

### MoreButtonコンポーネント

プロジェクト内で統一された「もっと見る」ボタンを提供する再利用可能コンポーネントです。

#### ファイル場所
`src/components/ui/MoreButton.astro`

#### Props Interface
```typescript
export interface Props {
  href: string;              // リンク先URL
  textColor?: string;        // テキスト色（CSS変数）
  hoverColor?: string;       // ホバー色（CSS変数）
  arrowColor?: string;       // 矢印色（stroke値）
  text?: string;             // ボタンテキスト（デフォルト: "more"）
  className?: string;        // 追加CSSクラス
}
```

#### 使用例
```astro
<!-- 基本的な使用（緑系） -->
<MoreButton 
  href="#"
  textColor="var(--green_3, #43512a)"
  hoverColor="var(--green_2, #adc400)"
  arrowColor="#43512A"
/>

<!-- 青系バリエーション -->
<MoreButton 
  href="/news"
  textColor="var(--blue_5, #026995)"
  hoverColor="var(--blue_4, #59a1c0)"
  arrowColor="#026995"
  text="ニュース一覧へ"
/>

<!-- 位置調整用コンテナとの組み合わせ -->
<div class="section__more-link">
  <MoreButton href="#" ... />
</div>
```

#### デザイン特徴
- **レスポンシブ対応**: spx/ppx関数による自動サイズ調整
- **ホバーエフェクト**: テキストと矢印が同時に色変化（0.3s ease）
- **アクセシビリティ**: セマンティックなHTML構造
- **カスタマイズ性**: 色・テキスト・リンク先を自由に設定

#### 実装済み使用箇所
- **Activities.astro**: `top-activities__more-link`コンテナ内
- **Hospitality.astro**: `hospitality__link`コンテナ内
- **News.astro**: `news__more`コンテナ内

#### 実装パターン
```astro
<!-- コンテナクラスで位置調整 -->
<div class="component__more-link">
  <MoreButton ... />
</div>

<!-- SCSS側でコンテナをレイアウト -->
.component {
  &__more-link {
    // 位置調整、マージン設定等
    display: flex;
    justify-content: center;
    @include tablet-up {
      margin-left: auto;
    }
  }
}
```

## TypeScript型定義システム

### 概要

プロジェクトではTypeScript警告を解消し、開発体験を向上させるためにカスタム型定義システムを導入しています。

### 型定義ファイル

#### 1. `src/types/astro-components.d.ts`
- **目的**: Astroコンポーネントとアセットファイルの型定義
- **対象**: `.astro`, `.svg`, `.png`, `.jpg`, `.webp`ファイル

```typescript
// Astroコンポーネントの汎用型定義
declare module '*.astro' {
  const Component: any;
  export default Component;
}

// 画像アセットの型定義
declare module '*.png' {
  const src: string;
  export default src;
}
```

#### 2. `src/types/swiper.d.ts`
- **目的**: Swiper v11ライブラリの型定義
- **対象**: `swiper`, `swiper/modules`, `swiper/css/*`

```typescript
// Swiper本体の型定義
declare module 'swiper' {
  export default class Swiper {
    constructor(element: string | HTMLElement, options?: any);
    // メソッド定義...
  }
}

// モジュールの型定義
declare module 'swiper/modules' {
  export class Navigation { static moduleName: string; }
  export class Pagination { static moduleName: string; }
  export class Autoplay { static moduleName: string; }
  export class EffectFade { static moduleName: string; }
  // オプション interfaces...
}
```

### tsconfig.json設定

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [
    ".astro/types.d.ts", 
    "**/*", 
    "src/types/**/*.d.ts"
  ],
  "exclude": ["dist"],
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}
```

### 依存関係

- `@types/swiper`: Swiper用の基本型定義（devDependencies）

### 効果

- TypeScript警告の解消
- IntelliSense（コード補完）の改善
- 開発時のコード品質向上
- 型安全なプログラミング体験

### 新しいライブラリ追加時の手順

1. `npm install library-name`
2. 対応する`@types/library-name`があるかチェック
3. なければ`src/types/`に独自の型定義ファイルを作成
4. `tsconfig.json`の設定確認

この型定義システムにより、警告のない快適な開発環境を実現しています。

## SectionWave共通コンポーネント

### 概要

セクション上部に表示されるwave（波）要素を再利用可能なコンポーネント化しました。

### ファイル場所
`src/components/ui/SectionWave.astro`

### Props Interface
```typescript
export interface Props {
  fillColor: string;      // pathのfill色（必須）
  className?: string;     // 追加CSSクラス（オプション）
}
```

### 使用例
```astro
<!-- Blog.astroでの使用 -->
<SectionWave 
  fillColor="var(--green_1, #e2ecc4)"
  className="blog__wave"
/>

<!-- Enjoy.astroでの使用 -->
<SectionWave 
  fillColor="white"
  className="enjoy__wave"
/>
```

### デザイン特徴
- **統一されたSVGパス**: 全セクションで同じ波形状を使用
- **カスタマイズ可能な色**: セクションごとに適切な色を設定
- **基本配置スタイル**: `position: absolute; top: -1px; left: 0; width: 100%`
- **BEM記法対応**: `className`プロパティで既存クラス名継続使用

### 実装済み使用箇所
- **Blog.astro**: 緑系の背景（`var(--green_1, #e2ecc4)`）
- **Enjoy.astro**: 白背景（`white`）

### コンポーネント化の利点
1. **再利用性**: 他のセクションでも簡単に使用可能
2. **一貫性**: 同じSVGパスで統一された見た目
3. **保守性**: SVG変更時は1箇所のみ修正
4. **柔軟性**: セクションごとに色をカスタマイズ可能

## 開発方針・ベストプラクティス集

### 🎯 基本開発方針

#### 1. Astroファーストな設計思想
- **サーバーサイドレンダリング優先**: 可能な限りサーバー側で処理
- **Islands Architecture活用**: 必要な部分のみでクライアントサイドJavaScript実行
- **静的生成の最大化**: パフォーマンスとSEO最適化を重視

#### 2. コンポーネント設計原則
- **単一責任の原則**: 各コンポーネントは1つの明確な役割を持つ
- **再利用可能性**: `ui/`ディレクトリの共通コンポーネントを積極活用
- **Props型安全性**: TypeScriptのPropsインターフェースを明確に定義

#### 3. ファイル命名・構造規則
```
pages/           # ファイルベースルーティング
  index.astro    # TOPページ
  about.astro    # 下層ページ例
  
components/
  ui/           # 再利用可能コンポーネント
    MoreButton.astro
    SectionWave.astro
  pages/        # ページ固有コンポーネント
    top/        # TOPページ専用
    about/      # Aboutページ専用
```

### 🎨 スタイリング・デザインベストプラクティス

#### 1. BEM記法の厳格遵守
```scss
.block {
  &__element {
    &--modifier {
      // スタイル定義
    }
  }
}

// 良い例
.hero__title--large
.blog__article
.enjoy__card-button

// 悪い例  
.heroTitle
.blogPost
.btn
```

#### 2. SCSS設計パターン
```scss
// 必須インポート順序（重要）
@import '../../../styles/variables';  // 最初
@import '../../../styles/functions';   // 変数の後
@import '../../../styles/mixins';     // 関数の後

.component {
  // モバイルファーストでスタイル定義
  font-size: spx(16);
  
  // タブレット以上で拡張
  @include tablet-up {
    font-size: tpx(20);
  }
  
  // デスクトップで最適化
  @include desktop-up {
    font-size: ppx(24);
  }
}
```

#### 3. レスポンシブデザイン指針
- **モバイルファースト**: スマホ基準で設計してPC拡張
- **3ブレイクポイント**: スマホ（〜743px）・タブレット（744px〜）・PC（1024px〜）
- **関数活用**: `spx()`, `tpx()`, `ppx()`でvw変換による滑らかなスケーリング

### ⚛️ JavaScript・インタラクション設計

#### 1. 責務分離の原則
```javascript
// ✅ 複数コンポーネント間の協調 → index.astro
const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');

// ✅ 単一コンポーネント内完結 → 各コンポーネント内<script>
// または client:load ディレクティブ使用検討
```

#### 2. Swiper実装のベストプラクティス
```javascript
// 必須: 完全独立した名前空間
new Swiper('.{page}-{section}__swiper', {
  modules: [Navigation, Pagination, Autoplay],
  // 設定...
});
```

#### 3. GSAP活用指針
```javascript
// ScrollTriggerは index.astro で一元管理
gsap.registerPlugin(ScrollTrigger);

// パフォーマンス重視の設定
gsap.to(element, {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: element.parentElement,
    scrub: true // スムーズな連動
  }
});
```

### 🖼️ アセット・画像最適化戦略

#### 1. 画像最適化パターン
```astro
// 必須: Astro getImage() でWebP変換
const optimizedImage = await getImage({
  src: originalImage,
  format: 'webp',
  widths: [640, 1024, 1680], // デバイス別最適化
});

// レスポンシブ画像の実装
<picture>
  <source media="(min-width: 1024px)" srcset={optimizedImage.srcSet} />
  <source media="(min-width: 744px)" srcset={tabletImage.srcSet} />
  <img src={mobileImage.src} alt="適切なalt属性" />
</picture>
```

#### 2. ディレクトリ構造
```
src/assets/images/
  top/              # TOPページ専用
    hero-slide/     # セクション別整理
    activities/
    blog/
  common/           # 共通画像（将来追加予定）
```

### 🔄 コンポーネント間連携パターン

#### 1. Propsによるデータ受け渡し
```astro
<!-- 親コンポーネント -->
<MoreButton 
  href="/activities"
  textColor="var(--blue_5, #026995)"
  hoverColor="var(--green_2, #adc400)"
  text="詳細を見る"
/>
```

#### 2. 共通コンポーネントの活用例
```astro
<!-- セクション上部のwave要素 -->
<SectionWave 
  fillColor="var(--green_1, #e2ecc4)"
  className="section__wave"
/>

<!-- セクション内のMoreボタン -->
<div class="section__more-link">
  <MoreButton href="#" textColor="..." />
</div>
```

### 🛠️ 開発・デバッグ効率化

#### 1. TypeScript型定義活用
- カスタム型定義で警告解消（`src/types/`）
- Props型安全性の確保
- IntelliSense活用で開発効率向上

#### 2. 開発サーバー最適活用
```bash
# ホットリロード付き開発サーバー
npm run dev

# 本番ビルドでパフォーマンスチェック
npm run build
npm run preview
```

#### 3. Git運用方針
- **機能単位でのコミット**: セクション完成ごとにコミット
- **わかりやすいコミットメッセージ**: `feat: Heroセクション実装完了`

### 📏 コード品質維持指針

#### 1. 一貫性の重要性
- BEM記法の厳格な適用
- インデント・改行の統一
- コメントの適切な配置

#### 2. パフォーマンス考慮
- 画像最適化の徹底
- 不要なJavaScriptの排除
- CSS/SCSS の効率的な設計

#### 3. アクセシビリティ対応
- セマンティックHTMLの使用
- 適切なARIAラベル
- キーボードナビゲーション対応

### 🚀 次期開発における留意点

#### 1. 下層ページ開発時
- TOPページで確立した設計パターンの踏襲
- 共通レイアウトの抽出検討
- ナビゲーション・パンくず対応

#### 2. CMS統合時
- 現在の静的設計を活かした段階的移行
- コンテンツ型とコンポーネントの適切なマッピング
- SEO・パフォーマンスの維持

この開発方針により、一貫性のある高品質なコードベースを維持し、スケーラブルな開発を実現しています。

## Breadcrumb共通コンポーネント

### 概要

サイト内のページ階層を表示するパンくずナビゲーションを再利用可能なコンポーネント化しました。アクティビティ詳細ページをはじめ、サイト全体で一貫したナビゲーション体験を提供します。

### ファイル場所
`src/components/ui/Breadcrumb.astro`

### Props Interface
```typescript
export interface BreadcrumbItem {
  text: string;    // 表示テキスト
  href?: string;   // リンク先（現在ページの場合はundefined）
}

export interface Props {
  items: BreadcrumbItem[]; // パンくず項目の配列
}
```

### 使用例
```astro
<!-- 2レベル階層（HOME > 現在ページ） -->
<Breadcrumb items={[
  { text: 'TOP', href: '/' },
  { text: 'アクティビティ一覧' }
]} />

<!-- 3レベル階層（HOME > 中間ページ > 現在ページ） -->
<Breadcrumb items={[
  { text: 'TOP', href: '/' },
  { text: 'アクティビティ', href: '/activities' },
  { text: 'SUP体験' }
]} />

<!-- 4+レベル階層も対応 -->
<Breadcrumb items={[
  { text: 'TOP', href: '/' },
  { text: 'アクティビティ', href: '/activities' },
  { text: '水上アクティビティ', href: '/activities/water' },
  { text: 'SUP体験詳細' }
]} />
```

### デザイン特徴
- **セマンティックHTML**: `<nav>`と`<ol>`を使用したアクセシブルな構造
- **区切り文字**: 「>」（\003E）を使用してレベル間を区切り
- **現在ページ表示**: リンクなしの`<span>`で現在ページを明示
- **レスポンシブ対応**: spx/ppx関数による自動サイズ調整

#### HTML構造
```astro
<nav class="breadcrumb" aria-label="パンくずナビゲーション">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a href="/" class="breadcrumb__link">TOP</a>
    </li>
    <li class="breadcrumb__item">
      <a href="/activities" class="breadcrumb__link">アクティビティ</a>
    </li>
    <li class="breadcrumb__item breadcrumb__item--current">
      <span class="breadcrumb__current">SUP体験</span>
    </li>
  </ol>
</nav>
```

### 実装済み使用箇所
- **activities/[slug].astro**: アクティビティ詳細ページ

### アクセシビリティ対応
- **aria-label**: ナビゲーションの目的を明示
- **セマンティック構造**: 順序リストによる階層表現
- **視覚的区別**: 現在ページは`breadcrumb__item--current`クラスで識別

### コンポーネント化の利点
1. **再利用性**: サイト全体で統一されたパンくずナビゲーション
2. **保守性**: デザイン変更時は1箇所のみ修正
3. **柔軟性**: 2-4+レベルの任意の階層に対応
4. **型安全性**: TypeScript型定義による確実なデータ構造

## アクティビティページシステム

### 概要

TOPページ完成後の第二フェーズとして、アクティビティの一覧ページと詳細ページを実装。Astroのファイルベースルーティングと動的ルーティング機能を活用した構造を採用。

### 実装済み構造

#### ページ構成
- **一覧ページ**: `/activities/` - 全アクティビティのリスト表示
- **詳細ページ**: `/activities/[slug]` - 個別アクティビティの詳細情報表示

#### データ管理システム
```typescript
// src/data/activities.ts
export interface Activity {
  slug: string;                    // URL用識別子
  title: string;                   // アクティビティ名
  category: string;                // カテゴリ分類
  description: string;             // 概要説明
  images: {
    thumbnail: string;             // 一覧用サムネイル
    hero: string;                  // 詳細ページメイン画像
    gallery: string[];             // ギャラリー画像配列
  };
  
  // フィルタリング・ソート対応データ
  targetAge: { min: number; max?: number };  // 対象年齢
  season: string[];                          // 実施時期
  capacity: { min: number; max: number };    // 参加人数
  duration: number;                          // 所要時間（分）
  price: { adult: number; child?: number };  // 料金設定
  weather: string[];                         // 実施可能天気
  
  // 詳細ページ専用データ
  highlights: string[];            // おすすめポイント
  program: Array<{time: string; content: string}>; // プログラム流れ
  notes: string[];                 // 注意事項
  bookingUrl?: string;             // 予約リンク
}
```

#### 実装済みアクティビティデータ
1. **SUP体験** (`sup-experience`) - 水上体験・初心者向け・人気アクティビティ
2. **キャンプファイヤー体験** (`campfire-experience`) - 自然体験・ファミリー向け・人気アクティビティ
3. **レンタルサイクル** (`rental-cycle`) - 陸上体験・自由度高
4. **樹海トレイル** (`forest-trail`) - 自然体験・ガイド付き

### 動的ルーティング実装

#### 詳細ページ (`[slug].astro`)
```astro
export async function getStaticPaths() {
  return activities.map((activity: Activity) => ({
    params: { slug: activity.slug },
    props: { activity }
  }));
}

const { activity } = Astro.props;
const pageTitle = `${activity.title} | クワルビリゾート`;
```

### レイアウト継承
- **共通レイアウト**: TOPページと同じSidebar・BottomBar・Footer構成
- **BottomBar動作**: 下層ページでは常時表示（TOPページのスクロール連動なし）
- **モーダル**: VideoModal・BookingModalも全ページで利用可能

### データ連動システムの詳細設計

#### 1. データフローの全体像

```mermaid
graph TD
    A[activities.ts] --> B[アクティビティ詳細ページ]
    A --> C[アクティビティ一覧ページ]
    A --> D[TOPページActivitiesセクション]
    B --> E[人気アクティビティセクション]
    E --> F[Swiperスライダー動的表示]
    C --> G[フィルタリング・ソート機能]
    D --> H[TOPページカード表示]
```

#### 2. 中央データ管理システム (`src/data/activities.ts`)

**データ構造の設計思想:**
```typescript
// 完全な型定義によるデータ整合性確保
export interface Activity {
  // 基本情報（必須）
  slug: string;                    // URL生成・ルーティング用
  title: string;                   // 表示名・SEO用
  category: string;                // カテゴリ分類・フィルタ用
  description: string;             // 概要・メタ情報用
  
  // 画像管理（最適化対応）
  images: {
    thumbnail: string;             // 一覧・カード表示用
    hero: string;                  // 詳細ページメイン画像
    gallery: string[];             // 詳細ページギャラリー用
  };
  
  // フィルタリング・検索対応データ
  targetAge: { min: number; max?: number };  // 年齢フィルタ用
  season: string[];                          // 季節フィルタ用
  capacity: { min: number; max: number };    // 人数フィルタ用
  duration: number;                          // 時間フィルタ・表示用
  price: { adult: number; child?: number };  // 価格ソート・表示用
  weather: string[];                         // 天気フィルタ用
  
  // 表示制御フラグ
  isPopular: boolean;              // 人気アクティビティ表示制御
  isRecommended?: boolean;         // おすすめ表示制御（将来実装）
  isNew?: boolean;                 // 新着表示制御（将来実装）
  
  // UI表示用データ
  badges: Array<{                  // 動的バッジ表示用
    type: 'reservation' | 'group' | 'beginner' | 'advanced';
    text: string;
  }>;
  
  // 詳細ページ専用データ
  highlights: string[];            // おすすめポイント
  about: {                         // 詳細情報
    duration: string;              // 表示用時間文字列
    targetAge: string;             // 表示用年齢文字列
    season: string;                // 表示用季節文字列
  };
  program: Array<{                 // プログラム流れ
    time: string;
    content: string;
  }>;
  notes: string[];                 // 注意事項
  bookingUrl?: string;             // 予約システム連携用
}
```

#### 3. 動的ルーティングとデータ連携

**詳細ページ (`[slug].astro`) の実装パターン:**
```astro
---
import { activities, type Activity } from '../../data/activities.ts';

// 1. 静的パス生成（ビルド時）
export async function getStaticPaths() {
  return activities.map((activity: Activity) => ({
    params: { slug: activity.slug },     // URLパラメータ
    props: { activity }                  // ページpropsとして渡す
  }));
}

// 2. Props型定義
interface Props {
  activity: Activity;
}

const { activity } = Astro.props;

// 3. SEO・メタ情報の動的生成
const pageTitle = `${activity.title} | クワルビリゾート`;
const pageDescription = activity.description;

// 4. 人気アクティビティのフィルタリング（現在ページ除外）
const popularActivities = activities
  .filter(act => act.isPopular && act.slug !== activity.slug)
  .slice(0, 6); // 最大6件表示

// 5. パンくずナビゲーション用データ生成
const breadcrumbItems = [
  { text: 'TOP', href: '/' },
  { text: 'アクティビティ', href: '/activities' },
  { text: activity.title } // 現在ページ（リンクなし）
];
---

<Layout title={pageTitle} description={pageDescription}>
  <!-- パンくず -->
  <Breadcrumb items={breadcrumbItems} />
  
  <!-- メインコンテンツ（動的データ表示） -->
  <h1>{activity.title}</h1>
  <p>{activity.description}</p>
  
  <!-- 詳細情報（aboutオブジェクトから） -->
  <dl>
    <dt>所要時間</dt><dd>{activity.about.duration}</dd>
    <dt>対象年齢</dt><dd>{activity.about.targetAge}</dd>
    <dt>実施時期</dt><dd>{activity.about.season}</dd>
  </dl>
  
  <!-- バッジ表示（動的生成） -->
  {activity.badges.map((badge) => (
    <span class={`badge badge--${badge.type}`}>
      {badge.text}
    </span>
  ))}
  
  <!-- 人気アクティビティセクション（Swiperと連携） -->
  <section class="activities-popular">
    <div class="activities-popular__swiper">
      <div class="swiper-wrapper">
        {popularActivities.map((popularActivity) => (
          <div class="swiper-slide">
            <!-- 動的カード生成 -->
            <ActivityCard activity={popularActivity} />
          </div>
        ))}
      </div>
    </div>
  </section>
</Layout>
```

#### 4. 一覧ページへの応用パターン

**一覧ページ (`activities/index.astro`) での実装予想:**
```astro
---
import { activities } from '../data/activities.ts';

// 1. カテゴリ別分類
const categories = [...new Set(activities.map(act => act.category))];

// 2. フィルタリング用データ準備
const filterOptions = {
  categories: categories,
  seasons: [...new Set(activities.flatMap(act => act.season))],
  priceRanges: [
    { label: '〜5,000円', min: 0, max: 5000 },
    { label: '5,001〜10,000円', min: 5001, max: 10000 },
    { label: '10,001円〜', min: 10001, max: Infinity }
  ]
};

// 3. 初期表示用（人気順ソート）
const defaultActivities = activities
  .sort((a, b) => {
    if (a.isPopular && !b.isPopular) return -1;
    if (!a.isPopular && b.isPopular) return 1;
    return a.price.adult - b.price.adult; // 価格順
  });
---

<Layout title="アクティビティ一覧">
  <!-- フィルタUI -->
  <aside class="filter-panel">
    <select data-filter="category">
      {categories.map(cat => <option value={cat}>{cat}</option>)}
    </select>
    <!-- 他のフィルタ... -->
  </aside>
  
  <!-- アクティビティグリッド -->
  <main class="activities-grid" data-activities={JSON.stringify(activities)}>
    {defaultActivities.map((activity) => (
      <ActivityCard activity={activity} />
    ))}
  </main>
</Layout>

<script>
  // クライアントサイドフィルタリング
  const activitiesData = JSON.parse(
    document.querySelector('[data-activities]').dataset.activities
  );
  
  function filterActivities(filters) {
    return activitiesData.filter(activity => {
      // カテゴリフィルタ
      if (filters.category && activity.category !== filters.category) return false;
      
      // 価格フィルタ
      if (filters.priceMax && activity.price.adult > filters.priceMax) return false;
      
      // 季節フィルタ
      if (filters.season && !activity.season.includes(filters.season)) return false;
      
      return true;
    });
  }
</script>
```

#### 5. TOPページとの連携

**TOPページActivitiesセクションでの活用:**
```astro
---
// 人気アクティビティのみ抽出（最大4件）
const featuredActivities = activities
  .filter(activity => activity.isPopular)
  .slice(0, 4);
---

<section class="top-activities">
  <div class="top-activities__swiper">
    <div class="swiper-wrapper">
      {featuredActivities.map((activity) => (
        <div class="swiper-slide">
          <a href={`/activities/${activity.slug}`}>
            <h3>{activity.title}</h3>
            <p>¥{activity.price.adult.toLocaleString()}〜</p>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
```

#### 6. データ連動システムの利点

**1. 一元管理によるメリット:**
- データ変更時は`activities.ts`のみ更新すれば全ページに反映
- 型安全性により、データ構造変更時のエラーを事前検出
- 重複データなし、整合性保証

**2. スケーラビリティ:**
- 新しいアクティビティ追加は配列への追加のみ
- フィルタ条件追加は型定義拡張で対応
- CMS統合時もインターフェース維持で移行容易

**3. パフォーマンス:**
- 静的サイト生成により高速表示
- 必要な分のみクライアントサイドJS実行
- 画像最適化との組み合わせで最適パフォーマンス

**4. 保守性:**
- コンポーネント化により再利用促進
- 統一されたデータアクセスパターン
- 型定義による開発体験向上

### 今後の実装予定
- **一覧ページ**: フィルタリング・ソート機能
- **詳細ページ**: 画像ギャラリー（Swiper）・予約システム連携
- **TOPページ連携**: ActivitiesセクションからのリンクとMoreButton経由遷移

### 設計の利点
1. **型安全性**: TypeScript型定義でデータ整合性保証
2. **一元管理**: activities.tsで全アクティビティ情報を管理
3. **拡張性**: CMS統合時もインターフェース維持で移行容易
4. **SEO対応**: 各詳細ページが独立URL・メタ情報設定済み
5. **保守性**: TOPページの設計パターン踏襲で一貫した開発体験

## アクティビティ一覧ページのフィルタリングシステム

### 概要

アクティビティ一覧ページ（`/activities/`）では、**コネクテッドフィルタリングシステム**を実装しています。これは、一つのフィルタを選択すると他のフィルタの選択肢が動的に更新される高度な絞り込み機能です。

### 技術的特徴

#### 1. コネクテッドフィルタリング（連動絞り込み）
```javascript
// フィルタ選択時に他のオプションを動的更新
function updateFilterOptions() {
  // 現在の選択状態で利用可能なアクティビティを取得
  const availableActivities = getFilteredActivities(currentFilters);
  
  // 各フィルタのオプションを利用可能なデータに基づき更新
  updateTargetAgeOptions(availableActivities);
  updateSeasonOptions(availableActivities);
  updateCapacityOptions(availableActivities);
  // 他のフィルタも同様に更新
}
```

#### 2. 範囲マッチング機能
数値範囲を持つフィルタ（年齢・人数・料金・時間）で重複判定を実装：

```javascript
function hasOverlap(range1, range2) {
  return range1.max >= range2.min && range2.max >= range1.min;
}

// 実際の使用例：対象年齢フィルタ
function matchesTargetAge(activity, selectedAge) {
  const activityAge = { min: activity.targetAge.min, max: activity.targetAge.max || 100 };
  const filterAge = getAgeRange(selectedAge); // '中学生以上' → {min: 13, max: 100}
  return hasOverlap(activityAge, filterAge);
}
```

#### 3. 統一されたフィルタ項目

全てのアクティビティデータは以下の統一されたカテゴリを使用：

**対象年齢:**
- `'未就学児以上'` (3歳〜)
- `'小学生以上'` (6歳〜) 
- `'中学生以上'` (13歳〜)
- `'高校生以上'` (16歳〜)
- `'大人以上'` (20歳〜)

**実施時期:**
- `'春'` (3-5月)
- `'夏'` (6-8月)
- `'秋'` (9-11月)
- `'通年'` (年間実施)

**人数:**
- `'10名未満'` (1-9名)
- `'10名以上'` (10-19名)
- `'20名以上'` (20名〜)

**料金:**
- `'500円から1000円'`
- `'1000円から3000円'`
- `'3000円から5000円'`
- `'5000円から1万円'`

**所要時間:**
- `'1時間未満'` (〜60分)
- `'1時間以上'` (60-119分)
- `'2時間以上'` (120分〜)

**実施可能天気:**
- `'晴れ'` (晴天のみ)
- `'雨'` (雨天でも実施)
- `'全天候'` (天候不問)

**ご予約:**
- `'事前予約'` (要事前予約)
- `'当日予約'` (当日受付可)

### フィルタ項目の編集・追加・削除方法

#### 1. 新しいフィルタ項目の追加

**手順:**
1. `activities.ts`のActivityインターフェースに新フィールドを追加
2. 全アクティビティデータに該当フィールドを追加
3. `activities/index.astro`でフィルタオプション生成ロジックを追加
4. `ActivityFilters.astro`にUI要素を追加

**具体例：「レベル」フィルタの追加**

```typescript
// 1. src/data/activities.ts - インターフェース拡張
export interface Activity {
  // 既存フィールド...
  level: '初心者' | '中級者' | '上級者'; // 新フィールド追加
}

// 2. 各アクティビティデータに追加
export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    // 既存データ...
    about: [
      { term: 'レベル', description: '初心者' }, // about配列に追加
      // 他のabout項目...
    ],
  },
  // 他のアクティビティも同様...
];
```

```astro
<!-- 3. src/pages/activities/index.astro - フィルタオプション生成 -->
---
// レベルオプション生成
const levelSet = new Set<string>();
filteredActivities.forEach(activity => {
  const levelItem = activity.about.find(item => item.term === 'レベル');
  if (levelItem) levelSet.add(levelItem.description);
});

// カスタム順序定義（必要に応じて）
const levelOrder = ['初心者', '中級者', '上級者'];
const levelOptions: FilterOption[] = levelOrder
  .filter(level => levelSet.has(level))
  .map(level => ({ value: level, label: level }));
---
```

```astro
<!-- 4. src/components/pages/activities/ActivityFilters.astro - UI追加 -->
<!-- 既存のフィルタの後に追加 -->
<div class="activity-filters__wrapper">
  <select class="activity-filters__select" name="level">
    <option value="">レベル</option>
    {levelOptions.map(option => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
  <svg class="activity-filters__icon"><!-- 矢印アイコン --></svg>
</div>
```

#### 2. 既存フィルタ項目の修正

**手順:**
1. `activities.ts`内の該当データを一括更新
2. 必要に応じて統一カテゴリを変更

**具体例：天気カテゴリの変更**

```typescript
// src/data/activities.ts
// 変更前: '晴れ', '雨', '全天候'
// 変更後: '屋外のみ', '屋内可', '天候不問'

export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    about: [
      { term: '実施可能天気', description: '屋外のみ' }, // '晴れ' → '屋外のみ'
    ],
  },
  {
    slug: 'pottery-workshop', 
    about: [
      { term: '実施可能天気', description: '天候不問' }, // '全天候' → '天候不問'
    ],
  },
];
```

#### 3. フィルタ項目の削除

**手順:**
1. `activities.ts`から該当フィールド削除
2. `activities/index.astro`から対応するフィルタロジック削除
3. `ActivityFilters.astro`からUI要素削除

**具体例：料金フィルタの削除**

```typescript
// 1. src/data/activities.ts - about配列から削除
export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    about: [
      { term: '対象年齢', description: '中学生以上' },
      // { term: '料金', description: '3000円から5000円' }, // この行を削除
      { term: '所要時間', description: '2時間以上' },
    ],
  },
];
```

```astro
<!-- 2. src/pages/activities/index.astro - フィルタロジック削除 -->
---
// const priceSet = new Set<string>(); // 削除
// const priceOptions: FilterOption[] = []; // 削除
---
```

```astro
<!-- 3. src/components/pages/activities/ActivityFilters.astro - UI削除 -->
<!-- 料金フィルタのHTML要素を削除 -->
<!-- <div class="activity-filters__wrapper"> -->
<!--   <select name="price">...</select> -->
<!-- </div> -->
```

### フィルタオプションの表示順序制御

#### 1. カスタム順序配列による制御

```javascript
// src/pages/activities/index.astro

// 対象年齢の順序定義（年齢順）
const targetAgeOrder = ['未就学児以上', '小学生以上', '中学生以上', '高校生以上', '大人以上'];
const targetAgeOptions: FilterOption[] = targetAgeOrder
  .filter(age => targetAgeSet.has(age))  // 実際にデータに存在するもののみ
  .map(age => ({ value: age, label: age }));

// 実施時期の順序定義（季節順）
const seasonOrder = ['春', '夏', '秋', '通年'];
const seasonOptions: FilterOption[] = seasonOrder
  .filter(season => seasonSet.has(season))
  .map(season => ({ value: season, label: season }));

// 人数の順序定義（少数→多数）
const capacityOrder = ['10名未満', '10名以上', '20名以上'];
const capacityOptions: FilterOption[] = capacityOrder
  .filter(capacity => capacitySet.has(capacity))
  .map(capacity => ({ value: capacity, label: capacity }));

// 料金の順序定義（低価格→高価格）
const priceOrder = ['500円から1000円', '1000円から3000円', '3000円から5000円', '5000円から1万円'];
const priceOptions: FilterOption[] = priceOrder
  .filter(price => priceSet.has(price))
  .map(price => ({ value: price, label: price }));

// 所要時間の順序定義（短時間→長時間）
const durationOrder = ['1時間未満', '1時間以上', '2時間以上'];
const durationOptions: FilterOption[] = durationOrder
  .filter(duration => durationSet.has(duration))
  .map(duration => ({ value: duration, label: duration }));

// 天気の順序定義（制限あり→制限なし）
const weatherOrder = ['晴れ', '雨', '全天候'];
const weatherOptions: FilterOption[] = weatherOrder
  .filter(weather => weatherSet.has(weather))
  .map(weather => ({ value: weather, label: weather }));

// 予約の順序定義（事前→当日）
const bookingOrder = ['事前予約', '当日予約'];
const bookingOptions: FilterOption[] = bookingOrder
  .filter(booking => bookingSet.has(booking))
  .map(booking => ({ value: booking, label: booking }));
```

#### 2. 動的ソート関数による制御

```javascript
// 文字列の自然順序ソート
const sortByNaturalOrder = (options: FilterOption[]) => {
  return options.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
};

// 数値ベースのソート（料金など）
const sortByNumericValue = (options: FilterOption[]) => {
  return options.sort((a, b) => {
    const aNum = parseInt(a.value.match(/\d+/)?.[0] || '0');
    const bNum = parseInt(b.value.match(/\d+/)?.[0] || '0');
    return aNum - bNum;
  });
};
```

#### 3. 順序変更の具体例

**現在の対象年齢順序を逆順（高年齢→低年齢）に変更:**

```javascript
// 変更前
const targetAgeOrder = ['未就学児以上', '小学生以上', '中学生以上', '高校生以上', '大人以上'];

// 変更後  
const targetAgeOrder = ['大人以上', '高校生以上', '中学生以上', '小学生以上', '未就学児以上'];
```

**季節順序を月順に変更:**

```javascript
// 変更前
const seasonOrder = ['春', '夏', '秋', '通年'];

// 変更後
const seasonOrder = ['春', '夏', '秋', '冬', '通年']; // 冬を追加
```

### フィルタリング機能の拡張方法

#### 1. 複合条件フィルタの実装

```javascript
// 価格帯 × 所要時間の複合フィルタ例
function getFilteredActivitiesAdvanced(filters) {
  return activities.filter(activity => {
    // 基本フィルタ適用
    if (!matchesBasicFilters(activity, filters)) return false;
    
    // 複合条件：3000円以下 かつ 2時間未満
    if (filters.quickAndCheap) {
      const price = activity.price.adult;
      const duration = activity.duration;
      return price <= 3000 && duration < 120;
    }
    
    return true;
  });
}
```

#### 2. 検索機能の追加

```javascript
// テキスト検索フィルタ
function addTextSearchFilter() {
  const searchInput = document.getElementById('activity-search');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredActivities = activities.filter(activity => {
      return activity.title.toLowerCase().includes(searchTerm) ||
             activity.description.toLowerCase().includes(searchTerm) ||
             activity.category.toLowerCase().includes(searchTerm);
    });
    
    updateActivityDisplay(filteredActivities);
  });
}
```

#### 3. ソート機能の拡充

```javascript
// 複数ソート条件
const sortOptions = {
  popularity: (a, b) => b.isPopular - a.isPopular, // 人気順
  priceAsc: (a, b) => a.price.adult - b.price.adult, // 価格安い順
  priceDesc: (a, b) => b.price.adult - a.price.adult, // 価格高い順
  durationAsc: (a, b) => a.duration - b.duration, // 時間短い順
  durationDesc: (a, b) => b.duration - a.duration, // 時間長い順
  alphabetical: (a, b) => a.title.localeCompare(b.title, 'ja') // 五十音順
};

function applySorting(activities, sortKey) {
  return [...activities].sort(sortOptions[sortKey]);
}
```

### デバッグ・トラブルシューティング

#### 1. よくある問題と解決方法

**問題: フィルタを選択しても選択肢が更新されない**
```javascript
// 解決方法：コンソールでデバッグ
console.log('Current filters:', currentFilters);
console.log('Filtered activities:', getFilteredActivities(currentFilters));
console.log('Available options:', getAvailableOptions(filteredActivities));
```

**問題: 特定のアクティビティが表示されない**
```javascript
// デバッグ用：アクティビティが除外される理由を確認
function debugActivityFiltering(activity, filters) {
  console.log(`Debug: ${activity.title}`);
  console.log('Age match:', matchesTargetAge(activity, filters.targetAge));
  console.log('Season match:', matchesSeason(activity, filters.season));
  console.log('Capacity match:', matchesCapacity(activity, filters.capacity));
}
```

#### 2. パフォーマンス最適化

```javascript
// 大量データ対応：メモ化による最適化
const memoizedFilter = useMemo(() => {
  return getFilteredActivities(filters);
}, [filters]);

// 検索のデバウンス処理
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedSearch = debounce(performSearch, 300);
```

### まとめ

このフィルタリングシステムにより、以下が実現されています：

1. **直感的なUX**: 選択に応じて動的にオプションが更新される
2. **保守性**: 統一されたデータ構造により一貫した管理
3. **拡張性**: 新しいフィルタ項目の追加が容易
4. **カスタマイズ性**: オプション表示順序の柔軟な制御
5. **型安全性**: TypeScriptによる開発時エラー検出

このシステムを基盤として、将来的にはより高度な検索機能やレコメンデーション機能の追加も可能です。

## 8つ目以降のフィルタ項目追加手順（詳細ガイド）

### 現在のフィルタ項目数
現在実装済み：**7つのフィルタ項目**
1. 対象年齢
2. 実施時期  
3. 人数
4. 料金
5. 所要時間
6. 天気
7. ご予約

### 8つ目以降を追加する完全な手順

#### 例：「難易度」フィルタを8つ目として追加する場合

#### ステップ1: データ構造の拡張（activities.ts）

**ファイル:** `src/data/activities.ts`

**1-1. Activityインターフェースは変更不要**
```typescript
// インターフェースには手を加えない
// aboutの配列形式でデータを管理するため
export interface Activity {
  // 既存のフィールドはそのまま
  about: Array<{
    term: string;
    description: string; 
    note?: string;
  }>;
}
```

**1-2. 全アクティビティデータにabout項目を追加**
```typescript
export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    // 既存データ...
    about: [
      { term: '対象年齢', description: '中学生以上' },
      { term: '実施時期', description: '夏' },
      { term: '人数', description: '10名未満' },
      { term: '所要時間', description: '2時間以上' },
      { term: '料金', description: '3000円から5000円' },
      { term: '実施可能天気', description: '晴れ' },
      { term: 'ご予約', description: '事前予約' },
      { term: '難易度', description: '初級' }, // ← 8つ目として追加
      { term: '持ち物', description: '水着・タオル' },
    ],
  },
  {
    slug: 'campfire-experience', 
    // 既存データ...
    about: [
      { term: '対象年齢', description: '未就学児以上' },
      { term: '実施時期', description: '通年' },
      { term: '人数', description: '20名以上' },
      { term: '所要時間', description: '1時間以上' },
      { term: '料金', description: '1000円から3000円' },
      { term: '実施可能天気', description: '晴れ' },
      { term: 'ご予約', description: '事前予約' },
      { term: '難易度', description: '初級' }, // ← 全てのアクティビティに追加
      { term: '持ち物', description: '防寒着' },
    ],
  },
  // 残り6つのアクティビティにも同様に { term: '難易度', description: '...' } を追加
  // ※難易度の値は: '初級', '中級', '上級' のいずれかを設定
];
```

**1-3. 統一カテゴリの定義**
```typescript
// ドキュメント用コメントとして追加（実際のコードには不要）
/*
難易度カテゴリ:
- '初級' - 初心者・未経験者向け
- '中級' - ある程度の経験者向け  
- '上級' - 経験豊富な方向け
*/
```

#### ステップ2: フィルタオプション生成ロジックの追加（activities/index.astro）

**ファイル:** `src/pages/activities/index.astro`

**2-1. フィルタオプション生成処理の追加**
```astro
---
// 既存のフィルタオプション生成処理の後に追加

// 8. 難易度オプション生成（←新規追加）
const difficultySet = new Set<string>();
filteredActivities.forEach(activity => {
  const difficultyItem = activity.about.find(item => item.term === '難易度');
  if (difficultyItem) difficultySet.add(difficultyItem.description);
});

// 難易度の希望する順序を定義（初級→上級の順）
const difficultyOrder = ['初級', '中級', '上級'];
const difficultyOptions: FilterOption[] = difficultyOrder
  .filter(difficulty => difficultySet.has(difficulty))
  .map(difficulty => ({
    value: difficulty,
    label: difficulty
  }));
---
```

**2-2. フィルタコンポーネントにpropsとして渡す**
```astro
<!-- 既存のprops設定を拡張 -->
<ActivityFilters 
  targetAgeOptions={targetAgeOptions}
  seasonOptions={seasonOptions} 
  capacityOptions={capacityOptions}
  priceOptions={priceOptions}
  durationOptions={durationOptions}
  weatherOptions={weatherOptions}
  bookingOptions={bookingOptions}
  difficultyOptions={difficultyOptions}
/>
```

#### ステップ3: フィルタUIコンポーネントの拡張（ActivityFilters.astro）

**ファイル:** `src/components/pages/activities/ActivityFilters.astro`

**3-1. Propsインターフェースの拡張**
```astro
---
export interface Props {
  targetAgeOptions: FilterOption[];
  seasonOptions: FilterOption[];
  capacityOptions: FilterOption[];
  priceOptions: FilterOption[];
  durationOptions: FilterOption[];
  weatherOptions: FilterOption[];
  bookingOptions: FilterOption[];
  difficultyOptions: FilterOption[]; // ← 8つ目として追加
}

const { 
  targetAgeOptions,
  seasonOptions, 
  capacityOptions,
  priceOptions,
  durationOptions,
  weatherOptions,
  bookingOptions,
  difficultyOptions // ← destructuring に追加
} = Astro.props;
---
```

**3-2. HTML要素の追加**
```astro
<!-- 既存の7つのフィルタ要素の後に追加 -->

<!-- 難易度（8つ目） -->
<div class="activity-filters__wrapper">
  <select class="activity-filters__select" name="difficulty">
    <option value="">難易度</option>
    {difficultyOptions.map(option => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
  <svg
    class="activity-filters__icon"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="22"
    viewBox="0 0 12 22"
    fill="none"
  >
    <path
      d="M1 21L11 11L1 1"
      stroke="#054965"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</div>
```

#### ステップ4: フィルタリングロジックの拡張（activities/index.astro）

**ファイル:** `src/pages/activities/index.astro`

**4-1. フィルタリング関数の拡張**
```javascript
<script>
// 既存のフィルタリング関数を拡張
function getFilteredActivities(filters) {
  return activities.filter(activity => {
    // 1-7の既存フィルタ条件...
    
    // 8. 難易度フィルタ（新規追加）
    if (filters.difficulty) {
      const difficultyItem = activity.about.find(item => item.term === '難易度');
      if (!difficultyItem || difficultyItem.description !== filters.difficulty) {
        return false;
      }
    }
    
    return true;
  });
}

// フィルタ変更イベントリスナーに追加
document.addEventListener('change', function(e) {
  // 既存のフィルタ処理...
  
  // 8つ目のフィルタ追加
  if (e.target.name === 'difficulty') {
    currentFilters.difficulty = e.target.value;
    updateFilteredResults();
  }
});
</script>
```

### 9つ目以降のフィルタ追加手順

#### 手順テンプレート

**新フィルタ項目: 「[フィルタ名]」を追加する場合**

1. **データ追加** (`src/data/activities.ts`)
   ```typescript
   // 全アクティビティの about 配列に追加
   { term: '[フィルタ名]', description: '[統一カテゴリ値]' }
   ```

2. **オプション生成** (`src/pages/activities/index.astro`)
   ```astro
   ---
   // [フィルタ名]オプション生成
   const [フィルタ名]Set = new Set<string>();
   filteredActivities.forEach(activity => {
     const [フィルタ名]Item = activity.about.find(item => item.term === '[フィルタ名]');
     if ([フィルタ名]Item) [フィルタ名]Set.add([フィルタ名]Item.description);
   });
   
   const [フィルタ名]Options: FilterOption[] = Array.from([フィルタ名]Set)
     .map([フィルタ名] => ({ value: [フィルタ名], label: [フィルタ名] }));
   ---
   ```

3. **Props追加** (`ActivityFilters.astro`)
   ```astro
   export interface Props {
     // 既存props...
     [フィルタ名]Options: FilterOption[];
   }
   ```

4. **UI追加** (`ActivityFilters.astro`)
   ```astro
   <!-- [フィルタ名] -->
   <div class="activity-filters__wrapper">
     <select class="activity-filters__select" name="[フィルタ名]">
       <option value="">[フィルタ名]</option>
       {[フィルタ名]Options.map(option => (
         <option value={option.value}>{option.label}</option>
       ))}
     </select>
     <svg class="activity-filters__icon"><!-- アイコン --></svg>
   </div>
   ```

5. **フィルタリング追加** (`activities/index.astro`)
   ```javascript
   // getFilteredActivities関数内に追加
   if (filters.[フィルタ名]) {
     const [フィルタ名]Item = activity.about.find(item => item.term === '[フィルタ名]');
     if (![フィルタ名]Item || [フィルタ名]Item.description !== filters.[フィルタ名]) {
       return false;
     }
   }
   
   // イベントリスナーに追加
   if (e.target.name === '[フィルタ名]') {
     currentFilters.[フィルタ名] = e.target.value;
     updateFilteredResults();
   }
   ```

### 具体的な追加例（10つ目: 「エリア」フィルタ）

#### 実装サンプル

**1. データ追加:**
```typescript
// 全アクティビティに追加
{ term: 'エリア', description: '湖エリア' } // または '山エリア', '森エリア'
```

**2. オプション生成:**
```astro
const areaSet = new Set<string>();
filteredActivities.forEach(activity => {
  const areaItem = activity.about.find(item => item.term === 'エリア');
  if (areaItem) areaSet.add(areaItem.description);
});

const areaOrder = ['湖エリア', '山エリア', '森エリア'];
const areaOptions: FilterOption[] = areaOrder
  .filter(area => areaSet.has(area))
  .map(area => ({ value: area, label: area }));
```

**3. UI追加:**
```astro
<!-- エリア（10つ目） -->
<div class="activity-filters__wrapper">
  <select class="activity-filters__select" name="area">
    <option value="">エリア</option>
    {areaOptions.map(option => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
  <svg class="activity-filters__icon"><!-- アイコン --></svg>
</div>
```

### 注意事項・ベストプラクティス

#### 1. データ整合性の確保
- **全アクティビティに同じterm名で追加**：漏れがないよう注意
- **統一カテゴリの定義**：事前に値の種類を決める（3-5個程度が適切）
- **型安全性**：TypeScript型定義で警告を確認

#### 2. UI/UXの考慮
- **フィルタ数の上限**：10個を超えるとUIが複雑になるため注意
- **レスポンシブ対応**：スマホでの表示を確認
- **並び順**：重要度の高いフィルタを上位に配置

#### 3. パフォーマンス
- **フィルタオプション生成**：大量データ時はパフォーマンス監視
- **DOM更新頻度**：フィルタ変更時の再描画コストを考慮

#### 4. 保守性
- **命名規則の統一**：変数名、関数名を一貫させる
- **コメント追加**：新フィルタの説明を残す
- **テスト実装**：フィルタ動作の確認手順を文書化

### トラブルシューティング

#### よくあるエラーと解決方法

**1. フィルタオプションが表示されない**
```javascript
// デバッグ: データ確認
console.log('Filter data check:', 
  activities.map(act => 
    act.about.find(item => item.term === '[フィルタ名]')
  )
);
```

**2. フィルタリングが効かない**
```javascript
// イベントリスナー確認
document.querySelector('[name="[フィルタ名]"]')
  .addEventListener('change', (e) => {
    console.log('Filter changed:', e.target.value);
  });
```

**3. TypeScript型エラー**
```typescript
// Props型定義の確認・修正
export interface Props {
  [フィルタ名]Options: FilterOption[]; // 型定義漏れがないか確認
}
```

この手順に従うことで、8つ目以降のフィルタ項目も安全かつ確実に追加できます。