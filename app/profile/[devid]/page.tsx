'use client';

import { useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { KundliTimeline } from '@/components/KundliTimeline';
import { mockUser, mockTimeline } from '@/data/seed';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useAppStore } from '@/lib/state';

export default function ProfilePage() {
  const params = useParams();
  const timelineRef = useRef<HTMLDivElement>(null);
  useScrollReveal(timelineRef);
  
  const devId = params.devid as string;
  const getUserById = useAppStore((s) => s.getUserById);
  const user = getUserById(devId) || mockUser;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${user.name} - DevOrbit`,
        text: 'Check out my Dev ID on DevOrbit',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-muted hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Profile Header */}
        <div className="mb-12 rounded-xl border border-outline bg-surface/50 p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orbit-1 to-orbit-2" />
              <div>
                <h1 className="text-step-2 font-bold">{user.name}</h1>
                <p className="text-muted">@{user.handle}</p>
                {user.bio && <p className="mt-2 text-sm">{user.bio}</p>}
              </div>
            </div>
            <Button onClick={handleShare} variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-outline pt-6">
            <div>
              <p className="text-2xl font-bold font-mono text-orbit-2">
                {mockTimeline.length}
              </p>
              <p className="text-sm text-muted">Events</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-orbit-3">
                {mockTimeline.filter((e) => e.verifiedBy).length}
              </p>
              <p className="text-sm text-muted">Verified</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-orbit-4">
                {new Set(mockTimeline.map((e) => e.city)).size}
              </p>
              <p className="text-sm text-muted">Cities</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <h2 className="mb-6 text-step-2 font-bold">Tech Janam Kundli</h2>
          <KundliTimeline entries={mockTimeline} />
        </div>
      </div>
    </div>
  );
}
