# SCSS使用ガイド

## スタイル管理の基本方針

このプロジェクトでは以下のスタイル管理ルールを採用しています：

1. **コンポーネント内でスタイル完結** - 各`.astro`ファイル内で`<style lang="scss">`を使用
2. **BEM記法の採用** - `.block__element--modifier`形式でクラス名を命名
3. **SCSSミックスイン・関数の活用** - レスポンシブ対応とpx→vw変換を統一

## BEM記法の採用例

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

## コンポーネント内でのSCSS使用
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

## 外部SCSSファイルのインポート
```astro
---
// グローバルスタイル
import '../styles/main.scss';
---
```

## コンポーネント内でのmixin/function使用
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

## SCSSファイル構造
- `main.scss`: すべてのSCSSをまとめるメインファイル
- `reset.scss`: リセットCSS（destyle.cssベース）
- `_variables.scss`: プロジェクト全体で使用する変数・定数
- `_functions.scss`: px→vw変換用カスタム関数
- `_mixins.scss`: レスポンシブ・フォント用ミックスイン

## 定義済み変数・関数・ミックスイン

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

## インポート順序（重要）
1. 変数（最初に読み込む）
2. 関数とミックスイン（変数の後に読み込む）
3. リセットCSS
4. その他のスタイル

## 使用例
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

## 注意事項
- コンポーネント内で外部のmixin/functionを使用する場合は、個別にインポートが必要
- インポート順序を守らないと変数が未定義エラーになる可能性
- `@import`は非推奨警告が出るが、現在は正常に動作