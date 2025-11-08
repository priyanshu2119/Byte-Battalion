# DevOrbit 🌌

> Your unified developer identity across events, hackathons, communities, and platforms.

A production-grade Next.js 15 app featuring cosmic orbital navigation, verifiable event participation, and hyperlocal developer discovery.

## ✨ Features

- **Orbital Navigation**: Interactive 3D navigation with planets orbiting around a central hub
- **Dev ID System**: Unique, verifiable developer identities with QR codes
- **Tech Janam Kundli**: Timeline of your tech journey with verification badges
- **Hyperlocal Discovery**: Find nearby developers with privacy-first location fuzzing
- **Event Verification**: Organizers can issue verifiable participation badges
- **Full Accessibility**: WCAG 2.2 AA compliant with reduced motion support
- **Dark/Light Themes**: Beautiful cosmic design in both modes
- **PWA Ready**: Installable with offline support

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Run E2E tests
pnpm e2e
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: Radix UI (via shadcn/ui)
- **Animation**: GSAP + Framer Motion + Lenis
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Icons**: Lucide React
- **Testing**: Playwright + Vitest
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── create-id/         # Dev ID creation flow
│   ├── profile/[devid]/   # Public profile pages
│   ├── events/            # Events browser
│   ├── hackathons/        # Hackathons browser
│   ├── communities/       # Communities directory
│   ├── hyperlocal/        # Nearby devs radar
│   ├── organizers/        # Organizer dashboard
│   ├── settings/          # User settings
│   └── legal/             # Privacy & Terms
├── components/            # React components
│   ├── ui/               # shadcn/ui primitives
│   ├── OrbitalNav.tsx    # Orbital navigation
│   ├── KundliTimeline.tsx # Timeline component
│   └── ...
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities & config
├── data/                  # Mock data & seeds
├── styles/                # Global styles & tokens
├── e2e/                   # Playwright tests
└── tests/                 # Unit tests
```

## 🎨 Design System

The app uses a cosmic design language with:

- **Orbit Spectrum**: 5 signature colors (cyan, violet, pink, gold, green)
- **Fluid Typography**: Responsive type scale using clamp()
- **Motion Language**: Orbital arcs, parallax, magnetic hover
- **Accessibility**: Focus rings, keyboard navigation, screen reader support

## ⚡ Performance

- Lighthouse scores: 90+ across all metrics
- Code splitting & lazy loading
- Optimized images with next/image
- Minimal first load JS (< 180KB gzipped)

## 🔐 Privacy & Security

- Location fuzzing for hyperlocal features (~200m radius)
- Granular privacy controls
- Consent-first data collection
- No data selling, ever

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests (requires dev server)
pnpm e2e

# Lint
pnpm lint

# Format
pnpm format
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_POSTHOG_KEY=your_key_here  # Optional analytics
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🤝 Contributing

This is a demo project showcasing production-grade Next.js development. Feel free to fork and adapt for your needs.

## 📄 License

MIT License - feel free to use this project as a template or learning resource.

## 🌟 Highlights

- **Zero Template Look**: Custom-designed components and interactions
- **Production Ready**: Full error handling, loading states, and edge cases
- **Accessible**: Keyboard navigation, screen readers, reduced motion
- **Type Safe**: Full TypeScript coverage with strict mode
- **Well Tested**: Unit and E2E tests included
- **Developer Experience**: ESLint, Prettier, Husky pre-commit hooks

---

Built with 💜 for the developer community
