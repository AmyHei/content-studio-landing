/**
 * FeaturePick — 文章末尾 CTA, "编辑推荐" 风格。
 *
 * 用法: 在 mdx 里包一个 markdown 列表 (链接 + 描述):
 *
 * <FeaturePick>
 *   - [AI 写公众号文章](/features/ai-wechat-article) — 描述
 *   - [免费标题生成器](/tools/title-generator) — 描述
 * </FeaturePick>
 */

export function FeaturePick({ children }: { children: React.ReactNode }) {
  return (
    <section className="not-prose my-16 featurepick">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
        <span
          className="text-[10px] font-bold tracking-[0.22em] uppercase"
          style={{ color: "var(--ink-muted)" }}
        >
          编辑推荐
        </span>
        <div className="h-px flex-1" style={{ background: "var(--divider)" }} />
      </div>

      <p
        className="text-center text-[13px] mb-7"
        style={{ color: "var(--ink-muted)" }}
      >
        如果这篇周报对你有帮助, 试试 AutoContent 的这几个功能 / 工具:
      </p>

      <div>{children}</div>

      <style>{`
        .featurepick ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        @media (min-width: 768px) {
          .featurepick ul {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        .featurepick li {
          padding: 1.25rem;
          background: var(--paper-elevated);
          border: 1px solid var(--divider);
          border-radius: 0.125rem;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
          position: relative;
        }
        .featurepick li::before {
          content: none !important;
        }
        .featurepick li:hover {
          border-color: var(--accent);
          transform: translateY(-1px);
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .featurepick li a {
          color: var(--ink);
          text-decoration: none;
          font-weight: 600;
          font-family: var(--font-display-zh);
          font-size: 15px;
          display: block;
          margin-bottom: 0.35rem;
        }
        .featurepick li:hover a {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
