# FAQページ実装ガイド

## 概要

FAQページ（`src/pages/faq.astro`）は、よくある質問と回答を分かりやすく表示するページです。BaseLayoutシステムを使用し、アコーディオン機能やスクロール連動ナビゲーションなど、高度なインタラクティブ機能を実装しています。

## 主要機能

### 1. アコーディオン形式のQ&A表示

**実装内容:**
- 質問クリックで回答が展開/折りたたみ
- スムーズなアニメーション（0.3秒のトランジション）
- 質問下部の区切り線も連動して表示/非表示

**技術詳細:**
```scss
&__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

&.is-open {
  .faq-content__answer {
    max-height: 500px;
  }
}
```

### 2. カテゴリーナビゲーション

**PC/タブレット:**
- 固定位置の左サイドナビゲーション
- 現在表示中のカテゴリーを自動でアクティブ表示
- Intersection Observer APIによる効率的な検出

**モバイル:**
- ネイティブのselect要素によるプルダウン選択
- 選択時に該当カテゴリーへスムーズスクロール

### 3. スクロール連動機能

**カテゴリー自動検出:**
```javascript
const observerOptions = {
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
};
```
- 画面上部20-30%の範囲で検出
- 自動的にナビゲーションのアクティブ状態を更新

**フッター接近時の自動非表示:**
- ページヘッダーとナビゲーションが自動的にフェードアウト
- フッターから300px上が切り替えポイント

### 4. レスポンシブ対応

**ブレイクポイント:**
- モバイル: 〜743px
- タブレット: 744px〜1023px
- デスクトップ: 1024px〜

**各デバイスの最適化:**
- モバイル: select要素、アコーディオンのみ
- タブレット以上: 固定サイドナビゲーション追加

## カテゴリー構成

1. **ご利用について** (`#usage`)
   - 宿泊予約、ペット同伴、研修利用など

2. **施設について** (`#facility`)
   - 研修施設、駐車場、Wi-Fi設備など

3. **お支払い方法について** (`#payment`)
   - 支払い方法、クレジットカード、キャンセル料など

4. **お食事について** (`#dining`)
   - 大人数対応、アレルギー対応、食事時間など

5. **入浴について** (`#bathing`)
   - 温泉効能、アメニティ、貸切利用など

## 実装上の工夫

### パフォーマンス最適化

1. **Intersection Observer使用**
   - スクロールイベントより効率的
   - 必要な時のみ処理実行

2. **スロットリング処理**
   - フッター位置検出を10msでスロットリング
   - 不要な処理を削減

3. **CSS Transition**
   - GPUアクセラレーション活用
   - スムーズなアニメーション

### アクセシビリティ

- セマンティックHTML使用（`<section>`, `<article>`, `<nav>`）
- 適切な見出し階層（`<h2>`, `<h3>`）
- キーボードナビゲーション対応
- aria-labelによる説明追加

### 保守性

- BEM記法による命名規則
- コンポーネント内でスタイル完結
- 明確な責務分離

## JavaScript実装詳細

### アコーディオン機能
```javascript
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-content__item');
    item.classList.toggle('is-open');
    // 高さを動的に計算
    answer.style.maxHeight = answer.scrollHeight + 'px';
  });
});
```

### ナビゲーションアクティブ状態
```javascript
const categoryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // アクティブクラスの付け替え
      navItem.classList.add('active');
    }
  });
}, observerOptions);
```

## スタイル調整のポイント

### アコーディオンの余白制御
- 閉じている時: `padding-bottom: 20px`, `gap: 0`
- 開いている時: `padding-bottom: 30px`, `gap: 9px`
- トランジションで滑らかに変化

### スクロールマージン
```scss
&__category {
  scroll-margin-top: spx(50);  // アンカーリンク時の余白
}
```

## 今後の拡張可能性

1. **検索機能の追加**
   - キーワード検索によるQ&Aフィルタリング

2. **カテゴリーの追加**
   - 新しいカテゴリーの簡単な追加が可能

3. **CMS連携**
   - 動的なQ&Aデータの管理

4. **アナリティクス**
   - よく見られる質問の分析

## 関連ファイル

- `src/pages/faq.astro` - メインページファイル
- `src/pages/_template.astro` - ページテンプレート
- `src/layouts/BaseLayout.astro` - 共通レイアウト
- `src/components/ui/LowerPageHeader.astro` - ページヘッダー
- `src/components/ui/Breadcrumb.astro` - パンくずナビゲーション

## 実装完了日

2024年12月 - 初回実装完了