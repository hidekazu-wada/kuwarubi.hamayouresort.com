# フィルタリング機能ガイド

## アクティビティ一覧ページのフィルタリングシステム

### 概要

アクティビティ一覧ページ（`/activities/`）では、**コネクテッドフィルタリングシステム**を実装しています。これは、一つのフィルタを選択すると他のフィルタの選択肢が動的に更新される高度な絞り込み機能です。

### 技術的特徴

#### 1. コネクテッドフィルタリング（連動絞り込み）
```javascript
// フィルタ選択時に他のオプションを動的更新
function updateFilterOptions() {
  // 現在の選択状態で利用可能なアクティビティを取得
  const availableActivities = getFilteredActivities(currentFilters);
  
  // 各フィルタのオプションを利用可能なデータに基づき更新
  updatePriceOptions(availableActivities);
  updateDurationOptions(availableActivities);
  updateWeatherOptions(availableActivities);
}
```

#### 2. 範囲マッチング機能
数値範囲を持つフィルタ（料金・時間）で重複判定を実装：

```javascript
function hasOverlap(range1, range2) {
  return range1.max >= range2.min && range2.max >= range1.min;
}

// 実際の使用例：料金フィルタ
function matchesPrice(activity, selectedPrice) {
  const activityPrice = { min: activity.price.adult, max: activity.price.adult };
  const filterPrice = getPriceRange(selectedPrice); // '1000円から3000円' → {min: 1000, max: 3000}
  return hasOverlap(activityPrice, filterPrice);
}
```

#### 3. 統一されたフィルタ項目

現在実装されている3つのフィルタカテゴリ：

**料金:**
- `'500円から1000円'`
- `'1000円から3000円'`
- `'3000円から5000円'`
- `'5000円から1万円'`

**所要時間:**
- `'1時間未満'` (〜60分)
- `'1時間以上'` (60-119分)
- `'2時間以上'` (120分〜)

**実施可能天気:**
- `'晴れ'` (晴天のみ)
- `'雨'` (雨天でも実施)
- `'全天候'` (天候不問)

## アクティビティ一覧ページのリセット機能

### 概要

アクティビティ一覧ページには、**ワンクリックで全てのフィルタ条件をリセットする機能**が実装されています。

### 実装内容

#### 1. リセット機能の動作
```javascript
function resetFilters() {
  // 1. 全てのフィルタ選択肢をリセット
  Object.values(filterSelects).forEach((select) => {
    if (select) select.value = '';
  });
  
  // 2. 全てのアクティビティカードを表示
  activityCards.forEach((card) => {
    (card as HTMLElement).style.display = 'block';
  });
  
  // 3. 該当なしメッセージを非表示
  if (noResultsMessage) {
    noResultsMessage.style.display = 'none';
  }
  
  // 4. フィルタオプションを初期状態に戻す
  updateFilterOptions();
  
  // 5. ページの最上部にスムーズスクロール
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
```

#### 2. 機能の特徴
- **完全リセット**: 3つのフィルタ（料金・所要時間・天気）を全て空の状態に戻す
- **表示復元**: フィルタリングで非表示になったアクティビティカードを全て表示
- **連動リセット**: コネクテッドフィルタリングシステムも初期状態に戻す
- **スムーズスクロール**: リセット後に自動的にページ最上部へスクロール
- **UX最適化**: ユーザーがフィルタ試行後に簡単に初期状態に戻れる

### 使用方法
1. フィルタを選択してアクティビティを絞り込む
2. 「リセットする」ボタンをクリック
3. 全てのフィルタがクリアされ、全アクティビティが表示される
4. 自動的にページ最上部にスクロール

## 4つ目以降のフィルタ項目追加手順

### フィルタ項目追加の完全な手順

#### 例：「難易度」フィルタを4つ目として追加する場合

#### ステップ1: データ構造の拡張（activities.ts）

```typescript
// 全アクティビティデータにabout項目を追加
export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    // 既存データ...
    about: [
      { term: '対象年齢', description: '中学生以上' },
      { term: '実施時期', description: '夏' },
      { term: '難易度', description: '初級' }, // ← 4つ目として追加
      // 他の項目...
    ],
  },
  // 他のアクティビティも同様に追加
];
```

#### ステップ2: フィルタオプション生成ロジックの追加

```javascript
// 難易度オプション生成
const difficultySet = new Set<string>();
filteredActivities.forEach(activity => {
  const difficultyItem = activity.about.find(item => item.term === '難易度');
  if (difficultyItem) difficultySet.add(difficultyItem.description);
});

// 難易度の希望する順序を定義（初級→上級の順）
const difficultyOrder = ['初級', '中級', '上級'];
const difficultyOptions: FilterOption[] = difficultyOrder
  .filter(difficulty => difficultySet.has(difficulty))
  .map(difficulty => ({
    value: difficulty,
    label: difficulty
  }));
```

#### ステップ3: フィルタUIコンポーネントの拡張

```astro
<!-- 難易度（4つ目） -->
<div class="activity-filters__wrapper">
  <select class="activity-filters__select" name="difficulty">
    <option value="">難易度</option>
    {difficultyOptions.map(option => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
  <svg class="activity-filters__icon"><!-- アイコン --></svg>
</div>
```

#### ステップ4: フィルタリングロジックの拡張

```javascript
// getFilteredActivities関数内に追加
if (filters.difficulty) {
  const difficultyItem = activity.about.find(item => item.term === '難易度');
  if (!difficultyItem || difficultyItem.description !== filters.difficulty) {
    return false;
  }
}

// イベントリスナーに追加
if (e.target.name === 'difficulty') {
  currentFilters.difficulty = e.target.value;
  updateFilteredResults();
}
```

### フィルタ項目の編集・追加・削除方法

#### 新しいフィルタ項目の追加手順テンプレート

1. **データ追加** (`src/data/activities.ts`)
   ```typescript
   // 全アクティビティの about 配列に追加
   { term: '[フィルタ名]', description: '[統一カテゴリ値]' }
   ```

2. **オプション生成** (`src/pages/activities/index.astro`)
   ```javascript
   // [フィルタ名]オプション生成
   const [フィルタ名]Set = new Set<string>();
   // オプション配列生成ロジック
   ```

3. **UI追加** (`ActivityFilters.astro`)
   ```astro
   <!-- [フィルタ名] -->
   <div class="activity-filters__wrapper">
     <select class="activity-filters__select" name="[フィルタ名]">
       <!-- オプション -->
     </select>
   </div>
   ```

4. **フィルタリング追加** (`activities/index.astro`)
   ```javascript
   // フィルタ条件追加とイベントハンドリング
   ```

### 注意事項・ベストプラクティス

1. **データ整合性の確保**: 全アクティビティに同じterm名で追加
2. **統一カテゴリの定義**: 事前に値の種類を決める（3-5個程度が適切）
3. **UI/UXの考慮**: フィルタ数の上限（7個を超えるとUIが複雑になるため注意）
4. **パフォーマンス**: 大量データ時はパフォーマンス監視
5. **保守性**: 命名規則の統一、コメント追加

この手順に従うことで、5つ目以降のフィルタ項目も安全かつ確実に追加できます。