'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initAnalytics } from '@/lib/analytics';
import { useAppStore } from '@/lib/state';

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useAppStore((s) => s.theme);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      useAppStore.setState({ reducedMotion: true, simpleNav: true });
    }
  }, []);

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme={theme}
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
