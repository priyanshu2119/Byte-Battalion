'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CommunityCard } from '@/components/CommunityCard';
import { mockCommunities } from '@/data/seed';

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-muted hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-step-3 font-bold">Communities</h1>
          <p className="text-muted">
            Connect with tech communities across India
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockCommunities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}
