import { BookOpen, Target, Shield, Cpu, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: 1,
    icon: BookOpen,
    title: "시장 구조 이해",
    description: "지수선물, 브로커, 스프레드의 기본 개념부터 시작합니다.",
    details: [
      "지수선물이란 무엇인가",
      "브로커의 역할과 수익 구조",
      "스프레드와 슬리피지 개념",
      "레버리지의 원리와 위험",
    ],
    link: "/guides/market-basics",
    color: "text-blue-400",
    bgColor: "from-blue-500/10 to-blue-600/5",
  },
  {
    step: 2,
    icon: Target,
    title: "전략 구조 학습",
    description: "진입/청산 로직, 시간대, 손익비 설계 원리를 배웁니다.",
    details: [
      "진입 신호와 청산 조건",
      "시간대별 변동성 특성",
      "손익비와 승률의 관계",
      "전략 백테스트 기초",
    ],
    link: "/guides/strategy",
    color: "text-primary",
    bgColor: "from-primary/10 to-primary/5",
  },
  {
    step: 3,
    icon: Shield,
    title: "리스크 관리",
    description: "포지션 사이징, 드로우다운 관리, 자본 보호 규칙.",
    details: [
      "포지션 사이징 계산법",
      "최대 드로우다운 설정",
      "일일/주간 손실 한도",
      "자본 보호를 위한 규칙",
    ],
    link: "/guides/risk",
    color: "text-amber-400",
    bgColor: "from-amber-500/10 to-amber-600/5",
  },
  {
    step: 4,
    icon: Cpu,
    title: "자동매매 실행",
    description: "MT5 설정, EA 연결, 실전 운용 시작하기.",
    details: [
      "MT5 자동매매 허용 설정",
      "EA 파일 설치 방법",
      "파라미터 조정 기초",
      "실전 전 체크리스트",
    ],
    link: "/guides/mt5-pc",
    color: "text-emerald-400",
    bgColor: "from-emerald-500/10 to-emerald-600/5",
  },
];

export default function Roadmap() {
  return (
    <div className="container px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            학습 로드맵
          </h1>
          <p className="text-muted-foreground">
            MT5와 자동매매를 이해하기 위한 4단계 학습 경로입니다.
            <br />
            순서대로 따라가도 되고, 필요한 부분만 선택해도 됩니다.
          </p>
        </div>

          {/* Progress Indicator */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="flex items-center gap-2">
              {steps.map((step, idx) => (
                <div key={step.step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${step.color} border-current bg-background`}>
                    {step.step}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-12 h-0.5 bg-border mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {steps.map((item) => (
              <Link
                key={item.step}
                to={item.link}
                className={`group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br ${item.bgColor} p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${item.color}`}>
                      {item.step}
                    </span>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>

                {/* Details */}
                <ul className="space-y-1.5">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            어디서부터 시작해야 할지 모르겠다면
          </p>
          <Link
            to="/guides/mt5-pc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            MT5 기초 가이드부터 시작하기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
    </div>
  );
}
