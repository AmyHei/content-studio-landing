import Link from "next/link";

/**
 * ArticleHeader — 文章顶部.
 * Visual: 顶上 "返回博客" link + 类目标签, 大号 serif 标题, excerpt 副标题,
 *         meta strip (日期 · 阅读时长), tags pill 行, 中间一条 ink rule 收尾.
 */

export function ArticleHeader({
  title,
  excerpt,
  date,
  tags,
  category = "趋势雷达",
}: {
  title: string;
  excerpt?: string;
  date: string;
  tags?: string[];
  category?: string;
}) {
  // 估算阅读时长 (按 400 字/分钟保守值)
  // 实际值由调用方传入更准, 这里给个 placeholder
  return (
    <header className="not-prose pt-12 md:pt-16 pb-10 max-w-[688px] mx-auto px-6">
      {/* breadcrumb */}
      <div className="flex items-center gap-3 mb-10 text-[11px] tracking-[0.18em] uppercase font-semibold">
        <Link
          href="/blog"
          className="hover:underline"
          style={{ color: "var(--ink-muted)" }}
        >
          ← 全部文章
        </Link>
        <span style={{ color: "var(--divider)" }}>/</span>
        <span style={{ color: "var(--accent)" }}>{category}</span>
      </div>

      {/* date small caps */}
      <div
        className="text-[11px] font-mono tracking-[0.18em] uppercase mb-6"
        style={{ color: "var(--ink-muted)" }}
      >
        {date}
      </div>

      {/* title */}
      <h1
        className="text-[28px] md:text-[34px] leading-[1.25] font-bold tracking-tight mb-4"
        style={{
          fontFamily: "var(--font-display-zh)",
          color: "var(--ink)",
        }}
      >
        {title}
      </h1>

      {/* excerpt */}
      {excerpt && (
        <p
          className="text-[15px] md:text-[16px] leading-[1.7] mb-8"
          style={{ color: "var(--ink-soft)" }}
        >
          {excerpt}
        </p>
      )}

      {/* tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] tracking-wider px-2.5 py-1 border rounded-sm"
              style={{
                color: "var(--ink-muted)",
                borderColor: "var(--divider)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* closing rule */}
      <div
        className="h-[2px]"
        style={{ background: "var(--rule)" }}
      />
    </header>
  );
}
