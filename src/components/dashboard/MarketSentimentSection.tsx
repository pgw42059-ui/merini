import { TrendingUp, TrendingDown, Minus, AlertTriangle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type SentimentLevel = "extreme-fear" | "fear" | "neutral" | "greed" | "extreme-greed";

interface SentimentConfig {
  label: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  context: string;
}

const sentimentConfigs: Record<SentimentLevel, SentimentConfig> = {
  "extreme-fear": {
    label: "Extreme Fear",
    color: "text-loss",
    bgColor: "bg-loss/10",
    icon: <AlertTriangle className="w-4 h-4" />,
    context: "변동성 확대 가능성. Risk-Off.",
  },
  fear: {
    label: "Fear",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    icon: <TrendingDown className="w-4 h-4" />,
    context: "하방 압력 우세. Risk-Off 경향.",
  },
  neutral: {
    label: "Neutral",
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
    icon: <Minus className="w-4 h-4" />,
    context: "방향성 불명확. 양방향 대비.",
  },
  greed: {
    label: "Greed",
    color: "text-profit",
    bgColor: "bg-profit/10",
    icon: <TrendingUp className="w-4 h-4" />,
    context: "상방 모멘텀. Risk-On 경향.",
  },
  "extreme-greed": {
    label: "Extreme Greed",
    color: "text-profit",
    bgColor: "bg-profit/10",
    icon: <Shield className="w-4 h-4" />,
    context: "과열 경계. Risk-On.",
  },
};

// Mock data
const mockData = {
  value: 42,
  level: "fear" as SentimentLevel,
  previousClose: 38,
};

const MarketSentimentSection = () => {
  const { value, level, previousClose } = mockData;
  const config = sentimentConfigs[level];
  const change = value - previousClose;

  return (
    <section className="border border-border/30 rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-foreground">Sentiment</h2>
        <span className="text-xs text-muted-foreground/60">Fear & Greed</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Value */}
        <div className="flex items-baseline gap-2">
          <span className={cn("text-3xl font-semibold tabular-nums", config.color)}>
            {value}
          </span>
          <span className={cn("text-xs", change >= 0 ? "text-profit" : "text-loss")}>
            {change >= 0 ? "+" : ""}{change}
          </span>
        </div>

        {/* Status */}
        <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded", config.bgColor)}>
          <span className={config.color}>{config.icon}</span>
          <span className={cn("text-sm font-medium", config.color)}>{config.label}</span>
        </div>
      </div>

      {/* Context */}
      <p className="text-xs text-muted-foreground mt-3">
        {config.context}
      </p>
    </section>
  );
};

export default MarketSentimentSection;
