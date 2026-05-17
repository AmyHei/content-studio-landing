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
    <article className="min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            公众号免费工具集
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AutoContent 为公众号运营者准备的几个常用小工具。
            <strong className="text-gray-900 dark:text-white">
              全部免费、无需注册
            </strong>
            、纯浏览器运行不上传内容。
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="block p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <div className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {t.title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.desc}
              </div>
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-400">
                立即使用 →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            需要完整自动化？
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            这些工具是独立的小帮手。AutoContent 把它们打包成完整流程：
            智能选题 → AI 写稿 → 自动配图 → 一键发布公众号。
          </p>
          <Link
            href="https://app.autocontent.net"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-semibold text-white transition-colors shadow-sm"
          >
            免费试用 AutoContent
          </Link>
        </div>
      </section>
    </article>
  );
}
