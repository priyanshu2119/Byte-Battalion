'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import type { NearbyDev } from '@/data/seed';
import { useAppStore } from '@/lib/state';

interface NearbyRadarProps {
  devs: NearbyDev[];
}

export function NearbyRadar({ devs }: NearbyRadarProps) {
  const radarRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useAppStore((s) => s.reducedMotion);

  useEffect(() => {
    if (!radarRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to('.radar-ring', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power1.out',
        stagger: 0.5,
      });

      gsap.to('.dev-blip', {
        scale: 1.1,
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      });
    }, radarRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={radarRef} className="space-y-8">
      {/* Radar Visualization */}
      <div className="relative mx-auto aspect-square w-full max-w-md">
        {/* Center pulse */}
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orbit-2 shadow-lg" />

        {/* Rings */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="radar-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orbit-2/30"
            style={{
              width: `${i * 33}%`,
              height: `${i * 33}%`,
            }}
          />
        ))}

        {/* Dev blips */}
        {devs.map((dev, i) => {
          const angle = (i * 360) / devs.length;
          const distance = 30 + (dev.distance / 4) * 20;
          const x = Math.round(Math.cos((angle * Math.PI) / 180) * distance * 100) / 100;
          const y = Math.round(Math.sin((angle * Math.PI) / 180) * distance * 100) / 100;

          return (
            <motion.div
              key={dev.id}
              className="dev-blip absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orbit-1 shadow-lg"
              style={{
                transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))`,
              }}
              whileHover={{ scale: 1.5 }}
            />
          );
        })}
      </div>

      {/* Dev List */}
      <div className="space-y-4">
        <h3 className="font-semibold">Nearby Developers</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {devs.map((dev) => (
            <div
              key={dev.id}
              className="rounded-lg border border-outline bg-surface/50 p-4 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orbit-1 to-orbit-2" />
                <div className="flex-1">
                  <p className="font-semibold">{dev.name}</p>
                  <p className="text-xs text-muted">@{dev.handle}</p>
                </div>
                <span className="text-xs text-muted">{dev.distance}km</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-1">
                {dev.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-elev px-2 py-0.5 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2">
                <MessageCircle className="h-3 w-3" />
                Say Hi
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
