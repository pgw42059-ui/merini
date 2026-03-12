import { Link } from "react-router-dom";
import {
  Monitor,
  Laptop,
  Smartphone,
  ShoppingCart,
  BarChart2,
  Layers,
  Keyboard,
  FolderDown,
  ArrowRight,
  Clock,
  GraduationCap,
  CheckCircle,
  ChevronRight,
  Bot,
} from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { PageSEO } from "@/components/PageSEO";

const guideGroups = [
  {
    label: "MT5 시작하기",
    color: "text-blue-400",
    guides: [
      {
        step: 1,
        icon: Monitor,
        title: "MT5 설치 가이드",
        subtitle: "Installation & Login",
        desc: "MT5 다운로드부터 브로커 로그인, 기본 화면 설정까지. 처음 시작하는 분을 위한 완전한 설치 안내입니다.",
        href: "/guides/mt5-manual",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/30",
        glow: "hover:shadow-blue-500/10",
        topics: ["MT5 다운로드 & 설치", "브로커 로그인", "기본 화면 구성", "자동매매 설정"],
        time: "20분",
        badge: null,
      },
      {
        step: 2,
        icon: Laptop,
        title: "PC 화면 가이드",
        subtitle: "PC Screen Guide",
        desc: "MT5 PC 버전의 각 창과 버튼이 무엇을 하는지 화면 기반으로 안내합니다.",
        href: "/guides/mt5-pc",
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
        border: "border-indigo-400/30",
        glow: "hover:shadow-indigo-500/10",
        topics: ["Market Watch 사용법", "Navigator 패널", "차트 설정", "터미널 창"],
        time: "15분",
        badge: null,
      },
      {
        step: 3,
        icon: Smartphone,
        title: "모바일 가이드",
        subtitle: "Mobile App Guide",
        desc: "MT5 모바일 앱으로 포지션 확인, 관리, 긴급 청산을 하는 방법을 안내합니다.",
        href: "/guides/mt5-mobile",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/30",
        glow: "hover:shadow-cyan-500/10",
        topics: ["앱 설치 & 로그인", "포지션 모니터링", "긴급 청산 방법", "알림 설정"],
        time: "10분",
        badge: null,
      },
    ],
  },
  {
    label: "거래 방법",
    color: "text-emerald-400",
    guides: [
      {
        step: 4,
        icon: ShoppingCart,
        title: "주문 방법",
        subtitle: "Order Types",
        desc: "시장가·지정가·스탑 주문의 차이와 SL/TP 설정 방법. 체계적인 거래의 기본입니다.",
        href: "/guides/orders",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/30",
        glow: "hover:shadow-emerald-500/10",
        topics: ["시장가 / 지정가 / 스탑 주문", "손절(SL) 설정", "익절(TP) 설정", "트레일링 스탑"],
        time: "15분",
        badge: null,
      },
      {
        step: 5,
        icon: BarChart2,
        title: "지표 사용법",
        subtitle: "Technical Indicators",
        desc: "MT5 내장 지표 추가·설정 방법과 주요 지표(MA, RSI, MACD, ATR)의 역할을 안내합니다.",
        href: "/guides/indicators",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/30",
        glow: "hover:shadow-yellow-500/10",
        topics: ["지표 추가 방법", "추세 추종 지표", "오실레이터", "변동성 지표"],
        time: "15분",
        badge: null,
      },
      {
        step: 6,
        icon: Layers,
        title: "계좌 유형",
        subtitle: "Account Types",
        desc: "헤징과 네팅 계좌의 차이. EA 자동매매를 사용한다면 반드시 알아야 할 내용입니다.",
        href: "/guides/account-types",
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/30",
        glow: "hover:shadow-orange-500/10",
        topics: ["헤징 vs 네팅 계좌", "실전 예시", "계좌 유형 확인 방법", "EA 사용 시 주의"],
        time: "10분",
        badge: "필수",
      },
    ],
  },
  {
    label: "도구 & 참고",
    color: "text-purple-400",
    guides: [
      {
        step: undefined as number | undefined,
        icon: Keyboard,
        title: "단축키 모음",
        subtitle: "Keyboard Shortcuts",
        desc: "차트 조작, 주문 창, 창 관리, 자동매매 토글 등 MT5 핵심 단축키를 한눈에 정리했습니다.",
        href: "/guides/shortcuts",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/30",
        glow: "hover:shadow-purple-500/10",
        topics: ["차트 단축키", "시간프레임 전환", "창 관리", "자동매매 토글"],
        time: "참고용",
        badge: null,
      },
      {
        step: undefined as number | undefined,
        icon: FolderDown,
        title: "리소스 다운로드",
        subtitle: "Resources",
        desc: "세팅 파일, 템플릿, 체크리스트 등 MT5 세팅에 유용한 자료를 제공합니다.",
        href: "/guides/resources",
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        border: "border-pink-400/30",
        glow: "hover:shadow-pink-500/10",
        topics: ["차트 템플릿", "EA 설정 체크리스트", "브로커 비교표"],
        time: "참고용",
        badge: null,
      },
    ],
  },
];

