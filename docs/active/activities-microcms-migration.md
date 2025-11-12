# 🚧 進行中: アクティビティデータのmicroCMS移行プロジェクト

**開始日**: 2025-01-XX

**目的**: 現在`activities.ts`で管理しているアクティビティデータをmicroCMSへ移行し、コンテンツ管理をCMS化する

**最終ゴール**: アクティビティデータをmicroCMSで管理し、既存のマークアップ・スタイリング・スクリプトに一切の変更や不具合を生じさせない

---

## 📊 現在のステータス

**現在のフェーズ**: Phase 2 完了、Phase 3待機中

**全体進捗**: Phase 1-2完了（調査・計画） / Phase 3-6待機中（実装・リリース）

### **完了済みフェーズ**

- ✅ **Phase 1**: 現状調査（完了）
  - データ構造分析
  - 使用箇所の特定
  - 問題点の発見と解決策の提示
  - 詳細は [Phase 1調査結果](../archive/activities-migration-phase1-results.md) 参照

- ✅ **Phase 2**: microCMS移行計画の策定（完了）
  - APIスキーマ設計
  - データマッピング表
  - コード変更仕様
  - タイムライン作成

### **待機中フェーズ**

- ⏳ **Phase 3**: microCMS環境準備（待機中）
- ⏳ **Phase 4**: コード移行（待機中）
- ⏳ **Phase 5**: テスト・検証（待機中）
- ⏳ **Phase 6**: 本番リリース（待機中）

---

## 🎯 移行対象の概要

### **データ規模**

- **アクティビティ数**: 9件
- **画像総数**: 40枚
- **影響ファイル**: 3ファイル
- **推定作業時間**: 22.5時間（3日間）

### **主要な変更点**

1. **データソースの変更**: `activities.ts` → microCMS API
2. **画像管理の変更**: ImageMetadata → microCMS画像管理
3. **型定義の追加**: microCMS APIレスポンス型
4. **ヘルパー関数の追加**: 画像最適化ヘルパー

---

## ⚠️ 重要な制約事項

### **絶対に変更してはいけないもの**

1. ✅ **マークアップ（HTML構造）**: BEMクラス名を含む全てのHTML構造を維持
2. ✅ **スタイリング（SCSS）**: 既存のスタイルに一切の影響を与えない
3. ✅ **スクリプト（JavaScript/TypeScript）**: Swiper、GSAP、その他のスクリプトの動作を維持
4. ✅ **URL構造**: `/activities/[slug]`のルーティングを維持

---

## 📝 次のアクションアイテム

### **Phase 3開始前の準備**

- [ ] microCMS環境の最終確認
  - アカウント・プロジェクトへのアクセス確認
  - API作成権限の確認
  - 画像アップロード容量の確認

- [ ] バックアップの作成
  ```bash
  cp src/data/activities.ts src/data/activities.ts.backup
  git add .
  git commit -m "Backup: activities.ts before microCMS migration"
  git push
  ```

- [ ] ステージング環境の準備
  - Vercel/NetlifyのPreview Deploymentの確認
  - microCMSの開発環境設定

### **Phase 3実行時のチェックリスト**

- [ ] microCMS API作成（activities-kuwarubi）
- [ ] APIスキーマ設定（25フィールド）
- [ ] 画像アップロード（40枚、約1.3時間）
- [ ] テストデータ登録（9件、約2-4時間）
- [ ] 環境変数設定（.env）

**推定所要時間**: 5時間15分

---

## 🔧 技術仕様（概要）

### **microCMS APIスキーマ**

- **API名**: `activities-kuwarubi`
- **フィールド数**: 25フィールド（サブフィールド含めて28）
- **主要フィールド**: slug, title, category, gallery, priceAdult, etc.

詳細は [Phase 1調査結果](../archive/activities-migration-phase1-results.md) 参照

### **画像最適化方式**

**採用方式**: microCMSクエリパラメータ方式

```typescript
// ヘルパー関数
export function optimizeMicroCMSImage(
  url: string,
  options: { width?: number; format?: 'webp' | 'jpg' | 'png'; quality?: number }
): string {
  const params = new URLSearchParams();
  if (options.width) params.set('w', options.width.toString());
  if (options.format) params.set('fm', options.format);
  if (options.quality) params.set('q', options.quality.toString());
  return `${url}?${params.toString()}`;
}
```

