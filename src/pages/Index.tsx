import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Monitor,
  ShoppingCart,
  BarChart2,
  Server,
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

import heroTrader from "@/assets/01-hero-trader.png";
import mentorStudent from "@/assets/03-mentor-student.png";
import logoMark from "@/assets/logo-mark.png";
import iconAnalysis from "@/assets/icon-analysis.png";
import iconTrading from "@/assets/icon-trading.png";
import iconSecurity from "@/assets/icon-security.png";
import { PageSEO } from "@/components/PageSEO";

const features = [
  {
    icon: iconAnalysis,
    title: "시장 분석 정보",
    desc: "해외선물·FX 시장의 기초 개념과 차트 분석 방법을 체계적으로 학습합니다.",
    href: "/basics",
  },
  {
    icon: iconTrading,
    title: "전문 트레이딩 가이드",
    desc: "MT5 플랫폼부터 EA 자동매매까지 실전에서 바로 쓸 수 있는 지식을 제공합니다.",
    href: "/guides",
  },
  {
    icon: iconSecurity,
    title: "안전한 브로커 추천",
    desc: "검증된 브로커 비교와 리스크 관리로 안전한 투자 환경을 안내합니다.",
    href: "/brokers",
  },
];

const roadmapSteps = [
  {
    step: "STEP 1",
    title: "MT5 설치 & 기본 설정",
    description:
      "MetaTrader 5를 설치하고 브로커 계좌에 연결하는 것부터 시작합니다. 화면 구성을 이해하고 차트를 설정하는 방법을 배웁니다.",
    icon: Monitor,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    links: [
      { label: "MT5 설치 가이드", href: "/guides/mt5-manual" },
      { label: "화면 구성 이해", href: "/guides/mt5-pc" },
      { label: "모바일 앱 설정", href: "/guides/mt5-mobile" },
    ],
  },
  {
    step: "STEP 2",
    title: "주문 & 거래 방법",
    description:
      "시장가 주문, 지정가 주문, 손절/익절 설정 방법을 배웁니다. 지표를 차트에 추가하고 계좌 유형을 이해합니다.",
    icon: ShoppingCart,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    links: [
      { label: "주문 유형 가이드", href: "/guides/orders" },
      { label: "지표 사용법", href: "/guides/indicators" },
      { label: "계좌 유형 이해", href: "/guides/account-types" },
    ],
  },
  {
    step: "STEP 3",
    title: "EA 자동매매",
    description:
      "Expert Advisor(EA)를 설치하고 설정하는 방법을 배웁니다. 전략 테스터로 백테스트를 실행하여 EA의 과거 성과를 검증합니다.",
    icon: Bot,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    links: [
      { label: "EA 설치 방법", href: "/ea/install" },
      { label: "EA 사용 가이드", href: "/ea/usage-guide" },
      { label: "백테스트 가이드", href: "/ea/backtest" },
    ],
  },
  {
    step: "STEP 4",
    title: "안정적 운영 환경",
    description:
      "VPS를 사용해 EA를 24시간 중단 없이 운영하는 방법을 배웁니다. 적합한 브로커를 선택하고 MQL5 마켓을 활용하는 방법도 안내합니다.",
    icon: Server,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    links: [
      { label: "VPS 설정 가이드", href: "/ea/vps" },
      { label: "브로커 비교", href: "/brokers" },
      { label: "MQL5 마켓 활용", href: "/ea/mql5-market" },
    ],
  },
];

