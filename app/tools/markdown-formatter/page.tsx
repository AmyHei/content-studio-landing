import type { Metadata } from "next";
import { MarkdownFormatterClient } from "./markdown-formatter-client";
import { CTASection, RelatedFeatures } from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "Markdown 转公众号 — 免费在线排版工具 | AutoContent",
  description:
    "免费 Markdown 转公众号工具：实时预览公众号样式，一键复制带样式的正文。支持代码块、表格、列表、引用。无需注册，不上传内容。",
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
    description: "实时预览 + 一键复制排版内容，无需注册。",
    url: "https://autocontent.net/tools/markdown-formatter",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-12 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            Markdown 转公众号
          </h1>
          <p className="mt-4 text-base text-[var(--ink-soft)] dark:text-gray-400 max-w-xl mx-auto">
            左边贴 Markdown，右边看公众号样式预览。一键复制带样式的正文。
            免费、不上传你的内容。
          </p>
        </div>
      </section>

      <MarkdownFormatterClient />

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-6"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            为什么需要这个工具
          </h2>
          <div className="space-y-3 text-base text-[var(--ink-soft)] dark:text-gray-300 leading-relaxed">
            <p>预览正常，不代表粘贴后的内容也相同。这个工具将 Markdown 转成带内联样式的正文，并提供富文本复制。</p>
            <p>在公众号图文正文中直接粘贴后，请检查标题、列表、表格和图片，再使用平台预览确认最终效果。不同编辑器可能调整样式。</p>
            <p className="text-sm text-[var(--ink-muted)] dark:text-gray-500 mt-4">
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