### **新規作成ファイル**

- `/src/utils/image.ts` - 画像最適化ヘルパー関数
- `/src/types/microcms.ts` - microCMS APIレスポンス型定義

---

## ⏱️ タイムライン（推定）

| Phase | 所要時間 | 内容 |
|---|:---:|---|
| Phase 3: 環境準備 | 5時間15分 | microCMS API作成、画像アップロード、データ登録 |
| Phase 4: コード移行 | 9時間 | 型定義、データ取得処理、各ページ更新 |
| Phase 5: テスト検証 | 6時間 | 全ページ確認、スタイル・スクリプト検証 |
| Phase 6: 本番リリース | 2時間15分 | デプロイ、動作確認、ドキュメント更新 |
| **合計** | **22時間30分** | **推奨スケジュール: 3日間** |

---

## ⚠️ リスク評価

| リスク | 影響度 | 発生確率 | 軽減策 |
|---|:---:|:---:|---|
| フィルタリング機能の破壊 | 🔴 高 | 中 | 徹底的なテスト、全フィルタ組み合わせの検証 |
| 画像表示の不具合 | 🟠 中 | 低 | 画像URL事前検証、ヘルパー関数のユニットテスト |
| データ不整合 | 🟠 中 | 中 | データ入力チェックリスト、ステージング検証 |
| ビルドパフォーマンス低下 | 🟡 低 | 低 | レスポンス時間測定、キャッシュ戦略検討 |
| TypeScriptコンパイルエラー | 🟡 低 | 低 | 型定義の段階的実装、tscチェック |

---

## 🔄 ロールバック戦略

### **緊急ロールバック手順**

1. **Step 1**: Gitで直前のコミットにrevert
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Step 2**: activities.tsの復元
   ```bash
   cp src/data/activities.ts.backup src/data/activities.ts
   ```

3. **Step 3**: ビルド確認
   ```bash
   npm run build
   ```

### **ロールバック判断基準**

以下のいずれかが発生した場合、即座にロールバック：

- [ ] ビルドが失敗する
- [ ] 本番環境で3ページ以上が404エラー
- [ ] 画像が50%以上表示されない
- [ ] フィルタリング機能が完全に動作しない
- [ ] Swiperスライダーが全く動作しない
- [ ] ページロード時間が2倍以上に増加

---

## 📚 関連ドキュメント

### **詳細調査結果**

- [Phase 1調査結果](../archive/activities-migration-phase1-results.md) - データ構造、使用箇所、問題点の詳細

### **設計ドキュメント**

- [アクティビティページ](../claude-info/09-activities.md) - 現在のアクティビティシステムの仕様
- [フィルタリング機能](../claude-info/10-filtering.md) - フィルタリングの実装詳細
- [TypeScript設定](../claude-info/08-typescript.md) - 型定義システム

### **ベストプラクティス**

- [ベストプラクティス](../claude-info/11-best-practices.md) - コーディング規約

---

## 📝 進捗メモ

### **2025-01-XX - Phase 1-2完了**

- ✅ 完全な現状調査完了（データ構造、使用箇所、問題点）
- ✅ microCMS移行計画書完成（APIスキーマ、タイムライン、リスク評価）
- ✅ 4つの主要問題点を特定（価格重複、term文字列依存、showOnTopフラグ、画像管理）
- ⏳ Phase 3開始待ち（ユーザー承認後）

### **次回作業時のチェックポイント**

- [ ] microCMSアカウントへのアクセス確認
- [ ] バックアップの作成
- [ ] ステージング環境の確認
- [ ] Phase 3タスクの開始

---

## 🎯 プロジェクトゴール

**成功基準**:

1. ✅ 全9アクティビティがmicroCMSで管理される
2. ✅ マークアップ・スタイル・スクリプトが100%維持される
3. ✅ フィルタリング機能が完全に動作する
4. ✅ 画像が全て正常に表示される
5. ✅ パフォーマンスが維持または向上する
6. ✅ 新しいアクティビティの追加がCMS上で可能になる

**期待される効果**:

- コンテンツ更新がノンエンジニアでも可能に
- データの一元管理による整合性向上
- 型安全性の維持
- 将来的なコンテンツ拡張が容易に
