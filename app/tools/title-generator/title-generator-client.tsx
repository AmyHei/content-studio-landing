"use client";

import { useState } from "react";
import Link from "next/link";

type Template = {
  name: string;
  tag: string;
  patterns: (topic: string) => string[];
};

const TEMPLATES: Template[] = [
  {
    name: "数字 + 反常识",
    tag: "信任度高",
    patterns: (t) => [
      `做了 100 次${t}，我发现这 3 件事和教程里说的完全不同`,
      `${t} 的 5 个误区，第 3 个连专家都搞错了`,
    ],
  },
  {
    name: "好奇心钩子",
    tag: "高打开率",
    patterns: (t) => [
      `为什么大厂的人都在偷偷${t}？我问了 12 个 P7`,
      `${t}背后没人告诉你的真相`,
    ],
  },
  {
    name: "利益点直击",
    tag: "转化最强",
    patterns: (t) => [
      `用这个免费工具，${t}从 4 小时缩到 30 分钟`,
      `${t}的人，看这一篇就够了`,
    ],
  },
  {
    name: "对比反差",
    tag: "情绪共鸣",
    patterns: (t) => [
      `月入 3000 和月入 3 万${t}的人，差距不在能力`,
      `2024 年和 2026 年${t}的人，完全是两种活法`,
    ],
  },
  {
    name: "结果导向",
    tag: "案例党最爱",
    patterns: (t) => [
      `靠${t}，3 个月做到 5000 粉，全流程复盘`,
      `0 基础${t}，第 30 天我拿到了第一笔收入`,
    ],
  },
  {
    name: "悬念结构",
    tag: "完读率高",
    patterns: (t) => [
      `我把${t}交给 AI 做了 30 天，结果让我重新思考这件事`,
      `如果你也在${t}，这篇可能会让你睡不着`,
    ],
  },
  {
    name: "权威背书",
    tag: "可信度高",
    patterns: (t) => [
      `Anthropic 工程师告诉你，${t}到底有没有戏`,
      `做了 8 年${t}，我总结出 3 条铁律`,
    ],
  },
  {
    name: "时效热点",
    tag: "搜索流量好",
    patterns: (t) => [
      `Claude 4.5 发布后，${t}工作流应该这样升级`,
      `2026 年还在${t}的人，必须知道的 5 件事`,
    ],
  },
];

export function TitleGeneratorClient() {
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState<
    { title: string; template: string; tag: string }[]
  >([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleGenerate = () => {
    const t = topic.trim();
    if (!t) return;
    const all: { title: string; template: string; tag: string }[] = [];
    TEMPLATES.forEach((tpl) => {
      tpl.patterns(t).forEach((p) => {
        all.push({ title: p, template: tpl.name, tag: tpl.tag });
      });
    });
    setGenerated(all);
    setCopiedIdx(null);
  };

  const handleCopy = async (title: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(title);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // clipboard may not be available; ignore
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
          你这篇文章想写什么主题？
        </label>
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="例如：用 AI 写公众号 / 副业月入一万 / 程序员转型独立开发"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
          rows={3}
        />
        <button
          onClick={handleGenerate}
          disabled={!topic.trim()}
          className="mt-3 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium transition-colors"
        >
          生成 {TEMPLATES.length * 2} 个候选标题
        </button>
      </div>

      {generated.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              候选标题（{generated.length} 条）
            </h2>
            <button
              onClick={handleGenerate}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              重新生成
            </button>
          </div>
          {generated.map((g, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-600 dark:hover:border-blue-400 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="text-[15px] text-gray-900 dark:text-white leading-relaxed mb-1">
                  {g.title}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 flex gap-2 items-center">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {g.template}
                  </span>
                  <span>·</span>
                  <span>{g.tag}</span>
                  <span>·</span>
                  <span>{g.title.length} 字</span>
                  {g.title.length > 32 && (
                    <span className="text-orange-600 dark:text-orange-400">
                      ⚠ 超过 32 字可能被截断
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleCopy(g.title, i)}
                className="shrink-0 px-3 py-1.5 rounded text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                {copiedIdx === i ? "已复制" : "复制"}
              </button>
            </div>
          ))}

          <div className="mt-8 p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
            <div className="font-semibold text-gray-900 dark:text-white mb-1">
              想要 AI 真正"思考"出独特标题？
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              这个工具用的是规则模板，AI 版本会读懂你的文章内容，按主题独家生成标题。
            </div>
            <Link
              href="https://app.autocontent.net"
              className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              注册解锁 AI 版本
            </Link>
          </div>
        </div>
      )}

      {generated.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-500 text-sm">
          输入主题点击生成，会用 {TEMPLATES.length} 种爆款模板各出 2 个候选
        </div>
      )}
    </div>
  );
}
