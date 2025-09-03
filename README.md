# AML Vendor Solutions – Next.js Starter (Pages Router)

Ready-to-deploy Next.js 14 + React 18 project with Tailwind.
Pinned versions avoid ERESOLVE on Vercel.

## Structure
- `/pages/_app.js` imports Tailwind styles
- `/pages/index.js` landing page
- `/styles/globals.css` Tailwind base/utilities

## Local
```bash
npm install
npm run dev
```

## Deploy on Vercel
- Root Directory: `/` (repo root with package.json and /pages)
- Push this repo to GitHub, import into Vercel → Deploy
```bash
npm run build
```
