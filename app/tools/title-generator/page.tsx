import type { Metadata } from "next";
import { TitleGeneratorClient } from "./title-generator-client";
import { CTASection, RelatedFeatures } from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "公众号爆款标题生成器 — 免费在线，无需注册 | AutoContent",
  description:
    "免费公众号标题生成器：输入文章主题，立即生成 16 个候选爆款标题。8 种验证有效的标题模板（数字反常识、好奇心钩子、利益点等），可一键复制。无需注册。",
  keywords: [
    "公众号标题生成器",
    "爆款标题生成器",
    "标题生成器",
    "公众号标题",
    "AI 标题生成",
    "免费标题工具",
  ],
  alternates: {
    canonical: "https://autocontent.net/tools/title-generator",
  },
  openGraph: {
    title: "公众号爆款标题生成器 — 免费在线",
    description: "8 种爆款模板，输入主题秒出 16 个候选标题。",
    url: "https://autocontent.net/tools/title-generator",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-12 md:py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            公众号爆款标题生成器
          </h1>
          <p className="mt-4 text-base text-[var(--ink-soft)] dark:text-gray-400 max-w-xl mx-auto">
            输入文章主题，用 8 种验证有效的爆款标题模板，立即生成 16 个候选。免费、无需注册。
          </p>
        </div>
      </section>

      <TitleGeneratorClient />

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-6"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            为什么标题重要
          </h2>
          <div className="space-y-3 text-base text-[var(--ink-soft)] dark:text-gray-300 leading-relaxed">
            <p>
              公众号订阅号每天只能推一条，用户在订阅列表里平均扫一眼就划过去。
              <strong className="text-[var(--ink)] dark:text-white">
                标题不抓人，再好的内容也没机会被读到
              </strong>
              。
            </p>
            <p>
              头部账号的标题不是凭感觉写的——他们有自己的标题模板库，每篇文章按 5-10 个候选 A/B 选最优。
              这个工具帮你把这套方法工具化了。
            </p>
            <p className="text-sm text-[var(--ink-soft)] dark:text-gray-400 mt-4">
              💡 微信公众号订阅号标题超过 32 字会被截断，工具会自动提示。
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="想要 AI 帮你写完整文章？"
        subtitle="标题只是开始，AutoContent 帮你从选题到发布一站搞定"
      />

      <RelatedFeatures exclude="wechat-title-generator" />
    </article>
  );
}
