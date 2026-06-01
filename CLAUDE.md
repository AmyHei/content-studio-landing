# Content Studio Landing

## Overview
Marketing site for AutoContent (AI 公众号自动化工具). Target: 中文自媒体创作者.
This repo serves **autocontent.net** only. The SaaS app lives in a separate repo (`content-studio` → app.autocontent.net).

## Commands
- `npm run dev` — dev server
- `npm run build` — `next build` + `next-sitemap` → static export to `out/`

## Deploy
- Cloudflare Pages auto-builds `main`. Domain: **autocontent.net**.
- Static export (`output: "export"` in next.config) — no SSR runtime, all pages pre-rendered.

---

# Architecture: Strict Marketing / App Split

```
autocontent.net          (THIS REPO — content-studio-landing)
  /                      Hero + waitlist
  /features              Hub: 5 feature pages (grid of cards)
  /features/[slug]       Long-form feature landing
  /tools                 Hub: 3 free in-browser tools
  /tools/[slug]          The actual tool (client interactive)
  /blog                  Editorial index (featured + list)
  /blog/[slug]           Article with editorial typography

app.autocontent.net      (OTHER REPO — content-studio, Vercel)
  /                      Server-redirect:
                           logged in  → /dashboard
                           logged out → autocontent.net (back to marketing)
  /register /login       Auth
  /dashboard etc.        Working surfaces (UI lives in that repo)
```

**Never duplicate marketing surfaces between the two repos.** All "免费体验" CTAs in this repo point to `https://app.autocontent.net/register`. The app repo's `(landing)` group has been deleted to enforce this.

---

# Design System — Letterpress Newsletter

Editorial aesthetic, warm restraint. Terracotta accent, system serif for display, generous whitespace. The bg matches the rest of the site (white / gray-950), no warm paper bg — `--paper-elevated` is a subtle tint for cards only.

## Tokens (defined in `app/globals.css`, via plain CSS vars + media-query dark mode)

```
--accent           #B1422D  (terracotta — editorial labels, hover states, H1 spans, "立即使用" links)
--accent-wash     #F5E1D9
--accent-strong   #8E2E1E
--ink              #1C1A17  (deep warm text)
--ink-soft         #4A4640  (secondary text, body in cards)
--ink-muted        #837D72  (captions, meta)
--divider          #EBE8E0  (borders — use everywhere instead of gray-200)
--rule             #2A2622  (2px under page headers)
--paper            #FFFFFF  (matches site bg)
--paper-elevated   #FAF9F5  (CARDS / code blocks ONLY — never the page bg)
--font-display-zh  "Songti SC", "STSong", "SimSun", "PingFang SC", serif
```

Use via Tailwind arbitrary value syntax: `bg-[var(--paper-elevated)]`, `text-[var(--ink)]`, `border-[var(--divider)]`. They auto-flip in dark mode.

## Color usage rules (DO NOT MIX)

| Color | Purpose | Examples |
|---|---|---|
| **Terracotta (`--accent`)** | Editorial accent | Caps labels, hover states, H1 highlight spans, step badges, "立即使用 →" |
| **Blue (`bg-blue-600`)** | Brand conversion only | "免费体验" / "立即注册" buttons that drive to app.autocontent.net/register |
| **Ink tokens** | All text | Headings → `--ink`, body → `--ink-soft`, captions → `--ink-muted` |

Never use raw `text-gray-*` / `bg-gray-50` / `border-gray-200`. Always tokens.

## Typography

| Element | Class | Notes |
|---|---|---|
| H1 (page) | `text-[30px] md:text-[38px] font-bold tracking-tight` | `--font-display-zh`, `--ink` |
| H1 (detail) | `text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2]` | `--font-display-zh` |
| H2 | `text-[22px] md:text-[26px] font-semibold` | `--font-display-zh` |
| H3 | `text-[17-18px] font-semibold` | `--font-display-zh` |
| Subtitle | `text-[15px] md:text-[17px] leading-[1.7]` | `--ink-soft` |
| Body | `text-[14-15px] leading-[1.7]` | `--ink-soft` |
| Caps label | `text-[10-11px] font-mono tracking-[0.22em] uppercase` | mostly `--ink-muted` or `--accent` |
| Date | `text-[11px] font-mono tracking-[0.16em] uppercase` | `2026.05.18` format (dot, not dash) |

**font-semibold preferred over font-bold** for editorial restraint. Bold only on h1 of detail pages.

## Component patterns

**Cards (everywhere)**
```
rounded-sm  (not rounded-xl/2xl)
border-2    on hub cards (extra visible hover)
border      on small cards
border-color: var(--divider)
bg: white dark:bg-gray-900
hover: border-[var(--accent)] + shadow-md + -translate-y-[2px]
```

