// スケジュールデータの型定義とデータ管理
// スタッフお勧めの過ごし方プラン管理システム

// ============================================================
// 型定義
// ============================================================

// スケジュールアイテムの型定義
export interface ScheduleItem {
  time: string; // 時間（例: "15:00"）
  thumbnailTitle: string; // サムネイル用タイトル
  detailTitle: string; // 詳細用タイトル
  description: string; // 説明文
  image: {
    src: any; // 実際の画像インポート
    alt: string; // 画像の代替テキスト
  };
  link?: {
    // オプショナルなリンク情報
    url: string; // リンク先URL
    text: string; // リンクテキスト
  };
}

// 1日のスケジュールデータの型定義
export interface DaySchedule {
  dayLabel: string; // 日付ラベル（例: "Day 1", "Day 2"）
  dayId: string; // ID（例: "day1", "day2"）
  planId: string; // プランID（例: "family-nature", "couples"）
  items: ScheduleItem[]; // スケジュールアイテムの配列
}

// Hero用のデータ型定義
export interface HeroContent {
  subtitleHighlight: string; // サブタイトルハイライト（例: "子供と一緒に"）
  subtitleText: string; // サブタイトルテキスト（例: "自然に触れたい方"）
  mainTitle: string[]; // メインタイトル（配列で1行ずつ管理）
  description: string; // 詳細説明文
  heroImage: {
    src: any; // 実際の画像インポート
    alt: string; // 画像の代替テキスト
  };
}

// 過ごし方プラン全体の型定義
export interface StayPlan {
  id: string; // 識別子（例: "family-nature", "couples"）
  slug: string; // URLパス用（例: "family-nature", "couples"）
  title: string; // 表示タイトル（例: "家族で自然を満喫", "カップル向けプラン"）
  description: string; // 説明文
  thumbnail: string; // サムネイル画像のalt
  hero: HeroContent; // Hero用のコンテンツ
  days: DaySchedule[]; // 各日のスケジュール
  // TOPページ表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean; // TOPページに表示するか
    titleLine1: string; // タイトル1行目（緑色）例:「子供と一緒に」
    titleLine2: string; // タイトル2行目（青色）例:「自然に触れたい方」
    category: string; // カテゴリーラベル（例:「Family」）
    imageSp: any; // スマホ用画像（ImageMetadata）
    imageTabletUp: any; // タブレット以上用画像（ImageMetadata）
    imageAlt: string; // 画像のalt属性
    displayOrder: number; // 表示順序（1から開始）
  };
}

// ============================================================
// 画像インポート（プラン別に整理）
// ============================================================

// 1. 子供と一緒に自然に触れたい方（Family Nature）
import family_nature_hero from '../assets/images/enjoy/family-nature/hero.png';
import fn_day1_slide01 from '../assets/images/enjoy/common/reception.jpg';
import fn_day1_slide02 from '../assets/images/facility/hodohodo-forest/img06.jpg';
import fn_day1_slide03 from '../assets/images/facility/hodohodo-forest/img07.jpg';
import fn_day1_slide04 from '../assets/images/food/dinner/main.jpg';
import fn_day1_slide05 from '../assets/images/facility/public-bath/rotenburo.jpg';
import fn_day1_slide06 from '../assets/images/enjoy/family-nature/day1/slide-06.jpg';
import fn_day1_slide07 from '../assets/images/facility/room/night-01.jpg';

import fn_day2_slide01 from '../assets/images/facility/public-bath/daiyokujo.jpg';
import fn_day2_slide02 from '../assets/images/food/breakfast/img-01.jpg';
import fn_day2_slide03 from '../assets/images/enjoy/common/checkout.jpg';
import fn_day2_slide04 from '../assets/images/activities/pedal-boards/gallery-01.jpg';
import fn_day2_slide05 from '../assets/images/top/location/img1.png';


// 2. カップル夫婦で自然体験をしたい方（Couples）
import couples_hero from '../assets/images/enjoy/couples/hero.jpg';
import cp_day1_slide01 from '../assets/images/enjoy/common/reception.jpg';
import cp_day1_slide02 from '../assets/images/enjoy/common/lakeside.jpg';
import cp_day1_slide03 from '../assets/images/facility/hodohodo-forest/img08.jpg';
import cp_day1_slide04 from '../assets/images/food/bbq/hotel-made.jpg';
import cp_day1_slide05 from '../assets/images/facility/hodohodo-forest/img09.jpg';
import cp_day1_slide06 from '../assets/images/enjoy/common/starry-sky.jpg';
import cp_day1_slide07 from '../assets/images/facility/room/night-01.jpg';

