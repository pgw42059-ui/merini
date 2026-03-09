import { Bell, Server, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import updatesData from "@/content/updates.json";

type UpdateType = "strategy" | "broker" | "system";

interface Update {
  id: string;
  type: UpdateType;
  title: string;
  description: string;
  date: string;
  link?: string;
  badge?: string;
}

const iconMap = {
  strategy: Settings,
  broker: Server,
  system: Bell,
};

const typeColors: Record<UpdateType, string> = {
  strategy: "bg-primary/10 text-primary",
  broker: "bg-amber-500/10 text-amber-400",
  system: "bg-blue-500/10 text-blue-400",
};

export function UpdatesLogSection() {
  const updates = updatesData as Update[];

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            운영 공지 & 업데이트
          </h2>
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            전체보기
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {updates.map((item) => {
            const IconComponent = iconMap[item.type];
            return (
              <div
                key={item.id}
                className="glass-card p-4 hover:border-primary/20 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${typeColors[item.type]}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <h3 className="text-sm font-medium text-foreground truncate">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
