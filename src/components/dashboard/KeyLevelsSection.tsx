import { Target, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LevelData {
  symbol: string;
  name: string;
  current: number;
  s1: number;
  s2: number;
  r1: number;
  r2: number;
}

// Mock data - will be replaced with real data
const mockLevels: LevelData[] = [
  {
    symbol: "ES",
    name: "S&P 500",
    current: 5245.50,
    s1: 5220.00,
    s2: 5195.00,
    r1: 5275.00,
    r2: 5305.00,
  },
  {
    symbol: "NQ",
    name: "NASDAQ",
    current: 18350.25,
    s1: 18200.00,
    s2: 18050.00,
    r1: 18500.00,
    r2: 18650.00,
  },
  {
    symbol: "GC",
    name: "GOLD",
    current: 2345.80,
    s1: 2330.00,
    s2: 2310.00,
    r1: 2360.00,
    r2: 2385.00,
  },
];

const formatPrice = (price: number, symbol: string): string => {
  if (symbol === "GC") {
    return price.toFixed(2);
  }
  return price.toFixed(2);
};

const KeyLevelsSection = () => {
  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Key Market Levels</h2>
        </div>
        <span className="text-xs text-muted-foreground">구조적 참고 레벨</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-2 px-2 text-muted-foreground font-medium">종목</th>
              <th className="text-center py-2 px-2 text-loss font-medium">S2</th>
              <th className="text-center py-2 px-2 text-loss font-medium">S1</th>
              <th className="text-center py-2 px-2 text-foreground font-medium">현재가</th>
              <th className="text-center py-2 px-2 text-profit font-medium">R1</th>
              <th className="text-center py-2 px-2 text-profit font-medium">R2</th>
            </tr>
          </thead>
          <tbody>
            {mockLevels.map((level) => {
              // Determine position relative to levels
              const nearS1 = Math.abs(level.current - level.s1) / level.current < 0.005;
              const nearR1 = Math.abs(level.current - level.r1) / level.current < 0.005;

              return (
                <tr key={level.symbol} className="border-b border-border/30">
                  <td className="py-3 px-2">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{level.name}</span>
                      <span className="text-xs text-muted-foreground">{level.symbol}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-2">
                    <span className="font-mono text-loss/70">{formatPrice(level.s2, level.symbol)}</span>
                  </td>
                  <td className="text-center py-3 px-2">
                    <div className="flex items-center justify-center gap-1">
                      <ArrowDown className="w-3 h-3 text-loss" />
                      <span className="font-mono text-loss">{formatPrice(level.s1, level.symbol)}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-2">
                    <span className={cn(
                      "font-mono font-semibold px-2 py-0.5 rounded",
                      nearS1 ? "bg-loss/20 text-loss" : nearR1 ? "bg-profit/20 text-profit" : "text-foreground"
                    )}>
                      {formatPrice(level.current, level.symbol)}
                    </span>
                  </td>
                  <td className="text-center py-3 px-2">
                    <div className="flex items-center justify-center gap-1">
                      <ArrowUp className="w-3 h-3 text-profit" />
                      <span className="font-mono text-profit">{formatPrice(level.r1, level.symbol)}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-2">
                    <span className="font-mono text-profit/70">{formatPrice(level.r2, level.symbol)}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/30">
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground">참고:</strong> S1/S2 = 지지 레벨, R1/R2 = 저항 레벨. 
          해당 레벨은 구조적 참고 가격대이며 매매 시그널이 아닙니다.
        </p>
      </div>
    </section>
  );
};

export default KeyLevelsSection;
