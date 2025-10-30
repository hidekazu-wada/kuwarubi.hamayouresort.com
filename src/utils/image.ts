/**
 * microCMS画像最適化ヘルパー関数
 *
 * microCMSの画像URLにクエリパラメータを追加して最適化します
 */

/**
 * 画像最適化オプション
 */
export interface ImageOptimizationOptions {
  width?: number;
  format?: 'webp' | 'jpg' | 'png';
  quality?: number; // 1-100
  fit?: 'crop' | 'contain' | 'cover';
}

/**
 * microCMSの画像URLを最適化
 *
 * @param url microCMSから取得した画像URL
 * @param options 最適化オプション
 * @returns 最適化された画像URL
 *
 * @example
 * const optimizedUrl = optimizeMicroCMSImage(
 *   'https://images.microcms-assets.io/assets/xxx/yyy.jpg',
 *   { width: 1050, format: 'webp', quality: 80 }
 * );
 */
export function optimizeMicroCMSImage(
  url: string,
  options: ImageOptimizationOptions = {},
): string {
  const params = new URLSearchParams();

  if (options.width) params.set('w', options.width.toString());
  if (options.format) params.set('fm', options.format);
  if (options.quality) params.set('q', options.quality.toString());
  if (options.fit) params.set('fit', options.fit);

  return `${url}?${params.toString()}`;
}

/**
 * レスポンシブ画像のsrcset生成
 *
 * @param url microCMSから取得した画像URL
 * @param widths 生成する幅の配列（例: [640, 1024, 1920]）
 * @param format 画像フォーマット（デフォルト: webp）
 * @returns srcset文字列
 *
 * @example
 * const srcset = generateSrcSet(
 *   'https://images.microcms-assets.io/assets/xxx/yyy.jpg',
 *   [580, 900, 1050]
 * );
 * // 結果: "https://...?w=580&fm=webp 580w, https://...?w=900&fm=webp 900w, ..."
 */
export function generateSrcSet(
  url: string,
  widths: number[],
  format: 'webp' | 'jpg' | 'png' = 'webp',
): string {
  return widths
    .map((width) => {
      const optimizedUrl = optimizeMicroCMSImage(url, { width, format });
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
}

/**
 * サムネイル画像URL生成（一覧ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化されたサムネイルURL
 */
export function getThumbnailUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 580,
    format: 'webp',
    quality: 80,
  });
}

/**
 * サムネイル画像srcset生成（一覧ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns srcset文字列
 */
export function getThumbnailSrcSet(url: string): string {
  return generateSrcSet(url, [580, 900, 1050]);
}

/**
 * ギャラリー画像URL生成（詳細ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化されたギャラリー画像URL
 */
export function getGalleryUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 1050,
    format: 'webp',
    quality: 85,
  });
}

/**
 * ギャラリー画像srcset生成（詳細ページ用）
 *
 * @param url microCMSから取得した画像URL
 * @returns srcset文字列
 */
export function getGallerySrcSet(url: string): string {
  return generateSrcSet(url, [580, 900, 1050]);
}

/**
 * 背景画像URL生成（詳細ページポイントセクション用）
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化された背景画像URL
 */
export function getPointBackgroundUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 1920,
    format: 'webp',
    quality: 85,
  });
}

/**
 * TOPページスライダー画像URL生成
 *
 * @param url microCMSから取得した画像URL
 * @returns 最適化されたスライダー画像URL
 */
export function getTopSlideUrl(url: string): string {
  return optimizeMicroCMSImage(url, {
    width: 800,
    format: 'webp',
    quality: 80,
  });
}
