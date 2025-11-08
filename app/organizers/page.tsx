'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function OrganizersPage() {
  const [open, setOpen] = useState(false);

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
          <h1 className="text-step-3 font-bold">Organizer Dashboard</h1>
          <p className="text-muted">
            Issue verifiable badges to event participants
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-orbit-2">
              <Calendar className="h-5 w-5" />
              <span className="text-2xl font-bold font-mono">12</span>
            </div>
            <p className="text-sm text-muted">Events Hosted</p>
          </div>

          <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-orbit-3">
              <Users className="h-5 w-5" />
              <span className="text-2xl font-bold font-mono">1,247</span>
            </div>
            <p className="text-sm text-muted">Participants</p>
          </div>

          <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2 text-orbit-4">
              <Award className="h-5 w-5" />
              <span className="text-2xl font-bold font-mono">856</span>
            </div>
            <p className="text-sm text-muted">Badges Issued</p>
          </div>
        </div>

        {/* Issue Badge */}
        <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold">Issue Badge</h2>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Issue New Badge</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Issue Verification Badge</DialogTitle>
                <DialogDescription>
                  Issue a verifiable badge to an event participant
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="devid">Developer ID</Label>
                  <Input id="devid" placeholder="DEV-ankit-4271" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event">Event Name</Label>
                  <Input id="event" placeholder="DevFest Delhi 2024" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Participant / Speaker / Volunteer" />
                </div>

                <Button className="w-full" onClick={() => setOpen(false)}>
                  Issue Badge
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-6">
            <h3 className="mb-3 font-semibold">Recent Badges</h3>
            <div className="space-y-2">
              {[
                { devId: 'DEV-priya-8291', event: 'React India 2024', role: 'Participant' },
                { devId: 'DEV-rahul-5632', event: 'DevFest Delhi', role: 'Speaker' },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-outline p-3"
                >
                  <div>
                    <p className="font-mono text-sm">{badge.devId}</p>
                    <p className="text-xs text-muted">
                      {badge.event} • {badge.role}
                    </p>
                  </div>
                  <Award className="h-4 w-4 text-success" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
