import { WaitlistForm } from "./components/waitlist-form";

const painPoints = [
  {
    icon: "\u23F0",
    title: "每天花 3-4 小时写公众号",
    desc: "选题、写稿、配图、排版…产出还不稳定",
  },
  {
    icon: "\uD83D\uDD25",
    title: "热点来了反应慢",
    desc: "等你写完发出去，别人早就发了三遍了",
  },
  {
    icon: "\uD83D\uDE2B",
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
      {/* Hero */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            让 AI 帮你从选题到发布，
            <br />
            一键搞定公众号内容
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            监控热点 → AI 写稿 → 自动配图 → 一键发布微信公众号，从每天 4 小时缩短到 30 分钟
          </p>
          <div className="mt-10" id="waitlist">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            免费加入等候名单，第一时间获得使用资格
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            自媒体创作者的痛
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            四步搞定内容创作
          </h2>
          <div className="space-y-20">
            {features.map((f, i) => (
              <div
                key={f.step}
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2">
                    STEP {f.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {f.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好让 AI 帮你创作了吗？
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            加入等候名单，第一时间体验 Content Studio
          </p>
          <WaitlistForm variant="dark" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 dark:text-gray-500 text-sm">
        &copy; 2026 Content Studio. All rights reserved.
      </footer>
    </div>
  );
}
