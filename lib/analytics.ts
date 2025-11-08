import posthog from 'posthog-js';

export function initAnalytics() {
  if (
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_POSTHOG_KEY &&
    process.env.NODE_ENV === 'production'
  ) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: 'https://app.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      },
    });
  }
}

export function trackEvent(event: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(event, properties);
  }
}
