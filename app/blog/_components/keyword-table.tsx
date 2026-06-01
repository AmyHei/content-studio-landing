/**
 * KeywordTable — 两种模式:
 *   mode="seo"   (默认, 向后兼容) — 长尾词侦察, 列: 关键词 | 意图 | 适合做的内容
 *   mode="trend" — 趋势雷达, 列: 关键词 | 量级 | 增长 | 地区 | 备注
 *
 * Visual: 编辑部风格 — 无竖线, header 用 small caps + accent 底边, keyword mono.
 */

type Intent = "信息" | "商业" | "交易" | "导航";
type Region = "US" | "CN" | "全球" | "中文圈" | "US/CN" | "US/中文圈" | string;
type Volume = "high" | "mid" | "low";

const INTENT_COLOR: Record<Intent, { bg: string; fg: string }> = {
  信息: { bg: "var(--persona-saas-wash)", fg: "var(--persona-saas)" },
  商业: { bg: "var(--persona-sidehustle-wash)", fg: "var(--persona-sidehustle)" },
  交易: { bg: "var(--accent-wash)", fg: "var(--accent-strong)" },
  导航: { bg: "var(--persona-engineer-wash)", fg: "var(--persona-engineer)" },
};

const REGION_COLOR: Record<Region, { bg: string; fg: string }> = {
  US: { bg: "var(--persona-engineer-wash)", fg: "var(--persona-engineer)" },
  CN: { bg: "var(--persona-wechat-wash)", fg: "var(--persona-wechat)" },
  全球: { bg: "var(--accent-wash)", fg: "var(--accent-strong)" },
  中文圈: { bg: "var(--persona-sidehustle-wash)", fg: "var(--persona-sidehustle)" },
};

const VOLUME_LABEL: Record<Volume, string> = {
  high: "高",
  mid: "中",
  low: "低",
};

const VOLUME_BARS: Record<Volume, string> = {
  high: "▮▮▮",
  mid: "▮▮▯",
  low: "▮▯▯",
};

type SeoRow = { keyword: string; intent: Intent; idea: string };
type TrendRow = {
  keyword: string;
  volume: Volume;
  growth: string; // "+180%" / "—" / "stable"
  region: Region;
  note?: string;
};

type Props =
  | { mode?: "seo"; rows: SeoRow[] }
  | { mode: "trend"; rows: TrendRow[] };

export function KeywordTable(props: Props) {
  const mode = props.mode ?? "seo";

  if (mode === "trend") {
    return <TrendVariant rows={props.rows as TrendRow[]} />;
  }
  return <SeoVariant rows={props.rows as SeoRow[]} />;
}

function SeoVariant({ rows }: { rows: SeoRow[] }) {
  return (
    <div className="not-prose my-10 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2" style={{ borderColor: "var(--accent)" }}>
            <Th>关键词</Th>
            <Th className="w-[5em]">意图</Th>
            <Th>适合做的内容</Th>
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
                <Td mono>{r.keyword}</Td>
                <Td>
                  <Pill bg={c.bg} fg={c.fg}>{r.intent}</Pill>
                </Td>
                <Td soft>{r.idea}</Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TrendVariant({ rows }: { rows: TrendRow[] }) {
  return (
    <div className="not-prose my-10 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b-2" style={{ borderColor: "var(--accent)" }}>
            <Th className="w-[3em]">#</Th>
            <Th>关键词</Th>
            <Th className="w-[6em]">量级</Th>
            <Th className="w-[7em]">增长 ▲</Th>
            <Th className="w-[5em]">地区</Th>
            <Th>备注</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const rc = REGION_COLOR[r.region as Region] ?? REGION_COLOR["全球"];
            const growthColor = growthColorFor(r.growth);
            return (
              <tr
                key={i}
                className="border-b transition-colors hover:bg-[var(--paper-elevated)]"
                style={{ borderColor: "var(--divider)" }}
              >
                <Td mono soft>
                  {String(i + 1).padStart(2, "0")}
                </Td>
                <Td mono>{r.keyword}</Td>
                <Td>
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px]"
                    style={{ color: "var(--ink-soft)" }}
                    title={`量级 ${VOLUME_LABEL[r.volume]}`}
                  >
                    <span
                      className="font-mono tracking-tight"
                      style={{ color: "var(--accent)" }}
                    >
                      {VOLUME_BARS[r.volume]}
                    </span>
                    <span>{VOLUME_LABEL[r.volume]}</span>
                  </span>
                </Td>
                <Td>
                  <span
                    className="font-mono text-[13px] font-semibold tracking-tight"
                    style={{ color: growthColor }}
                  >
                    {r.growth}
                  </span>
                </Td>
                <Td>
                  <Pill bg={rc.bg} fg={rc.fg}>{r.region}</Pill>
                </Td>
                <Td soft>{r.note ?? "—"}</Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function growthColorFor(growth: string): string {
  if (growth.startsWith("+")) return "var(--accent-strong)";
  if (growth.startsWith("-")) return "var(--persona-engineer)";
  return "var(--ink-soft)";
}

function Th({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`py-3 px-3 text-[10px] font-bold tracking-[0.22em] uppercase ${className}`}
      style={{ color: "var(--ink-muted)" }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  mono,
  soft,
}: {
  children: React.ReactNode;
  mono?: boolean;
  soft?: boolean;
}) {
  const cls = mono
    ? "py-3.5 px-3 font-mono text-[13px] font-medium align-top"
    : "py-3.5 px-3 text-[14px] align-top";
  return (
    <td
      className={cls}
      style={{ color: soft ? "var(--ink-soft)" : "var(--ink)" }}
    >
      {children}
    </td>
  );
}

function Pill({
  children,
  bg,
  fg,
}: {
  children: React.ReactNode;
  bg: string;
  fg: string;
}) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-sm text-[11px] font-semibold tracking-wider"
      style={{ background: bg, color: fg }}
    >
      {children}
    </span>
  );
}
