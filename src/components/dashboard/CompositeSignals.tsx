import { cn } from "@/lib/utils";
import { GitBranch, Split, Zap } from "lucide-react";

type SignalLevel = "high" | "medium" | "low";
type BinaryStatus = "yes" | "no";
type SuitabilityStatus = "good" | "caution" | "avoid";

interface CompositeData {
  trendConsistency: SignalLevel;
  assetDivergence: BinaryStatus;
  shortTermSuitability: SuitabilityStatus;
}

const consistencyConfig = {
  high: { label: "높음", color: "text-profit", bg: "bg-profit/10" },
  medium: { label: "보통", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  low: { label: "낮음", color: "text-loss", bg: "bg-loss/10" },
};

const divergenceConfig = {
  yes: { label: "있음", color: "text-loss", bg: "bg-loss/10" },
  no: { label: "없음", color: "text-profit", bg: "bg-profit/10" },
};

const suitabilityConfig = {
  good: { label: "○", color: "text-profit", description: "단기 매매 적합" },
  caution: { label: "△", color: "text-yellow-500", description: "선별적 접근" },
  avoid: { label: "X", color: "text-loss", description: "관망 권장" },
};

// Mock data
const mockData: CompositeData = {
  trendConsistency: "medium",
  assetDivergence: "yes",
  shortTermSuitability: "caution",
};

const CompositeSignals = () => {
  const { trendConsistency, assetDivergence, shortTermSuitability } = mockData;
  const consistency = consistencyConfig[trendConsistency];
  const divergence = divergenceConfig[assetDivergence];
  const suitability = suitabilityConfig[shortTermSuitability];

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        종합 시그널
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Trend Consistency */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
          <div className="p-2 rounded-lg bg-muted">
            <GitBranch className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">추세 일관성</p>
            <span
              className={cn(
                "text-lg font-bold px-2 py-0.5 rounded",
                consistency.bg,
                consistency.color
              )}
            >
              {consistency.label}
            </span>
          </div>
        </div>

        {/* Asset Divergence */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
          <div className="p-2 rounded-lg bg-muted">
            <Split className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">자산 간 괴리</p>
            <span
              className={cn(
                "text-lg font-bold px-2 py-0.5 rounded",
                divergence.bg,
                divergence.color
              )}
            >
              {divergence.label}
            </span>
          </div>
        </div>

        {/* Short-term Trading Suitability */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
          <div className="p-2 rounded-lg bg-muted">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              단기 트레이딩 적합도
            </p>
            <div className="flex items-center gap-2">
              <span className={cn("text-2xl font-bold", suitability.color)}>
                {suitability.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {suitability.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositeSignals;
