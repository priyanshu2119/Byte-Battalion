import { Users } from 'lucide-react';
import { Button } from './ui/button';
import type { Community } from '@/data/seed';

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-orbit-5 hover:shadow-soft">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orbit-4 to-orbit-5">
          <span className="text-2xl font-bold">
            {community.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{community.name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted">
            <Users className="h-3 w-3" />
            <span>{community.members.toLocaleString()} members</span>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-muted">{community.description}</p>

      <Button variant="outline" className="w-full">
        Join Community
      </Button>
    </div>
  );
}
