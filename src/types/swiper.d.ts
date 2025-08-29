// Swiper v11用の型定義

declare module 'swiper' {
  export default class Swiper {
    constructor(element: string | HTMLElement, options?: any);
    destroy(): void;
    update(): void;
    updateSlides(): void;
    updateSize(): void;
    updateProgress(): void;
    updateSlidesProgress(): void;
    updateAutoHeight(): void;
    slideTo(index: number, speed?: number, runCallbacks?: boolean): void;
    slideNext(speed?: number, runCallbacks?: boolean): void;
    slidePrev(speed?: number, runCallbacks?: boolean): void;
  }
}

declare module 'swiper/modules' {
  export interface NavigationOptions {
    nextEl?: string | HTMLElement;
    prevEl?: string | HTMLElement;
    hideOnClick?: boolean;
    disabledClass?: string;
    hiddenClass?: string;
  }

  export interface PaginationOptions {
    el: string | HTMLElement;
    type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
    bulletElement?: string;
    dynamicBullets?: boolean;
    dynamicMainBullets?: number;
    hideOnClick?: boolean;
    clickable?: boolean;
    progressbarOpposite?: boolean;
    formatFractionCurrent?: (number: number) => string;
    formatFractionTotal?: (number: number) => string;
    renderBullet?: (index: number, className: string) => string;
    renderFraction?: (currentClass: string, totalClass: string) => string;
    renderProgressbar?: (progressbarFillClass: string) => string;
    renderCustom?: (swiper: any, current: number, total: number) => string;
  }

  export interface AutoplayOptions {
    delay?: number;
    stopOnLastSlide?: boolean;
    disableOnInteraction?: boolean;
    reverseDirection?: boolean;
    waitForTransition?: boolean;
    pauseOnMouseEnter?: boolean;
  }

  export interface EffectFadeOptions {
    crossFade?: boolean;
  }

  export class Navigation {
    static moduleName: string;
  }

  export class Pagination {
    static moduleName: string;
  }

  export class Autoplay {
    static moduleName: string;
  }

  export class EffectFade {
    static moduleName: string;
  }
}

declare module 'swiper/css' {
  // CSSファイルのインポート用
}

declare module 'swiper/css/navigation' {
  // Navigation CSS
}

declare module 'swiper/css/pagination' {
  // Pagination CSS
}

declare module 'swiper/css/effect-fade' {
  // EffectFade CSS
}