**Section bg (alternating)**
- Default sections: no bg (inherits page white)
- Alternate sections: `bg-[var(--paper-elevated)] dark:bg-gray-900`
- Never `bg-gray-50` directly

**Section dividers (between major chunks)**
```jsx
<div className="flex items-center gap-3">
  <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
  <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
    SECTION LABEL
  </span>
  <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
</div>
```

**Page hero**
```
11px mono caps breadcrumb (--accent or --ink-muted) above H1
H1 (display serif, terracotta highlight span if needed)
15-17px subtitle (--ink-soft)
[optional] CTAs
2px --rule underline (max-w-2xl)
```

## Where shared components live

```
app/components/marketing-shell.tsx
  - HeroBadge          mono caps terracotta label
  - PrimaryCTAButton   blue (brand conversion)
  - SecondaryCTAButton outline (--divider)
  - CTASection         bordered paper-elevated card + caps divider
  - FAQItem            <details> with --ink + serif question
  - RelatedFeatures    grid of editorial cards
  - PageHero           shared hero pattern (use for new detail pages)
  - SectionLabel       caps divider helper

app/blog/_components/
  - tldr               本期速览 magazine card — children-based (markdown ul)
  - persona-section    01-04 colored persona section — wraps markdown children
  - action-callout     "可以动手" card per persona — wraps markdown children
  - feature-pick       末尾 "编辑推荐" CTA grid — children-based (markdown ul)
  - keyword-table      `<KeywordTable mode="seo|trend" rows={[...]} />`
                       seo: keyword/intent/idea; trend: keyword/volume/growth/region/note
  - region-compare     `<RegionCompare left={{...}} right={{...}} />` 国内 vs 国外并排
  - article-header     blog post hero
  - article-footer     AI 搜索整理 byline + yaqinhei.com 反链
  - mdx-components.tsx  component map for MDXRemote

app/components/
  - nav.tsx            Top nav: 功能 / 工具 / 博客 / [免费体验]
  - waitlist-form.tsx  Hero CTA + bottom CTA
```

## MDX setup
- `next-mdx-remote/rsc` + `remark-gfm` (REQUIRED for tables, task lists, strikethrough)
- Markdown tables auto-styled via `.article-body table` in globals.css (editorial: caps headers, mono numbers, hover tint)
- Code blocks: `.article-body pre` has 3px accent top border
- Article styling: use `.article-body` class on `<article>`, not Tailwind `prose`

### Frontmatter schema

Every post in `content/posts/*.mdx` must include:

```yaml
---
title: "..."           # required
date: "YYYY-MM-DD"     # required, sort key
excerpt: "..."         # required, list + meta description
tags: ["...", "..."]   # required, array (can be empty)
lang: "zh"             # required — explicit even for all-zh content
---
```

**`lang` is required even though the site is currently all 中文.** Declaring it now means an English post can drop in with `lang: "en"` and zero loader changes. Use the BCP-47 short tag (`zh`, `en`, `ja`), not regional variants (`zh-CN`).

`lib/posts.ts` uses gray-matter; unknown fields are ignored, so adding `lang` is non-breaking. When English support actually ships, extend `PostMeta` with `lang: "zh" | "en"` and plumb to `<html lang>` / hreflang.

### MDX component API: children OR data props (both supported as of 2026-05-26)

`MDXRemote` is configured with `blockJS: false` (in `app/blog/[slug]/page.tsx`), which lets MDX expression props (`{[{...}]}`, `{{...}}`) reach components. `blockDangerousJS` stays `true` so arbitrary code execution paths remain blocked.

Two valid patterns:

1. **Children-based** (markdown content between tags) — for prose-shaped components: `<TLDR>`, `<PersonaSection>`, `<ActionCallout>`, `<FeaturePick>`.
2. **Data-prop based** (typed array/object props) — for table/comparison components: `<KeywordTable mode="trend" rows={[{...}, {...}]} />`, `<RegionCompare left={{...}} right={{...}} />`.

**Historical note**: before 2026-05-26 the default `blockJS: true` stripped data props silently, so the project standard was "children-only". That workaround is no longer needed — see `notes/2026-05-26-mdx-blockjs-default.md` for the root-cause analysis.

**Correct children usage** — note the blank lines around the markdown content:

```mdx
<TLDR>

- 要点 1
- 要点 2
- 要点 3

</TLDR>

<PersonaSection persona="saas" number="01" title="给 SaaS / 独立开发者">

[200-300 字 markdown]

<ActionCallout persona="saas">
[一句话 callout — 这里可以省略空行因为只有单段]
</ActionCallout>

</PersonaSection>

## SEO 长尾词

| 关键词 | 搜索意图 | 适合做的内容 |
| --- | --- | --- |
| ai 写公众号年入 200w | 交易 | 案例长文 + 实测截图 |

<FeaturePick>

- [AI 写公众号文章](/features/ai-wechat-article) — 选题、写稿、配图一站完成
- [免费标题生成器](/tools/title-generator) — 8 种爆款模板 × 2 候选

</FeaturePick>
```

