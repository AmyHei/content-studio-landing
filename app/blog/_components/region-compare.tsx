/**
 * RegionCompare — 国内 vs 国外 并排对比卡片。
 * Visual: 两栏 grid, 各自带标题色块 + 关键词列表 + 一句话总结。
 *         左栏配 wechat (国内/中文圈) 色, 右栏配 engineer (US/全球) 色, 形成视觉张力.
 */

type ItemTone = "neutral" | "hot" | "potential";

type Item = {
  keyword: string;
  metric?: string; // e.g. "+180%" / "low / +500%"
  tone?: ItemTone;
};

type Side = {
  title: string;     // e.g. "中文圈 (zh-CN 全球搜索)"
  subtitle?: string; // e.g. "数据源: Google Trends past 3-m"
  takeaway: string;  // 一句话总结
  items: Item[];
};

const TONE_COLOR: Record<ItemTone, string> = {
  neutral: "var(--ink-soft)",
  hot: "var(--accent-strong)",
  potential: "var(--persona-sidehustle)",
};

export function RegionCompare({
  left,
  right,
}: {
  left: Side;
  right: Side;
}) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-sm overflow-hidden"
      style={{ borderColor: "var(--rule)" }}
    >
      <SideCard side={left} accent="var(--persona-wechat)" accentWash="var(--persona-wechat-wash)" />
      <SideCard
        side={right}
        accent="var(--persona-engineer)"
        accentWash="var(--persona-engineer-wash)"
        leftBorder
      />
    </div>
  );
}

function SideCard({
  side,
  accent,
  accentWash,
  leftBorder,
}: {
  side: Side;
  accent: string;
  accentWash: string;
  leftBorder?: boolean;
}) {
  return (
    <div
      className="px-7 py-7 flex flex-col"
      style={{
        background: "var(--paper)",
        borderLeft: leftBorder ? "1px solid var(--rule)" : undefined,
      }}
    >
      {/* header */}
      <div
        className="mb-5 pb-3 border-b-2 -mx-7 px-7"
        style={{ borderColor: accent }}
      >
        <div
          className="text-[10px] font-bold tracking-[0.24em] uppercase mb-1"
          style={{ color: accent }}
        >
          {side.title}
        </div>
        {side.subtitle && (
          <div
            className="text-[11px]"
            style={{ color: "var(--ink-muted)" }}
          >
            {side.subtitle}
          </div>
        )}
      </div>

      {/* items */}
      <ul className="list-none p-0 m-0 mb-6 space-y-2.5 flex-1">
        {side.items.map((it, i) => {
          const tone = it.tone ?? "neutral";
          return (
            <li
              key={i}
              className="flex items-baseline justify-between gap-3 text-[14px]"
            >
              <span
                className="font-mono text-[13px]"
                style={{ color: "var(--ink)" }}
              >
                {it.keyword}
              </span>
              {it.metric && (
                <span
                  className="font-mono text-[12px] font-semibold whitespace-nowrap"
                  style={{ color: TONE_COLOR[tone] }}
                >
                  {it.metric}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {/* takeaway */}
      <div
        className="text-[13px] leading-relaxed italic px-4 py-3 rounded-sm border-l-2"
        style={{
          background: accentWash,
          borderColor: accent,
          color: "var(--ink)",
        }}
      >
        {side.takeaway}
      </div>
    </div>
  );
}
