import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { useAppStore } from '@/lib/state';

export function useOrbitAnimation(ref: RefObject<HTMLElement>) {
  const reducedMotion = useAppStore((s) => s.reducedMotion);

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.from('.hero-title', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.hero-content > div:last-child', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, reducedMotion]);
}
