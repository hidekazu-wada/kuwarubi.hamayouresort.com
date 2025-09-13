export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  category: 'お知らせ' | 'イベント情報' | 'ブログ記事';
  title: string;
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
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
    `
  },
  {
    id: 'blog-002',
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
    `
  },
  {
    id: 'blog-003',
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
    `
  },
  {
    id: 'blog-004',
    slug: 'marine-activity-campaign',
    date: '2024-06-10',
    category: 'ブログ記事',
    title: 'マリンアクティビティ体験記：スタッフが挑戦してみました！',
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
    `
  },
  {
    id: 'blog-005',
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
    `
  }
];

// Helper function to get a blog post by slug
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get previous and next posts within the same category
export function getAdjacentPosts(currentSlug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const currentPost = blogPosts.find(post => post.slug === currentSlug);
  
  if (!currentPost) {
    return { prev: null, next: null };
  }
  
  // Filter posts by the same category
  const sameCategoryPosts = blogPosts.filter(post => post.category === currentPost.category);
  const currentIndex = sameCategoryPosts.findIndex(post => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  return {
    prev: currentIndex > 0 ? sameCategoryPosts[currentIndex - 1] : null,
    next: currentIndex < sameCategoryPosts.length - 1 ? sameCategoryPosts[currentIndex + 1] : null
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
    full: `${year}.${month}.${day}`
  };
}