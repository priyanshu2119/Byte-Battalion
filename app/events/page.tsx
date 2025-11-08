'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Filter } from 'lucide-react';
import { EventCard } from '@/components/EventCard';
import { mockEvents } from '@/data/seed';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'verified'>('all');

  const filtered =
    filter === 'all'
      ? mockEvents
      : mockEvents.filter((e) => e.verified);

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

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-step-3 font-bold">Events</h1>
            <p className="text-muted">Discover tech events across India</p>
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
            <TabsList>
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="verified">Verified Only</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-lg border border-dashed border-outline p-12 text-center">
            <p className="text-muted">
              No events match your filters. Try widening your orbit.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
