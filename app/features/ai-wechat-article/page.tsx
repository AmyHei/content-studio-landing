import type { Metadata } from "next";
import {
  CTASection,
  FAQItem,
  RelatedFeatures,
  HeroBadge,
  PrimaryCTAButton,
} from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "AI 写公众号文章 — 从选题到发布 30 秒搞定 | AutoContent",
  description:
    "AI 写公众号文章工具：智能选题、AI 写稿、自动配图、一键发布微信草稿箱。副业、自媒体、企业号都能用，免费试用。",
  keywords: [
    "AI 写公众号",
    "AI 写公众号文章",
    "公众号 AI 写作",
    "AI 写公众号年入 200w",
    "公众号自动化",
  ],
  alternates: { canonical: "https://autocontent.net/features/ai-wechat-article" },
  openGraph: {
    title: "AI 写公众号文章 — 从选题到发布 30 秒",
    description: "AI 帮你写公众号，选题写稿配图一站完成。",
    url: "https://autocontent.net/features/ai-wechat-article",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge>AI 写公众号 · 免费试用</HeroBadge>
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            AI 帮你写公众号文章
            <br />
            <span className="text-[var(--accent)]">
              30 秒，从选题到发布
            </span>
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-soft)] dark:text-gray-400 max-w-2xl mx-auto">
            选个话题，AI 生成符合你风格的文章，自动配图、智能排版，一键发到微信公众号草稿箱。
            副业自媒体每天省 3 小时，企业号小编不再加班。
          </p>
          <div className="mt-10">
            <PrimaryCTAButton>免费开始写第一篇</PrimaryCTAButton>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-10"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            公众号运营，这 4 件事最磨人
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "选题枯竭", d: "天天追热点，每天打开手机第一件事是焦虑今天写啥" },
              { t: "写稿耗时", d: "一篇 2000 字深度文，从想标题到定稿 4 小时起" },
              { t: "排版折磨", d: "Markdown 写完往公众号一贴，所有格式全没了" },
              { t: "配图找不到", d: "免费图库千篇一律，找一张合适的封面要 20 分钟" },
            ].map((p) => (
              <div
                key={p.t}
                className="p-5 rounded-sm bg-white dark:bg-gray-900 border border-[var(--divider)] dark:border-gray-800"
              >
                <div className="font-semibold text-[var(--ink)] dark:text-white mb-1">
                  {p.t}
                </div>
                <div className="text-sm text-[var(--ink-soft)] dark:text-gray-400 leading-relaxed">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-12"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          AI 写公众号的完整流程
        </h2>
        <div className="space-y-6">
          {[
            {
              n: "01",
              t: "智能选题",
              d: "AI 从你订阅的 RSS、知乎热榜、X、即刻同步热点，根据你的公众号定位推荐当天该写啥。也支持你直接输入想法。",
            },
            {
              n: "02",
              t: "AI 写稿",
              d: "给 AI 喂你过去的 5-10 篇文章学风格，生成的稿子像你自己写的。支持多家模型：Claude / GPT / Gemini / Grok，按内容类型自动选模型。",
            },
            {
              n: "03",
              t: "自动配图 + 排版",
              d: "封面图 AI 生成，正文配图按段落语义匹配。排版自动套用公众号样式（标题/引用/代码块/分隔线），不用再手动调字号。",
            },
            {
              n: "04",
              t: "一键发布到草稿箱",
              d: "授权公众号后，文章直接发送到微信草稿箱。你只需要预览一遍，点「发表」即可。",
            },
          ].map((s) => (
            <div key={s.n} className="flex gap-5 items-start">
              <div className="shrink-0 w-12 h-12 rounded-sm bg-[var(--accent)] text-white flex items-center justify-center font-bold">
                {s.n}
              </div>
              <div>
                <div className="font-semibold text-lg text-[var(--ink)] dark:text-white mb-1">
                  {s.t}
                </div>
                <div className="text-[var(--ink-soft)] dark:text-gray-400 leading-relaxed">
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-3"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            谁在用 AI 写公众号
          </h2>
          <p className="text-center text-[var(--ink-soft)] dark:text-gray-400 mb-10 text-sm">
            副业、自媒体、企业，三种场景都能跑通
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: "副业账号",
                d: "下班 1 小时发 1 篇，月入 2k-1w。AI 写稿 + 自动追热点是关键。",
                tag: "兼职 1 小时/天",
              },
              {
                t: "自媒体专职",
                d: "一人维护 3-5 个垂类号，AI 把重复劳动接管，你专注做选题判断和精修。",
                tag: "效率 5x",
              },
              {
                t: "企业新媒体",
                d: "公司公众号每周 3-5 更，AI 解决排版+配图，小编时间留给做品牌策略。",
                tag: "节省人力",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="p-6 rounded-sm bg-white dark:bg-gray-900 border border-[var(--divider)] dark:border-gray-800"
              >
                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {c.tag}
                </div>
                <div className="font-semibold text-[var(--ink)] dark:text-white mb-2">
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

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-8"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
          常见问题
        </h2>
        <FAQItem
          q="AI 写的公众号文章会被识别出来吗？"
          a="我们让 AI 学你的过往文章风格，生成的稿子人称、口头禅、断句节奏都贴近你自己。多数用户反馈读者完全察觉不到。AI 是工具，最终发出去的是你的判断和精修。"
        />
        <FAQItem
          q="AI 写公众号能做副业变现吗？真有人年入 200w 吗？"
          a="头部确实有人靠 AI 矩阵号年入百万级，但绝大多数副业用户的稳态在月入 2k-1w。关键不是 AI 本身，是选对垂类 + 持续更新 + 流量主/广告主接洽。AutoContent 帮你解决「写」的问题，剩下的看你的运营。"
        />
        <FAQItem
          q="生成的文章版权归谁？"
          a="完全归你。我们不保留生成内容的所有权，不用于训练模型。"
        />
        <FAQItem
          q="支持哪些 AI 模型？"
          a="Claude 4.5、GPT-5、Gemini 2.5、Grok 4 都接入了。系统根据文章类型自动选最合适的模型，也可以手动指定。"
        />
        <FAQItem
          q="免费版有什么限制？"
          a="每月免费写 5 篇文章，所有功能都能用（选题、写稿、配图、排版、发布）。超出后按篇付费或升级订阅。"
        />
      </section>

      <CTASection
        title="开始用 AI 写公众号"
        subtitle="第一篇免费，30 秒看到效果"
      />

      <RelatedFeatures exclude="ai-wechat-article" />
    </article>
  );
}
