import { useEffect, useRef, memo } from "react";
import {
  createChart,
  ColorType,
  IChartApi,
  CandlestickData,
  Time,
  CandlestickSeries,
} from "lightweight-charts";

interface TradingViewChartProps {
  symbol: string;
  data: CandlestickData<Time>[];
  height?: number;
  levels?: {
    s1?: number;
    s2?: number;
    r1?: number;
    r2?: number;
  };
}

const TradingViewChart = memo(({ symbol, data, height = 300, levels }: TradingViewChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart with dark theme matching design system
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "hsl(215, 15%, 50%)",
      },
      grid: {
        vertLines: { color: "hsl(220, 20%, 15%)" },
        horzLines: { color: "hsl(220, 20%, 15%)" },
      },
      width: chartContainerRef.current.clientWidth,
      height: height,
      rightPriceScale: {
        borderColor: "hsl(220, 20%, 18%)",
      },
      timeScale: {
        borderColor: "hsl(220, 20%, 18%)",
        timeVisible: true,
      },
      crosshair: {
        vertLine: {
          color: "hsl(175, 55%, 38%)",
          width: 1,
          style: 2,
        },
        horzLine: {
          color: "hsl(175, 55%, 38%)",
          width: 1,
          style: 2,
        },
      },
    });

    chartRef.current = chart;

    // Add candlestick series using v4 API
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "hsl(160, 84%, 39%)",
      downColor: "hsl(0, 72%, 51%)",
      borderUpColor: "hsl(160, 84%, 39%)",
      borderDownColor: "hsl(0, 72%, 51%)",
      wickUpColor: "hsl(160, 84%, 45%)",
      wickDownColor: "hsl(0, 72%, 55%)",
    });

    candlestickSeries.setData(data);

    // Add horizontal price lines for S/R levels
    if (levels) {
      if (levels.r2) {
        candlestickSeries.createPriceLine({
          price: levels.r2,
          color: "hsl(160, 84%, 39%)",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "R2",
        });
      }
      if (levels.r1) {
        candlestickSeries.createPriceLine({
          price: levels.r1,
          color: "hsl(160, 84%, 50%)",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "R1",
        });
      }
      if (levels.s1) {
        candlestickSeries.createPriceLine({
          price: levels.s1,
          color: "hsl(0, 72%, 60%)",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "S1",
        });
      }
      if (levels.s2) {
        candlestickSeries.createPriceLine({
          price: levels.s2,
          color: "hsl(0, 72%, 51%)",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "S2",
        });
      }
    }

    // Fit content
    chart.timeScale().fitContent();

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data, height, levels]);

  return (
    <div className="relative">
      <div ref={chartContainerRef} className="w-full" />
      {/* Overlay to prevent interaction signals */}
      <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-card/80 px-2 py-1 rounded">
        구조 참고용 · 매매 신호 아님
      </div>
    </div>
  );
});

TradingViewChart.displayName = "TradingViewChart";

export default TradingViewChart;
