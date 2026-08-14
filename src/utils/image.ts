/**
 * 画像まわりのヘルパー関数
 *
 * もともとは microCMS の画像CDN（?w=&fm=webp&q=）にクエリを組み立てる関数群だったが、
 * 画像をサイト内管理に戻したので、Astro のビルド時最適化（getImage）を使う形に置き換えた。
 * 呼び出し側が受け取る形（url / srcSet / width / height）は変えていない。
 */

import { getImage } from 'astro:assets';
import type { GetImageResult, ImageMetadata } from 'astro';

/**
 * getImage() の結果から、srcset の中で最大幅の URL を返す。
 *
 * `getImage({ src, widths: [...] })` の `.src` は **リサイズ前の原寸** を指す。
 * これを `<img src>` にそのまま置くと、srcset を解釈しないケースや
 * <source> がどれもマッチしないケースで原寸が配信されてしまう。
 * フォールバックには srcset の最大候補を使う。
 *
 * @example
 * <img src={largestSrc(hero)} srcset={hero.srcSet.attribute} sizes="..." />
 */
export function largestSrc(image: GetImageResult): string {
  return image.srcSet.values.at(-1)?.url ?? image.src;
}

/** ページ側が受け取る、最適化済み画像の形 */
export interface OptimizedImage {
  url: string; // <img src> 用（srcset の最大候補）
  srcSet: string; // <img srcset> 用
  width: number; // 原寸。遅延読み込み時の領域確保に使う
  height: number;
}

/**
 * 画像を WebP に変換し、指定した幅の srcset を作る。
 *
 * @param src   インポートした画像（ImageMetadata）
 * @param widths 生成する幅の配列。表示幅にあわせて指定する
 *
 * @example
 * const thumb = await prepareImage(activity.gallery[0], [460, 480, 500]);
 * <img src={thumb.url} srcset={thumb.srcSet} sizes="..." width={thumb.width} height={thumb.height} />
 */
export async function prepareImage(
  src: ImageMetadata,
  widths: number[]
): Promise<OptimizedImage> {
  const result = await getImage({ src, format: 'webp', widths });
  return {
    url: largestSrc(result),
    srcSet: result.srcSet.attribute,
    width: result.attributes.width,
    height: result.attributes.height,
  };
}

/** サムネイル（一覧・カード用） */
export function prepareThumbnail(src: ImageMetadata): Promise<OptimizedImage> {
  return prepareImage(src, [460, 480, 500]);
}

/** ギャラリー（詳細ページ用） */
export function prepareGalleryImage(src: ImageMetadata): Promise<OptimizedImage> {
  return prepareImage(src, [580, 900, 1050]);
}

/** ポイントセクションの背景（詳細ページ用） */
export function preparePointBackground(src: ImageMetadata): Promise<OptimizedImage> {
  return prepareImage(src, [720, 1080, 2000]);
}

/** TOPページのスライダー画像 */
export function prepareTopSlide(src: ImageMetadata): Promise<OptimizedImage> {
  return prepareImage(src, [500, 800]);
}
