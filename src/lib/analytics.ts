const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function hasAnalytics(): boolean {
  return Boolean(GA_ID);
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !GA_ID) return;
  window.gtag?.("event", name, params);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
