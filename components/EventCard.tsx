import { Calendar, MapPin, Tag, CheckCircle2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Event } from '@/data/seed';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-orbit-2 hover:shadow-soft">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-1 font-semibold group-hover:text-orbit-2 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-muted">{event.org}</p>
        </div>
        {event.verified && (
          <CheckCircle2 className="h-5 w-5 text-success" aria-label="Verified event" />
        )}
      </div>

      <p className="mb-4 text-sm">{event.description}</p>

      <div className="space-y-2 text-sm text-muted">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(event.startDate)}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{event.city}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-elev px-2 py-1 text-xs"
          >
            <Tag className="h-3 w-3" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
