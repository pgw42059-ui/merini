import { TrendingUp, TrendingDown, ArrowLeftRight, Minus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMarketBias, instrumentMeta, coreInstruments } from "@/hooks/useMarketBias";

type BiasLabel = "Buy-side favorable" | "Sell-side favorable" | "Neutral" | "Two-way";

interface BiasConfig {
  labelKo: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const biasConfigs: Record<BiasLabel, BiasConfig> = {
  "Buy-side favorable": {
    labelKo: "매수 우위",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-profit",
    bgColor: "bg-profit/10",
  },
  "Sell-side favorable": {
    labelKo: "매도 우위",
    icon: <TrendingDown className="w-4 h-4" />,
    color: "text-loss",
    bgColor: "bg-loss/10",
  },
  "Neutral": {
    labelKo: "중립",
    icon: <Minus className="w-4 h-4" />,
    color: "text-muted-foreground",
    bgColor: "bg-muted/40",
  },
  "Two-way": {
    labelKo: "양방향",
    icon: <ArrowLeftRight className="w-4 h-4" />,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
};

const MarketBiasSection = () => {
  const { data, isLoading, error } = useMarketBias();

  if (isLoading) {
    return (
      <section className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Market Bias by Instrument</h2>
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Market Bias by Instrument</h2>
        <div className="text-center py-8 text-muted-foreground text-sm">
          데이터를 불러오는 중 오류가 발생했습니다.
        </div>
      </section>
    );
  }

  // Sort by core instruments order
  const sortedData = data
    ?.slice()
    .sort((a, b) => coreInstruments.indexOf(a.symbol) - coreInstruments.indexOf(b.symbol));

  // Get the latest update time
  const lastUpdated = sortedData?.[0]?.updated_at
    ? new Date(sortedData[0].updated_at).toLocaleString("ko-KR", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Market Bias by Instrument</h2>
        <div className="flex items-center gap-3">
          {lastUpdated && (
            <span className="text-xs text-muted-foreground">Updated: {lastUpdated}</span>
          )}
          <span className="text-xs text-muted-foreground">종목별 방향성 편향</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {sortedData?.map((item) => {
          const config = biasConfigs[item.bias_label];
          const meta = instrumentMeta[item.symbol];

          return (
            <div
              key={item.symbol}
              className={cn(
                "p-4 rounded-lg border border-border/50 transition-colors",
                config.bgColor
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">
                  {meta?.name || item.symbol}
                </span>
                <span className="text-xs text-muted-foreground">{item.symbol}</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className={config.color}>{config.icon}</span>
                <span className={cn("text-sm font-semibold", config.color)}>
                  {config.labelKo}
                </span>
              </div>

              {item.reasons && item.reasons.length > 0 && (
                <ul className="space-y-0.5">
                  {item.reasons.slice(0, 2).map((reason, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground leading-tight">
                      • {reason}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}

        {(!sortedData || sortedData.length === 0) && (
          <div className="col-span-4 text-center py-8 text-muted-foreground text-sm">
            오늘 날짜의 편향 데이터가 없습니다.
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        * 방향성 편향은 가격 위치, 변동성, 이벤트 일정을 기반으로 계산됩니다. 매매 신호가 아닙니다.
      </p>
    </section>
  );
};

export default MarketBiasSection;
