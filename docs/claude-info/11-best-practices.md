# 開発ガイドライン・ベストプラクティス

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