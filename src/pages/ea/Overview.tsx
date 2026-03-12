import { Link } from "react-router-dom";
import { Bot, Download, Settings, BarChart3, Server, ShoppingBag, ArrowRight, AlertTriangle } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const guides = [
  {
    icon: Download,
    title: "EA 설치 방법",
    desc: "MQL5 마켓에서 다운로드한 EA 파일을 MT5에 설치하고 차트에 적용하는 전체 과정을 안내합니다.",
    href: "/ea/install",
    badge: null,
  },
  {
    icon: Settings,
    title: "EA 사용 가이드",
    desc: "EA 파라미터 설정, Lot Size, Magic Number, 자동매매 버튼 활성화 방법을 상세히 설명합니다.",
    href: "/ea/usage-guide",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "백테스트 가이드",
    desc: "MT5 전략 테스터를 사용해 EA의 과거 성과를 검증하고 주요 지표를 해석하는 방법을 안내합니다.",
    href: "/ea/backtest",
    badge: null,
  },
  {
    icon: Server,
    title: "VPS 설정 가이드",
    desc: "EA를 24시간 중단 없이 운영하기 위한 VPS 환경 구축 방법과 MT5 원격 설정을 안내합니다.",
    href: "/ea/vps",
    badge: "필수",
  },
  {
    icon: ShoppingBag,
    title: "MQL5 마켓 활용법",
    desc: "MQL5 마켓에서 EA와 지표를 검색하고, 평가하고, 구매하는 방법을 단계별로 안내합니다.",
    href: "/ea/mql5-market",
    badge: null,
  },
];

const EAOverview = () => {
  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <PageSEO title="EA 자동매매 완전 정복 — MT5 Expert Advisor" description="MetaTrader 5 EA 자동매매 설치, 설정, 백테스트, VPS 운영까지 완전 가이드." path="/ea"
        faqs={[
          { question: "EA 자동매매란 무엇인가요?", answer: "EA(Expert Advisor)는 MetaTrader 5에서 실행되는 자동매매 프로그램입니다. 미리 설정한 조건에 따라 자동으로 매수/매도 주문을 실행합니다." },
          { question: "EA 사용에 코딩 지식이 필요한가요?", answer: "아닙니다. MQL5 마켓에서 이미 만들어진 EA를 구매하거나 무료로 다운로드해 사용할 수 있습니다. 코딩 없이 MT5에 설치하고 파라미터만 설정하면 됩니다." },
          { question: "EA를 24시간 운영하려면 어떻게 해야 하나요?", answer: "VPS(가상 사설 서버)를 사용하면 컴퓨터를 끄더라도 24시간 EA를 운영할 수 있습니다. 월 $10~30 수준의 비용으로 안정적인 자동매매 환경을 구축할 수 있습니다." },
          { question: "백테스트란 무엇이고 왜 필요한가요?", answer: "백테스트는 EA 전략을 과거 가격 데이터로 시뮬레이션해 성과를 검증하는 과정입니다. 실제 자금을 투입하기 전에 반드시 백테스트로 전략의 수익성과 리스크를 확인해야 합니다." },
        ]}
      />
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            EA 자동매매
          </h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Expert Advisor(EA)는 MT5에서 실행되는 자동매매 프로그램입니다.
          설치, 설정, 백테스트, 24시간 운영까지 단계별로 안내합니다.
        </p>
      </div>

      {/* Warning */}
      <div className="glass-card p-4 border border-yellow-500/30 bg-yellow-500/5 mb-10">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">실전 적용 전 반드시</p>
            <p className="text-xs text-muted-foreground">
              EA의 과거 성과가 미래 수익을 보장하지 않습니다.
              데모 계좌에서 충분히 테스트한 후 실계좌에 적용하세요.
              본인의 리스크 허용 범위 내에서만 운영하세요.
            </p>
          </div>
        </div>
      </div>

      {/* Guide List */}
      <div className="space-y-3">
        {guides.map((guide, i) => {
          const Icon = guide.icon;
          return (
            <Link
              key={i}
              to={guide.href}
              className="glass-card p-5 border border-border/50 rounded-xl hover:border-primary/30 transition-all group flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-secondary/50 shrink-0">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {guide.title}
                  </p>
                  {guide.badge && (
                    <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                      {guide.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{guide.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          );
        })}
      </div>

      {/* Bottom tip */}
      <div className="mt-10 p-4 rounded-lg bg-secondary/30 border border-border/50">
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">처음이라면?</span>{" "}
          EA 설치 방법부터 시작하여 사용 가이드 → 백테스트 → VPS 설정 순서로 진행하는 것을 권장합니다.
        </p>
      </div>

      {/* 상담 CTA */}
      <div className="mt-4 flex items-center justify-between gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5">
        <div>
          <p className="text-sm font-semibold text-foreground">EA 설정이 막히나요?</p>
          <p className="text-xs text-muted-foreground mt-0.5">설치부터 파라미터 설정까지 1:1로 도와드립니다.</p>
        </div>
        <Link
          to="/consult"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
        >
          무료 상담
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      <RelatedContent items={[
          { title: "EA 설치 방법", description: "EA 파일 설치부터 차트 적용까지", href: "/ea/install", badge: "설치" },
          { title: "백테스트 가이드", description: "전략 테스터로 EA 성과 검증", href: "/ea/backtest", badge: "검증" },
          { title: "VPS 설정", description: "24시간 자동매매를 위한 VPS", href: "/ea/vps", badge: "운영" }
        ]} />
    </div>
  );
};

export default EAOverview;
