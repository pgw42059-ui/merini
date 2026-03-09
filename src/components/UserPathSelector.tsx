import { ArrowRight, HelpCircle, Settings, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const userPaths = [
  {
    id: "beginner",
    icon: HelpCircle,
    badge: "처음 접함",
    title: "MT5가 처음입니다",
    description: "메타트레이더가 뭔지 모르겠어요. 브로커? 차트? 기초부터 알려주세요.",
    details: [
      "MT5란 무엇인가",
      "브로커의 역할과 선택 기준",
      "설치 → 로그인 → 차트 조작법",
      "첫 주문까지의 전체 흐름",
    ],
    cta: "기초부터 시작하기",
    link: "/guides/mt5-pc",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: "intermediate",
    icon: Settings,
    badge: "사용 중",
    title: "MT5는 쓰고 있어요",
    description: "차트는 열 수 있는데, 설정이 맞는지 모르겠어요. 보조지표? 브로커 차이?",
    details: [
      "보조지표의 개념과 활용",
      "브로커별 스프레드/슬리피지 비교",
      "차트 템플릿과 설정 최적화",
      "내 설정 점검 체크리스트",
    ],
    cta: "설정 점검하기",
    link: "/guides",
    color: "from-primary/20 to-primary/10",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
  },
  {
    id: "advanced",
    icon: LineChart,
    badge: "EA 검토",
    title: "자동매매를 고려 중입니다",
    description: "EA가 뭔지는 알아요. 하지만 과장 없이 구조와 리스크를 먼저 확인하고 싶어요.",
    details: [
      "전략 구조와 로직 문서",
      "백테스트 조건과 한계 공개",
      "리스크 설계 기준",
      "구독/해지/중단 조건 안내",
    ],
    cta: "전략 구조 확인하기",
    link: "/markets",
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
];

export function UserPathSelector() {
  return (
    <section className="py-20 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
            Choose Your Path
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            지금 당신의 상태는 어디인가요?
          </p>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            단계에 맞는 콘텐츠를 제공합니다. 급할 필요 없어요.
          </p>
        </div>

        {/* Three Path Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {userPaths.map((path) => (
            <Link
              key={path.id}
              to={path.link}
              className={`group relative overflow-hidden rounded-xl border ${path.borderColor} bg-gradient-to-br ${path.color} backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-background/50 ${path.iconColor}`}>
                  {path.badge}
                </span>
                <path.icon className={`w-5 h-5 ${path.iconColor}`} />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {path.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {path.description}
              </p>

              {/* Details List */}
              <ul className="space-y-1.5 mb-6">
                {path.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                {path.cta}
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-md mx-auto">
          어느 단계를 선택하든 강요는 없습니다. 천천히 둘러보세요.
          <br />
          자동매매(EA)는 이해가 충분할 때만 고려하는 것이 좋습니다.
        </p>
      </div>
    </section>
  );
}
