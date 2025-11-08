export interface TimelineEntry {
  id: string;
  type: 'event' | 'hackathon' | 'talk' | 'cert';
  title: string;
  org: string;
  city: string;
  date: string;
  verifiedBy?: string;
  proofUrl?: string;
  visibility: 'public' | 'private';
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  org: string;
  city: string;
  startDate: string;
  endDate: string;
  tags: string[];
  verified: boolean;
  description: string;
}

export interface Community {
  id: string;
  name: string;
  logo: string;
  members: number;
  description: string;
}

export interface NearbyDev {
  id: string;
  handle: string;
  name: string;
  avatarUrl: string;
  distance: number;
  skills: string[];
}

export const mockUser = {
  devId: 'DEV-ankit-4271',
  name: 'Ankit Sharma',
  handle: 'ankit',
  email: 'ankit@example.com',
  avatarUrl: '/avatars/default.svg',
  bio: 'Full-stack developer passionate about building communities and open source.',
};

export const mockTimeline: TimelineEntry[] = [
  {
    id: '1',
    type: 'hackathon',
    title: 'Smart India Hackathon 2024',
    org: 'Government of India',
    city: 'New Delhi',
    date: '2024-03-15',
    verifiedBy: 'SIH Official',
    proofUrl: '#',
    visibility: 'public',
    description: 'Built an AI-powered healthcare solution',
  },
  {
    id: '2',
    type: 'event',
    title: 'Google I/O Extended',
    org: 'GDG Noida',
    city: 'Noida',
    date: '2024-05-20',
    verifiedBy: 'GDG Noida',
    visibility: 'public',
  },
  {
    id: '3',
    type: 'talk',
    title: 'Introduction to Web3',
    org: 'DevFest Delhi',
    city: 'Delhi',
    date: '2024-02-10',
    visibility: 'public',
  },
  {
    id: '4',
    type: 'cert',
    title: 'AWS Solutions Architect',
    org: 'Amazon Web Services',
    city: 'Online',
    date: '2024-01-05',
    verifiedBy: 'AWS',
    proofUrl: '#',
    visibility: 'public',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'DevFest Delhi 2024',
    org: 'GDG Delhi',
    city: 'Delhi',
    startDate: '2024-11-15',
    endDate: '2024-11-15',
    tags: ['conference', 'google', 'community'],
    verified: true,
    description: 'Annual developer festival by Google Developer Groups',
  },
  {
    id: '2',
    title: 'React India 2024',
    org: 'React Community',
    city: 'Bangalore',
    startDate: '2024-12-01',
    endDate: '2024-12-02',
    tags: ['react', 'javascript', 'conference'],
    verified: true,
    description: 'India\'s largest React conference',
  },
  {
    id: '3',
    title: 'Hacktoberfest Meetup',
    org: 'MLH',
    city: 'Mumbai',
    startDate: '2024-10-20',
    endDate: '2024-10-20',
    tags: ['opensource', 'meetup'],
    verified: false,
    description: 'Celebrate open source contributions',
  },
];

export const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'GDG Noida',
    logo: '/logos/gdg.svg',
    members: 5200,
    description: 'Google Developer Group fostering tech community in Noida',
  },
  {
    id: '2',
    name: 'Commudle',
    logo: '/logos/commudle.svg',
    members: 12000,
    description: 'Platform connecting tech communities across India',
  },
  {
    id: '3',
    name: 'Major League Hacking',
    logo: '/logos/mlh.svg',
    members: 150000,
    description: 'Official student hackathon league',
  },
];

export const mockNearbyDevs: NearbyDev[] = [
  {
    id: '1',
    handle: 'priya-dev',
    name: 'Priya K',
    avatarUrl: '/avatars/1.svg',
    distance: 0.8,
    skills: ['React', 'Node.js'],
  },
  {
    id: '2',
    handle: 'rahul-codes',
    name: 'Rahul M',
    avatarUrl: '/avatars/2.svg',
    distance: 1.2,
    skills: ['Python', 'ML'],
  },
  {
    id: '3',
    handle: 'sneha-builds',
    name: 'Sneha P',
    avatarUrl: '/avatars/3.svg',
    distance: 2.1,
    skills: ['Flutter', 'Firebase'],
  },
  {
    id: '4',
    handle: 'arjun-tech',
    name: 'Arjun S',
    avatarUrl: '/avatars/4.svg',
    distance: 3.5,
    skills: ['Go', 'Docker'],
  },
];
