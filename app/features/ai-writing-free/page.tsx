import type { Metadata } from "next";
import {
  CTASection,
  FAQItem,
  RelatedFeatures,
  HeroBadge,
  PrimaryCTAButton,
} from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "免费 AI 写作工具 — 在线无限制，注册即用 | AutoContent",
  description:
    "免费 AI 写作工具，在线使用无需下载。Claude / GPT / Gemini 全模型支持，公众号文章、技术博客、营销文案都能生成。每月免费 5 篇起。",
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
    title: "免费 AI 写作工具 — 在线无限制",
    description: "Claude / GPT / Gemini 全模型支持，免费试用。",
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
          <HeroBadge>免费在线 · 注册即用</HeroBadge>
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            AI 写作工具
            <br />
            <span className="text-[var(--accent)]">
              免费在线使用
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] dark:text-gray-400 max-w-2xl mx-auto">
            Claude 4.5、GPT-5、Gemini 2.5、Grok 4 全模型支持。公众号文章、技术博客、营销文案、社交媒体内容都能生成。
            每月免费 5 篇起，无需信用卡。
          </p>
          <div className="mt-10">
            <PrimaryCTAButton>立即免费试用</PrimaryCTAButton>
          </div>
          <p className="mt-3 text-xs text-[var(--ink-muted)] dark:text-gray-500">
            注册即送 5 篇免费额度
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-3"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            AI 能写什么
          </h2>
          <p className="text-center text-[var(--ink-soft)] dark:text-gray-400 mb-10 text-sm">
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
                className="p-5 rounded-sm bg-white dark:bg-gray-900 border border-[var(--divider)] dark:border-gray-800"
              >
                <div className="text-[10px] font-medium text-[var(--accent)] mb-2 uppercase tracking-wide">
                  {c.cat}
                </div>
                <div className="font-semibold text-[var(--ink)] dark:text-white mb-1">
                  {c.t}
                </div>
                <div className="text-sm text-[var(--ink-soft)] dark:text-gray-400 leading-relaxed">
                  {c.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-3"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          支持的所有 AI 模型
        </h2>
        <p className="text-center text-[var(--ink-soft)] dark:text-gray-400 mb-10 text-sm">
          系统按内容类型自动选最合适的模型，也可手动指定
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Claude 4.5", strong: "长文 / 推理 / 风格" },
            { name: "GPT-5", strong: "营销 / 多语种" },
            { name: "Gemini 2.5", strong: "结构化 / 速度" },
            { name: "Grok 4", strong: "热点 / 调性" },
            { name: "DeepSeek V3", strong: "中文 / 性价比" },
            { name: "Qwen 3", strong: "中文 / 阿里生态" },
            { name: "Kimi K2", strong: "长上下文" },
            { name: "Doubao", strong: "短文 / 抖音" },
          ].map((m) => (
            <div
              key={m.name}
              className="p-4 rounded-lg border border-[var(--divider)] dark:border-gray-800 bg-white dark:bg-gray-900 text-center hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <div className="font-semibold text-sm text-[var(--ink)] dark:text-white mb-1">
                {m.name}
              </div>
              <div className="text-xs text-[var(--ink-soft)] dark:text-gray-400">
                {m.strong}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-6"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            为什么免费
          </h2>
          <div className="space-y-3 text-base text-[var(--ink-soft)] dark:text-gray-300 leading-relaxed">
            <p>
              我们相信内容创作者大多数时候不需要为基础功能付费。
              每月 5 篇免费额度对个人副业号、刚起步的自媒体已经够用。
            </p>
            <p>
              <strong className="text-[var(--ink)] dark:text-white">
                付费只为更高频的使用
              </strong>
              ——重度用户（每天 1-3 篇）、矩阵号运营、企业团队。Pro 版本主要解锁的是：额度、批量处理、多账号管理、高级模型（Opus 4.7、GPT-5 Pro）。
            </p>
            <p>
              不会出现&ldquo;免费版到处是水印&rdquo;或&ldquo;免费版只能用低端模型&rdquo;这种事。
              <strong className="text-[var(--ink)] dark:text-white">
                免费用户和付费用户能用同一套核心 AI 模型
              </strong>
              。
            </p>
          </div>
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
          q="真的完全免费吗？"
          a="基础功能完全免费：每月 5 篇 AI 写作、无限次排版、标题生成器、模型自由切换。重度用户付费升级 Pro。"
        />
        <FAQItem
          q="免费版能用 Claude / GPT-5 这种顶级模型吗？"
          a="可以。免费用户和付费用户共享同一套模型池，没有「免费版用差模型」的歧视。"
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
        title="开始免费用 AI 写作"
        subtitle="注册 30 秒，立刻写第一篇"
      />

      <RelatedFeatures exclude="ai-writing-free" />
    </article>
  );
}
