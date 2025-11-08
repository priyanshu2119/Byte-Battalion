import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppStore } from '@/lib/state';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(
  ref: RefObject<HTMLElement>,
  selector: string = '.reveal-item'
) {
  const reducedMotion = useAppStore((s) => s.reducedMotion);

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const elements = ref.current.querySelectorAll(selector);

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, selector, reducedMotion]);
}
