# アーキテクチャ設計

## アーキテクチャ

- **ファイルベースルーティング**: `src/pages/`内の`.astro`または`.md`ファイルがページルートになります
- **コンポーネント分割**: UI要素を論理的に分離したAstroコンポーネント
- **静的アセット**: `public/`ディレクトリ内のファイルは直接提供されます
- **Islands Architecture**: 必要な部分のみでJavaScriptを動作させる部分的ハイドレーション

## コンポーネント設計思想

このプロジェクトでは、**Astroらしいコンポーネント分割**を採用しています：

### 1. コンポーネントの責務分離

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

### 2. JavaScript管理の中央集権化
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

### 3. スタイル管理の分散化
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

## BaseLayoutシステム

### 概要

プロジェクト全体で共通のレイアウト構造を提供する`BaseLayout.astro`を導入しました。これにより、コードの重複を削減し、メンテナンス性を向上させています。

### ファイル構成

```
src/
  layouts/
    BaseLayout.astro  # 共通レイアウトコンポーネント
  pages/
    index.astro       # TOPページ（BaseLayout使用）
    activities/
      index.astro     # 一覧ページ（BaseLayout使用）
      [slug].astro    # 詳細ページ（BaseLayout使用）
```

### BaseLayoutの機能

#### Props Interface
```typescript
export interface Props {
  title: string;          // ページタイトル（必須）
  description?: string;   // メタディスクリプション
  ogImage?: string;       // OGP画像URL
  pageClass?: string;     // ページ固有のクラス名
}
```

#### 含まれるコンポーネント
- **Sidebar**: PC用固定サイドバー
- **BottomBar**: スマホ用下部固定バー
- **MenuOverlay**: 全画面メニューオーバーレイ
- **BookingModal**: 宿泊予約モーダル
- **Footer**: ページフッター

**注意**: VideoModalはTOPページ専用のため、BaseLayoutには含まれていません。

### 使用方法

#### 基本的な使用例
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const pageTitle = 'ページタイトル';
const pageDescription = 'ページの説明';
---

<BaseLayout title={pageTitle} description={pageDescription}>
  <!-- ページコンテンツ -->
</BaseLayout>
```

#### ページ固有のスタイリング
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout 
  title={pageTitle} 
  pageClass="main-content--activities"
>
  <!-- コンテンツ -->
</BaseLayout>

<style lang="scss">
  /* :global()を使用してページ固有のスタイルを適用 */
  :global(.main-content--activities) {
    background: var(--blue_2, #e7f3f9);
    padding-top: spx(110);
  }
</style>
```

### Astroのスタイルスコープについて

Astroはデフォルトでコンポーネント内のスタイルをスコープ化します。子コンポーネントから親コンポーネント（BaseLayout）の要素にスタイルを適用する場合は、`:global()`セレクタを使用する必要があります。

### メンテナンス時の注意事項

1. **新規ページ作成時**: BaseLayoutを使用することを推奨
2. **共通要素の追加**: BaseLayoutに追加することで全ページに反映
3. **ページ固有の要素**: 各ページ内で個別に実装（例：VideoModal）
4. **スタイルの適用**: ページ固有のスタイルは`:global()`を使用

### 実装の利点

- **コード重複の削減**: 共通レイアウトを一元管理
- **保守性の向上**: 変更箇所が1つに集約
- **一貫性の保証**: 全ページで同じレイアウト構造
- **開発効率の向上**: 新規ページ作成時の工数削減