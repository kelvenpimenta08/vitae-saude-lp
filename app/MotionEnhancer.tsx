'use client';

import { useEffect } from 'react';

const revealSelector = [
  '.statement > *',
  '.section-intro > *',
  '.benefit-card',
  '.how-heading > *',
  '.steps > li',
  '.network-head > div',
  '.network-card',
  '.specialty-head > *',
  '.specialty-list > div',
  '.plan-card',
  '.locations-copy > *',
  '.location-panel',
  '.faq-list > details',
  '.final-cta > *',
].join(',');

export default function MotionEnhancer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    if (reduceMotion) {
      root.classList.add('motion-reduced');
      return;
    }

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    revealTargets.forEach((element, index) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });

    root.classList.add('motion-ready');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    revealTargets.forEach((element) => revealObserver.observe(element));

    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count-to]'));
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const target = Number(element.dataset.countTo ?? 0);
          const prefix = element.dataset.countPrefix ?? '';
          const suffix = element.dataset.countSuffix ?? '';
          const startedAt = performance.now();
          const duration = 950;

          const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          counterObserver.unobserve(element);
        });
      },
      { threshold: 0.65 },
    );

    counters.forEach((counter) => counterObserver.observe(counter));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
