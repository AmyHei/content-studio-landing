import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "公众号免费工具集 — 标题生成、Markdown 排版、字数统计 | AutoContent",
  description:
    "AutoContent 提供的公众号免费工具集合：爆款标题生成器、Markdown 转公众号排版、字数与标题截断检测。全部免费，无需注册，纯浏览器运行不上传内容。",
  keywords: [
    "公众号工具",
    "公众号免费工具",
    "公众号在线工具",
    "公众号小工具",
  ],
  alternates: {
    canonical: "https://autocontent.net/tools",
  },
  openGraph: {
    title: "公众号免费工具集",
    description: "标题生成 / Markdown 排版 / 字数统计，全部免费。",
    url: "https://autocontent.net/tools",
    type: "website",
    locale: "zh_CN",
  },
};

const TOOLS = [
  {
    slug: "title-generator",
    title: "爆款标题生成器",
    desc: "输入主题，8 种爆款模板各出 2 个候选，共 16 个标题。一键复制。",
    icon: "✨",
  },
  {
    slug: "markdown-formatter",
    title: "Markdown 转公众号",
    desc: "实时预览公众号样式，一键复制带 inline 样式的 HTML。粘贴公众号编辑器直接用。",
    icon: "📝",
  },
  {
    slug: "word-counter",
    title: "字数统计 + 标题检测",
    desc: "实时统计中文字数、段落、阅读时长。标题超 32 字订阅号会截断，工具自动提示。",
    icon: "🔢",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-16 md:pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-5 text-[var(--ink-muted)]">
            AutoContent · Tools
          </div>
          <h1
            className="text-[30px] md:text-[38px] font-bold tracking-tight mb-4 text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            公众号免费工具集
          </h1>
          <p className="text-[15px] md:text-[17px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 max-w-2xl mx-auto">
            为公众号运营者准备的几个常用小工具。
            <strong className="text-[var(--ink)] dark:text-white font-semibold">
              全部免费、无需注册
            </strong>
            、纯浏览器运行不上传内容。
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group block p-6 rounded-sm border-2 bg-white dark:bg-gray-900 transition-all hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-[2px]"
              style={{ borderColor: "var(--divider)" }}
            >
              <div className="text-3xl mb-4">{t.icon}</div>
              <h2
                className="text-[17px] font-semibold mb-2 text-[var(--ink)] dark:text-white group-hover:text-[var(--accent)] dark:group-hover:text-[var(--accent)] transition-colors"
                style={{ fontFamily: "var(--font-display-zh)" }}
              >
                {t.title}
              </h2>
              <p className="text-[13px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 mb-4">
                {t.desc}
              </p>
              <div
                className="text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                立即使用 →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 mt-4">
            <div
              className="h-px flex-1"
              style={{ background: "var(--divider)" }}
            />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
              需要完整自动化？
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "var(--divider)" }}
            />
          </div>
          <div
            className="text-center p-8 rounded-sm border"
            style={{
              borderColor: "var(--divider)",
              background: "var(--paper-elevated)",
            }}
          >
            <p className="text-[14px] md:text-[15px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 mb-6 max-w-xl mx-auto">
              这些工具是独立的小帮手。AutoContent 把它们打包成完整流程：
              智能选题 → AI 写稿 → 自动配图 → 一键发布公众号。
            </p>
            <Link
              href="https://app.autocontent.net/register"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition-colors"
            >
              免费试用 AutoContent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
