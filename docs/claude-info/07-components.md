# 共通UIコンポーネント

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