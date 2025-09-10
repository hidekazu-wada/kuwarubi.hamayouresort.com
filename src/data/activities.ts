// アクティビティデータの型定義
export interface Activity {
  slug: string; // URL用（sup-experience等）
  title: string; // アクティビティ名
  category: string; // カテゴリ（水上体験、陸上体験等）
  description: string; // 概要
  images: {
    thumbnail: string; // 一覧用サムネイル
    hero: string; // 詳細ページメイン画像
    gallery: string[]; // ギャラリー画像配列
  };

  // 詳細ページ用追加データ
  intro: {
    title: string; // イントロセクションタイトル
    text: string; // イントロセクション本文
  };

  // ポイントセクション用データ
  point: {
    image: string; // ポイント画像パス
    titleLines: string[]; // ポイントタイトル（複数行対応）
    description: string; // ポイント説明文
  };

  // アバウトセクション用データ
  about: Array<{
    term: string; // 項目名
    description: string; // 項目説明
    note?: string; // 注記（オプション）
  }>;

  // フローセクション用データ
  flow: Array<{
    stepNumber: string; // ステップ番号やラベル（例：STEP 1, 準備など）
    title: string; // ステップタイトル
    description: string; // ステップ説明
  }>;

  // 予約セクション用データ
  reservation: Array<{
    label: string; // 予約方法ラベル（TEL、E-mail、LINE等）
    value: string; // 連絡先の値
    link: string; // リンクURL（tel:、mailto:、https:等）
    hours: string; // 受付時間
  }>;

  // バッジ表示用データ
  badges: Array<{
    type: 'reservation' | 'group'; // バッジタイプ（事前予約、団体）
    text: string; // バッジテキスト
  }>;

  // 人気アクティビティ表示フラグ
  isPopular: boolean; // 人気のアクティビティセクションに表示するかどうか

  // フィルタリング・ソート用データ
  targetAge: {
    min: number; // 最小年齢
    max?: number; // 最大年齢（制限なしの場合はundefined）
  };
  season: string[]; // 実施時期 ['春', '夏', '秋', '冬']
  capacity: {
    min: number; // 最小人数
    max: number; // 最大人数
  };
  duration: number; // 所要時間（分）
  price: {
    adult: number; // 大人料金
    child?: number; // 子供料金（設定がある場合）
  };
  weather: string[]; // 実施可能天気 ['晴れ', '曇り', '小雨']

  // 詳細ページ用データ
  highlights: string[]; // おすすめポイント
  program: {
    time: string; // 時刻
    content: string; // 内容
  }[];
  notes: string[]; // 注意事項
  bookingUrl?: string; // 予約URL
}

