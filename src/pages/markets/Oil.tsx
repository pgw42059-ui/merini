import { useMarketDaily, symbolMeta } from "@/hooks/useMarketData";
import FuturesCard, { FuturesData, TrendStatus, VolatilityLevel, DifficultyLevel } from "@/components/dashboard/FuturesCard";
import { Loader2, AlertCircle, Fuel, BarChart3, Activity } from "lucide-react";

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

const OilPage = () => {
  const { data, isLoading, error } = useMarketDaily();
  
  const clData = data?.find(item => item.symbol === "CL");

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

  if (error || !clData) {
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
    symbol: clData.symbol,
    name: symbolMeta[clData.symbol]?.name || clData.symbol,
    nameKo: symbolMeta[clData.symbol]?.nameKo || clData.symbol,
    trend: mapTrendState(clData.trend_state),
    volatility: mapVolState(clData.vol_state),
    difficulty: mapDifficulty(clData.difficulty),
    comment: clData.comment,
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Fuel className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              WTI 원유 선물 (CL)
            </h1>
            <p className="text-muted-foreground text-sm">
              서부 텍사스산 중질유 원유 선물
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
              <span className="font-medium">가격 결정 요인</span>
            </div>
            <p className="text-sm text-muted-foreground">
              OPEC 결정, 지정학적 리스크, 재고 데이터에 크게 반응합니다. 
              수요-공급 밸런스가 핵심입니다.
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-medium">변동성</span>
            </div>
            <p className="text-sm text-muted-foreground">
              지수 선물 대비 변동성이 높습니다. 
              롤오버 비용과 콘탱고/백워데이션 구조 이해가 필요합니다.
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
              <span>매주 수요일 EIA 원유 재고 발표에 큰 변동이 발생합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>월간 만기가 있어 롤오버 관리가 필수입니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>지정학적 이벤트 시 갭 리스크가 매우 높습니다</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OilPage;
