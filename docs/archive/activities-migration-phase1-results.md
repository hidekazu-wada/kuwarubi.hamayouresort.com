# Phase 1完了: アクティビティmicroCMS移行 - 現状調査結果 ✅

**調査完了日**: 2025-01-XX

**目的**: 現在`activities.ts`で管理しているアクティビティデータをmicroCMSへ移行するための詳細な現状調査

**結果**: データ構造、使用箇所、問題点、移行計画の完全な文書化が完了

---

## 📊 調査結果サマリー

### **activities.ts 基本情報**

- **ファイルサイズ**: 780行
- **アクティビティ数**: 9件
- **画像総数**: 40枚（gallery×31, pointBackground×9）
- **型定義**: Activity interface（14フィールド）

### **使用ファイル: 合計3ファイル**

1. `/src/pages/activities/[slug].astro` (2260行) - 詳細ページ
2. `/src/pages/activities/index.astro` (1249行) - 一覧ページ
3. `/src/components/pages/top/Activities.astro` (637行) - TOPページ

---

## 🔍 1. データ構造分析

### **Activity Interface 完全フィールドリスト**

```typescript
export interface Activity {
  // 基本情報（必須）
  slug: string;
  title: string;
  category: string;

  // 画像管理（必須）
  images: {
    gallery: any[];                // ImageMetadata[] - ギャラリー（3-5枚）
    pointBackground: any;          // ImageMetadata - 背景
  };

  // TOPページ表示用（オプション）
  topPageDisplay?: {
    showOnTop: boolean;
    slideImage: any;               // ImageMetadata
    catchphrase: string;
    titleColorClass?: string;
    displayOrder: number;
  };

  // 詳細ページコンテンツ（必須）
  intro: { title: string; text: string };
  point: { titleLines: string[]; description: string };

  // 詳細情報配列（必須）
  about: Array<{ term: string; description: string; note?: string }>;
  flow: Array<{ stepNumber: string; title: string; description: string }>;
  reservation: Array<{ label: string; value: string; link: string; hours: string }>;

  // メタ情報（必須）
  badges: Array<{ badge: '事前予約' | '当日予約' | '団体向け' | '個人向け' }>;
  isPopular: boolean;
  priceAdult: number;
}
```

### **現在の9アクティビティ**

| No | slug | title | category | gallery枚数 | isPopular |
|:---:|---|---|---|:---:|:---:|
| 1 | sup | SUP | ウォーター | 5 | true |
| 2 | canoe | カヌー | ウォーター | 5 | true |
| 3 | trekking | トレッキング | マウンテン | 5 | false |
| 4 | fishing | 釣り | レイク | 5 | false |
| 5 | cycling | サイクリング | マウンテン | 3 | false |
| 6 | craft | クラフト体験 | インドア | 3 | false |
| 7 | camping | キャンプ | アウトドア | 3 | true |
| 8 | stargazing | 星空観察 | ナイト | 3 | false |
| 9 | winter | 冬のアクティビティ | ウィンター | 4 | false |

---

## 📋 2. フィールド使用状況マトリクス

| フィールド | 詳細ページ | 一覧ページ | TOPページ | 備考 |
|---|:---:|:---:|:---:|---|
| slug | ✅ | ✅ | ✅ | URL生成 |
| title | ✅ | ✅ | ✅ | 全ページで表示 |
| category | ✅ | ✅ | ⚠️ | 一覧ページでフィルタリング |
| images.gallery | ✅ | ✅ | ✅ | gallery[0]をサムネイルとしても使用 |
| images.pointBackground | ✅ | ❌ | ❌ | 詳細ページ背景 |
| topPageDisplay.* | ❌ | ❌ | ✅ | TOPページ専用 |
| intro | ✅ | ✅ | ❌ | 詳細+一覧ページ |
| point | ✅ | ❌ | ❌ | 詳細ページのみ |
| about[] | ✅ | ⚠️ | ❌ | 一覧ページでフィルタリング |
| flow[] | ✅ | ❌ | ❌ | 詳細ページのみ |
| reservation[] | ✅ | ❌ | ❌ | 詳細ページのみ |
| badges[] | ✅ | ✅ | ❌ | 詳細・一覧ページ |
| isPopular | ✅ | ✅ | ❌ | 人気バッジ |
| priceAdult | ✅ | ✅ | ❌ | 料金表示 |

---

## ⚠️ 3. 発見された4つの主要問題点

### **✅ 問題1: 価格データの重複（解決済み）**

**旧状況**: 価格が2箇所に存在

```typescript
{
  about: [{ term: '料金', description: '大人: 8,800円〜' }],
  price: { adult: 8800 }
}
```

**解決策**: `priceAdult`フィールドのみを使用、about[]から料金削除

---

### **問題2: about[]のterm文字列依存**

**現状**: 一覧ページが文字列比較に依存

```typescript
const durationItem = activity.about.find((item) => item.term === '所要時間');
```

