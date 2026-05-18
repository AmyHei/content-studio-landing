import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客 - AutoContent",
  description:
    "关于 AI 内容创作、公众号自动化、自媒体运营的实用文章和教程。每周一更新趋势雷达周报。",
};

const CATEGORY_MAP: Record<string, { label: string; tone: "accent" | "muted" }> =
  {
    "趋势雷达": { label: "RADAR · 周报", tone: "accent" },
  };

function detectCategory(tags: string[]): { label: string; tone: "accent" | "muted" } {
  for (const t of tags) {
    if (CATEGORY_MAP[t]) return CATEGORY_MAP[t];
  }
  return { label: "ARTICLE · 文章", tone: "muted" };
}

function formatDate(date: string) {
  // 期待 "2026-05-18" 这种格式
  if (!date) return "";
  const [y, m, d] = date.split("-");
  if (!y || !m || !d) return date;
  return `${y}.${m}.${d}`;
}

export default function BlogPage() {
  const posts = [...getAllPosts()].sort((a, b) =>
    (b.date || "").localeCompare(a.date || ""),
  );

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 md:pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-6 text-[var(--ink-muted)]">
            AutoContent · Journal
          </div>
          <h1
            className="text-[28px] md:text-[34px] font-bold tracking-tight mb-3 text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            博客
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--ink-soft)] dark:text-gray-400">
            趋势雷达周报 · AI 内容创作实战 · 公众号自动化方法论
          </p>
          <div
            className="h-[2px] mt-10"
            style={{ background: "var(--rule)" }}
          />
        </div>
      </section>

      {posts.length === 0 ? (
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-gray-500 dark:text-gray-500">暂无文章</p>
        </div>
      ) : (
        <>
          {/* Featured (latest) */}
          {featured && <FeaturedPostCard post={featured} />}

          {/* Rest */}
          {rest.length > 0 && (
            <section className="px-6 pb-20">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-10 mt-12">
                  <div
                    className="h-px flex-1"
                    style={{ background: "var(--divider)" }}
                  />
                  <span
                    className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]"
                  >
                    更多文章
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: "var(--divider)" }}
                  />
                </div>

                <div className="space-y-10">
                  {rest.map((post) => (
                    <ListPostItem key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function FeaturedPostCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number];
}) {
  const cat = detectCategory(post.tags);

  return (
    <section className="px-6 mb-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href={`/blog/${post.slug}`}
          className="group block py-8 -mx-4 px-4 rounded-sm transition-colors hover:bg-[var(--paper-elevated)]"
        >
          <div className="flex items-baseline gap-3 mb-4">
            <span
              className="text-[10px] font-bold tracking-[0.22em] uppercase"
              style={{
                color: cat.tone === "accent" ? "var(--accent)" : "var(--ink-muted)",
              }}
            >
              {cat.label}
            </span>
            <span className="text-[var(--divider)]">·</span>
            <span
              className="text-[11px] font-mono tracking-[0.16em] text-[var(--ink-muted)]"
            >
              {formatDate(post.date)}
            </span>
            <span className="text-[var(--divider)]">·</span>
            <span
              className="text-[11px] font-mono tracking-[0.16em] text-[var(--accent)]"
            >
              FEATURED
            </span>
          </div>

          <h2
            className="text-[22px] md:text-[26px] font-semibold leading-[1.3] tracking-tight mb-3 text-[var(--ink)] dark:text-white group-hover:text-[var(--accent)] dark:group-hover:text-[var(--accent)] transition-colors"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-[14px] md:text-[15px] leading-[1.7] mb-4 text-[var(--ink-soft)] dark:text-gray-400">
              {post.excerpt}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] tracking-wider px-2.5 py-1 border rounded-sm text-[var(--ink-muted)]"
                  style={{ borderColor: "var(--divider)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div
            className="mt-5 text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            继续阅读 →
          </div>
        </Link>
      </div>
    </section>
  );
}

function ListPostItem({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number];
}) {
  const cat = detectCategory(post.tags);

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-baseline gap-3 mb-2">
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{
              color: cat.tone === "accent" ? "var(--accent)" : "var(--ink-muted)",
            }}
          >
            {cat.label}
          </span>
          <span className="text-[var(--divider)]">·</span>
          <span className="text-[11px] font-mono tracking-[0.16em] text-[var(--ink-muted)]">
            {formatDate(post.date)}
          </span>
        </div>

        <h3
          className="text-[17px] md:text-[18px] font-semibold leading-[1.4] mb-2 text-[var(--ink)] dark:text-white group-hover:text-[var(--accent)] dark:group-hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400">
            {post.excerpt}
          </p>
        )}

        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-wider text-[var(--ink-muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
