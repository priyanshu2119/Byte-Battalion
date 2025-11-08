'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAppStore } from '@/lib/state';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SettingsPage() {
  const { simpleNav, setSimpleNav, reducedMotion, setReducedMotion } =
    useAppStore();

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

        <div className="mb-8">
          <h1 className="text-step-3 font-bold">Settings</h1>
          <p className="text-muted">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="appearance" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="connected">Connected</TabsTrigger>
          </TabsList>

          <TabsContent value="appearance" className="space-y-6">
            <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold">Appearance</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <p className="text-sm text-muted">
                      Choose your preferred color scheme
                    </p>
                  </div>
                  <ThemeToggle />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="simple-nav">Simple Navigation</Label>
                    <p className="text-sm text-muted">
                      Use classic navbar instead of orbital navigation
                    </p>
                  </div>
                  <Switch
                    id="simple-nav"
                    checked={simpleNav}
                    onCheckedChange={setSimpleNav}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reduced-motion">Reduced Motion</Label>
                    <p className="text-sm text-muted">
                      Minimize animations and transitions
                    </p>
                  </div>
                  <Switch
                    id="reduced-motion"
                    checked={reducedMotion}
                    onCheckedChange={setReducedMotion}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold">Privacy</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Default Visibility</Label>
                    <p className="text-sm text-muted">
                      New timeline entries are public by default
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Show Location</Label>
                    <p className="text-sm text-muted">
                      Display city on your profile
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Hyperlocal Discovery</Label>
                    <p className="text-sm text-muted">
                      Allow others to discover you in Sworn Mode
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="connected" className="space-y-6">
            <div className="rounded-xl border border-outline bg-surface/50 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold">
                Connected Platforms
              </h2>

              <div className="space-y-4">
                {[
                  { name: 'GitHub', connected: false, scope: 'Profile, repos' },
                  { name: 'Google', connected: false, scope: 'Email, calendar' },
                  { name: 'LinkedIn', connected: false, scope: 'Profile' },
                  { name: 'Eventbrite', connected: false, scope: 'Events' },
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className="flex items-center justify-between rounded-lg border border-outline p-4"
                  >
                    <div>
                      <p className="font-medium">{platform.name}</p>
                      <p className="text-sm text-muted">
                        Scope: {platform.scope}
                      </p>
                    </div>
                    <Switch checked={platform.connected} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