// アクティビティデータ
export const activities: Activity[] = [
  {
    slug: 'sup-experience',
    title: 'SUP体験',
    category: 'SUP',
    description:
      '静かな湖面でSUP（スタンドアップパドルボード）を楽しめます。初心者でも安心してご参加いただけるレクチャー付きです。',
    images: {
      thumbnail: '/images/activities/sup-thumbnail.jpg',
      hero: '/images/activities/sup-hero.jpg',
      gallery: [
        '/images/activities/sup-gallery1.jpg',
        '/images/activities/sup-gallery2.jpg',
        '/images/activities/sup-gallery3.jpg',
      ],
    },
    intro: {
      title: 'SUPで体験する湖の静寂',
      text: '静かな湖面に立ち、パドルを使って水上を進むSUP（スタンドアップパドルボード）体験。初心者の方でも安心してご参加いただけるよう、経験豊富なインストラクターが丁寧にレクチャーいたします。美しい自然に囲まれながら、心身ともにリフレッシュできる特別な時間をお過ごしください。',
    },
    point: {
      image: '/images/activities/sup-point.jpg',
      titleLines: ['湖面に立ち', '心を静める水上体験'],
      description:
        '初心者でも安心して楽しめるSUP体験。経験豊富なインストラクターによる丁寧なレクチャーで、美しい湖面での特別な時間をお過ごしいただけます。バランス感覚を養いながら、自然との一体感を味わえる贅沢なアクティビティです。',
    },
    about: [
      { term: '対象年齢', description: '12歳〜65歳' },
      { term: '実施時期', description: '春・夏・秋' },
      {
        term: '人数',
        description: '2名〜8名',
        note: '＊人数が多い場合や少ない場合などはご相談ください',
      },
      { term: '所要時間', description: '2時間' },
      { term: '料金', description: '大人4,500円、子供3,500円（税込）' },
      { term: '実施可能天気', description: '晴れ・曇り' },
      { term: '持ち物', description: '水着・タオル' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '受付・着替え',
        description: '受付を済ませ、ウェットスーツに着替えます。',
      },
      {
        stepNumber: 'STEP 2',
        title: 'セーフティレクチャー',
        description: 'SUPの基本操作と安全について説明いたします。',
      },
      {
        stepNumber: 'STEP 3',
        title: 'SUP体験',
        description: '美しい湖面でSUPをお楽しみください（90分間）。',
      },
      {
        stepNumber: 'STEP 4',
        title: '終了・着替え',
        description: '体験終了後、着替えをして解散となります。',
      },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
      {
        label: 'E-mail',
        value: 'info@hamayouresort.com',
        link: 'mailto:info@hamayouresort.com',
        hours: '受付時間　24時間',
      },
    ],
    badges: [
      { type: 'reservation', text: '事前\n予約' },
      { type: 'group', text: '団体' },
    ],
    isPopular: true,
    targetAge: {
      min: 12,
      max: 65,
    },
    season: ['春', '夏', '秋'],
    capacity: {
      min: 2,
      max: 8,
    },
    duration: 120,
    price: {
      adult: 4500,
      child: 3500,
    },
    weather: ['晴れ', '曇り'],
    highlights: [
      '初心者向けの丁寧なレクチャー',
      '美しい湖面での爽快体験',
      '写真撮影サービス付き',
    ],
    program: [
      { time: '09:00', content: '受付・着替え' },
      { time: '09:30', content: 'セーフティレクチャー' },
      { time: '10:00', content: 'SUP体験（90分）' },
      { time: '11:30', content: '終了・着替え' },
    ],
    notes: [
      '水着・タオルをご持参ください',
      '悪天候時は中止となる場合があります',
      '泳げない方でもライフジャケット着用で安心です',
    ],
    bookingUrl: 'https://example.com/booking/sup',
  },
  {
    slug: 'campfire-experience',
    title: 'キャンプファイヤー体験',
    category: 'Campfire',
    description:
      '星空の下でのキャンプファイヤー。マシュマロ焼きや歌、自然の音を楽しみながら特別な夜をお過ごしください。',
    images: {
      thumbnail: '/images/activities/campfire-thumbnail.jpg',
      hero: '/images/activities/campfire-hero.jpg',
      gallery: [
        '/images/activities/campfire-gallery1.jpg',
        '/images/activities/campfire-gallery2.jpg',
        '/images/activities/campfire-gallery3.jpg',
      ],
    },
    intro: {
      title: '満天の星空に包まれて',
      text: '夜が深まるにつれて、空に無数の星が輝き始めます。暖かな焚き火を囲みながら、マシュマロを焼いたり、自然の音に耳を傾けたり。都市では味わえない静寂と美しさに包まれた、特別な夜の時間をお楽しみください。',
    },
    point: {
      image: '/images/activities/campfire-point.jpg',
      titleLines: ['星空の下で過ごす', '特別な夜の時間'],
      description:
        '満天の星空の下でのキャンプファイヤー体験。暖かな炎を囲みながら、マシュマロ焼きやホットドリンクをお楽しみいただけます。都市では味わえない静寂な夜に、家族や友人との絆を深める特別な時間をお過ごしください。',
    },
    about: [
      { term: '対象年齢', description: '3歳〜' },
      { term: '実施時期', description: '通年' },
      { term: '人数', description: '4名〜20名' },
      { term: '所要時間', description: '1時間30分' },
      { term: '料金', description: '大人2,000円、子供1,500円（税込）' },
      { term: '実施可能天気', description: '晴れ・曇り' },
      { term: '持ち物', description: '防寒着' },
      {
        term: '注意事項',
        description: '小さなお子様は保護者同伴',
        note: '雨天中止',
      },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '集合・説明',
        description: '集合場所で体験内容と安全について説明いたします。',
      },
      {
        stepNumber: 'STEP 2',
        title: '火起こし体験',
        description: '伝統的な火起こし方法を体験していただきます。',
      },
      {
        stepNumber: 'STEP 3',
        title: 'キャンプファイヤー',
        description: '暖かな炎を囲み、マシュマロ焼きなどをお楽しみください。',
      },
      {
        stepNumber: 'STEP 4',
        title: '終了',
        description: '火の片付けをして、体験終了となります。',
      },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
      {
        label: 'E-mail',
        value: 'info@hamayouresort.com',
        link: 'mailto:info@hamayouresort.com',
        hours: '受付時間　24時間',
      },
    ],
    badges: [
      { type: 'reservation', text: '事前\n予約' },
      { type: 'group', text: '団体' },
    ],
    isPopular: true,
    targetAge: {
      min: 3,
    },
    season: ['春', '夏', '秋', '冬'],
    capacity: {
      min: 4,
      max: 20,
    },
    duration: 90,
    price: {
      adult: 2000,
      child: 1500,
    },
    weather: ['晴れ', '曇り'],
    highlights: [
      '満天の星空の下での焚き火体験',
      'マシュマロ焼きやホットドリンク付き',
      'ファミリーで楽しめるアクティビティ',
    ],
    program: [
      { time: '19:00', content: '集合・説明' },
      { time: '19:15', content: '火起こし体験' },
      { time: '19:30', content: 'キャンプファイヤー開始' },
      { time: '20:30', content: '終了' },
    ],
    notes: [
      '防寒着をご持参ください',
      '雨天中止',
      '小さなお子様は保護者同伴でお願いします',
    ],
    bookingUrl: 'https://example.com/booking/campfire',
  },
  {
    slug: 'rental-cycle',
    title: 'レンタルサイクル',
    category: 'Rental Cycle',
    description:
      'リゾート周辺の美しい自然を自転車で巡ります。お好きなコースを選んで、自由にサイクリングをお楽しみください。',
    images: {
      thumbnail: '/images/activities/cycle-thumbnail.jpg',
      hero: '/images/activities/cycle-hero.jpg',
      gallery: [
        '/images/activities/cycle-gallery1.jpg',
        '/images/activities/cycle-gallery2.jpg',
        '/images/activities/cycle-gallery3.jpg',
      ],
    },
    intro: {
      title: '風を感じながら自然を巡る',
      text: 'リゾート周辺に広がる美しい自然を、自転車でゆったりと巡ってみませんか。3つのコースからお好みに合わせてお選びいただけます。電動アシスト付き自転車もご用意しているので、体力に自信のない方でも安心してお楽しみいただけます。',
    },
    point: {
      image: '/images/activities/cycle-point.jpg',
      titleLines: ['自然を巡る', '爽快サイクリング体験'],
      description:
        '美しい自然の中を自転車で巡る爽快な体験。3つのコースから選択でき、電動アシスト付き自転車もご用意。マップとおすすめスポット案内で、リゾート周辺の魅力を存分にお楽しみいただけます。',
    },
    about: [
      { term: '対象年齢', description: '8歳〜' },
      { term: '実施時期', description: '春・夏・秋' },
      { term: '人数', description: '1名〜10名' },
      { term: '所要時間', description: '3時間' },
      { term: '料金', description: '大人1,500円（税込）' },
      { term: '実施可能天気', description: '晴れ・曇り' },
      { term: '持ち物', description: 'ヘルメット（貸出あり）' },
      {
        term: '注意事項',
        description: '交通ルールを守ってご利用ください',
        note: '雨天中止',
      },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '受付・自転車選択',
        description:
          'コースを選択し、お客様に合った自転車をお選びいただきます。',
      },
      {
        stepNumber: 'STEP 2',
        title: '安全説明・コース案内',
        description: '交通ルールとおすすめスポットについてご案内いたします。',
      },
      {
        stepNumber: 'STEP 3',
        title: 'サイクリング出発',
        description: '選択されたコースでサイクリングをお楽しみください。',
      },
      {
        stepNumber: 'STEP 4',
        title: '返却・終了',
        description: '自転車を返却し、体験終了となります。',
      },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
      {
        label: 'E-mail',
        value: 'info@hamayouresort.com',
        link: 'mailto:info@hamayouresort.com',
        hours: '受付時間　24時間',
      },
    ],
    badges: [{ type: 'reservation', text: '事前\n予約' }],
    isPopular: true,
    targetAge: {
      min: 8,
    },
    season: ['春', '夏', '秋'],
    capacity: {
      min: 1,
      max: 10,
    },
    duration: 180,
    price: {
      adult: 1500,
    },
    weather: ['晴れ', '曇り'],
    highlights: [
      '3つのコースから選択可能',
      '電動アシスト付き自転車もご用意',
      'マップとおすすめスポット案内付き',
    ],
    program: [
      { time: '09:00', content: '受付・自転車選択' },
      { time: '09:15', content: '安全説明・コース案内' },
      { time: '09:30', content: 'サイクリング出発' },
      { time: '12:30', content: '返却・終了' },
    ],
    notes: [
      'ヘルメットの着用をお願いします',
      '雨天中止',
      '交通ルールを守ってご利用ください',
    ],
    bookingUrl: 'https://example.com/booking/cycle',
  },
  {
    slug: 'forest-trail',
    title: '樹海トレイル',
    category: 'Jukai Trail',
    description:
      '神秘的な樹海を歩くトレッキング体験。ガイド付きで安全に、珍しい植物や野鳥観察を楽しめます。',
    images: {
      thumbnail: '/images/activities/trail-thumbnail.jpg',
      hero: '/images/activities/trail-hero.jpg',
      gallery: [
        '/images/activities/trail-gallery1.jpg',
        '/images/activities/trail-gallery2.jpg',
        '/images/activities/trail-gallery3.jpg',
      ],
    },
    intro: {
      title: '神秘の樹海で出会う自然の声',
      text: '古くから続く神秘的な樹海の中を、経験豊富なガイドとともに歩いてみませんか。普段は見ることのできない珍しい植物や野鳥たちとの出会いが待っています。自然の息づかいを感じながら、心も体もリフレッシュできる贅沢な時間をお過ごしください。',
    },
    point: {
      image: '/images/activities/trail-point.jpg',
      titleLines: ['樹海の不思議に触れ', '観察力と考える力を育てる'],
      description:
        '神秘的な樹海を歩くトレッキング体験。経験豊富なガイドが案内し、珍しい植物や野鳥観察を通じて自然の不思議を発見できます。観察力と考える力を育みながら、自然との深いつながりを感じられる特別な体験です。',
    },
    about: [
      { term: '対象年齢', description: '10歳〜70歳' },
      { term: '実施時期', description: '春・夏・秋' },
      { term: '人数', description: '3名〜12名' },
      { term: '所要時間', description: '2時間30分' },
      { term: '料金', description: '大人3,000円、子供2,500円（税込）' },
      { term: '実施可能天気', description: '晴れ・曇り・小雨' },
      { term: '持ち物', description: '歩きやすい靴、虫除けスプレー' },
      { term: '注意事項', description: '体力に自信のない方はご相談ください' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '導入',
        description: 'スライドで樹海の成り立ちと基礎知識を学びます。',
      },
      {
        stepNumber: 'STEP 2',
        title: 'テーマ設定',
        description: '観察のテーマの説明をします。',
      },
      {
        stepNumber: 'STEP 3',
        title: '移動',
        description: 'バスで樹海の入り口へ移動します。',
      },
      {
        stepNumber: 'STEP 4',
        title: '散策',
        description:
          'テーマに沿って観察しながら樹海を散策します（45分〜60分）。',
      },
      {
        stepNumber: 'STEP 5',
        title: 'まとめ',
        description: 'クロージング（観察力と考える力）でまとめを行います。',
      },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
      {
        label: 'E-mail',
        value: 'info@hamayouresort.com',
        link: 'mailto:info@hamayouresort.com',
        hours: '受付時間　24時間',
      },
    ],
    badges: [
      { type: 'reservation', text: '事前\n予約' },
      { type: 'group', text: '団体' },
    ],
    isPopular: true,
    targetAge: {
      min: 10,
      max: 70,
    },
    season: ['春', '夏', '秋'],
    capacity: {
      min: 3,
      max: 12,
    },
    duration: 150,
    price: {
      adult: 3000,
      child: 2500,
    },
    weather: ['晴れ', '曇り', '小雨'],
    highlights: [
      '経験豊富なガイドによる案内',
      '希少な植物・野鳥の観察',
      'フォトスポットでの記念撮影',
    ],
    program: [
      { time: '09:00', content: '集合・準備体操' },
      { time: '09:15', content: 'トレイル出発' },
      { time: '10:30', content: '中間地点で休憩' },
      { time: '11:45', content: 'ゴール・解散' },
    ],
    notes: [
      '歩きやすい靴でご参加ください',
      '虫除けスプレーをご持参ください',
      '体力に自信のない方はご相談ください',
    ],
    bookingUrl: 'https://example.com/booking/trail',
  },
];
