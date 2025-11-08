'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface DevIdCardProps {
  devId: string;
  name: string;
  handle: string;
  avatarUrl?: string;
}

export function DevIdCard({ devId, name, handle, avatarUrl }: DevIdCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(devId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-outline bg-gradient-to-br from-surface to-elev p-6 shadow-hard">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orbit-2 opacity-20 blur-3xl" />

      <div className="relative space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-mono text-muted">DEV ORBIT</p>
            <h3 className="mt-1 text-xl font-bold">{name}</h3>
            <p className="text-sm text-muted">@{handle}</p>
          </div>
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orbit-1 to-orbit-2" />
        </div>

        {/* Dev ID */}
        <div className="space-y-2">
          <p className="text-xs text-muted">Developer ID</p>
          <div className="flex items-center justify-between rounded-lg bg-bg/50 p-3">
            <code className="font-mono text-sm">{devId}</code>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleCopy}
              className="h-8 w-8"
            >
              {copied ? (
                <Check className="h-4 w-4 text-success" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center rounded-lg bg-white p-4">
          <QRCodeSVG
            value={`https://devorbit.dev/profile/${devId}`}
            size={120}
            level="H"
            includeMargin
          />
        </div>

        <p className="text-center text-xs text-muted">
          Scan to view profile
        </p>
      </div>
    </div>
  );
}
