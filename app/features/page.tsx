import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "全部功能 - AutoContent",
  description:
    "AutoContent 的完整功能列表：AI 写公众号、公众号 AI 排版、爆款标题生成、Markdown 转公众号、免费 AI 写作。覆盖公众号创作的每个环节。",
  keywords: [
    "AutoContent 功能",
    "AI 写公众号功能",
    "公众号自动化功能",
    "AI 内容创作工具",
  ],
  openGraph: {
    title: "全部功能 - AutoContent",
    description: "覆盖公众号创作每个环节的 AI 工具集",
    type: "website",
    locale: "zh_CN",
  },
};

const FEATURES = [
  {
    slug: "ai-wechat-article",
    num: "01",
    title: "AI 写公众号文章",
    desc: "智能选题、AI 写稿、自动配图、一键发布微信草稿箱。从 4 小时缩到 30 秒。",
    keyword: "AI 写公众号",
  },
  {
    slug: "wechat-formatter",
    num: "02",
    title: "公众号 AI 排版",
    desc: "Markdown 写完一键转公众号样式，标题、代码、引用、分隔线自动套用。",
    keyword: "公众号排版",
  },
  {
    slug: "wechat-title-generator",
    num: "03",
    title: "爆款标题 AI 生成器",
    desc: "8 种验证有效的爆款标题模板，输入主题秒出 16 个候选标题。",
    keyword: "爆款标题",
  },
  {
    slug: "markdown-to-wechat",
    num: "04",
    title: "Markdown 转公众号",
    desc: "从 Notion / Obsidian / VS Code 写完直接贴，代码块、表格、公式全部原样保留。",
    keyword: "Markdown 公众号",
  },
  {
    slug: "ai-writing-free",
    num: "05",
    title: "免费 AI 写作工具",
    desc: "Claude / GPT / Gemini / Grok 全模型支持，每月免费 5 篇起。",
    keyword: "AI 写作免费",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="pt-16 md:pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-6 text-[var(--ink-muted)]">
            AutoContent · Features
          </div>
          <h1
            className="text-[28px] md:text-[34px] font-bold tracking-tight mb-3 text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            全部功能
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--ink-soft)] dark:text-gray-400">
            AutoContent 覆盖公众号创作每个环节：从选题、写作、排版到发布。
            每个功能都有独立页面，下面是完整清单。
          </p>
          <div className="h-[2px] mt-10" style={{ background: "var(--rule)" }} />
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {FEATURES.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group block p-5 md:p-6 rounded-sm border bg-white dark:bg-gray-900 hover:border-[var(--accent)] dark:hover:border-[var(--accent)] hover:shadow-sm transition-all"
              style={{ borderColor: "var(--divider)" }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-mono text-sm font-semibold shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  {f.num}
                </span>
                <div className="flex-1">
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1.5 text-[var(--ink-muted)]">
                    关键词 · {f.keyword}
                  </div>
                  <h2
                    className="text-[17px] md:text-[18px] font-semibold mb-1.5 text-[var(--ink)] dark:text-white group-hover:text-[var(--accent)] dark:group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "var(--font-display-zh)" }}
                  >
                    {f.title}
                  </h2>
                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400">
                    {f.desc}
                  </p>
                </div>
                <span
                  className="text-[var(--ink-muted)] group-hover:text-[var(--accent)] transition-colors text-sm shrink-0"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 mt-12">
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
              一站式打包
            </span>
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
          </div>
          <div
            className="text-center p-8 rounded-sm border"
            style={{
              borderColor: "var(--divider)",
              background: "var(--paper-elevated)",
            }}
          >
            <p className="text-[14px] md:text-[15px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 mb-5 max-w-xl mx-auto">
              想直接试用所有功能？AutoContent 把以上能力一站打包，注册即用，每月免费 5 篇。
            </p>
            <Link
              href="https://app.autocontent.net"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition-colors"
            >
              免费试用 AutoContent
            </Link>
            <div className="mt-6 pt-6 border-t text-[13px]" style={{ borderColor: "var(--divider)" }}>
              <span className="text-[var(--ink-muted)]">想先用免费小工具？</span>{" "}
              <Link
                href="/tools"
                className="text-[var(--accent)] hover:underline font-medium"
              >
                去工具页 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
