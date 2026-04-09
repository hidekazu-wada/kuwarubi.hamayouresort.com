// フェードインアップ
// `.js-fade-in-up` が付いた要素を監視し、画面内に入ったら `.is-visible` を付与する
// 一度表示したら監視解除（再発火しない）

const SELECTOR = '.js-fade-in-up';
const VISIBLE_CLASS = 'is-visible';

function init(): void {
  const targets = document.querySelectorAll<HTMLElement>(SELECTOR);
  if (targets.length === 0) return;

  // IntersectionObserver 非対応環境では即時表示
  if (typeof IntersectionObserver === 'undefined') {
    targets.forEach((el) => el.classList.add(VISIBLE_CLASS));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      // 画面下から少し入ったタイミングで発火
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.01,
    }
  );

  targets.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
