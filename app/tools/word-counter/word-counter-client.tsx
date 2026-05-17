"use client";

import { useMemo, useState } from "react";

const SAMPLE = `把你的文章贴到这里，立即看到：

- 总字数（含/不含空格）
- 段落数 / 行数
- 预计阅读时长
- 标题字数检测（公众号订阅号超 32 字会被截断）

这个工具完全在你浏览器里运行，不会上传任何内容。`;

export function WordCounterClient() {
  const [text, setText] = useState(SAMPLE);
  const [title, setTitle] = useState("");

  const stats = useMemo(() => {
    const charsWithSpace = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const chineseChars = (text.match(/[一-龥]/g) || []).length;
    const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim()).length;
    const lines = text.split(/\n/).filter((l) => l.trim()).length;
    // 公众号长文阅读速度约 300-400 中文字/分钟
    const readMinutes = Math.max(1, Math.round(chineseChars / 350));
    return {
      charsWithSpace,
      charsNoSpace,
      chineseChars,
      englishWords,
      paragraphs,
      lines,
      readMinutes,
    };
  }, [text]);

  const titleStats = useMemo(() => {
    const len = title.length;
    let status: "ok" | "warn" | "bad" = "ok";
    let hint = "";
    if (len === 0) {
      hint = "标题区域为空";
    } else if (len <= 20) {
      status = "ok";
      hint = "✓ 长度合适";
    } else if (len <= 32) {
      status = "warn";
      hint = "⚠ 偏长，但不会被截断";
    } else {
      status = "bad";
      hint = "✗ 超过 32 字，订阅号列表会截断";
    }
    return { len, status, hint };
  }, [title]);

  const lengthAdvice = useMemo(() => {
    const c = stats.chineseChars;
    if (c < 800) return { level: "短", note: "适合公告 / 短评 / 快讯，打开率不一定差但分享率较低" };
    if (c < 1500) return { level: "中短", note: "适合干货 tips / 案例分享，移动端阅读体验好" };
    if (c < 3000) return { level: "中长", note: "公众号最甜蜜区间，干货深度文章的主流长度" };
    if (c < 5000) return { level: "长", note: "深度文章，需要有强观点 / 强结构支撑完读率" };
    return { level: "超长", note: "超过 5000 字完读率会陡降，考虑拆成系列" };
  }, [stats.chineseChars]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
      {/* Title checker */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
          标题（订阅号超 32 字会被截断）
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="把你的标题贴到这里"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
        />
        <div
          className={`mt-2 text-sm flex justify-between ${
            titleStats.status === "bad"
              ? "text-red-600 dark:text-red-400"
              : titleStats.status === "warn"
                ? "text-orange-600 dark:text-orange-400"
                : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <span>{titleStats.hint}</span>
          <span>{titleStats.len} / 32 字</span>
        </div>
      </div>

      {/* Body counter */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
          正文
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full min-h-[280px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm leading-relaxed focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 resize-y"
        />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { label: "中文字数", value: stats.chineseChars.toLocaleString() },
          { label: "英文词数", value: stats.englishWords.toLocaleString() },
          { label: "总字符（含空格）", value: stats.charsWithSpace.toLocaleString() },
          { label: "段落", value: stats.paragraphs.toLocaleString() },
          { label: "非空行", value: stats.lines.toLocaleString() },
          {
            label: "预计阅读",
            value: `${stats.readMinutes} 分钟`,
            note: "350 字/分钟",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">
              {s.label}
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {s.value}
            </div>
            {s.note && (
              <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                {s.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Length advice */}
      <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            长度判定:
          </span>
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {lengthAdvice.level}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {lengthAdvice.note}
        </p>
      </div>
    </div>
  );
}
