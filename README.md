# Sameer Jain Portfolio

Personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Markdown content in `content/blog` and `content/summaries`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run lint
npm run build
```

## Content
- Case studies: `content/blog/*.mdx`
- Book summaries: `content/summaries/*.mdx`
- Dynamic pages: `/writing/[slug]`

## Avatar
Current file path: `public/sameer-illustration.png`.
Replace this file with the final provided portrait image if needed.

## Deploy
1. Create GitHub repo and push:
   ```bash
   gh repo create sameer-portfolio --public --source=. --remote=origin --push
   ```
2. Import repo into Vercel and deploy, or run:
   ```bash
   npx vercel
   ```
