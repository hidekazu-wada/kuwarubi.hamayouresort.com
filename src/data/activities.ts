// アクティビティデータ
//
// microCMS から切り離し、サイト内で管理する形にしたもの。
// 画像は src/assets/images/activities/<slug>/ に置き、ImageMetadata としてインポートする
// （Astro のビルド時最適化に乗せるため。文字列パスのままでは最適化されない）。
//
// 追加するとき:
//   1. src/assets/images/activities/<新slug>/ に gallery-01.jpg... と point-bg.jpg を置く
//   2. 下の import に追記する
//   3. activities 配列に1件足す
//   ページ側は src/lib/activitiesAPI.ts 経由で読むので、他の変更は不要。

import type { ImageMetadata } from 'astro';

import senoumiTourSaikoImg01 from '../assets/images/activities/senoumi-tour-saiko/gallery-01.jpg';
import senoumiTourSaikoImg02 from '../assets/images/activities/senoumi-tour-saiko/gallery-02.jpg';
import senoumiTourSaikoImg03 from '../assets/images/activities/senoumi-tour-saiko/gallery-03.jpg';
import senoumiTourSaikoImg04 from '../assets/images/activities/senoumi-tour-saiko/gallery-04.jpg';
import senoumiTourSaikoImg05 from '../assets/images/activities/senoumi-tour-saiko/gallery-05.jpg';
import senoumiTourSaikoImg06 from '../assets/images/activities/senoumi-tour-saiko/gallery-06.jpg';
import senoumiTourSaikoImg07 from '../assets/images/activities/senoumi-tour-saiko/gallery-07.jpg';
import pedalBoardsImg01 from '../assets/images/activities/pedal-boards/gallery-01.jpg';
import pedalBoardsImg02 from '../assets/images/activities/pedal-boards/gallery-02.jpg';
import pedalBoardsImg03 from '../assets/images/activities/pedal-boards/gallery-03.jpg';
import pedalBoardsImg04 from '../assets/images/activities/pedal-boards/gallery-04.jpg';
import pedalBoardsImg05 from '../assets/images/activities/pedal-boards/gallery-05.jpg';
import pedalBoardsPointBg from '../assets/images/activities/pedal-boards/point-bg.jpg';
import kayakRentalToursImg01 from '../assets/images/activities/kayak-rental-tours/gallery-01.jpg';
import kayakRentalToursImg02 from '../assets/images/activities/kayak-rental-tours/gallery-02.jpg';
import kayakRentalToursImg03 from '../assets/images/activities/kayak-rental-tours/gallery-03.jpg';
import hotSpringBathAndForestSaunaHutImg01 from '../assets/images/activities/hot-spring-bath-and-forest-sauna-hut/gallery-01.jpg';
import hotSpringBathAndForestSaunaHutImg02 from '../assets/images/activities/hot-spring-bath-and-forest-sauna-hut/gallery-02.jpg';
import carSaunaImg01 from '../assets/images/activities/car-sauna/gallery-01.jpg';
import carSaunaImg02 from '../assets/images/activities/car-sauna/gallery-02.jpg';
import carSaunaImg03 from '../assets/images/activities/car-sauna/gallery-03.jpg';
import carSaunaImg04 from '../assets/images/activities/car-sauna/gallery-04.jpg';
import carSaunaImg05 from '../assets/images/activities/car-sauna/gallery-05.jpg';
import carSaunaImg06 from '../assets/images/activities/car-sauna/gallery-06.jpg';
import carSaunaPointBg from '../assets/images/activities/car-sauna/point-bg.jpg';
import supEarlyMorningPrivateTourImg01 from '../assets/images/activities/sup-early-morning-private-tour/gallery-01.jpg';
import supEarlyMorningPrivateTourImg02 from '../assets/images/activities/sup-early-morning-private-tour/gallery-02.jpg';
import supEarlyMorningPrivateTourImg03 from '../assets/images/activities/sup-early-morning-private-tour/gallery-03.jpg';
import supRentalImg01 from '../assets/images/activities/sup-rental/gallery-01.jpg';
import supRentalImg02 from '../assets/images/activities/sup-rental/gallery-02.jpg';
import supRentalImg03 from '../assets/images/activities/sup-rental/gallery-03.jpg';
import supRentalImg04 from '../assets/images/activities/sup-rental/gallery-04.jpg';
import supRentalImg05 from '../assets/images/activities/sup-rental/gallery-05.jpg';
import supRentalImg06 from '../assets/images/activities/sup-rental/gallery-06.jpg';
import supRentalImg07 from '../assets/images/activities/sup-rental/gallery-07.jpg';
import supRentalImg08 from '../assets/images/activities/sup-rental/gallery-08.jpg';
import supRentalPointBg from '../assets/images/activities/sup-rental/point-bg.jpg';
import aokigaharaForestEarlyMorningPrivateTourImg01 from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/gallery-01.jpg';
import aokigaharaForestEarlyMorningPrivateTourImg02 from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/gallery-02.jpg';
import aokigaharaForestEarlyMorningPrivateTourImg03 from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/gallery-03.jpg';
import aokigaharaForestEarlyMorningPrivateTourImg04 from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/gallery-04.jpg';
import aokigaharaForestEarlyMorningPrivateTourImg05 from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/gallery-05.jpg';
import aokigaharaForestEarlyMorningPrivateTourPointBg from '../assets/images/activities/aokigahara-forest-early-morning-private-tour/point-bg.jpg';
import aokigaharaForestPrivateTourImg01 from '../assets/images/activities/aokigahara-forest-private-tour/gallery-01.jpg';
import aokigaharaForestPrivateTourImg02 from '../assets/images/activities/aokigahara-forest-private-tour/gallery-02.jpg';
import aokigaharaForestPrivateTourImg03 from '../assets/images/activities/aokigahara-forest-private-tour/gallery-03.jpg';
import aokigaharaForestPrivateTourImg04 from '../assets/images/activities/aokigahara-forest-private-tour/gallery-04.jpg';
import aokigaharaForestPrivateTourImg05 from '../assets/images/activities/aokigahara-forest-private-tour/gallery-05.jpg';
import aokigaharaForestPrivateTourPointBg from '../assets/images/activities/aokigahara-forest-private-tour/point-bg.jpg';

