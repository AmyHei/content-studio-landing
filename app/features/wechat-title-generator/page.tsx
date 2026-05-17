import type { Metadata } from "next";
import {
  CTASection,
  FAQItem,
  RelatedFeatures,
  HeroBadge,
  PrimaryCTAButton,
} from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "爆款标题 AI 生成器 — 公众号点击率翻倍 | AutoContent",
  description:
    "爆款标题生成器：输入文章主题，AI 用 7 种爆款模板生成 10 个候选标题。覆盖好奇心、利益点、悬念、对比、数字等公众号最有效的标题结构。",
  keywords: [
    "爆款标题",
    "爆款标题生成器",
    "标题生成器",
    "公众号标题",
    "AI 标题生成",
    "标题生成",
  ],
  alternates: {
    canonical: "https://autocontent.net/features/wechat-title-generator",
  },
  openGraph: {
    title: "爆款标题 AI 生成器 — 公众号点击率翻倍",
    description: "10 个候选标题，7 种爆款模板，AI 一键生成。",
    url: "https://autocontent.net/features/wechat-title-generator",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge>免费 AI 标题生成</HeroBadge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            爆款标题 AI 生成器
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              公众号点击率翻倍
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            输入文章主题，AI 用 7 种爆款模板秒出 10 个候选标题。
            数据驱动选模板，告别&ldquo;我写的标题没人点&rdquo;的焦虑。
          </p>
          <div className="mt-10">
            <PrimaryCTAButton>免费生成标题</PrimaryCTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            标题决定 80% 的打开率
          </h2>
          <div className="space-y-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              公众号订阅号每天推送一条，用户在订阅列表里平均扫一眼就划过去。
              <strong className="text-gray-900 dark:text-white">
                标题不抓人，再好的内容也没机会被读到
              </strong>
              。
            </p>
            <p>
              头部账号的标题不是凭感觉写的——他们有自己的标题模板库，每篇文章按 5-10 个候选 A/B 选最优。
              AutoContent 把这套方法工具化了：你给主题，AI 用经过验证的标题结构生成候选。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
          7 种公众号爆款标题模板
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-sm">
          每个模板都来自高点击文章的归纳
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              t: "数字 + 反常识",
              e: "做了 100 单跨境电商，我发现这 3 件事和教程里说的完全不同",
              tag: "信任度高",
            },
            {
              t: "好奇心钩子",
              e: "为什么大厂程序员都在偷偷做副业？我问了 12 个 P7",
              tag: "高打开率",
            },
            {
              t: "利益点直击",
              e: "用这个免费工具，公众号写作时间从 4 小时缩到 30 分钟",
              tag: "转化最强",
            },
            {
              t: "对比反差",
              e: "月入 3000 和月入 3 万的自媒体，差距不在写作能力",
              tag: "情绪共鸣",
            },
            {
              t: "结果导向",
              e: "靠 AI 写公众号，3 个月做到 5000 粉，全流程复盘",
              tag: "案例党最爱",
            },
            {
              t: "悬念结构",
              e: "我把公众号交给 AI 运营 30 天，结果让我重新思考自媒体",
              tag: "完读率高",
            },
            {
              t: "权威背书",
              e: "Anthropic 工程师告诉你，做 AI 副业到底有没有戏",
              tag: "可信度高",
            },
            {
              t: "时效热点",
              e: "Claude 4.5 发布后，公众号写作工作流应该这样升级",
              tag: "搜索流量好",
            },
          ].map((t) => (
            <div
              key={t.t}
              className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-2 gap-2">
                <div className="font-semibold text-gray-900 dark:text-white text-[15px]">
                  {t.t}
                </div>
                <span className="text-[10px] font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t.tag}
                </span>
              </div>
              <div className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed italic">
                &ldquo;{t.e}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            怎么用爆款标题生成器
          </h2>
          <ol className="space-y-5">
            {[
              "输入文章主题或第一段（越具体越好）",
              "AI 用 7 种模板各生成 1-2 个候选，共 10 个标题",
              "你可以让 AI 单独再优化某个模板，或要求「再来 5 个数字型」",
              "选定标题，直接进入写稿环节，标题自动带过去",
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div className="pt-1 text-[15px] text-gray-700 dark:text-gray-300">
                  {s}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          常见问题
        </h2>
        <FAQItem
          q="AI 生成的标题会不会千篇一律？"
          a="不会。我们让 AI 在 7 种模板间切换，每个模板内还会变换数字、人称、情绪等参数。10 个候选标题之间差异明显，可选性强。"
        />
        <FAQItem
          q="爆款标题生成器免费用吗？"
          a="是。每月免费生成 50 次（500 个候选标题），普通账号完全够用。重度用户可升级 Pro。"
        />
        <FAQItem
          q="生成的标题是否符合公众号规范？"
          a="所有候选标题都经过审核：长度（< 32 字）、关键词敏感度、平台违规词检查，确保发出去不会被限流。"
        />
        <FAQItem
          q="可以基于现成文章倒推标题吗？"
          a="可以。把文章粘贴进来，AI 会先理解核心观点，再生成贴合内容的爆款标题。"
        />
        <FAQItem
          q="支持视频号 / 小红书的标题吗？"
          a="目前重点优化公众号场景。视频号 / 小红书在 roadmap 上。"
        />
      </section>

      <CTASection
        title="让 AI 帮你想标题"
        subtitle="10 个候选标题，10 秒生成，免费"
      />

      <RelatedFeatures exclude="wechat-title-generator" />
    </article>
  );
}
