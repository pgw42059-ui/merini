import { AlertTriangle, Loader2, Info } from "lucide-react";
import { useDailyWarning } from "@/hooks/useMarketData";

const severityConfig = {
  info: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    iconColor: "text-accent",
    textColor: "text-accent",
  },
  caution: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    iconColor: "text-yellow-500",
    textColor: "text-yellow-400",
  },
  danger: {
    bg: "bg-loss/10",
    border: "border-loss/30",
    iconColor: "text-loss",
    textColor: "text-loss",
  },
};

const DailyWarning = () => {
  const { data, isLoading, error } = useDailyWarning();

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/50 border-border">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        <span className="text-muted-foreground">주의 포인트 로딩 중...</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/30 border-border">
        <Info className="w-5 h-5 text-muted-foreground" />
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">
            오늘의 핵심 주의 포인트
          </p>
          <p className="font-medium text-muted-foreground">
            오늘의 주의 포인트가 아직 등록되지 않았습니다
          </p>
        </div>
      </div>
    );
  }

  // Default to caution severity for all warnings
  const config = severityConfig.caution;

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border ${config.bg} ${config.border}`}
    >
      <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${config.iconColor}`} />
      <div>
        <p className="text-xs text-muted-foreground mb-0.5">
          오늘의 핵심 주의 포인트
        </p>
        <p className={`font-medium ${config.textColor}`}>{data.warning_text}</p>
      </div>
    </div>
  );
};

export default DailyWarning;