export type CatchphraseColor = 'white' | 'blue';
export type FilterWeather = 'all' | 'sunny' | 'light-rain' | 'rainy';
export type FilterDifficulty = '初心者向け' | '中級者向け' | '上級者向け';
export type FilterAgeGroup =
  | 'adults-only'
  | 'all-ages'
  | 'ages-3-and-up'
  | 'elementary-school-and-up'
  | 'middle-school-and-up';
export type Badge = '事前予約' | '当日予約' | '団体向け' | '個人向け';

export interface Activity {
  slug: string;
  title: string;
  category: string;

  gallery: ImageMetadata[];
  pointBackgroundImage: ImageMetadata;

  // TOPページ表示
  showOnTop: boolean;
  topPageCatchphrase: string;
  catchphraseColor: CatchphraseColor;
  displayOrder: number;

  // 詳細コンテンツ
  introTitleLine1: string;
  introTitleLine2?: string;
  introText: string;
  pointTitleLine1: string;
  pointTitleLine2?: string;
  pointDescription: string;

  displayInfo: Array<{ term: string; description: string; note?: string }>;
  flow: Array<{ stepNumber: string; title: string; description: string }>;
  reservation: Array<{ label: string; value: string; link: string; hours: string }>;
  badges: Badge[];

  // メタ・絞り込み
  isPopular: boolean;
  basePrice: number;
  filterDurationHours?: number;
  filterWeather: FilterWeather;
  filterSeasons: string[];
  filterDifficulty: FilterDifficulty;
  filterAgeGroup: FilterAgeGroup;
}

