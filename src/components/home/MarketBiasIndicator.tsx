import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus, Activity } from "lucide-react";
import { useMarketDaily } from "@/hooks/useMarketData";

type BiasLevel = "strong-bull" | "mild-bull" | "neutral" | "mild-bear" | "strong-bear";
type VolatilityLevel = "low" | "medium" | "high";

const biasConfig: Record<BiasLevel, {
  label: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}> = {
  "strong-bull": {
    label: "강한 매수 우위",
    icon: TrendingUp,
    color: "text-profit",
    bg: "bg-profit/10",
  },
  "mild-bull": {
    label: "약한 매수 우위",
    icon: TrendingUp,
    color: "text-profit/70",
    bg: "bg-profit/5",
  },
  "neutral": {
    label: "중립",
    icon: Minus,
    color: "text-muted-foreground",
    bg: "bg-muted",
  },
  "mild-bear": {
    label: "약한 매도 우위",
    icon: TrendingDown,
    color: "text-loss/70",
    bg: "bg-loss/5",
  },
  "strong-bear": {
    label: "강한 매도 우위",
    icon: TrendingDown,
    color: "text-loss",
    bg: "bg-loss/10",
  },
};

const volatilityConfig: Record<VolatilityLevel, {
  label: string;
  color: string;
  bg: string;
  bars: number;
}> = {
  low: { label: "낮음", color: "text-profit", bg: "bg-profit", bars: 1 },
  medium: { label: "보통", color: "text-yellow-500", bg: "bg-yellow-500", bars: 2 },
  high: { label: "높음", color: "text-loss", bg: "bg-loss", bars: 3 },
};

// Calculate bias from market data
const calculateBias = (data: Array<{ trend_state: string }> | undefined): BiasLevel => {
  if (!data || data.length === 0) return "neutral";
  
  let bullCount = 0;
  let bearCount = 0;
  
  data.forEach((item) => {
    if (item.trend_state === "bullish") bullCount++;
    else if (item.trend_state === "bearish") bearCount++;
  });
  
  const diff = bullCount - bearCount;
  const total = data.length;
  const ratio = diff / total;
  
  if (ratio >= 0.5) return "strong-bull";
  if (ratio > 0) return "mild-bull";
  if (ratio <= -0.5) return "strong-bear";
  if (ratio < 0) return "mild-bear";
  return "neutral";
};

// Calculate volatility from market data
const calculateVolatility = (data: Array<{ difficulty: string }> | undefined): VolatilityLevel => {
  if (!data || data.length === 0) return "medium";
  
  let hardCount = 0;
  
  data.forEach((item) => {
    if (item.difficulty === "hard") hardCount++;
  });
  
  const ratio = hardCount / data.length;
  
  if (ratio >= 0.5) return "high";
  if (ratio >= 0.2) return "medium";
  return "low";
};

const MarketBiasIndicator = () => {
  const { data, isLoading } = useMarketDaily();
  
  const currentBias = calculateBias(data);
  const currentVolatility = calculateVolatility(data);
  
  const bias = biasConfig[currentBias];
  const volatility = volatilityConfig[currentVolatility];
  const BiasIcon = bias.icon;

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="glass-card p-4 border border-border/50 animate-pulse">
          <div className="h-16 bg-muted rounded" />
        </div>
        <div className="glass-card p-4 border border-border/50 animate-pulse">
          <div className="h-16 bg-muted rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Bias Indicator */}
      <div className="glass-card p-4 border border-border/50">
        <div className="flex items-center gap-3">
          <div className={cn("p-2.5 rounded-lg", bias.bg)}>
            <BiasIcon className={cn("w-5 h-5", bias.color)} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">시장 방향성</p>
            <p className={cn("font-semibold", bias.color)}>{bias.label}</p>
          </div>
        </div>
      </div>

      {/* Volatility Indicator */}
      <div className="glass-card p-4 border border-border/50">
        <div className="flex items-center gap-3">
          <div className={cn("p-2.5 rounded-lg", volatility.bg + "/10")}>
            <Activity className={cn("w-5 h-5", volatility.color)} />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">변동성 체감</p>
            <div className="flex items-center gap-2">
              <p className={cn("font-semibold", volatility.color)}>{volatility.label}</p>
              {/* Visual bars */}
              <div className="flex items-end gap-0.5 h-4">
                {[1, 2, 3].map((bar) => (
                  <div
                    key={bar}
                    className={cn(
                      "w-1.5 rounded-sm transition-all",
                      bar <= volatility.bars ? volatility.bg : "bg-muted",
                      bar === 1 ? "h-2" : bar === 2 ? "h-3" : "h-4"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketBiasIndicator;
