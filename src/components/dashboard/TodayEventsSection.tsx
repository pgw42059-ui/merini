import { Calendar, AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type EventImpact = "high" | "medium" | "low";
type EventStatus = "upcoming" | "active" | "passed";

interface EconomicEvent {
  id: string;
  time: string;
  currency: string;
  event: string;
  impact: EventImpact;
  status: EventStatus;
  isCautionWindow?: boolean;
}

// Mock data - will be replaced with real API
const mockEvents: EconomicEvent[] = [
  {
    id: "1",
    time: "09:30",
    currency: "USD",
    event: "Core Retail Sales m/m",
    impact: "high",
    status: "upcoming",
    isCautionWindow: true,
  },
  {
    id: "2",
    time: "10:00",
    currency: "USD",
    event: "Business Inventories m/m",
    impact: "medium",
    status: "upcoming",
  },
  {
    id: "3",
    time: "14:00",
    currency: "USD",
    event: "FOMC Member Speech",
    impact: "high",
    status: "upcoming",
    isCautionWindow: true,
  },
  {
    id: "4",
    time: "15:30",
    currency: "USD",
    event: "Crude Oil Inventories",
    impact: "medium",
    status: "upcoming",
  },
];

const impactColors: Record<EventImpact, string> = {
  high: "bg-loss",
  medium: "bg-orange-400",
  low: "bg-muted-foreground",
};

const TodayEventsSection = () => {
  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  const highImpactCount = mockEvents.filter((e) => e.impact === "high").length;

  return (
    <section className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Today's Events</h2>
        </div>
        <span className="text-xs text-muted-foreground">{today}</span>
      </div>

      {/* High impact warning */}
      {highImpactCount > 0 && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-loss/10 border border-loss/20 mb-4">
          <AlertTriangle className="w-4 h-4 text-loss" />
          <span className="text-sm text-loss">
            고영향 이벤트 {highImpactCount}건 예정
          </span>
        </div>
      )}

      {/* Events list */}
      <div className="space-y-2">
        {mockEvents.map((event) => (
          <div
            key={event.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border transition-colors",
              event.isCautionWindow
                ? "border-orange-400/30 bg-orange-400/5"
                : "border-border/50 bg-secondary/20"
            )}
          >
            {/* Time */}
            <div className="flex items-center gap-1 min-w-[60px]">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-sm font-mono text-foreground">{event.time}</span>
            </div>

            {/* Impact indicator */}
            <div className={cn("w-2 h-2 rounded-full", impactColors[event.impact])} />

            {/* Currency badge */}
            <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
              {event.currency}
            </span>

            {/* Event name */}
            <span className="text-sm text-foreground flex-1">{event.event}</span>

            {/* Caution badge */}
            {event.isCautionWindow && (
              <span className="text-xs px-2 py-0.5 rounded bg-orange-400/20 text-orange-400">
                주의
              </span>
            )}
          </div>
        ))}

        {mockEvents.length === 0 && (
          <div className="text-center py-6 text-muted-foreground text-sm">
            오늘 예정된 주요 이벤트가 없습니다.
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-loss" />
          <span>High</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-orange-400" />
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground" />
          <span>Low</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-3">
        * 이벤트 시간 전후 30분은 변동성 확대 구간으로 주의가 필요합니다.
      </p>
    </section>
  );
};

export default TodayEventsSection;
