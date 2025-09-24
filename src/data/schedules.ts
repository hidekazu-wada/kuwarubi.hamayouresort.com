// スケジュールデータの型定義とデータ管理
// 1日の過ごし方のスケジュールデータと画像を統合管理するファイル

// 画像インポート
// family-nature - day1の画像
import fn_day1_slide01 from '../assets/images/enjoy/slide-day-1/slide-01.jpg';
import fn_day1_slide02 from '../assets/images/enjoy/slide-day-1/slide-02.jpg';
import fn_day1_slide03 from '../assets/images/enjoy/slide-day-1/slide-03.jpg';
import fn_day1_slide04 from '../assets/images/enjoy/slide-day-1/slide-04.jpg';
import fn_day1_slide05 from '../assets/images/enjoy/slide-day-1/slide-05.jpg';
import fn_day1_slide06 from '../assets/images/enjoy/slide-day-1/slide-06.jpg';
import fn_day1_slide07 from '../assets/images/enjoy/slide-day-1/slide-07.jpg';

// family-nature - day2の画像
import fn_day2_slide01 from '../assets/images/enjoy/slide-day-2/slide-01.jpg';
import fn_day2_slide02 from '../assets/images/enjoy/slide-day-2/slide-02.jpg';
import fn_day2_slide03 from '../assets/images/enjoy/slide-day-2/slide-03.jpg';
import fn_day2_slide04 from '../assets/images/enjoy/slide-day-2/slide-04.jpg';
import fn_day2_slide05 from '../assets/images/enjoy/slide-day-2/slide-05.jpg';
import fn_day2_slide06 from '../assets/images/enjoy/slide-day-2/slide-06.jpg';
import fn_day2_slide07 from '../assets/images/enjoy/slide-day-2/slide-07.jpg';

// family-nature - day3の画像
import fn_day3_slide01 from '../assets/images/enjoy/slide-day-3/slide-01.jpg';
import fn_day3_slide02 from '../assets/images/enjoy/slide-day-3/slide-02.jpg';
import fn_day3_slide03 from '../assets/images/enjoy/slide-day-3/slide-03.jpg';
import fn_day3_slide04 from '../assets/images/enjoy/slide-day-3/slide-04.jpg';
import fn_day3_slide05 from '../assets/images/enjoy/slide-day-3/slide-05.jpg';

// rainy-day - day1の画像
import rd_day1_slide01 from '../assets/images/enjoy/rainy-day-1/slide-01.jpg';
import rd_day1_slide02 from '../assets/images/enjoy/rainy-day-1/slide-02.jpg';
import rd_day1_slide03 from '../assets/images/enjoy/rainy-day-1/slide-03.jpg';
import rd_day1_slide04 from '../assets/images/enjoy/rainy-day-1/slide-04.jpg';
import rd_day1_slide05 from '../assets/images/enjoy/rainy-day-1/slide-05.jpg';
import rd_day1_slide06 from '../assets/images/enjoy/rainy-day-1/slide-06.jpg';
import rd_day1_slide07 from '../assets/images/enjoy/rainy-day-1/slide-07.jpg';

// rainy-day - day2の画像
import rd_day2_slide01 from '../assets/images/enjoy/rainy-day-2/slide-01.jpg';
import rd_day2_slide02 from '../assets/images/enjoy/rainy-day-2/slide-02.jpg';
import rd_day2_slide03 from '../assets/images/enjoy/rainy-day-2/slide-03.jpg';
import rd_day2_slide04 from '../assets/images/enjoy/rainy-day-2/slide-04.jpg';
import rd_day2_slide05 from '../assets/images/enjoy/rainy-day-2/slide-05.jpg';
import rd_day2_slide06 from '../assets/images/enjoy/rainy-day-2/slide-06.jpg';
import rd_day2_slide07 from '../assets/images/enjoy/rainy-day-2/slide-07.jpg';

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
  planId: string; // プランID（例: "family-nature", "rainy-day"）
  items: ScheduleItem[]; // スケジュールアイテムの配列
}

// 過ごし方プラン全体の型定義
export interface StayPlan {
  id: string; // 識別子（例: "family-nature", "rainy-day"）
  slug: string; // URLパス用（例: "family-nature", "rainy-day"）
  title: string; // 表示タイトル（例: "家族で自然を満喫", "雨の日の過ごし方"）
  description: string; // 説明文
  thumbnail: string; // サムネイル画像のalt
  days: DaySchedule[]; // 各日のスケジュール
}

