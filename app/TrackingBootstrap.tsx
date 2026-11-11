'use client';
import { useEffect } from 'react';
const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
export default function TrackingBootstrap() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    keys.forEach((key) => { const value = params.get(key); if (value) window.localStorage.setItem(`vitae_${key}`, value); });
    const handler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cta]');
      if (!target) return;
      const root = window as Window & { dataLayer?: Record<string, unknown>[] };
      root.dataLayer = root.dataLayer ?? [];
      root.dataLayer.push({ event: 'vitae_cta_click', cta: target.dataset.cta, page_url: window.location.href });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return null;
}
