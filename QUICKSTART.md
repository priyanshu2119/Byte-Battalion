# DevOrbit - Quick Start Guide

## 🚀 Get Running in 3 Minutes

### Prerequisites
- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

```bash
# 1. Install dependencies
pnpm install

# 2. Run development server
pnpm dev

# 3. Open browser
# Navigate to http://localhost:3000
```

That's it! The app is now running locally.

## 🎯 First Steps

### 1. Explore the Home Page
- See the orbital navigation system in action
- Hover over planets to see tooltips
- Click planets to navigate (watch the warp effect!)
- Try the ⌘K / Ctrl+K command palette

### 2. Create Your Dev ID
- Click "Create your Dev ID" button
- Fill in your details
- Watch the live preview update
- Submit to see your profile

### 3. View Your Profile
- See your Tech Janam Kundli (timeline)
- Filter timeline entries
- Check verification badges
- View stats

### 4. Explore Features
- **Events**: Browse tech events
- **Hackathons**: Find hackathons to join
- **Communities**: Discover tech communities
- **Hyperlocal**: Enable Sworn Mode to see nearby devs
- **Settings**: Customize theme and preferences

## 🎨 Try These Features

### Easter Eggs
1. Type "ORBIT" anywhere on the home page → Comet animation!
2. Press ⌘K or Ctrl+K → Command palette

### Accessibility
1. Go to Settings → Enable "Simple Navigation"
2. Go to Settings → Enable "Reduced Motion"
3. Try navigating with TAB key only

### Themes
1. Click theme toggle in settings
2. Try Light, Dark, and System modes

## 📝 Development Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier

# Testing
pnpm test             # Run unit tests
pnpm e2e              # Run E2E tests (requires dev server)

# Type Checking
pnpm tsc --noEmit     # Check TypeScript errors
```

## 🔧 Configuration

### Environment Variables (Optional)
Create `.env.local`:

```env
# Optional: PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Customize Design Tokens
Edit `styles/tokens.css` to change colors, spacing, etc.

### Add Mock Data
Edit `data/seed.ts` to add more events, communities, etc.

## 📱 Test Responsive Design

```bash
# Open in different viewports
# Mobile: http://localhost:3000 (resize browser)
# Tablet: http://localhost:3000 (resize browser)
# Desktop: http://localhost:3000 (full screen)
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
```

### Build Errors
```bash
# Check TypeScript errors
pnpm tsc --noEmit

# Check ESLint errors
pnpm lint
```

## 📚 Next Steps

1. **Read Documentation**
   - `README.md` - Overview and setup
   - `ARCHITECTURE.md` - Technical details
   - `FEATURES.md` - Feature documentation
   - `DEPLOYMENT.md` - Deployment guide

2. **Explore Code**
   - `app/` - Pages and routing
   - `components/` - React components
   - `hooks/` - Custom hooks
   - `lib/` - Utilities

3. **Customize**
   - Update design tokens
   - Add your own mock data
   - Modify components
   - Add new pages

4. **Deploy**
   - Follow `DEPLOYMENT.md`
   - Deploy to Vercel (recommended)
   - Or Netlify, AWS, etc.

## 🎓 Learning Resources

### Key Technologies
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP](https://gsap.com/docs/v3/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

### Code Patterns
- Server Components vs Client Components
- React Hook Form + Zod validation
- Zustand state management
- GSAP animations with React
- Accessible component design

## 💡 Tips

1. **Performance**: Check bundle size with `pnpm build`
2. **Accessibility**: Test with keyboard only
3. **Responsive**: Test on mobile devices
4. **Dark Mode**: Toggle theme to test both modes
5. **Animations**: Enable reduced motion to test fallbacks

## 🤝 Contributing

This is a demo project, but feel free to:
- Fork and customize
- Report issues
- Suggest improvements
- Use as a learning resource

## 📞 Need Help?

- Check the documentation files
- Review code comments
- Look at component examples
- Test with mock data

---

**Happy coding! 🚀**

Built with Next.js 15, TypeScript, Tailwind CSS, and lots of ☕
