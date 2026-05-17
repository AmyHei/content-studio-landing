import type { Metadata } from "next";
import { MarkdownFormatterClient } from "./markdown-formatter-client";
import { CTASection, RelatedFeatures } from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "Markdown 转公众号 — 免费在线排版工具 | AutoContent",
  description:
    "免费 Markdown 转公众号工具：实时预览公众号样式，一键复制带 inline 样式的 HTML。支持代码块、表格、列表、引用。无需注册，不上传内容。",
  keywords: [
    "公众号排版工具",
    "公众号排版免费",
    "markdown 转公众号",
    "公众号 markdown",
    "公众号 html",
    "公众号在线排版",
  ],
  alternates: {
    canonical: "https://autocontent.net/tools/markdown-formatter",
  },
  openGraph: {
    title: "Markdown 转公众号 — 免费在线排版工具",
    description: "实时预览 + 一键复制公众号 HTML，无需注册。",
    url: "https://autocontent.net/tools/markdown-formatter",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Markdown 转公众号
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            左边贴 Markdown，右边看公众号样式预览。一键复制带 inline 样式的 HTML。
            免费、不上传你的内容。
          </p>
        </div>
      </section>

      <MarkdownFormatterClient />

      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            为什么需要这个工具
          </h2>
          <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              微信公众号编辑器的 HTML 渲染引擎堪比 IE6。它会：
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>完全忽略 <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">&lt;style&gt;</code> 标签</li>
              <li>完全忽略 <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">class</code> 属性</li>
              <li>把你的 Markdown 解析成 plain text，所有样式全部丢失</li>
            </ul>
            <p>
              所以你必须把每一个 HTML 元素的样式 <strong className="text-gray-900 dark:text-white">直接 inline 写到 style 属性里</strong>。
              这个工具自动帮你做这件事——你写 Markdown，输出立刻就是公众号能正确显示的 HTML。
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              🔒 所有处理在你浏览器里完成，不上传任何内容到服务器。
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="想要 AI 帮你从选题到发布全自动？"
        subtitle="排版只是一步，AutoContent 还包含 AI 写稿、自动配图、热点监控、一键发草稿箱"
      />

      <RelatedFeatures exclude="markdown-to-wechat" />
    </article>
  );
}