**問題点**: タイポによるバグ、型チェックが効かない

**推奨解決策**: 目的別フィールドに分離

```typescript
{
  displayInfo: Array<{ term: string; description: string; note?: string }>;
  filterableData: {
    durationHours: number;
    weather: 'all' | 'sunny' | 'rainy';
    seasons: string[];
    difficulty: '初心者向け' | '中級者向け' | '上級者向け';
    ageGroup: 'adults-only' | 'all-ages';
  };
}
```

---

### **問題3: topPageDisplay.showOnTopフラグの無意味化**

**現状**: 全9アクティビティが`showOnTop: true`（100%）

**推奨解決策**:
- **Option A**: フラグ削除、`displayOrder`のみで管理
- **Option B**: フラグを残し、将来の季節限定アクティビティに備える

---

### **問題4: 画像管理方式**

**現状**: ImageMetadata方式のみ使用（CLAUDE.mdには2つの方式が記載されているが実際は1つ）

**microCMS移行後**: microCMS画像管理機能 + クエリパラメータによる最適化

```typescript
// microCMSクエリパラメータ方式
const optimizedUrl = `${imageUrl}?w=800&fm=webp&q=80`;
```

---

## 🏗️ 4. microCMS APIスキーマ設計（推奨）

### **API名**: `activities-kuwarubi`

### **フィールド設計（25フィールド）**

```
基本情報:
- slug (テキスト、必須、ユニーク)
- title (テキスト、必須)
- category (セレクト、必須)

画像:
- gallery (複数画像、必須、3-5枚)
- pointBackgroundImage (画像、必須)

TOPページ:
- showOnTop (真偽値)
- topPageCatchphrase (テキスト)
- catchphraseColor (セレクト: white/blue)
- displayOrder (数値)

詳細コンテンツ:
- introTitle, introText
- pointTitleLine1, pointTitleLine2, pointDescription

繰り返しフィールド:
- displayInfo[] (term, description, note)
- flow[] (stepNumber, title, description)
- reservation[] (label, value, link, hours)
- badges[] (badge)

メタ情報:
- isPopular (真偽値)
- priceAdult (数値)

フィルタリング用:
- filterDurationHours (数値)
- filterWeather (セレクト)
- filterSeasons (複数選択)
- filterDifficulty (セレクト)
- filterAgeGroup (セレクト)
```

---

## 📊 5. タイムライン・作業時間見積もり

| Phase | 所要時間 | 内容 |
|---|:---:|---|
| Phase 3: 環境準備 | 5時間15分 | microCMS API作成、画像アップロード |
| Phase 4: コード移行 | 9時間 | 型定義、データ取得処理 |
| Phase 5: テスト検証 | 6時間 | 全ページ確認、スタイル検証 |
| Phase 6: 本番リリース | 2時間15分 | デプロイ、動作確認 |
| **合計** | **22時間30分** | **推奨: 3日間** |

---

## ⚠️ 6. リスク評価

| リスク | 影響度 | 発生確率 | 軽減策 |
|---|:---:|:---:|---|
| フィルタリング機能の破壊 | 🔴 高 | 中 | 徹底的なテスト |
| 画像表示の不具合 | 🟠 中 | 低 | 画像URL事前検証 |
| データ不整合 | 🟠 中 | 中 | チェックリスト作成 |
| ビルドパフォーマンス低下 | 🟡 低 | 低 | レスポンス時間測定 |

---

## 🎯 7. 次のステップ（Phase 2以降）

### **Phase 2: microCMS移行計画の策定** ✅ 完了

### **Phase 3: microCMS環境準備** ⏳ 待機中

1. microCMS API作成（activities-kuwarubi）
2. APIスキーマ設定（25フィールド）
3. 画像アップロード（40枚）
4. テストデータ登録
5. 環境変数設定

### **Phase 4: コード移行** ⏳ 待機中

1. microCMSクライアント設定
2. 型定義作成（/src/types/microcms.ts）
3. 画像ヘルパー関数（/src/utils/image.ts）
4. 各ページの更新

### **Phase 5: テスト・検証** ⏳ 待機中

### **Phase 6: 本番リリース** ⏳ 待機中

---

## 📝 重要な成果物

- ✅ 完全なデータ構造ドキュメント
- ✅ フィールド使用状況マトリクス
- ✅ microCMS APIスキーマ設計
- ✅ データマッピング表
- ✅ コード変更仕様
- ✅ テストチェックリスト
- ✅ リスク評価と軽減策
- ✅ 詳細なタイムライン

---

## 🔗 関連ドキュメント

- [アクティビティページ](../claude-info/09-activities.md)
- [フィルタリング機能](../claude-info/10-filtering.md)
- [ベストプラクティス](../claude-info/11-best-practices.md)
- [TypeScript設定](../claude-info/08-typescript.md)

---

**注意**: この調査結果は「進行中プロジェクト: アクティビティmicroCMS移行」の一部です。Phase 3以降の進捗は別ドキュメントを参照してください。
