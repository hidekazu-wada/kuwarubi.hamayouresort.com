// TOPページBlogセクション用画像インポート
import TopBlogSlide01 from '../assets/images/top/blog/slide-01.png';
import TopBlogSlide02 from '../assets/images/top/blog/slide-02.png';
import TopBlogSlide03 from '../assets/images/top/blog/slide-03.png';
import TopBlogSlide04 from '../assets/images/top/blog/slide-04.png';

export interface InformationPost {
  id: string;
  slug: string;
  date: string;
  category: 'お知らせ' | 'イベント情報' | 'ブログ記事';
  title: string;
  content: string; // HTML content
  thumbnail?: string; // サムネイル画像のパス（ブログ記事用）

  // TOPページBlogスライダー表示用データ（オプション）
  topPageDisplay?: {
    showOnTop: boolean;           // TOPページに表示するか
    slideImage: any;              // スライダー用画像（ImageMetadata）
    displayOrder: number;         // 表示順序（1から開始）
  };
}

export const informationPosts: InformationPost[] = [
  {
    id: 'info-001',
    slug: 'homepage-renewal',
    date: '2024-06-25',
    category: 'お知らせ',
    title: 'ホームページをリニューアルいたしました。',
    content: `
      <p>平素は当ホテルをご愛顧いただき、誠にありがとうございます。</p>
      <p>この度、ホームページを全面リニューアルいたしました。</p>
      <p>より見やすく、使いやすいサイトを目指して、デザインや構成を一新しています。</p>
      <figure>
        <img src="/images/blog/renewal-image.jpg" alt="リニューアルされたホームページのイメージ">
      </figure>
      <p>新しいホームページでは、以下の点が改善されました：</p>
      <ul>
        <li>モバイル端末での閲覧性向上</li>
        <li>予約システムの簡素化</li>
        <li>施設情報の充実</li>
        <li>アクティビティ情報の拡充</li>
      </ul>
      <p>今後とも、皆様により良いサービスをご提供できるよう努めてまいります。</p>
      <p>引き続きご愛顧のほど、よろしくお願い申し上げます。</p>
    `,
  },
  {
    id: 'info-002',
    slug: 'summer-event-2024',
    date: '2024-06-20',
    category: 'イベント情報',
    title: '夏季特別イベント「海辺の音楽祭」開催のお知らせ',
    content: `
      <p>今年も恒例の夏季特別イベント「海辺の音楽祭」を開催いたします。</p>
      <p>美しい夕日を背景に、心地よい音楽をお楽しみください。</p>
      <h3>イベント詳細</h3>
      <ul>
        <li>開催日：2024年7月15日（土）〜16日（日）</li>
        <li>時間：17:00〜20:00</li>
        <li>場所：ホテル前ビーチ特設ステージ</li>
        <li>料金：無料（ご宿泊者様限定）</li>
      </ul>
      <p>地元アーティストによる生演奏やフラダンスショーなど、多彩なプログラムをご用意しています。</p>
      <p>ご家族やご友人と素敵な夏の思い出をお作りください。</p>
    `,
  },
  {
    id: 'info-003',
    slug: 'new-spa-menu',
    date: '2024-06-15',
    category: 'お知らせ',
    title: '新しいスパメニューが登場しました',
    content: `
      <p>リラクゼーション施設に新しいスパメニューが加わりました。</p>
      <p>地元の天然素材を使用した、心身ともにリフレッシュできるトリートメントをご体験ください。</p>
      <h3>新メニュー</h3>
      <ul>
        <li>沖縄海泥パック（60分）</li>
        <li>月桃アロマトリートメント（90分）</li>
        <li>シークヮーサーボディスクラブ（45分）</li>
      </ul>
      <p>ご予約は、フロントまたはお電話にて承っております。</p>
    `,
  },
  {
    id: 'info-004',
    slug: 'marine-activity-campaign',
    date: '2024-06-10',
    category: 'ブログ記事',
    title: 'マリンアクティビティ体験記：スタッフが挑戦してみました！',
    thumbnail: 'demo.png',
    content: `
      <p>こんにちは！フロントスタッフの山田です。</p>
      <p>今回は、当ホテルで人気のマリンアクティビティを実際に体験してきました。</p>
      <figure>
        <img src="/images/blog/marine-activity.jpg" alt="マリンアクティビティの様子">
      </figure>
      <h3>シュノーケリング体験</h3>
      <p>まず挑戦したのはシュノーケリング。透明度抜群の海で、カラフルな熱帯魚たちと泳ぐことができました。</p>
      <p>初心者の方でも、インストラクターが丁寧に指導してくれるので安心です。</p>
      <h3>SUP（スタンドアップパドルボード）</h3>
      <p>次に挑戦したのがSUP。最初はバランスを取るのが難しかったですが、慣れてくると海上散歩を楽しめます。</p>
      <p>朝の静かな海でのSUPは、特におすすめです。</p>
      <p>皆様もぜひ、当ホテルでマリンアクティビティをお楽しみください！</p>
    `,
    topPageDisplay: {
      showOnTop: true,
      slideImage: TopBlogSlide01,
      displayOrder: 1,
    },
  },
  {
    id: 'info-005',
    slug: 'restaurant-new-menu',
    date: '2024-06-05',
    category: 'お知らせ',
    title: 'レストラン夏季限定メニューのご案内',
    content: `
      <p>レストランでは、夏季限定の特別メニューをご用意いたしました。</p>
      <p>地元の新鮮な食材を使用した、この季節ならではの味覚をお楽しみください。</p>
      <h3>おすすめメニュー</h3>
      <ul>
        <li>沖縄県産マンゴーのパフェ</li>
        <li>ゴーヤーと島豆腐のチャンプルー</li>
        <li>近海魚のカルパッチョ</li>
        <li>パイナップルとシークヮーサーのソルベ</li>
      </ul>
      <p>期間：2024年6月1日〜8月31日</p>
      <p>ご予約・お問い合わせは、レストラン直通電話までお願いいたします。</p>
    `,
  },
  {
    id: 'info-006',
    slug: 'coolturf-area-complete',
    date: '2024-05-18',
    category: 'ブログ記事',
    title: '『coolturf』エリア完成！',
    thumbnail: 'demo.png',
    content: `
      <p>皆様お待たせいたしました！ついに新しいリラクゼーションエリア『coolturf』が完成しました。</p>
      <figure>
        <img src="/images/blog/coolturf.jpg" alt="coolturfエリアの全景">
      </figure>
      <p>このエリアは、天然芝を使用した開放的な空間で、海を眺めながらゆったりとお過ごしいただけます。</p>
      <h3>coolturfエリアの特徴</h3>
      <ul>
        <li>約500平米の広々とした天然芝スペース</li>
        <li>ハンモックやデイベッドを完備</li>
        <li>夕日を眺める絶好のロケーション</li>
        <li>ペット同伴可能エリアも併設</li>
      </ul>
      <p>朝のヨガクラスや、夕方のサンセットタイムには、ドリンクサービスも行っております。</p>
      <p>ぜひ新しいcoolturfエリアで、至福のひとときをお過ごしください。</p>
    `,
    topPageDisplay: {
      showOnTop: true,
      slideImage: TopBlogSlide02,
      displayOrder: 2,
    },
  },
  {
    id: 'info-007',
    slug: 'spring-special-plan',
    date: '2024-04-10',
    category: 'ブログ記事',
    title: '春の特別プラン受付開始',
    thumbnail: 'demo.png',
    content: `
      <p>春の訪れとともに、特別な宿泊プランをご用意いたしました。</p>
      <figure>
        <img src="/images/blog/spring-plan.jpg" alt="春の特別プランイメージ">
      </figure>
      <h3>プラン内容</h3>
      <p>この春だけの特別なおもてなしをご体験ください。</p>
      <ul>
        <li>春の味覚を堪能できる特別会席</li>
        <li>スパトリートメント20%オフ</li>
        <li>アーリーチェックイン（13:00〜）</li>
        <li>お部屋グレードアップ（空室状況による）</li>
      </ul>
      <p>期間：2024年4月1日〜5月31日</p>
      <p>春の沖縄は過ごしやすい気候で、観光にも最適な季節です。</p>
      <p>この機会にぜひ、光風閣くわるびでゆったりとした時間をお過ごしください。</p>
    `,
    topPageDisplay: {
      showOnTop: true,
      slideImage: TopBlogSlide03,
      displayOrder: 3,
    },
  },
  {
    id: 'info-008',
    slug: 'new-spa-menu-blog',
    date: '2024-03-05',
    category: 'ブログ記事',
    title: '新しいスパメニューが登場しました',
    thumbnail: 'demo.png',
    content: `
      <p>リラクゼーション施設より、新しいスパメニューのご紹介です。</p>
      <figure>
        <img src="/images/blog/spa-menu.jpg" alt="新しいスパメニュー">
      </figure>
      <p>今回新たに加わったメニューは、すべて沖縄の自然の恵みを活かしたトリートメントです。</p>
      <h3>新メニューの詳細</h3>
      <h4>沖縄海泥パック（60分）</h4>
      <p>ミネラル豊富な沖縄の海泥を使用。デトックス効果と美肌効果が期待できます。</p>
      <h4>月桃アロマトリートメント（90分）</h4>
      <p>沖縄の伝統的な植物「月桃」のエッセンシャルオイルを使用した全身トリートメント。</p>
      <h4>シークヮーサーボディスクラブ（45分）</h4>
      <p>ビタミンCたっぷりのシークヮーサーを使用した、爽やかな香りのボディスクラブ。</p>
      <p>各メニューとも、施術後はハーブティーのサービスがございます。</p>
      <p>日頃の疲れを癒しに、ぜひお試しください。</p>
    `,
    topPageDisplay: {
      showOnTop: true,
      slideImage: TopBlogSlide04,
      displayOrder: 4,
    },
  },
];

