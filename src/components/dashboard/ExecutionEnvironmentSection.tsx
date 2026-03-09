import { Link } from "react-router-dom";
import { Server, ArrowLeftRight, Bot, ChevronRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EnvironmentFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: EnvironmentFeature[] = [
  {
    icon: <ArrowLeftRight className="w-5 h-5" />,
    title: "Hedging 지원",
    description: "동일 종목 양방향 포지션 동시 보유 가능",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Two-way 시나리오",
    description: "상승/하락 양방향 대비 전략 실행 환경",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "자동화 포지션 관리",
    description: "규칙 기반 진입/청산/리스크 자동 관리",
  },
];

const ExecutionEnvironmentSection = () => {
  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Execution Environment</h2>
        </div>
        <span className="text-xs text-muted-foreground">실행 환경 안내</span>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        아래 기능을 지원하는 실행 환경에서 양방향 시나리오와 자동화 전략 운용이 가능합니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-border/50 bg-secondary/20 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary">{feature.icon}</span>
              <span className="font-medium text-foreground text-sm">{feature.title}</span>
            </div>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <div>
          <h3 className="font-medium text-foreground text-sm">실행 환경 비교 가이드</h3>
          <p className="text-xs text-muted-foreground mt-1">
            브로커별 실행 환경과 지원 기능을 비교해보세요.
          </p>
        </div>
        <Link to="/broker-guide">
          <Button variant="outline" size="sm" className="group">
            환경 비교하기
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        * 특정 브로커를 추천하지 않습니다. 개인 상황과 요구사항에 맞는 환경을 직접 비교하고 선택하세요.
      </p>
    </section>
  );
};

export default ExecutionEnvironmentSection;
