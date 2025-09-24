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
}

// ============================================================
// 画像インポート（プラン別に整理）
// ============================================================

// 1. 子供と一緒に自然に触れたい方（Family Nature）
import family_nature_hero from '../assets/images/enjoy/family-nature/hero.jpg';
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

import fn_day3_slide01 from '../assets/images/enjoy/family-nature/day3/slide-01.jpg';
import fn_day3_slide02 from '../assets/images/enjoy/family-nature/day3/slide-02.jpg';
import fn_day3_slide03 from '../assets/images/enjoy/family-nature/day3/slide-03.jpg';
import fn_day3_slide04 from '../assets/images/enjoy/family-nature/day3/slide-04.jpg';
import fn_day3_slide05 from '../assets/images/enjoy/family-nature/day3/slide-05.jpg';

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
            '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。',
          image: { src: fn_day1_slide01, alt: 'チェックインカウンターの様子' },
        },
        {
          time: '15:30',
          thumbnailTitle: '周辺散歩',
          detailTitle: '周辺散歩',
          description:
            '家族でゆっくりと湖畔を散策。子どもたちは自然の音や香りを感じながら、新しい発見を楽しめます。',
          image: { src: fn_day1_slide02, alt: '西湖湖畔の散歩道' },
        },
        {
          time: '16:00',
          thumbnailTitle: '森のサウナ',
          detailTitle: '森のサウナ',
          description:
            '家族で楽しめる森のサウナ体験。自然の中でリラックスしながら、家族の時間を過ごします。',
          image: { src: fn_day1_slide03, alt: '森のサウナ施設' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '地元の新鮮な食材を使った家族向けの夕食。子どもたちも喜ぶメニューをご用意しています。',
          image: { src: fn_day1_slide04, alt: '夕食の料理' },
        },
        {
          time: '19:00',
          thumbnailTitle: '入　浴',
          detailTitle: '入　浴',
          description:
            '家族で温泉を楽しみます。露天風呂から見える自然の景色を家族みんなで眺めながら、ゆったりとした時間を過ごします。',
          image: { src: fn_day1_slide05, alt: '露天風呂' },
        },
        {
          time: '20:30',
          thumbnailTitle: 'ナイトハイク',
          detailTitle: 'ナイトハイク',
          description:
            '家族で星空観察。子どもたちにとっては初めての体験となる、満天の星空を楽しみます。',
          image: { src: fn_day1_slide06, alt: '星空観察の様子' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '自然の音を聞きながら、家族みんなでゆっくりと休みます。明日への期待を胸に、心地よい眠りにつきます。',
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
          time: '7:00',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '富士山を眺めながらの朝食。家族みんなで一日の始まりを迎えます。',
          image: { src: fn_day2_slide01, alt: '朝食バイキングの様子' },
        },
        {
          time: '8:30',
          thumbnailTitle: 'カヌー体験',
          detailTitle: 'カヌー体験',
          description:
            '家族でカヌー体験。湖上から見る富士山は格別で、子どもたちも大喜びです。',
          image: { src: fn_day2_slide02, alt: '西湖でのカヌー体験' },
        },
        {
          time: '10:00',
          thumbnailTitle: 'クラフト体験',
          detailTitle: 'クラフト体験',
          description:
            '自然素材を使ったクラフト体験。家族で協力して、思い出の作品を作ります。',
          image: { src: fn_day2_slide03, alt: 'クラフト体験の様子' },
        },
        {
          time: '11:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description:
            '楽しい時間もあっという間。家族みんなで素敵な思い出を持って帰路につきます。',
          image: { src: fn_day2_slide04, alt: 'チェックアウトカウンター' },
        },
      ],
    },
  ],
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
            '二人だけの特別な時間の始まり。静寂な湖畔で、心温まるおもてなしをお迎えします。',
          image: { src: cp_day1_slide01, alt: 'チェックインカウンターの様子' },
        },
        {
          time: '15:30',
          thumbnailTitle: '湖畔散策',
          detailTitle: '湖畔散策',
          description:
            '二人でゆっくりと湖畔を散策。手を繋いで歩く時間は、日常では味わえない特別な時間です。',
          image: { src: cp_day1_slide02, alt: '湖畔での散策' },
        },
        {
          time: '16:00',
          thumbnailTitle: 'プライベートサウナ',
          detailTitle: 'プライベートサウナ',
          description:
            '二人だけのプライベートサウナ体験。静寂の中で、心も体もリラックスできます。',
          image: { src: cp_day1_slide03, alt: 'プライベートサウナ' },
        },
        {
          time: '18:00',
          thumbnailTitle: 'ロマンチックディナー',
          detailTitle: 'ロマンチックディナー',
          description:
            '富士山を眺めながらの特別なディナー。地元の食材を使った上質な料理をお楽しみください。',
          image: { src: cp_day1_slide04, alt: 'ロマンチックディナー' },
        },
        {
          time: '19:00',
          thumbnailTitle: 'カップル温泉',
          detailTitle: 'カップル温泉',
          description:
            '二人だけの温泉タイム。星空の下で、心も体も温まる特別な時間を過ごします。',
          image: { src: cp_day1_slide05, alt: 'カップル温泉' },
        },
        {
          time: '20:30',
          thumbnailTitle: '星空観察',
          detailTitle: '星空観察',
          description:
            '二人で星空を眺める時間。満天の星の下で、特別な夜を過ごします。',
          image: { src: cp_day1_slide06, alt: '星空観察' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description: '静寂な夜の中で、二人だけの特別な時間を過ごします。',
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
          time: '7:00',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '富士山を眺めながらの朝食。二人で一日の始まりを迎えます。',
          image: { src: cp_day2_slide01, alt: '朝食の様子' },
        },
        {
          time: '8:30',
          thumbnailTitle: 'カップルカヌー',
          detailTitle: 'カップルカヌー',
          description:
            '二人でカヌー体験。湖上で過ごす時間は、特別な思い出になります。',
          image: { src: cp_day2_slide02, alt: 'カップルカヌー体験' },
        },
        {
          time: '10:00',
          thumbnailTitle: 'フォトセッション',
          detailTitle: 'フォトセッション',
          description: '美しい自然を背景に、二人の思い出を写真に残します。',
          image: { src: cp_day2_slide03, alt: 'フォトセッション' },
        },
        {
          time: '11:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description: '素敵な思い出とともに、二人の特別な時間が終わります。',
          image: { src: cp_day2_slide04, alt: 'チェックアウト' },
        },
      ],
    },
  ],
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
            '静寂な空間で、ゆったりとした時間の始まり。日常の喧騒から離れて、心を落ち着けます。',
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
          time: '16:00',
          thumbnailTitle: '温泉リラックス',
          detailTitle: '温泉リラックス',
          description:
            'ゆったりと温泉でリラックス。時間を忘れて、心も体も癒されます。',
          image: { src: rl_day1_slide03, alt: '温泉リラックス' },
        },
        {
          time: '18:00',
          thumbnailTitle: '静寂な夕食',
          detailTitle: '静寂な夕食',
          description:
            '静寂の中で、ゆっくりと夕食を楽しみます。味わい深い時間を過ごします。',
          image: { src: rl_day1_slide04, alt: '静寂な夕食' },
        },
        {
          time: '19:00',
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
          description: '静寂な夜の中で、深い眠りにつきます。',
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
          time: '7:00',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '自然の中でゆっくりと朝食。一日の始まりを静かに迎えます。',
          image: { src: rl_day2_slide01, alt: '朝食' },
        },
        {
          time: '8:30',
          thumbnailTitle: 'ヨガセッション',
          detailTitle: 'ヨガセッション',
          description: '自然の中でヨガ。心と体を整えて、新たな一日を迎えます。',
          image: { src: rl_day2_slide02, alt: 'ヨガセッション' },
        },
        {
          time: '10:00',
          thumbnailTitle: '森林浴',
          detailTitle: '森林浴',
          description:
            '森の中で森林浴。自然のエネルギーを体いっぱいに感じます。',
          image: { src: rl_day2_slide03, alt: '森林浴' },
        },
        {
          time: '11:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description: 'リフレッシュした心と体で、日常に戻ります。',
          image: { src: rl_day2_slide04, alt: 'チェックアウト' },
        },
      ],
    },
  ],
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
            '観光の拠点となるホテルにチェックイン。効率的な観光の準備を整えます。',
          image: { src: st_day1_slide01, alt: 'チェックイン' },
        },
        {
          time: '15:30',
          thumbnailTitle: '河口湖観光',
          detailTitle: '河口湖観光',
          description: '河口湖周辺を観光。美しい湖と富士山の景色を楽しみます。',
          image: { src: st_day1_slide02, alt: '河口湖観光' },
        },
        {
          time: '16:00',
          thumbnailTitle: '忍野八海',
          detailTitle: '忍野八海',
          description: '忍野八海を観光。澄んだ湧水と美しい自然を楽しみます。',
          image: { src: st_day1_slide03, alt: '忍野八海' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '観光の疲れを癒す、地元の美味しい料理をお楽しみください。',
          image: { src: st_day1_slide04, alt: '夕食' },
        },
        {
          time: '19:00',
          thumbnailTitle: '温泉でリフレッシュ',
          detailTitle: '温泉でリフレッシュ',
          description: '観光の疲れを温泉で癒します。明日への活力を蓄えます。',
          image: { src: st_day1_slide05, alt: '温泉' },
        },
        {
          time: '20:30',
          thumbnailTitle: '観光計画',
          detailTitle: '観光計画',
          description: '明日の観光計画を立てながら、ゆっくりと過ごします。',
          image: { src: st_day1_slide06, alt: '観光計画' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description: '明日の観光に備えて、しっかりと休みます。',
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
          description: '観光の一日を始める朝食。エネルギーをチャージします。',
          image: { src: st_day2_slide01, alt: '朝食' },
        },
        {
          time: '8:30',
          thumbnailTitle: '富士急ハイランド',
          detailTitle: '富士急ハイランド',
          description:
            '富士急ハイランドで一日中楽しみます。絶叫マシンから家族向けアトラクションまで。',
          image: { src: st_day2_slide02, alt: '富士急ハイランド' },
        },
        {
          time: '10:00',
          thumbnailTitle: '富士山世界遺産センター',
          detailTitle: '富士山世界遺産センター',
          description:
            '富士山の文化的価値を学べる施設を観光。歴史と文化に触れます。',
          image: { src: st_day2_slide03, alt: '富士山世界遺産センター' },
        },
        {
          time: '11:30',
          thumbnailTitle: 'チェックアウト',
          detailTitle: 'チェックアウト',
          description: '充実した観光を終えて、ホテルをチェックアウト。',
          image: { src: st_day2_slide04, alt: 'チェックアウト' },
        },
      ],
    },
  ],
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
      '雨の日だからこそ楽しめる、ホテル内での特別な体験をご提案します。温かい温泉でリラックスしたり、静かなライブラリーで読書を楽しんだり、家族や友人とボードゲームを楽しんだり。雨音が心地よいBGMとなる、ゆったりとした時間をお過ごしください。',
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
          thumbnailTitle: '屋内施設探索',
          detailTitle: '屋内施設探索',
          description:
            'ホテル内の施設をゆっくりと探索。ラウンジ、ライブラリー、展示コーナーなど、雨の日でも楽しめる施設が充実しています。',
          image: { src: rd_day1_slide02, alt: 'ホテル内ラウンジ' },
        },
        {
          time: '16:00',
          thumbnailTitle: '温泉でリラックス',
          detailTitle: '温泉でリラックス',
          description:
            '雨音を聞きながらの露天風呂は格別。雨に濡れた森の香りを感じながら、ゆったりと温泉を楽しみます。',
          image: { src: rd_day1_slide03, alt: '雨の日の温泉' },
        },
        {
          time: '18:00',
          thumbnailTitle: '夕　食',
          detailTitle: '夕　食',
          description:
            '地元の旬の食材を使った会席料理。窓の外の雨景色を眺めながら、ゆっくりとお食事を楽しんでいただけます。',
          image: { src: rd_day1_slide04, alt: '夕食の料理' },
        },
        {
          time: '19:30',
          thumbnailTitle: 'ボードゲーム',
          detailTitle: 'ボードゲーム',
          description:
            'ラウンジで家族や友人とボードゲーム。囲碁、将棋、トランプなど、様々なゲームをご用意しています。',
          image: { src: rd_day1_slide05, alt: 'ボードゲームの様子' },
        },
        {
          time: '20:30',
          thumbnailTitle: '星空シアター',
          detailTitle: '星空シアター',
          description:
            'プラネタリウムのような星空投影を楽しめる特別室。雨の日でも満天の星を堪能できます。',
          image: { src: rd_day1_slide06, alt: '星空シアター' },
        },
        {
          time: '22:00',
          thumbnailTitle: '就　寝',
          detailTitle: '就　寝',
          description:
            '雨音が心地よいBGMとなる静かな夜。ゆったりとした客室で、明日への活力を蓄えます。',
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
          time: '8:00',
          thumbnailTitle: '朝　食',
          detailTitle: '朝　食',
          description:
            '雨に濡れた庭園を眺めながらの朝食。地元の新鮮な食材で作った和洋バイキングをお楽しみください。',
          image: { src: rd_day2_slide01, alt: '朝食バイキング' },
        },
        {
          time: '9:30',
          thumbnailTitle: 'クラフト体験',
          detailTitle: 'クラフト体験',
          description:
            '屋内でできるクラフト体験。陶芸、絵付け、アクセサリー作りなど、雨の日だからこそじっくりと取り組めます。',
          image: { src: rd_day2_slide02, alt: 'クラフト体験の様子' },
        },
        {
          time: '11:00',
          thumbnailTitle: 'ライブラリー',
          detailTitle: 'ライブラリー',
          description:
            '静かなライブラリーで読書タイム。富士山や地域の歴史に関する本も充実しています。',
          image: { src: rd_day2_slide03, alt: 'ライブラリーの様子' },
        },
        {
          time: '12:00',
          thumbnailTitle: '昼　食',
          detailTitle: '昼　食',
          description:
            '雨の日限定の特別メニュー。温かいスープやほうとうなど、体が温まる料理をご用意しています。',
          image: { src: rd_day2_slide04, alt: '昼食の料理' },
        },
        {
          time: '13:30',
          thumbnailTitle: '屋内プール',
          detailTitle: '屋内プール',
          description:
            '温水の屋内プールで運動不足を解消。ジャグジーも併設されており、リラックスもできます。',
          image: { src: rd_day2_slide05, alt: '屋内プール' },
        },
        {
          time: '15:00',
          thumbnailTitle: 'ティータイム',
          detailTitle: 'ティータイム',
          description:
            'ラウンジでアフタヌーンティー。雨音を聞きながら、優雅なひとときをお過ごしください。',
          image: { src: rd_day2_slide06, alt: 'アフタヌーンティー' },
        },
        {
          time: '16:30',
          thumbnailTitle: 'チェックアウト準備',
          detailTitle: 'チェックアウト準備',
          description:
            '楽しい時間もあっという間。雨の日ならではの思い出を胸に、帰路の準備をします。',
          image: { src: rd_day2_slide07, alt: 'チェックアウト準備' },
        },
      ],
    },
  ],
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