// Helper function to get an information post by slug
export function getInformationBySlug(
  slug: string
): InformationPost | undefined {
  return informationPosts.find((post) => post.slug === slug);
}

// Helper function to get previous and next posts within the same category
export function getAdjacentPosts(currentSlug: string): {
  prev: InformationPost | null;
  next: InformationPost | null;
} {
  const currentPost = informationPosts.find(
    (post) => post.slug === currentSlug
  );

  if (!currentPost) {
    return { prev: null, next: null };
  }

  // Filter posts by the same category
  const sameCategoryPosts = informationPosts.filter(
    (post) => post.category === currentPost.category
  );
  const currentIndex = sameCategoryPosts.findIndex(
    (post) => post.slug === currentSlug
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? sameCategoryPosts[currentIndex - 1] : null,
    next:
      currentIndex < sameCategoryPosts.length - 1
        ? sameCategoryPosts[currentIndex + 1]
        : null,
  };
}

// Helper function to format date
export function formatDate(dateString: string): {
  year: string;
  month: string;
  day: string;
  full: string;
} {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return {
    year,
    month,
    day,
    full: `${year}.${month}.${day}`,
  };
}

// Helper function to get latest information posts for TOP page (max 4)
export function getTopPageInformationPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.category === 'お知らせ')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}

// Helper function to get latest event posts for TOP page (max 4)
export function getTopPageEventPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.category === 'イベント情報')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}

// Helper function to get blog posts for TOP page Blog slider
export function getTopPageBlogPosts(): InformationPost[] {
  return informationPosts
    .filter((post) => post.topPageDisplay?.showOnTop)
    .sort(
      (a, b) =>
        (a.topPageDisplay?.displayOrder || 0) -
        (b.topPageDisplay?.displayOrder || 0),
    );
}
