'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { VerificationBadge } from './VerificationBadge';
import { formatDate } from '@/lib/utils';
import { MapPin, Calendar } from 'lucide-react';
import type { TimelineEntry } from '@/data/seed';

interface KundliTimelineProps {
  entries: TimelineEntry[];
}

export function KundliTimeline({ entries }: KundliTimelineProps) {
  const [filter, setFilter] = useState<string>('all');

  const filtered =
    filter === 'all'
      ? entries
      : entries.filter((e) => e.type === filter);

  const sortedEntries = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="event">Events</TabsTrigger>
          <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
          <TabsTrigger value="talk">Talks</TabsTrigger>
          <TabsTrigger value="cert">Certs</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Timeline */}
      <div className="relative space-y-4">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-outline" />

        {sortedEntries.length === 0 ? (
          <div className="rounded-lg border border-dashed border-outline p-8 text-center">
            <p className="text-muted">
              Nothing in orbit yet. Add your first event.
            </p>
          </div>
        ) : (
          sortedEntries.map((entry) => (
            <div
              key={entry.id}
              className="reveal-item relative pl-12"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 border-bg"
                style={{
                  backgroundColor: `var(--orbit-${
                    entry.type === 'event'
                      ? '1'
                      : entry.type === 'hackathon'
                      ? '2'
                      : entry.type === 'talk'
                      ? '3'
                      : '4'
                  })`,
                }}
              />

              {/* Card */}
              <div className="rounded-lg border border-outline bg-surface/50 p-4 backdrop-blur-sm transition-colors hover:bg-elev">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="font-semibold">{entry.title}</h3>
                      {entry.verifiedBy && (
                        <VerificationBadge
                          status="verified"
                          verifier={entry.verifiedBy}
                        />
                      )}
                    </div>
                    <p className="text-sm text-muted">{entry.org}</p>
                    {entry.description && (
                      <p className="mt-2 text-sm">{entry.description}</p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {entry.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(entry.date)}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-elev px-3 py-1 text-xs font-medium capitalize">
                    {entry.type}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
