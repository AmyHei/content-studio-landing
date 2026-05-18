import Link from "next/link";

/**
 * ArticleFooter — 文章底部.
 * 包含: AI 搜索整理 byline, 作者签名 (yaqinhei.com 反向引流), 返回博客.
 */

export function ArticleFooter() {
  return (
    <footer className="not-prose mt-20 mb-16 max-w-[688px] mx-auto px-6">
      {/* AI byline */}
      <div
        className="text-center py-6 px-4 border-t border-b text-[12px] leading-relaxed"
        style={{
          borderColor: "var(--divider)",
          color: "var(--ink-muted)",
        }}
      >
        <p>
          本报告由{" "}
          <Link
            href="/"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            AutoContent
          </Link>{" "}
          趋势雷达 <strong>AI 搜索整理</strong>, 数据来自 HackerNews / Reddit / Google.
        </p>
        <p className="mt-1">每周一早 9 点 (Asia/Shanghai) 更新.</p>
      </div>

      {/* author */}
      <div
        className="mt-10 flex items-start gap-4 p-6 rounded-sm border"
        style={{
          borderColor: "var(--divider)",
          background: "var(--paper-elevated)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
          style={{ background: "var(--accent)" }}
        >
          Y
        </div>
        <div>
          <p className="font-semibold" style={{ color: "var(--ink)" }}>
            <a
              href="https://yaqinhei.com"
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              yaqinhei
            </a>
          </p>
          <p
            className="text-sm leading-relaxed mt-1"
            style={{ color: "var(--ink-soft)" }}
          >
            AI 工程师, 专注于 AI 自动化与内容创作工具开发. 更多技术文章请访问{" "}
            <a
              href="https://yaqinhei.com"
              target="_blank"
              rel="noopener"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              yaqinhei.com
            </a>
            .
          </p>
        </div>
      </div>

      {/* back to blog */}
      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase hover:underline"
          style={{ color: "var(--ink-muted)" }}
        >
          ← 返回博客列表
        </Link>
      </div>
    </footer>
  );
}
