/**
 * 本期速览 — 文章顶部的"懒人版"摘要卡。
 * Visual: 顶部有 label tag 浮在 border 上 (磁带标签效果), 内容是带 mono 编号的 bullet list.
 */
export function TLDR({ points }: { points: string[] }) {
  return (
    <aside className="not-prose my-10 relative">
      {/* floating label */}
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
        className="border rounded-sm px-8 pt-9 pb-7"
        style={{
          borderColor: "var(--rule)",
          background: "var(--paper-elevated)",
        }}
      >
        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex gap-4 items-baseline">
              <span
                className="font-mono text-xs tracking-wider shrink-0 leading-7"
                style={{ color: "var(--accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="text-[15px] leading-[1.75]"
                style={{ color: "var(--ink)" }}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
