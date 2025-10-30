# microCMS 環境構築ガイド - Activities API

**作成日**: 2025-01-XX

**目的**: activities データをmicroCMSで管理するためのAPI環境を構築する

**所要時間**: 約5時間15分

---

## 📋 目次

1. [API作成手順](#1-api作成手順)
2. [APIスキーマ設定（全30フィールド）](#2-apiスキーマ設定)
3. [テストデータ登録](#3-テストデータ登録)
4. [画像アップロード手順](#4-画像アップロード手順)
5. [環境変数設定](#5-環境変数設定)
6. [動作確認](#6-動作確認)

---

## 1. API作成手順

### Step 1-1: microCMS管理画面にログイン

1. https://app.microcms.io にアクセス
2. アカウントにログイン
3. 対象のサービスを選択

### Step 1-2: 新しいAPIを作成

1. 左サイドバーの「API」をクリック
2. 「+ 追加」ボタンをクリック
3. 以下の設定を入力:

| 設定項目 | 値 |
|---|---|
| API名 | `activities` |
| エンドポイント | `activities` |
| APIの説明 | アクティビティ情報（SUP、カヌー、トレッキングなど） |
| APIの型 | **リスト形式** |

4. 「作成」ボタンをクリック

### 完了確認

- ✅ APIが作成され、`https://[service-name].microcms.io/api/v1/activities` のエンドポイントが利用可能
- ✅ API一覧に「activities」が表示される

---

## 2. APIスキーマ設定

### フィールド追加の基本操作

1. 作成したactivities APIをクリック
2. 「APIスキーマを編集」をクリック
3. 「+ フィールドを追加」から各フィールドを追加

### 2-1. 基本情報フィールド（3フィールド）

#### フィールド1: slug

| 設定項目 | 値 |
|---|---|
| フィールドID | `slug` |
| 表示名 | スラッグ（URL用） |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| ユニーク | ✅ ユニーク |
| 説明 | URL用のスラッグ（例: sup, canoe, trekking） |

#### フィールド2: title

| 設定項目 | 値 |
|---|---|
| フィールドID | `title` |
| 表示名 | アクティビティ名 |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | アクティビティの名称（例: SUP, カヌー） |

#### フィールド3: category

| 設定項目 | 値 |
|---|---|
| フィールドID | `category` |
| 表示名 | カテゴリー |
| 種類 | セレクトフィールド |
| 必須 | ✅ 必須 |
| 選択肢 | `ウォーター`, `マウンテン`, `レイク`, `インドア`, `アウトドア`, `ナイト`, `ウィンター` |
| 説明 | アクティビティのカテゴリー |

**⚠️ 注意**: `description`フィールドは削除しました。一覧ページでは`introText`を使用します。

---

### 2-2. 画像フィールド（2フィールド）

#### フィールド4: gallery

| 設定項目 | 値 |
|---|---|
| フィールドID | `gallery` |
| 表示名 | ギャラリー画像 |
| 種類 | 複数画像 |
| 必須 | ✅ 必須 |
| 説明 | 詳細ページのギャラリー用画像（3-5枚）。**1枚目を一覧ページ・TOPページのサムネイルとしても使用** |

#### フィールド5: pointBackgroundImage

| 設定項目 | 値 |
|---|---|
| フィールドID | `pointBackgroundImage` |
| 表示名 | ポイント背景画像 |
| 種類 | 画像 |
| 必須 | ✅ 必須 |
| 説明 | 詳細ページのポイントセクション背景画像 |

**⚠️ 注意**: `thumbnail`フィールドと`topPageSlideImage`フィールドは削除しました。`gallery`の1枚目（gallery[0]）をサムネイルとして使用します。

---

### 2-3. TOPページ表示設定（4フィールド）

#### フィールド6: showOnTop

| 設定項目 | 値 |
|---|---|
| フィールドID | `showOnTop` |
| 表示名 | TOPページに表示 |
| 種類 | 真偽値 |
| 必須 | ✅ 必須 |
| デフォルト値 | `false` |
| 説明 | TOPページのActivitiesセクションに表示するか |

#### フィールド7: topPageCatchphrase

| 設定項目 | 値 |
|---|---|
| フィールドID | `topPageCatchphrase` |
| 表示名 | キャッチコピー |
| 種類 | テキストフィールド |
| 必須 | ❌ オプション |
| 説明 | TOPページ用のキャッチコピー（例: 水上散歩を楽しむ） |

#### フィールド8: topPageTitleColorClass

| 設定項目 | 値 |
|---|---|
| フィールドID | `topPageTitleColorClass` |
| 表示名 | タイトル色クラス |
| 種類 | テキストフィールド |
| 必須 | ❌ オプション |
| 説明 | TOPページのタイトル色用CSSクラス（例: color-blue） |

#### フィールド9: displayOrder

| 設定項目 | 値 |
|---|---|
| フィールドID | `displayOrder` |
| 表示名 | 表示順序 |
| 種類 | 数値 |
| 必須 | ❌ オプション |
| 説明 | TOPページでの表示順序（1から開始） |

---

### 2-4. 詳細コンテンツフィールド（5フィールド）

#### フィールド10: introTitle

| 設定項目 | 値 |
|---|---|
| フィールドID | `introTitle` |
| 表示名 | イントロタイトル |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 詳細ページのイントロセクションタイトル |

#### フィールド11: introText

| 設定項目 | 値 |
|---|---|
| フィールドID | `introText` |
| 表示名 | イントロ本文 |
| 種類 | リッチエディタ（または テキストエリア） |
| 必須 | ✅ 必須 |
| 説明 | イントロセクションの本文 |

#### フィールド12: pointTitleLine1

| 設定項目 | 値 |
|---|---|
| フィールドID | `pointTitleLine1` |
| 表示名 | ポイントタイトル1行目 |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | ポイントセクションのタイトル1行目 |

#### フィールド13: pointTitleLine2

| 設定項目 | 値 |
|---|---|
| フィールドID | `pointTitleLine2` |
| 表示名 | ポイントタイトル2行目 |
| 種類 | テキストフィールド |
| 必須 | ❌ オプション |
| 説明 | ポイントセクションのタイトル2行目 |

#### フィールド14: pointDescription

| 設定項目 | 値 |
|---|---|
| フィールドID | `pointDescription` |
| 表示名 | ポイント説明文 |
| 種類 | リッチエディタ（または テキストエリア） |
| 必須 | ✅ 必須 |
| 説明 | ポイントセクションの説明文 |

---

### 2-5. 繰り返しフィールド1: displayInfo（詳細情報）

#### フィールド15: displayInfo

| 設定項目 | 値 |
|---|---|
| フィールドID | `displayInfo` |
| 表示名 | 詳細情報 |
| 種類 | 繰り返しフィールド |
| 必須 | ✅ 必須 |
| 説明 | 詳細ページに表示する情報（所要時間、持ち物など） |

**繰り返しフィールド内の子フィールド**:

##### 子フィールド1: term

| 設定項目 | 値 |
|---|---|
| フィールドID | `term` |
| 表示名 | 項目名 |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: 所要時間, 持ち物, 服装 |

##### 子フィールド2: description

| 設定項目 | 値 |
|---|---|
| フィールドID | `description` |
| 表示名 | 内容 |
| 種類 | テキストエリア |
| 必須 | ✅ 必須 |
| 説明 | 項目の内容 |

##### 子フィールド3: note

| 設定項目 | 値 |
|---|---|
| フィールドID | `note` |
| 表示名 | 補足 |
| 種類 | テキストフィールド |
| 必須 | ❌ オプション |
| 説明 | 補足情報（必要な場合のみ） |

---

### 2-6. 繰り返しフィールド2: flow（体験の流れ）

#### フィールド16: flow

| 設定項目 | 値 |
|---|---|
| フィールドID | `flow` |
| 表示名 | 体験の流れ |
| 種類 | 繰り返しフィールド |
| 必須 | ✅ 必須 |
| 説明 | アクティビティの体験ステップ |

**繰り返しフィールド内の子フィールド**:

##### 子フィールド1: stepNumber

| 設定項目 | 値 |
|---|---|
| フィールドID | `stepNumber` |
| 表示名 | ステップ番号 |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: 01, 02, 03 |

##### 子フィールド2: title

| 設定項目 | 値 |
|---|---|
| フィールドID | `title` |
| 表示名 | ステップタイトル |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | ステップの見出し |

##### 子フィールド3: description

| 設定項目 | 値 |
|---|---|
| フィールドID | `description` |
| 表示名 | ステップ説明 |
| 種類 | テキストエリア |
| 必須 | ✅ 必須 |
| 説明 | ステップの詳細説明 |

---

### 2-7. 繰り返しフィールド3: reservation（予約方法）

#### フィールド17: reservation

| 設定項目 | 値 |
|---|---|
| フィールドID | `reservation` |
| 表示名 | 予約方法 |
| 種類 | 繰り返しフィールド |
| 必須 | ✅ 必須 |
| 説明 | 予約方法の情報 |

**繰り返しフィールド内の子フィールド**:

##### 子フィールド1: label

| 設定項目 | 値 |
|---|---|
| フィールドID | `label` |
| 表示名 | 予約方法ラベル |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: 電話予約, オンライン予約 |

##### 子フィールド2: value

| 設定項目 | 値 |
|---|---|
| フィールドID | `value` |
| 表示名 | 値 |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: 0555-82-2641, https://example.com |

##### 子フィールド3: link

| 設定項目 | 値 |
|---|---|
| フィールドID | `link` |
| 表示名 | リンク |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: tel:0555-82-2641, https://example.com |

##### 子フィールド4: hours

| 設定項目 | 値 |
|---|---|
| フィールドID | `hours` |
| 表示名 | 受付時間 |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: 9:00-18:00 |

---

### 2-8. 繰り返しフィールド4: badges（バッジ）

#### フィールド18: badges

| 設定項目 | 値 |
|---|---|
| フィールドID | `badges` |
| 表示名 | バッジ |
| 種類 | 繰り返しフィールド |
| 必須 | ❌ オプション |
| 説明 | アクティビティのバッジ表示 |

**繰り返しフィールド内の子フィールド**:

##### 子フィールド1: type

| 設定項目 | 値 |
|---|---|
| フィールドID | `type` |
| 表示名 | バッジタイプ |
| 種類 | セレクトフィールド |
| 必須 | ✅ 必須 |
| 選択肢 | `reservation`, `group` |
| 説明 | バッジの種類 |

##### 子フィールド2: text

| 設定項目 | 値 |
|---|---|
| フィールドID | `text` |
| 表示名 | バッジテキスト |
| 種類 | テキストフィールド |
| 必須 | ✅ 必須 |
| 説明 | 例: 要予約, 団体OK |

---

### 2-9. メタ情報フィールド（2フィールド）

#### フィールド19: isPopular

| 設定項目 | 値 |
|---|---|
| フィールドID | `isPopular` |
| 表示名 | 人気アクティビティ |
| 種類 | 真偽値 |
| 必須 | ✅ 必須 |
| デフォルト値 | `false` |
| 説明 | 人気バッジを表示するか |

#### フィールド20: priceAdult

| 設定項目 | 値 |
|---|---|
| フィールドID | `priceAdult` |
| 表示名 | 料金（大人） |
| 種類 | 数値 |
| 必須 | ✅ 必須 |
| 説明 | 大人の料金（円）例: 8800 |

---

### 2-10. フィルタリング用フィールド（4フィールド）

#### フィールド21: filterDurationHours

| 設定項目 | 値 |
|---|---|
| フィールドID | `filterDurationHours` |
| 表示名 | 所要時間（時間） |
| 種類 | 数値 |
| 必須 | ❌ オプション |
| 説明 | フィルタリング用。例: 2（2時間） |

#### フィールド22: filterDurationMinutes

| 設定項目 | 値 |
|---|---|
| フィールドID | `filterDurationMinutes` |
| 表示名 | 所要時間（分） |
| 種類 | 数値 |
| 必須 | ❌ オプション |
| 説明 | フィルタリング用。例: 30（30分） |

#### フィールド23: filterWeather

| 設定項目 | 値 |
|---|---|
| フィールドID | `filterWeather` |
| 表示名 | 実施可能天気 |
| 種類 | セレクトフィールド |
| 必須 | ❌ オプション |
| 選択肢 | `all`, `sunny`, `rainy` |
| 説明 | フィルタリング用。all=全天候, sunny=晴天のみ, rainy=雨天可 |

#### フィールド24: filterSeasons

| 設定項目 | 値 |
|---|---|
| フィールドID | `filterSeasons` |
| 表示名 | 実施可能季節 |
| 種類 | 複数選択 |
| 必須 | ❌ オプション |
| 選択肢 | `春`, `夏`, `秋`, `冬` |
| 説明 | フィルタリング用。複数選択可 |

---

### ✅ APIスキーマ設定完了確認

全24フィールド（繰り返しフィールドの子フィールド含めると27フィールド）の設定が完了したら:

- [ ] APIスキーマ編集画面で「保存」をクリック
- [ ] フィールド一覧で全フィールドが表示されることを確認
- [ ] 「コンテンツを追加」ボタンが有効になっていることを確認

---

## 3. テストデータ登録

### 3-1. テストデータ登録の流れ

1. activities API画面で「コンテンツを追加」をクリック
2. 以下のテストデータ（SUP）を入力
3. 「公開」をクリック
4. 他の8アクティビティも同様に登録

### 3-2. テストデータ: SUP

#### 基本情報

| フィールド | 値 |
|---|---|
| slug | `sup` |
| title | `SUP` |
| category | `ウォーター` |

**⚠️ 注意**: `description`フィールドは削除されました。一覧ページでは`introText`を使用します。

#### 画像

| フィールド | ファイル名（後でアップロード） |
|---|---|
| thumbnail | `sup-thumbnail.jpg` |
| gallery | `sup-gallery-01.jpg` ~ `sup-gallery-05.jpg` (5枚) |
| pointBackgroundImage | `sup-point-bg.jpg` |
| topPageSlideImage | `sup-top-slide.jpg` |

#### TOPページ表示設定

| フィールド | 値 |
|---|---|
| showOnTop | `true` |
| topPageCatchphrase | `水上散歩を楽しむ` |
| topPageTitleColorClass | `color-blue` |
| displayOrder | `1` |

#### 詳細コンテンツ

| フィールド | 値 |
|---|---|
| introTitle | `西湖の美しい景色を水上から` |
| introText | `スタンドアップパドルボード（SUP）は、ボードの上に立ってパドルを漕ぐ新しいウォータースポーツです。西湖の穏やかな水面は初心者の方にも最適。富士山を眺めながらの水上散歩をお楽しみください。` |
| pointTitleLine1 | `初心者でも` |
| pointTitleLine2 | `安心して楽しめる` |
| pointDescription | `経験豊富なインストラクターが丁寧に指導します。ライフジャケット着用で安全面も万全です。` |

#### displayInfo（詳細情報）

| No | term | description | note |
|:---:|---|---|---|
| 1 | 所要時間 | 約2時間 | - |
| 2 | 対象年齢 | 小学生以上 | - |
| 3 | 持ち物 | 水着、タオル、着替え | - |
| 4 | 服装 | 濡れてもよい服装 | - |
| 5 | 実施時期 | 4月〜11月 | - |

#### flow（体験の流れ）

| No | stepNumber | title | description |
|:---:|---|---|---|
| 1 | 01 | 受付・着替え | 受付を済ませ、ライフジャケットを着用します |
| 2 | 02 | 陸上レクチャー | パドルの使い方や基本動作を練習します |
| 3 | 03 | 水上練習 | 膝立ちの状態から徐々に立ち上がります |
| 4 | 04 | SUPクルージング | 慣れてきたら湖上を自由に漕いでみましょう |
| 5 | 05 | 終了・着替え | シャワーを浴びて着替えます |

#### reservation（予約方法）

| No | label | value | link | hours |
|:---:|---|---|---|---|
| 1 | 電話予約 | 0555-82-2641 | tel:0555-82-2641 | 9:00-18:00 |
| 2 | オンライン予約 | 予約サイトへ | https://example.com/reserve | 24時間 |

#### badges（バッジ）

| No | type | text |
|:---:|---|---|
| 1 | reservation | 要予約 |
| 2 | group | 団体OK |

#### メタ情報

| フィールド | 値 |
|---|---|
| isPopular | `true` |
| priceAdult | `8800` |

#### フィルタリング用

| フィールド | 値 |
|---|---|
| filterDurationHours | `2` |
| filterDurationMinutes | `0` |
| filterWeather | `sunny` |
| filterSeasons | `春`, `夏`, `秋` （3つ選択） |

---

### 3-3. 残り8アクティビティのデータ

残りの8アクティビティ（カヌー、トレッキング、釣り、サイクリング、クラフト体験、キャンプ、星空観察、冬のアクティビティ）についても、同様の形式でデータを登録してください。

詳細なデータは `/src/data/activities.ts` を参照してください。

---

## 4. 画像アップロード手順

### 4-1. 画像の準備

現在の画像は `/src/assets/images/activities/` に格納されています。

**画像構造**:
```
src/assets/images/activities/
├── sup/
│   ├── thumbnail.jpg
│   ├── gallery-01.jpg ~ gallery-05.jpg
│   ├── point-bg.jpg
│   └── top-slide.jpg
├── canoe/
│   └── ...
└── ...（他のアクティビティ）
```

### 4-2. 画像ファイル名規則

microCMSにアップロードする際は、以下の命名規則に従ってください:

| 画像タイプ | ファイル名 | 例 |
|---|---|---|
| thumbnail | `{slug}-thumbnail.jpg` | `sup-thumbnail.jpg` |
| gallery | `{slug}-gallery-{番号}.jpg` | `sup-gallery-01.jpg` |
| pointBackground | `{slug}-point-bg.jpg` | `sup-point-bg.jpg` |
| topPageSlideImage | `{slug}-top-slide.jpg` | `sup-top-slide.jpg` |

### 4-3. アップロード手順

#### 方法1: コンテンツ編集時にアップロード（推奨）

1. activities APIのコンテンツ編集画面を開く
2. 各画像フィールドの「画像を選択」をクリック
3. 「アップロード」タブから画像ファイルを選択
4. 画像が自動的にmicroCMSメディアライブラリに保存される

#### 方法2: 事前にメディアライブラリにアップロード

1. microCMS管理画面の「メディア」をクリック
2. 「アップロード」ボタンから一括アップロード
3. コンテンツ編集時に「メディアライブラリから選択」で使用

### 4-4. 画像最適化の注意点

- microCMSは自動的に画像を最適化します
- 元画像は高解像度（横幅1920px以上推奨）でアップロード
- JPG形式推奨（PNG, WebPも可）

### 4-5. アップロード進捗チェックリスト

#### SUP（9枚）
- [ ] sup-thumbnail.jpg
- [ ] sup-gallery-01.jpg
- [ ] sup-gallery-02.jpg
- [ ] sup-gallery-03.jpg
- [ ] sup-gallery-04.jpg
- [ ] sup-gallery-05.jpg
- [ ] sup-point-bg.jpg
- [ ] sup-top-slide.jpg

#### カヌー（9枚）
- [ ] canoe-thumbnail.jpg
- [ ] canoe-gallery-01.jpg ~ 05.jpg (5枚)
- [ ] canoe-point-bg.jpg
- [ ] canoe-top-slide.jpg

#### トレッキング（9枚）
- [ ] trekking-thumbnail.jpg
- [ ] trekking-gallery-01.jpg ~ 05.jpg (5枚)
- [ ] trekking-point-bg.jpg
- [ ] trekking-top-slide.jpg

#### 釣り（9枚）
- [ ] fishing-thumbnail.jpg
- [ ] fishing-gallery-01.jpg ~ 05.jpg (5枚)
- [ ] fishing-point-bg.jpg
- [ ] fishing-top-slide.jpg

#### サイクリング（7枚）
- [ ] cycling-thumbnail.jpg
- [ ] cycling-gallery-01.jpg ~ 03.jpg (3枚)
- [ ] cycling-point-bg.jpg
- [ ] cycling-top-slide.jpg

#### クラフト体験（7枚）
- [ ] craft-thumbnail.jpg
- [ ] craft-gallery-01.jpg ~ 03.jpg (3枚)
- [ ] craft-point-bg.jpg
- [ ] craft-top-slide.jpg

#### キャンプ（7枚）
- [ ] camping-thumbnail.jpg
- [ ] camping-gallery-01.jpg ~ 03.jpg (3枚)
- [ ] camping-point-bg.jpg
- [ ] camping-top-slide.jpg

#### 星空観察（7枚）
- [ ] stargazing-thumbnail.jpg
- [ ] stargazing-gallery-01.jpg ~ 03.jpg (3枚)
- [ ] stargazing-point-bg.jpg
- [ ] stargazing-top-slide.jpg

#### 冬のアクティビティ（8枚）
- [ ] winter-thumbnail.jpg
- [ ] winter-gallery-01.jpg ~ 04.jpg (4枚)
- [ ] winter-point-bg.jpg
- [ ] winter-top-slide.jpg

**合計**: 72枚（実際には一部重複の可能性あり）

---

## 5. 環境変数設定

### 5-1. microCMS APIキーの取得

1. microCMS管理画面の「設定」→「APIキー」をクリック
2. 「+ 追加」ボタンをクリック
3. 以下の設定を入力:

| 設定項目 | 値 |
|---|---|
| 名前 | `Astro Production` |
| 権限 | `GET` (読み取りのみ) |
| 説明 | Astroプロジェクト本番環境用 |

4. 「作成」をクリック
5. 生成されたAPIキーをコピー（**この画面を閉じると再表示できません**）

### 5-2. .envファイルの作成

プロジェクトルートに `.env` ファイルを作成し、以下を記述:

```env
# microCMS API設定
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**重要**:
- `your-service-name` は microCMSのサービス名（例: `kuwarubi`）
- `MICROCMS_API_KEY` は先ほどコピーしたAPIキー

### 5-3. .env.exampleファイルの作成

チーム共有用に `.env.example` ファイルを作成:

```env
# microCMS API設定
MICROCMS_SERVICE_DOMAIN=
MICROCMS_API_KEY=
```

### 5-4. .gitignoreの確認

`.env` ファイルがGitにコミットされないよう確認:

```bash
# .gitignore に以下が含まれていることを確認
.env
.env.local
.env.*.local
```

### 5-5. Vercel/Netlify環境変数設定

本番環境（Vercel/Netlify）にも環境変数を設定:

#### Vercelの場合
1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Environment Variables」
3. 以下の2つの環境変数を追加:
   - `MICROCMS_SERVICE_DOMAIN`
   - `MICROCMS_API_KEY`

#### Netlifyの場合
1. Netlifyダッシュボードでプロジェクトを選択
2. 「Site settings」→「Environment variables」
3. 「Add a variable」から追加

---

## 6. 動作確認

### 6-1. microCMS APIエンドポイントのテスト

ブラウザまたはAPIクライアント（Postman, Thunder Client等）で以下のURLにアクセス:

```
https://[service-name].microcms.io/api/v1/activities
```

**ヘッダー**:
```
X-MICROCMS-API-KEY: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**期待されるレスポンス**:
```json
{
  "contents": [
    {
      "id": "xxx",
      "createdAt": "2025-01-XX",
      "updatedAt": "2025-01-XX",
      "publishedAt": "2025-01-XX",
      "revisedAt": "2025-01-XX",
      "slug": "sup",
      "title": "SUP",
      ...
    }
  ],
  "totalCount": 9,
  "offset": 0,
  "limit": 10
}
```

### 6-2. 画像URLのテスト

レスポンスに含まれる画像URLにアクセスし、画像が正常に表示されることを確認:

```
https://images.microcms-assets.io/assets/[service-id]/[image-id]/[filename]
```

### 6-3. フィルタリングのテスト

#### カテゴリーフィルタ
```
https://[service-name].microcms.io/api/v1/activities?filters=category[equals]ウォーター
```

#### TOPページ表示フィルタ
```
https://[service-name].microcms.io/api/v1/activities?filters=showOnTop[equals]true&orders=displayOrder
```

### 6-4. 完了確認チェックリスト

- [ ] API作成完了（エンドポイント: `/api/v1/activities`）
- [ ] 全24フィールドの設定完了
- [ ] テストデータ1件（SUP）の登録完了
- [ ] 画像アップロード完了（最低SUP分）
- [ ] .envファイル作成完了
- [ ] APIエンドポイントからデータ取得成功
- [ ] 画像URL表示成功

---

## 📌 次のステップ

Phase 3が完了したら、**Phase 4: コード移行**に進みます。

Phase 4では以下の作業を行います:
1. microCMS SDKのインストール
2. 型定義ファイルの作成（`/src/types/microcms.ts`）
3. 画像ヘルパー関数の作成（`/src/utils/image.ts`）
4. 3つのページファイルの更新
5. ビルドテストとエラー修正

---

## ❓ トラブルシューティング

### Q1: APIキーが取得できない

**A**: microCMS管理画面の「設定」→「APIキー」で新しいキーを作成してください。GETのみの権限で十分です。

### Q2: 画像アップロードが失敗する

**A**: 以下を確認してください:
- ファイルサイズが10MB以下か
- ファイル形式がJPG/PNG/WebPか
- microCMSのストレージ容量が十分にあるか

### Q3: 繰り返しフィールドの設定方法がわからない

**A**: フィールド追加時に「繰り返しフィールド」を選択し、その中に子フィールドを追加してください。ネストは1階層のみです。

### Q4: テストデータがうまく保存できない

**A**: 必須フィールドが全て入力されているか確認してください。特に画像フィールドは必須のものが多いため注意が必要です。

---

**ドキュメント作成日**: 2025-01-XX
**最終更新日**: 2025-01-XX
