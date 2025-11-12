# 完了: TOPページセクションの動的化 ✅

**完了日**: 2025-01-XX

**目的**: TOPページの各セクション（Activities、Enjoy、News、Blog）のコンテンツをハードコードからデータベース連携へ移行し、動的表示を実現

**結果**: スタイルとスクリプトを完全に維持しながら、コンテンツのみが動的化されたシステムが完成。各セクションで最新データが自動的にTOPページに表示される。

---

## 📋 完了したセクション一覧

1. ✅ **Activitiesセクションの動的化** - 全8アクティビティをスライダー表示
2. ✅ **Enjoyセクションの動的化** - 全5過ごし方プランをカード表示
3. ✅ **Newsセクションの動的化** - お知らせとイベント情報を最新4件ずつ表示
4. ✅ **Blogセクションの動的化** - 最新10件のブログ記事をスライダー表示

---

## 🎯 1. TOPページActivitiesセクションの動的化

### **実装内容**

#### **activities.tsの拡張**

- **型定義追加**: `topPageDisplay`オプショナルフィールド
- **画像インポート**: TOPページスライダー用画像（ImageMetadata）
- **ヘルパー関数**: `getTopPageActivities()`
- **データ追加**: 全8アクティビティにTOPページ表示用データ

#### **Activities.astroの動的化**

- ~300行のハードコードスライドを動的map()ループに置き換え
- 全てのBEMクラス名、HTML構造、スタイル、Swiperスクリプトは完全に維持

### **型定義**

```typescript
export interface Activity {
  // TOPページスライダー表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean;
    slideImage: any;              // ImageMetadata
    catchphrase: string;
    titleColorClass?: string;
    displayOrder: number;
  };
}
```

### **成果**

- TOPページコンテンツの変更は`activities.ts`の編集のみ
- WebP最適化とレスポンシブ画像
- 表示順序の柔軟な制御

---

## 🎯 2. TOPページEnjoyセクションの動的化

### **実装内容**

#### **schedules.tsの拡張**

- **型定義追加**: `topPageDisplay`オプショナルフィールド
- **画像インポート**: SP用×5、Tablet以上用×5
- **データ追加**: 全5プランにTOPページ表示用データ

#### **Enjoy.astroの動的化**

- 5つのハードコードカードを動的map()ループに置き換え
- レスポンシブ画像（SP用とTablet以上用）の個別最適化

### **型定義**

```typescript
export interface StayPlan {
  topPageDisplay?: {
    showOnTop: boolean;
    titleLine1: string;           // タイトル1行目（緑色）
    titleLine2: string;           // タイトル2行目（青色）
    category: string;
    imageSp: any;                 // ImageMetadata
    imageTabletUp: any;           // ImageMetadata
    imageAlt: string;
    displayOrder: number;
  };
}
```

### **データ対応表**

| displayOrder | プランID | titleLine1 | titleLine2 | category |
|:---:|---|---|---|---|
| 1 | family-nature | 子供と一緒に | 自然に触れたい方 | Family |
| 2 | couples | カップル・夫婦で | 自然体験をしたい方 | Couple |
| 3 | relaxation | 非日常を満喫 | ゆったりと過ごしたい方 | Comfortable |
| 4 | sightseeing | 近隣観光メインで | 西湖を拠点に楽しみたい方 | Tourism |
| 5 | rainy-day | 雨の日でも | 特別な体験をしたい方 | Rainy Day |

### **成果**

- レスポンシブ画像最適化（2種類）
- MoreButtonのクエリパラメータ連携

---

## 🎯 3. TOPページNewsセクションの動的化

### **実装内容**

#### **information.tsへのヘルパー関数追加**

- `getTopPageInformationPosts()` - 「お知らせ」最新4件
- `getTopPageEventPosts()` - 「イベント情報」最新4件
- カテゴリーフィルタリング → 日付降順ソート → 最大4件取得

#### **News.astroの動的化**

- INFORMATIONとEVENTの各4つのハードコード`<li>`を動的map()ループに置き換え
- MoreButtonのリンク先をクエリパラメータ付きURLに更新

### **処理フロー**

```typescript
export function getTopPageInformationPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.category === 'お知らせ')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}
```

### **現在のデータ状況**

| カテゴリー | 投稿数 | TOP表示 |
|:---:|:---:|:---:|
| お知らせ | 3件 | 3件 |
| イベント情報 | 1件 | 1件 |
| ブログ記事 | 4件 | 非表示 |

### **成果**

- 柔軟なデータ表示（件数不足時は存在する分のみ）
- フィルタリング連携（`/information?category=お知らせ`）
- time要素のdatetime属性によるSEO対策

---

## 🎯 4. TOPページBlogセクションの動的化

### **実装内容**

#### **information.tsの拡張**

- **型定義追加**: `topPageDisplay`オプショナルフィールド
- **画像インポート**: TOPページBlogスライダー用画像
- **ヘルパー関数**: `getTopPageBlogPosts()` - 最大10件、日付降順
- **データ追加**: 合計10件のブログ記事

#### **Blog.astroの動的化**

- 9つのハードコードスライドを動的map()ループに置き換え
- WebP最適化とsrcSet生成による最適なレスポンシブ画像

### **型定義**

```typescript
export interface InformationPost {
  topPageDisplay?: {
    showOnTop: boolean;
    slideImage: any;              // ImageMetadata
    displayOrder: number;
  };
}
```

### **ヘルパー関数**

```typescript
export function getTopPageBlogPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.topPageDisplay?.showOnTop)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
}
```

### **実装データ**

合計10件のブログ記事（4つの画像をローテーション使用）

| ID | タイトル | 日付 | 画像 |
|:---:|---|---|---|
| info-004 | 西湖周辺の隠れた絶景スポット | 2024-06-25 | slide-01.png |
| info-005 | 夏のアクティビティおすすめ5選 | 2024-05-15 | slide-02.png |
| info-006 | 地元食材を使った季節の料理 | 2024-04-10 | slide-03.png |
| ... | ... | ... | ... |

### **成果**

- Swiper自動対応（スライド数が変わっても対応）
- 常に最新10件を日付降順で表示
- 画像の再利用による効率化

---

## 🚀 新しいコンテンツ追加手順

### **Activitiesセクション**

1. `activities.ts`に新しいアクティビティデータを追加
2. `topPageDisplay`フィールドを設定
3. ビルド確認

### **Enjoyセクション**

1. `schedules.ts`に新しいプランデータを追加
2. `topPageDisplay`フィールドを設定（SP用・Tablet以上用画像）
3. ビルド確認

### **News/Blogセクション**

1. `information.ts`に新しい投稿データを追加
2. カテゴリーを設定（お知らせ/イベント情報/ブログ記事）
3. ブログの場合は`topPageDisplay`フィールドを設定
4. ビルド確認

---

## 🎉 全体の成果

### **保守性の向上**

- TOPページコンテンツの変更はデータファイルの編集のみ
- ハードコードの削減（約500行以上）

### **一貫性の確保**

- 単一データソースから複数ページへの展開
- データの整合性を保証

### **型安全性**

- TypeScriptによる完全な型チェック
- コンパイル時のエラー検出

### **パフォーマンス**

- WebP最適化とレスポンシブ画像
- 適切な画像サイズの自動生成

### **拡張性**

- 新しいコンテンツの追加が容易
- スタイル・スクリプトの完全維持（BEMクラス名、HTML構造、SCSS、Swiper）

### **自動ソート**

- 常に最新コンテンツが表示される
- 表示順序の柔軟な制御
