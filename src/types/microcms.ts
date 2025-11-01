// microCMS共通の型定義
export interface MicroCMSImage {
  url: string;
  height?: number;
  width?: number;
}

export interface MicroCMSDate {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

// お知らせ・イベント・ブログ記事の型定義
export interface InformationPost extends MicroCMSDate {
  id: string;
  slug: string; // URLで使用されるスラッグ
  title: string;
  category: ('お知らせ' | 'イベント情報' | 'ブログ記事')[]; // microCMSでは配列形式
  content: string; // リッチエディタのHTML
  thumbnail?: MicroCMSImage; // ブログ記事用のサムネイル画像
}

// microCMS APIレスポンスの型定義（リスト形式）
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// アクティビティの型定義
export interface Activity extends MicroCMSDate {
  id: string;

  // 基本情報
  slug: string;
  title: string;
  category?: string; // オプショナル（再作成時にデータが空の可能性があるため）

  // 画像
  gallery: MicroCMSImage[];
  pointBackgroundImage: MicroCMSImage;

  // TOPページ表示設定
  showOnTop: boolean;
  topPageCatchphrase: string;
  catchphraseColor: 'white' | 'blue' | ('white' | 'blue')[]; // 配列形式（旧データ）にも対応
  displayOrder: number;

  // 詳細コンテンツ
  introTitleLine1: string;
  introTitleLine2?: string;
  introText: string;

  pointTitleLine1: string;
  pointTitleLine2?: string;
  pointDescription: string;

  // 繰り返しフィールド: 詳細情報
  displayInfo: Array<{
    fieldId: string;
    term: string;
    description: string;
    note?: string;
  }>;

  // 繰り返しフィールド: 体験の流れ
  flow: Array<{
    fieldId: string;
    stepNumber: string;
    title: string;
    description: string;
  }>;

  // 繰り返しフィールド: 予約方法
  reservation: Array<{
    fieldId: string;
    label: string;
    value: string;
    link: string;
    hours: string;
  }>;

  // 繰り返しフィールド: バッジ（配列形式にも対応）
  badges: Array<{
    fieldId: string;
    badge: ('事前予約' | '当日予約' | '団体向け' | '個人向け') | ('事前予約' | '当日予約' | '団体向け' | '個人向け')[];
  }>;

  // メタ情報
  isPopular: boolean;
  basePrice: number; // 基準価格（フィルタ・一覧表示用）

  // フィルタリング用データ
  filterDurationHours?: number;
  filterWeather?: 'all' | 'sunny' | 'light-rain' | 'rainy' | ('all' | 'sunny' | 'light-rain' | 'rainy')[]; // 配列形式（旧データ）にも対応
  filterSeasons?: string[];
  filterDifficulty?: '初心者向け' | '中級者向け' | '上級者向け';
  filterAgeGroup?: 'adults-only' | 'all-ages' | 'ages-3-and-up' | 'middle-school-and-up' | ('adults-only' | 'all-ages' | 'ages-3-and-up' | 'middle-school-and-up')[]; // 配列形式（旧データ）にも対応
}
