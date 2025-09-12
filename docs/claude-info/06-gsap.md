# GSAPアニメーションガイド

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