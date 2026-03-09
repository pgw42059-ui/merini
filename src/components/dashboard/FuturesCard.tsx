import { cn } from "@/lib/utils";
import { TrendingUp, Minus, TrendingDown, Activity, Target } from "lucide-react";

export type TrendStatus = "bullish" | "neutral" | "bearish";
export type VolatilityLevel = "low" | "medium" | "high";
export type DifficultyLevel = "easy" | "medium" | "hard";

export interface FuturesData {
  symbol: string;
  name: string;
  nameKo: string;
  trend: TrendStatus;
  volatility: VolatilityLevel;
  difficulty: DifficultyLevel;
  comment: string;
}

const trendConfig = {
  bullish: {
    label: "강세",
    icon: TrendingUp,
    color: "text-profit",
    bg: "bg-profit/10",
    border: "border-profit/30",
  },
  neutral: {
    label: "중립",
    icon: Minus,
    color: "text-muted-foreground",
    bg: "bg-muted",
    border: "border-border",
  },
  bearish: {
    label: "약세",
    icon: TrendingDown,
    color: "text-loss",
    bg: "bg-loss/10",
    border: "border-loss/30",
  },
};

const volatilityConfig = {
  low: { label: "낮음", color: "text-profit", bg: "bg-profit/10" },
  medium: { label: "보통", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  high: { label: "높음", color: "text-loss", bg: "bg-loss/10" },
};

const difficultyConfig = {
  easy: { label: "쉬움", color: "text-profit" },
  medium: { label: "보통", color: "text-yellow-500" },
  hard: { label: "어려움", color: "text-loss" },
};

interface FuturesCardProps {
  data: FuturesData;
}

const FuturesCard = ({ data }: FuturesCardProps) => {
  const trend = trendConfig[data.trend];
  const volatility = volatilityConfig[data.volatility];
  const difficulty = difficultyConfig[data.difficulty];
  const TrendIcon = trend.icon;

  return (
    <div className="glass-card-hover p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs text-muted-foreground font-mono">
            {data.symbol}
          </span>
          <h3 className="text-lg font-semibold text-foreground mt-0.5">
            {data.nameKo}
          </h3>
        </div>
        <div
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-md border",
            trend.bg,
            trend.border
          )}
        >
          <TrendIcon className={cn("w-4 h-4", trend.color)} />
          <span className={cn("text-sm font-medium", trend.color)}>
            {trend.label}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">변동성</p>
            <span
              className={cn(
                "text-sm font-medium px-2 py-0.5 rounded",
                volatility.bg,
                volatility.color
              )}
            >
              {volatility.label}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">난이도</p>
            <span className={cn("text-sm font-medium", difficulty.color)}>
              {difficulty.label}
            </span>
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
        {data.comment}
      </p>
    </div>
  );
};

export default FuturesCard;
