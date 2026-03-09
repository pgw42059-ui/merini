import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Minus, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import DailyWarning from "@/components/dashboard/DailyWarning";
import CompactFuturesGrid from "./CompactFuturesGrid";
import MarketBiasIndicator from "./MarketBiasIndicator";
import { Button } from "@/components/ui/button";
type MarketRegime = "risk-on" | "neutral" | "risk-off";

const regimeConfigs: Record<MarketRegime, {
  label: string;
  icon: React.ElementType;
  bgColor: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
  description: string;
}> = {
  "risk-on": {
    label: "Risk-On",
    icon: TrendingUp,
    bgColor: "bg-profit/10",
    textColor: "text-profit",
    borderColor: "border-profit/30",
    glowColor: "shadow-[0_0_30px_hsl(160_84%_39%/0.15)]",
    description: "위험자산 선호 흐름",
  },
  "neutral": {
    label: "Neutral",
    icon: Minus,
    bgColor: "bg-muted",
    textColor: "text-muted-foreground",
    borderColor: "border-border",
    glowColor: "",
    description: "방향성 탐색 구간",
  },
  "risk-off": {
    label: "Risk-Off",
    icon: TrendingDown,
    bgColor: "bg-loss/10",
    textColor: "text-loss",
    borderColor: "border-loss/30",
    glowColor: "shadow-[0_0_30px_hsl(0_72%_51%/0.15)]",
    description: "안전자산 선호 흐름",
  },
};

// Mock data - replace with real data source
const currentRegime: MarketRegime = "risk-on";

const TodayMarketOverview = () => {
  const config = regimeConfigs[currentRegime];
  const Icon = config.icon;

  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            오늘의 시장
          </h1>
          <p className="text-muted-foreground text-sm">
            30초 안에 오늘 시장의 핵심을 파악하세요
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Section - Left (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Regime - Hero Element */}
            <div
              className={cn(
                "glass-card p-6 md:p-8 border",
                config.borderColor,
                config.glowColor
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Regime Display */}
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex items-center justify-center w-16 h-16 rounded-xl border",
                      config.bgColor,
                      config.borderColor
                    )}
                  >
                    <Icon className={cn("w-8 h-8", config.textColor)} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">오늘의 시장 레짐</p>
                    <p className={cn("text-2xl md:text-3xl font-bold", config.textColor)}>
                      {config.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {config.description}
                    </p>
                  </div>
                </div>

            {/* CTA */}
            <Link to="/markets/overview">
              <Button variant="outline" className="group">
                자세히 보기
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
              </div>
            </div>

            {/* Market Bias & Volatility */}
            <MarketBiasIndicator />

            {/* Daily Warning */}
            <DailyWarning />

            {/* Top 6 Compact Summary */}
            <div className="glass-card p-5 border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-semibold text-foreground">Top 6 선물</h2>
                  <p className="text-xs text-muted-foreground">주요 종목 상태 요약</p>
                </div>
            <Link 
              to="/markets/overview" 
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              전체 보기
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
              </div>
              <CompactFuturesGrid />
            </div>
          </div>

          {/* Sub Section - Right (1/3) */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground px-1">빠른 이동</h3>
            
            <Link
              to="/brokers"
              className="glass-card p-5 border border-border/50 hover:border-primary/30 transition-all group block"
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                브로커 가이드
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                시장 상황별 브로커 선택 기준
              </p>
            </Link>

            <Link
              to="/guides"
              className="glass-card p-5 border border-border/50 hover:border-primary/30 transition-all group block"
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                학습 가이드
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                시장 구조와 리스크 관리
              </p>
            </Link>

            <Link
              to="/guides/mt5-pc"
              className="glass-card p-5 border border-border/50 hover:border-primary/30 transition-all group block"
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                MT5 시작하기
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                실행 환경 설정 가이드
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayMarketOverview;
