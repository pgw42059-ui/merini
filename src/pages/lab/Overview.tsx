import { Link } from "react-router-dom";
import { History, GitCompare, BarChart3, FileText, FlaskConical, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const labTools = [
  {
    id: "regime-history",
    title: "레짐 히스토리",
    description: "과거 시장 레짐 변화를 추적하고 패턴을 분석합니다",
    icon: History,
    href: "/lab/regime-history",
    status: "available" as const,
  },
  {
    id: "correlation",
    title: "상관관계 맵",
    description: "주요 종목 간 상관관계를 시각화합니다",
    icon: GitCompare,
    href: "/lab/correlation",
    status: "coming" as const,
  },
  {
    id: "volatility-rank",
    title: "변동성 순위",
    description: "종목별 변동성을 순위로 비교합니다",
    icon: BarChart3,
    href: "/lab/volatility-rank",
    status: "coming" as const,
  },
  {
    id: "backtest-log",
    title: "백테스트 아카이브",
    description: "EA 백테스트 결과를 기록하고 비교합니다",
    icon: FileText,
    href: "/lab/backtest-log",
    status: "coming" as const,
  },
];

const statusConfig = {
  available: { label: "이용 가능", color: "text-profit", bg: "bg-profit/10" },
  coming: { label: "준비 중", color: "text-muted-foreground", bg: "bg-muted" },
};

const LabOverview = () => {
  return (
    <div className="py-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <FlaskConical className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Lab
          </h1>
        </div>
        <p className="text-muted-foreground">
          실험적 분석 도구와 데이터 시각화
        </p>
      </div>

      {/* Notice */}
      <div className="glass-card p-4 border border-primary/30 bg-primary/5 mb-8">
        <p className="text-sm text-muted-foreground">
          <span className="text-primary font-medium">Lab</span>은 새로운 분석 도구를 실험하는 공간입니다. 
          기능이 변경되거나 제거될 수 있습니다.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {labTools.map((tool) => {
          const Icon = tool.icon;
          const status = statusConfig[tool.status];
          const isAvailable = tool.status === "available";

          const content = (
            <div
              className={cn(
                "glass-card p-5 border transition-all h-full",
                isAvailable 
                  ? "border-border/50 hover:border-primary/30 cursor-pointer" 
                  : "border-border/30 opacity-60"
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-secondary">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className={cn("text-xs px-2 py-1 rounded", status.bg, status.color)}>
                  {status.label}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
              {isAvailable && (
                <div className="mt-4 flex items-center text-sm text-primary">
                  <span>열기</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              )}
            </div>
          );

          return isAvailable ? (
            <Link key={tool.id} to={tool.href}>
              {content}
            </Link>
          ) : (
            <div key={tool.id}>{content}</div>
          );
        })}
      </div>
    </div>
  );
};

export default LabOverview;
