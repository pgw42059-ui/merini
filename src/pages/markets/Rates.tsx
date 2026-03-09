import { useMarketDaily, symbolMeta } from "@/hooks/useMarketData";
import FuturesCard, { FuturesData, TrendStatus, VolatilityLevel, DifficultyLevel } from "@/components/dashboard/FuturesCard";
import { Loader2, AlertCircle, Percent, BarChart3, Activity } from "lucide-react";

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

const RatesPage = () => {
  const { data, isLoading, error } = useMarketDaily();
  
  // ZN (10년물) 또는 SOFR 데이터
  const znData = data?.find(item => item.symbol === "ZN");
  const sofrData = data?.find(item => item.symbol === "SOFR");

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

  if (error) {
    return (
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center py-20 text-loss">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>데이터를 불러오는 데 실패했습니다</span>
        </div>
      </div>
    );
  }

  const createFuturesData = (item: typeof znData): FuturesData | null => {
    if (!item) return null;
    return {
      symbol: item.symbol,
      name: symbolMeta[item.symbol]?.name || item.symbol,
      nameKo: symbolMeta[item.symbol]?.nameKo || item.symbol,
      trend: mapTrendState(item.trend_state),
      volatility: mapVolState(item.vol_state),
      difficulty: mapDifficulty(item.difficulty),
      comment: item.comment,
    };
  };

  const znFuturesData = createFuturesData(znData);
  const sofrFuturesData = createFuturesData(sofrData);

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Percent className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              금리 선물
            </h1>
            <p className="text-muted-foreground text-sm">
              미국 국채 및 단기 금리 선물
            </p>
          </div>
        </div>
      </div>

      {/* Current Status Cards */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">오늘의 상태</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {znFuturesData && <FuturesCard data={znFuturesData} />}
          {sofrFuturesData && <FuturesCard data={sofrFuturesData} />}
        </div>
        {!znFuturesData && !sofrFuturesData && (
          <div className="glass-card p-8 text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-3 text-muted-foreground opacity-50" />
            <p className="text-muted-foreground">금리 선물 데이터가 없습니다</p>
          </div>
        )}
      </section>

      {/* Market Characteristics */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">종목 특성</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="font-medium">10년물 국채 (ZN)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              장기 금리 벤치마크로 사용됩니다. 
              경기 전망, 인플레이션 기대, 연준 정책에 민감합니다.
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-medium">SOFR 선물</span>
            </div>
            <p className="text-sm text-muted-foreground">
              단기 금리 지표로 연준 정책 기대를 반영합니다. 
              LIBOR를 대체하는 새로운 기준금리입니다.
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
              <span>FOMC 회의 전후로 변동성이 크게 확대됩니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>고용지표, CPI 발표에 즉각적으로 반응합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>채권 가격과 금리는 역관계임을 이해해야 합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>주식 시장과 상관관계가 변동하므로 헤지 목적 시 주의가 필요합니다</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RatesPage;
