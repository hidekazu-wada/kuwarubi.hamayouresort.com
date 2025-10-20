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