import cp_day2_slide01 from '../assets/images/enjoy/common/morning-lake.jpg';
import cp_day2_slide02 from '../assets/images/food/breakfast/img-02.jpg';
import cp_day2_slide03 from '../assets/images/enjoy/common/checkout.jpg';
import cp_day2_slide04 from '../assets/images/top/location/img2.png';
import cp_day2_slide05 from '../assets/images/enjoy/couples/day2/slide-05.jpg';

// 3. 非日常を満喫、ゆったりと過ごしたい方（Relaxation）
import relaxation_hero from '../assets/images/enjoy/relaxation/hero.jpg';
import rl_day1_slide01 from '../assets/images/enjoy/common/reception.jpg';
import rl_day1_slide02 from '../assets/images/facility/equipment/img-10.jpg';
import rl_day1_slide03 from '../assets/images/enjoy/relaxation/day1/slide-03.jpg';
import rl_day1_slide04 from '../assets/images/food/dinner/img-02.jpg';
import rl_day1_slide05 from '../assets/images/facility/hodohodo-forest/img02.png';
import rl_day1_slide06 from '../assets/images/enjoy/common/starry-sky.jpg';
import rl_day1_slide07 from '../assets/images/facility/room/night-01.jpg';

import rl_day2_slide01 from '../assets/images/facility/public-bath/daiyokujo.jpg';
import rl_day2_slide02 from '../assets/images/food/breakfast/img-03.jpg';
import rl_day2_slide03 from '../assets/images/enjoy/common/checkout.jpg';
import rl_day2_slide04 from '../assets/images/activities/sup-rental/gallery-01.jpg';
import rl_day2_slide05 from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/gallery-01.jpg';

// 4. 近隣観光メインで西湖を拠点に楽しみたい方（Sightseeing）
import sightseeing_hero from '../assets/images/enjoy/sightseeing/hero.jpg';
import st_day1_slide01 from '../assets/images/enjoy/common/reception.jpg';
import st_day1_slide02 from '../assets/images/enjoy/sightseeing/day1/slide-02.jpg';
import st_day1_slide03 from '../assets/images/enjoy/common/lake-dusk.jpg';
import st_day1_slide04 from '../assets/images/food/dinner/img-03.jpg';
import st_day1_slide05 from '../assets/images/facility/public-bath/daiyokujo.jpg';
import st_day1_slide06 from '../assets/images/enjoy/sightseeing/day1/slide-06.jpg';
import st_day1_slide07 from '../assets/images/facility/room/night-01.jpg';

import st_day2_slide01 from '../assets/images/food/breakfast/img-04.jpg';
import st_day2_slide02 from '../assets/images/enjoy/common/checkout.jpg';
import st_day2_slide03 from '../assets/images/enjoy/common/ryugu-cave.jpg';
import st_day2_slide04 from '../assets/images/enjoy/sightseeing/day2/slide-04.jpg';
import st_day2_slide05 from '../assets/images/enjoy/sightseeing/day2/slide-05.jpg';

// 5. 雨の日でも特別な体験をしたい方（Rainy Day）
import rainy_day_hero from '../assets/images/enjoy/rainy-day/hero.jpg';
import rd_day1_slide01 from '../assets/images/enjoy/common/reception.jpg';
import rd_day1_slide02 from '../assets/images/facility/equipment/img-10.jpg';
import rd_day1_slide03 from '../assets/images/facility/public-bath/rotenburo.jpg';
import rd_day1_slide04 from '../assets/images/facility/kokko/img-02.jpg';
import rd_day1_slide05 from '../assets/images/facility/hodohodo-forest/img02.png';
import rd_day1_slide06 from '../assets/images/facility/room/slide-05.jpg';
import rd_day1_slide07 from '../assets/images/facility/room/slide-03.jpg';

import rd_day2_slide01 from '../assets/images/facility/public-bath/rotenburo.jpg';
import rd_day2_slide02 from '../assets/images/food/breakfast/img-01.jpg';
import rd_day2_slide03 from '../assets/images/enjoy/common/checkout.jpg';
import rd_day2_slide04 from '../assets/images/facility/kokko/img-03.png';
import rd_day2_slide05 from '../assets/images/activities/car-sauna/gallery-01.jpg';
import rd_day2_slide06 from '../assets/images/top/location/img1.png';

// TOPページEnjoyセクション用画像
import top_enjoy_01_sp from '../assets/images/top/enjoy/image-01-sp.png';
import top_enjoy_01_tablet from '../assets/images/top/enjoy/image-01-tablet-up.png';
import top_enjoy_02_sp from '../assets/images/top/enjoy/image-02-sp.png';
import top_enjoy_02_tablet from '../assets/images/top/enjoy/image-02-tablet-up.png';
import top_enjoy_03_sp from '../assets/images/top/enjoy/image-03-sp.png';
import top_enjoy_03_tablet from '../assets/images/top/enjoy/image-03-tablet-up.png';
import top_enjoy_04_sp from '../assets/images/top/enjoy/image-04-sp.png';
import top_enjoy_04_tablet from '../assets/images/top/enjoy/image-04-tablet-up.png';
import top_enjoy_05_sp from '../assets/images/top/enjoy/image-05-sp.png';
import top_enjoy_05_tablet from '../assets/images/top/enjoy/image-05-tablet-up.png';

