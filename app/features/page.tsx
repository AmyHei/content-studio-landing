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
    title: "AI 写公众号文章",
    desc: "智能选题、AI 写稿、自动配图、一键发布微信草稿箱。从 4 小时缩到 30 秒。",
    keyword: "AI 写公众号",
  },
  {
    slug: "wechat-formatter",
    title: "公众号 AI 排版",
    desc: "Markdown 写完一键转公众号样式，标题、代码、引用、分隔线自动套用。",
    keyword: "公众号排版",
  },
  {
    slug: "wechat-title-generator",
    title: "爆款标题 AI 生成器",
    desc: "8 种验证有效的爆款标题模板，输入主题秒出 16 个候选标题。",
    keyword: "爆款标题",
  },
  {
    slug: "markdown-to-wechat",
    title: "Markdown 转公众号",
    desc: "从 Notion / Obsidian / VS Code 写完直接贴，代码块、表格、公式全部原样保留。",
    keyword: "Markdown 公众号",
  },
  {
    slug: "ai-writing-free",
    title: "免费 AI 写作工具",
    desc: "Claude / GPT / Gemini / Grok 全模型支持，每月免费 5 篇起。",
    keyword: "AI 写作免费",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            全部功能
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            AutoContent 覆盖公众号创作每个环节：从选题、写作、排版到发布。
            每个功能都有独立页面，下面是完整清单。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURES.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-3">
                关键词 · {f.keyword}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {f.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {f.desc}
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                查看详情 →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            想直接试用所有功能？
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            AutoContent 把以上能力一站打包，注册即用，每月免费 5 篇。
          </p>
          <Link
            href="https://app.autocontent.net"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-semibold text-white transition-colors shadow-sm"
          >
            免费试用 AutoContent
          </Link>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-sm">
            <span className="text-gray-500 dark:text-gray-500">
              想先用免费小工具？
            </span>{" "}
            <Link
              href="/tools"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              去工具页 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
