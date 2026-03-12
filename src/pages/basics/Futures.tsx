import { TrendingUp, AlertTriangle, ChevronRight, ArrowRight, ArrowLeft, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent } from "@/components/RelatedContent";

const products = [
  {
    symbol: "NQ",
    name: "나스닥100 선물",
    exchange: "CME · 시카고",
    tick: "$5 / 틱",
    contract: "$20 × 나스닥100",
    hours: "월~금 06:00~05:00 KST",
    desc: "애플·MS·엔비디아 등 기술주 중심. 변동성이 크고 트레이더에게 가장 인기 높은 상품입니다.",
    color: "border-blue-400/30 bg-blue-400/5",
    badge: "bg-blue-400/10 text-blue-400",
  },
  {
    symbol: "ES",
    name: "S&P500 선물",
    exchange: "CME · 시카고",
    tick: "$12.5 / 틱",
    contract: "$50 × S&P500",
    hours: "월~금 06:00~05:00 KST",
    desc: "미국 대형주 500개 추종. 글로벌 시장의 기준점으로 유동성이 매우 높습니다.",
    color: "border-emerald-400/30 bg-emerald-400/5",
    badge: "bg-emerald-400/10 text-emerald-400",
  },
  {
    symbol: "GC",
    name: "금 선물",
    exchange: "COMEX · 미국",
    tick: "$10 / 틱",
    contract: "100 트로이온스",
    hours: "월~금 07:00~06:00 KST",
    desc: "경제 불확실성·달러 약세 시 강세. 안전자산 성격으로 위기 시 급등하는 경향이 있습니다.",
    color: "border-yellow-400/30 bg-yellow-400/5",
    badge: "bg-yellow-400/10 text-yellow-400",
  },
  {
    symbol: "CL",
    name: "WTI 원유 선물",
    exchange: "NYMEX · 미국",
    tick: "$10 / 틱",
    contract: "1,000 배럴",
    hours: "월~금 07:00~06:00 KST",
    desc: "OPEC 결정·글로벌 수요 변화에 민감. 지정학적 리스크에도 크게 반응합니다.",
    color: "border-orange-400/30 bg-orange-400/5",
    badge: "bg-orange-400/10 text-orange-400",
  },
];

const concepts = [
  {
    q: "선물 계약이란?",
    a: "미래의 특정 날짜에 특정 가격으로 자산을 사고팔기로 약속하는 계약입니다. 주식처럼 자산을 직접 사는 것이 아니라, 가격 변동에 베팅합니다.",
  },
  {
    q: "왜 해외선물을 거래하나요?",
    a: "레버리지를 활용해 적은 자본으로 큰 포지션을 취할 수 있고, 양방향(매수·매도) 거래가 가능합니다. 시장이 하락해도 매도 포지션으로 수익을 낼 수 있습니다.",
  },
  {
    q: "롤오버(만기)란?",
    a: "선물 계약에는 만기일이 있습니다. 만기가 되면 다음 월물로 교체(롤오버)해야 합니다. MT5 CFD 브로커는 대부분 자동 롤오버를 제공합니다.",
  },
  {
    q: "CFD 선물과 실물 선물의 차이?",
    a: "실물 선물은 CME 등 실제 거래소에서 거래합니다. CFD(차액결제거래) 선물은 브로커와 직접 거래하며 실제 만기 인도가 없습니다. MT5 브로커 대부분은 CFD 방식입니다.",
  },
];

const Futures = () => {
  return (
    <article className="max-w-3xl">
      <PageSEO title="선물거래란? 해외선물 기초 완전 정복" description="선물 계약의 개념, 만기일, 롤오버까지 해외선물 입문자가 알아야 할 모든 것을 설명합니다." path="/basics/futures" />
      {/* 브레드크럼 + 진행 표시 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/basics" className="hover:text-foreground transition-colors">기초 교육</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">해외선물 기초</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 15분</span>
          <span className="mx-1 text-border">|</span>
          <span className="text-primary font-medium">STEP 1 / 3</span>
        </div>
      </div>

      {/* 헤더 */}
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-blue-400/10 shrink-0">
          <TrendingUp className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">STEP 01</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">해외선물 기초</h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            나스닥·S&P500·금·원유 등 글로벌 선물 시장의 기본 개념과 주요 상품을 이해합니다.
          </p>
        </div>
      </div>

      {/* 진행 바 */}
      <div className="flex gap-1.5 mb-8">
        {["해외선물", "FX 외환", "레버리지"].map((step, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1 rounded-full ${i === 0 ? "bg-blue-400" : "bg-border/40"}`} />
            <p className={`text-xs mt-1 ${i === 0 ? "text-blue-400 font-medium" : "text-muted-foreground/50"}`}>
              {step}
            </p>
          </div>
        ))}
      </div>

      <AdPlaceholder slot="해외선물_상단" className="mb-8" />

      {/* 기초 개념 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
          선물 거래 기초 개념
        </h2>
        <div className="space-y-3">
          {concepts.map((item, i) => (
            <div key={i} className="glass-card p-5 border border-border/50 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1.5">{item.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 상품 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center text-xs font-bold">2</span>
          주요 거래 상품 4종
        </h2>
        <div className="space-y-4">
          {products.map((p, i) => (
            <div key={i} className={`glass-card p-5 border rounded-xl ${p.color}`}>
              <div className="flex items-start gap-3 mb-3">
                <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${p.badge}`}>
                  {p.symbol}
                </span>
                <div>
                  <p className="font-bold text-foreground text-sm">{p.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-border/30">
                {[
                  { label: "거래소", value: p.exchange },
                  { label: "틱 가치", value: p.tick },
                  { label: "계약 크기", value: p.contract },
                  { label: "거래 시간 KST", value: p.hours },
                ].map((info, j) => (
                  <div key={j}>
                    <p className="text-xs text-muted-foreground/60 mb-0.5">{info.label}</p>
                    <p className="text-xs text-foreground font-medium">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdPlaceholder slot="해외선물_중간" format="rectangle" className="mb-8" />

      {/* 주의사항 */}
      <div className="glass-card p-5 border border-yellow-500/30 bg-yellow-500/5 rounded-xl mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">시작 전 반드시 알아야 할 것</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>레버리지로 인해 손실이 투자 원금을 초과할 수 있습니다.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>미국 주요 지수는 연준(Fed) 발표·경제 지표에 크게 반응합니다.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>반드시 데모 계좌에서 충분히 연습한 후 실계좌로 이동하세요.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>본 사이트는 투자 조언을 제공하지 않습니다. 모든 거래 결정은 본인 책임입니다.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 이전/다음 내비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/basics"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>기초 교육 홈</span>
        </Link>
        <Link
          to="/basics/fx"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors group"
        >
          <span>다음: FX 외환 기초</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
          <RelatedContent items={[
          { title: "FX 외환거래 기초", description: "FX 시장 구조와 통화쌍 이해", href: "/basics/fx", badge: "기초" },
          { title: "레버리지란?", description: "증거금과 레버리지 계산 방법", href: "/basics/leverage", badge: "기초" },
          { title: "해외선물 시장 기초", description: "나스닥·금·오일 선물 시장 이해", href: "/guides/market-basics", badge: "가이드" }
        ]} />
    </article>
  );
};

export default Futures;