export const activities: Activity[] = [
  {
    slug: "senoumi-tour-saiko",
    title: "せのうみツアー【西湖】",
    category: "LAKE SAIKO",

    gallery: [senoumiTourSaikoImg01, senoumiTourSaikoImg02, senoumiTourSaikoImg03, senoumiTourSaikoImg04, senoumiTourSaikoImg05, senoumiTourSaikoImg06, senoumiTourSaikoImg07],
    pointBackgroundImage: senoumiTourSaikoImg04,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "富士の記憶を歩く",
    catchphraseColor: "white",
    displayOrder: 9,

    // 詳細コンテンツ
    introTitleLine1: "湖と樹海",
    introTitleLine2: "五感でめぐる旅",
    introText: "SUPで静かな湖を渡り、風を切って自転車で樹海を駆け抜け、足で山を登る。\nこのツアーは、富士の自然をあらゆる角度から体感するアクティブな1日です。\n水面に映る逆さ富士、溶岩流が刻んだ地形、森の静寂、洞窟に満ちる冷気——。\n車では決して味わえない、地球の鼓動と人の力が響きあう時間がここにあります。",
    pointTitleLine1: "樹海と富士を",
    pointTitleLine2: "“内側から”味わう旅",
    pointDescription: "富士の麓に広がる西湖と樹海を、五感を使って歩くツアー。\n湖上では風と水の透明感を、自転車では森の香りを、\n登山では富士を望む絶景を味わいます。\nただ眺めるのではなく、「感じる」ことでしか出会えない自然があります。\n運動が苦手な方でも安心、ペースは自由に楽しめます。",

    displayInfo: [
      { term: "人数", description: "<p>2名〜</p>" },
      { term: "開催時間", description: "<p>8：00～13：00（集合7：30）</p>" },
      { term: "集合場所", description: "<p>キャンプビレッジＧＮＯＭＥ管理棟</p>" },
      { term: "参加費", description: "<p>12,000円～</p>" },
      { term: "持ち物", description: "<p>動きやすい服装・くつ</p>" },
      { term: "備考", description: "<p>途中あたたかい飲物をご用意しております。</p><p>必要な方は軽食をお持ちください。</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "SUPの漕ぎ方や注意点のご案内をします。" },
      { stepNumber: "STEP 3", title: "体験", description: "SUP・自転車・登山で様々な角度から樹海を巡ります。" },
      { stepNumber: "STEP 4", title: "終了", description: "出発地点に戻って終了です。" },
    ],
    reservation: [
      { label: "Email", value: "準備中", link: "準備中", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 12000,
    filterDurationHours: 5,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "middle-school-and-up",
  },
  {
    slug: "pedal-boards",
    title: "Pedal Boards",
    category: "LAKE SAIKO",

    gallery: [pedalBoardsImg01, pedalBoardsImg02, pedalBoardsImg03, pedalBoardsImg04, pedalBoardsImg05],
    pointBackgroundImage: pedalBoardsPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "湖上の自由体験",
    catchphraseColor: "blue",
    displayOrder: 8,

    // 詳細コンテンツ
    introTitleLine1: "ペダルで進む",
    introTitleLine2: "静けさの冒険",
    introText: "カリフォルニア生まれのHOBIEがもたらす、全く新しい湖上の楽しみ方。足で漕ぐペダル式カヤックは、自然の音を邪魔せず、風と一緒に進む優しい乗り物です。力を抜いても前へ進む、そんな心地よいリズムの中で、西湖の静寂と富士の景色を体いっぱいに味わえます。",
    pointTitleLine1: "初心者も",
    pointTitleLine2: "安心の安定感",
    pointDescription: "安定性の高い設計で、初めての方でも安心。倒れる心配がほとんどなく、ペット同乗も可能です。ゆっくりと進むからこそ、湖面に映る空や山の色の変化をじっくり楽しめます。穏やかな湖上で、誰もがリラックスして自然と触れ合える体験です。",

    displayInfo: [
      { term: "人数", description: "<p>1名～</p>" },
      { term: "レンタルメニュー", description: "<p><strong>Eclipse（1名乗り）</strong><br>足漕ぎSUPで湖の上を散歩してみよう！<br>60分　1艇　6,600円（税込）<br>※Eclipseを始めてレンタルされる方はツアープランをご利用ください。<br>※ご希望の場合はウェットスーツ【1,100円（税込）】をお貸出しいたします。</p><hr><p><strong>Passport/Compass（1名乗り）</strong><br>初心者にもオススメの1人乗りカヤック<strong><br></strong>60分　1艇　6,600円（税込）<br>※ペット同乗可　追加料金：1,100円（税込）</p><hr><p><strong>Compass DUO（2名乗り）</strong><br>誰でも簡単に乗れる2人乗り足漕ぎカヤック<br>60分　1艇　8,800円（税込）<br>※ペット同乗可　追加料金：1,100円（税込）</p><hr><p><strong>Fiesta（4名乗り）</strong><br>仲間や家族とみんなで乗れる大型ボート<br>60分　1艇　13,200円（税込）<br>※110cm以下のお子様、もしくはペット同乗可　追加料金：1,100円（税込）</p><p></p><p></p>" },
      { term: "ツアーメニュー", description: "<p>ガイド付き西湖上散歩ツアー。おすすめ湖上スポットをご案内します！</p><p><strong>Adventure Island（3名乗り）</strong><br>風の力だけで水面をすべる初体験！<br>60分　1艇　16,500円（税込）</p>", note: "110cm以下のお子様、もしくはペット同乗可　追加料金：1,100円（税込）" },
      { term: "持ち物", description: "<p>汚れても良い服装・靴</p>" },
      { term: "営業日", description: "<p>4月：土日祝<br>5～7月：金土日祝<br>8月：毎日<br>9～11月：金土日祝</p>" },
      { term: "営業時間", description: "<p>8：00～17：30<br>※金曜　12：00～17：30</p>" },
      { term: "その他", description: "<p>光風閣くわるび、キャンプビレッジGNOMEご宿泊以外のお客様は施設使用料として550円がかかります。</p>" },
      { term: "主催", description: "<p>HOBIE JAPAN（アミューズ）</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "漕ぎ方や注意点のご案内をします。" },
      { stepNumber: "STEP 3", title: "体験", description: "湖上を散策します。" },
      { stepNumber: "STEP 4", title: "終了", description: "着替えて終了です。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ", link: "https://hobiejapan.com/product-category/booking-product/", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 5500,
    filterDurationHours: 1.5,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "all-ages",
  },
  {
    slug: "kayak-rental-tours",
    title: "カヤックレンタル & ツアー",
    category: "LAKE SAIKO",

    gallery: [kayakRentalToursImg01, kayakRentalToursImg02, kayakRentalToursImg03],
    pointBackgroundImage: kayakRentalToursImg02,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "心が澄む体験",
    catchphraseColor: "white",
    displayOrder: 7,

    // 詳細コンテンツ
    introTitleLine1: "富士の静寂に",
    introTitleLine2: "漕ぎ出す",
    introText: "富士五湖のひとつ・西湖。深い青に包まれたその湖は、季節ごとにまったく異なる表情を見せます。\n早朝の霧、夏のきらめき、秋の紅葉──。カヤックを漕ぐたびに、自然が語りかけてくるようです。\nこのツアーでは、富士山の成り立ちや樹海の物語にも触れながら、五感で西湖を感じる特別な時間へ。\n静かな水面に浮かびながら、自分自身のリズムを取り戻してみませんか。",
    pointTitleLine1: "カヤックでたどる",
    pointTitleLine2: "火山と森の物語",
    pointDescription: "このツアーでは、富士五湖の成り立ちや青木ヶ原樹海の物語など、地球の歴史を感じる旅へご案内。\nカヤックを漕ぎながら見える岩肌や溶岩帯には、火山の記憶が刻まれています。\n自然解説とともに、普段は見過ごしてしまう景色の意味に気づくはず。\n水面を渡る風とともに、学びと癒しの時間をお過ごしください。",

    displayInfo: [
      { term: "人数", description: "<p>2名〜</p>" },
      { term: "カヤックレンタル（すべてタンデム）", description: "<p>【１日　】<br>¥5,500/艇　<br>貸切時間 <br>10:00amのみ</p><hr><p>【オーバーナイト】<br>¥5,500/艇　<br>貸切時間 <br>16:00～翌日9:30のみ</p><hr><p>【24h】<br>¥8,800/艇　<br>貸切時間　<br>10時から翌日9時半まで。もしくは16時から翌日15時半まで</p><hr><p>【ワンモアナイト】<br>¥11,000/艇　<br>貸切時間 <br>16:00～翌々日の9:30時に返却<br>（翌日の1日料金が無料で付いてくるお得なサービスです）</p><hr><p>【ロング・ウィークエンド】　<br>¥19,800/艇　<br>貸切時間　<br>72時間をマックスとして、チェックインからチェックアウトまで</p><hr><p>【イージーサンデー】期間限定<br>¥3,300/艇　<br>日曜日の午前中限定　<br>10時から12時まで。実施期間はお申し込み頂いた時点で、返信にてご案内します</p><hr>", note: "西湖キャンプビレッジGNOMEにご宿泊ではないお客様は施設使用料として550円がかかります。" },
      { term: "「5LAKES & MT」の西湖カヤックツアー", description: "<p>【早朝カヤックツアー＠西湖　】<br>4,620円/名　<br>5時45分集合</p><hr><p>【サンセットカヤックツアー＠西湖】<br>3,630円/名　<br>15時45分集合</p><hr><p>【テイスティング・パドル＠西湖　】<br>2,750円/名　<br>9時45分集合</p><hr>", note: "西湖キャンプビレッジGNOMEにご宿泊ではないお客様は施設使用料として550円がかかります。" },
      { term: "持ち物", description: "<p>濡れても良い服装</p><p>ウォーターシューズ</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "漕ぎ方や注意点のご案内をします。" },
      { stepNumber: "STEP 3", title: "体験", description: "湖上を散策します。" },
      { stepNumber: "STEP 4", title: "終了", description: "着替えて終了です。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ", link: "https://5lakesandmt.square.site", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 4400,
    filterDurationHours: 1,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "ages-3-and-up",
  },
  {
    slug: "hot-spring-bath-and-forest-sauna-hut",
    title: "源泉の湯と森のサウナ小屋",
    category: "IN DOOR",

    gallery: [hotSpringBathAndForestSaunaHutImg01, hotSpringBathAndForestSaunaHutImg02],
    pointBackgroundImage: hotSpringBathAndForestSaunaHutImg02,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "五感の再生",
    catchphraseColor: "white",
    displayOrder: 6,

    // 詳細コンテンツ
    introTitleLine1: "森が深呼吸する",
    introTitleLine2: "あなただけのサウナ時間",
    introText: "「サウナ」と聞くと、都会のスパや施設を思い浮かべるかもしれません。\nここ西湖の森では、その常識が静かに覆ります。薪のはぜる音、木漏れ日、そして1000年をめぐった源泉。\n人工の手を離れた自然の循環の中で、心と体がゆっくりと調和していく。\nこの場所で味わう“ととのい”は、日常から切り離された森の呼吸そのものです。",
    pointTitleLine1: "根羽杉が香る小屋で",
    pointTitleLine2: "五感がほどける時間",
    pointDescription: "長野県・根羽村の杉で造られたサウナ小屋は、木のぬくもりと香りに満ちた空間。\n薪ストーブの熱と、森の外気、地下1200mから湧く源泉の湯。\nすべてが自然のリズムで循環し、身体と心をやわらかく解きほぐします。\n人工的な刺激ではなく、地球の営みそのものに包まれるような“ととのい”を求める方へ。",

    displayInfo: [
      { term: "人数", description: "<p>6名</p>", note: "サウナ内の定員数" },
      { term: "受付場所", description: "<p>ホテル・フロント</p>" },
      { term: "実施時間", description: "<p>①9:00～12:00</p><p>②14:00～17:00</p><p>③18:00～21:00</p>", note: "ご予約時間の15分前には受付へお越しください" },
      { term: "料金詳細", description: "<p><strong>平日</strong></p><p>2名　9,900円（税込）</p><p>3名　13,750円（税込）</p><p>4名　16,500円（税込）<br><br><strong>土日、休前日</strong></p><p>2名　13,200円（税込）</p><p>3名　17,050円（税込）</p><p>4名　20,900円（税込）</p><p></p>", note: "5名以上は追加1名につき＋4,400円となります" },
      { term: "料金に含まれるもの", description: "<ul><li>森のサウナ小屋（3時間）</li><li>足湯（源泉掛け流し）</li><li>ハンモック</li><li>薪1束</li></ul>", note: "くわるびに、ご宿泊でない方は別途施設使用料（1,100円/人）" },
      { term: "持ち物", description: "<p>濡れても良い服装</p><p>サンダル</p><p>水着</p><p>お飲み物</p>" },
      { term: "取消料", description: "<p>当日　100％</p><p>1-3日前　80%</p><p>4-6日前　50%</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "使用方法をご案内いたします。" },
      { stepNumber: "STEP 3", title: "体験", description: "それぞれの楽しみ方で整います。" },
      { stepNumber: "STEP 4", title: "終了", description: "着替えて終了です。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ", link: "https://hamayouresort.rezio.shop/ja-JP/product/forestsauna", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 9900,
    filterDurationHours: 3,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "car-sauna",
    title: "サイコサイコー号（サウナカー）",
    category: "LAKE SAIKO",

    gallery: [carSaunaImg01, carSaunaImg02, carSaunaImg03, carSaunaImg04, carSaunaImg05, carSaunaImg06],
    pointBackgroundImage: carSaunaPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "五感のリセット",
    catchphraseColor: "blue",
    displayOrder: 5,

    // 詳細コンテンツ
    introTitleLine1: "整いは、風とともに",
    introText: "整う場所は、サウナの中だけじゃない。\n薪を焚べる手の感触、外気浴で見上げる空、湖のきらめき。\n軽トラに積んだ小さな木造サウナ「サイコサイコー号」は、\nどこまでも自由に“自分だけのととのい”を見つけられるHAMAYOUリゾートの新しい提案です。",
    pointTitleLine1: "湖畔も、森の庭も。",
    pointTitleLine2: "選べる2つのロケーション",
    pointDescription: "「サイコサイコー号」は、湖畔に停めれば開放的な青空サウナ、\nプライベートガーデンでは、ゲストだけの癒しの空間に。\n檜の桶風呂に浸かり、伏流水の冷たさで身体を引き締めれば、\n五感が研ぎ澄まされていくのを感じます。\nその日の気分と天候で選べる2つのロケーションが、\nサウナ時間をまるで“自然の中の瞑想”へと変えてくれます。",

    displayInfo: [
      { term: "人数", description: "<p>4名</p>", note: "サウナ内の定員数" },
      { term: "受付場所", description: "<p>ホテル・フロント</p>" },
      { term: "実施時間", description: "<p>①9:00～12:00</p><p>②14:00～17:00</p><p>③18:00～21:00</p>", note: "ご予約時間の15分前には受付へお越しください" },
      { term: "料金詳細", description: "<p><strong>平日</strong></p><p>2名　9,900円（税込）</p><p>3名　13,750円（税込）</p><p>4名　16,500円（税込）<br><br><strong>土日、休前日</strong></p><p>2名　13,200円（税込）</p><p>3名　17,050円（税込）</p><p>4名　20,900円（税込）</p>", note: "5名以上は追加1名につき＋4,400円となります" },
      { term: "料金に含まれるもの", description: "<ul><li>サウナカー（3時間）</li><li>ロウリュ用の桶</li><li>ひしゃく</li><li>インフィニティチェア（最大3脚）</li><li>薪1束</li><li>各ロケーションの備品使用料（桶の水風呂など）</li><li>設置場所のサイト料</li></ul>", note: "くわるび、またはノームに、ご宿泊でない方は別途施設使用料（1,100円/人）" },
      { term: "持ち物", description: "<p>濡れても良い服装</p><p>サンダル</p><p>水着</p><p>お飲み物</p>" },
      { term: "取消料", description: "<p>当日　100％</p><p>1-3日前　80%</p><p>4-6日前　50%</p>" },
      { term: "選べるロケーション", description: "<p><strong>湖畔サウナ</strong><br>大自然の中へダイブ！<br>西湖へのダイブは湖の水温が下がる晩秋から春先が特におすすめ！</p><p><strong>プライベートガーデン</strong><br>檜の桶の水風呂と展望デッキセット<br>地上約2.5メートルの展望デッキと檜で作った桶の水風呂のセット<br>桶風呂は富士山麓の檜を利用、優しい木の匂いに包まれます<br>御坂山塊の伏流水を組み上げた約16℃～17℃の最高の水風呂がお楽しみいただけます</p>" },
      { term: "Youtube", description: "<p><a href=\"https://youtu.be/VLM9vTziqrM\"><u>https://youtu.be/VLM9vTziqrM</u></a></p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "使用方法をご案内いたします。" },
      { stepNumber: "STEP 3", title: "体験", description: "それぞれの楽しみ方で整います。" },
      { stepNumber: "STEP 4", title: "終了", description: "着替えて終了です。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ", link: "https://hamayouresort.rezio.shop/ja-JP/product/sauna01", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 9900,
    filterDurationHours: 3,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "sup-early-morning-private-tour",
    title: "ＳＵＰ早朝プライベートツアー",
    category: "LAKE SAIKO",

    gallery: [supEarlyMorningPrivateTourImg01, supEarlyMorningPrivateTourImg02, supEarlyMorningPrivateTourImg03],
    pointBackgroundImage: supEarlyMorningPrivateTourImg01,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "心が澄む朝時間",
    catchphraseColor: "white",
    displayOrder: 4,

    // 詳細コンテンツ
    introTitleLine1: "一日のはじまりを",
    introTitleLine2: "湖で迎える",
    introText: "昼の喧騒が訪れる前、誰もいない湖面を独り占めできるのが早朝の特権。\n富士の稜線が光を帯びるころ、水面をすべるように進むＳＵＰ。\nそこには、ただのアクティビティではなく「自然と心が調律される時間」が流れています。\n静けさの中で、あなた自身の呼吸と自然のリズムがひとつになる体験をどうぞ。",
    pointTitleLine1: "一組限定",
    pointTitleLine2: "静けさを漕ぐ朝",
    pointDescription: "ＳＵＰの魅力は「静けさの中にある動き」。\nこの早朝ツアーでは、まだ風も波も眠る時間に、自然と調和する感覚を楽しめます。\nプライベートガイドが同行するので、初めての方や小学生連れでも安心。\n湖面に広がる朝の景色を眺めながら、非日常のひとときを過ごしましょう。",

    displayInfo: [
      { term: "人数", description: "<p>2名〜</p>" },
      { term: "受付場所\t", description: "<p>西湖キャンプビレッジ・ノーム内</p>", note: "赤いトレーラーハウス" },
      { term: "受付時間", description: "<p>6時45分集合　7時開始</p>" },
      { term: "お子様の利用", description: "<p>小学生のお子様は大人と同乗でご参加いただけます。</p><p>※お子様の年齢に合わせてシングル艇又はタンデム艇でご案内</p><p>※小学生のお子様も人数のカウントに含まれます。</p><p>小学生未満のお子様はご参加いただけません。</p>" },
      { term: "ツアー代金", description: "<p>5,500円（税込）/人　2名様より</p><p>例：大人2名、小学生1名　16,500円（税込）</p>", note: "「西湖キャンプビレッジＧＮＯＭＥ」をご利用ではないお客様は 別途施設使用料（550円/人）がかかります。" },
      { term: "取消料\t", description: "<p>当日100％　</p><p>前日50％</p>", note: "※天候により実施が難しい場合には取消料はいただきません。" },
      { term: "その他\t", description: "<p>ペットの乗船はお断りしております。</p>" },
      { term: "お問合せ\t", description: "<p><a href=\"mailto:activity@hamayouresort.com\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませ、誓約書にサインを頂きます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "漕ぎ方や注意点のご案内をします。" },
      { stepNumber: "STEP 3", title: "体験", description: "西湖の見どころをご案内します。" },
      { stepNumber: "STEP 4", title: "終了", description: "レンタル品を返却して頂きます。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ進む", link: "https://hamayouresort.rezio.shop/ja-JP/product/ZNKRJ4", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 5500,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "秋", "春"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "middle-school-and-up",
  },
  {
    slug: "sup-rental",
    title: "ＳＵＰレンタル",
    category: "LAKE SAIKO",

    gallery: [supRentalImg01, supRentalImg02, supRentalImg03, supRentalImg04, supRentalImg05, supRentalImg06, supRentalImg07, supRentalImg08],
    pointBackgroundImage: supRentalPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "水上を散歩する",
    catchphraseColor: "white",
    displayOrder: 3,

    // 詳細コンテンツ
    introTitleLine1: "富士の静寂に",
    introTitleLine2: "浮かぶ冒険",
    introText: "富士山のふもと、西湖の澄んだ水面は、まるで別世界への入口。\nSUPに乗れば、風と波の音が遠ざかり、自分の呼吸だけが響きます。\nひとりで静けさを楽しむもよし、仲間と笑い合いながら漕ぐもよし。\n誰もが自然のリズムを感じ、自分のペースで「心をほどく旅」へと漕ぎ出せます。",
    pointTitleLine1: "湖上を歩くような",
    pointTitleLine2: "非日常体験",
    pointDescription: "SUP（スタンドアップパドルボード）は、湖面に立ち、水の上を歩くように進む新感覚のアクティビティ。\n波が穏やかな西湖では、初心者でも安心して体験できます。\n朝の静けさに包まれながら、湖面を進むその時間は、まるで自然とひとつになるような心地よさ。\n日常を離れ、自分のリズムで自然を感じたい人にぴったりです。",

    displayInfo: [
      { term: "人数", description: "<p>1-8名</p>", note: "（シングル、タンデム、メガ）" },
      { term: "受付場所\t", description: "<p>西湖キャンプビレッジ・ノーム　</p><p></p>", note: "赤いトレーラーハウス" },
      { term: "レンタル時間\t", description: "<p>2時間</p>" },
      { term: "受付時間\t", description: "<p>07：00～ ※7～9月限定　完全予約制</p><p>10：00 ～ </p><p>12：00～　※当日受付のみ</p><p>14：00～</p>", note: "※15分前までに受付をお願いいたします。" },
      { term: "お子様の利用", description: "<p>5才～小学生：大人と一緒にボードに乗ることは可能　</p><p>※別途ライフベストのレンタルが必要</p>", note: "総重量を超えないこと　（シングル110kg,タンデムは200kg）" },
      { term: "レンタル費\t", description: "<p>シングル艇　4,400円（税込）/2時間</p><p>タンデム艇　6,600円（税込）/2時間</p><p>メガ艇　12,100円（税込）/2時間　</p><p>※傷害保険を含みます</p><p>ライフベスト追加レンタル：550円/着</p><p>パドル追加レンタル：1,100円/本</p>", note: "「西湖キャンプビレッジＧＮＯＭＥ」をご利用ではないお客様は 別途施設使用料（550円/人）がかかります。" },
      { term: "レンタルに 含まれるもの", description: "<p>シングル：ボード,ライフベスト1着,パドル1本</p><p>タンデム：ボード,ライフベスト2着,パドル2本</p><p>メガ：ボード,ライフベスト4着,パドル4本</p><p>※緊急時のために携帯電話をお持ちください。</p>", note: "ウェットスーツの貸出はございません。" },
      { term: "取消料\t", description: "<p>当日　100%　</p><p>前日　50％</p>", note: "天候により実施が難しい場合には取消料はいただきません。" },
      { term: "その他", description: "<p>ペットの乗船はお断りしております</p>" },
      { term: "お問合せ\t", description: "<p><a href=\"mailto:activity@hamayouresort.com\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませ、誓約書にサインを頂きます。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "漕ぎ方や注意点のご案内をします。" },
      { stepNumber: "STEP 3", title: "体験", description: "湖上を散策します。" },
      { stepNumber: "STEP 4", title: "終了", description: "レンタル品を返却して頂きます。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ進む", link: "https://hamayouresort.rezio.shop/ja-JP/product/sup_rental", hours: "24時間" },
    ],
    badges: ["事前予約", "当日予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 4400,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "middle-school-and-up",
  },
  {
    slug: "aokigahara-forest-early-morning-private-tour",
    title: "青木ヶ原樹海早朝プライベートツアー",
    category: "JUKAI",

    gallery: [aokigaharaForestEarlyMorningPrivateTourImg01, aokigaharaForestEarlyMorningPrivateTourImg02, aokigaharaForestEarlyMorningPrivateTourImg03, aokigaharaForestEarlyMorningPrivateTourImg04, aokigaharaForestEarlyMorningPrivateTourImg05],
    pointBackgroundImage: aokigaharaForestEarlyMorningPrivateTourPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "命の森、朝の顔",
    catchphraseColor: "white",
    displayOrder: 2,

    // 詳細コンテンツ
    introTitleLine1: "朝の光が目覚める森で",
    introTitleLine2: "静寂と生命の鼓動に出会う",
    introText: "朝の樹海は、夜と昼のあわいにある特別な時間。\n柔らかな光に包まれた森の中で、静寂の中にも確かな生命の息づかいが感じられます。鳥の声、風の音、足もとに広がる苔の輝き――。\n一日のはじまりを、自然とともに迎えるひとときをお楽しみください。",
    pointTitleLine1: "早朝の樹海を歩き",
    pointTitleLine2: "自分をリセットする",
    pointDescription: "夜の静けさが去り、光が差しはじめる時間。\n早朝の樹海は、空気が張りつめ、木々が呼吸を始める瞬間に満ちています。鳥の声や朝露、柔らかな光がつくる陰影の中を、ガイドとともに歩きながら、森が生きていることを五感で感じていただけます。",

    displayInfo: [
      { term: "人数", description: "<p>1-4名</p>" },
      { term: "受付場所\t", description: "<p>西湖キャンプビレッジ・ノーム　</p>", note: "赤いトレーラーハウス" },
      { term: "受付時間\t", description: "<p>6時45分集合　7時開始</p>" },
      { term: "ツアー代金\t", description: "<p>10,000円（税込）/組　（4名様迄）</p><p>追加1名に付き　2,000円</p>" },
      { term: "取消料\t", description: "<p>当日100％　</p><p>前日50％</p>", note: "※天候により実施が難しい場合には取消料はいただきません。" },
      { term: "持ち物", description: "<p>動きやすい服装・靴</p>" },
      { term: "お問合せ\t", description: "<p><a href=\"mailto:activity@hamayouresort.com\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
      { term: "料金詳細", description: "<p>10,000円（税込）/組　（4名様迄）<br>追加1名に付き　2,000円</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませ、誓約書にサインを頂きます。" },
      { stepNumber: "STEP 2", title: "移動", description: "送迎車にて樹海入り口へ移動。" },
      { stepNumber: "STEP 3", title: "体験", description: "樹海を歩き、各スポットを巡ります。" },
      { stepNumber: "STEP 4", title: "終了", description: "送迎車にて戻ってきます。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ進む", link: "https://hamayouresort.rezio.shop/ja-JP/product/jukai01", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 10000,
    filterDurationHours: 2.5,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "ages-3-and-up",
  },
  {
    slug: "aokigahara-forest-private-tour",
    title: "青木ヶ原樹海【絶景とパワースポット】プライベートツアー",
    category: "JUKAI",

    gallery: [aokigaharaForestPrivateTourImg01, aokigaharaForestPrivateTourImg02, aokigaharaForestPrivateTourImg03, aokigaharaForestPrivateTourImg04, aokigaharaForestPrivateTourImg05],
    pointBackgroundImage: aokigaharaForestPrivateTourPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "命の森に触れる",
    catchphraseColor: "white",
    displayOrder: 1,

    // 詳細コンテンツ
    introTitleLine1: "歩くたびに",
    introTitleLine2: "出会う神秘",
    introText: "樹海は「怖い森」というイメージを持たれがちですが、実は富士山の噴火で流れた溶岩の上にできた特別な森です。土や水が少ない厳しい環境の中で、植物や動物たちは独自の方法で生きています。歩いて、のぞいて、見下ろして──樹海の神秘を多角的に体感できるツアーです。",
    pointTitleLine1: "樹海を歩き",
    pointTitleLine2: "生物の戦略を学ぶ",
    pointDescription: "1組限定のプライベートツアーで、周囲を気にせず自分たちのペースで満喫できます。午前は爽やかな空気の中で、午後は夕日に染まる絶景を楽しめます。富士山の溶岩洞窟や樹海の展望ポイントなど見どころ満載。歩行は平坦で短時間、体力に自信のない方も安心してご参加いただけます。",

    displayInfo: [
      { term: "人数", description: "<p>1-4名</p>" },
      { term: "受付場所\t", description: "<p>西湖キャンプビレッジ・ノーム　</p>", note: "赤いトレーラーハウス" },
      { term: "受付時間\t", description: "<p>午前の部　9時15分集合　9時30分開始</p><p>午後の部　14時15分集合　14時30分開始</p>" },
      { term: "ツアー代金\t", description: "<p>12,000円（税込）/組　（4名様迄）</p><p>追加1名に付き　2,500円</p>" },
      { term: "取消料\t", description: "<p>当日100％　</p><p>前日50％</p>", note: "※天候により実施が難しい場合には取消料はいただきません。" },
      { term: "持ち物", description: "<p>動きやすい服装・靴</p>" },
      { term: "料金詳細", description: "<p>12,000円（税込）/組　（4名様迄）<br>追加1名に付き　2,500円</p>" },
      { term: "お問合せ\t", description: "<p><a href=\"mailto:activity@hamayouresort.com\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "受付", description: "受付を済ませ、誓約書にサインを頂きます。" },
      { stepNumber: "STEP 2", title: "移動", description: "送迎車にて樹海入り口へ移動。" },
      { stepNumber: "STEP 3", title: "体験", description: "樹海を歩き、各スポットを巡ります。" },
      { stepNumber: "STEP 4", title: "終了", description: "送迎車にて戻ってきます。" },
    ],
    reservation: [
      { label: "web", value: "予約サイトへ進む", link: "https://hamayouresort.rezio.shop/ja-JP/product/jukai01", hours: "24時間" },
    ],
    badges: ["事前予約", "個人向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 12000,
    filterDurationHours: 2.5,
    filterWeather: "light-rain",
    filterSeasons: ["夏", "春", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "ages-3-and-up",
  },
];
