// Astroコンポーネントの型定義

declare module '*.astro' {
  const Component: any;
  export default Component;
}

// SVGファイルの型定義
declare module '*.svg' {
  const content: {
    src: string;
    width: number;
    height: number;
  };
  export default content;
}

// 画像ファイルの型定義  
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}