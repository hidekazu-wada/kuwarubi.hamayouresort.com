// アクティビティデータ
//
// microCMS から切り離し、サイト内で管理する形にしたもの。
// 画像は src/assets/images/activities/<slug>/ に置き、ImageMetadata としてインポートする
// （Astro のビルド時最適化に乗せるため。文字列パスのままでは最適化されない）。
//
// ── 公開の考え方 ──
// published: false のものは一覧・詳細ページ・サイトマップのどこにも出ない。
// 写真が未入稿のプログラムを、文章だけ先に入れておくために使う。
//
// ── 写真が揃って公開するとき ──
//   1. src/assets/images/activities/<slug>/ に gallery-01.jpg... と point-bg.jpg を置く
//   2. このファイル冒頭の import に追記する
//   3. 該当データの gallery / pointBackgroundImage を差し込む
//   4. published を true にする
//   一覧・詳細・TOPの件数表記は自動で追従するので、他の変更は不要。
//
// ── 新しく1件足すとき ──
//   上の手順に加えて、activities 配列に1件足す。
//   ページ側は src/lib/activitiesAPI.ts 経由で読むので、他の変更は不要。
//   category に新しい値を使う場合だけ、一覧の絞り込みの並び順
//   （activities/index.astro の CATEGORY_ORDER）に足す。
//   足さなくても選択肢には出る（末尾に回るだけ）。
//
// ── 金額のルール ──
// 一覧に出る basePrice は、詳細ページ（displayInfo 内）の最安料金に合わせる。
// 2つがずれたときは詳細ページ側を正とする。

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
  /** false のうちは一覧・詳細・サイトマップのどこにも出ない */
  published: boolean;

  /** 未入稿のあいだは空配列 */
  gallery: ImageMetadata[];
  /** 未入稿のあいだは undefined */
  pointBackgroundImage?: ImageMetadata;

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
    published: true,

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
      { label: "web", value: "お問い合わせフォームへ", link: "/contact/", hours: "24時間" },
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
    title: "足漕ぎカヤック HOBIE",
    category: "LAKE SAIKO",
    published: true,

    gallery: [pedalBoardsImg01, pedalBoardsImg02, pedalBoardsImg03, pedalBoardsImg04, pedalBoardsImg05],
    pointBackgroundImage: pedalBoardsPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "足で漕ぐ、新感覚の湖上さんぽ",
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
    basePrice: 6600,
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
    published: true,

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
      { term: "対象年齢", description: "<p>2歳〜</p>" },
      { term: "実施時期", description: "<p>3月中旬〜12月中旬</p>" },
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
    basePrice: 2750,
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
    published: true,

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
      { term: "料金に含まれるもの", description: "<ul><li>森のサウナ小屋（3時間）</li><li>足湯（源泉掛け流し）</li><li>ハンモック</li><li>薪1束</li></ul>", note: "くわるびにご宿泊でない方は別途施設使用料（1,100円/人）" },
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
    published: true,

    gallery: [carSaunaImg01, carSaunaImg02, carSaunaImg03, carSaunaImg04, carSaunaImg05, carSaunaImg06],
    pointBackgroundImage: carSaunaPointBg,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "動くサウナ、選べる絶景",
    catchphraseColor: "blue",
    displayOrder: 5,

    // 詳細コンテンツ
    introTitleLine1: "整いは、風とともに",
    introTitleLine2: "湖畔でも、森の庭でも",
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
    published: true,

    gallery: [supEarlyMorningPrivateTourImg01, supEarlyMorningPrivateTourImg02, supEarlyMorningPrivateTourImg03],
    pointBackgroundImage: supEarlyMorningPrivateTourImg01,

    // TOPページ表示
    showOnTop: true,
    topPageCatchphrase: "湖がいちばん静かな時間",
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
      { term: "受付場所", description: "<p>西湖キャンプビレッジ・ノーム内</p>", note: "赤いトレーラーハウス" },
      { term: "受付時間", description: "<p>6時45分集合　7時開始</p>" },
      { term: "お子様の利用", description: "<p>小学生のお子様は大人と同乗でご参加いただけます。</p><p>※お子様の年齢に合わせてシングル艇又はタンデム艇でご案内</p><p>※小学生のお子様も人数のカウントに含まれます。</p><p>小学生未満のお子様はご参加いただけません。</p>" },
      { term: "ツアー代金", description: "<p>5,500円（税込）/人　2名様より</p><p>例：大人2名、小学生1名　16,500円（税込）</p>", note: "「西湖キャンプビレッジＧＮＯＭＥ」をご利用ではないお客様は 別途施設使用料（550円/人）がかかります。" },
      { term: "取消料", description: "<p>当日100％　</p><p>前日50％</p>", note: "※天候により実施が難しい場合には取消料はいただきません。" },
      { term: "その他", description: "<p>ペットの乗船はお断りしております。</p>" },
      { term: "お問合せ", description: "<p><a href=\"mailto:activity@hamayouresort.com\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
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
    published: true,

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
      { term: "対象年齢", description: "<p>中学生以上（5歳〜小学生は大人と同乗可）</p>" },
      { term: "人数", description: "<p>1-8名</p>", note: "（シングル、タンデム、メガ）" },
      { term: "受付場所", description: "<p>西湖キャンプビレッジ・ノーム　</p><p></p>", note: "赤いトレーラーハウス" },
      { term: "レンタル時間", description: "<p>2時間</p>" },
      { term: "受付時間", description: "<p>07：00～ ※7～9月限定　完全予約制</p><p>10：00 ～ </p><p>12：00～　※当日受付のみ</p><p>14：00～</p>", note: "※15分前までに受付をお願いいたします。" },
      { term: "お子様の利用", description: "<p>5才～小学生：大人と一緒にボードに乗ることは可能　</p><p>※別途ライフベストのレンタルが必要</p>", note: "総重量を超えないこと　（シングル110kg,タンデムは200kg）" },
      { term: "レンタル費", description: "<p>シングル艇　4,400円（税込）/2時間</p><p>タンデム艇　6,600円（税込）/2時間</p><p>メガ艇　12,100円（税込）/2時間　</p><p>※傷害保険を含みます</p><p>ライフベスト追加レンタル：550円/着</p><p>パドル追加レンタル：1,100円/本</p>", note: "「西湖キャンプビレッジＧＮＯＭＥ」をご利用ではないお客様は 別途施設使用料（550円/人）がかかります。" },
      { term: "レンタルに 含まれるもの", description: "<p>シングル：ボード,ライフベスト1着,パドル1本</p><p>タンデム：ボード,ライフベスト2着,パドル2本</p><p>メガ：ボード,ライフベスト4着,パドル4本</p><p>※緊急時のために携帯電話をお持ちください。</p>", note: "ウェットスーツの貸出はございません。" },
      { term: "取消料", description: "<p>当日　100%　</p><p>前日　50％</p>", note: "天候により実施が難しい場合には取消料はいただきません。" },
      { term: "その他", description: "<p>ペットの乗船はお断りしております</p>" },
      { term: "お問合せ", description: "<p><a href=\"mailto:activity@hamayouresort.com\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
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
    published: true,

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
      { term: "受付場所", description: "<p>西湖キャンプビレッジ・ノーム　</p>", note: "赤いトレーラーハウス" },
      { term: "受付時間", description: "<p>6時45分集合　7時開始</p>" },
      { term: "ツアー代金", description: "<p>10,000円（税込）/組　（4名様迄）</p><p>追加1名に付き　2,000円</p>" },
      { term: "取消料", description: "<p>当日100％　</p><p>前日50％</p>", note: "※天候により実施が難しい場合には取消料はいただきません。" },
      { term: "持ち物", description: "<p>動きやすい服装・靴</p>" },
      { term: "お問合せ", description: "<p><a href=\"mailto:activity@hamayouresort.com\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
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
    published: true,

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
      { term: "受付場所", description: "<p>西湖キャンプビレッジ・ノーム　</p>", note: "赤いトレーラーハウス" },
      { term: "受付時間", description: "<p>午前の部　9時15分集合　9時30分開始</p><p>午後の部　14時15分集合　14時30分開始</p>" },
      { term: "ツアー代金", description: "<p>12,000円（税込）/組　（4名様迄）</p><p>追加1名に付き　2,500円</p>" },
      { term: "取消料", description: "<p>当日100％　</p><p>前日50％</p>", note: "※天候により実施が難しい場合には取消料はいただきません。" },
      { term: "持ち物", description: "<p>動きやすい服装・靴</p>" },
      { term: "お問合せ", description: "<p><a href=\"mailto:activity@hamayouresort.com\">activity@hamayouresort.com</a></p>", note: "担当：北山" },
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
  {
    slug: "kunimasu-mystery",
    title: "クニマスの謎を解け",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "絶滅したはずの魚が、この湖にいた",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "「奇跡の魚」は、",
    introTitleLine2: "なぜ西湖で生き延びたのか",
    introText: "2010年、約70年前に絶滅したとされていた魚・クニマスが、ここ西湖で生きて発見されました。故郷・田沢湖を追われた魚が、日本中でこの湖だけで命をつないでいた——教科書にも載ったこの実話の「現場」が、西湖です。\nなぜ西湖だったのか。その答えは湖の中だけでなく、北岸にそびえる御坂山塊の森にも隠されています。\n本物の物語の舞台で、謎解きをしながら生物多様性を学ぶプログラムです。",
    pointTitleLine1: "聞く、歩く、発表する。",
    pointTitleLine2: "3段階で「なぜ」が自分の答えになる",
    pointDescription: "スライドと映像でクニマスの物語を学んだら、課題を持って裏山へ。クニマスを支える「水を生む森」を自分の足で歩いて確かめ、最後にみんなで答え合わせをします。\n「座学で知る → 歩いて確かめる → 言葉にして発表する」の3段階構成なので、知識が体験として定着します。\n林間学校の環境学習や、SDGs（14 海の豊かさ・15 陸の豊かさ）を扱う探究学習の題材としてもご活用いただけます。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>2時間半〜3時間</p>" },
      { term: "参加費", description: "<p>1,100円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜小雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>動きやすい服装・靴・筆記用具・雨具</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "座学", description: "スライドと映像で、クニマスの物語と生物多様性の基礎を学びます。" },
      { stepNumber: "STEP 2", title: "ハイキング", description: "課題を解きながら、西湖の水を育む裏山を歩きます。" },
      { stepNumber: "STEP 3", title: "振り返り", description: "課題の答え合わせと発表を行い、学びをまとめます。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 1100,
    filterDurationHours: 3,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "jukai-trail",
    title: "樹海トレイル",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "教科書にない森を歩く",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "土のない森で、",
    introTitleLine2: "木はどう生きているのか",
    introText: "青木ヶ原樹海は、平安時代の大噴火で流れた溶岩の上に育った森。土がほとんどない場所で、木々は岩を抱くように根を張り、苔が水を蓄えて森を支えています。\n「怖い森」というイメージを入り口に、実際に歩いて確かめてみると、そこにあるのは生き物たちの工夫の連続。検索すれば答えが出る時代だからこそ、自分の目で観察し、自分の頭で考える時間を用意しました。",
    pointTitleLine1: "観察して、考えて、",
    pointTitleLine2: "発表する",
    pointDescription: "ガイドの解説を聞くだけのツアーではありません。座学で樹海の成り立ちを学んでから、テーマを持って森を歩き、最後に見つけたことを発表します。\n溶岩の上に森ができるまでの物語は、理科の学習内容（大地のつくり・植物のはたらき）とも接続できます。\n歩行は平坦で1時間半〜2時間。初めての団体でも歩き切れるコースです。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>1時間半〜2時間</p>" },
      { term: "参加費", description: "<p>1,100円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜小雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>動きやすい服装・靴・筆記用具・雨具</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "座学", description: "スライドと映像で樹海の成り立ちと基礎知識を学びます。" },
      { stepNumber: "STEP 2", title: "移動", description: "樹海に移動します。" },
      { stepNumber: "STEP 3", title: "散策", description: "テーマに沿って観察しながら樹海を散策します。" },
      { stepNumber: "STEP 4", title: "移動", description: "ホテルに戻ります。" },
      { stepNumber: "STEP 5", title: "振り返り", description: "課題を発表します。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: false,
    basePrice: 1100,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "campfire",
    title: "キャンプファイヤー",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "炎が、クラスをひとつにする",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "林間学校の夜は、",
    introTitleLine2: "この炎から始まる",
    introText: "火を囲むと、不思議と心の距離が縮まる——キャンプファイヤーが林間学校の定番であり続けるのには、理由があります。\n西湖の夜、星空の下で燃え上がる炎を囲めば、昼間のアクティビティとはまた違う、忘れられない時間に。\n点火から消火まで火の管理はホテルスタッフが行うので、先生方はプログラムの進行に集中していただけます。",
    pointTitleLine1: "準備も後片付けも、",
    pointTitleLine2: "スタッフにおまかせ",
    pointDescription: "会場の設営、点火、消火・片付けまでスタッフが対応します。\n炎を囲んでのスタンツや歌、ダンスなど、プログラムは学校・団体ごとに自由に構成可能。衣装や道具、音源をお持ちいただければ、あとは炎が場を盛り上げてくれます。\n安全管理の体制を整えた上で火の迫力を間近に感じられるのは、湖畔の屋外会場ならではです。",

    displayInfo: [
      { term: "対象", description: "<p>未就学児〜</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>1時間</p>" },
      { term: "参加費", description: "<p>33,000円〜</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜小雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>プログラム用の衣装・道具・音源、動きやすい服装・靴</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "移動", description: "キャンプファイヤー場に集合します。" },
      { stepNumber: "STEP 2", title: "点火", description: "キャンプファイヤーに炎を点火します。" },
      { stepNumber: "STEP 3", title: "体験", description: "それぞれでご用意をしたプログラムを行います。" },
      { stepNumber: "STEP 4", title: "終了", description: "消火などの片づけはホテルスタッフが行います。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 33000,
    filterDurationHours: 1,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "all-ages",
  },
  {
    slug: "kayak-group",
    title: "カヤック体験",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "はじめてのパドルで、湖に漕ぎ出す",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "全員が初心者でも、",
    introTitleLine2: "全員が漕げるようになる",
    introText: "湖上に出ると、見慣れた景色が一変します。十二ヶ岳の稜線、青木ヶ原樹海の森、そして富士山。\n西湖は波の穏やかな静かな湖なので、初めてのカヤックにも最適です。ベテランインストラクターが基本操作からいちから指導。\n2時間のプログラムが終わる頃には、自分の力で湖を進む感覚がつかめています。",
    pointTitleLine1: "「できた」の実感が、",
    pointTitleLine2: "自信になる",
    pointDescription: "カヤックは、習ったことがそのまま「進む・曲がる」という結果になって返ってくる乗り物。だから上達が自分でわかり、達成感につながります。\n最初に安全に関するレクチャーを行い、体験中もインストラクターが湖上で見守ります。\n水辺の活動が初めての学校・団体でも安心してご参加いただけます。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>2時間</p>" },
      { term: "参加費", description: "<p>3,080円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>5月〜10月</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜小雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>濡れても良い服装・ウォーターシューズ・タオル</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "移動", description: "湖畔に集合します。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "基本的な操作と安全に関するレクチャを行います。" },
      { stepNumber: "STEP 3", title: "体験", description: "インストラクターの指示に従い、湖上を散策します。" },
      { stepNumber: "STEP 4", title: "終了", description: "レンタル品を返却して終了です。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 3080,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "hobie-group",
    title: "足漕ぎカヤック",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "ペダルを漕いで、湖の教室へ",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "手ではなく足で進む、",
    introTitleLine2: "新しいカヤック",
    introText: "HOBIEの足漕ぎカヤックは、自転車のようにペダルを踏むだけでスイスイ進む、誰でもすぐに乗りこなせる乗り物です。\nパドル操作の練習に時間を取られないので、湖の上での「学び」に時間を使える——大人数の団体プログラムに向いている理由がここにあります。",
    pointTitleLine1: "湖上から、",
    pointTitleLine2: "西湖の生態系を読み解く",
    pointDescription: "手が自由になる足漕ぎカヤックだからこそ、観察学習に集中できます。西湖の生き物、風の読み方、湖と森のつながり。\n人にも環境にも優しい乗り物で湖に出て、自然との共生を体験から学びます。\n40名からの学年単位のプログラムに対応しています。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>40名〜</p>" },
      { term: "所要時間", description: "<p>2時間以上</p>" },
      { term: "参加費", description: "<p>3,500円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜小雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>濡れても良い服装・ウォーターシューズ・タオル</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "移動", description: "HOBIEベースに集合します。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "基本的な操作と安全に関するレクチャを行います。" },
      { stepNumber: "STEP 3", title: "体験", description: "湖上で西湖の生態系や風を読み取る学習をします。" },
      { stepNumber: "STEP 4", title: "終了", description: "レンタル品を返却して終了です。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: false,
    basePrice: 3500,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "raft-building",
    title: "いかだ作り",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "自分たちで作ったいかだで、湖へ",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "設計も、組み立ても、",
    introTitleLine2: "航海も、チームの仕事",
    introText: "材料を前に、まず考える。どう組めば浮くのか、どう縛れば崩れないのか。\nチームで知恵を出し合っていかだを作り、完成したら実際に西湖へ漕ぎ出します。\nうまく進むチームも、思うようにいかないチームも、そのすべてが学びに変わる——協働の要素が全部詰まったプログラムです。",
    pointTitleLine1: "「浮くかどうか」は",
    pointTitleLine2: "チームワーク次第",
    pointDescription: "いかだ作りの面白さは、結果がその場で出ること。力を合わせて作ったいかだが湖に浮かんだ瞬間の歓声は、教室では生まれないものです。\nライフジャケットを着用し、スタッフが安全を見守る中で実施します。\n30名からの大人数に対応し、学年行事の目玉になるプログラムです。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>30名〜</p>" },
      { term: "所要時間", description: "<p>2時間以上</p>" },
      { term: "参加費", description: "<p>3,800円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>5月〜10月</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜小雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>濡れても良い服装・ウォーターシューズ・タオル</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "移動", description: "湖畔に集合してチーム毎に分かれます。" },
      { stepNumber: "STEP 2", title: "体験", description: "チーム毎にいかだを作ります。" },
      { stepNumber: "STEP 3", title: "冒険", description: "いかだで西湖を冒険します。" },
      { stepNumber: "STEP 4", title: "終了", description: "いかだを解体して終了です。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: false,
    basePrice: 3800,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "kamado-curry",
    title: "かまど炊飯とカレー作り",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "火を起こすところから、はじまる食事",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "スイッチひとつじゃない、",
    introTitleLine2: "ごはんの炊き方",
    introText: "薪に火をつけ、かまどでご飯を炊き、野菜を切ってカレーを作る。\n普段はスイッチひとつで済むことを、ぜんぶ自分たちの手でやってみるプログラムです。\n火加減に苦労した分だけ、できあがったカレーの味は格別。「当たり前」が当たり前ではないことに気づく、食育の時間です。",
    pointTitleLine1: "不便さの中にある、",
    pointTitleLine2: "学びと美味しさ",
    pointDescription: "電気もガスも使いません。火起こしから調理、片付けまでを班ごとに分担するので、自然と役割分担と声の掛け合いが生まれます。\n屋根のある会場で実施するため天候に左右されにくく、雨天時の代替プログラムとしても組み込めます。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>2時間以上</p>" },
      { term: "参加費", description: "<p>1,870円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>全天候型</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>特になし</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "移動", description: "BBQ場に集合します。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "体験の流れをご案内します。" },
      { stepNumber: "STEP 3", title: "体験", description: "火をおこし、米を炊き、野菜を切ってカレーを作ります。" },
      { stepNumber: "STEP 4", title: "食事", description: "おいしいカレーを頂きます。" },
      { stepNumber: "STEP 5", title: "終了", description: "使用した道具や食器を洗って片付けます。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 1870,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "houtou-making",
    title: "ほうとう作り",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "山梨の味を、自分の手で打つ",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "地元のおばちゃんが教える、",
    introTitleLine2: "本場のほうとう",
    introText: "山梨に来たなら、名物ほうとうはお店で食べるだけではもったいない。\n小麦粉から麺を打ち、野菜たっぷりの味噌仕立ての汁で煮込む——郷土の味を、地元のおばちゃんたちが手ほどきします。\n自分で打った麺のおいしさと、土地の食文化への理解が、いっぺんに手に入るプログラムです。",
    pointTitleLine1: "郷土食は、",
    pointTitleLine2: "いちばんおいしい教材",
    pointDescription: "麺打ちは班ごとの共同作業。力のいる工程も細かい工程もあるので、自然と役割分担が生まれます。\n作って、煮込んで、みんなで食べて、片付けるまでがワンセット。\n屋内で実施できるため天候の影響を受けず、雨天時の代替プログラムとしても組み込めます。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>2時間以上</p>" },
      { term: "参加費", description: "<p>1,870円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>全天候型</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>特になし</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "移動", description: "体験場所に集合します。" },
      { stepNumber: "STEP 2", title: "レクチャ", description: "体験の流れをご案内します。" },
      { stepNumber: "STEP 3", title: "体験", description: "麺を打って、汁を作っておいしいほうとうを作ります。" },
      { stepNumber: "STEP 4", title: "食事", description: "おいしいほうとうを頂きます。" },
      { stepNumber: "STEP 5", title: "終了", description: "使用した道具や食器を洗って片付けます。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: false,
    basePrice: 1870,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "treasure-hunt",
    title: "リアル宝探し",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "大自然が、謎解きの舞台になる",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "宝の地図を手に、",
    introTitleLine2: "チームで挑む本格謎解き",
    introText: "謎解きイベントの第一人者・タカラッシュが手がける「リアル宝探し」が西湖に登場。\n配られるのは一枚の宝の地図。隠された宝にたどり着くには、謎を解く発想力と、チームで手分けする作戦力の両方が必要です。\n自然の中を歩き回りながら、頭と体をフルに使う新感覚のチームビルディングです。",
    pointTitleLine1: "勝敗のカギは、",
    pointTitleLine2: "コミュニケーション",
    pointDescription: "謎解きが得意な人、地図を読むのが得意な人、行動力のある人。それぞれの得意が噛み合ったチームが勝つように設計されています。\n途中のヒントタイムで差が詰まるので、最後まで勝敗がわからないのも盛り上がる理由。\n終了後は解説と結果発表で体験を振り返ります。",

    displayInfo: [
      { term: "対象", description: "<p>小学校高学年以上</p>" },
      { term: "人数", description: "<p>15名〜</p>" },
      { term: "所要時間", description: "<p>2時間以上</p>" },
      { term: "参加費", description: "<p>3,500円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>晴れ〜雨</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>動きやすい服装・靴・筆記用具・雨具</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "ルール説明", description: "ゲームの内容とルールを説明します。" },
      { stepNumber: "STEP 2", title: "体験", description: "宝を探します。途中でヒントタイムがあります。" },
      { stepNumber: "STEP 3", title: "解説", description: "謎解きの解説をします。" },
      { stepNumber: "STEP 4", title: "終了", description: "結果発表をして終了です。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: false,
    basePrice: 3500,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "team-building",
    title: "チームビルディング",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "120分後、チームが変わっている",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "初対面でも、",
    introTitleLine2: "自然と笑顔になれる仕掛け",
    introText: "「チームビルディング」と聞くと難しそうですが、中身は笑いの絶えないゲームの連続です。\nアイスブレイクで緊張をほぐし、チーム対抗の課題に挑戦するうちに、自然と声を掛け合い、役割が生まれ、チームがまとまっていく。\nその変化を120分で体感できるプログラムです。",
    pointTitleLine1: "一人ではクリアできないから、",
    pointTitleLine2: "チームになる",
    pointDescription: "課題はどれも「一人では絶対にクリアできない」ように設計されています。うまくいかない時間も含めてプログラムのうち。\n結果発表と振り返りでは、今まで知らなかった友達の一面と、自分自身の新しい一面に気づくはずです。\n新入生オリエンテーションや企業研修にも。全天候対応で、雨でも実施できます。",

    displayInfo: [
      { term: "対象", description: "<p>小学校高学年以上</p>" },
      { term: "人数", description: "<p>15名〜</p>" },
      { term: "所要時間", description: "<p>2時間以上</p>" },
      { term: "参加費", description: "<p>3,500円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>全天候型</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>動きやすい服装・靴・筆記用具・雨具</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "ルール説明", description: "ゲームの内容とルールを説明します。" },
      { stepNumber: "STEP 2", title: "アイスブレイク", description: "緊張を解き、リラックスをします。" },
      { stepNumber: "STEP 3", title: "体験", description: "チーム毎に課題に挑戦します。" },
      { stepNumber: "STEP 4", title: "終了", description: "結果発表をして終了です。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: true,
    basePrice: 3500,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
  {
    slug: "survival-bracelet",
    title: "サバイバルバンド作り",
    category: "GROUP",
    published: false,

    // 写真は未入稿。src/assets/images/activities/<slug>/ に置いたら import して差し込む
    gallery: [],

    // TOPページ表示
    showOnTop: false,
    topPageCatchphrase: "腕に巻く、防災の知恵",
    catchphraseColor: "white",
    displayOrder: 0,

    // 詳細コンテンツ
    introTitleLine1: "このバンドひとつに、",
    introTitleLine2: "生き残る道具が詰まっている",
    introText: "パラコードを編んで作るサバイバルバンドには、方位磁石、ファイヤースターター、そしてほどけば数メートルのロープになるパラコードが組み込まれています。\n「もしも」のとき何が必要かを考えながら、自分の手で編み上げる防災学習プログラムです。",
    pointTitleLine1: "作って、持ち帰って、",
    pointTitleLine2: "防災意識が日常に残る",
    pointDescription: "完成したバンドはそのままお持ち帰り。身につけるたびに、防災について考えたこの日を思い出せます。\n編む作業には手先の集中力が必要で、完成したときの達成感もひとしお。\n屋内で実施できる全天候型なので、雨天時の代替プログラムとしても組み込めます。",

    displayInfo: [
      { term: "対象", description: "<p>小学生以上</p>" },
      { term: "人数", description: "<p>10名〜</p>" },
      { term: "所要時間", description: "<p>2時間</p>" },
      { term: "参加費", description: "<p>1,320円〜/人</p>", note: "税込表記は要確認" },
      { term: "実施時期", description: "<p>通年</p>" },
      { term: "実施可能天気", description: "<p>全天候型</p>" },
      { term: "ご予約", description: "<p>事前予約</p>" },
      { term: "持ち物", description: "<p>動きやすい服装</p>" },
    ],
    flow: [
      { stepNumber: "STEP 1", title: "説明", description: "サバイバルバンドの役割と作り方を説明します。" },
      { stepNumber: "STEP 2", title: "体験", description: "サバイバルバンドを作ります。" },
      { stepNumber: "STEP 3", title: "終了", description: "完成品はお持ち帰りして頂きます。" },
    ],
    reservation: [
      { label: "TEL", value: "0555-82-2922", link: "tel:0555822922", hours: "10:00〜17:00" },
      { label: "E-mail", value: "info@hamayouresort.com", link: "mailto:info@hamayouresort.com", hours: "24時間" },
    ],
    badges: ["事前予約", "団体向け"],

    // メタ・絞り込み
    isPopular: false,
    basePrice: 1320,
    filterDurationHours: 2,
    filterWeather: "light-rain",
    filterSeasons: ["春", "夏", "秋", "冬"],
    filterDifficulty: "初心者向け",
    filterAgeGroup: "elementary-school-and-up",
  },
];
