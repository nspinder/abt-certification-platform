# Cloudflare Pages Deployment Guide

## Prerequisites
- Cloudflare account (free or paid)
- GitHub account with your code pushed
- GitHub repository set up
- Node.js 16+ installed locally

## Step-by-Step Deployment

### Step 1: Prepare Your Repository

#### 1.1 Initialize Git (if not already done)
```bash
cd /Users/spinderfam/abt-certification-platform
git init
git add .
git commit -m "Initial ABT platform commit"
```

#### 1.2 Add .gitignore
```bash
# Create/update .gitignore
cat > .gitignore << 'EOF'
node_modules/
.next/
.env.local
.env
dist/
build/
.vercel
data/
*.log
EOF
```

#### 1.3 Create GitHub Repository
1. Go to https://github.com/new
2. Name: `abt-certification-platform`
3. Description: "ABT1/ABT2 Certification Exam Platform"
4. Make it PUBLIC (needed for free Cloudflare Pages)
5. Create repository

#### 1.4 Push Code to GitHub
```bash
cd /Users/spinderfam/abt-certification-platform

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/abt-certification-platform.git

# Rename branch to main if needed
git branch -M main

# Push code
git push -u origin main
```

### Step 2: Configure Next.js for Cloudflare Pages

#### 2.1 Install Wrangler (Cloudflare CLI)
```bash
npm install -D wrangler
```

#### 2.2 Create wrangler.toml Configuration
```bash
cat > wrangler.toml << 'EOF'
name = "abt-certification-platform"
type = "javascript"
account_id = "" # Will be filled by Cloudflare
workers_dev = true
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

[env.production]
name = "abt-certification-platform-prod"
route = "abt.example.com/*"
zone_id = ""

[build]
command = "npm run build"
cwd = "./"

[build.upload]
format = "modules"
main = "./.wrangler/tmp/bundle_XXXXXX/index.js"
EOF
```

#### 2.3 Update package.json Build Script
```bash
# Edit package.json
# Change or add build script:
# "build": "next build"
```

### Step 3: Set Up Cloudflare Pages

#### 3.1 Log in to Cloudflare
1. Go to https://dash.cloudflare.com
2. Sign in with your account
3. Click "Pages" in the sidebar (under "Workers & Pages")

#### 3.2 Create New Project
1. Click "Create a project"
2. Select "Connect to Git"
3. Authorize GitHub (if first time)
4. Select repository: `abt-certification-platform`
5. Click "Begin setup"

#### 3.3 Build Configuration
Set these values:

**Framework preset**: Next.js

**Build command**: 
```
npm run build
```

**Build output directory**: 
```
.next
```

