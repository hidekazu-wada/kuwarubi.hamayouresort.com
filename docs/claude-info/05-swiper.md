# Swiperライブラリガイド

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

## Swiper標準クラス名（変更禁止）

以下のクラス名はSwiperライブラリが内部的に参照するため、**絶対に変更してはいけません**：

- `swiper-wrapper` - スライドを包むラッパー
- `swiper-slide` - 各スライド要素
- `swiper-slide-active` - アクティブスライド（自動付与）
- `swiper-button-next` - 次へボタン（Navigation使用時）
- `swiper-button-prev` - 前へボタン（Navigation使用時）
- `swiper-pagination` - ページネーション（Pagination使用時）

## 新しいSwiper追加時の手順

### 1. 命名規則の決定
- **パターン**: `{ページ名}-{セクション名}__swiper`
- **例**: 
  - `top-hero__swiper` (TOPページのHero)
  - `top-activities__swiper` (TOPページのActivities)
  - `about-gallery__swiper` (Aboutページのギャラリー)
  - `contact-testimonials__swiper` (Contactページの口コミ)

### 2. ファイル作成・設定
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

## 実装済みSwiper一覧

- **top-hero__swiper**: TOPページHeroセクション（フェード効果、オートプレイ）
- **top-activities__swiper**: TOPページActivitiesセクション（横スライド、ページネーション）
- **top-blog__swiper**: TOPページBlogセクション（横スライド、ページネーション、オートプレイ）

## 注意事項・トラブルシューティング

1. **クラス名衝突**: 汎用的なクラス名（`.swiper`等）は絶対に使用しない
2. **Swiper標準クラス**: `swiper-wrapper`、`swiper-slide`は変更禁止
3. **JavaScript分離**: 各コンポーネント内でSwiper初期化を完結させる
4. **CSS名前空間**: 全てのスタイルを独自のクラス名でスコープ化する
5. **アニメーション独立**: `@keyframes`の名前も独自化する

この方針により、サイト内で複数のSwiperを使用しても完全に独立し、互いに干渉することがありません。