// Family & Nature - Day 1のスケジュールデータ
export const familyNatureDay1Schedule: DaySchedule = {
  dayLabel: 'Day 1',
  dayId: 'day1',
  planId: 'family-nature',
  items: [
    {
      time: '15:00',
      thumbnailTitle: 'チェックイン',
      detailTitle: 'チェックイン',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide01,
        alt: 'チェックインカウンターの様子',
      },
    },
    {
      time: '15:30',
      thumbnailTitle: '周辺散歩',
      detailTitle: '周辺散歩',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide02,
        alt: '西湖湖畔の散歩道',
      },
    },
    {
      time: '16:00',
      thumbnailTitle: '森のサウナ',
      detailTitle: '森のサウナ',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide03,
        alt: '森のサウナ施設',
      },
    },
    {
      time: '18:00',
      thumbnailTitle: '夕　食',
      detailTitle: '夕　食',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide04,
        alt: '夕食の料理',
      },
    },
    {
      time: '19:00',
      thumbnailTitle: '入　浴',
      detailTitle: '入　浴',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide05,
        alt: '露天風呂',
      },
    },
    {
      time: '20:30',
      thumbnailTitle: 'ナイトハイク',
      detailTitle: 'ナイトハイク',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide06,
        alt: '星空観察の様子',
      },
    },
    {
      time: '22:00',
      thumbnailTitle: '就　寝',
      detailTitle: '就　寝',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        src: fn_day1_slide07,
        alt: '客室の様子',
      },
    },
  ],
};

// Family & Nature - Day 2のスケジュールデータ（デモ）
export const familyNatureDay2Schedule: DaySchedule = {
  dayLabel: 'Day 2',
  dayId: 'day2',
  planId: 'family-nature',
  items: [
    {
      time: '7:00',
      thumbnailTitle: '朝　食',
      detailTitle: '朝　食',
      description:
        '富士山の見える特等席で、地元食材をふんだんに使った朝食をお楽しみください。新鮮な卵と野菜、焼きたてのパンの香りが、素晴らしい一日の始まりを演出します。',
      image: {
        src: fn_day2_slide01,
        alt: '朝食バイキングの様子',
      },
    },
    {
      time: '8:30',
      thumbnailTitle: 'カヌー体験',
      detailTitle: 'カヌー体験',
      description:
        '穏やかな西湖の湖面をカヌーで進む、特別な体験です。湖上から見る富士山は格別で、水鳥たちとの出会いも楽しめます。インストラクターが丁寧に指導しますので、初心者でも安心です。',
      image: {
        src: fn_day2_slide02,
        alt: '西湖でのカヌー体験',
      },
    },
    {
      time: '10:00',
      thumbnailTitle: 'クラフト体験',
      detailTitle: 'クラフト体験',
      description:
        '地元の自然素材を使ったクラフト体験。松ぼっくりや木の実を使って、オリジナルのリースやオーナメントを作ります。お子様も大人も夢中になれる、創造的な時間です。',
      image: {
        src: fn_day2_slide03,
        alt: 'クラフト体験の様子',
      },
    },
    {
      time: '11:30',
      thumbnailTitle: 'チェックアウト',
      detailTitle: 'チェックアウト',
      description:
        '楽しい時間もあっという間。チェックアウト後も、ロビーでゆっくりとお過ごしいただけます。売店では地元の特産品もご用意しています。',
      image: {
        src: fn_day2_slide04,
        alt: 'チェックアウトカウンター',
      },
    },
    {
      time: '12:00',
      thumbnailTitle: '昼　食',
      detailTitle: '昼　食',
      description:
        '地元の郷土料理「ほうとう」をメインに、季節の野菜をたっぷり使った昼食です。大きな窓から見える自然の景色を楽しみながら、ゆったりとお食事をお楽しみください。',
      image: {
        src: fn_day2_slide05,
        alt: 'ほうとうと地元料理',
      },
    },
    {
      time: '13:30',
      thumbnailTitle: '富士急ハイランド',
      detailTitle: '富士急ハイランド',
      description:
        'チェックアウト後は、車で約30分の富士急ハイランドへ。絶叫マシンから家族向けアトラクションまで、年齢を問わず楽しめる人気スポットです。',
      image: {
        src: fn_day2_slide06,
        alt: '富士急ハイランドの風景',
      },
    },
    {
      time: '16:00',
      thumbnailTitle: '帰　路',
      detailTitle: '帰　路',
      description:
        '西湖での素敵な思い出を胸に、帰路へ。また季節を変えて、違った表情の西湖を楽しみにお越しください。スタッフ一同、またのお越しを心よりお待ちしています。',
      image: {
        src: fn_day2_slide07,
        alt: '夕暮れの西湖と富士山',
      },
    },
  ],
};

