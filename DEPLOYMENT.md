# Deployment Guide

## Quick Deploy

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

## Environment Variables

Create `.env.local` for local development:

```env
# Optional: PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production, set these in your hosting platform's dashboard.

## Build Commands

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Start production server
pnpm start
```

## Performance Checklist

- [ ] Enable compression (gzip/brotli)
- [ ] Configure CDN for static assets
- [ ] Set up image optimization
- [ ] Enable HTTP/2
- [ ] Configure caching headers
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Enable analytics (PostHog)
- [ ] Configure error tracking

## Security Checklist

- [ ] Set up CSP headers
- [ ] Enable HTTPS
- [ ] Configure CORS
- [ ] Set up rate limiting
- [ ] Enable security headers
- [ ] Configure authentication (when ready)
- [ ] Set up backup strategy

## Monitoring

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **PostHog**: Product analytics and feature flags
- **Sentry**: Error tracking
- **Lighthouse CI**: Automated performance testing

### Key Metrics to Track
- Core Web Vitals (LCP, FID, CLS)
- Time to Interactive (TTI)
- First Contentful Paint (FCP)
- Bundle size
- API response times
- Error rates

## Scaling Considerations

### CDN Configuration
- Cache static assets (images, fonts, CSS, JS)
- Set appropriate cache headers
- Use edge functions for dynamic content

### Database (Future)
- Use connection pooling
- Implement caching layer (Redis)
- Set up read replicas
- Monitor query performance

### API Rate Limiting
- Implement rate limiting per user/IP
- Use API keys for organizers
- Set up webhook retry logic

## Rollback Strategy

```bash
# Vercel: Instant rollback to previous deployment
vercel rollback

# Manual: Keep previous build artifacts
# Tag releases in git for easy rollback
git tag -a v1.0.0 -m "Release 1.0.0"
```

## Health Checks

Create `/api/health` endpoint:

```typescript
export async function GET() {
  return Response.json({ status: 'ok', timestamp: Date.now() });
}
```

## Continuous Deployment

### GitHub Actions Example

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm test
      - run: pnpm build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Post-Deployment

1. **Verify deployment**: Check all pages load correctly
2. **Run Lighthouse**: Ensure performance metrics
3. **Test critical flows**: Create ID, view profile, etc.
4. **Monitor errors**: Check error tracking dashboard
5. **Verify analytics**: Ensure tracking is working

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear `.next` folder
- Verify all dependencies installed
- Check for TypeScript errors

### Performance Issues
- Analyze bundle size: `pnpm build --analyze`
- Check for large dependencies
- Verify image optimization
- Review network waterfall

### Runtime Errors
- Check browser console
- Review server logs
- Verify environment variables
- Test in production mode locally
