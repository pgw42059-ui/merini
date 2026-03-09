import { cn } from "@/lib/utils";
import { User, UserCheck, CheckCircle, XCircle, Target, Ban } from "lucide-react";

type TradingOk = "ok" | "caution" | "avoid";

interface BeginnerSummary {
  tradingOk: TradingOk;
  dontDo: string;
}

interface ExperiencedSummary {
  focusAssets: string[];
  avoidAsset: string;
}

const tradingOkConfig = {
  ok: {
    label: "O",
    text: "매매 가능",
    color: "text-profit",
    bg: "bg-profit/10",
  },
  caution: {
    label: "△",
    text: "신중하게",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  avoid: {
    label: "X",
    text: "관망 권장",
    color: "text-loss",
    bg: "bg-loss/10",
  },
};

// Mock data
const mockBeginnerData: BeginnerSummary = {
  tradingOk: "caution",
  dontDo: "변동성이 큰 NQ, CL 진입 금지. ES 또는 GC 위주로 관망.",
};

const mockExperiencedData: ExperiencedSummary = {
  focusAssets: ["ES", "GC"],
  avoidAsset: "CL",
};

const TraderLevelSummary = () => {
  const beginnerConfig = tradingOkConfig[mockBeginnerData.tradingOk];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Beginner Section */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            초보 트레이더용
          </h3>
        </div>

        <div className="space-y-4">
          {/* Trading OK Status */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <span
              className={cn(
                "text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-lg",
                beginnerConfig.bg,
                beginnerConfig.color
              )}
            >
              {beginnerConfig.label}
            </span>
            <div>
              <p className="text-sm text-muted-foreground">
                오늘 매매해도 되는 날인가?
              </p>
              <p className={cn("font-medium", beginnerConfig.color)}>
                {beginnerConfig.text}
              </p>
            </div>
          </div>

          {/* Don't Do */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-loss/5 border border-loss/20">
            <XCircle className="w-5 h-5 text-loss flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                하지 말아야 할 행동
              </p>
              <p className="text-sm text-foreground">{mockBeginnerData.dontDo}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experienced Section */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-accent/10">
            <UserCheck className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            실전 트레이더용
          </h3>
        </div>

        <div className="space-y-4">
          {/* Focus Assets */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-profit/5 border border-profit/20">
            <Target className="w-5 h-5 text-profit flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                집중할 종목
              </p>
              <div className="flex gap-2">
                {mockExperiencedData.focusAssets.map((asset) => (
                  <span
                    key={asset}
                    className="px-3 py-1 rounded-md bg-profit/10 text-profit text-sm font-mono font-medium"
                  >
                    {asset}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Avoid Asset */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-loss/5 border border-loss/20">
            <Ban className="w-5 h-5 text-loss flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                피해야 할 종목
              </p>
              <span className="px-3 py-1 rounded-md bg-loss/10 text-loss text-sm font-mono font-medium">
                {mockExperiencedData.avoidAsset}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderLevelSummary;