**Rule of thumb**: blank line between opening tag and markdown content, blank line between markdown content and closing tag. Without these blank lines, MDX treats children as raw JSX nodes (not markdown) and the components receive unexpected types.

---

# Common Pitfalls (踩过的坑，下次别再犯)

## 1. Never use `next/font/google` for Chinese fonts
**Why**: Loading Noto Serif SC / similar via Google Fonts hangs build & dev on slow/blocked networks. We saw multiple `Failed to fetch Noto Serif SC` errors and dev servers stuck at "Compiling /" for 60+ seconds.

**Do instead**: Use system serif stack:
```css
--font-display-zh: "Songti SC", "STSong", "SimSun", "PingFang SC", serif;
```
Songti SC (macOS) / SimSun (Windows) / PingFang SC (iOS+macOS) — pre-installed everywhere, zero network deps.

## 2. Never inject HTML strings into React for tool previews
For client-side markdown→HTML preview tools, do **not** use the React inner-HTML escape hatch (the prop name that starts with `dangerously`). Use a sandboxed iframe via `<iframe srcDoc={...} sandbox="" />` instead. Reasons:
- The repo's security hook will block writes that contain that prop name
- iframe sandbox isolates user-controlled HTML (no XSS into parent)
- More accurate to how WeChat actually renders the HTML in its editor

See `app/tools/markdown-formatter/markdown-formatter-client.tsx` for the pattern.

## 3. Always include `remark-gfm` for MDX
Without it, markdown tables, task lists, strikethrough don't parse — they render as raw `|---|---|` text. Already configured in `/blog/[slug]/page.tsx`, keep it there.

## 4. Don't mix blue and terracotta arbitrarily
- Blue = action button only (drives to app)
- Terracotta = editorial accent (labels, hovers, content emphasis)
- If you find yourself adding `text-blue-600 dark:text-blue-400` to a section label or H1 highlight, you probably want `text-[var(--accent)]` instead.

## 5. Don't use Tailwind `prose` for blog articles
Bypasses the editorial design. The article page uses custom `.article-body` styling in globals.css (drop cap, accent-wash highlights on `<strong>`, custom bullets, ornament dividers, table editorial style).

## 6. Don't add a landing page on app.autocontent.net
Standard SaaS split — that domain handles auth + app only. `content-studio` repo's `app/page.tsx` is a server redirect (logged in → /dashboard, logged out → autocontent.net). Don't recreate marketing surfaces there.

## 7. Never `bg-gray-50` or `border-gray-200`
Always use `bg-[var(--paper-elevated)]` and `border-[var(--divider)]` so light/dark mode and brand consistency stay coherent.

## 8. Blog post titles use display serif, not Geist
The blog feels like a magazine, not a Stripe doc. If you see `text-3xl font-bold text-gray-900` on a blog page heading, that's wrong — fix to `--font-display-zh` + ink tokens.

## 9. Weekly radar posts: children for prose, data props for tables
Posts at `content/posts/weekly-radar-YYYY-MM-DD.mdx` use:
- **children-based** for prose components: `<TLDR>`, `<PersonaSection>`, `<ActionCallout>`, `<FeaturePick>` — wrap markdown between opening/closing tags with blank lines around content.
- **data-prop based** for structured data: `<KeywordTable mode="trend" rows={[...]} />`, `<RegionCompare left={{...}} right={{...}} />` — pass typed arrays/objects directly.

The historical "no array props" rule was a workaround for the default `blockJS: true` in `next-mdx-remote`. Since 2026-05-26 the option is set to `false` (in `app/blog/[slug]/page.tsx`), so data props work in both dev and static export. See `## MDX setup → MDX component API` above and `notes/2026-05-26-mdx-blockjs-default.md`.

If you ever bump `next-mdx-remote` or hit `TypeError: Cannot read properties of undefined` on a component prop, first check whether `blockJS: false` is still in the `MDXRemote` options before changing the post.

## 10. Hub card hover must be visible
Use `border-2` (not border-1) + `hover:shadow-md` + `hover:-translate-y-[2px]` for hub `/features` and `/tools` cards. Subtle hover gets missed by users.

---

# Quick test after design changes

```bash
rm -rf .next out
npm run build  # must succeed without retries (no network deps for fonts)
```

Then eyeball:
- `/` — hero serif, no loud blue gradient, footer modest
- `/features` and `/tools` hub — cards visibly lift on hover
- `/features/[any]` and `/tools/[any]` — H1 serif, terracotta H1 span, paper-elevated alt sections, rounded-sm cards
- `/blog` — featured post serif, list items smaller
- `/blog/[slug]` — drop cap, accent-wash on bold text, ornament dividers, accent-bordered tables
