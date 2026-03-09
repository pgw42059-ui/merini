import { useMarketDaily, symbolMeta } from "@/hooks/useMarketData";
import { Loader2, AlertCircle, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Map database values to display
const trendConfig = {
  bullish: { icon: TrendingUp, color: "text-profit", bg: "bg-profit/10", label: "상승" },
  neutral: { icon: Minus, color: "text-muted-foreground", bg: "bg-muted", label: "보합" },
  bearish: { icon: TrendingDown, color: "text-loss", bg: "bg-loss/10", label: "하락" },
};

const difficultyConfig = {
  easy: { color: "text-profit", label: "쉬움" },
  medium: { color: "text-yellow-500", label: "보통" },
  hard: { color: "text-loss", label: "어려움" },
};

const mapTrendState = (state: string) => {
  const mapping: Record<string, keyof typeof trendConfig> = {
    bullish: "bullish",
    neutral: "neutral",
    bearish: "bearish",
  };
  return mapping[state] || "neutral";
};

const mapDifficulty = (state: string) => {
  const mapping: Record<string, keyof typeof difficultyConfig> = {
    easy: "easy",
    normal: "medium",
    hard: "hard",
  };
  return mapping[state] || "medium";
};

const symbolOrder = ["ES", "NQ", "CL", "ZN", "SOFR", "GC"];

const CompactFuturesGrid = () => {
  const { data, isLoading, error } = useMarketDaily();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-6">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <div className="flex items-center justify-center py-6 text-muted-foreground">
        <AlertCircle className="w-4 h-4 mr-2" />
        <span className="text-sm">데이터 준비 중</span>
      </div>
    );
  }

  const sortedData = [...data].sort((a, b) => {
    return symbolOrder.indexOf(a.symbol) - symbolOrder.indexOf(b.symbol);
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {sortedData.map((item) => {
        const trendKey = mapTrendState(item.trend_state);
        const diffKey = mapDifficulty(item.difficulty);
        const trend = trendConfig[trendKey];
        const diff = difficultyConfig[diffKey];
        const TrendIcon = trend.icon;
        const meta = symbolMeta[item.symbol];

        return (
          <div
            key={item.symbol}
            className="glass-card p-3 border border-border/50 hover:border-primary/30 transition-colors"
          >
            {/* Symbol & Name */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-foreground">{item.symbol}</span>
              <div className={cn("p-1 rounded", trend.bg)}>
                <TrendIcon className={cn("w-3.5 h-3.5", trend.color)} />
              </div>
            </div>

            {/* Name in Korean */}
            <p className="text-xs text-muted-foreground mb-2 truncate">
              {meta?.nameKo || item.symbol}
            </p>

            {/* Difficulty Badge */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">난이도:</span>
              <span className={cn("text-xs font-medium", diff.color)}>{diff.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompactFuturesGrid;