**Environment variables** (optional for now, we'll use localStorage):
- Leave blank for MVP

**Click "Save and Deploy"**

### Step 4: Monitor Deployment

#### 4.1 Watch Deployment Progress
1. After clicking "Save and Deploy", Cloudflare will:
   - Clone your repository
   - Install dependencies (npm install)
   - Build your project (npm run build)
   - Deploy to Cloudflare's global network

2. You'll see a log showing:
   ```
   ✓ Installing dependencies
   ✓ Building project
   ✓ Uploading files
   ✓ Deployment complete
   ```

3. Wait for the checkmark on "Deployment successful"

#### 4.2 Get Your Live URL
- Cloudflare will assign a URL like: `https://abt-certification-platform.pages.dev`
- This is your live platform!

### Step 5: Add Custom Domain (Optional)

#### 5.1 Add Your Domain
1. In Cloudflare Pages project settings
2. Click "Custom domains"
3. Enter your domain: `abt.yourdomain.com`
4. Click "Add domain"
5. Add DNS records shown (usually just an A record)

#### 5.2 Verify Domain
- Wait 5-10 minutes for DNS propagation
- Cloudflare will show "Active" when ready

### Step 6: Verify Deployment

#### 6.1 Test the Live Application
1. Open your Cloudflare Pages URL
2. Go through the flow:
   - Login with email
   - Select module
   - Take a quiz
   - Check analytics
   - Verify localStorage is working

#### 6.2 Check Browser Console
1. Right-click → Inspect
2. Console tab
3. Run: `localStorage.getItem('userPerformance')`
4. Should return data after taking a quiz

### Step 7: Set Up Continuous Deployment

This is already done! Cloudflare Pages will:

#### Auto-deploy on Git Push
Every time you push to `main` branch:
1. GitHub notifies Cloudflare
2. Cloudflare automatically:
   - Pulls latest code
   - Runs build command
   - Deploys new version
3. No manual steps needed!

#### To Update Your Platform:
```bash
# Make changes locally
# Then:
git add .
git commit -m "Update: Add new features"
git push origin main

# Cloudflare automatically deploys!
# Check deployment status: https://dash.cloudflare.com → Pages
```

### Step 8: Environment Variables (Optional Future)

If you add backend features later:

1. In Cloudflare Pages project
2. Settings → Environment variables
3. Add variables like:
   - DATABASE_URL (for database)
   - API_KEY (for external APIs)
4. Redeploy after adding

### Step 9: Custom Build Output (Alternative)

If you want to use Cloudflare Workers instead:

#### 9.1 Create Functions Directory
```bash
mkdir -p functions
cat > functions/index.js << 'EOF'
export async function onRequest(context) {
  return new Response('Hello from Cloudflare!')
}
EOF
```

#### 9.2 Add to wrangler.toml
```toml
[env.production]
routes = [
  { pattern = "api/*", zone_id = "zone_id_here" }
]
```

---

## Troubleshooting

### Issue: Build Failed

**Check logs:**
1. Cloudflare Pages → Your project
2. Deployments tab
3. Click failed deployment
4. Expand logs to see error

**Common fixes:**
```bash
# Clear cache and rebuild
rm -rf node_modules .next package-lock.json
npm install
npm run build

# Test build locally
npm run build
npm run start
```

### Issue: Node modules not found
```bash
# Make sure package.json exists
cat package.json

# Reinstall
npm install

# Commit changes
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Issue: Static files not loading
- Make sure public/ folder exists
- Files should be in: `public/images/`, `public/styles/`, etc.
- Cloudflare will serve them automatically

### Issue: API Routes Not Working
- Cloudflare Pages doesn't support Next.js API routes by default
- Use Cloudflare Workers for backend
- Or keep localStorage for client-side data (current setup)

---

## Security Best Practices

### 1. Environment Variables
Never commit:
```
.env
.env.local
API_KEYS
SECRETS
DATABASE_PASSWORDS
```

Use Cloudflare Environment Variables instead (Settings → Env Vars)

### 2. HTTPS
Cloudflare provides free HTTPS automatically:
- Your `.pages.dev` domain has SSL
- Custom domain needs DNS pointing to Cloudflare nameservers

### 3. DDoS Protection
Cloudflare Pages includes:
- Automatic DDoS protection
- Rate limiting
- Web Application Firewall

### 4. Analytics
Monitor traffic in Cloudflare:
1. Dash → Pages → Your project
2. View analytics
3. See page views, traffic sources, errors

---

## Deployment Commands Reference

```bash
# Initial setup
npm install
npm run build
git push origin main

# After making changes
git add .
git commit -m "Description of changes"
git push origin main

# Check build status
# Visit: https://dash.cloudflare.com → Pages → abt-certification-platform

# View live site
# https://abt-certification-platform.pages.dev

# View logs
# Cloudflare Pages dashboard → Deployments
```

---

## What Gets Deployed

**Deployed:**
- ✅ Next.js frontend
- ✅ HTML/CSS/JavaScript
- ✅ Images and static assets
- ✅ All lesson content
- ✅ Quiz questions
- ✅ Performance tracker code
- ✅ Analytics dashboard

**NOT Deployed (Client-side only):**
- ✅ localStorage data (stored in user's browser)
- ✅ Session data
- ✅ Performance metrics

**Future Enhancements (needs backend):**
- Database for persistent storage
- User accounts with server storage
- Admin dashboard
- Email notifications

---

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Login works
- [ ] Lessons display correctly
- [ ] Quizzes functional
- [ ] Analytics page loads
- [ ] localStorage saves data
- [ ] Mobile responsive
- [ ] All assets load (images, fonts)
- [ ] No console errors
- [ ] Performance acceptable (< 3s load)

---

## Next Steps After Deployment

1. **Share the link**: Send `https://abt-certification-platform.pages.dev` to students
2. **Test thoroughly**: Run through complete flow
3. **Monitor performance**: Check Cloudflare analytics
4. **Gather feedback**: Improve based on user feedback
5. **Add more questions**: Update quizData and redeploy
6. **Consider backend**: Add database for persistent user data

---

## Support

**Cloudflare Pages Help**:
- Docs: https://developers.cloudflare.com/pages/
- Status: https://www.cloudflarestatus.com/
- Support: https://support.cloudflare.com/

**Your Deployment URL**:
- Main: https://abt-certification-platform.pages.dev
- (or custom domain after setup)

---

**Deployment Time**: 5-10 minutes
**Difficulty**: Easy (Cloudflare handles most setup)
**Cost**: Free tier includes Pages
