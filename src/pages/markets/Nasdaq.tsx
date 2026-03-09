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

const NasdaqPage = () => {
  const { data, isLoading, error } = useMarketDaily();
  
  const nqData = data?.find(item => item.symbol === "NQ");

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

  if (error || !nqData) {
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
    symbol: nqData.symbol,
    name: symbolMeta[nqData.symbol]?.name || nqData.symbol,
    nameKo: symbolMeta[nqData.symbol]?.nameKo || nqData.symbol,
    trend: mapTrendState(nqData.trend_state),
    volatility: mapVolState(nqData.vol_state),
    difficulty: mapDifficulty(nqData.difficulty),
    comment: nqData.comment,
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
              Nasdaq 100 선물 (NQ)
            </h1>
            <p className="text-muted-foreground text-sm">
              기술주 중심의 나스닥 100 지수 선물
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
              <span className="font-medium">변동성</span>
            </div>
            <p className="text-sm text-muted-foreground">
              높은 베타 값으로 S&P 500 대비 큰 변동폭을 보입니다. 
              기술주 실적 및 금리 민감도가 높습니다.
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-primary" />
              <span className="font-medium">거래 시간</span>
            </div>
            <p className="text-sm text-muted-foreground">
              CME Globex에서 거의 24시간 거래됩니다. 
              한국시간 기준 주요 변동은 밤 10시~새벽 5시입니다.
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
              <span>빅테크 실적 발표 시즌에는 변동성이 크게 확대됩니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>금리 결정 및 연준 발언에 민감하게 반응합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>ES(S&P 500) 대비 리스크가 높으므로 포지션 크기 조절이 중요합니다</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NasdaqPage;
