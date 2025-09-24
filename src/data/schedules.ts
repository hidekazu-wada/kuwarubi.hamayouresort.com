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
