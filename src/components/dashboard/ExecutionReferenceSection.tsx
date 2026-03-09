import { Shield, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExecutionParams {
  symbol: string;
  name: string;
  suggestedSL: string;
  trailingRange: string;
  volatilityNote: string;
}

// Mock data - will be replaced with real calculations
const mockParams: ExecutionParams[] = [
  {
    symbol: "ES",
    name: "S&P 500",
    suggestedSL: "15-20 pts",
    trailingRange: "8-12 pts",
    volatilityNote: "보통",
  },
  {
    symbol: "NQ",
    name: "NASDAQ",
    suggestedSL: "40-60 pts",
    trailingRange: "25-35 pts",
    volatilityNote: "높음",
  },
  {
    symbol: "GC",
    name: "GOLD",
    suggestedSL: "$8-12",
    trailingRange: "$5-8",
    volatilityNote: "보통",
  },
];

const volatilityColors: Record<string, string> = {
  "낮음": "text-profit bg-profit/10",
  "보통": "text-orange-400 bg-orange-400/10",
  "높음": "text-loss bg-loss/10",
};

const ExecutionReferenceSection = () => {
  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Execution Reference</h2>
        </div>
        <span className="text-xs text-muted-foreground">실행 참고 파라미터</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mockParams.map((param) => (
          <div
            key={param.symbol}
            className="p-4 rounded-lg border border-border/50 bg-secondary/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-medium text-foreground">{param.name}</span>
                <span className="text-xs text-muted-foreground ml-2">{param.symbol}</span>
              </div>
              <span className={cn(
                "text-xs px-2 py-0.5 rounded",
                volatilityColors[param.volatilityNote] || volatilityColors["보통"]
              )}>
                {param.volatilityNote}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-loss" />
                  <span className="text-xs text-muted-foreground">Stop-Loss 범위</span>
                </div>
                <span className="text-sm font-mono text-foreground">{param.suggestedSL}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-profit" />
                  <span className="text-xs text-muted-foreground">Trailing 범위</span>
                </div>
                <span className="text-sm font-mono text-foreground">{param.trailingRange}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-orange-400/5 border border-orange-400/20">
        <p className="text-xs text-muted-foreground">
          <strong className="text-orange-400">주의:</strong> 위 수치는 현재 변동성을 기반으로 한 참고 범위입니다. 
          개별 트레이딩 전략과 리스크 허용 범위에 따라 조정하세요. 매매 조언이 아닙니다.
        </p>
      </div>
    </section>
  );
};

export default ExecutionReferenceSection;
