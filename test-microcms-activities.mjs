// microCMS activities API接続テスト
// 既存のinformation APIと同じ環境変数を使用
import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

console.log('=== microCMS activities API接続テスト ===\n');
console.log(`サービスドメイン: ${serviceDomain}`);
console.log(`APIキー: ${apiKey ? '設定済み ✅' : '未設定 ❌'}\n`);

if (!serviceDomain || !apiKey) {
  console.error('❌ 環境変数が設定されていません');
  console.error('.env に以下が設定されているか確認してください:');
  console.error('  MICROCMS_SERVICE_DOMAIN=hamayou-resort');
  console.error('  MICROCMS_API_KEY=あなたのAPIキー');
  process.exit(1);
}

// microCMSクライアント作成（information APIと同じ設定）
const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});

console.log('📡 activities APIに接続中...\n');

try {
  // activities エンドポイントから全データ取得
  const response = await client.get({
    endpoint: 'activities',  // ← information の代わりに activities
  });

  console.log('✅ API接続成功！\n');
  console.log(`取得件数: ${response.totalCount}件`);
  console.log(`コンテンツ数: ${response.contents.length}件\n`);

  if (response.contents.length > 0) {
    const activity = response.contents[0];
    console.log('=== 登録されたアクティビティ ===');
    console.log(`ID: ${activity.id}`);
    console.log(`slug: ${activity.slug}`);
    console.log(`title: ${activity.title}`);
    console.log(`category: ${activity.category}`);
    console.log(`priceAdult: ${activity.priceAdult}円`);
    console.log(`isPopular: ${activity.isPopular}`);

    console.log('\n=== TOPページ表示設定 ===');
    console.log(`showOnTop: ${activity.showOnTop}`);
    console.log(`topPageCatchphrase: ${activity.topPageCatchphrase}`);
    console.log(`catchphraseColor: ${activity.catchphraseColor}`);
    console.log(`displayOrder: ${activity.displayOrder}`);

    console.log('\n=== 画像 ===');
    console.log(`gallery: ${activity.gallery?.length || 0}枚`);
    if (activity.gallery?.length > 0) {
      console.log(`  1枚目URL: ${activity.gallery[0].url.substring(0, 60)}...`);
    }
    console.log(`pointBackgroundImage: ${activity.pointBackgroundImage ? '✅ 設定済み' : '❌ 未設定'}`);

    console.log('\n=== 詳細コンテンツ ===');
    console.log(`introTitle: ${activity.introTitle}`);
    console.log(`introText: ${activity.introText?.substring(0, 50)}...`);
    console.log(`pointTitleLine1: ${activity.pointTitleLine1}`);
    console.log(`pointTitleLine2: ${activity.pointTitleLine2 || '（なし）'}`);

    console.log('\n=== フィルター情報 ===');
    console.log(`filterDurationHours: ${activity.filterDurationHours || '未設定'}時間`);
    console.log(`filterWeather: ${activity.filterWeather || '未設定'}`);
    console.log(`filterSeasons: ${activity.filterSeasons?.join(', ') || '未設定'}`);
    console.log(`filterDifficulty: ${activity.filterDifficulty || '未設定'}`);
    console.log(`filterAgeGroup: ${activity.filterAgeGroup || '未設定'}`);

    console.log('\n=== 繰り返しフィールド ===');
    console.log(`displayInfo: ${activity.displayInfo?.length || 0}件`);
    console.log(`flow: ${activity.flow?.length || 0}件`);
    console.log(`reservation: ${activity.reservation?.length || 0}件`);
    console.log(`badges: ${activity.badges?.length || 0}件`);

    console.log('\n✅ テスト完了！全25フィールドが正常に取得できました。');
    console.log('\n次のステップ: Phase 4 コード移行に進めます 🚀');
  } else {
    console.log('⚠️  データが登録されていません');
    console.log('microCMS管理画面で「樹海のプライベートツアー」を登録してください');
  }

} catch (error) {
  console.error('\n❌ API接続エラー:');
  console.error(error.message);
  console.error('\n確認事項:');
  console.error('1. microCMS管理画面で「activities-kuwarubi」APIが作成されているか');
  console.error('2. エンドポイント名が "activities" であるか');
  console.error('3. .env の MICROCMS_API_KEY が正しいか');
  console.error('4. 「樹海のプライベートツアー」が「公開」状態になっているか');
  process.exit(1);
}