// 家族で自然を満喫プラン - 3日目のスケジュール
export const familyNatureDay3Schedule: DaySchedule = {
  dayLabel: 'Day 3',
  dayId: 'day3',
  planId: 'family-nature',
  items: [
    {
      time: '8:00',
      thumbnailTitle: '朝　食',
      detailTitle: '朝　食',
      description:
        '最終日の朝は、ゆったりとした時間を。地元の新鮮な食材で作った朝食で、一日のエネルギーをチャージ。富士山を眺めながら、旅の思い出を振り返ります。',
      image: {
        src: fn_day3_slide01,
        alt: '朝食の風景',
      },
    },
    {
      time: '10:00',
      thumbnailTitle: 'チェックアウト',
      detailTitle: 'チェックアウト',
      description:
        '素敵な思い出とともにチェックアウト。フロントスタッフが心を込めてお見送りいたします。次回のご来館をお待ちしております。',
      image: {
        src: fn_day3_slide02,
        alt: 'チェックアウト風景',
      },
    },
    {
      time: '11:00',
      thumbnailTitle: '富士山世界遺産センター',
      detailTitle: '富士山世界遺産センター',
      description:
        '富士山の文化的価値や自然の魅力を学べる施設へ。インタラクティブな展示で、富士山の歴史や信仰、芸術への影響を深く知ることができます。',
      image: {
        src: fn_day3_slide03,
        alt: '富士山世界遺産センター',
      },
    },
    {
      time: '13:00',
      thumbnailTitle: '昼　食',
      detailTitle: '昼　食',
      description:
        '地元の名物料理を堪能。富士宮やきそばやほうとうなど、山梨・静岡の郷土料理をお楽しみください。地域の食文化を体験する貴重な機会です。',
      image: {
        src: fn_day3_slide04,
        alt: '地元料理',
      },
    },
    {
      time: '15:00',
      thumbnailTitle: '帰　路',
      detailTitle: '帰　路',
      description:
        '3日間の素晴らしい思い出を胸に、帰路へ。富士五湖の自然、温泉、美食、そして心温まるおもてなし。また季節を変えて、ぜひお越しください。',
      image: {
        src: fn_day3_slide05,
        alt: '富士山と西湖の風景',
      },
    },
  ],
};

// 雨の日の過ごし方 - Day 1のスケジュールデータ
export const rainyDay1Schedule: DaySchedule = {
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
      image: {
        src: rd_day1_slide01,
        alt: 'チェックインカウンターの様子',
      },
    },
    {
      time: '15:30',
      thumbnailTitle: '屋内施設探索',
      detailTitle: '屋内施設探索',
      description:
        'ホテル内の施設をゆっくりと探索。ラウンジ、ライブラリー、展示コーナーなど、雨の日でも楽しめる施設が充実しています。',
      image: {
        src: rd_day1_slide02,
        alt: 'ホテル内ラウンジ',
      },
    },
    {
      time: '16:00',
      thumbnailTitle: '温泉でリラックス',
      detailTitle: '温泉でリラックス',
      description:
        '雨音を聞きながらの露天風呂は格別。雨に濡れた森の香りを感じながら、ゆったりと温泉を楽しみます。',
      image: {
        src: rd_day1_slide03,
        alt: '雨の日の温泉',
      },
    },
    {
      time: '18:00',
      thumbnailTitle: '夕　食',
      detailTitle: '夕　食',
      description:
        '地元の旬の食材を使った会席料理。窓の外の雨景色を眺めながら、ゆっくりとお食事を楽しんでいただけます。',
      image: {
        src: rd_day1_slide04,
        alt: '夕食の料理',
      },
    },
    {
      time: '19:30',
      thumbnailTitle: 'ボードゲーム',
      detailTitle: 'ボードゲーム',
      description:
        'ラウンジで家族や友人とボードゲーム。囲碁、将棋、トランプなど、様々なゲームをご用意しています。',
      image: {
        src: rd_day1_slide05,
        alt: 'ボードゲームの様子',
      },
    },
    {
      time: '20:30',
      thumbnailTitle: '星空シアター',
      detailTitle: '星空シアター',
      description:
        'プラネタリウムのような星空投影を楽しめる特別室。雨の日でも満天の星を堪能できます。',
      image: {
        src: rd_day1_slide06,
        alt: '星空シアター',
      },
    },
    {
      time: '22:00',
      thumbnailTitle: '就　寝',
      detailTitle: '就　寝',
      description:
        '雨音が心地よいBGMとなる静かな夜。ゆったりとした客室で、明日への活力を蓄えます。',
      image: {
        src: rd_day1_slide07,
        alt: '客室の様子',
      },
    },
  ],
};

