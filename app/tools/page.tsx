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
    num: "01",
    title: "爆款标题生成器",
    desc: "输入主题，8 种爆款模板各出 2 个候选，共 16 个标题。一键复制。",
  },
  {
    slug: "markdown-formatter",
    num: "02",
    title: "Markdown 转公众号",
    desc: "实时预览公众号样式，一键复制带 inline 样式的 HTML。粘贴公众号编辑器直接用。",
  },
  {
    slug: "word-counter",
    num: "03",
    title: "字数统计 + 标题检测",
    desc: "实时统计中文字数、段落、阅读时长。标题超 32 字订阅号会截断，工具自动提示。",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="pt-16 md:pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-6 text-[var(--ink-muted)]">
            AutoContent · Tools
          </div>
          <h1
            className="text-[28px] md:text-[34px] font-bold tracking-tight mb-3 text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            公众号免费工具集
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--ink-soft)] dark:text-gray-400">
            AutoContent 为公众号运营者准备的几个常用小工具。
            <strong className="text-[var(--ink)] dark:text-white font-semibold">
              全部免费、无需注册
            </strong>
            、纯浏览器运行不上传内容。
          </p>
          <div className="h-[2px] mt-10" style={{ background: "var(--rule)" }} />
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="group block p-5 md:p-6 rounded-sm border bg-white dark:bg-gray-900 hover:border-[var(--accent)] dark:hover:border-[var(--accent)] hover:shadow-sm transition-all"
              style={{ borderColor: "var(--divider)" }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-mono text-sm font-semibold shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  {t.num}
                </span>
                <div className="flex-1">
                  <h2
                    className="text-[17px] md:text-[18px] font-semibold mb-1.5 text-[var(--ink)] dark:text-white group-hover:text-[var(--accent)] dark:group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "var(--font-display-zh)" }}
                  >
                    {t.title}
                  </h2>
                  <p className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400">
                    {t.desc}
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
              需要完整自动化？
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
              这些工具是独立的小帮手。AutoContent 把它们打包成完整流程：
              智能选题 → AI 写稿 → 自动配图 → 一键发布公众号。
            </p>
            <Link
              href="https://app.autocontent.net"
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