// ============================================================
// プランデータ定義（スタッフお勧めの過ごし方）
// ============================================================

// 1. 子供と一緒に自然に触れたい方
export const familyNaturePlan: StayPlan = {
  id: 'family-nature',
  slug: 'family-nature',
  title: '子供と一緒に自然に触れたい方',
  description:
    '波の立たない西湖で水に親しみ、宿の森で走り回る。子どもの一日を目いっぱい使う過ごし方です。',
  thumbnail: '家族で自然を満喫プランのサムネイル',
  hero: {
    subtitleHighlight: '子供と一緒に',
    subtitleText: '自然に触れたい',
    mainTitle: ['自然の中で', '家族の絆を深める、', '忘れられない一日を'],
    description:
      '西湖は波が立たないので、水の上が初めてのお子さんでも安心です。ホテルに隣接する「ほどほどの森」にはツリーハウスやトランポリンがあり、夜は手持ち花火もできます。首都圏では気軽にできなくなったことが、ここではまだできます。',
    heroImage: {
      src: family_nature_hero,
      alt: '家族で自然を満喫する様子',
    },
  },
  days: [
    {
      dayLabel: 'Day 1',
      dayId: 'day1',
      planId: 'family-nature',
      items: [
        {
          time: '15:00',
          thumbnailTitle: 'チェックイン',
          detailTitle: 'チェックイン',
          description:
            '西湖の森に囲まれたフロントで手続きを済ませます。窓の外はもう、いつもと違う景色です。',
          image: { src: fn_day1_slide01, alt: 'チェックインカウンターの様子' },
        },
        {
          time: '15:30',
          thumbnailTitle: 'ほどほどの森であそぶ',
          detailTitle: 'ほどほどの森であそぶ',
          description:
            'ホテルに隣接する、宿泊者だけが入れる森。ツリーハウス、ブランコ、トランポリン、アスレチック。放っておいても子どもは遊び方を見つけます。',
          image: {
            src: fn_day1_slide02,
            alt: 'ほどほどの森のターザンロープで遊ぶ子どもたち',
          },
        },
        {
          time: '17:00',
          thumbnailTitle: '足湯でひと休み',
          detailTitle: '足湯でひと休み',
          description:
            '森の中に源泉かけ流しの足湯があります。走り回ったあとの足を、そのまま浸けられます。',
          image: { src: fn_day1_slide03, alt: 'ほどほどの森の源泉かけ流しの足湯' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '地の食材を使った夕食を、家族そろって囲みます。外で遊んだあとの食事は格別です。',
          image: { src: fn_day1_slide04, alt: '夕食の料理' },
        },
        {
          time: '19:30',
          thumbnailTitle: '入　浴',
          detailTitle: '入　浴',
          description:
            '西湖で唯一の天然自家源泉。千年をかけて湧き出た湯が、一日の疲れをほどきます。',
          image: { src: fn_day1_slide05, alt: '露天風呂' },
        },
        {
          time: '20:30',
          thumbnailTitle: '手持ち花火',
          detailTitle: '手持ち花火',
          description:
            '花火の持ち込みができます。首都圏では手持ち花火すら気軽にできる場所が少なくなりました。暗がりの中で、火花が消えるまでの数十秒を、ただ眺めてください。',
          image: { src: fn_day1_slide06, alt: '手持ち花火' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '静かな夜の中で、深い眠りにつきます。',
          image: { src: fn_day1_slide07, alt: '窓に富士山が見える夜の客室' },
        },
      ],
    },
    {
      dayLabel: 'Day 2',
      dayId: 'day2',
      planId: 'family-nature',
      items: [
        {
          time: '6:30',
          thumbnailTitle: '早朝の大浴場',
          detailTitle: '早朝の大浴場',
          description:
            '朝5時から入れる大浴場へ。人の少ない時間に、源泉の湯をゆっくり味わいます。',
          image: { src: fn_day2_slide01, alt: '早朝の大浴場' },
        },
        {
          time: '7:30',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            'ブッフェスタイルの朝食。よく寝てよく遊んだ翌朝は、いつもより食が進みます。',
          image: { src: fn_day2_slide02, alt: '朝食バイキングの様子' },
        },
        {
          time: '9:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて、荷物はフロントへ預けます。ここからは身軽に過ごせます。',
          image: { src: fn_day2_slide03, alt: 'フロントでルームキーを返却する様子' },
        },
        {
          time: '10:00',
          thumbnailTitle: '足漕ぎカヤック',
          detailTitle: '足漕ぎカヤック',
          description:
            'ペダルを漕ぐだけで進むHOBIE。手の力がいらないので、小さなお子さんでも楽しめます。西湖は波が立たないので、水の上が初めてでも安心です。',
          image: { src: fn_day2_slide04, alt: '足漕ぎカヤック HOBIE' },
        },
        {
          time: '12:00',
          thumbnailTitle: '出　発',
          detailTitle: '出　発',
          description:
            '湖と森で過ごした二日間。子どもの記憶に残るのは、たぶん転んだことや濡れたことです。',
          image: { src: fn_day2_slide05, alt: '西湖湖畔の風景' },
        },
      ],
    },
  ],
  topPageDisplay: {
    showOnTop: true,
    titleLine1: '子供と一緒に',
    titleLine2: '自然に触れたい方',
    category: 'Family',
    imageSp: top_enjoy_01_sp,
    imageTabletUp: top_enjoy_01_tablet,
    imageAlt: '自然に触れたい方',
    displayOrder: 1,
  },
};

// 2. カップル夫婦で自然体験をしたい方
export const couplesPlan: StayPlan = {
  id: 'couples',
  slug: 'couples',
  title: 'カップル夫婦で自然体験をしたい方',
  description:
    '炭火の食卓と、地球のダイナミズムに触れるツアー。二人で過ごす静かな二日間です。',
  thumbnail: 'カップル向けプランのサムネイル',
  hero: {
    subtitleHighlight: 'カップルで',
    subtitleText: '自然体験を',
    mainTitle: ['二人だけの', '特別な時間を', '自然の中で'],
    description:
      '湖畔の屋根付きBBQハウスで、少し贅沢な炭火の夕食を。夜は森の焚き火を囲み、翌朝は青木ヶ原樹海へ。都会では感じることのできない自然のスケールに、二人で触れる時間です。',
    heroImage: {
      src: couples_hero,
      alt: 'カップルで自然体験を楽しむ様子',
    },
  },
  days: [
    {
      dayLabel: 'Day 1',
      dayId: 'day1',
      planId: 'couples',
      items: [
        {
          time: '15:00',
          thumbnailTitle: 'チェックイン',
          detailTitle: 'チェックイン',
          description:
            '静かなフロントで手続きを済ませます。ここから二人だけの時間が始まります。',
          image: { src: cp_day1_slide01, alt: 'チェックインカウンターの様子' },
        },
        {
          time: '15:30',
          thumbnailTitle: '湖畔散策',
          detailTitle: '湖畔散策',
          description:
            '宿から歩いてすぐの湖畔へ。人の少ない西湖は、話す声が自然と小さくなります。',
          image: { src: cp_day1_slide02, alt: '西湖の湖畔' },
        },
        {
          time: '16:30',
          thumbnailTitle: 'プライベートサウナ',
          detailTitle: 'プライベートサウナ',
          description:
            '森の中に建つ薪サウナ小屋。貸切なので、二人のペースで整えられます。源泉かけ流しの足湯も使えます。',
          image: { src: cp_day1_slide03, alt: '森の中に建つ薪サウナ小屋' },
        },
        {
          time: '18:00',
          thumbnailTitle: 'ホテルメイドBBQ',
          detailTitle: 'ホテルメイドBBQ',
          description:
            '湖畔の屋根付きBBQハウスで、少し贅沢な炭火の夕食を。焼く時間そのものを、ゆっくり楽しんでください。',
          image: { src: cp_day1_slide04, alt: 'ホテルメイドBBQの食材' },
        },
        {
          time: '20:00',
          thumbnailTitle: '焚き火バー',
          detailTitle: '焚き火バー',
          description:
            'ほどほどの森の焚き火を囲みます。火を見ていると会話が減りますが、それがちょうどいい時間です。',
          image: { src: cp_day1_slide05, alt: 'ほどほどの森の焚き火バー' },
        },
        {
          time: '21:00',
          thumbnailTitle: '星空観察',
          detailTitle: '星空観察',
          description:
            '西湖の夜空は、驚くほど星が多い。並んで見上げるだけの時間が、意外と長く感じられます。',
          image: { src: cp_day1_slide06, alt: '西湖と富士山の上に広がる星空' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '静かな夜の中で、二人だけの特別な時間を過ごします。',
          image: { src: cp_day1_slide07, alt: '窓に富士山が見える夜の客室' },
        },
      ],
    },
    {
      dayLabel: 'Day 2',
      dayId: 'day2',
      planId: 'couples',
      items: [
        {
          time: '6:30',
          thumbnailTitle: '朝の湖畔へ',
          detailTitle: '朝の湖畔へ',
          description:
            '誰もいない早朝の湖。風のない朝は、山影がそのまま水面に映ります。',
          image: { src: cp_day2_slide01, alt: '風のない早朝の西湖と水面の映り込み' },
        },
        {
          time: '7:30',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '窓から森を眺めながらの朝食。このあとのツアーに備えて、しっかりと。',
          image: { src: cp_day2_slide02, alt: '朝食の様子' },
        },
        {
          time: '9:00',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて、荷物を預けます。まだ帰りません。',
          image: { src: cp_day2_slide03, alt: 'フロントでルームキーを返却する様子' },
        },
        {
          time: '9:30',
          thumbnailTitle: '樹海ツアー',
          detailTitle: '樹海ツアー',
          description:
            '青木ヶ原樹海へ。溶岩の上に育った森、溶岩洞窟、絶景ポイント。都会では感じられない地球のダイナミズムに触れる2時間半です。',
          image: { src: cp_day2_slide04, alt: '青木ヶ原樹海の苔むした溶岩と洞窟' },
        },
        {
          time: '12:00',
          thumbnailTitle: 'カフェでひと息',
          detailTitle: 'カフェでひと息',
          description:
            '歩いたあとは、近くのカフェでひと息。少し足をのばせば、クラフトビールの醸造所もあります。',
          image: { src: cp_day2_slide05, alt: '木のテーブルに置かれたコーヒー' },
        },
      ],
    },
  ],
  topPageDisplay: {
    showOnTop: true,
    titleLine1: 'カップル・夫婦で',
    titleLine2: '自然体験をしたい方',
    category: 'Couple',
    imageSp: top_enjoy_02_sp,
    imageTabletUp: top_enjoy_02_tablet,
    imageAlt: '自然体験をしたい方',
    displayOrder: 2,
  },
};

// 3. 非日常を満喫、ゆったりと過ごしたい方
export const relaxationPlan: StayPlan = {
  id: 'relaxation',
  slug: 'relaxation',
  title: '非日常を満喫、ゆったりと過ごしたい方',
  description:
    '本を一冊選んで、ハンモックへ。何もしないことを目的にした過ごし方です。',
  thumbnail: 'リラクゼーションプランのサムネイル',
  hero: {
    subtitleHighlight: '非日常を',
    subtitleText: 'ゆったりと',
    mainTitle: ['日常から離れて', '心も体も', 'リフレッシュ'],
    description:
      'ホテル内の図書コーナーで本を選び、芝生のハンモックで読む。森のサウナで整え、翌朝はSUPで湖の上を漂う。予定を詰めないことが、この二日間の目的です。',
    heroImage: {
      src: relaxation_hero,
      alt: 'リラクゼーションを楽しむ様子',
    },
  },
  days: [
    {
      dayLabel: 'Day 1',
      dayId: 'day1',
      planId: 'relaxation',
      items: [
        {
          time: '15:00',
          thumbnailTitle: 'チェックイン',
          detailTitle: 'チェックイン',
          description:
            '静かなフロントで手続きを済ませます。ここからは、何もしない時間が始まります。',
          image: { src: rl_day1_slide01, alt: 'チェックイン' },
        },
        {
          time: '15:30',
          thumbnailTitle: '図書コーナーで本を選ぶ',
          detailTitle: '図書コーナーで本を選ぶ',
          description:
            'ホテル内の図書コーナーへ。読もうと思って読めていなかった一冊を、ここで選びます。',
          image: { src: rl_day1_slide02, alt: 'ホテル内の図書コーナー' },
        },
        {
          time: '16:00',
          thumbnailTitle: 'ハンモックで読書',
          detailTitle: 'ハンモックで読書',
          description:
            '芝生のエリアに吊るされたハンモックへ。揺られながら本を開くと、たいてい途中で眠くなります。それでいいのだと思います。',
          image: { src: rl_day1_slide03, alt: '木陰に吊るされたハンモックチェア' },
        },
        {
          time: '18:00',
          thumbnailTitle: '静寂な夕食',
          detailTitle: '静寂な夕食',
          description:
            '会話も少なめに、料理と向き合う夕食。音のない食卓は、思いのほか贅沢です。',
          image: { src: rl_day1_slide04, alt: '静寂な夕食' },
        },
        {
          time: '19:30',
          thumbnailTitle: 'プライベートサウナ',
          detailTitle: 'プライベートサウナ',
          description:
            'ほどほどの森の薪サウナを貸切で。火の音と外気だけが、そこにあります。',
          image: { src: rl_day1_slide05, alt: '薪ストーブに火が入ったサウナ小屋の内観' },
        },
        {
          time: '21:00',
          thumbnailTitle: '星空を見上げる',
          detailTitle: '星空を見上げる',
          description:
            '満天の星空の下で、何も考えない時間を持ちます。',
          image: { src: rl_day1_slide06, alt: '西湖と富士山の上に広がる星空' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '静かな夜の中で、深い眠りにつきます。',
          image: { src: rl_day1_slide07, alt: '窓に富士山が見える夜の客室' },
        },
      ],
    },
    {
      dayLabel: 'Day 2',
      dayId: 'day2',
      planId: 'relaxation',
      items: [
        {
          time: '6:00',
          thumbnailTitle: '朝の湯',
          detailTitle: '朝の湯',
          description:
            '夜が明けきる前の大浴場。湯気の向こうが少しずつ明るくなっていきます。',
          image: { src: rl_day2_slide01, alt: '早朝の大浴場' },
        },
        {
          time: '7:30',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '静かな朝食。急ぐ予定は何もありません。',
          image: { src: rl_day2_slide02, alt: '朝食' },
        },
        {
          time: '9:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて、荷物を預けます。まだ湖の時間は続きます。',
          image: { src: rl_day2_slide03, alt: 'フロントでルームキーを返却する様子' },
        },
        {
          time: '10:00',
          thumbnailTitle: 'SUPで湖上へ',
          detailTitle: 'SUPで湖上へ',
          description:
            'ボードの上に立って、あとは漂うだけ。漕ぐことより、水の上に浮いている時間そのものが目的です。',
          image: { src: rl_day2_slide04, alt: '西湖でのSUP' },
        },
        {
          time: '12:00',
          thumbnailTitle: '出　発',
          detailTitle: '出　発',
          description:
            '何もしなかった二日間。それが、いちばん必要だったのかもしれません。',
          image: { src: rl_day2_slide05, alt: '西湖の森' },
        },
      ],
    },
  ],
  topPageDisplay: {
    showOnTop: true,
    titleLine1: '非日常を満喫',
    titleLine2: 'ゆったりと過ごしたい方',
    category: 'Comfortable',
    imageSp: top_enjoy_03_sp,
    imageTabletUp: top_enjoy_03_tablet,
    imageAlt: 'ゆったりと過ごしたい方',
    displayOrder: 3,
  },
};

// 4. 近隣観光メインで西湖を拠点に楽しみたい方
export const sightseeingPlan: StayPlan = {
  id: 'sightseeing',
  slug: 'sightseeing',
  title: '近隣観光メインで西湖を拠点に楽しみたい方',
  description:
    '金運の神社、溶岩洞穴、郷土のうどん、そしてロープウェイ。地元目線で巡る富士北麓です。',
  thumbnail: '観光メインプランのサムネイル',
  hero: {
    subtitleHighlight: '近隣観光を',
    subtitleText: '西湖を拠点に',
    mainTitle: ['富士山周辺を', '効率的に', '満喫しよう'],
    description:
      '西湖を拠点に、富士北麓を巡ります。金運で知られる新屋山神社、溶岩が作った竜宮洞穴、地元の人が通う吉田のうどん、そして河口湖のロープウェイ。宿は静かな拠点として使ってください。',
    heroImage: {
      src: sightseeing_hero,
      alt: '観光を楽しむ様子',
    },
  },
  days: [
    {
      dayLabel: 'Day 1',
      dayId: 'day1',
      planId: 'sightseeing',
      items: [
        {
          time: '13:30',
          thumbnailTitle: '新屋山神社を参拝',
          detailTitle: '新屋山神社を参拝',
          description:
            '宿へ向かう前に、富士吉田の新屋山神社へ。金運の神社として知られる社です。木々に囲まれた境内は、それだけで空気が変わります。',
          image: { src: st_day1_slide02, alt: '木々に囲まれた新屋山神社の社殿' },
        },
        {
          time: '15:00',
          thumbnailTitle: 'チェックイン',
          detailTitle: 'チェックイン',
          description:
            '参拝を済ませてから宿へ。ここからは、静かな観光の拠点として使ってください。',
          image: { src: st_day1_slide01, alt: 'チェックイン' },
        },
        {
          time: '17:30',
          thumbnailTitle: '湖畔の夕景',
          detailTitle: '湖畔の夕景',
          description:
            '宿に戻る前に、湖畔で夕暮れを。日が落ちる時間の西湖は、色が刻々と変わります。',
          image: { src: st_day1_slide03, alt: '夕焼けに染まる西湖の空' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '宿に戻って夕食。歩き回った一日の締めくくりです。',
          image: { src: st_day1_slide04, alt: '夕食' },
        },
        {
          time: '19:30',
          thumbnailTitle: '温泉でリフレッシュ',
          detailTitle: '温泉でリフレッシュ',
          description:
            '観光の疲れを温泉で癒します。明日への活力を蓄えます。',
          image: { src: st_day1_slide05, alt: '大浴場' },
        },
        {
          time: '20:30',
          thumbnailTitle: '明日の計画を立てる',
          detailTitle: '明日の計画を立てる',
          description:
            '明日の観光計画を立てながら、ゆっくりと過ごします。フロントで地元の情報も聞けます。',
          image: { src: st_day1_slide06, alt: '時間の目盛りが並んだ手帳とペン' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '明日の観光に備えて、しっかりと休みます。',
          image: { src: st_day1_slide07, alt: '窓に富士山が見える夜の客室' },
        },
      ],
    },
    {
      dayLabel: 'Day 2',
      dayId: 'day2',
      planId: 'sightseeing',
      items: [
        {
          time: '7:00',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '観光の一日を始める朝食。エネルギーをチャージします。',
          image: { src: st_day2_slide01, alt: '朝食' },
        },
        {
          time: '9:00',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて荷物を預け、身軽に観光へ出ます。',
          image: { src: st_day2_slide02, alt: 'フロントでルームキーを返却する様子' },
        },
        {
          time: '9:30',
          thumbnailTitle: '樹海散策と竜宮洞穴',
          detailTitle: '樹海散策と竜宮洞穴',
          description:
            '青木ヶ原樹海をライトに歩き、竜宮洞穴へ。溶岩が作った空洞に流れる冷気は、夏でもひんやりとしています。',
          image: { src: st_day2_slide03, alt: '竜宮洞穴の中から見上げた樹海の緑' },
        },
        {
          time: '12:00',
          thumbnailTitle: '吉田のうどんで昼食',
          detailTitle: '吉田のうどんで昼食',
          description:
            '富士吉田の郷土食。驚くほど硬い麺と、味噌と醤油を合わせた汁。地元の人が通う店で味わってください。',
          image: { src: st_day2_slide04, alt: '郷土料理のうどん' },
        },
        {
          time: '14:00',
          thumbnailTitle: '富士パノラマロープウェイ',
          detailTitle: '富士パノラマロープウェイ',
          description:
            '河口湖畔から山頂へ。富士山と河口湖を一度に見渡せる、定番にして外せない眺めです。',
          image: { src: st_day2_slide05, alt: '山頂からの富士山の眺め' },
        },
      ],
    },
  ],
  topPageDisplay: {
    showOnTop: true,
    titleLine1: '近隣観光メインで',
    titleLine2: '西湖を拠点に楽しみたい方',
    category: 'Tourism',
    imageSp: top_enjoy_04_sp,
    imageTabletUp: top_enjoy_04_tablet,
    imageAlt: '西湖を拠点に楽しみたい方',
    displayOrder: 4,
  },
};

// 5. 雨の日でも特別な体験をしたい方
export const rainyDayPlan: StayPlan = {
  id: 'rainy-day',
  slug: 'rainy-day',
  title: '雨の日でも特別な体験をしたい方',
  description:
    '雨の日だからこそ、この場所は静かになります。本と、湯と、火のある二日間です。',
  thumbnail: '雨の日の過ごし方プランのサムネイル',
  hero: {
    subtitleHighlight: '雨の日でも',
    subtitleText: '特別な体験を',
    mainTitle: ['静かな、', '雨音と共に過ごす、', '特別なリラックスタイム'],
    description:
      '雨の日だからこそ、この場所は静かになります。図書コーナーで選んだ本を雨音とともに読み、露天風呂で濡れた森の香りを吸い込み、屋根の下の炭火で食卓を囲む。晴れの日とは違う記憶が残ります。',
    heroImage: {
      src: rainy_day_hero,
      alt: '雨の日のリラックスタイム',
    },
  },
  days: [
    {
      dayLabel: 'Day 1',
      dayId: 'day1',
      planId: 'rainy-day',
      items: [
        {
          time: '15:00',
          thumbnailTitle: 'チェックイン',
          detailTitle: 'チェックイン',
          description:
            '雨の音を聞きながら、温かな雰囲気のロビーでチェックイン。雨の日だからこそ楽しめる、ゆったりとした時間の始まりです。',
          image: { src: rd_day1_slide01, alt: 'チェックインカウンターの様子' },
        },
        {
          time: '15:30',
          thumbnailTitle: '図書コーナーで本を選ぶ',
          detailTitle: '図書コーナーで本を選ぶ',
          description:
            'ホテル内の図書コーナーへ。雨の日は、外に出られないことが本を開く理由になります。',
          image: { src: rd_day1_slide02, alt: 'ホテル内の図書コーナー' },
        },
        {
          time: '16:30',
          thumbnailTitle: '温泉でリラックス',
          detailTitle: '温泉でリラックス',
          description:
            '雨音を聞きながらの露天風呂は格別。雨に濡れた森の香りを感じながら、ゆったりと温泉を楽しみます。',
          image: { src: rd_day1_slide03, alt: '雨の日の露天風呂' },
        },
        {
          time: '18:00',
          thumbnailTitle: 'Kokkoで炭火を囲む',
          detailTitle: 'Kokkoで炭火を囲む',
          description:
            '屋根のあるBBQハウスへ。雨でも濡れずに火を扱えるのが、この場所の良さです。',
          image: { src: rd_day1_slide04, alt: '屋根付きBBQハウス' },
        },
        {
          time: '19:30',
          thumbnailTitle: '森のサウナ小屋',
          detailTitle: '森のサウナ小屋',
          description:
            '薪の爆ぜる音と雨音が重なる、夜のサウナ。屋根の下で、外の雨を眺めながらととのいます。',
          image: { src: rd_day1_slide05, alt: '薪ストーブに火が入ったサウナ小屋の内観' },
        },
        {
          time: '21:00',
          thumbnailTitle: '雨音とともに読書',
          detailTitle: '雨音とともに読書',
          description:
            '部屋に戻り、選んだ本の続きを。雨の日にしか聞こえない音が、しおり代わりになります。',
          image: { src: rd_day1_slide06, alt: '雨の夜の客室' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '雨音を子守唄に、深い眠りにつきます。',
          image: { src: rd_day1_slide07, alt: '客室の様子' },
        },
      ],
    },
    {
      dayLabel: 'Day 2',
      dayId: 'day2',
      planId: 'rainy-day',
      items: [
        {
          time: '6:30',
          thumbnailTitle: '朝の大浴場',
          detailTitle: '朝の大浴場',
          description:
            '雨音を聞きながらの露天風呂。雨に濡れた森の香りは、晴れた日には無いものです。',
          image: { src: rd_day2_slide01, alt: '朝の露天風呂' },
        },
        {
          time: '7:30',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            'ブッフェスタイルの朝食。窓を打つ雨を眺めながら、ゆっくりと。',
          image: { src: rd_day2_slide02, alt: '朝食バイキング' },
        },
        {
          time: '9:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて、荷物を預けます。雨の日はまだ続きます。',
          image: { src: rd_day2_slide03, alt: 'フロントでルームキーを返却する様子' },
        },
        {
          time: '12:00',
          thumbnailTitle: 'Kokkoで昼食',
          detailTitle: 'Kokkoで昼食',
          description:
            '屋根の下で炭火を囲む昼食。雨の日でも、火のある食卓は変わりません。',
          image: { src: rd_day2_slide04, alt: '屋根付きBBQハウスでの昼食' },
        },
        {
          time: '14:00',
          thumbnailTitle: 'サイコサイコー号',
          detailTitle: 'サイコサイコー号',
          description:
            '薪サウナを積んだサウナカー。雨の日は、水風呂の冷たさがいっそう澄んで感じられます。',
          image: { src: rd_day2_slide05, alt: 'サウナカー' },
        },
        {
          time: '17:00',
          thumbnailTitle: '出　発',
          detailTitle: '出　発',
          description:
            '雨の一日を、ここまで使い切りました。晴れの日とは違う記憶が残ります。',
          image: { src: rd_day2_slide06, alt: '雨上がりの西湖' },
        },
      ],
    },
  ],
  topPageDisplay: {
    showOnTop: true,
    titleLine1: '雨の日でも',
    titleLine2: '特別な体験をしたい方',
    category: 'Rainy Day',
    imageSp: top_enjoy_05_sp,
    imageTabletUp: top_enjoy_05_tablet,
    imageAlt: '特別な体験をしたい方',
    displayOrder: 5,
  },
};

// ============================================================
// エクスポート
// ============================================================

// 全ての過ごし方プランを配列でエクスポート（スタッフお勧め順）
export const allStayPlans: StayPlan[] = [
  familyNaturePlan, // 1. 子供と一緒に自然に触れたい方
  couplesPlan, // 2. カップル夫婦で自然体験をしたい方
  relaxationPlan, // 3. 非日常を満喫、ゆったりと過ごしたい方
  sightseeingPlan, // 4. 近隣観光メインで西湖を拠点に楽しみたい方
  rainyDayPlan, // 5. 雨の日でも特別な体験をしたい方
];

// プラン取得用のヘルパー関数
export function getStayPlanBySlug(slug: string): StayPlan | undefined {
  return allStayPlans.find((plan) => plan.slug === slug);
}

export function getAllStayPlanSlugs(): string[] {
  return allStayPlans.map((plan) => plan.slug);
}

// 後方互換性のための既存エクスポート（段階的に削除予定）
export const allDaySchedules: DaySchedule[] = [
  familyNaturePlan.days[0],
  familyNaturePlan.days[1],
];

export const rainyDaySchedules: DaySchedule[] = [
  rainyDayPlan.days[0],
  rainyDayPlan.days[1],
];
