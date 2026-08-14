// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // canonical / og:url / sitemap の生成に必要。
  // 本番ドメインが変わる場合はここを変更する。
  site: 'https://kuwarubi.hamayouresort.com',
  integrations: [
    sitemap({
      // 404 は検索対象にしない
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
