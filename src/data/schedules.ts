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
import fn_day1_slide01 from '../assets/images/enjoy/family-nature/day1/slide-01.jpg';
import fn_day1_slide02 from '../assets/images/enjoy/family-nature/day1/slide-02.jpg';
import fn_day1_slide03 from '../assets/images/enjoy/family-nature/day1/slide-03.jpg';
import fn_day1_slide04 from '../assets/images/enjoy/family-nature/day1/slide-04.jpg';
import fn_day1_slide05 from '../assets/images/enjoy/family-nature/day1/slide-05.jpg';
import fn_day1_slide06 from '../assets/images/enjoy/family-nature/day1/slide-06.jpg';
import fn_day1_slide07 from '../assets/images/enjoy/family-nature/day1/slide-07.jpg';

import fn_day2_slide01 from '../assets/images/enjoy/family-nature/day2/slide-01.jpg';
import fn_day2_slide02 from '../assets/images/enjoy/family-nature/day2/slide-02.jpg';
import fn_day2_slide03 from '../assets/images/enjoy/family-nature/day2/slide-03.jpg';
import fn_day2_slide04 from '../assets/images/enjoy/family-nature/day2/slide-04.jpg';
import fn_day2_slide05 from '../assets/images/enjoy/family-nature/day2/slide-05.jpg';
import fn_day2_slide06 from '../assets/images/enjoy/family-nature/day2/slide-06.jpg';
import fn_day2_slide07 from '../assets/images/enjoy/family-nature/day2/slide-07.jpg';


// 2. カップル夫婦で自然体験をしたい方（Couples）
import couples_hero from '../assets/images/enjoy/couples/hero.jpg';
import cp_day1_slide01 from '../assets/images/enjoy/couples/day1/slide-01.jpg';
import cp_day1_slide02 from '../assets/images/enjoy/couples/day1/slide-02.jpg';
import cp_day1_slide03 from '../assets/images/enjoy/couples/day1/slide-03.jpg';
import cp_day1_slide04 from '../assets/images/enjoy/couples/day1/slide-04.jpg';
import cp_day1_slide05 from '../assets/images/enjoy/couples/day1/slide-05.jpg';
import cp_day1_slide06 from '../assets/images/enjoy/couples/day1/slide-06.jpg';
import cp_day1_slide07 from '../assets/images/enjoy/couples/day1/slide-07.jpg';

import cp_day2_slide01 from '../assets/images/enjoy/couples/day2/slide-01.jpg';
import cp_day2_slide02 from '../assets/images/enjoy/couples/day2/slide-02.jpg';
import cp_day2_slide03 from '../assets/images/enjoy/couples/day2/slide-03.jpg';
import cp_day2_slide04 from '../assets/images/enjoy/couples/day2/slide-04.jpg';
import cp_day2_slide05 from '../assets/images/enjoy/couples/day2/slide-05.jpg';
import cp_day2_slide06 from '../assets/images/enjoy/couples/day2/slide-06.jpg';
import cp_day2_slide07 from '../assets/images/enjoy/couples/day2/slide-07.jpg';

// 3. 非日常を満喫、ゆったりと過ごしたい方（Relaxation）
import relaxation_hero from '../assets/images/enjoy/relaxation/hero.jpg';
import rl_day1_slide01 from '../assets/images/enjoy/relaxation/day1/slide-01.jpg';
import rl_day1_slide02 from '../assets/images/enjoy/relaxation/day1/slide-02.jpg';
import rl_day1_slide03 from '../assets/images/enjoy/relaxation/day1/slide-03.jpg';
import rl_day1_slide04 from '../assets/images/enjoy/relaxation/day1/slide-04.jpg';
import rl_day1_slide05 from '../assets/images/enjoy/relaxation/day1/slide-05.jpg';
import rl_day1_slide06 from '../assets/images/enjoy/relaxation/day1/slide-06.jpg';
import rl_day1_slide07 from '../assets/images/enjoy/relaxation/day1/slide-07.jpg';

