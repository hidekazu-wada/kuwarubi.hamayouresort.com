# JavaScript実装ガイド

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