// 雨の日の過ごし方 - Day 2のスケジュールデータ
export const rainyDay2Schedule: DaySchedule = {
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
      image: {
        src: rd_day2_slide01,
        alt: '朝食バイキング',
      },
    },
    {
      time: '9:30',
      thumbnailTitle: 'クラフト体験',
      detailTitle: 'クラフト体験',
      description:
        '屋内でできるクラフト体験。陶芸、絵付け、アクセサリー作りなど、雨の日だからこそじっくりと取り組めます。',
      image: {
        src: rd_day2_slide02,
        alt: 'クラフト体験の様子',
      },
    },
    {
      time: '11:00',
      thumbnailTitle: 'ライブラリー',
      detailTitle: 'ライブラリー',
      description:
        '静かなライブラリーで読書タイム。富士山や地域の歴史に関する本も充実しています。',
      image: {
        src: rd_day2_slide03,
        alt: 'ライブラリーの様子',
      },
    },
    {
      time: '12:00',
      thumbnailTitle: '昼　食',
      detailTitle: '昼　食',
      description:
        '雨の日限定の特別メニュー。温かいスープやほうとうなど、体が温まる料理をご用意しています。',
      image: {
        src: rd_day2_slide04,
        alt: '昼食の料理',
      },
    },
    {
      time: '13:30',
      thumbnailTitle: '屋内プール',
      detailTitle: '屋内プール',
      description:
        '温水の屋内プールで運動不足を解消。ジャグジーも併設されており、リラックスもできます。',
      image: {
        src: rd_day2_slide05,
        alt: '屋内プール',
      },
    },
    {
      time: '15:00',
      thumbnailTitle: 'ティータイム',
      detailTitle: 'ティータイム',
      description:
        'ラウンジでアフタヌーンティー。雨音を聞きながら、優雅なひとときをお過ごしください。',
      image: {
        src: rd_day2_slide06,
        alt: 'アフタヌーンティー',
      },
    },
    {
      time: '16:30',
      thumbnailTitle: 'チェックアウト準備',
      detailTitle: 'チェックアウト準備',
      description:
        '楽しい時間もあっという間。雨の日ならではの思い出を胸に、帰路の準備をします。',
      image: {
        src: rd_day2_slide07,
        alt: 'チェックアウト準備',
      },
    },
  ],
};

// 過ごし方プランのデータ定義
export const familyNaturePlan: StayPlan = {
  id: 'family-nature',
  slug: 'family-nature',
  title: '家族で自然を満喫',
  description:
    '富士山と西湖の美しい自然の中で、家族みんなで楽しめるアクティビティを満喫するプランです。',
  thumbnail: '家族で自然を満喫プランのサムネイル',
  days: [
    familyNatureDay1Schedule,
    familyNatureDay2Schedule,
    familyNatureDay3Schedule,
  ],
};

export const rainyDayPlan: StayPlan = {
  id: 'rainy-day',
  slug: 'rainy-day',
  title: '雨の日の過ごし方',
  description:
    '雨の日でも楽しめる、ホテル内での充実した過ごし方をご提案します。',
  thumbnail: '雨の日の過ごし方プランのサムネイル',
  days: [rainyDay1Schedule, rainyDay2Schedule],
};

// 全ての過ごし方プランを配列でエクスポート
export const allStayPlans: StayPlan[] = [familyNaturePlan, rainyDayPlan];

// プラン取得用のヘルパー関数
export function getStayPlanBySlug(slug: string): StayPlan | undefined {
  return allStayPlans.find((plan) => plan.slug === slug);
}

export function getAllStayPlanSlugs(): string[] {
  return allStayPlans.map((plan) => plan.slug);
}

// 後方互換性のための既存エクスポート（段階的に削除予定）
export const allDaySchedules: DaySchedule[] = [
  familyNatureDay1Schedule,
  familyNatureDay2Schedule,
  familyNatureDay3Schedule,
];

export const rainyDaySchedules: DaySchedule[] = [
  rainyDay1Schedule,
  rainyDay2Schedule,
];