import rl_day2_slide01 from '../assets/images/enjoy/relaxation/day2/slide-01.jpg';
import rl_day2_slide02 from '../assets/images/enjoy/relaxation/day2/slide-02.jpg';
import rl_day2_slide03 from '../assets/images/enjoy/relaxation/day2/slide-03.jpg';
import rl_day2_slide04 from '../assets/images/enjoy/relaxation/day2/slide-04.jpg';
import rl_day2_slide05 from '../assets/images/enjoy/relaxation/day2/slide-05.jpg';
import rl_day2_slide06 from '../assets/images/enjoy/relaxation/day2/slide-06.jpg';
import rl_day2_slide07 from '../assets/images/enjoy/relaxation/day2/slide-07.jpg';

// 4. 近隣観光メインで最高拠点に楽しみたい方（Sightseeing）
import sightseeing_hero from '../assets/images/enjoy/sightseeing/hero.jpg';
import st_day1_slide01 from '../assets/images/enjoy/sightseeing/day1/slide-01.jpg';
import st_day1_slide02 from '../assets/images/enjoy/sightseeing/day1/slide-02.jpg';
import st_day1_slide03 from '../assets/images/enjoy/sightseeing/day1/slide-03.jpg';
import st_day1_slide04 from '../assets/images/enjoy/sightseeing/day1/slide-04.jpg';
import st_day1_slide05 from '../assets/images/enjoy/sightseeing/day1/slide-05.jpg';
import st_day1_slide06 from '../assets/images/enjoy/sightseeing/day1/slide-06.jpg';
import st_day1_slide07 from '../assets/images/enjoy/sightseeing/day1/slide-07.jpg';

import st_day2_slide01 from '../assets/images/enjoy/sightseeing/day2/slide-01.jpg';
import st_day2_slide02 from '../assets/images/enjoy/sightseeing/day2/slide-02.jpg';
import st_day2_slide03 from '../assets/images/enjoy/sightseeing/day2/slide-03.jpg';
import st_day2_slide04 from '../assets/images/enjoy/sightseeing/day2/slide-04.jpg';
import st_day2_slide05 from '../assets/images/enjoy/sightseeing/day2/slide-05.jpg';
import st_day2_slide06 from '../assets/images/enjoy/sightseeing/day2/slide-06.jpg';
import st_day2_slide07 from '../assets/images/enjoy/sightseeing/day2/slide-07.jpg';

// 5. 雨の日でも特別な体験をしたい方（Rainy Day）
import rainy_day_hero from '../assets/images/enjoy/rainy-day/hero.jpg';
import rd_day1_slide01 from '../assets/images/enjoy/rainy-day/day1/slide-01.jpg';
import rd_day1_slide02 from '../assets/images/enjoy/rainy-day/day1/slide-02.jpg';
import rd_day1_slide03 from '../assets/images/enjoy/rainy-day/day1/slide-03.jpg';
import rd_day1_slide04 from '../assets/images/enjoy/rainy-day/day1/slide-04.jpg';
import rd_day1_slide05 from '../assets/images/enjoy/rainy-day/day1/slide-05.jpg';
import rd_day1_slide06 from '../assets/images/enjoy/rainy-day/day1/slide-06.jpg';
import rd_day1_slide07 from '../assets/images/enjoy/rainy-day/day1/slide-07.jpg';

