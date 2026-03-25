# 🚀 Amsterdam Housing Scout: Deployment Guide

## Deployment to Vercel

### Prerequisites
- GitHub account (already have one: filippofra/HousingScoutClaude)
- Vercel account (free tier available at https://vercel.com)

### Step-by-Step Deployment Instructions

#### Step 1: Sign Up / Log In to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Select "Continue with GitHub"
4. Authorize Vercel to access your GitHub repositories

#### Step 2: Import the Project
1. In Vercel Dashboard, click "Add New" → "Project"
2. Search for "HousingScoutClaude" repository
3. Select the repository and click "Import"

#### Step 3: Configure Project
- **Framework Preset:** Vite (auto-detected)
- **Root Directory:** ./ (default)
- **Build Command:** `npm run build` (auto-detected from package.json)
- **Output Directory:** `dist` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

#### Step 4: Environment Variables (if needed)
Since the app doesn't require API keys for core functionality, no environment variables are required. However, if future enhancements need API integration:
1. Go to Project Settings → Environment Variables
2. Add any required variables (API keys, URLs, etc.)
3. Apply to all environments (Production, Preview, Development)

#### Step 5: Deploy
1. Click "Deploy"
2. Vercel will:
   - Clone the repository
   - Install dependencies (`npm install`)
   - Build the project (`npm run build`)
   - Deploy to a live URL

#### Expected Deployment Time
- First deployment: 2-3 minutes
- Subsequent deployments: 30-60 seconds

### Deployment URL
After successful deployment, you'll receive:
- **Production URL**: `https://housing-scout-[random].vercel.app/`
- **Git Commits**: Automatic deployment on every push to `main` branch
- **Preview URLs**: Automatic preview deployments for pull requests

### Verify Live Deployment

Once deployed, manually verify the following:

1. **Homepage loads**: Visit the production URL in browser
2. **Test all features**:
   - ✅ Switch between List and Map views
   - ✅ Toggle favorites and navigate to Favorites section
   - ✅ Adjust price filters
   - ✅ Filter by agency
   - ✅ View map with markers and popups
   - ✅ Refresh page and verify favorites persist
   - ✅ Test on mobile (DevTools → Device Toolbar)

3. **Check browser console**: No errors or critical warnings

### Performance Metrics (Expected)
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Bundle size: ~95KB gzipped

### Automatic Deployments
- **Main branch**: Automatically deploys to production
- **Other branches**: Creates preview deployments (shareable URLs)
- **Pull requests**: Automatic preview URLs in PR comments

### Troubleshooting

#### Build Fails
- Check that `package.json` has correct build script
- Verify all dependencies are installed locally first: `npm install`
- Check Vercel build logs for specific error messages

#### Dependencies Missing
- Ensure `package-lock.json` is committed to repository
- Vercel will run `npm install` automatically

#### Map Not Displaying
- Verify Leaflet CSS is imported: `import 'leaflet/dist/leaflet.css'`
- Check marker icon imports are correct
- Test locally first: `npm run dev`

#### Environment Variables Not Loading
- Variables must be added in Vercel Settings → Environment Variables
- Redeploy after adding variables
- Use `import.meta.env.VITE_*` for Vite environment variables

### Rollback
If a deployment causes issues:
1. Go to Deployments tab
2. Find the previous working deployment
3. Click "..." menu → "Promote to Production"
4. Changes take effect immediately

### Monitoring
- **Vercel Analytics**: Automatic performance monitoring
- **Logs**: View deployment logs in Vercel Dashboard → Deployments
- **Error tracking**: Check browser DevTools for client-side errors

### Custom Domain (Optional)
To use a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait 24-48 hours for propagation

### Next Steps After Deployment
1. ✅ Share production URL with team/stakeholders
2. ✅ Monitor performance and user feedback
3. ✅ Set up automated backups for localStorage data (optional)
4. ✅ Plan Phase 7 enhancements (backend API, database, etc.)

---

## Summary

| Aspect | Status |
| :--- | :--- |
| Build Ready | ✅ Zero TypeScript errors |
| Dependencies | ✅ All locked in package-lock.json |
| Environment Variables | ✅ Not required (no API keys) |
| Estimated Deploy Time | ⏱️ 2-3 minutes (first time) |
| Auto-Deploy on Push | ✅ Enabled by default |
| Production URL Pattern | `housing-scout-*.vercel.app` |

---

## Questions?

Refer to Vercel documentation: https://vercel.com/docs
