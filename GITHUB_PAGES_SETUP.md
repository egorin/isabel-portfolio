# GitHub Pages Deployment Guide

This project is pre-configured for easy deployment to GitHub Pages. Follow these steps to publish your portfolio.

---

## 📋 Prerequisites

1. A GitHub account
2. Git installed on your Mac
3. Node.js and pnpm installed (for local development)

---

## 🚀 Quick Start Deployment

### Step 1: Export from Manus to GitHub

1. In the Manus Management UI, go to **Settings → GitHub**
2. Click **Connect GitHub** and authorize Manus
3. Export the project to a new repository (e.g., `isabel-portfolio`)
4. The repository will be created automatically with all your code

### Step 2: Configure for Your Repository

1. Clone the repository to your Mac:
   ```bash
   git clone https://github.com/YOUR_USERNAME/isabel-portfolio.git
   cd isabel-portfolio
   ```

2. Edit `vite.config.ts` and uncomment line 13:
   ```typescript
   // Change from:
   // base: '/isabel-portfolio/',
   
   // To:
   base: '/isabel-portfolio/',
   ```
   **Important:** Replace `isabel-portfolio` with your actual repository name if different.

3. Commit the change:
   ```bash
   git add vite.config.ts
   git commit -m "Configure base path for GitHub Pages"
   git push
   ```

### Step 3: Deploy to GitHub Pages

1. Install dependencies:
   ```bash
   npm install -g pnpm
   pnpm install
   ```

2. Deploy:
   ```bash
   pnpm deploy:gh-pages
   ```

3. This command will:
   - Build your site for production
   - Create a `gh-pages` branch
   - Push the built files to that branch

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

5. Wait 1-2 minutes, then visit:
   ```
   https://YOUR_USERNAME.github.io/isabel-portfolio/
   ```

---

## 🔄 Updating Your Site

After making changes to your portfolio:

```bash
# Make your edits, then:
git add .
git commit -m "Update portfolio content"
git push

# Deploy the changes:
pnpm deploy:gh-pages
```

Your site will update automatically in 1-2 minutes.

---

## 🎨 Custom Domain (Optional)

To use a custom domain like `isabelgorin.com`:

1. Purchase a domain from a registrar (Namecheap, Google Domains, etc.)

2. Add a `CNAME` file to `client/public/`:
   ```
   isabelgorin.com
   ```

3. In your domain registrar's DNS settings, add:
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io`
   
   And:
   - Type: `A` (4 records)
   - Name: `@`
   - Values:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

4. In GitHub repository settings → Pages, enter your custom domain

5. Enable "Enforce HTTPS" (wait 24 hours for DNS propagation first)

---

## 🛠️ Build Scripts Reference

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local development server |
| `pnpm build:gh-pages` | Build for GitHub Pages |
| `pnpm deploy:gh-pages` | Build and deploy to GitHub Pages |
| `pnpm preview` | Preview production build locally |

---

## ⚠️ Important Notes

1. **Base Path**: The `base` setting in `vite.config.ts` MUST match your repository name
2. **CDN Images**: Your images are hosted on Manus CDN and will work on GitHub Pages
3. **First Deploy**: The first deployment may take 5-10 minutes to go live
4. **Branch**: Never manually edit the `gh-pages` branch - it's auto-generated

---

## 🐛 Troubleshooting

### Site shows 404 error
- Check that `base` in `vite.config.ts` matches your repo name exactly
- Verify GitHub Pages is enabled and set to `gh-pages` branch

### Images not loading
- Images are hosted on CDN, so they should work automatically
- Check browser console for any errors

### Styles not working
- Clear your browser cache (Cmd+Shift+R)
- Verify the build completed without errors

### Deploy command fails
- Make sure you've run `pnpm install` first
- Check that you have write access to the repository

---

## 📞 Need Help?

- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Verify your repository settings
- Make sure all commits are pushed before deploying

---

## ✅ Deployment Checklist

- [ ] Repository exported from Manus to GitHub
- [ ] Cloned repository to local machine
- [ ] Uncommented and configured `base` path in `vite.config.ts`
- [ ] Installed dependencies with `pnpm install`
- [ ] Ran `pnpm deploy:gh-pages` successfully
- [ ] Enabled GitHub Pages in repository settings
- [ ] Verified site is live at `https://YOUR_USERNAME.github.io/isabel-portfolio/`
