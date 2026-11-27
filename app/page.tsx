import type { Metadata } from "next";
import { WaitlistForm } from "./components/waitlist-form";

export const metadata: Metadata = {
  title: "AutoContent — 豆包帮你写一篇，我们帮你的号长起来",
  description:
    "不只做 AI 写作。AutoContent 基于你的公众号数据，判断今日/本周值得写的选题，结合热度、竞品覆盖与预测流量，并追踪发布后的真实反馈，让账号持续增长。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AutoContent — 豆包帮你写一篇，我们帮你的号长起来",
    description:
      "不只做 AI 写作。AutoContent 基于你的公众号数据，判断今日/本周值得写的选题，结合热度、竞品覆盖与预测流量，并追踪发布后的真实反馈，让账号持续增长。",
    url: "https://autocontent.net",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoContent — 豆包帮你写一篇，我们帮你的号长起来",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoContent — 豆包帮你写一篇，我们帮你的号长起来",
    description:
      "不只做 AI 写作。AutoContent 基于你的公众号数据，判断今日/本周值得写的选题，结合热度、竞品覆盖与预测流量，并追踪发布后的真实反馈，让账号持续增长。",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://autocontent.net/#organization",
      name: "AutoContent",
      url: "https://autocontent.net",
      logo: {
        "@type": "ImageObject",
        url: "https://autocontent.net/og-image.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://autocontent.net/#website",
      url: "https://autocontent.net",
      name: "AutoContent",
      publisher: { "@id": "https://autocontent.net/#organization" },
      inLanguage: "zh-CN",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://autocontent.net/#software",
      name: "AutoContent",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CNY",
        availability: "https://schema.org/InStock",
      },
      description:
        "基于账号数据的公众号选题与增长工具：判断今日/本周值得写的选题，追踪发布后反馈，帮助账号持续增长。",
      url: "https://app.autocontent.net",
      provider: { "@id": "https://autocontent.net/#organization" },
    },
  ],
};

const sampleTopics = [
  {
    title: "AI 应用出海：从工具到个人 IP 的机会",
    reason: "海外 AI 工具榜单变化快，国内创作者可借势解读",
    tag: "科技",
  },
  {
    title: "小红书电商新规下，个人店还能不能做",
    reason: "平台政策节点，搜索需求上升，适合经验型账号",
    tag: "商业",
  },
  {
    title: "年底职场复盘：怎样写出高转发的年终总结",
    reason: "年终节点叠加职场情绪，适合方法论类内容",
    tag: "职场",
  },
];

const differentiators = [
  {
    step: "01",
    title: "账号数据为锚",
    desc: "不是泛泛地「写一篇文章」，而是基于你的历史阅读、打开率与转化路径，判断什么选题对你的号更值钱。",
  },
  {
    step: "02",
    title: "选题综合研判",
    desc: "结合领域热度、竞品覆盖密度与预测流量，筛出「现在写、你写、能出彩」的选题，而不是追所有人都追的热点。",
  },
  {
    step: "03",
    title: "发布后回流",
    desc: "文章发出后回流真实数据，下一轮选题建议会参考上一篇的表现，让内容策略自己迭代。",
  },
];

