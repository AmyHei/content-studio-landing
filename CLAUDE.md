# Content Studio Landing

## Overview
Landing page + waitlist + blog for Content Studio (AI 内容自动化工具).
Target: 中文自媒体创作者 (微信公众号).

## Commands
- `npm run dev` — dev server
- `npm run build` — static export to `out/`

## Deploy
Cloudflare Pages, static export.
Domain: autocontent.net (landing) + app.autocontent.net (Content Studio app on Vercel)

## Structure
- `/` — Landing page (waitlist)
- `/blog` — SEO articles
- `/blog/[slug]` — Article detail
