import { useMarketDaily, symbolMeta } from "@/hooks/useMarketData";
import FuturesCard, { FuturesData, TrendStatus, VolatilityLevel, DifficultyLevel } from "@/components/dashboard/FuturesCard";
import { Loader2, AlertCircle, Coins, BarChart3, Activity } from "lucide-react";

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

const GoldPage = () => {
  const { data, isLoading, error } = useMarketDaily();
  
  const gcData = data?.find(item => item.symbol === "GC");

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

  if (error || !gcData) {
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
    symbol: gcData.symbol,
    name: symbolMeta[gcData.symbol]?.name || gcData.symbol,
    nameKo: symbolMeta[gcData.symbol]?.nameKo || gcData.symbol,
    trend: mapTrendState(gcData.trend_state),
    volatility: mapVolState(gcData.vol_state),
    difficulty: mapDifficulty(gcData.difficulty),
    comment: gcData.comment,
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Coins className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              금 선물 (GC)
            </h1>
            <p className="text-muted-foreground text-sm">
              COMEX 금 선물 - 대표 안전자산
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
              <span className="font-medium">안전자산 특성</span>
            </div>
            <p className="text-sm text-muted-foreground">
              위험회피 심리가 강해질 때 상승하는 경향이 있습니다. 
              달러 약세, 인플레이션 헤지 수요에 반응합니다.
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-medium">상관관계</span>
            </div>
            <p className="text-sm text-muted-foreground">
              달러 인덱스, 실질금리와 역상관 관계가 있습니다. 
              주식과는 낮은 상관관계로 분산 효과가 있습니다.
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
              <span>연준 금리 결정에 민감하게 반응합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>지정학적 불안 시 급등할 수 있어 손절 관리가 중요합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>아시아 세션(한국 오전)에도 거래량이 있어 24시간 모니터링이 필요합니다</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GoldPage;
