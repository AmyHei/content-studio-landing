import type { Metadata } from "next";
import { WaitlistForm } from "./components/waitlist-form";

// Homepage owns the site-root canonical. It must NOT live in app/layout.tsx,
// or every descendant page that omits its own canonical inherits "/" and
// wrongly canonicalizes to the homepage (the 2026-06-22 index-killer bug).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
        "AI 公众号自动化工具：智能监控热点、AI 写稿、自动配图、一键发布微信草稿箱",
      url: "https://app.autocontent.net",
      provider: { "@id": "https://autocontent.net/#organization" },
    },
  ],
};

const painPoints = [
  {
    num: "01",
    title: "每天花 3-4 小时写公众号",
    desc: "选题、写稿、配图、排版…产出还不稳定",
  },
  {
    num: "02",
    title: "热点来了反应慢",
    desc: "等你写完发出去，别人早就发了三遍了",
  },
  {
    num: "03",
    title: "多平台分发太繁琐",
    desc: "公众号、博客、Twitter…每个平台都要手动适配",
  },
];

const features = [
  {
    step: "01",
    title: "智能监控",
    desc: "自动追踪全网热点（HackerNews / Reddit / Twitter），AI 评分筛选高潜力选题",
    img: "/screenshots/monitor-page.png",
  },
  {
    step: "02",
    title: "AI 创作",
    desc: "从选题到成稿，AI 辅助生成大纲、初稿、润色，支持自定义写作风格",
    img: "/screenshots/wizard-outline.png",
  },
  {
    step: "03",
    title: "自动配图",
    desc: "DALL-E 生成封面 + HTML 信息图，自动适配各平台尺寸要求",
    img: "/screenshots/wizard-images-step.png",
  },
  {
    step: "04",
    title: "一键发布",
    desc: "微信公众号草稿箱直达，支持博客、Twitter 等多平台一键分发",
    img: "/screenshots/published-article.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-6 text-[var(--ink-muted)]">
            AutoContent
          </div>
          <h1
            className="text-[32px] md:text-[42px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            让 AI 帮你从选题到发布
            <br />
            一键搞定公众号内容
          </h1>
          <p className="mt-5 text-[15px] md:text-[17px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400 max-w-2xl mx-auto">
            监控热点 → AI 写稿 → 自动配图 → 一键发布微信公众号
            <br />
            大幅提升内容创作效率
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="https://app.autocontent.net/register"
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

      {/* Pain Points */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
              自媒体创作者的痛
            </span>
            <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
          </div>
          <div className="space-y-4">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="p-5 md:p-6 rounded-sm border bg-white dark:bg-gray-900"
                style={{ borderColor: "var(--divider)" }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-sm font-semibold shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-[16px] md:text-[17px] font-semibold mb-1 text-[var(--ink)] dark:text-white"
                      style={{ fontFamily: "var(--font-display-zh)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--ink-soft)] dark:text-gray-400">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-14">
              <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[var(--ink-muted)]">
                四步搞定内容创作
              </span>
              <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
            </div>
          </div>
          <div className="space-y-16 md:space-y-20">
            {features.map((f, i) => (
              <div
                key={f.step}
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div
                    className="text-[11px] font-mono tracking-[0.22em] uppercase mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    STEP · {f.step}
                  </div>
                  <h3
                    className="text-[22px] md:text-[26px] font-semibold leading-[1.3] mb-3 text-[var(--ink)] dark:text-white"
                    style={{ fontFamily: "var(--font-display-zh)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] leading-[1.75] text-[var(--ink-soft)] dark:text-gray-400">
                    {f.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="rounded-sm border w-full"
                    style={{ borderColor: "var(--divider)" }}
                  />
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
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase mb-4 text-[var(--accent)]">
              READY TO START
            </div>
            <h2
              className="text-[22px] md:text-[28px] font-semibold mb-3 text-[var(--ink)] dark:text-white"
              style={{ fontFamily: "var(--font-display-zh)" }}
            >
              准备好让 AI 帮你创作了吗？
            </h2>
            <p className="text-[14px] md:text-[15px] mb-8 text-[var(--ink-soft)] dark:text-gray-400">
              注册即可开始免费体验
            </p>
            <a
              href="https://app.autocontent.net/register"
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
