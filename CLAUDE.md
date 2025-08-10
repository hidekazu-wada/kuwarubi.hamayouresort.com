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
- **コンポーネント**: `src/components/`にAstro/React/Vue/Svelte/Preactコンポーネントを配置
- **静的アセット**: `public/`ディレクトリ内のファイルは直接提供されます
- **Islands Architecture**: 必要な部分のみでJavaScriptを動作させる部分的ハイドレーション

## SCSS使用方法

### コンポーネント内でのSCSS使用
```astro
<style lang="scss">
$primary-color: #ff6b35;

.example {
  color: $primary-color;
  
  &:hover {
    color: darken($primary-color, 20%);
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

- 新しいフレームワークの追加: `astro add [framework]`コマンドを使用
- TypeScriptサポートは標準で含まれています
- 開発サーバーはホットリロード機能付きです

## 業界コンテキスト

- 観光・ホスピタリティ業界向けサイトとして、アクセシビリティと多言語対応を考慮
- パフォーマンス重視（Astroの特性を活用）
- SEO最適化が重要

## スマホ時のメニュー実装

### 現在の実装状況
- **PCメニュー**: `index.astro`内にサイドバーメニューとオーバーレイメニューを実装済み
- **共通オーバーレイ**: `.menu-overlay`要素が全画面メニュー表示用に準備済み
- **JavaScript**: メニュー開閉制御の基盤が完成済み

### スマホメニューの実装アプローチ

#### 基本方針：**共通化推奨**
- PCとスマホで同じ`.menu-overlay`を共有
- 異なるメニュー内容はCSS（メディアクエリ）で制御
- 一つのJavaScript関数で両デバイス対応

#### 実装手順

##### 1. HTML: スマホ用メニューボタン追加
```html
<!-- 任意の場所にスマホ用ボタンを配置 -->
<button class="mobile-menu-toggle" id="mobile-menu-toggle">
  <!-- アイコンやテキスト -->
</button>
```

##### 2. JavaScript: イベントリスナー追加
```javascript
// 既存のPCボタンに加えて、スマホボタンにも同じ処理を割り当て
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

// nullチェック内で両方のボタンを処理
if (menuToggle && mobileMenuToggle && menuOverlay && sidebar) {
  // 共通の関数を両方のボタンで使用
}
```

##### 3. CSS: レスポンシブ対応
```scss
.menu-overlay {
  // 共通スタイル
  
  // PCメニュー内容
  .menu-content-pc {
    @include tablet-up {
      display: block;
    }
    display: none; // スマホでは非表示
  }
  
  // スマホメニュー内容  
  .menu-content-mobile {
    display: block; // スマホで表示
    @include tablet-up {
      display: none; // PCでは非表示
    }
  }
}
```

#### 重要なポイント

##### 既存コードとの互換性
- **変更不要**: 現在の`.sidebar.menu-open`スタイルはそのまま利用
- **拡張のみ**: 既存機能を壊さずに新機能を追加
- **z-index維持**: オーバーレイ(10) < サイドバー(20) の関係を保持

##### 安全性の確保
- **nullチェック**: 全てのDOM要素の存在確認を継続
- **TypeScript対応**: 型安全性を維持
- **段階的実装**: 部分的にテスト可能

##### 保守性
- **一元管理**: メニュー内容の変更は1箇所で対応
- **統一UX**: PC・スマホで一貫した操作感
- **デバッグ容易**: 共通ロジックでトラブルシューティングが簡単

#### 実装時の注意事項

1. **既存の`.menu-overlay`を拡張**: 新しい要素は作らない
2. **JavaScript関数の共通化**: 同じ処理を複数ボタンで再利用
3. **CSSメディアクエリ活用**: デバイス別表示制御
4. **段階的テスト**: スマホボタン → メニュー内容 → 統合テストの順

#### 将来の拡張性
- タブレット専用メニューも同じ仕組みで追加可能
- メニュー内容の動的変更も容易
- アニメーション効果の追加も既存構造で対応可能