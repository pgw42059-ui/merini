import { CandlestickData, Time } from "lightweight-charts";

// Generate mock OHLC data for demonstration
// In production, this would come from a real data source
export const generateMockOHLC = (
  basePrice: number,
  volatility: number = 0.02,
  days: number = 60
): CandlestickData<Time>[] => {
  const data: CandlestickData<Time>[] = [];
  let currentPrice = basePrice;
  const now = new Date();

  for (let i = days; i > 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
    const open = currentPrice;
    const close = currentPrice + change;
    const high = Math.max(open, close) + Math.random() * volatility * currentPrice * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * currentPrice * 0.5;

    currentPrice = close;

    data.push({
      time: date.toISOString().split("T")[0] as Time,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
    });
  }

  return data;
};

// Mock data for each instrument
export const mockChartData: Record<string, {
  data: CandlestickData<Time>[];
  levels: { s1: number; s2: number; r1: number; r2: number };
}> = {
  ES: {
    data: generateMockOHLC(5245, 0.008),
    levels: { s1: 5220, s2: 5195, r1: 5275, r2: 5305 },
  },
  NQ: {
    data: generateMockOHLC(18350, 0.012),
    levels: { s1: 18200, s2: 18050, r1: 18500, r2: 18650 },
  },
  GC: {
    data: generateMockOHLC(2345, 0.006),
    levels: { s1: 2330, s2: 2310, r1: 2360, r2: 2385 },
  },
  CL: {
    data: generateMockOHLC(78.5, 0.015),
    levels: { s1: 77.0, s2: 75.5, r1: 80.0, r2: 81.5 },
  },
};
