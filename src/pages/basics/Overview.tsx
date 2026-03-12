import { Link } from "react-router-dom";
import {
  TrendingUp,
  DollarSign,
  Layers,
  BookOpen,
  ArrowRight,
  Clock,
  GraduationCap,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { PageSEO } from "@/components/PageSEO";

const courses = [
  {
    step: 1,
    icon: TrendingUp,
    title: "해외선물 기초",
    subtitle: "Overseas Futures",
    desc: "나스닥·S&P500·금·원유 등 글로벌 선물 시장의 구조와 거래 방식을 이해합니다.",
    href: "/basics/futures",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    glow: "hover:shadow-blue-500/10",
    topics: ["선물 계약의 개념", "주요 거래 상품 4종", "CFD vs 실물 선물", "롤오버(만기) 이해"],
    time: "15분",
    badge: null,
  },
  {
    step: 2,
    icon: DollarSign,
    title: "FX 외환 기초",
    subtitle: "Foreign Exchange",
    desc: "하루 7조 달러가 거래되는 세계 최대 금융 시장. 통화쌍과 환율의 움직임을 파악합니다.",
    href: "/basics/fx",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    glow: "hover:shadow-emerald-500/10",
    topics: ["통화쌍 구조 이해", "환율이 움직이는 이유", "주요 4대 통화쌍", "FX vs 해외선물 비교"],
    time: "15분",
    badge: null,
  },
  {
    step: 3,
    icon: Layers,
    title: "레버리지 & 마진",
    subtitle: "Leverage & Margin",
    desc: "레버리지는 가장 강력하면서도 가장 위험한 도구입니다. 반드시 이해하고 시작하세요.",
    href: "/basics/leverage",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    glow: "hover:shadow-orange-500/10",
    topics: ["레버리지 배율별 리스크", "마진·마진콜·스탑아웃", "리스크 관리 5원칙", "적정 레버리지 수준"],
    time: "20분",
    badge: "필수",
  },
  {
    step: 4,
    icon: BookOpen,
    title: "트레이딩 용어사전",
    subtitle: "Trading Glossary",
    desc: "Pip, Lot, Spread, SL/TP, EA, Drawdown… 30개 이상의 핵심 용어를 검색·정리합니다.",
    href: "/basics/glossary",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    glow: "hover:shadow-purple-500/10",
    topics: ["기본 가격 용어", "주문 유형 용어", "마진/레버리지 용어", "EA·자동매매 용어"],
    time: "참고용",
    badge: null,
  },
];

const whatYouLearn = [
  "해외선물·FX 시장이 어떻게 돌아가는지 이해합니다",
  "레버리지와 마진의 위험성을 체감하고 관리법을 배웁니다",
  "MT5를 시작하기 전 꼭 알아야 할 개념들을 정리합니다",
  "트레이딩 용어를 보고 바로 뜻을 이해할 수 있게 됩니다",
];

const BasicsOverview = () => {
  return (
    <div className="max-w-3xl">
      <PageSEO title="해외선물 기초 교육 — MT5 입문 가이드" description="선물거래, FX, 레버리지 등 해외선물 핵심 개념을 초보자 눈높이로 설명합니다." path="/basics" />
      {/* 헤더 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">기초 교육</span>
          <ChevronRight className="w-3 h-3" />
          <span>코스 홈</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
          해외선물·FX 기초 교육
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-5">
          MT5로 해외선물·FX를 거래하기 전에 반드시 알아야 할 기본 개념들을 정리했습니다.
          처음이라면 순서대로 따라가세요.
        </p>

        {/* 통계 */}
        <div className="flex flex-wrap gap-4">
          {[
            { icon: GraduationCap, label: "4개 강의" },
            { icon: Clock, label: "약 50분" },
            { icon: CheckCircle, label: "입문자 맞춤" },
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

      <AdPlaceholder slot="기초교육_상단" format="leaderboard" className="mb-8" />

      {/* 학습 목표 */}
      <div className="glass-card p-5 rounded-xl border border-border/50 mb-8">
        <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-primary" />
          이 코스를 마치면
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

      {/* 강의 목록 */}
      <div className="space-y-4 mb-8">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <Link
              key={course.step}
              to={course.href}
              className={`glass-card group block p-5 border ${course.border} rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg ${course.glow}`}
            >
              <div className="flex items-start gap-4">
                {/* 스텝 번호 + 아이콘 */}
                <div className="shrink-0 flex flex-col items-center gap-1.5">
                  <div className={`p-2.5 rounded-xl ${course.bg}`}>
                    <Icon className={`w-5 h-5 ${course.color}`} />
                  </div>
                  <span className={`text-xs font-bold ${course.color}`}>
                    {typeof course.step === "number" ? `0${course.step}` : course.step}
                  </span>
                </div>

                {/* 콘텐츠 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </p>
                    {course.badge && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground/60 mb-2">{course.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {course.desc}
                  </p>
                  {/* 세부 토픽 */}
                  <div className="flex flex-wrap gap-1.5">
                    {course.topics.map((topic, j) => (
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
                    <span>{course.time}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <AdPlaceholder slot="기초교육_하단" format="rectangle" className="mb-8" />

      {/* 다음 단계 */}
      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-sm font-semibold text-foreground mb-1">기초 학습 완료 후 다음 단계</p>
        <p className="text-sm text-muted-foreground mb-3">
          기초 개념을 이해했다면 MT5를 설치하고 실제 거래 환경을 세팅해보세요.
        </p>
        <Link
          to="/guides/mt5-manual"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          MT5 설치 가이드 바로가기 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BasicsOverview;
