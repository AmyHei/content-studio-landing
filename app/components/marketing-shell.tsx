import Link from "next/link";

/**
 * Marketing shell components — used by all /features/[slug] and /tools/[slug] pages.
 * Matches the editorial design system (terracotta accent, Noto Serif SC display,
 * --paper-elevated cards, --divider borders).
 */

export function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-block text-[11px] font-mono tracking-[0.22em] uppercase mb-5"
      style={{ color: "var(--accent)" }}
    >
      {children}
    </div>
  );
}

export function PrimaryCTAButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="https://app.autocontent.net/register"
      className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition-colors shadow-sm"
    >
      {children}
    </Link>
  );
}

export function SecondaryCTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg border px-6 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)]"
      style={{
        borderColor: "var(--divider)",
        color: "var(--ink-soft)",
      }}
    >
      {children}
    </Link>
  );
}

export function CTASection({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--ink-muted)" }}
          >
            Ready to start
          </span>
          <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
        </div>
        <div
          className="text-center p-8 md:p-10 rounded-sm border"
          style={{
            borderColor: "var(--divider)",
            background: "var(--paper-elevated)",
          }}
        >
          <h2
            className="text-[22px] md:text-[26px] font-semibold mb-3 text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-[14px] md:text-[15px] leading-[1.7] mb-7 max-w-xl mx-auto"
              style={{ color: "var(--ink-soft)" }}
            >
              {subtitle}
            </p>
          )}
          <Link
            href="https://app.autocontent.net/register"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition-colors"
          >
            免费体验
          </Link>
          <p className="mt-3 text-[11px]" style={{ color: "var(--ink-muted)" }}>
            无需信用卡 · 注册即用
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="border-b py-5 group"
      style={{ borderColor: "var(--divider)" }}
    >
      <summary
        className="flex justify-between items-center cursor-pointer font-semibold text-[15px] list-none text-[var(--ink)] dark:text-white"
        style={{ fontFamily: "var(--font-display-zh)" }}
      >
        {q}
        <span
          className="group-open:rotate-180 transition-transform ml-4 text-[var(--ink-muted)]"
          aria-hidden
        >
          ▾
        </span>
      </summary>
      <p
        className="mt-3 text-[14px] leading-[1.75]"
        style={{ color: "var(--ink-soft)" }}
      >
        {a}
      </p>
    </details>
  );
}

export function RelatedFeatures({ exclude }: { exclude: string }) {
  const all = [
    {
      slug: "ai-wechat-article",
      title: "AI 写公众号文章",
      desc: "选题、写稿、配图一站完成",
    },
    {
      slug: "wechat-formatter",
      title: "公众号 AI 排版",
      desc: "Markdown 一键转公众号样式",
    },
    {
      slug: "wechat-title-generator",
      title: "爆款标题 AI 生成器",
      desc: "公众号点击率翻倍",
    },
    {
      slug: "markdown-to-wechat",
      title: "Markdown 转公众号",
      desc: "程序员友好的排版工具",
    },
    {
      slug: "ai-writing-free",
      title: "免费 AI 写作",
      desc: "无需注册，立即试用",
    },
  ].filter((f) => f.slug !== exclude);

  return (
    <section className="px-6 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
          <span
            className="text-[10px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "var(--ink-muted)" }}
          >
            相关功能
          </span>
          <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {all.slice(0, 4).map((f, i) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group block p-5 rounded-sm border bg-white dark:bg-gray-900 transition-all hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-[1px]"
              style={{ borderColor: "var(--divider)" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-mono text-xs font-semibold shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div
                    className="font-semibold text-[15px] mb-1 text-[var(--ink)] dark:text-white group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "var(--font-display-zh)" }}
                  >
                    {f.title}
                  </div>
                  <div
                    className="text-[13px] leading-relaxed"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {f.desc}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 共享: 详情页顶部 hero (mono caps breadcrumb + 大标题 + 副标题 + ink rule) */
export function PageHero({
  breadcrumb,
  title,
  titleAccent,
  subtitle,
  cta,
  secondaryCta,
}: {
  breadcrumb: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  cta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
}) {
  return (
    <section className="pt-16 md:pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="text-[11px] font-mono tracking-[0.22em] uppercase mb-5"
          style={{ color: "var(--accent)" }}
        >
          {breadcrumb}
        </div>
        <h1
          className="text-[30px] md:text-[40px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span style={{ color: "var(--accent)" }}>{titleAccent}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p
            className="mt-5 text-[15px] md:text-[16px] leading-[1.7] max-w-2xl mx-auto"
            style={{ color: "var(--ink-soft)" }}
          >
            {subtitle}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {cta}
            {secondaryCta}
          </div>
        )}
        <div
          className="h-[2px] mt-12 max-w-2xl mx-auto"
          style={{ background: "var(--rule)" }}
        />
      </div>
    </section>
  );
}

/** 共享: section 间用的小 caps 横线 label */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto mb-10">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
        <span
          className="text-[10px] font-bold tracking-[0.22em] uppercase"
          style={{ color: "var(--ink-muted)" }}
        >
          {children}
        </span>
        <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
      </div>
    </div>
  );
}
