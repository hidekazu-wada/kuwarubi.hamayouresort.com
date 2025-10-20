import { createClient } from 'microcms-js-sdk';

// 環境変数の取得
const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

// 環境変数のバリデーション
if (!serviceDomain || !apiKey) {
  throw new Error(
    'microCMS configuration is missing. Please check your .env file.'
  );
}

// microCMS クライアントの作成
export const client = createClient({
  serviceDomain,
  apiKey,
});
