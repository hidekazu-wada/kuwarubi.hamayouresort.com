# レイアウトリファクタリング計画

## 概要
3つのページファイル（index.astro、activities/index.astro、activities/[slug].astro）から共通要素を抽出し、BaseLayoutコンポーネントに統合する作業計画

## 実装フェーズ

### フェーズ1: 準備と分析（✅ 計画完了）
**目的:** 現状把握と影響範囲の確認

**作業内容:**
1. 共通要素の詳細分析
   - 3つのページファイルの構造比較
   - JavaScript機能の依存関係確認
   - CSS/SCSSへの影響確認

2. 差分の特定
   - TOPページ固有の機能（GSAPパララックス、複数Swiper等）
   - 下層ページ固有の機能（フィルタリング、動的ルーティング等）
   - BottomBarの挙動の違い（TOPページのみスクロール連動）

### フェーズ2: BaseLayout作成（✅ 完了）
**目的:** 共通レイアウトコンポーネントの実装

**作業内容:**
1. ディレクトリ作成
   - `src/layouts/`ディレクトリ作成
   - `BaseLayout.astro`ファイル作成

2. 基本構造の実装
   - HTML構造（head、body）
   - 共通コンポーネントのインポート
   - Props定義（title、description等）
   - slotによるコンテンツ挿入領域

3. 共通JavaScript移行
   - メニュー開閉制御
   - モーダル制御
   - 基本的なイベントリスナー

### フェーズ3: TOPページへの適用（✅ 完了）
**目的:** index.astroにレイアウト適用

**作業内容:**
1. index.astroのリファクタリング
   - BaseLayoutのインポート
   - 共通要素の削除
   - TOPページ固有のコンテンツのみ残す

2. TOPページ固有JavaScript
   - BottomBarスクロール制御
   - GSAPパララックス初期化
   - 各種Swiper初期化
   - 動画モーダル制御

3. 動作確認

### フェーズ4: アクティビティ一覧への適用（✅ 完了）
**目的:** activities/index.astroにレイアウト適用

**作業内容:**
1. activities/index.astroのリファクタリング
2. ページ固有JavaScript維持
3. 動作確認

### フェーズ5: アクティビティ詳細への適用（⏳ 待機中）
**目的:** activities/[slug].astroにレイアウト適用

**作業内容:**
1. activities/[slug].astroのリファクタリング
2. ページ固有JavaScript維持
3. 動作確認

### フェーズ6: 最終調整とテスト（⏳ 待機中）
**目的:** 全体の動作確認と最適化

**作業内容:**
1. クロスページテスト
2. パフォーマンス確認
3. ドキュメント更新

## 共通化される要素

### すべてのページで共通
- HTML基本構造
- `<head>`セクション（title以外）
- Google Fontsリンク
- レイアウトコンテナ
- Sidebar
- BottomBar
- MenuOverlay
- VideoModal
- BookingModal
- Footer
- 基本的なJavaScript（メニュー・モーダル制御）

### ページ固有の要素

**TOPページ特有:**
- BottomBarのスクロール連動制御
- GSAPパララックス効果
- 各種Swiper初期化

**下層ページ共通:**
- パンくずナビゲーション対応
- 固定表示のBottomBar（スクロール連動なし）

## 技術的注意事項

### JavaScript実行タイミング
- DOMContentLoadedの扱い
- ページ固有スクリプトの実行順序

### スタイルのスコープ
- グローバルスタイルとコンポーネントスタイルの分離
- SCSSインポートの管理

### Props/Slot管理
- 適切なデータ受け渡し
- named slotの使用検討

## 実装状況

| フェーズ | 状態 | 更新日時 |
|---------|------|----------|
| フェーズ1 | ✅ 完了 | 2024-12-12 |
| フェーズ2 | ✅ 完了 | 2024-12-12 |
| フェーズ3 | ✅ 完了 | 2024-12-12 |
| フェーズ4 | ✅ 完了 | 2024-12-12 |
| フェーズ5 | ⏳ 待機中 | - |
| フェーズ6 | ⏳ 待機中 | - |

## 関連ファイル

### レイアウトファイル
- `src/layouts/BaseLayout.astro` (✅ 作成完了)

### 対象ページファイル
- `src/pages/index.astro`
- `src/pages/activities/index.astro`
- `src/pages/activities/[slug].astro`

### ドキュメント
- このファイル: `docs/claude-info/13-layout-refactoring.md`
- メインドキュメント: `CLAUDE.md`への参照追加が必要