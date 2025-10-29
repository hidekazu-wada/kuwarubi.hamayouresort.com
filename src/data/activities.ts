// アクティビティ画像（ImageMetadata方式）
// 001_青木ヶ原樹海プライベートツアー
import thumbnail_001 from '../assets/images/activities/001/thumbnail.jpg';
import gallery_01_001 from '../assets/images/activities/001/gallery/slide-01.jpg';
import gallery_02_001 from '../assets/images/activities/001/gallery/slide-02.jpg';
import gallery_03_001 from '../assets/images/activities/001/gallery/slide-03.jpg';
import gallery_04_001 from '../assets/images/activities/001/gallery/slide-04.jpg';
import gallery_05_001 from '../assets/images/activities/001/gallery/slide-05.jpg';
import point_bg_001 from '../assets/images/activities/001/point-bg.jpg';

// 002_青木ヶ原樹海早朝プライベートツアー
import thumbnail_002 from '../assets/images/activities/002/thumbnail.jpg';
import gallery_01_002 from '../assets/images/activities/002/gallery/slide-01.jpg';
import gallery_02_002 from '../assets/images/activities/002/gallery/slide-02.jpg';
import gallery_03_002 from '../assets/images/activities/002/gallery/slide-03.jpg';
import gallery_04_002 from '../assets/images/activities/002/gallery/slide-04.jpg';
import gallery_05_002 from '../assets/images/activities/002/gallery/slide-05.jpg';
import point_bg_002 from '../assets/images/activities/002/point-bg.jpg';

// campfire-experience
import campfire_thumbnail from '../assets/images/activities/campfire-experience/thumbnail.png';
import campfire_gallery_01 from '../assets/images/activities/campfire-experience/gallery/slide-01.jpg';
import campfire_gallery_02 from '../assets/images/activities/campfire-experience/gallery/slide-02.jpg';
import campfire_gallery_03 from '../assets/images/activities/campfire-experience/gallery/slide-03.jpg';
import campfire_point_bg from '../assets/images/activities/campfire-experience/point-bg.png';

// rental-cycle
import cycle_thumbnail from '../assets/images/activities/rental-cycle/thumbnail.png';
import cycle_gallery_01 from '../assets/images/activities/rental-cycle/gallery/slide-01.jpg';
import cycle_gallery_02 from '../assets/images/activities/rental-cycle/gallery/slide-02.jpg';
import cycle_gallery_03 from '../assets/images/activities/rental-cycle/gallery/slide-03.jpg';
import cycle_point_bg from '../assets/images/activities/rental-cycle/point-bg.png';

// forest-trail
import forest_thumbnail from '../assets/images/activities/forest-trail/thumbnail.png';
import forest_gallery_01 from '../assets/images/activities/forest-trail/gallery/slide-01.jpg';
import forest_gallery_02 from '../assets/images/activities/forest-trail/gallery/slide-02.jpg';
import forest_gallery_03 from '../assets/images/activities/forest-trail/gallery/slide-03.jpg';
import forest_point_bg from '../assets/images/activities/forest-trail/point-bg.png';

// yoga-meditation
import yoga_thumbnail from '../assets/images/activities/yoga-meditation/thumbnail.png';
import yoga_gallery_01 from '../assets/images/activities/yoga-meditation/gallery/slide-01.jpg';
import yoga_gallery_02 from '../assets/images/activities/yoga-meditation/gallery/slide-02.jpg';
import yoga_gallery_03 from '../assets/images/activities/yoga-meditation/gallery/slide-03.jpg';
import yoga_point_bg from '../assets/images/activities/yoga-meditation/point-bg.png';

// fishing-experience
import fishing_thumbnail from '../assets/images/activities/fishing-experience/thumbnail.png';
import fishing_gallery_01 from '../assets/images/activities/fishing-experience/gallery/slide-01.jpg';
import fishing_gallery_02 from '../assets/images/activities/fishing-experience/gallery/slide-02.jpg';
import fishing_gallery_03 from '../assets/images/activities/fishing-experience/gallery/slide-03.jpg';
import fishing_point_bg from '../assets/images/activities/fishing-experience/point-bg.png';

