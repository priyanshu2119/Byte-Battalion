# Architecture Overview

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.4
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4
- **Component Library**: Radix UI (via shadcn/ui)
- **Icons**: Lucide React

### Animation
- **GSAP**: Core animations, ScrollTrigger
- **Framer Motion**: UI micro-interactions
- **Lenis**: Smooth scrolling

### State Management
- **Zustand**: Global state (user, theme, preferences)
- **React Hook Form**: Form state
- **next-themes**: Theme management

### Data Validation
- **Zod**: Schema validation
- **@hookform/resolvers**: Form validation integration

### Testing
- **Vitest**: Unit tests
- **Playwright**: E2E tests
- **Testing Library**: Component tests

### Tooling
- **ESLint**: Linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit checks

## Project Structure

```
devorbit/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── create-id/           # Dev ID creation
│   ├── profile/[devid]/     # Dynamic profile pages
│   ├── events/              # Events browser
│   ├── hackathons/          # Hackathons browser
│   ├── communities/         # Communities directory
│   ├── hyperlocal/          # Nearby devs
│   ├── organizers/          # Organizer dashboard
│   ├── settings/            # User settings
│   ├── legal/               # Legal pages
│   ├── api/                 # API routes
│   │   └── og/              # Dynamic OG images
│   └── not-found.tsx        # 404 page
│
├── components/              # React components
│   ├── ui/                  # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── OrbitalNav.tsx       # Orbital navigation
│   ├── KundliTimeline.tsx   # Timeline component
│   ├── DevIdCard.tsx        # Dev ID card
│   ├── NearbyRadar.tsx      # Hyperlocal radar
│   ├── ThemeToggle.tsx      # Theme switcher
│   ├── SearchCommand.tsx    # Command palette
│   └── Providers.tsx        # Context providers
│
├── hooks/                   # Custom React hooks
│   ├── useOrbitAnimation.ts # Hero animations
│   ├── usePageWarp.ts       # Page transitions
│   ├── useScrollReveal.ts   # Scroll animations
│   └── useToast.ts          # Toast notifications
│
├── lib/                     # Utilities & config
│   ├── utils.ts             # Helper functions
│   ├── state.ts             # Zustand store
│   ├── seo.ts               # SEO utilities
│   └── analytics.ts         # Analytics setup
│
├── data/                    # Mock data & types
│   └── seed.ts              # Demo data
│
├── styles/                  # Global styles
│   └── tokens.css           # Design tokens
│
├── public/                  # Static assets
│   ├── avatars/             # Avatar placeholders
│   ├── logos/               # Community logos
│   ├── manifest.json        # PWA manifest
│   └── ...
│
├── e2e/                     # Playwright tests
│   └── home.spec.ts
│
├── tests/                   # Unit tests
│   └── utils.test.ts
│
└── config files             # Configuration
    ├── next.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── playwright.config.ts
    ├── vitest.config.ts
    └── ...
```

## Data Flow

### Client-Side State
```
User Action → Component → Zustand Store → Re-render
```

### Form Submission
```
User Input → React Hook Form → Zod Validation → Submit Handler → State Update → Navigation
```

### Page Navigation
```
Click Planet → usePageWarp → GSAP Animation → Next.js Router → New Page
```

### Timeline Rendering
```
Page Load → Fetch Mock Data → Filter/Sort → Render Cards → ScrollTrigger Animations
```

## Component Patterns

### Composition
Components are composed from smaller primitives:
```tsx
<Dialog>
  <DialogTrigger>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Hooks
Custom hooks encapsulate logic:
```tsx
const warp = usePageWarp();
warp('/profile', '#8A7CFF');
```

### Server Components
Pages are Server Components by default, with 'use client' for interactivity:
```tsx
// app/page.tsx - Server Component
export default function Page() {
  return <ClientComponent />;
}

// components/ClientComponent.tsx
'use client';
export function ClientComponent() {
  // Client-side logic
}
```

## Styling Strategy

### Tailwind Utilities
Primary styling method:
```tsx
<div className="rounded-xl border border-outline bg-surface/50 p-6">
```

### CSS Variables
Design tokens in `tokens.css`:
```css
:root {
  --orbit-1: #8BE3FF;
  --orbit-2: #8A7CFF;
}
```

### Component Variants
Using `class-variance-authority`:
```tsx
const buttonVariants = cva('base-styles', {
  variants: {
    variant: { default: '...', outline: '...' },
    size: { sm: '...', lg: '...' }
  }
});
```

## Animation Architecture

### GSAP Timeline
```tsx
gsap.from('.hero-title', {
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: 'power2.out'
});
```

### Framer Motion
```tsx
<motion.div
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
>
```

### Reduced Motion
```tsx
const reducedMotion = useAppStore(s => s.reducedMotion);
if (reducedMotion) return; // Skip animations
```

## Performance Optimizations

### Code Splitting
```tsx
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />
});
```

### Image Optimization
```tsx
<Image
  src="/image.jpg"
  width={800}
  height={600}
  alt="Description"
  loading="lazy"
/>
```

### Font Optimization
```tsx
const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-inter'
});
```

## Accessibility Strategy

### Semantic HTML
```tsx
<nav aria-label="Orbital navigation">
  <button aria-label="Navigate to Profile">
```

### Keyboard Navigation
- TAB for focus
- ENTER/SPACE for activation
- ESC for dialogs

### Screen Readers
- ARIA labels
- Semantic landmarks
- Hidden text for context

### Focus Management
```css
.focus-orbit {
  outline: 2px solid var(--orbit-1);
  outline-offset: 3px;
}
```

## Future Architecture

### Backend Integration
```
Next.js API Routes → Database (PostgreSQL)
                  → Authentication (NextAuth)
                  → File Storage (S3)
```

### Real-time Features
```
WebSocket Server → Pusher/Ably → Client Updates
```

### Caching Strategy
```
Redis → API Cache → Database
     → Session Store
```

## Security Considerations

### Input Validation
- Zod schemas on client
- Server-side validation (future)
- SQL injection prevention
- XSS protection

### Authentication (Future)
- JWT tokens
- Secure cookies
- CSRF protection
- Rate limiting

### Privacy
- Location fuzzing
- Consent management
- Data minimization
- GDPR compliance
