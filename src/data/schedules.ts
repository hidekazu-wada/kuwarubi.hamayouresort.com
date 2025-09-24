// スケジュールデータの型定義とデータ管理
// 1日の過ごし方のスケジュールデータを管理するファイル

// スケジュールアイテムの型定義
export interface ScheduleItem {
  time: string; // 時間（例: "15:00"）
  thumbnailTitle: string; // サムネイル用タイトル
  detailTitle: string; // 詳細用タイトル
  description: string; // 説明文
  image: {
    fileName: string; // 画像ファイル名（例: "slide-01.jpg"）
    alt: string; // 画像の代替テキスト
  };
}

// 1日のスケジュールデータの型定義
export interface DaySchedule {
  dayLabel: string; // 日付ラベル（例: "Day 1", "Day 2"）
  dayId: string; // ID（例: "day1", "day2"）
  items: ScheduleItem[]; // スケジュールアイテムの配列
}

// Day 1のスケジュールデータ
export const day1Schedule: DaySchedule = {
  dayLabel: 'Day 1',
  dayId: 'day1',
  items: [
    {
      time: '15:00',
      thumbnailTitle: 'チェックイン',
      detailTitle: 'チェックイン',
      description:
        '静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。',
      image: {
        fileName: 'slide-01.jpg',
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
        fileName: 'slide-02.jpg',
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
        fileName: 'slide-03.jpg',
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
        fileName: 'slide-04.jpg',
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
        fileName: 'slide-05.jpg',
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
        fileName: 'slide-06.jpg',
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
        fileName: 'slide-07.jpg',
        alt: '客室の様子',
      },
    },
  ],
};