// stargazing
import stargazing_thumbnail from '../assets/images/activities/stargazing/thumbnail.png';
import stargazing_gallery_01 from '../assets/images/activities/stargazing/gallery/slide-01.jpg';
import stargazing_gallery_02 from '../assets/images/activities/stargazing/gallery/slide-02.jpg';
import stargazing_gallery_03 from '../assets/images/activities/stargazing/gallery/slide-03.jpg';
import stargazing_point_bg from '../assets/images/activities/stargazing/point-bg.png';

// pottery-workshop
import pottery_thumbnail from '../assets/images/activities/pottery-workshop/thumbnail.png';
import pottery_gallery_01 from '../assets/images/activities/pottery-workshop/gallery/slide-01.jpg';
import pottery_gallery_02 from '../assets/images/activities/pottery-workshop/gallery/slide-02.jpg';
import pottery_gallery_03 from '../assets/images/activities/pottery-workshop/gallery/slide-03.jpg';
import pottery_point_bg from '../assets/images/activities/pottery-workshop/point-bg.png';

// アクティビティデータの型定義
export interface Activity {
  slug: string; // URL用（sup-experience等）
  title: string; // アクティビティ名
  category: string; // カテゴリ（水上体験、陸上体験等）
  description: string; // 概要

  // 画像管理（ImageMetadata方式）
  images: {
    thumbnail: any; // 一覧・TOPページ用サムネイル（ImageMetadata）
    gallery: any[]; // 詳細ページスライダー用画像配列（ImageMetadata[]）
    pointBackground: any; // ポイントセクション背景画像（ImageMetadata）
  };

  // TOPページスライダー表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean; // TOPページに表示するか
    catchphrase: string; // キャッチコピー（例：「水の上を歩く」）
    titleColorClass?: string; // タイトルの色クラス（例：'color-blue'）
    displayOrder: number; // 表示順序（1から開始）
  };

  // 詳細ページ用追加データ
  intro: {
    title: string; // イントロセクションタイトル
    text: string; // イントロセクション本文
  };

  // ポイントセクション用データ
  point: {
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

  // 料金
  price: {
    adult: number; // 大人料金
  };
}

