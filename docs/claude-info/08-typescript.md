# TypeScript設定ガイド

## TypeScript型定義システム

### 概要

プロジェクトではTypeScript警告を解消し、開発体験を向上させるためにカスタム型定義システムを導入しています。

### 型定義ファイル

#### 1. `src/types/astro-components.d.ts`
- **目的**: Astroコンポーネントとアセットファイルの型定義
- **対象**: `.astro`, `.svg`, `.png`, `.jpg`, `.webp`ファイル

```typescript
// Astroコンポーネントの汎用型定義
declare module '*.astro' {
  const Component: any;
  export default Component;
}

// 画像アセットの型定義
declare module '*.png' {
  const src: string;
  export default src;
}
```

#### 2. `src/types/swiper.d.ts`
- **目的**: Swiper v11ライブラリの型定義
- **対象**: `swiper`, `swiper/modules`, `swiper/css/*`

```typescript
// Swiper本体の型定義
declare module 'swiper' {
  export default class Swiper {
    constructor(element: string | HTMLElement, options?: any);
    // メソッド定義...
  }
}

// モジュールの型定義
declare module 'swiper/modules' {
  export class Navigation { static moduleName: string; }
  export class Pagination { static moduleName: string; }
  export class Autoplay { static moduleName: string; }
  export class EffectFade { static moduleName: string; }
  // オプション interfaces...
}
```

### tsconfig.json設定

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [
    ".astro/types.d.ts", 
    "**/*", 
    "src/types/**/*.d.ts"
  ],
  "exclude": ["dist"],
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}
```

### 依存関係

- `@types/swiper`: Swiper用の基本型定義（devDependencies）

### 効果

- TypeScript警告の解消
- IntelliSense（コード補完）の改善
- 開発時のコード品質向上
- 型安全なプログラミング体験

### 新しいライブラリ追加時の手順

1. `npm install library-name`
2. 対応する`@types/library-name`があるかチェック
3. なければ`src/types/`に独自の型定義ファイルを作成
4. `tsconfig.json`の設定確認

この型定義システムにより、警告のない快適な開発環境を実現しています。