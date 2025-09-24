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