const loopSteps = [
  { title: "浏览今日选题", desc: "每日/每周生成适合你的选题清单，附研判理由，先看再决定写什么" },
  { title: "选题综合研判", desc: "基于领域热度、竞品覆盖与预测流量，结合你的历史表现，判断哪个选题更可能涨" },
  { title: "辅助成稿与排版", desc: "AI 帮你扩写大纲、生成封面与排版，输出可直接粘贴使用的内容" },
  { title: "粘贴即用的多场景复用", desc: "将同一内容按需用于视频号口播、小红书图文、朋友圈等场景，减少重复劳动" },
  { title: "数据回流迭代", desc: "发布后回收阅读、分享、转化数据，让下一次选题更准；接入公众号后可自动同步历史数据" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — topic-led */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="text-[11px] font-mono tracking-[0.22em] uppercase mb-5"
            style={{ color: "var(--accent)" }}
          >
            账号增长，从选对题开始
          </div>
          <h1
            className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            豆包帮你写一篇
            <br />
            我们帮你的号长起来
          </h1>
          <p className="mt-5 text-[15px] md:text-[17px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 max-w-2xl mx-auto">
            不只生成文章。我们结合你的账号数据、领域热度与竞品覆盖，判断「现在写什么更容易涨」，并追踪发布后的真实反馈，让下一篇比上一篇更好。
          </p>

          {/* Sample topic list */}
          <div
            className="mt-10 text-left rounded-sm border p-5 md:p-6 bg-white dark:bg-gray-900"
            style={{ borderColor: "var(--divider)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-[11px] font-mono tracking-[0.22em] uppercase"
                style={{ color: "var(--ink-muted)" }}
              >
                今日/本周值得写的公众号选题
              </span>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-sm border"
                style={{ borderColor: "var(--divider)", color: "var(--ink-muted)" }}
              >
                示例
              </span>
            </div>
            <div className="space-y-3">
              {sampleTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-sm border"
                  style={{ background: "var(--paper-press)", borderColor: "var(--divider)" }}
                >
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[15px] font-semibold text-[var(--ink)] dark:text-white truncate"
                      style={{ fontFamily: "var(--font-display-zh)" }}
                    >
                      {topic.title}
                    </div>
                    <div className="text-[13px] leading-[1.6] text-[var(--ink-soft)] dark:text-gray-400">
                      {topic.reason}
                    </div>
                  </div>
                  <span
                    className="shrink-0 text-[11px] font-mono tracking-[0.16em] uppercase text-[var(--accent)]"
                  >
                    {topic.tag}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[var(--ink-muted)]">
              以上为示例数据，非实时推荐。注册后完善账号信息，即可获取基于你数据的选题建议。
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="https://app.autocontent.net/try"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium text-white transition-colors shadow-sm"
            >
              免费试用
            </a>
            <div id="waitlist" className="w-full max-w-md">
              <WaitlistForm variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-20 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
              与单纯写作工具的区别
            </span>
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
          </div>
          <div className="space-y-4">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="p-5 md:p-6 rounded-sm border-2 bg-white dark:bg-gray-900 transition-all hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-[2px]"
                style={{ borderColor: "var(--divider)" }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-sm font-semibold shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    {d.step}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[17px] md:text-[18px] font-semibold mb-2 text-[var(--ink)] dark:text-white"
                      style={{ fontFamily: "var(--font-display-zh)" }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loop */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
              从选题到增长的闭环
            </span>
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
          </div>
          <div className="space-y-0">
            {loopSteps.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-4 md:gap-6 p-5 border-b first:border-t"
                style={{ borderColor: "var(--divider)" }}
              >
                <span
                  className="font-mono text-sm font-semibold shrink-0 w-8"
                  style={{ color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3
                    className="text-[16px] md:text-[17px] font-semibold mb-1 text-[var(--ink)] dark:text-white"
                    style={{ fontFamily: "var(--font-display-zh)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="text-center rounded-sm border p-8 md:p-12"
            style={{
              borderColor: "var(--divider)",
              background: "var(--paper-elevated)",
            }}
          >
            <div
              className="text-[11px] font-mono tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              开始增长
            </div>
            <h2
              className="text-[22px] md:text-[28px] font-semibold mb-3 text-[var(--ink)] dark:text-white"
              style={{ fontFamily: "var(--font-display-zh)" }}
            >
              准备好让你的号长起来了吗？
            </h2>
            <p className="text-[14px] md:text-[15px] mb-8 text-[var(--ink-soft)] dark:text-gray-400">
              先试今日选题，觉得合适再注册保存或发布
            </p>
            <a
              href="https://app.autocontent.net/try"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-sm font-medium text-white transition-colors"
            >
              免费试用
            </a>
            <div className="mt-6">
              <WaitlistForm variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
