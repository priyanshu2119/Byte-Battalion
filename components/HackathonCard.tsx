import { Trophy, Calendar, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { formatDate } from '@/lib/utils';

interface HackathonCardProps {
  hackathon: {
    id: string;
    title: string;
    org: string;
    prize: string;
    deadline: string;
    tags: string[];
  };
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  return (
    <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
      <div className="mb-4">
        <h3 className="mb-1 text-xl font-semibold">{hackathon.title}</h3>
        <p className="text-sm text-muted">{hackathon.org}</p>
      </div>

      <div className="mb-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-orbit-4">
          <Trophy className="h-4 w-4" />
          <span className="font-semibold">{hackathon.prize}</span>
        </div>
        <div className="flex items-center gap-2 text-muted">
          <Calendar className="h-4 w-4" />
          <span>Deadline: {formatDate(hackathon.deadline)}</span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {hackathon.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-elev px-2 py-1 text-xs"
          >
            <Tag className="h-3 w-3" />
            {tag}
          </span>
        ))}
      </div>

      <Button variant="outline" className="w-full">
        Verify Participation
      </Button>
    </div>
  );
}
