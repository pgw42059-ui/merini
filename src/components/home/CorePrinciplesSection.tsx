import { Search, MessageSquareWarning, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Search,
    title: "구조부터 봅니다",
    subtitle: "전략보다 구조, 감정보다 시스템.",
  },
  {
    icon: MessageSquareWarning,
    title: "리스크를 숨기지 않습니다",
    subtitle: "손실·비용·한계를 먼저 말합니다.",
  },
  {
    icon: ShieldCheck,
    title: "생존을 우선합니다",
    subtitle: "수익보다 지속 가능한 구조.",
  },
];

export function CorePrinciplesSection() {
  return (
    <section className="py-16 md:py-28 bg-background border-t border-border/30">
      <div className="container px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          {principles.map((item, idx) => (
            <div key={idx} className="text-center space-y-4">
              {/* Icon - emphasized but calm */}
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Title - bold declaration */}
              <h3 className="text-lg md:text-2xl font-bold text-foreground tracking-tight leading-snug">
                {item.title}
              </h3>
              
              {/* Philosophy statement - minimal, confident */}
              <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
