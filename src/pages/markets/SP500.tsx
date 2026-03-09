import { useMarketDaily, symbolMeta } from "@/hooks/useMarketData";
import FuturesCard, { FuturesData, TrendStatus, VolatilityLevel, DifficultyLevel } from "@/components/dashboard/FuturesCard";
import { Loader2, AlertCircle, TrendingUp, BarChart3, Activity } from "lucide-react";

const mapTrendState = (state: string): TrendStatus => {
  const mapping: Record<string, TrendStatus> = {
    bullish: "bullish",
    neutral: "neutral",
    bearish: "bearish",
  };
  return mapping[state] || "neutral";
};

const mapVolState = (state: string): VolatilityLevel => {
  const mapping: Record<string, VolatilityLevel> = {
    low: "low",
    normal: "medium",
    high: "high",
  };
  return mapping[state] || "medium";
};

const mapDifficulty = (state: string): DifficultyLevel => {
  const mapping: Record<string, DifficultyLevel> = {
    easy: "easy",
    normal: "medium",
    hard: "hard",
  };
  return mapping[state] || "medium";
};

const SP500Page = () => {
  const { data, isLoading, error } = useMarketDaily();
  
  const esData = data?.find(item => item.symbol === "ES");

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">데이터 로딩 중...</span>
        </div>
      </div>
    );
  }

  if (error || !esData) {
    return (
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center py-20 text-loss">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>데이터를 불러오는 데 실패했습니다</span>
        </div>
      </div>
    );
  }

  const futuresData: FuturesData = {
    symbol: esData.symbol,
    name: symbolMeta[esData.symbol]?.name || esData.symbol,
    nameKo: symbolMeta[esData.symbol]?.nameKo || esData.symbol,
    trend: mapTrendState(esData.trend_state),
    volatility: mapVolState(esData.vol_state),
    difficulty: mapDifficulty(esData.difficulty),
    comment: esData.comment,
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              S&P 500 선물 (ES)
            </h1>
            <p className="text-muted-foreground text-sm">
              미국 대형주 500개로 구성된 대표 지수 선물
            </p>
          </div>
        </div>
      </div>

      {/* Current Status Card */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">오늘의 상태</h2>
        <FuturesCard data={futuresData} />
      </section>

      {/* Market Characteristics */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">종목 특성</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="font-medium">시장 대표성</span>
            </div>
            <p className="text-sm text-muted-foreground">
              미국 주식시장 전체를 대표하는 지수로, 
              글로벌 투자자들이 가장 많이 참조하는 벤치마크입니다.
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-medium">유동성</span>
            </div>
            <p className="text-sm text-muted-foreground">
              세계에서 가장 유동성이 높은 선물 중 하나입니다. 
              스프레드가 좁고 체결이 빠릅니다.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Notes */}
      <section>
        <h2 className="text-lg font-semibold mb-4">거래 시 유의사항</h2>
        <div className="glass-card p-5">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>경제 지표 발표(고용, 물가 등)에 민감하게 반응합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>분기 만기(3월, 6월, 9월, 12월)에 롤오버 주의가 필요합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>NQ 대비 안정적이나 여전히 레버리지가 높은 상품입니다</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SP500Page;
