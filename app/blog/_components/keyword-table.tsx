/**
 * KeywordTable — 专用于 SEO 长尾词侦察的表格。
 * Visual: 编辑部风格 —  无竖线, header 用 small caps + accent 底边, intent 列用小 pill,
 *         keyword 用 mono 字体强调.
 */

type Intent = "信息" | "商业" | "交易" | "导航";

const INTENT_COLOR: Record<Intent, { bg: string; fg: string }> = {
  信息: { bg: "var(--persona-saas-wash)", fg: "var(--persona-saas)" },
  商业: { bg: "var(--persona-sidehustle-wash)", fg: "var(--persona-sidehustle)" },
  交易: { bg: "var(--accent-wash)", fg: "var(--accent-strong)" },
  导航: { bg: "var(--persona-engineer-wash)", fg: "var(--persona-engineer)" },
};

export function KeywordTable({
  rows,
}: {
  rows: { keyword: string; intent: Intent; idea: string }[];
}) {
  return (
    <div className="not-prose my-10 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr
            className="border-b-2"
            style={{ borderColor: "var(--accent)" }}
          >
            <th
              className="py-3 pr-6 text-[10px] font-bold tracking-[0.22em] uppercase"
              style={{ color: "var(--ink-muted)" }}
            >
              关键词
            </th>
            <th
              className="py-3 px-3 text-[10px] font-bold tracking-[0.22em] uppercase w-[5em]"
              style={{ color: "var(--ink-muted)" }}
            >
              意图
            </th>
            <th
              className="py-3 pl-3 text-[10px] font-bold tracking-[0.22em] uppercase"
              style={{ color: "var(--ink-muted)" }}
            >
              适合做的内容
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const c = INTENT_COLOR[r.intent] || INTENT_COLOR["信息"];
            return (
              <tr
                key={i}
                className="border-b transition-colors hover:bg-[var(--paper-elevated)]"
                style={{ borderColor: "var(--divider)" }}
              >
                <td
                  className="py-3.5 pr-6 font-mono text-[13px] font-medium align-top"
                  style={{ color: "var(--ink)" }}
                >
                  {r.keyword}
                </td>
                <td className="py-3.5 px-3 align-top">
                  <span
                    className="inline-block px-2 py-0.5 rounded-sm text-[11px] font-semibold tracking-wider"
                    style={{
                      background: c.bg,
                      color: c.fg,
                    }}
                  >
                    {r.intent}
                  </span>
                </td>
                <td
                  className="py-3.5 pl-3 text-[14px] align-top"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {r.idea}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