const whatYouLearn = [
  "MT5를 설치하고 브로커에 로그인하는 전체 과정을 이해합니다",
  "주문 유형(시장가·지정가·스탑)과 SL/TP를 올바르게 설정합니다",
  "EA 자동매매를 위한 헤징 계좌 설정과 AutoTrading 활성화 방법을 익힙니다",
  "지표와 차트 도구를 활용해 시장을 분석할 수 있게 됩니다",
];

const Education = () => {
  return (
    <div className="max-w-3xl">
      <PageSEO title="MT5 가이드 — 설치부터 주문까지 완전 정복" description="MetaTrader 5 가이드, 주문 방법, 지표 설정, 차트 분석까지 실전 트레이딩 가이드." path="/guides" />
      {/* 헤더 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">MT5 가이드</span>
          <ChevronRight className="w-3 h-3" />
          <span>가이드 홈</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
          MT5 완전 정복 가이드
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-5">
          MT5 설치부터 주문, 지표, 자동매매까지. 단계별로 따라가면 실제 거래 환경을 갖출 수 있습니다.
        </p>

        {/* 통계 */}
        <div className="flex flex-wrap gap-4">
          {[
            { icon: GraduationCap, label: "8개 가이드" },
            { icon: Clock, label: "약 85분" },
            { icon: CheckCircle, label: "단계별 구성" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                <span>{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <AdPlaceholder slot="가이드홈_상단" format="leaderboard" className="mb-8" />

      {/* 학습 목표 */}
      <div className="glass-card p-5 rounded-xl border border-border/50 mb-8">
        <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-primary" />
          이 가이드를 마치면
        </p>
        <ul className="space-y-2">
          {whatYouLearn.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 가이드 그룹 */}
      <div className="space-y-8 mb-8">
        {guideGroups.map((group, gi) => (
          <div key={gi}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className={`text-xs font-bold uppercase tracking-widest ${group.color}`}>{group.label}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
            </div>
            <div className="space-y-3">
              {group.guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={guide.href}
                    to={guide.href}
                    className={`glass-card group block p-5 border ${guide.border} rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg ${guide.glow}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* 스텝 번호 + 아이콘 */}
                      <div className="shrink-0 flex flex-col items-center gap-1.5">
                        <div className={`p-2.5 rounded-xl ${guide.bg}`}>
                          <Icon className={`w-5 h-5 ${guide.color}`} />
                        </div>
                        {guide.step !== undefined && (
                          <span className={`text-xs font-bold ${guide.color}`}>
                            {guide.step < 10 ? `0${guide.step}` : guide.step}
                          </span>
                        )}
                      </div>

                      {/* 콘텐츠 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {guide.title}
                          </p>
                          {guide.badge && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                              {guide.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground/60 mb-2">{guide.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {guide.desc}
                        </p>
                        {/* 세부 토픽 */}
                        <div className="flex flex-wrap gap-1.5">
                          {guide.topics.map((topic, j) => (
                            <span
                              key={j}
                              className="text-xs px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 시간 + 화살표 */}
                      <div className="shrink-0 flex flex-col items-end gap-2 pt-1">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{guide.time}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <AdPlaceholder slot="가이드홈_하단" format="rectangle" className="mb-8" />

      {/* 다음 단계: EA */}
      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">MT5 가이드 완료 후 다음 단계</p>
            <p className="text-sm text-muted-foreground mb-3">
              MT5 사용법을 익혔다면 EA(Expert Advisor) 자동매매를 시작해보세요.
            </p>
            <Link
              to="/ea"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              EA 자동매매 가이드 바로가기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
