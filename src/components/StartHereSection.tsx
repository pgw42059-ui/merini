import { BookOpen, Target, Shield, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: 1,
    icon: BookOpen,
    title: "시장 구조 이해",
    description: "지수선물, 브로커, 스프레드의 기본 개념부터 시작합니다.",
    link: "/education/market-basics",
    color: "text-blue-400",
  },
  {
    step: 2,
    icon: Target,
    title: "전략 구조 학습",
    description: "진입/청산 로직, 시간대, 손익비 설계 원리를 배웁니다.",
    link: "/education/strategy",
    color: "text-primary",
  },
  {
    step: 3,
    icon: Shield,
    title: "리스크 관리",
    description: "포지션 사이징, 드로우다운 관리, 자본 보호 규칙.",
    link: "/education/risk",
    color: "text-amber-400",
  },
  {
    step: 4,
    icon: Cpu,
    title: "자동매매 실행",
    description: "MT5 설정, EA 연결, 실전 운용 시작하기.",
    link: "/guide/mt5-pc",
    color: "text-emerald-400",
  },
];

export function StartHereSection() {
  return (
    <section className="py-20 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
            Start Here
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            처음이라면 여기서 시작하세요
          </p>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            4단계로 구성된 학습 로드맵. 순서대로 따라오면 됩니다.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item) => (
            <Link
              key={item.step}
              to={item.link}
              className="group glass-card-hover p-6 flex flex-col"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">
                  STEP {item.step}
                </span>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center text-xs text-muted-foreground group-hover:text-primary transition-colors">
                시작하기
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
