"use client";

import { useMemo, useState } from "react";
import { marked } from "marked";
import Link from "next/link";

// WeChat 编辑器忽略 class / <style>，所有样式必须 inline。
const STYLES: Record<string, string> = {
  h1: "font-size:22px;font-weight:700;color:#1a1a1a;margin:1.8em 0 0.8em;line-height:1.4;",
  h2: "font-size:19px;font-weight:700;color:#1a1a1a;margin:1.6em 0 0.6em;line-height:1.4;border-left:4px solid #07c160;padding-left:10px;",
  h3: "font-size:17px;font-weight:600;color:#1a1a1a;margin:1.4em 0 0.4em;line-height:1.4;",
  p: "font-size:15px;line-height:1.85;color:#333;margin:1em 0;text-align:justify;",
  ul: "padding-left:1.5em;margin:1em 0;",
  ol: "padding-left:1.5em;margin:1em 0;",
  li: "font-size:15px;line-height:1.85;color:#333;margin:0.4em 0;",
  blockquote:
    "border-left:4px solid #ddd;padding:0.5em 1em;margin:1.2em 0;color:#666;background:#fafafa;font-size:14px;",
  pre: "background:#f6f8fa;padding:1em;border-radius:6px;overflow-x:auto;margin:1em 0;font-size:13px;line-height:1.5;font-family:'SF Mono',Menlo,Monaco,Consolas,monospace;color:#24292e;",
  code: "background:#f0f0f0;padding:0.15em 0.4em;border-radius:3px;font-family:'SF Mono',Menlo,Monaco,Consolas,monospace;font-size:13px;color:#d63384;",
  hr: "border:none;border-top:1px solid #e5e5e5;margin:2em 0;",
  a: "color:#07c160;text-decoration:none;border-bottom:1px solid #07c160;",
  strong: "color:#1a1a1a;font-weight:600;",
  em: "color:#1a1a1a;font-style:italic;",
  table: "border-collapse:collapse;width:100%;margin:1em 0;font-size:14px;",
  th: "border:1px solid #ddd;padding:0.5em 0.8em;background:#fafafa;font-weight:600;text-align:left;",
  td: "border:1px solid #ddd;padding:0.5em 0.8em;",
};

function applyInlineStyles(html: string): string {
  let out = html;
  for (const [tag, style] of Object.entries(STYLES)) {
    const re = new RegExp(`<${tag}(\\s[^>]*)?>`, "g");
    out = out.replace(re, (_m, attrs) => {
      const a = attrs || "";
      if (a.includes("style=")) {
        return `<${tag}${a.replace(
          /style="([^"]*)"/,
          (_s: string, existing: string) => `style="${style}${existing}"`,
        )}>`;
      }
      return `<${tag}${a} style="${style}">`;
    });
  }
  out = out.replace(
    /<pre style="([^"]*)"><code(\s[^>]*)?>/g,
    (_m, preStyle, codeAttrs) =>
      `<pre style="${preStyle}"><code${codeAttrs || ""} style="background:none;padding:0;color:#24292e;font-size:13px;">`,
  );
  return out;
}

const SAMPLE = `# 标题

这是一段**正文**，可以有*强调*和[超链接](https://autocontent.net)。

## 二级标题

公众号排版的关键是 inline 样式，因为微信编辑器会丢弃 \`<style>\` 标签和 \`class\`。

### 列表示例

- 第一项
- 第二项
- 第三项

### 代码块

\`\`\`python
def hello():
    print("Hello, WeChat!")
\`\`\`

### 引用

> 一个好的标题等于一半的点击率。

---

> 工具仅在你浏览器里运行，不上传内容到服务器。
`;

// 包装预览 HTML 成完整的 iframe srcDoc（sandbox 隔离）
function buildPreviewDoc(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body{margin:0;padding:20px;font-family:-apple-system,'PingFang SC',sans-serif;background:#fff;}
img{max-width:100%;}
</style></head><body>${bodyHtml}</body></html>`;
}

export function MarkdownFormatterClient() {
  const [md, setMd] = useState(SAMPLE);
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => {
    try {
      const raw = marked.parse(md, { async: false }) as string;
      return applyInlineStyles(raw);
    } catch {
      return "<p style='color:#c00'>Markdown 解析出错</p>";
    }
  }, [md]);

  const previewDoc = useMemo(() => buildPreviewDoc(html), [html]);

  const stats = useMemo(() => {
    const chars = md.replace(/\s/g, "").length;
    const words = md.trim().split(/\s+/).filter(Boolean).length;
    return { chars, words };
  }, [md]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              Markdown 源文
            </label>
            <span className="text-xs text-gray-500 dark:text-gray-500">
              {stats.chars} 字 · {stats.words} 词
            </span>
          </div>
          <textarea
            value={md}
            onChange={(e) => setMd(e.target.value)}
            className="flex-1 min-h-[500px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 resize-y"
            spellCheck={false}
          />
          <button
            onClick={handleCopy}
            className="mt-3 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
          >
            {copied ? "✓ HTML 已复制" : "复制公众号 HTML"}
          </button>
        </div>

        {/* Preview (iframe sandbox 隔离用户输入) */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              公众号预览
            </label>
            <span className="text-xs text-gray-500 dark:text-gray-500">
              实际效果（含 inline 样式）
            </span>
          </div>
          <iframe
            title="公众号样式预览"
            srcDoc={previewDoc}
            sandbox=""
            className="flex-1 min-h-[500px] w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white"
          />
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
            把 HTML 复制后，到公众号编辑器右上角点「全屏编辑」→ 顶部点 ⟨/⟩ 按钮粘贴
          </p>
        </div>
      </div>

      <div className="mt-10 p-6 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
        <div className="font-semibold text-gray-900 dark:text-white mb-1">
          想要 AI 帮你写完整文章？
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          这个工具只做排版。AutoContent 还能：AI 写稿、自动配图、智能选题、一键发布草稿箱。
        </div>
        <Link
          href="https://app.autocontent.net/register"
          className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
        >
          免费试用完整版
        </Link>
      </div>
    </div>
  );
}
