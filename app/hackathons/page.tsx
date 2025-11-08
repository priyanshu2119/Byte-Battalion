'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { HackathonCard } from '@/components/HackathonCard';

const mockHackathons = [
  {
    id: '1',
    title: 'Smart India Hackathon 2024',
    org: 'Government of India',
    prize: '₹1,00,000',
    deadline: '2024-12-15',
    tags: ['AI/ML', 'Healthcare', 'EdTech'],
  },
  {
    id: '2',
    title: 'ETHIndia 2024',
    org: 'Devfolio',
    prize: '$50,000',
    deadline: '2024-12-01',
    tags: ['Blockchain', 'Web3', 'DeFi'],
  },
];

export default function HackathonsPage() {
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
          <h1 className="text-step-3 font-bold">Hackathons</h1>
          <p className="text-muted">
            Browse upcoming hackathons and verify your participation
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {mockHackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      </div>
    </div>
  );
}
