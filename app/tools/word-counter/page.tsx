import type { Metadata } from "next";
import { WordCounterClient } from "./word-counter-client";
import { CTASection, RelatedFeatures } from "@/app/components/marketing-shell";

export const metadata: Metadata = {
  title: "公众号字数统计 + 标题截断检测 — 免费在线 | AutoContent",
  description:
    "公众号字数统计工具：实时计算中文字数、英文词数、段落数、预计阅读时长。标题超 32 字自动检测（订阅号列表会截断）。免费，纯浏览器运行不上传内容。",
  keywords: [
    "公众号字数统计",
    "字数统计",
    "公众号标题字数",
    "公众号字数计算",
    "阅读时长计算",
    "标题截断检测",
  ],
  alternates: {
    canonical: "https://autocontent.net/tools/word-counter",
  },
  openGraph: {
    title: "公众号字数统计 + 标题截断检测",
    description: "字数 / 段落 / 阅读时长 / 标题长度合规检查。",
    url: "https://autocontent.net/tools/word-counter",
    type: "website",
    locale: "zh_CN",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <section className="py-12 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-[28px] md:text-[36px] font-bold tracking-tight leading-[1.2] text-[var(--ink)] dark:text-white"
            style={{ fontFamily: "var(--font-display-zh)" }}
          >
            公众号字数统计 + 标题检测
          </h1>
          <p className="mt-4 text-base text-[var(--ink-soft)] dark:text-gray-400 max-w-xl mx-auto">
            实时统计字数、段落、阅读时长。标题超 32 字会被订阅号列表截断，工具自动提示。
          </p>
        </div>
      </section>

      <WordCounterClient />

      <section className="py-16 px-6 bg-[var(--paper-elevated)] dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2
          className="text-[22px] md:text-[26px] font-semibold text-center text-[var(--ink)] dark:text-white mb-6"
          style={{ fontFamily: "var(--font-display-zh)" }}
        >
            公众号文章长度建议
          </h2>
          <div className="space-y-3 text-base text-[var(--ink-soft)] dark:text-gray-300 leading-relaxed">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--divider)] dark:border-gray-800">
                  <th className="text-left py-2 px-3 text-[var(--ink)] dark:text-white">
                    长度
                  </th>
                  <th className="text-left py-2 px-3 text-[var(--ink)] dark:text-white">
                    适用场景
                  </th>
                  <th className="text-left py-2 px-3 text-[var(--ink)] dark:text-white">
                    特点
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["< 800", "公告 / 快讯", "打开率不差，分享率较低"],
                  ["800-1500", "干货 tips / 案例", "移动端阅读体验最好"],
                  ["1500-3000", "深度文章", "公众号甜蜜区间，主流深度文长度"],
                  ["3000-5000", "长文", "需要强观点/强结构撑完读率"],
                  ["> 5000", "超长", "考虑拆系列，否则完读率陡降"],
                ].map(([len, scene, note], i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 dark:border-gray-900"
                  >
                    <td className="py-2 px-3 font-mono text-blue-600 dark:text-blue-400">
                      {len}
                    </td>
                    <td className="py-2 px-3">{scene}</td>
                    <td className="py-2 px-3 text-[var(--ink-soft)] dark:text-gray-400">
                      {note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-[var(--ink-muted)] dark:text-gray-500 mt-6">
              💡 标题字数：订阅号在用户消息列表里只显示前 32 个汉字，超过会被截断。服务号 / 折叠后浏览不受此限制。
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="想要 AI 帮你写出合适长度的文章？"
        subtitle="AutoContent 自动按选题类型推荐目标字数，写完直接发"
      />

      <RelatedFeatures exclude="ai-writing-free" />
    </article>
  );
}
