// アクティビティデータの型定義
export interface Activity {
  slug: string;                    // URL用（sup-experience等）
  title: string;                   // アクティビティ名
  category: string;                // カテゴリ（水上体験、陸上体験等）
  description: string;             // 概要
  images: {
    thumbnail: string;             // 一覧用サムネイル
    hero: string;                  // 詳細ページメイン画像
    gallery: string[];             // ギャラリー画像配列
  };
  
  // フィルタリング・ソート用データ
  targetAge: {
    min: number;                   // 最小年齢
    max?: number;                  // 最大年齢（制限なしの場合はundefined）
  };
  season: string[];                // 実施時期 ['春', '夏', '秋', '冬']
  capacity: {
    min: number;                   // 最小人数
    max: number;                   // 最大人数
  };
  duration: number;                // 所要時間（分）
  price: {
    adult: number;                 // 大人料金
    child?: number;                // 子供料金（設定がある場合）
  };
  weather: string[];               // 実施可能天気 ['晴れ', '曇り', '小雨']
  
  // 詳細ページ用データ
  highlights: string[];            // おすすめポイント
  program: {
    time: string;                  // 時刻
    content: string;               // 内容
  }[];
  notes: string[];                 // 注意事項
  bookingUrl?: string;             // 予約URL
}

// アクティビティデータ
export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    title: 'SUP体験',
    category: '水上体験',
    description: '静かな湖面でSUP（スタンドアップパドルボード）を楽しめます。初心者でも安心してご参加いただけるレクチャー付きです。',
    images: {
      thumbnail: '/images/activities/sup-thumbnail.jpg',
      hero: '/images/activities/sup-hero.jpg',
      gallery: [
        '/images/activities/sup-gallery1.jpg',
        '/images/activities/sup-gallery2.jpg',
        '/images/activities/sup-gallery3.jpg'
      ]
    },
    targetAge: {
      min: 12,
      max: 65
    },
    season: ['春', '夏', '秋'],
    capacity: {
      min: 2,
      max: 8
    },
    duration: 120,
    price: {
      adult: 4500,
      child: 3500
    },
    weather: ['晴れ', '曇り'],
    highlights: [
      '初心者向けの丁寧なレクチャー',
      '美しい湖面での爽快体験',
      '写真撮影サービス付き'
    ],
    program: [
      { time: '09:00', content: '受付・着替え' },
      { time: '09:30', content: 'セーフティレクチャー' },
      { time: '10:00', content: 'SUP体験（90分）' },
      { time: '11:30', content: '終了・着替え' }
    ],
    notes: [
      '水着・タオルをご持参ください',
      '悪天候時は中止となる場合があります',
      '泳げない方でもライフジャケット着用で安心です'
    ],
    bookingUrl: 'https://example.com/booking/sup'
  },
  {
    slug: 'campfire-experience',
    title: 'キャンプファイヤー体験',
    category: '自然体験',
    description: '星空の下でのキャンプファイヤー。マシュマロ焼きや歌、自然の音を楽しみながら特別な夜をお過ごしください。',
    images: {
      thumbnail: '/images/activities/campfire-thumbnail.jpg',
      hero: '/images/activities/campfire-hero.jpg',
      gallery: [
        '/images/activities/campfire-gallery1.jpg',
        '/images/activities/campfire-gallery2.jpg',
        '/images/activities/campfire-gallery3.jpg'
      ]
    },
    targetAge: {
      min: 3
    },
    season: ['春', '夏', '秋', '冬'],
    capacity: {
      min: 4,
      max: 20
    },
    duration: 90,
    price: {
      adult: 2000,
      child: 1500
    },
    weather: ['晴れ', '曇り'],
    highlights: [
      '満天の星空の下での焚き火体験',
      'マシュマロ焼きやホットドリンク付き',
      'ファミリーで楽しめるアクティビティ'
    ],
    program: [
      { time: '19:00', content: '集合・説明' },
      { time: '19:15', content: '火起こし体験' },
      { time: '19:30', content: 'キャンプファイヤー開始' },
      { time: '20:30', content: '終了' }
    ],
    notes: [
      '防寒着をご持参ください',
      '雨天中止',
      '小さなお子様は保護者同伴でお願いします'
    ],
    bookingUrl: 'https://example.com/booking/campfire'
  },
  {
    slug: 'rental-cycle',
    title: 'レンタルサイクル',
    category: '陸上体験',
    description: 'リゾート周辺の美しい自然を自転車で巡ります。お好きなコースを選んで、自由にサイクリングをお楽しみください。',
    images: {
      thumbnail: '/images/activities/cycle-thumbnail.jpg',
      hero: '/images/activities/cycle-hero.jpg',
      gallery: [
        '/images/activities/cycle-gallery1.jpg',
        '/images/activities/cycle-gallery2.jpg',
        '/images/activities/cycle-gallery3.jpg'
      ]
    },
    targetAge: {
      min: 8
    },
    season: ['春', '夏', '秋'],
    capacity: {
      min: 1,
      max: 10
    },
    duration: 180,
    price: {
      adult: 1500
    },
    weather: ['晴れ', '曇り'],
    highlights: [
      '3つのコースから選択可能',
      '電動アシスト付き自転車もご用意',
      'マップとおすすめスポット案内付き'
    ],
    program: [
      { time: '09:00', content: '受付・自転車選択' },
      { time: '09:15', content: '安全説明・コース案内' },
      { time: '09:30', content: 'サイクリング出発' },
      { time: '12:30', content: '返却・終了' }
    ],
    notes: [
      'ヘルメットの着用をお願いします',
      '雨天中止',
      '交通ルールを守ってご利用ください'
    ],
    bookingUrl: 'https://example.com/booking/cycle'
  },
  {
    slug: 'forest-trail',
    title: '樹海トレイル',
    category: '自然体験',
    description: '神秘的な樹海を歩くトレッキング体験。ガイド付きで安全に、珍しい植物や野鳥観察を楽しめます。',
    images: {
      thumbnail: '/images/activities/trail-thumbnail.jpg',
      hero: '/images/activities/trail-hero.jpg',
      gallery: [
        '/images/activities/trail-gallery1.jpg',
        '/images/activities/trail-gallery2.jpg',
        '/images/activities/trail-gallery3.jpg'
      ]
    },
    targetAge: {
      min: 10,
      max: 70
    },
    season: ['春', '夏', '秋'],
    capacity: {
      min: 3,
      max: 12
    },
    duration: 150,
    price: {
      adult: 3000,
      child: 2500
    },
    weather: ['晴れ', '曇り', '小雨'],
    highlights: [
      '経験豊富なガイドによる案内',
      '希少な植物・野鳥の観察',
      'フォトスポットでの記念撮影'
    ],
    program: [
      { time: '09:00', content: '集合・準備体操' },
      { time: '09:15', content: 'トレイル出発' },
      { time: '10:30', content: '中間地点で休憩' },
      { time: '11:45', content: 'ゴール・解散' }
    ],
    notes: [
      '歩きやすい靴でご参加ください',
      '虫除けスプレーをご持参ください',
      '体力に自信のない方はご相談ください'
    ],
    bookingUrl: 'https://example.com/booking/trail'
  }
];