// アクティビティデータ
export const activities: Activity[] = [
  {
    slug: 'jukai_private_tour',
    title: '青木ヶ原樹海\nプライベートツアー',
    category: 'JUKAI',
    description:
      '富士山の麓に広がる神秘の森・青木ヶ原樹海を探検。森の中を歩き、地下の洞窟をのぞき、山の上から見下ろす。一度で3つの視点から樹海を満喫できる特別なツアーです。',
    images: {
      thumbnail: thumbnail_001,
      gallery: [
        gallery_01_001,
        gallery_02_001,
        gallery_03_001,
        gallery_04_001,
        gallery_05_001,
      ],
      pointBackground: point_bg_001,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '命の森に触れる',
      displayOrder: 1,
    },
    intro: {
      title: '歩くたびに出会う神秘',
      text: '樹海は「怖い森」というイメージを持たれがちですが、実は富士山の噴火で流れた溶岩の上にできた特別な森です。土や水が少ない厳しい環境の中で、植物や動物たちは独自の方法で生きています。歩いて、のぞいて、見下ろして──樹海の神秘を多角的に体感できるツアーです。',
    },
    point: {
      titleLines: ['樹海を歩き', '生物の戦略を学ぶ'],
      description:
        '1組限定のプライベートツアーで、周囲を気にせず自分たちのペースで満喫できます。午前は爽やかな空気の中で、午後は夕日に染まる絶景を楽しめます。富士山の溶岩洞窟や樹海の展望ポイントなど見どころ満載。歩行は平坦で短時間、体力に自信のない方も安心してご参加いただけます。',
    },
    about: [
      {
        term: '対象年齢',
        description: '3歳以上',
        note: 'お子様だけでのご参加はできません。',
      },
      { term: '実施時期', description: '通年' },
      {
        term: '人数',
        description: '1-4名',
      },
      { term: '所要時間', description: '2時間以上' },
      { term: '料金', description: '12,000円～' },
      { term: '実施可能天気', description: '小雨決行' },
      { term: 'ご予約', description: '事前予約' },
      { term: '持ち物', description: '動きやすい服装・靴' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '受付',
        description:
          'キャンプビレッジGNOME内のアクティビティ管理棟（赤いトレーラーハウス）にて受付',
      },
      {
        stepNumber: 'STEP 2',
        title: '移動',
        description: '送迎車にて樹海入り口へ移動。',
      },
      {
        stepNumber: 'STEP 3',
        title: '体験',
        description: '樹海を歩き、各スポットを巡ります。',
      },
      {
        stepNumber: 'STEP 4',
        title: '終了',
        description: '送迎者にてキャンプビレッジGNOMEまで戻って終了です',
      },
      {
        stepNumber: 'ATTN.',
        title: 'ご注意事項',
        description:
          '・樹海の中は平坦な道が多いですが、下は溶岩で木の根などがでています。\n・絶景スポットへは10分ほどの上りがあります。\n・動きやすい服装、歩きやすい靴でお越しください。\n・3才以上からご参加いただけます。\n・小学生以上のお子様から人数に含まれます。\n・安全のため、必ずガイドの指示にしたがってください。\n・天候によっては中止させていただく場合がございます。',
      },
    ],
    reservation: [
      {
        label: 'Web',
        value: '予約サイトへ',
        link: 'https://hamayouresort.rezio.shop/ja-JP/product/jukai01',
        hours: '受付時間　24時間',
      },
      {
        label: 'お問い合わせ',
        value: 'activity@hamayouresort.com',
        link: 'mailto:activity@hamayouresort.com',
        hours: '北山宛にメールください',
      },
    ],
    badges: [
      { type: 'reservation', text: '事前\n予約' },
      { type: 'group', text: '個人' },
    ],
    isPopular: true,
    price: {
      adult: 12000,
    },
  },
  {
    slug: 'jukai_private_tour_early',
    title: '青木ヶ原樹海\n早朝プライベートツアー',
    category: 'JUKAI',
    description:
      '樹海は富士山の噴火で流れてきた溶岩の上にできた森です。樹海の中を歩き、樹海の地下をのぞき、山に登って上から樹海を見下ろします。\n富士山の噴火活動でできた広大な樹海を様々な角度から満喫するツアーです。',
    images: {
      thumbnail: thumbnail_002,
      gallery: [
        gallery_01_002,
        gallery_02_002,
        gallery_03_002,
        gallery_04_002,
        gallery_05_002,
      ],
      pointBackground: point_bg_002,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '命の森の朝の顔',
      displayOrder: 2,
    },
    intro: {
      title: '満天の星空に包まれて',
      text: '夜が深まるにつれて、空に無数の星が輝き始めます。暖かな焚き火を囲みながら、マシュマロを焼いたり、自然の音に耳を傾けたり。都市では味わえない静寂と美しさに包まれた、特別な夜の時間をお楽しみください。',
    },
    point: {
      titleLines: ['星空の下で過ごす', '特別な夜の時間'],
      description:
        '満天の星空の下でのキャンプファイヤー体験。暖かな炎を囲みながら、マシュマロ焼きやホットドリンクをお楽しみいただけます。都市では味わえない静寂な夜に、家族や友人との絆を深める特別な時間をお過ごしください。',
    },
    about: [
      { term: '対象年齢', description: '未就学児以上' },
      { term: '実施時期', description: '通年' },
      { term: '人数', description: '20名以上' },
      { term: '所要時間', description: '1時間以上' },
      { term: '料金', description: '1000円から3000円' },
      { term: '実施可能天気', description: '晴れ' },
      { term: 'ご予約', description: '事前予約' },
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
      {
        stepNumber: '注意事項',
        title: '注意事項',
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
    isPopular: false,
    price: {
      adult: 2000,
    },
  },
  {
    slug: 'rental-cycle',
    title: 'レンタルサイクル',
    category: 'Rental Cycle',
    description:
      'リゾート周辺の美しい自然を自転車で巡ります。お好きなコースを選んで、自由にサイクリングをお楽しみください。',
    images: {
      thumbnail: cycle_thumbnail,
      gallery: [cycle_gallery_01, cycle_gallery_02, cycle_gallery_03],
      pointBackground: cycle_point_bg,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '風を感じる',
      titleColorClass: 'color-blue',
      displayOrder: 3,
    },
    intro: {
      title: '風を感じながら自然を巡る',
      text: 'リゾート周辺に広がる美しい自然を、自転車でゆったりと巡ってみませんか。3つのコースからお好みに合わせてお選びいただけます。電動アシスト付き自転車もご用意しているので、体力に自信のない方でも安心してお楽しみいただけます。',
    },
    point: {
      titleLines: ['自然を巡る', '爽快サイクリング体験'],
      description:
        '美しい自然の中を自転車で巡る爽快な体験。3つのコースから選択でき、電動アシスト付き自転車もご用意。マップとおすすめスポット案内で、リゾート周辺の魅力を存分にお楽しみいただけます。',
    },
    about: [
      { term: '対象年齢', description: '小学生以上' },
      { term: '実施時期', description: '春' },
      { term: '人数', description: '10名未満' },
      { term: '所要時間', description: '2時間以上' },
      { term: '料金', description: '1000円から3000円' },
      { term: '実施可能天気', description: '晴れ' },
      { term: 'ご予約', description: '当日予約' },
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
    price: {
      adult: 1500,
    },
  },
  {
    slug: 'forest-trail',
    title: '樹海トレイル',
    category: 'Jukai Trail',
    description:
      '神秘的な樹海を歩くトレッキング体験。ガイド付きで安全に、珍しい植物や野鳥観察を楽しめます。',
    images: {
      thumbnail: forest_thumbnail,
      gallery: [forest_gallery_01, forest_gallery_02, forest_gallery_03],
      pointBackground: forest_point_bg,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '森に触れる',
      displayOrder: 4,
    },
    intro: {
      title: '神秘の樹海で出会う自然の声',
      text: '古くから続く神秘的な樹海の中を、経験豊富なガイドとともに歩いてみませんか。普段は見ることのできない珍しい植物や野鳥たちとの出会いが待っています。自然の息づかいを感じながら、心も体もリフレッシュできる贅沢な時間をお過ごしください。',
    },
    point: {
      titleLines: ['樹海の不思議に触れ', '観察力と考える力を育てる'],
      description:
        '神秘的な樹海を歩くトレッキング体験。経験豊富なガイドが案内し、珍しい植物や野鳥観察を通じて自然の不思議を発見できます。観察力と考える力を育みながら、自然との深いつながりを感じられる特別な体験です。',
    },
    about: [
      { term: '対象年齢', description: '小学生以上' },
      { term: '実施時期', description: '秋' },
      { term: '人数', description: '10名未満' },
      { term: '所要時間', description: '2時間以上' },
      { term: '料金', description: '1000円から3000円' },
      { term: '実施可能天気', description: '全天候' },
      { term: 'ご予約', description: '事前予約' },
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
    price: {
      adult: 3000,
    },
  },
  // === フィルタリング機能テスト用デモデータ ===
  {
    slug: 'yoga-meditation',
    title: 'ヨガ・瞑想体験',
    category: 'Wellness',
    description:
      '朝の静寂な湖畔でヨガと瞑想を体験。心身のバランスを整える贅沢な時間をお過ごしください。',
    images: {
      thumbnail: yoga_thumbnail,
      gallery: [yoga_gallery_01, yoga_gallery_02, yoga_gallery_03],
      pointBackground: yoga_point_bg,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '心を整える',
      displayOrder: 5,
    },
    intro: {
      title: '心と身体の調和を求めて',
      text: '美しい湖畔の朝、静寂な空間でヨガと瞑想を通じて内なる平和を見つけましょう。経験豊富なインストラクターが初心者の方にも丁寧に指導いたします。',
    },
    point: {
      titleLines: ['朝の湖畔で', '心身の調和体験'],
      description:
        '朝の清々しい空気の中で行うヨガ・瞑想体験。初心者でも安心してご参加いただけます。',
    },
    about: [
      { term: '対象年齢', description: '高校生以上' },
      { term: '実施時期', description: '夏' },
      { term: '人数', description: '10名未満' },
      { term: '所要時間', description: '1時間未満' },
      { term: '料金', description: '1000円から3000円' },
      { term: '実施可能天気', description: '晴れ' },
      { term: 'ご予約', description: '当日予約' },
      { term: '持ち物', description: '動きやすい服装、タオル' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '集合・準備',
        description: '受付と準備体操を行います。',
      },
      {
        stepNumber: 'STEP 2',
        title: 'ヨガ',
        description: '湖畔でのヨガ体験（40分）。',
      },
      {
        stepNumber: 'STEP 3',
        title: '瞑想',
        description: '瞑想とクールダウン（15分）。',
      },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
    ],
    badges: [], // 予約不要
    isPopular: false,
    price: { adult: 2800 },
  },
  {
    slug: 'fishing-experience',
    title: '釣り体験',
    category: 'Fishing',
    description:
      '湖での釣り体験。初心者でも楽しめる手軽な釣りから、本格的なフライフィッシングまで対応。',
    images: {
      thumbnail: fishing_thumbnail,
      gallery: [fishing_gallery_01, fishing_gallery_02, fishing_gallery_03],
      pointBackground: fishing_point_bg,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '静寂と向き合う',
      displayOrder: 6,
    },
    intro: {
      title: '湖での静寂な釣り体験',
      text: '美しい湖で釣りを楽しみませんか。初心者から上級者まで楽しめる釣り体験をご用意しています。',
    },
    point: {
      titleLines: ['静寂な湖で', '心落ち着く釣り時間'],
      description: '初心者にも優しい指導で、釣りの醍醐味を味わえます。',
    },
    about: [
      { term: '対象年齢', description: '小学生以上' },
      { term: '実施時期', description: '通年' },
      { term: '人数', description: '10名未満' },
      { term: '所要時間', description: '2時間以上' },
      { term: '料金', description: '3000円から5000円' },
      { term: '実施可能天気', description: '雨' },
      { term: 'ご予約', description: '事前予約' },
      { term: '持ち物', description: '汚れても良い服装' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '受付・説明',
        description: '釣り道具の説明と基本技術指導。',
      },
      {
        stepNumber: 'STEP 2',
        title: '釣り体験',
        description: '湖での釣り体験（2.5時間）。',
      },
      { stepNumber: 'STEP 3', title: '終了', description: '釣果確認と終了。' },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
    ],
    badges: [{ type: 'reservation', text: '事前\n予約' }],
    isPopular: true,
    price: { adult: 5500 },
  },
  {
    slug: 'stargazing',
    title: '星空観察',
    category: 'Astronomy',
    description:
      '都市部では見ることのできない満天の星空を観察。天体望遠鏡を使った本格的な星空観察体験。',
    images: {
      thumbnail: stargazing_thumbnail,
      gallery: [
        stargazing_gallery_01,
        stargazing_gallery_02,
        stargazing_gallery_03,
      ],
      pointBackground: stargazing_point_bg,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '星を見上げる',
      titleColorClass: 'color-blue',
      displayOrder: 7,
    },
    intro: {
      title: '満天の星空との出会い',
      text: '光害のない環境で、本物の星空をご覧ください。天体望遠鏡を使った観察で、宇宙の神秘に触れる体験です。',
    },
    point: {
      titleLines: ['都市では見えない', '本物の星空体験'],
      description: '天体望遠鏡を使った本格的な星空観察をお楽しみいただけます。',
    },
    about: [
      { term: '対象年齢', description: '大人以上' },
      { term: '実施時期', description: '通年' },
      { term: '人数', description: '10名以上' },
      { term: '所要時間', description: '1時間以上' },
      { term: '料金', description: '1000円から3000円' },
      { term: '実施可能天気', description: '晴れ' },
      { term: 'ご予約', description: '事前予約' },
      { term: '持ち物', description: '防寒着' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '集合・説明',
        description: '今夜見える星座の説明。',
      },
      {
        stepNumber: 'STEP 2',
        title: '観察',
        description: '天体望遠鏡での星空観察。',
      },
      { stepNumber: 'STEP 3', title: '終了', description: '質疑応答と終了。' },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
    ],
    badges: [
      { type: 'reservation', text: '事前\n予約' },
      { type: 'group', text: '団体' },
    ],
    isPopular: false,
    price: { adult: 3200 },
  },
  {
    slug: 'pottery-workshop',
    title: '陶芸体験',
    category: 'Crafts',
    description:
      '地元の粘土を使った陶芸体験。初心者でも楽しく作品作りができます。雨の日でも安心の屋内アクティビティ。',
    images: {
      thumbnail: pottery_thumbnail,
      gallery: [pottery_gallery_01, pottery_gallery_02, pottery_gallery_03],
      pointBackground: pottery_point_bg,
    },
    topPageDisplay: {
      showOnTop: true,
      catchphrase: '土と触れ合う',
      displayOrder: 8,
    },
    intro: {
      title: '土に触れる創作体験',
      text: '地元の粘土を使った陶芸体験で、オリジナルの作品を作りませんか。天候に関係なく楽しめる屋内アクティビティです。',
    },
    point: {
      titleLines: ['手作りの', '世界に一つの作品'],
      description: '初心者でも安心の指導で、素敵な作品を作ることができます。',
    },
    about: [
      { term: '対象年齢', description: '未就学児以上' },
      { term: '実施時期', description: '通年' },
      { term: '人数', description: '10名未満' },
      { term: '所要時間', description: '2時間以上' },
      { term: '料金', description: '3000円から5000円' },
      { term: '実施可能天気', description: '全天候' },
      { term: 'ご予約', description: '事前予約' },
      { term: '持ち物', description: 'エプロン（貸出可）' },
    ],
    flow: [
      {
        stepNumber: 'STEP 1',
        title: '準備',
        description: 'エプロン装着と道具説明。',
      },
      {
        stepNumber: 'STEP 2',
        title: '制作',
        description: '陶芸作品制作（1.5時間）。',
      },
      {
        stepNumber: 'STEP 3',
        title: '仕上げ',
        description: '作品仕上げと乾燥。',
      },
    ],
    reservation: [
      {
        label: 'TEL',
        value: '0555-82-2922',
        link: 'tel:0555822922',
        hours: '受付時間　10:00 〜 17:00',
      },
    ],
    badges: [{ type: 'reservation', text: '事前\n予約' }],
    isPopular: true,
    price: { adult: 4200 },
  },
];

// ===== ヘルパー関数 =====

/**
 * TOPページに表示するアクティビティを取得（表示順序でソート）
 * @returns TOPページ表示用のアクティビティ配列
 */
export function getTopPageActivities(): Activity[] {
  return activities
    .filter((activity) => activity.topPageDisplay?.showOnTop)
    .sort(
      (a, b) =>
        (a.topPageDisplay?.displayOrder || 0) -
        (b.topPageDisplay?.displayOrder || 0)
    );
}
