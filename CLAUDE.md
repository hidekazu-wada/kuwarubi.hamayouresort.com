# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## プロジェクト概要

これはkuwarubi.hamayouresort.com用のAstro プロジェクトです。観光・リゾート業界向けのWebサイトを開発しています。

## 技術スタック

- **フレームワーク**: Astro v5.12.8
- **言語**: TypeScript（tsconfig.json設定済み）
- **スタイル**: SCSS（sass v1.89.2）
- **パッケージマネージャー**: npm
- **開発環境**: Node.js

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
│   ├── components/  # Astroコンポーネント
│   │   ├── BottomBar.astro   # スマホ用下部固定バー
│   │   ├── Footer.astro      # フッターコンポーネント
│   │   ├── MenuOverlay.astro # メニューオーバーレイ
│   │   └── Sidebar.astro     # PC用サイドバー
│   ├── pages/       # ページコンポーネント（ファイルベースルーティング）
│   │   └── index.astro
│   └── styles/      # SCSSファイル
│       ├── reset.scss      # リセットCSS
│       ├── _variables.scss # 変数・定数
│       ├── _functions.scss # カスタム関数
│       ├── _mixins.scss    # ミックスイン
│       └── main.scss       # メインSCSSファイル
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
- **Sidebar**: PC用固定サイドバー（ロゴ、メニューボタン、ソーシャルリンク）
- **BottomBar**: スマホ用下部固定バー（メニューボタンとアクション）
- **MenuOverlay**: 全画面メニューオーバーレイ（PC・スマホ共通）
- **Footer**: ページフッター（連絡先、パートナーロゴ、コピーライト）

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

## プロジェクト現在のステータス

### 完了済み実装
✅ **基本アーキテクチャ**: Astroプロジェクトの土台構築完了  
✅ **コンポーネント分割**: UI要素の論理的分離完了  
✅ **レイアウトシステム**: CSS Grid + 固定要素ハイブリッド設計完了  
✅ **メニューシステム**: PC・スマホ統一メニュー制御完了  
✅ **スタイル管理**: BEM記法 + SCSS ミックスイン活用完了  

### 現在のコンポーネント構成
- **index.astro**: メインページ（JavaScript中央管理、レイアウト定義）
- **Sidebar.astro**: PC用固定サイドバー
- **BottomBar.astro**: スマホ用下部固定バー
- **MenuOverlay.astro**: 全画面メニューオーバーレイ
- **Footer.astro**: ページフッター

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