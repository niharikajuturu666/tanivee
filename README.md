# FriendFlix

A cinematic, Netflix-style friendship timeline website.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Images
You need to add your personal photos to the `public/images` folder.
Follow this folder structure exactly:

```
public/
└── images/
    ├── 8th/
    │   ├── main.jpg       (Hero image)
    │   ├── profile.jpg    (Profile picture)
    │   ├── 1.jpg          (Gallery images...)
    │   ├── 2.jpg
    │   └── ...
    ├── 10th/
    │   ├── main.jpg
    │   ├── profile.jpg
    │   ├── 1.jpg
    │   └── ...
    └── longdistance/
        ├── main.jpg
        ├── profile.jpg
        ├── 1.jpg
        └── ...
```
*Note: You can update `src/data/eras.js` if your file names are different.*

### 3. Add Sound Effects
To enable the cinematic intro sound:
1. Find a "ta-dum" sound effect (mp3).
2. Create a folder `public/audio/`.
3. Save your file as `public/audio/intro.mp3`.

### 4. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🌍 Deployment

### GitHub Pages (Recommended)

1. Update `vite.config.js`:
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/friendflix/', // REPLACE 'friendflix' WITH YOUR REPO NAME
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to your repository's `gh-pages` branch.

### Vercel
1. Install Vercel CLI or connect your GitHub repo to Vercel dashboard.
2. The default settings (Rank: Vite) will work automatically.
