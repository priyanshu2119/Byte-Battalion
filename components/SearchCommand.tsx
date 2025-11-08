'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Home,
  User,
  Calendar,
  Trophy,
  Users,
  MapPin,
  Settings,
  Moon,
  Sun,
} from 'lucide-react';
import { useTheme } from 'next-themes';

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/create-id'))}
          >
            <User className="mr-2 h-4 w-4" />
            Create Dev ID
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/events'))}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Events
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/hackathons'))}
          >
            <Trophy className="mr-2 h-4 w-4" />
            Hackathons
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/communities'))}
          >
            <Users className="mr-2 h-4 w-4" />
            Communities
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/hyperlocal'))}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Hyperlocal
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push('/settings'))}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
            <Sun className="mr-2 h-4 w-4" />
            Light
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
