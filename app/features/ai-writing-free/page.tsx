import type { Metadata } from "next";
import {
  CTASection,
  FAQItem,
  RelatedFeatures,
  HeroBadge,
  PrimaryCTAButton,
} from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "免费 AI 写作工具 — 在线使用，注册即用 | AutoContent",
  description:
    "免费 AI 写作工具，在线使用无需下载。支持多家主流大模型，公众号文章、技术博客、营销文案都能生成。注册即可免费试用。",
  keywords: [
    "ai 写作",
    "ai 写作免费",
    "ai 写作工具",
    "免费 ai 写作",
    "ai 写作在线",
    "ai 写作助手",
    "ai 写文章",
  ],
  alternates: {
    canonical: "https://autocontent.net/features/ai-writing-free",
  },
  openGraph: {
    title: "免费 AI 写作工具 — 在线使用",
    description: "支持多家主流大模型，免费试用。",
    url: "https://autocontent.net/features/ai-writing-free",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge>免费试用 · 注册即用</HeroBadge>
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            AI 写作工具
            <br />
            <span className="text-[var(--accent)]">
              注册即可免费使用
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] max-w-2xl mx-auto">
            支持多家主流大模型。公众号文章、技术博客、营销文案、社交媒体内容都能生成。
            注册即可免费试用，无需信用卡。
          </p>
          <div className="mt-10">
            <PrimaryCTAButton>立即免费试用</PrimaryCTAButton>
          </div>
          <p className="mt-3 text-xs text-[var(--ink-muted)]">
            注册即可开始使用
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)]">
        <div className="max-w-5xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] mb-3"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            AI 能写什么
          </h2>
          <p className="text-center text-[var(--ink-soft)] mb-10 text-sm">
            不是&ldquo;写一切的玩具&rdquo;，是为内容创作者深度优化的工具
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                t: "公众号文章",
                d: "长文 / 深度 / 评论 / 案例分析，从选题到写稿到排版全套。",
                cat: "公众号 / 头条",
              },
              {
                t: "技术博客",
                d: "教程、源码解析、性能优化、最佳实践。代码块和图示原生支持。",
                cat: "掘金 / CSDN",
              },
              {
                t: "营销文案",
                d: "产品介绍页、邮件、社群文案、广告短文。多平台尺寸适配。",
                cat: "落地页 / EDM",
              },
              {
                t: "X / 即刻短文",
                d: "结构化 thread、话题切片、转化型文案。多平台同步发布。",
                cat: "社交媒体",
              },
              {
                t: "小红书笔记",
                d: "情感共鸣、亲身案例、教程型笔记。带 emoji 适配小红书调性。",
                cat: "小红书",
              },
              {
                t: "邮件 / 内部沟通",
                d: "周报、提案、产品发布、问题复盘。结构清晰、语气得体。",
                cat: "Slack / 邮件",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="p-5 rounded-sm bg-white border border-[var(--divider)]"
              >
                <div className="text-[10px] font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                  {c.cat}
                </div>
                <div className="font-semibold text-[var(--ink)] mb-1">
                  {c.t}
                </div>
                <div className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  {c.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] mb-3"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          支持多家主流大模型
        </h2>
        <p className="text-center text-[var(--ink-soft)] mb-10 text-sm">
          系统按内容类型自动选最合适的模型，也可手动指定
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Claude 系列", strong: "长文 / 推理 / 风格" },
            { name: "GPT 系列", strong: "营销 / 多语种" },
            { name: "Gemini 系列", strong: "结构化 / 速度" },
            { name: "Grok 系列", strong: "热点 / 调性" },
            { name: "DeepSeek 系列", strong: "中文 / 性价比" },
            { name: "通义千问", strong: "中文 / 阿里生态" },
            { name: "Kimi", strong: "长上下文" },
            { name: "豆包", strong: "短文 / 字节生态" },
          ].map((m) => (
            <div
              key={m.name}
              className="p-4 rounded-lg border border-[var(--divider)] bg-white text-center hover:border-blue-600 transition-colors"
            >
              <div className="font-semibold text-sm text-[var(--ink)] mb-1">
                {m.name}
              </div>
              <div className="text-xs text-[var(--ink-soft)]">
                {m.strong}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)]">
        <div className="max-w-3xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] mb-6"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            为什么提供免费试用
          </h2>
          <div className="space-y-3 text-base text-[var(--ink-soft)] leading-relaxed">
            <p>
              我们相信好的产品应该让用户先体验再决定。
              注册即可免费试用核心功能，亲自感受 AI 写作的效率提升。
            </p>
            <p>
              <strong className="text-[var(--ink)]">
                具体定价方案即将公布
              </strong>
              ——我们会在确定定价后通过官网和邮件通知。目前的重点是打磨产品体验。
            </p>
            <p>
              不会出现&ldquo;免费版到处是水印&rdquo;或&ldquo;免费版只能用低端模型&rdquo;这种事。
              <strong className="text-[var(--ink)]">
                试用期间可以体验完整的 AI 模型能力
              </strong>
              。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] mb-8"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          常见问题
        </h2>
        <FAQItem
          q="产品如何收费？"
          a="产品目前提供免费试用，注册即可体验核心功能。具体定价方案即将公布，届时会通过官网和邮件通知。"
        />
        <FAQItem
          q="试用版能用主流 AI 模型吗？"
          a="可以。试用用户可以体验完整的模型能力，没有模型限制。"
        />
        <FAQItem
          q="生成的内容版权归谁？"
          a="完全归你。我们不保留任何所有权，不用你的内容训练模型。"
        />
        <FAQItem
          q="AI 写的内容会被检测出是 AI 吗？"
          a="我们让 AI 学你的风格生成，多数情况下检测工具识别为「人类撰写」。但我们不鼓励用 AI 作弊——AI 是协作者，不是替身。"
        />
        <FAQItem
          q="数据安全怎么保障？"
          a="数据加密存储（AES-256），只你能看见自己的内容。不与第三方共享，不用于训练。"
        />
        <FAQItem
          q="可以上传现有文章让 AI 学风格吗？"
          a="可以。上传 5-10 篇过往文章，AI 自动学习人称、句式、口头禅，后续生成的内容更像你自己写的。"
        />
      </section>

      <CTASection
        title="开始免费试用 AI 写作"
        subtitle="注册即可立刻体验"
      />

      <RelatedFeatures exclude="ai-writing-free" />
    </article>
  );
}
