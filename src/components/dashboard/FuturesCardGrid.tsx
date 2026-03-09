import { useMarketDaily, symbolMeta } from "@/hooks/useMarketData";
import FuturesCard, { FuturesData, TrendStatus, VolatilityLevel, DifficultyLevel } from "./FuturesCard";
import { Loader2, AlertCircle } from "lucide-react";

// Map database values to component types
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

// Symbol display order
const symbolOrder = ["ES", "NQ", "CL", "ZN", "SOFR", "GC"];

const FuturesCardGrid = () => {
  const { data, isLoading, error } = useMarketDaily();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">데이터 로딩 중...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12 text-loss">
        <AlertCircle className="w-5 h-5 mr-2" />
        <span>데이터를 불러오는 데 실패했습니다</span>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="text-muted-foreground">
          <AlertCircle className="w-8 h-8 mx-auto mb-3 opacity-50" />
          <p className="text-lg font-medium">오늘의 시장 데이터 준비 중</p>
          <p className="text-sm mt-1">
            데이터가 곧 업데이트됩니다. 잠시 후 다시 확인해주세요.
          </p>
        </div>
      </div>
    );
  }

  // Sort data by symbol order
  const sortedData = [...data].sort((a, b) => {
    return symbolOrder.indexOf(a.symbol) - symbolOrder.indexOf(b.symbol);
  });

  const futuresData: FuturesData[] = sortedData.map((item) => ({
    symbol: item.symbol,
    name: symbolMeta[item.symbol]?.name || item.symbol,
    nameKo: symbolMeta[item.symbol]?.nameKo || item.symbol,
    trend: mapTrendState(item.trend_state),
    volatility: mapVolState(item.vol_state),
    difficulty: mapDifficulty(item.difficulty),
    comment: item.comment,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {futuresData.map((data) => (
        <FuturesCard key={data.symbol} data={data} />
      ))}
    </div>
  );
};

export default FuturesCardGrid;
