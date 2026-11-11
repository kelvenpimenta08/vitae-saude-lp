'use client';

import { useEffect } from 'react';

const revealSelector = [
  '.section-intro > *',
  '.steps > li',
  '.plan-card',
  '.quiz-intro > *',
  '.quiz-card',
  '.city-card',
  '.specialty-list > div',
  '.locations-copy > *',
  '.location-panel',
  '.exams-card > *',
  '.human-proof > *',
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

    return () => {
      revealObserver.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
