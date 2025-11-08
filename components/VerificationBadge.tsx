import { CheckCircle2, AlertCircle, Users } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface VerificationBadgeProps {
  status: 'verified' | 'self-reported' | 'community-endorsed';
  verifier?: string;
}

export function VerificationBadge({
  status,
  verifier,
}: VerificationBadgeProps) {
  const config = {
    verified: {
      icon: CheckCircle2,
      color: 'text-success',
      label: 'Verified',
      description: verifier
        ? `Verified by ${verifier}`
        : 'Organizer verified',
    },
    'self-reported': {
      icon: AlertCircle,
      color: 'text-warning',
      label: 'Self-reported',
      description: 'Awaiting verification',
    },
    'community-endorsed': {
      icon: Users,
      color: 'text-orbit-2',
      label: 'Community endorsed',
      description: 'Endorsed by community members',
    },
  };

  const { icon: Icon, color, label, description } = config[status];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={`inline-flex items-center gap-1 text-xs ${color}`}
          aria-label={description}
        >
          <Icon className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">{label}</span>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
