import { 
  ArrowLeftRight,
  Server,
  FileText,
  Zap,
  Check,
  X,
  Minus
} from "lucide-react";

// Feature comparison fields
interface EnvironmentFeatures {
  id: string;
  hedging: "full" | "partial" | "none";
  platforms: string[];
  indices: string[];
  commodities: string[];
  executionType: string;
  minLot: string;
  leverage: string;
  note: string;
}

const environments: EnvironmentFeatures[] = [
  {
    id: "A",
    hedging: "full",
    platforms: ["Desktop", "Mobile", "Web"],
    indices: ["NQ", "ES", "DAX", "FTSE"],
    commodities: ["GC", "CL", "SI"],
    executionType: "ECN / STP",
    minLot: "0.01",
    leverage: "1:30 – 1:500",
    note: "양방향 포지션 동시 보유. 규칙 기반 자동화 지원.",
  },
  {
    id: "B",
    hedging: "full",
    platforms: ["Desktop", "Mobile"],
    indices: ["NQ", "ES", "DAX"],
    commodities: ["GC", "CL"],
    executionType: "ECN",
    minLot: "0.01",
    leverage: "1:30 – 1:500",
    note: "낮은 스프레드. 고빈도 거래 구조.",
  },
  {
    id: "C",
    hedging: "partial",
    platforms: ["Desktop", "Mobile", "Web"],
    indices: ["NQ", "ES"],
    commodities: ["GC"],
    executionType: "MM",
    minLot: "0.01",
    leverage: "1:30 – 1:1000",
    note: "소액 시작 가능. 보너스 조건 확인 필요.",
  },
  {
    id: "D",
    hedging: "full",
    platforms: ["Desktop", "Mobile"],
    indices: ["NQ", "ES", "HSI"],
    commodities: ["GC", "CL"],
    executionType: "STP",
    minLot: "0.01",
    leverage: "1:100 – 1:200",
    note: "한국어 지원. 국내 결제 수단.",
  },
];

const comparisonFields = [
  {
    icon: ArrowLeftRight,
    label: "Hedging",
    desc: "양방향 포지션 동시 보유",
  },
  {
    icon: Server,
    label: "플랫폼",
    desc: "접근 가능 환경",
  },
  {
    icon: FileText,
    label: "상품",
    desc: "지수 및 상품 선물",
  },
  {
    icon: Zap,
    label: "체결 방식",
    desc: "주문 처리 유형",
  },
];

const HedgingIndicator = ({ level }: { level: "full" | "partial" | "none" }) => {
  if (level === "full") {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-profit">
        <Check className="w-3 h-3" />
        Full
      </span>
    );
  }
  if (level === "partial") {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-orange-400">
        <Minus className="w-3 h-3" />
        Partial
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs text-loss">
      <X className="w-3 h-3" />
      None
    </span>
  );
};

export default function BrokerGuide() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-xl font-semibold text-foreground tracking-tight">
            실행 환경 비교
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Execution Environment Comparison
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Comparison Fields Legend */}
        <div className="flex flex-wrap gap-6 mb-8 text-xs text-muted-foreground">
          {comparisonFields.map((field, i) => (
            <div key={i} className="flex items-center gap-2">
              <field.icon className="w-3.5 h-3.5 text-primary/70" />
              <span>{field.label}</span>
              <span className="text-border">·</span>
              <span className="text-muted-foreground/70">{field.desc}</span>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="border border-border/50 rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/30">
                <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  환경
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Hedging
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  플랫폼
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  지수
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  상품
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  체결
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  최소 Lot
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  레버리지
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {environments.map((env) => (
                <tr key={env.id} className="hover:bg-secondary/10 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-mono text-foreground">{env.id}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <HedgingIndicator level={env.hedging} />
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground text-xs">
                    {env.platforms.length}개
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-xs text-muted-foreground font-mono">
                      {env.indices.join(" ")}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-xs text-muted-foreground font-mono">
                      {env.commodities.join(" ")}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground text-xs">
                    {env.executionType}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground text-xs font-mono">
                    {env.minLot}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground text-xs">
                    {env.leverage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Environment Notes */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {environments.map((env) => (
            <div 
              key={env.id}
              className="p-4 border border-border/30 rounded-lg bg-secondary/5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-foreground">{env.id}</span>
                <HedgingIndicator level={env.hedging} />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {env.note}
              </p>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="border-t border-border/30 pt-6">
          <p className="text-xs text-muted-foreground/70 max-w-2xl leading-relaxed">
            본 페이지는 실행 환경의 기능적 특성을 비교합니다.
            특정 환경을 추천하거나 순위를 제공하지 않습니다.
            거래 조건은 변경될 수 있으며, 실제 거래 전 직접 확인이 필요합니다.
          </p>
        </div>
      </main>
    </div>
  );
}
