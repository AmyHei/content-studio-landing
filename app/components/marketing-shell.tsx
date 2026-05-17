import Link from "next/link";

export function CTASection({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 px-6 bg-blue-600 dark:bg-blue-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <Link
          href="https://app.autocontent.net"
          className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 px-8 py-3 text-base font-semibold hover:bg-blue-50 transition-colors shadow"
        >
          免费体验
        </Link>
        <p className="mt-3 text-xs text-blue-200">无需信用卡 · 注册即用</p>
      </div>
    </section>
  );
}

export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="border-b border-gray-200 dark:border-gray-800 py-4 group">
      <summary className="flex justify-between items-center cursor-pointer font-medium text-[15px] text-gray-900 dark:text-white list-none">
        {q}
        <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4">
          ▾
        </span>
      </summary>
      <p className="mt-3 text-gray-600 dark:text-gray-400 text-[14px] leading-relaxed">
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
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        相关功能
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {all.slice(0, 4).map((f) => (
          <Link
            key={f.slug}
            href={`/features/${f.slug}`}
            className="block p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-sm transition-all bg-white dark:bg-gray-900"
          >
            <div className="font-semibold text-gray-900 dark:text-white mb-1">
              {f.title}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {f.desc}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium">
      {children}
    </div>
  );
}

export function PrimaryCTAButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="https://app.autocontent.net"
      className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-semibold text-white transition-colors shadow-sm"
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
      className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
    >
      {children}
    </Link>
  );
}
