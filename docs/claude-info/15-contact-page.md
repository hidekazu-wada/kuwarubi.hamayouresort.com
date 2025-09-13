# コンタクトページ実装ガイド

## 概要

コンタクトページ（`src/pages/contact.astro`）は、お問い合わせフォームを提供するページです。Formspree統合、レスポンシブデザイン、高度なバリデーション機能を実装しています。

## 主要機能

### 1. Formspree統合

**実装内容:**
- 外部フォーム処理サービスFormspreeを使用
- エンドポイントは環境変数`PUBLIC_FORMSPREE_ENDPOINT`で管理
- POSTメソッドでフォームデータを送信

**環境変数設定:**
```bash
# .env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### 2. フォームバリデーション

**JavaScript検証:**
- HTML5バリデーションを`novalidate`で無効化
- カスタムJavaScriptバリデーションを実装
- 検証順序:
  1. 必須項目チェック
  2. メールアドレス一致確認
  3. プライバシーポリシー同意確認

**バリデーション実装:**
```javascript
// 必須項目チェック
const requiredFields = form.querySelectorAll('[required]');
let hasEmptyField = false;

// メールアドレス一致確認
if (emailInput.value !== emailConfirmInput.value) {
  e.preventDefault();
  alert('メールアドレスが一致しません。もう一度確認してください。');
}
```

### 3. プライバシー同意管理

**チェックボックス制御:**
- ページロード時に必ずチェックをリセット
- チェック状態に応じて送信ボタンを有効/無効化
- `pageshow`イベントでブラウザバック対応

**実装詳細:**
```javascript
function resetCheckbox() {
  if (privacyCheckbox) {
    privacyCheckbox.checked = false;
    updateSubmitButton();
  }
}

// ページ表示時にリセット（ブラウザバック対応）
window.addEventListener('pageshow', () => {
  resetCheckbox();
});
```

### 4. フッター連動フェードアウト

**スクロール制御:**
- フッターから300px上でヘッダーとナビゲーションをフェードアウト
- 10msのデバウンス処理でパフォーマンス最適化
- FAQページと同様の挙動を実装

### 5. レスポンシブデザイン

**ブレイクポイント:**
- モバイル: 〜743px
- タブレット: 744px〜1023px  
- デスクトップ: 1024px〜

**レスポンシブ関数:**
- `spx()`: モバイル基準値
- `ppx(* 1.2)`: タブレット値（PC値の1.2倍）
- `ppx()`: デスクトップ値

## フォーム構成

### 入力フィールド

1. **種別** (`type`) - セレクトボックス、必須
2. **お名前** (`name`) - テキスト、必須
3. **お名前（フリガナ）** (`furigana`) - テキスト
4. **メールアドレス** (`email`) - メール、必須
5. **メールアドレス（再入力）** (`email_confirm`) - メール、必須
6. **電話番号** (`phone`) - 電話番号
7. **メールアドレス2** (`email2`) - メール（オプション）
8. **メールアドレス2（再入力）** (`email2_confirm`) - メール（オプション）
9. **お問い合わせ内容** (`message`) - テキストエリア、必須

### カスタムスタイリング

**チェックボックス:**
```scss
&__checkbox {
  appearance: none;
  width: spx(20);
  height: spx(20);
  border: 2px solid #026995;
  
  &:checked {
    background: #026995;
    &::after {
      content: '';
      // チェックマーク表示
    }
  }
}
```

**送信ボタン:**
```scss
&__submit {
  opacity: 0.5; // 初期状態は無効
  transition: opacity 0.3s;
  
  &:not(:disabled) {
    opacity: 1;
    cursor: pointer;
  }
}
```

## 実装上の工夫

### パフォーマンス最適化

1. **デバウンス処理**
   - スクロールイベントを10msでスロットリング
   - 不要な処理を削減

2. **初期状態の制御**
   - JavaScriptで完全制御
   - フラッシュを防ぐ即座の状態設定

### アクセシビリティ

- セマンティックHTML使用（`<form>`, `<fieldset>`, `<label>`）
- 適切なaria-label属性
- キーボードナビゲーション対応
- フォーカス管理（エラー時に該当フィールドへフォーカス）

### ユーザビリティ

- 明確なエラーメッセージ（アラート表示）
- 視覚的フィードバック（ボタン状態、チェックボックス）
- プレースホルダーによる入力例提示
- ブラウザバック時の一貫した状態

## セキュリティ考慮事項

1. **CSRF対策**: Formspreeが自動処理
2. **XSS対策**: フォーム送信はPOSTメソッドのみ
3. **スパム対策**: Formspreeの組み込み機能を利用

## トラブルシューティング

### よくある問題と解決策

1. **チェックボックスの状態不整合**
   - 解決: `pageshow`イベントでリセット処理
   - `autocomplete="off"`で自動入力無効化

2. **バリデーションアラートが表示されない**
   - 解決: `novalidate`属性でHTML5検証を無効化
   - JavaScriptで完全制御

3. **送信ボタンの初期表示問題**
   - 解決: JavaScriptで即座に状態設定
   - `resetCheckbox()`関数で一括処理

## 関連ファイル

- `src/pages/contact.astro` - メインページファイル
- `src/layouts/BaseLayout.astro` - 共通レイアウト
- `src/components/ui/LowerPageHeader.astro` - ページヘッダー
- `src/components/ui/Breadcrumb.astro` - パンくずナビゲーション

## 環境設定

### 環境変数

プロジェクトでは以下の環境変数を使用しています：

1. **`.env`ファイルを作成**
   ```bash
   cp .env.example .env
   ```

2. **必要な環境変数を設定**
   ```bash
   # Formspreeエンドポイント
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

3. **開発サーバーを再起動**
   ```bash
   npm run dev
   ```

### セキュリティ

- `.env`ファイルは`.gitignore`に含まれており、GitHubには公開されません
- チーム開発時は`.env.example`を参照して各自で設定

## 実装完了日

2025年9月13日 - 初回実装完了
2025年9月13日 - 環境変数対応追加