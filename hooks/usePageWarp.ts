import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { useAppStore } from '@/lib/state';

export function usePageWarp() {
  const router = useRouter();
  const reducedMotion = useAppStore((s) => s.reducedMotion);

  const warp = (href: string, color: string) => {
    if (reducedMotion) {
      router.push(href);
      return;
    }

    // Create warp overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      background: radial-gradient(circle at center, ${color} 0%, transparent 70%);
      opacity: 0;
    `;
    document.body.appendChild(overlay);

    // Animate warp effect
    gsap.to(overlay, {
      opacity: 1,
      scale: 3,
      duration: 0.5,
      ease: 'expo.out',
      onComplete: () => {
        router.push(href);
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => overlay.remove(),
        });
      },
    });
  };

  return warp;
}
