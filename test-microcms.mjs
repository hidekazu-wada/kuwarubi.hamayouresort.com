// microCMS API接続テスト
import { createClient } from 'microcms-js-sdk';
import * as dotenv from 'dotenv';

// 環境変数読み込み
dotenv.config();

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

console.log('=== microCMS API接続テスト ===\n');
console.log(`サービスドメイン: ${serviceDomain}`);
console.log(`APIキー: ${apiKey ? '設定済み ✅' : '未設定 ❌'}\n`);

if (!serviceDomain || !apiKey) {
  console.error('❌ 環境変数が設定されていません');
  console.error(
    'MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を .env に設定してください'
  );
  process.exit(1);
}

// microCMSクライアント作成
const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});

try {
  console.log('📡 microCMS APIに接続中...\n');

  // activities-kuwarubiエンドポイントから全データ取得
  const response = await client.get({
    endpoint: 'activities',
  });

  console.log('✅ API接続成功！\n');
  console.log(`取得件数: ${response.totalCount}件`);
  console.log(`コンテンツ数: ${response.contents.length}件\n`);

  if (response.contents.length > 0) {
    const activity = response.contents[0];
    console.log('=== 1件目のデータ ===');
    console.log(`ID: ${activity.id}`);
    console.log(`slug: ${activity.slug}`);
    console.log(`title: ${activity.title}`);
    console.log(`category: ${activity.category}`);
    console.log(`showOnTop: ${activity.showOnTop}`);
    console.log(`topPageCatchphrase: ${activity.topPageCatchphrase}`);
    console.log(`catchphraseColor: ${activity.catchphraseColor}`);
    console.log(`displayOrder: ${activity.displayOrder}`);
    console.log(`introTitle: ${activity.introTitle}`);
    console.log(`priceAdult: ${activity.priceAdult}円`);
    console.log(`isPopular: ${activity.isPopular}`);
    console.log(`gallery: ${activity.gallery?.length || 0}枚`);
    console.log(
      `pointBackgroundImage: ${activity.pointBackgroundImage ? '✅' : '❌'}`
    );

    // フィルター情報
    console.log('\n=== フィルター情報 ===');
    console.log(
      `filterDurationHours: ${activity.filterDurationHours || '未設定'}`
    );
    console.log(`filterWeather: ${activity.filterWeather || '未設定'}`);
    console.log(
      `filterSeasons: ${activity.filterSeasons?.join(', ') || '未設定'}`
    );
    console.log(`filterDifficulty: ${activity.filterDifficulty || '未設定'}`);
    console.log(`filterAgeGroup: ${activity.filterAgeGroup || '未設定'}`);

    // 繰り返しフィールド
    console.log('\n=== 繰り返しフィールド ===');
    console.log(`displayInfo: ${activity.displayInfo?.length || 0}件`);
    console.log(`flow: ${activity.flow?.length || 0}件`);
    console.log(`reservation: ${activity.reservation?.length || 0}件`);
    console.log(`badges: ${activity.badges?.length || 0}件`);

    console.log('\n✅ テスト完了！全フィールドが正常に取得できました。');
  } else {
    console.log('⚠️  データが登録されていません');
    console.log('microCMS管理画面でコンテンツを登録してください');
  }
} catch (error) {
  console.error('\n❌ API接続エラー:');
  console.error(error.message);
  console.error('\n確認事項:');
  console.error('1. microCMS管理画面でAPIが作成されているか');
  console.error('2. エンドポイント名が "activities" であるか');
  console.error('3. APIキーが正しいか');
  process.exit(1);
}
