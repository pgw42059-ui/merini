import { Link } from "react-router-dom";
import { BarChart3, Settings, FileText, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const EABacktest = () => {
  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <PageSEO title="EA 백테스트 방법 — MT5 전략 테스터 가이드" description="MetaTrader 5 전략 테스터로 EA 백테스트 실행, 결과 분석, 최적화 방법을 안내합니다." path="/ea/backtest" isHowTo={true} />
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        백테스트 가이드
      </h1>
      <p className="text-muted-foreground mb-8">
        EA의 과거 성과를 검증하는 백테스트 설정 방법을 안내합니다.
      </p>

      {/* Warning */}
      <div className="glass-card p-4 border border-yellow-500/30 bg-yellow-500/5 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">백테스트의 한계</p>
            <p className="text-xs text-muted-foreground">
              백테스트 결과는 과거 데이터 기반입니다. 실제 시장에서는 슬리피지, 스프레드 변동,
              유동성 부족 등으로 결과가 달라질 수 있습니다. 과최적화(overfitting)에 주의하세요.
            </p>
          </div>
        </div>
      </div>

      {/* MT5 Strategy Tester */}
      <div className="glass-card p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">MT5 전략 테스터 사용법</h2>
        </div>
        <ol className="space-y-4 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">1</span>
            <span>MT5에서 <strong className="text-foreground">보기 → 전략 테스터</strong>를 클릭합니다.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">2</span>
            <span>테스트할 EA를 선택하고, 심볼과 기간을 설정합니다.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">3</span>
            <span>모델링 방식은 <strong className="text-foreground">"Every tick based on real ticks"</strong>를 권장합니다.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">4</span>
            <span>시작 버튼을 눌러 백테스트를 실행합니다.</span>
          </li>
        </ol>
      </div>

      {/* Key Metrics */}
      <div className="glass-card p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">주요 확인 지표</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-secondary/30">
            <p className="font-medium text-foreground mb-1">Profit Factor</p>
            <p className="text-xs text-muted-foreground">총 수익 / 총 손실. 1.5 이상을 권장</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/30">
            <p className="font-medium text-foreground mb-1">Maximum Drawdown</p>
            <p className="text-xs text-muted-foreground">최대 손실폭. 20% 이하 권장</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/30">
            <p className="font-medium text-foreground mb-1">Recovery Factor</p>
            <p className="text-xs text-muted-foreground">순이익 / 최대 DD. 높을수록 좋음</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/30">
            <p className="font-medium text-foreground mb-1">Sharpe Ratio</p>
            <p className="text-xs text-muted-foreground">위험 대비 수익률. 1.0 이상 권장</p>
          </div>
        </div>
      </div>

      {/* Settings Tips */}
      <div className="glass-card p-6 border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Settings className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">설정 팁</h2>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• 최소 5년 이상의 데이터로 테스트하세요</li>
          <li>• 다양한 시장 상황(상승장, 하락장, 횡보장)을 포함하세요</li>
          <li>• Forward test로 추가 검증을 진행하세요</li>
          <li>• 과최적화를 피하기 위해 Out-of-Sample 테스트를 병행하세요</li>
        </ul>
      </div>

      {/* Prev/Next Navigation */}
      <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/50">
        <Link
          to="/ea/usage-guide"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          사용 가이드
        </Link>
        <Link
          to="/ea/vps"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          VPS 설정
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
      <RelatedContent items={[
          { title: "EA 설치 방법", description: "백테스트할 EA 설치 방법", href: "/ea/install", badge: "설치" },
          { title: "EA 사용 가이드", description: "백테스트 후 실전 운영 설정", href: "/ea/usage-guide", badge: "운영" },
          { title: "VPS 설정", description: "검증된 EA를 VPS로 24시간 운영", href: "/ea/vps", badge: "운영" }
        ]} />
    </div>
  );
};

export default EABacktest;
