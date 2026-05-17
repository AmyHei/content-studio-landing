import type { Metadata } from "next";
import {
  CTASection,
  FAQItem,
  RelatedFeatures,
  HeroBadge,
  PrimaryCTAButton,
} from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "Markdown 转公众号 — 给程序员写公众号的人 | AutoContent",
  description:
    "Markdown 转公众号工具：从 Notion / Obsidian / Typora 写完直接贴，自动转成公众号 HTML 样式。代码块、表格、公式全部支持。",
  keywords: [
    "公众号排版 markdown",
    "markdown 转公众号",
    "公众号 markdown",
    "技术博客 公众号",
    "代码块 公众号",
  ],
  alternates: {
    canonical: "https://autocontent.net/features/markdown-to-wechat",
  },
  openGraph: {
    title: "Markdown 转公众号 — 程序员友好的排版工具",
    description: "从 Obsidian / Notion 写完直接发公众号，所有样式保留。",
    url: "https://autocontent.net/features/markdown-to-wechat",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge>技术博客作者专属</HeroBadge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Markdown 转公众号
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              写代码的人也能轻松写公众号
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            从 Notion / Obsidian / Typora / VS Code 写完直接贴，代码块、表格、公式、引用全部原样保留。
            技术文章的&ldquo;最后一公里&rdquo;问题解决了。
          </p>
          <div className="mt-10">
            <PrimaryCTAButton>立即开始转换</PrimaryCTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            技术博主写公众号的痛
          </h2>
          <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              你的工作流是这样的：在{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">
                Obsidian
              </code>{" "}
              写好 markdown，到{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">
                Hexo
              </code>{" "}
              或{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">
                VuePress
              </code>{" "}
              部署成博客。同步发公众号时——所有 markdown 全废。
            </p>
            <p>
              复制到公众号编辑器后：代码块没了语法高亮、表格塌成一堆字、数学公式变成乱码、缩进全消失。
              <strong className="text-gray-900 dark:text-white">
                你只能选择手动重新排版（30 分钟起）或者跳过公众号
              </strong>
              。
            </p>
            <p>
              AutoContent 的 Markdown → 公众号转换专门解决这个：原生 markdown 在，出来就是公众号风格的 HTML，复制贴回公众号编辑器，
              <strong className="text-gray-900 dark:text-white">
                所有样式完整保留
              </strong>
              。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
          技术文章的关键元素，全部保留
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-sm">
          程序员关心的细节，我们都关心
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              t: "代码块语法高亮",
              d: "支持 100+ 语言（JS / TS / Python / Go / Rust / Java / SQL / YAML / Bash / Dockerfile 等），主题可选 GitHub / VSCode / Monokai",
            },
            {
              t: "行内代码样式",
              d: "`inline code` 自动套用代码字体 + 浅灰底色，和正文区分开",
            },
            {
              t: "Mermaid 流程图",
              d: "Markdown 里写 mermaid 代码块，输出公众号支持的图片（自动渲染上传）",
            },
            {
              t: "LaTeX 数学公式",
              d: "$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ 这种 LaTeX 直接渲染成图片，公众号原生支持",
            },
            {
              t: "表格",
              d: "GFM 表格语法直接转公众号的 table 样式，斑马纹可选",
            },
            {
              t: "脚注引用",
              d: "Markdown 的 [^1] 脚注语法保留，公众号中以「引用块」形式展示",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <div className="font-semibold mb-1 text-blue-600 dark:text-blue-400">
                {f.t}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {f.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            技术博主的标准工作流
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <ol className="space-y-4 text-base">
              {[
                "在 Obsidian / Notion / VS Code 写技术 markdown",
                "部署到博客（Hexo / VuePress / Astro）",
                "打开 AutoContent，把同一份 markdown 贴进来",
                "点「复制公众号 HTML」，贴到公众号编辑器，发布",
                "同步到 X / 即刻 / 掘金（autocontent 支持多平台一键发布）",
              ].map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-blue-600 dark:text-blue-400 font-mono shrink-0">
                    →
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {i === 2 ? <strong className="text-gray-900 dark:text-white">{s}</strong> : s}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            整套流程从&ldquo;写完到全平台发布&rdquo;控制在 5 分钟内
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          常见问题
        </h2>
        <FAQItem
          q="支持 CommonMark 还是 GFM？"
          a="两者都支持。CommonMark 基础语法 + GFM 扩展（表格、任务列表、删除线、自动链接等）全部转换。"
        />
        <FAQItem
          q="代码块语法高亮支持哪些主题？"
          a="GitHub Light / GitHub Dark / VSCode Light / Monokai / Atom One Dark 等 10+ 主题，可在设置里选。"
        />
        <FAQItem
          q="Mermaid 流程图怎么处理？"
          a="检测到 mermaid 代码块时，后端调用 mermaid-cli 渲染成 SVG，再转成 PNG 上传到公众号 CDN。公众号编辑器无需任何插件。"
        />
        <FAQItem
          q="数学公式公众号原生不支持，怎么办？"
          a="LaTeX 公式（$...$ 行内，$$...$$ 块级）会被渲染成 SVG 图片，公众号无插件支持。复杂公式也清晰可读。"
        />
        <FAQItem
          q="可以保留我的代码风格（缩进 / 行号）吗？"
          a="可以。Tab vs 空格缩进保留原样，行号在设置里可开启。"
        />
        <FAQItem
          q="支持哪些写作工具的 markdown 格式？"
          a="标准 markdown 通用。已专门测试 Obsidian、Notion 导出、Typora、VS Code、Hexo / Astro 源文件。"
        />
      </section>

      <CTASection
        title="把你的 Markdown 变成公众号"
        subtitle="技术内容也能在公众号好看地展示"
      />

      <RelatedFeatures exclude="markdown-to-wechat" />
    </article>
  );
}
