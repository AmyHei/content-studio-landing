/**
 * 本期速览 — 文章顶部的"懒人版"摘要卡。
 *
 * 用法: 在 mdx 里包一个 markdown 无序列表即可。MDX 把 children 解析成 <ul><li>...
 * <TLDR>
 *   - 要点 1
 *   - 要点 2
 * </TLDR>
 */
export function TLDR({ children }: { children: React.ReactNode }) {
  return (
    <aside className="not-prose my-10 relative">
      <div
        className="absolute -top-2.5 left-6 z-10 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.22em] uppercase"
        style={{
          background: "var(--paper)",
          color: "var(--accent)",
        }}
      >
        本期速览
      </div>

      <div
        className="border rounded-sm px-8 pt-9 pb-7 tldr-list"
        style={{
          borderColor: "var(--rule)",
          background: "var(--paper-elevated)",
        }}
      >
        {children}
      </div>

      <style>{`
        .tldr-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: tldr-item;
        }
        .tldr-list li {
          counter-increment: tldr-item;
          position: relative;
          padding-left: 2.2em;
          padding-top: 0.15em;
          padding-bottom: 0.15em;
          font-size: 15px;
          line-height: 1.75;
          color: var(--ink);
        }
        .tldr-list li + li {
          margin-top: 0.5em;
        }
        .tldr-list li::before {
          content: counter(tldr-item, decimal-leading-zero);
          position: absolute;
          left: 0;
          top: 0.3em;
          font-family: var(--font-mono, ui-monospace, monospace);
          font-size: 12px;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.05em;
        }
      `}</style>
    </aside>
  );
}