import rd_day2_slide01 from '../assets/images/enjoy/rainy-day/day2/slide-01.jpg';
import rd_day2_slide02 from '../assets/images/enjoy/rainy-day/day2/slide-02.jpg';
import rd_day2_slide03 from '../assets/images/enjoy/rainy-day/day2/slide-03.jpg';
import rd_day2_slide04 from '../assets/images/enjoy/rainy-day/day2/slide-04.jpg';
import rd_day2_slide05 from '../assets/images/enjoy/rainy-day/day2/slide-05.jpg';
import rd_day2_slide06 from '../assets/images/enjoy/rainy-day/day2/slide-06.jpg';
import rd_day2_slide07 from '../assets/images/enjoy/rainy-day/day2/slide-07.jpg';

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
    '富士山と西湖の美しい自然の中で、家族みんなで楽しめるアクティビティを満喫するプランです。',
  thumbnail: '家族で自然を満喫プランのサムネイル',
  hero: {
    subtitleHighlight: '子供と一緒に',
    subtitleText: '自然に触れたい',
    mainTitle: ['自然の中で', '家族の絆を深める、', '忘れられない一日を'],
    description:
      '当ホテル周辺の自然豊かな環境は、家族全員で楽しめるアドベンチャーが満載です。散策路を歩きながら、季節の花や野生の動物を探したり、湖でカヌー体験をしてみませんか？子どもたちにとっては新しい発見がいっぱいの場所、大人にとっては日常から離れてゆっくりとリラックスできる空間を提供します。',
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
          thumbnailTitle: '周辺散歩',
          detailTitle: '周辺散歩',
          description:
            '荷物を置いたら、まずは湖畔へ。宿から歩いてすぐの場所に、西湖の水面が広がっています。',
          image: { src: fn_day1_slide02, alt: '西湖湖畔の散歩道' },
        },
        {
          time: '16:30',
          thumbnailTitle: '湖畔で水遊び',
          detailTitle: '湖畔で水遊び',
          description:
            '西湖の水は驚くほど澄んでいます。石を投げたり、足だけ浸かったり。子どもは放っておいても遊び方を見つけます。',
          image: { src: fn_day1_slide03, alt: '湖畔で遊ぶ子どもたち' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '地の食材を使った夕食を、家族そろって囲みます。歩いたあとの食事は格別です。',
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
          thumbnailTitle: '星空を見上げる',
          detailTitle: '星空を見上げる',
          description:
            '灯りの少ない西湖の夜。宿の前に出るだけで、都会では見えない数の星が見えます。',
          image: { src: fn_day1_slide06, alt: '西湖の星空' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '静かな夜の中で、深い眠りにつきます。',
          image: { src: fn_day1_slide07, alt: '客室の様子' },
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
            'ブッフェスタイルの朝食。よく寝てよく歩いた翌朝は、いつもより食が進みます。',
          image: { src: fn_day2_slide02, alt: '朝食バイキングの様子' },
        },
        {
          time: '9:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて、荷物はフロントへ預けます。ここからは身軽に過ごせます。',
          image: { src: fn_day2_slide03, alt: 'チェックアウトカウンター' },
        },
        {
          time: '10:00',
          thumbnailTitle: 'カヤック体験',
          detailTitle: 'カヤック体験',
          description:
            '湖に漕ぎ出します。朝の西湖は風がなく、水面が鏡のようになります。',
          image: { src: fn_day2_slide04, alt: '西湖でのカヤック体験' },
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
    '二人だけの特別な時間を、美しい自然の中で過ごすロマンチックなプランです。',
  thumbnail: 'カップル向けプランのサムネイル',
  hero: {
    subtitleHighlight: 'カップルで',
    subtitleText: '自然体験を',
    mainTitle: ['二人だけの', '特別な時間を', '自然の中で'],
    description:
      '富士山と西湖の美しい自然を背景に、二人だけの特別な時間をお過ごしください。ロマンチックな体験と、心に残る思い出を作るプランです。静寂の中で二人の時間を大切にしながら、自然の美しさを満喫できます。',
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
          image: { src: cp_day1_slide02, alt: '湖畔での散策' },
        },
        {
          time: '16:30',
          thumbnailTitle: 'プライベートサウナ',
          detailTitle: 'プライベートサウナ',
          description:
            '森の中に建つ薪サウナ小屋。貸切なので、二人のペースで整えられます。',
          image: { src: cp_day1_slide03, alt: 'プライベートサウナ' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '地の食材を使った夕食を、静かな席で。急がずに、ゆっくりと味わう時間です。',
          image: { src: cp_day1_slide04, alt: '夕食の料理' },
        },
        {
          time: '19:30',
          thumbnailTitle: '大浴場へ',
          detailTitle: '大浴場へ',
          description:
            '男女別の大浴場でそれぞれゆっくり。湯上がりに外へ出れば、もう空には星が出ています。',
          image: { src: cp_day1_slide05, alt: '露天風呂' },
        },
        {
          time: '20:30',
          thumbnailTitle: '星空観察',
          detailTitle: '星空観察',
          description:
            '西湖の夜空は、驚くほど星が多い。並んで見上げるだけの時間が、意外と長く感じられます。',
          image: { src: cp_day1_slide06, alt: '星空観察' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '静かな夜の中で、二人だけの特別な時間を過ごします。',
          image: { src: cp_day1_slide07, alt: '客室の様子' },
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
            '誰もいない早朝の湖。風のない朝は、水面に逆さ富士が映ります。',
          image: { src: cp_day2_slide01, alt: '早朝の西湖' },
        },
        {
          time: '7:30',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '窓から森を眺めながらの朝食。二日目の予定を相談する時間でもあります。',
          image: { src: cp_day2_slide02, alt: '朝食の様子' },
        },
        {
          time: '9:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて、荷物を預けます。まだ帰りません。',
          image: { src: cp_day2_slide03, alt: 'チェックアウト' },
        },
        {
          time: '10:00',
          thumbnailTitle: '二人でSUP',
          detailTitle: '二人でSUP',
          description:
            '水の上に立つと、視線の高さが変わります。並んで漕ぐ、静かな時間。',
          image: { src: cp_day2_slide04, alt: '西湖でのSUP体験' },
        },
        {
          time: '12:00',
          thumbnailTitle: '二人の写真を残す',
          detailTitle: '二人の写真を残す',
          description:
            '美しい自然を背景に、二人の思い出を写真に残します。',
          image: { src: cp_day2_slide05, alt: '湖畔での記念撮影' },
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
    '日常の喧騒から離れて、心も体もリフレッシュできる贅沢な時間をお過ごしください。',
  thumbnail: 'リラクゼーションプランのサムネイル',
  hero: {
    subtitleHighlight: '非日常を',
    subtitleText: 'ゆったりと',
    mainTitle: ['日常から離れて', '心も体も', 'リフレッシュ'],
    description:
      '忙しい日常から離れて、自分だけの時間を大切にしたい方におすすめのプランです。温泉でのんびりと過ごしたり、自然の中で瞑想したり、読書を楽しんだり。時間を忘れて、心身ともにリフレッシュできる特別な時間をお過ごしください。',
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
          thumbnailTitle: '瞑想タイム',
          detailTitle: '瞑想タイム',
          description:
            '自然の中で瞑想。心を静めて、自分自身と向き合う時間です。',
          image: { src: rl_day1_slide02, alt: '瞑想タイム' },
        },
        {
          time: '16:30',
          thumbnailTitle: '温泉リラックス',
          detailTitle: '温泉リラックス',
          description:
            '千年をかけて湧き出た源泉に、ただ浸かる。それだけの時間を長めに取ります。',
          image: { src: rl_day1_slide03, alt: '温泉リラックス' },
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
          thumbnailTitle: '読書タイム',
          detailTitle: '読書タイム',
          description:
            '静かな空間で読書を楽しみます。普段読めない本をゆっくりと読み進めます。',
          image: { src: rl_day1_slide05, alt: '読書タイム' },
        },
        {
          time: '20:30',
          thumbnailTitle: '星空瞑想',
          detailTitle: '星空瞑想',
          description:
            '満天の星空の下で瞑想。宇宙の広がりを感じながら、心を静めます。',
          image: { src: rl_day1_slide06, alt: '星空瞑想' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '静かな夜の中で、深い眠りにつきます。',
          image: { src: rl_day1_slide07, alt: '客室' },
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
            '部屋を空けて、荷物を預けます。まだ森の時間は続きます。',
          image: { src: rl_day2_slide03, alt: 'チェックアウト' },
        },
        {
          time: '10:00',
          thumbnailTitle: '森林浴',
          detailTitle: '森林浴',
          description:
            '森の中を歩きます。目的地は決めず、足の向くままに。',
          image: { src: rl_day2_slide04, alt: '森林浴' },
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

// 4. 近隣観光メインで最高拠点に楽しみたい方
export const sightseeingPlan: StayPlan = {
  id: 'sightseeing',
  slug: 'sightseeing',
  title: '近隣観光メインで最高拠点に楽しみたい方',
  description:
    '富士山周辺の観光スポットを効率的に回りながら、ホテルを最高の拠点として活用するプランです。',
  thumbnail: '観光メインプランのサムネイル',
  hero: {
    subtitleHighlight: '近隣観光を',
    subtitleText: '最高拠点で',
    mainTitle: ['富士山周辺を', '効率的に', '満喫しよう'],
    description:
      '富士山周辺の観光スポットを効率的に回りながら、ホテルを最高の拠点として活用するプランです。富士急ハイランド、河口湖、忍野八海など、人気の観光地を巡りながら、ホテルでのんびりと過ごす時間も楽しめます。',
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
          time: '15:00',
          thumbnailTitle: 'チェックイン',
          detailTitle: 'チェックイン',
          description:
            '荷物を置いて、身軽に出かける準備をします。宿は観光の拠点として使えます。',
          image: { src: st_day1_slide01, alt: 'チェックイン' },
        },
        {
          time: '15:30',
          thumbnailTitle: '河口湖観光',
          detailTitle: '河口湖観光',
          description:
            '河口湖周辺を観光。美しい湖と富士山の景色を楽しみます。',
          image: { src: st_day1_slide02, alt: '河口湖の風景' },
        },
        {
          time: '16:30',
          thumbnailTitle: '忍野八海',
          detailTitle: '忍野八海',
          description:
            '富士の伏流水が湧く池を巡ります。水の透明度に驚かされる場所です。',
          image: { src: st_day1_slide03, alt: '湧水の池' },
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
          image: { src: st_day1_slide05, alt: '温泉' },
        },
        {
          time: '20:30',
          thumbnailTitle: '明日の計画を立てる',
          detailTitle: '明日の計画を立てる',
          description:
            '明日の観光計画を立てながら、ゆっくりと過ごします。',
          image: { src: st_day1_slide06, alt: '観光計画' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '明日の観光に備えて、しっかりと休みます。',
          image: { src: st_day1_slide07, alt: '客室' },
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
          time: '9:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '部屋を空けて荷物を預け、身軽に観光へ出ます。',
          image: { src: st_day2_slide02, alt: 'チェックアウト' },
        },
        {
          time: '10:00',
          thumbnailTitle: '富士急ハイランド',
          detailTitle: '富士急ハイランド',
          description:
            '車で30分ほどの遊園地へ。一日たっぷり遊べます。',
          image: { src: st_day2_slide03, alt: '遊園地へ向かう道' },
        },
        {
          time: '14:00',
          thumbnailTitle: '富士山世界遺産センター',
          detailTitle: '富士山世界遺産センター',
          description:
            '富士山の成り立ちと信仰の歴史を学びます。旅の締めくくりにふさわしい場所です。',
          image: { src: st_day2_slide04, alt: '富士山の眺め' },
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
    '雨の日だからこそ楽しめる、ホテル内での充実した過ごし方をご提案します。',
  thumbnail: '雨の日の過ごし方プランのサムネイル',
  hero: {
    subtitleHighlight: '雨の日でも',
    subtitleText: '特別な体験を',
    mainTitle: ['静かな、', '雨音と共に過ごす、', '特別なリラックスタイム'],
    description:
      '雨の日だからこそ、この場所は静かになります。露天風呂で雨に濡れた森の香りを吸い込み、薪サウナで火の音を聴き、屋根の下の炭火で食卓を囲む。雨音がBGMになる、ゆったりとした時間をお過ごしください。',
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
          thumbnailTitle: '雨の森を眺める',
          detailTitle: '雨の森を眺める',
          description:
            '窓の外は雨に濡れた西湖の森。急がずに荷を解いて、雨の日の時間の流れに身体を慣らします。',
          image: { src: rd_day1_slide02, alt: '雨に濡れた森' },
        },
        {
          time: '16:30',
          thumbnailTitle: '温泉でリラックス',
          detailTitle: '温泉でリラックス',
          description:
            '雨音を聞きながらの露天風呂は格別。雨に濡れた森の香りを感じながら、ゆったりと温泉を楽しみます。',
          image: { src: rd_day1_slide03, alt: '雨の日の温泉' },
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
          image: { src: rd_day1_slide05, alt: '森のサウナ小屋' },
        },
        {
          time: '21:00',
          thumbnailTitle: '雨音とともに',
          detailTitle: '雨音とともに',
          description:
            '部屋に戻り、静かな夜を過ごします。雨の日にしか聞こえない音があります。',
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
          image: { src: rd_day2_slide03, alt: 'チェックアウト' },
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
  sightseeingPlan, // 4. 近隣観光メインで最高拠点に楽しみたい方
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
