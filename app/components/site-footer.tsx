import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// Deep-link columns let the homepage (the only high-authority page) pass crawl
// equity down to /features/*, /tools/*, and individual blog posts — which were
// "Discovered – currently not indexed" because nothing linked to them directly.
const FEATURE_LINKS = [
  { href: "/features/ai-wechat-article", label: "AI 写公众号文章" },
  { href: "/features/ai-writing-free", label: "AI 写作（免费）" },
  { href: "/features/markdown-to-wechat", label: "Markdown 转公众号" },
  { href: "/features/wechat-formatter", label: "公众号排版" },
  { href: "/features/wechat-title-generator", label: "爆款标题生成器" },
];

const TOOL_LINKS = [
  { href: "/tools/markdown-formatter", label: "Markdown 格式化" },
  { href: "/tools/title-generator", label: "标题生成器" },
  { href: "/tools/word-counter", label: "字数统计" },
];

const colTitleClass =
  "text-[10px] font-bold tracking-[0.22em] uppercase mb-4 text-[var(--ink-muted)]";
const linkClass =
  "block text-[13px] leading-[1.6] text-[var(--ink-soft)] dark:text-gray-400 hover:text-[var(--ink)] dark:hover:text-white transition-colors";

export function SiteFooter() {
  const latestPosts = getAllPosts().slice(0, 5);

  return (
    <footer
      className="border-t mt-8"
      style={{ borderColor: "var(--divider)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Features */}
          <div>
            <div className={colTitleClass}>功能</div>
            <Link href="/features" className={linkClass}>
              全部功能
            </Link>
            {FEATURE_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Tools */}
          <div>
            <div className={colTitleClass}>免费工具</div>
            <Link href="/tools" className={linkClass}>
              全部工具
            </Link>
            {TOOL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Latest posts */}
          <div>
            <div className={colTitleClass}>最新文章</div>
            <Link href="/blog" className={linkClass}>
              全部文章
            </Link>
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={`${linkClass} truncate`}
                title={p.title}
              >
                {p.title}
              </Link>
            ))}
          </div>

          {/* Brand */}
          <div>
            <div className={colTitleClass}>AutoContent</div>
            <p className="text-[13px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 mb-4">
              监控热点 → AI 写稿 → 自动配图 → 一键发布公众号
            </p>
            <Link
              href="https://app.autocontent.net/register"
              className="inline-block text-[13px] font-medium"
              style={{ color: "var(--accent)" }}
            >
              免费体验 →
            </Link>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t text-[12px] text-center"
          style={{ borderColor: "var(--divider)", color: "var(--ink-muted)" }}
        >
          © 2026 AutoContent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
