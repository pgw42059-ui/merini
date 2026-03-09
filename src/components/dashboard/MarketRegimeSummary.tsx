import { TrendingUp, Minus, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type MarketRegime = "risk-on" | "neutral" | "risk-off";

interface RegimeConfig {
  label: string;
  icon: React.ElementType;
  bgColor: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
}

const regimeConfigs: Record<MarketRegime, RegimeConfig> = {
  "risk-on": {
    label: "Risk-On",
    icon: TrendingUp,
    bgColor: "bg-profit/10",
    textColor: "text-profit",
    borderColor: "border-profit/30",
    glowColor: "shadow-[0_0_20px_hsl(160_84%_39%/0.2)]",
  },
  "neutral": {
    label: "Neutral",
    icon: Minus,
    bgColor: "bg-muted",
    textColor: "text-muted-foreground",
    borderColor: "border-border",
    glowColor: "",
  },
  "risk-off": {
    label: "Risk-Off",
    icon: TrendingDown,
    bgColor: "bg-loss/10",
    textColor: "text-loss",
    borderColor: "border-loss/30",
    glowColor: "shadow-[0_0_20px_hsl(0_72%_51%/0.2)]",
  },
};

// Mock data - replace with real data source
const mockData = {
  regime: "risk-on" as MarketRegime,
  summary: "현재 시장은 기술주 중심의 Risk-On 흐름이지만, 금리 상승으로 변동성이 확대되고 있습니다.",
};

const MarketRegimeSummary = () => {
  const { regime, summary } = mockData;
  const config = regimeConfigs[regime];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "glass-card p-6 border",
        config.borderColor,
        config.glowColor
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Regime Badge */}
        <div
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg border w-fit",
            config.bgColor,
            config.borderColor
          )}
        >
          <Icon className={cn("w-5 h-5", config.textColor)} />
          <span className={cn("font-bold text-lg", config.textColor)}>
            {config.label}
          </span>
        </div>

        {/* Summary Text */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">오늘의 시장 레짐</p>
          <p className="text-foreground leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketRegimeSummary;
