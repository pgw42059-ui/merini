import { useState } from "react";
import { LineChart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import TradingViewChart from "@/components/charts/TradingViewChart";
import { mockChartData } from "@/components/charts/mockChartData";

const instruments = [
  { symbol: "ES", name: "S&P 500" },
  { symbol: "NQ", name: "NASDAQ" },
  { symbol: "GC", name: "GOLD" },
  { symbol: "CL", name: "OIL" },
];

const MarketStructureSection = () => {
  const [activeSymbol, setActiveSymbol] = useState("ES");
  const chartInfo = mockChartData[activeSymbol];

  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <LineChart className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Market Structure</h2>
        </div>
        <span className="text-xs text-muted-foreground">구조적 맥락 확인용</span>
      </div>

      {/* Instrument tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {instruments.map((inst) => (
          <button
            key={inst.symbol}
            onClick={() => setActiveSymbol(inst.symbol)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
              activeSymbol === inst.symbol
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            {inst.name}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-lg overflow-hidden border border-border/50 bg-card/50">
        {chartInfo && (
          <TradingViewChart
            symbol={activeSymbol}
            data={chartInfo.data}
            levels={chartInfo.levels}
            height={320}
          />
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-profit" style={{ borderStyle: "dashed" }} />
          <span className="text-muted-foreground">R1 / R2 (저항)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-loss" style={{ borderStyle: "dashed" }} />
          <span className="text-muted-foreground">S1 / S2 (지지)</span>
        </div>
      </div>

      {/* Context note */}
      <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/30">
        <div className="flex items-start gap-2">
          <TrendingUp className="w-4 h-4 text-primary mt-0.5" />
          <div className="text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">차트 활용 안내</p>
            <ul className="space-y-0.5">
              <li>• 현재 가격대의 구조적 위치 확인용</li>
              <li>• 지지/저항 레벨 근접 여부 참고용</li>
              <li>• 매수/매도 시그널 또는 진입점을 제공하지 않습니다</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStructureSection;
