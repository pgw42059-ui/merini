import { useRegimeHistory } from "@/hooks/useRegimeHistory";
import { cn } from "@/lib/utils";
import { TrendingUp, Minus, TrendingDown, Loader2, AlertCircle, Calendar, Activity } from "lucide-react";
import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";

const regimeConfig = {
  "risk-on": {
    label: "Risk-On",
    icon: TrendingUp,
    color: "text-profit",
    bg: "bg-profit/10",
    border: "border-profit/30",
  },
  "neutral": {
    label: "Neutral",
    icon: Minus,
    color: "text-muted-foreground",
    bg: "bg-muted",
    border: "border-border",
  },
  "risk-off": {
    label: "Risk-Off",
    icon: TrendingDown,
    color: "text-loss",
    bg: "bg-loss/10",
    border: "border-loss/30",
  },
};

const biasConfig = {
  "strong-bull": { label: "강한 매수", color: "text-profit" },
  "mild-bull": { label: "약한 매수", color: "text-profit/70" },
  "neutral": { label: "중립", color: "text-muted-foreground" },
  "mild-bear": { label: "약한 매도", color: "text-loss/70" },
  "strong-bear": { label: "강한 매도", color: "text-loss" },
};

const volatilityConfig = {
  low: { label: "낮음", color: "text-profit", bars: 1 },
  medium: { label: "보통", color: "text-yellow-500", bars: 2 },
  high: { label: "높음", color: "text-loss", bars: 3 },
};

const RegimeHistory = () => {
  const { data, isLoading, error } = useRegimeHistory(30);

  return (
    <div className="py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          레짐 변화 히스토리
        </h1>
        <p className="text-muted-foreground">
          과거 시장 레짐 변화를 추적하여 패턴을 파악하세요
        </p>
      </div>

      {/* Legend */}
      <div className="glass-card p-4 border border-border/50 mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">레짐 유형</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(regimeConfig).map(([key, config]) => {
            const Icon = config.icon;
            return (
              <div key={key} className="flex items-center gap-2">
                <div className={cn("p-1.5 rounded", config.bg)}>
                  <Icon className={cn("w-4 h-4", config.color)} />
                </div>
                <span className="text-sm text-foreground">{config.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>데이터를 불러오는 중 오류가 발생했습니다</span>
        </div>
      )}

      {/* History Timeline */}
      {data && data.length > 0 && (
        <div className="space-y-3">
          {data.map((item, index) => {
            const regime = regimeConfig[item.regime];
            const bias = item.bias ? biasConfig[item.bias] : null;
            const volatility = item.volatility ? volatilityConfig[item.volatility] : null;
            const Icon = regime.icon;
            const isToday = index === 0;

            return (
              <div
                key={item.id}
                className={cn(
                  "glass-card p-4 border transition-all",
                  isToday ? regime.border : "border-border/50",
                  isToday && "ring-1 ring-primary/20"
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      {format(parseISO(item.day), "MM월 dd일 (EEE)", { locale: ko })}
                    </span>
                    {isToday && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-primary/20 text-primary">
                        오늘
                      </span>
                    )}
                  </div>

                  {/* Regime Badge */}
                  <div className="flex items-center gap-2">
                    <div className={cn("p-2 rounded-lg", regime.bg)}>
                      <Icon className={cn("w-5 h-5", regime.color)} />
                    </div>
                    <span className={cn("font-semibold", regime.color)}>
                      {regime.label}
                    </span>
                  </div>

                  {/* Bias & Volatility */}
                  <div className="flex items-center gap-4 sm:ml-auto">
                    {bias && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-muted-foreground">방향:</span>
                        <span className={cn("text-sm font-medium", bias.color)}>
                          {bias.label}
                        </span>
                      </div>
                    )}
                    {volatility && (
                      <div className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className={cn("text-sm font-medium", volatility.color)}>
                          {volatility.label}
                        </span>
                        {/* Visual bars */}
                        <div className="flex items-end gap-0.5 h-3">
                          {[1, 2, 3].map((bar) => (
                            <div
                              key={bar}
                              className={cn(
                                "w-1 rounded-sm",
                                bar <= volatility.bars 
                                  ? volatility.color === "text-profit" 
                                    ? "bg-profit" 
                                    : volatility.color === "text-yellow-500" 
                                      ? "bg-yellow-500" 
                                      : "bg-loss"
                                  : "bg-muted",
                                bar === 1 ? "h-1.5" : bar === 2 ? "h-2" : "h-3"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Note */}
                {item.note && (
                  <p className="mt-3 text-sm text-muted-foreground border-t border-border/50 pt-3">
                    {item.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {data && data.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>아직 기록된 레짐 데이터가 없습니다</p>
        </div>
      )}
    </div>
  );
};

export default RegimeHistory;
