import type { Metadata } from "next";
import {
  CTASection,
  FAQItem,
  RelatedFeatures,
  HeroBadge,
  PrimaryCTAButton,
  SecondaryCTAButton,
} from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "公众号 AI 排版工具 — 免费在线，Markdown 一键转换 | AutoContent",
  description:
    "公众号排版 AI 工具，免费在线使用。Markdown 写完一键转公众号样式，标题、引用、代码块、分隔线自动套用。支持深色模式、自定义模板。",
  keywords: [
    "公众号排版",
    "公众号排版工具",
    "公众号排版免费",
    "公众号排版 ai",
    "公众号排版 markdown",
    "公众号排版助手",
  ],
  alternates: { canonical: "https://autocontent.net/features/wechat-formatter" },
  openGraph: {
    title: "公众号 AI 排版工具 — 免费在线",
    description: "Markdown 一键转公众号，0 学习成本。",
    url: "https://autocontent.net/features/wechat-formatter",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge>免费在线 · 无需下载</HeroBadge>
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            公众号 AI 排版
            <br />
            <span className="text-[var(--accent)]">
              写完即发，告别手动调样式
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] dark:text-gray-400 max-w-2xl mx-auto">
            Markdown 写完一键转换成公众号样式，标题层级、代码块、引用、分隔线自动套用。
            支持自定义模板，免费在线使用，无需下载客户端。
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <PrimaryCTAButton>立即免费排版</PrimaryCTAButton>
            <SecondaryCTAButton href="/features/markdown-to-wechat">
              Markdown 详解
            </SecondaryCTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-8"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            为什么公众号排版这么烦
          </h2>
          <div className="space-y-4 text-base text-[var(--ink-soft)] dark:text-gray-300 leading-relaxed">
            <p>
              <strong className="text-[var(--ink)] dark:text-white">
                公众号编辑器是富文本，写作工具是 markdown
              </strong>
              。从 Notion / Obsidian / VS Code 复制过去，所有格式全没了——标题塌成普通段落，列表变成长串文字，代码块直接散架。
            </p>
            <p>
              市面上的&ldquo;排版工具&rdquo;有两类：一类要付费、一类要手动选模板调字号调间距，一篇 2000 字的文章排版要 30 分钟。
              <strong className="text-[var(--ink)] dark:text-white">
                真正解决问题的工具应该是&ldquo;贴上去就完事&rdquo;
              </strong>
              。
            </p>
            <p>
              AutoContent 的公众号 AI 排版做的就是这件事：你写你的
              markdown，我们直接给你公众号风格的预览和 HTML，复制粘贴到公众号编辑器，所有样式原样保留。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-8"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          支持的所有公众号样式
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "H1/H2/H3 标题",
            "无序/有序列表",
            "代码块（语法高亮）",
            "行内代码",
            "引用块",
            "粗体/斜体/下划线",
            "链接（公众号超链接）",
            "图片（自动居中）",
            "分隔线",
            "表格",
            "数学公式",
            "脚注",
          ].map((s) => (
            <div
              key={s}
              className="px-4 py-3 rounded-lg bg-[var(--paper-elevated)] dark:bg-gray-900 border border-[var(--divider)] dark:border-gray-800 text-sm text-[var(--ink-soft)] dark:text-gray-300"
            >
              ✓ {s}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-10"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            三步完成排版
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                t: "贴 Markdown",
                d: "把 Notion / Obsidian / Typora 写好的文章直接贴进来，或者用 AutoContent 内置编辑器直接写。",
              },
              {
                n: "2",
                t: "选模板（可选）",
                d: "默认 Apple 风格简洁排版，也提供深色模式、技术博客、文艺范等模板。或自定义颜色 + 字号。",
              },
              {
                n: "3",
                t: "一键复制 HTML",
                d: "点「复制公众号 HTML」，粘贴到微信公众号编辑器，所有样式原样保留。或者授权后直接发到草稿箱。",
              },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  {s.n}
                </div>
                <div className="font-semibold text-[var(--ink)] dark:text-white mb-1">
                  {s.t}
                </div>
                <div className="text-sm text-[var(--ink-soft)] dark:text-gray-400 leading-relaxed">
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-8"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          对比其他公众号排版工具
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--divider)] dark:border-gray-800">
                <th className="text-left py-3 px-3"></th>
                <th className="text-center py-3 px-3 font-semibold text-blue-600 dark:text-blue-400">
                  AutoContent
                </th>
                <th className="text-center py-3 px-3 text-[var(--ink-soft)] dark:text-gray-400">
                  传统排版工具
                </th>
                <th className="text-center py-3 px-3 text-[var(--ink-soft)] dark:text-gray-400">
                  手动复制
                </th>
              </tr>
            </thead>
            <tbody className="text-[var(--ink-soft)] dark:text-gray-300">
              {[
                ["Markdown 原生支持", "✓", "部分", "✗"],
                ["排版耗时", "10 秒", "15-30 分钟", "30-60 分钟"],
                ["代码块高亮", "✓ 自动", "需配置", "✗"],
                ["自定义模板", "✓", "✓", "—"],
                ["免费版限制", "无限免费", "通常有水印", "—"],
                ["附带 AI 写稿", "✓", "✗", "✗"],
              ].map(([feat, a, b, c], i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-3 px-3">{feat}</td>
                  <td className="text-center py-3 px-3 font-medium">{a}</td>
                  <td className="text-center py-3 px-3 text-gray-500">{b}</td>
                  <td className="text-center py-3 px-3 text-gray-500">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-8"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          常见问题
        </h2>
        <FAQItem
          q="公众号排版真的免费吗？"
          a="是的。基础排版功能完全免费、无水印、不限次数。Pro 版增加自定义品牌色、批量处理等高级功能，按需选购。"
        />
        <FAQItem
          q="支持哪些 Markdown 语法？"
          a="CommonMark + GFM（GitHub Flavored Markdown）全部支持：表格、任务列表、代码块语法高亮、自动链接、删除线等。"
        />
        <FAQItem
          q="排版后能不能直接发布到公众号？"
          a="可以。授权微信公众号 OAuth 后，一键发送到草稿箱，你在公众号后台预览并发表。"
        />
        <FAQItem
          q="代码块支持哪些语言的语法高亮？"
          a="100+ 语言：JavaScript / TypeScript / Python / Go / Rust / Java / C++ / SQL / Bash / YAML 等。基于 highlight.js。"
        />
        <FAQItem
          q="能保存自己的模板吗？"
          a="Pro 版支持自定义模板：调整主色、字号、行距、代码块主题，保存后下次直接套用。"
        />
      </section>

      <CTASection
        title="开始公众号排版"
        subtitle="免费、不限次数、复制粘贴即用"
      />

      <RelatedFeatures exclude="wechat-formatter" />
    </article>
  );
}