const quickLinks = [
  { icon: BookOpen, title: "MT5 설치 가이드", desc: "설치부터 로그인까지 7단계 안내", href: "/guides/mt5-manual" },
  { icon: ShoppingCart, title: "주문 방법", desc: "시장가, 지정가, SL/TP 설정", href: "/guides/orders" },
  { icon: BarChart2, title: "지표 사용법", desc: "MT5 내장 지표 추가 및 설정", href: "/guides/indicators" },
  { icon: Bot, title: "EA 설치", desc: "EA 파일 설치부터 차트 적용까지", href: "/ea/install" },
  { icon: BarChart2, title: "백테스트 가이드", desc: "전략 테스터로 EA 성과 검증", href: "/ea/backtest" },
  { icon: Server, title: "VPS 설정", desc: "EA 24시간 자동 운영을 위한 VPS", href: "/ea/vps" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageSEO title="MT5 해외선물 트레이딩 가이드 플랫폼" description="MetaTrader 5 설치부터 EA 자동매매, 브로커 비교까지. 해외선물 입문자를 위한 단계별 가이드 플랫폼입니다." path="/" />
      <Header />
      <main className="flex-1 pt-14">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden border-b border-border/30">
          {/* 배경 이미지 */}
          <img
            src={heroTrader}
            alt="메린이 트레이더"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* 왼쪽→투명 그라디언트 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/75 to-transparent" />
          {/* 하단 페이드 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div className="max-w-lg">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                MetaTrader 5 완전 정복
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                메타트레이더5
                <br />
                <span className="text-muted-foreground font-normal">
                  사용의 모든것
                </span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                해외선물·FX 기초부터 MT5 설치,
                <br className="hidden sm:block" />
                EA 자동매매 운영까지 단계별로 안내합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/basics"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <GraduationCap className="w-4 h-4" />
                  기초부터 시작하기
                </Link>
                <Link
                  to="/guides/mt5-manual"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-background/70 backdrop-blur-sm border border-border text-sm font-medium rounded-lg hover:bg-secondary/60 transition-colors text-foreground"
                >
                  MT5 바로 설치하기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 왜 메린이인가요? ── */}
        <section className="border-b border-border/30 bg-secondary/10">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                왜 메린이인가요?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                처음 시작하는 트레이더를 위해
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <Link
                  key={i}
                  to={f.href}
                  className="glass-card group flex flex-col items-center text-center p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all hover:-translate-y-1"
                >
                  {/* 아이콘 이미지 */}
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src={f.icon}
                      alt={f.title}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                  <span className="mt-4 text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기 <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 처음부터 끝까지 함께 ── */}
        <section className="border-b border-border/30">
          <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 멘토-학생 이미지 */}
              <div className="relative">
                <img
                  src={mentorStudent}
                  alt="메린이 - 멘토와 함께하는 학습"
                  className="w-full rounded-2xl shadow-xl border border-border/20"
                  loading="lazy"
                  decoding="async"
                />
                {/* 배지 */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  입문자 맞춤 콘텐츠
                </div>
              </div>

              {/* 텍스트 */}
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                  입문자를 위한 플랫폼
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  처음부터 끝까지
                  <br />
                  함께 배웁니다
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  복잡한 해외선물·FX 거래와 MT5, 혼자 공부하기 막막하셨나요?
                  메린이는 입문자 눈높이에 맞춘 단계별 학습 콘텐츠로
                  누구나 따라올 수 있도록 안내합니다.
                </p>

                {/* 체크리스트 */}
                <ul className="space-y-2.5 mb-8">
                  {[
                    "기초 개념부터 실전 주문까지 단계별 가이드",
                    "MT5 PC·모바일 완전 정복",
                    "EA 자동매매 설치·백테스트·VPS 운영",
                    "검증된 브로커 비교 및 안전한 환경 구축",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/basics"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    기초 교육 시작하기 <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/brokers"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground text-sm font-medium rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    브로커 비교하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 학습 로드맵 ── */}
        <section className="border-b border-border/30 bg-secondary/10">
          <div className="max-w-5xl mx-auto px-4 py-16">
            {/* 헤더 + 로고 마크 */}
            <div className="flex items-center gap-5 mb-10">
              <img
                src={logoMark}
                alt="메린이 로고"
                className="w-14 h-14 object-contain opacity-90"
              />
              <div>
                <h2 className="text-xl font-bold text-foreground">학습 로드맵</h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  이 순서로 따라가면 MT5 초보자도 EA 자동매매까지 도달할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {roadmapSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className={`glass-card p-6 border ${s.border} rounded-xl`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2.5 rounded-lg ${s.bg} shrink-0`}>
                        <Icon className={`w-5 h-5 ${s.color}`} />
                      </div>
                      <div>
                        <span className={`text-xs font-semibold ${s.color} uppercase tracking-wide`}>
                          {s.step}
                        </span>
                        <h3 className="text-base font-semibold text-foreground mt-0.5">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="space-y-1.5">
                      {s.links.map((link, j) => (
                        <li key={j}>
                          <Link
                            to={link.href}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
                          >
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 자주 찾는 가이드 ── */}
        <section className="border-b border-border/30">
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-2">자주 찾는 가이드</h2>
              <p className="text-sm text-muted-foreground">
                가장 많이 참고하는 페이지를 바로 찾아보세요.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    to={item.href}
                    className="glass-card p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-all group flex items-start gap-3"
                  >
                    <div className="p-2 rounded-md bg-secondary/50 shrink-0">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/brokers"
                className="glass-card p-5 border border-border/50 rounded-xl hover:border-primary/30 transition-all group flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-secondary/50 shrink-0">
                  <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    브로커 비교
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    MT5를 지원하는 브로커 실행 환경 비교
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consult"
                className="glass-card p-5 border border-border/50 rounded-xl hover:border-primary/30 transition-all group flex items-center gap-4"
              >
                <div className="p-3 rounded-lg bg-secondary/50 shrink-0">
                  <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    1:1 문의
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    MT5 설정, EA 관련 기술적 문의
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
