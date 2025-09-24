// スケジュールデータの型定義とデータ管理
// 1日の過ごし方のスケジュールデータを管理するファイル

// スケジュールアイテムの型定義
export interface ScheduleItem {
  time: string;                // 時間（例: "15:00"）
  thumbnailTitle: string;       // サムネイル用タイトル（schedule-slider__activity）
  detailTitle: string;          // 詳細用タイトル（schedule-slider__detail-title）
  description: string;          // 説明文
  image: {
    fileName: string;           // 画像ファイル名（例: "slide-01.jpg"）
    alt: string;               // 画像の代替テキスト
  };
}

// 1日のスケジュールデータの型定義
export interface DaySchedule {
  dayLabel: string;            // 日付ラベル（例: "Day 1", "Day 2"）
  dayId: string;               // ID（例: "day1", "day2"）
  items: ScheduleItem[];       // スケジュールアイテムの配列
}

// 過ごし方プラン全体の型定義
export interface StayPlan {
  id: string;                  // プランID（例: "family-nature"）
  slug: string;                // URLスラッグ（例: "family-nature"）
  title: string;               // プランタイトル（例: "子供と自然に触れ合う過ごし方"）
  description: string;         // プラン説明文
  thumbnail: string;           // サムネイル画像パス
  days: DaySchedule[];        // 各日のスケジュール配列
}

// family-nature（子供と自然に触れ合う）のデータ
const familyNatureData: DaySchedule[] = [
  {
    dayLabel: "Day 1",
    dayId: "day1",
    items: [
      {
        time: "15:00",
        thumbnailTitle: "チェックイン",
        detailTitle: "チェックイン",
        description: "静謐な西湖の湖畔に佇むホテルへ、木々のざわめきが出迎えてくれます。チェックインカウンターでは、清々しい山の空気と共に、穏やかなスタッフの笑顔がお待ちしています。荷物を預け、深呼吸一つで、日常のせわしなさが溶けていくのを感じていただけるはずです。",
        image: {
          fileName: "slide-01.jpg",
          alt: "チェックインカウンターの様子"
        }
      },
      {
        time: "15:30",
        thumbnailTitle: "周辺散歩",
        detailTitle: "湖畔の散歩道",
        description: "西湖の澄んだ水面を眺めながら、ゆったりとした散歩のひととき。富士山の裾野に広がる自然の息吹を感じながら、都会の喧騒から解放される贅沢な時間をお過ごしください。",
        image: {
          fileName: "slide-02.jpg",
          alt: "西湖湖畔の散歩道"
        }
      },
      {
        time: "16:00",
        thumbnailTitle: "森のサウナ",
        detailTitle: "森林浴サウナ体験",
        description: "木々に囲まれた特別なサウナ空間で、心身をリフレッシュ。フィンランド式の本格的なサウナと、富士山の伏流水を使った水風呂で、究極の「ととのい」体験をお楽しみください。",
        image: {
          fileName: "slide-03.jpg",
          alt: "森のサウナ施設"
        }
      },
      {
        time: "18:00",
        thumbnailTitle: "夕　食",
        detailTitle: "地産地消ディナー",
        description: "山梨の豊かな食材を活かした創作料理をご堪能ください。甲州ワインとともに、季節の恵みを五感で味わう特別なディナータイムをお過ごしいただけます。",
        image: {
          fileName: "slide-04.jpg",
          alt: "夕食の料理"
        }
      },
      {
        time: "19:00",
        thumbnailTitle: "入　浴",
        detailTitle: "温泉でゆったり",
        description: "富士山を望む露天風呂で、一日の疲れを癒すひととき。天然温泉の効能で心身ともにリラックスし、明日への活力を養ってください。",
        image: {
          fileName: "slide-05.jpg",
          alt: "露天風呂"
        }
      },
      {
        time: "20:30",
        thumbnailTitle: "ナイトハイク",
        detailTitle: "星空観察ナイトツアー",
        description: "都会では見ることのできない満天の星空を、専門ガイドとともに観察。天体望遠鏡を使って、季節の星座や惑星を間近に感じる特別な体験をお楽しみください。",
        image: {
          fileName: "slide-06.jpg",
          alt: "星空観察の様子"
        }
      },
      {
        time: "22:00",
        thumbnailTitle: "就　寝",
        detailTitle: "おやすみなさい",
        description: "森の静寂に包まれながら、心地よい眠りへ。明日の新しい一日に向けて、ゆっくりとお休みください。快適な寝具で質の高い睡眠をお約束します。",
        image: {
          fileName: "slide-07.jpg",
          alt: "客室の様子"
        }
      }
    ]
  },
  {
    dayLabel: "Day 2",
    dayId: "day2",
    items: [
      {
        time: "07:00",
        thumbnailTitle: "朝　食",
        detailTitle: "健康的な朝食",
        description: "地元の新鮮な野菜と卵を使った、身体に優しい朝食をご用意。一日の始まりにふさわしい、栄養バランスの取れたお食事をお楽しみください。",
        image: {
          fileName: "slide-08.jpg",
          alt: "朝食の様子"
        }
      },
      {
        time: "09:00",
        thumbnailTitle: "アクティビティ",
        detailTitle: "カヌー体験",
        description: "穏やかな西湖でカヌー体験。初心者でも安心して楽しめるよう、インストラクターが丁寧に指導いたします。水上から見る富士山の絶景をお楽しみください。",
        image: {
          fileName: "slide-09.jpg",
          alt: "カヌー体験"
        }
      },
      {
        time: "12:00",
        thumbnailTitle: "昼　食",
        detailTitle: "BBQランチ",
        description: "湖畔でのバーベキューランチ。地元の食材を使った贅沢なグリル料理を、開放的な空間でお楽しみいただけます。",
        image: {
          fileName: "slide-10.jpg",
          alt: "BBQランチ"
        }
      }
    ]
  }
];

// すべての過ごし方プランデータ
export const stayPlans: StayPlan[] = [
  {
    id: "family-nature",
    slug: "family-nature",
    title: "子供と自然に触れ合う過ごし方",
    description: "富士山の麓で、家族みんなで楽しむ自然体験。都会では味わえない特別な思い出を作りましょう。",
    thumbnail: "/images/enjoy/family-nature-thumb.jpg",
    days: familyNatureData
  }
  // 今後追加予定:
  // {
  //   id: "rainy-day",
  //   slug: "rainy-day",
  //   title: "雨の日の過ごし方",
  //   description: "雨の日でも楽しめる、室内アクティビティと癒しの時間。",
  //   thumbnail: "/images/enjoy/rainy-day-thumb.jpg",
  //   days: rainyDayData
  // }
];

// スラッグから過ごし方プランを取得
export function getStayPlanBySlug(slug: string): StayPlan | undefined {
  return stayPlans.find(plan => plan.slug === slug);
}

// すべての過ごし方プランのスラッグを取得
export function getAllStayPlanSlugs(): string[] {
  return stayPlans.map(plan => plan.slug);
}

// 画像パスを取得するヘルパー関数（更新版）
export function getScheduleImagePath(stayPlanId: string, dayId: string, fileName: string): string {
  // 例: /src/assets/images/enjoy/family-nature/day-1/slide-01.jpg
  const dayNumber = dayId.replace('day', '');
  return `/src/assets/images/enjoy/${stayPlanId}/day-${dayNumber}/${fileName}`;
}