# Deployment Guide: electrowander.online

## Hosting Platform: GitHub Pages

Your portfolio is configured for GitHub Pages with a custom domain.

---

## Prerequisites

✅ Repository must be on GitHub  
✅ CNAME file already configured: `electrowander.online`  
✅ Project is built with Vite (optimized for static hosting)

---

## Step-by-Step Deployment

### 1. **Build the Project**

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### 2. **Ensure Repository is on GitHub**

If not already done:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 3. **Configure GitHub Pages Settings**

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: Keep as `main` (or your default branch)

### 4. **Add GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 5. **Configure Custom Domain (electrowander.online)**

**DNS Setup:**

Update your domain's DNS records to point to GitHub Pages:

| Type  | Name     | Value                                    |
|-------|----------|------------------------------------------|
| A     | @        | 185.199.108.153                         |
| A     | @        | 185.199.109.153                         |
| A     | @        | 185.199.110.153                         |
| A     | @        | 185.199.111.153                         |
| CNAME | www      | electrowander.online                    |

**GitHub Pages Setting:**

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `electrowander.online`
3. Check "Enforce HTTPS" ✅

> **Note:** The CNAME file is already in `/public/CNAME` with the correct domain.

### 6. **Push Changes**

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

GitHub Actions will automatically build and deploy your site.

---

## Verification

Once deployed, your site should be live at:
- 🌐 https://electrowander.online

Check the GitHub Actions tab in your repository to monitor deployment status.

---

## Troubleshooting

**Site not loading?**
- Wait 5-10 minutes for DNS propagation
- Clear browser cache and CloudFlare cache
- Verify DNS records are set correctly

**CSS/JS not loading?**
- Ensure `vite.config.ts` has `base: "/"` (already configured ✅)

**HTTPS not enforcing?**
- GitHub Pages may take up to 24 hours to issue SSL certificate
- Retry enabling "Enforce HTTPS" after waiting

---

## Local Development

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Build for production
npm run preview    # Preview production build locally
```
