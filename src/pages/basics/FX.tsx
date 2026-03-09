import { DollarSign, AlertTriangle, ChevronRight, ArrowRight, ArrowLeft, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { AdPlaceholder } from "@/components/AdPlaceholder";

const majorPairs = [
  {
    pair: "EUR/USD",
    name: "유로 / 미국달러",
    spread: "낮음",
    volatility: "중간",
    desc: "세계에서 거래량이 가장 많은 통화쌍. 스프레드가 낮고 유동성이 높아 입문자에게 가장 적합합니다.",
    color: "border-blue-400/30 bg-blue-400/5",
    badge: "bg-blue-400/10 text-blue-400",
    recommend: true,
  },
  {
    pair: "GBP/USD",
    name: "영국파운드 / 미국달러",
    spread: "중간",
    volatility: "높음",
    desc: "변동성이 크고 장 중 큰 움직임이 있습니다. EUR/USD보다 스프레드가 높아 경험이 필요합니다.",
    color: "border-purple-400/30 bg-purple-400/5",
    badge: "bg-purple-400/10 text-purple-400",
    recommend: false,
  },
  {
    pair: "USD/JPY",
    name: "미국달러 / 일본엔",
    spread: "낮음",
    volatility: "중간",
    desc: "미·일 금리 차이에 민감합니다. 안전자산 성격으로 위기 시 엔화 강세 경향이 있습니다.",
    color: "border-red-400/30 bg-red-400/5",
    badge: "bg-red-400/10 text-red-400",
    recommend: false,
  },
  {
    pair: "AUD/USD",
    name: "호주달러 / 미국달러",
    spread: "중간",
    volatility: "높음",
    desc: "금·철광석 등 원자재 가격과 연동되는 경향이 있습니다. 중국 경제 영향을 크게 받습니다.",
    color: "border-emerald-400/30 bg-emerald-400/5",
    badge: "bg-emerald-400/10 text-emerald-400",
    recommend: false,
  },
];

const concepts = [
  {
    title: "통화쌍이란?",
    desc: "FX는 항상 두 통화를 비교합니다. EUR/USD = '1유로가 몇 달러인가'. EUR이 기준통화(Base), USD가 견적통화(Quote)입니다.",
    example: "EUR/USD = 1.0850 → 1유로 = 1.085달러",
  },
  {
    title: "환율은 왜 변하나요?",
    desc: "금리 차이, 경제 지표(GDP, CPI, NFP), 정치적 이벤트, 중앙은행 발표, 글로벌 리스크 선호도 등이 환율을 움직입니다.",
    example: "미국 금리 인상 → 달러 강세 → EUR/USD 하락",
  },
  {
    title: "매수(Buy)와 매도(Sell)",
    desc: "EUR/USD를 Buy = 유로 매수 + 달러 매도. EUR/USD가 오르면 이익. 반대로 Sell = EUR/USD가 내릴 때 이익.",
    example: "1.0800에 Buy → 1.0900에 Close = +100 pip 이익",
  },
  {
    title: "Pip(핍)이란?",
    desc: "FX에서 가격 변동의 최소 단위입니다. EUR/USD의 경우 1 pip = 0.0001. Standard lot(10만 단위) 기준 1 pip = $10 손익.",
    example: "EUR/USD 1.0800 → 1.0810 = +10 pip",
  },
  {
    title: "FX 거래 시간",
    desc: "FX 시장은 24시간 운영됩니다. 런던·뉴욕 세션이 겹치는 시간(22:00~01:00 KST)에 변동성이 가장 큽니다.",
    example: "뉴욕 세션: 22:00~07:00 KST (서머타임 1시간 앞당겨짐)",
  },
];

const FX = () => {
  return (
    <article className="max-w-3xl">
      {/* 브레드크럼 + 진행 표시 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/basics" className="hover:text-foreground transition-colors">기초 교육</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">FX 외환 기초</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 15분</span>
          <span className="mx-1 text-border">|</span>
          <span className="text-primary font-medium">STEP 2 / 3</span>
        </div>
      </div>

      {/* 헤더 */}
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-emerald-400/10 shrink-0">
          <DollarSign className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">STEP 02</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">FX 외환 기초</h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            하루 약 7조 달러가 거래되는 세계 최대 금융 시장. 통화쌍의 구조와 환율이 움직이는 이유를 이해합니다.
          </p>
        </div>
      </div>

      {/* 진행 바 */}
      <div className="flex gap-1.5 mb-8">
        {["해외선물", "FX 외환", "레버리지"].map((step, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1 rounded-full ${i <= 1 ? "bg-emerald-400" : "bg-border/40"}`} />
            <p className={`text-xs mt-1 ${i <= 1 ? "text-emerald-400 font-medium" : "text-muted-foreground/50"}`}>
              {step}
            </p>
          </div>
        ))}
      </div>

      <AdPlaceholder slot="FX_상단" className="mb-8" />

      {/* 기초 개념 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center text-xs font-bold">1</span>
          FX 거래 기본 개념
        </h2>
        <div className="space-y-3">
          {concepts.map((item, i) => (
            <div key={i} className="glass-card p-5 border border-border/50 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm mb-1.5">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-400/5 border border-emerald-400/20 text-xs text-emerald-400 font-mono">
                    예) {item.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 통화쌍 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center text-xs font-bold">2</span>
          주요 통화쌍
        </h2>
        <p className="text-sm text-muted-foreground mb-4 ml-8">입문자에게는 <span className="text-foreground font-medium">EUR/USD</span>부터 시작하는 것을 권장합니다.</p>
        <div className="space-y-3">
          {majorPairs.map((p, i) => (
            <div key={i} className={`glass-card p-4 border rounded-xl ${p.color}`}>
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <span className={`text-sm font-mono font-bold px-2 py-1 rounded ${p.badge}`}>
                    {p.pair}
                  </span>
                  {p.recommend && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      입문 추천
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground/60 mb-1">{p.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="flex gap-3 mt-2">
                    <span className="text-xs text-muted-foreground">스프레드 <span className="text-foreground font-medium">{p.spread}</span></span>
                    <span className="text-xs text-muted-foreground">변동성 <span className="text-foreground font-medium">{p.volatility}</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdPlaceholder slot="FX_중간" format="rectangle" className="mb-8" />

      {/* FX vs 해외선물 비교 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center text-xs font-bold">3</span>
          FX vs 해외선물 비교
        </h2>
        <div className="glass-card border border-border/50 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/30">
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground">항목</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-emerald-400">FX</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-blue-400">해외선물</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {[
                ["거래 대상", "통화쌍", "지수/상품/채권"],
                ["만기일", "없음 (스왑 발생)", "있음 (월물 교체)"],
                ["거래 시간", "24시간 (주말 제외)", "상품별 상이"],
                ["스프레드", "낮음 (유동성 높음)", "보통"],
                ["레버리지", "최대 1:500 (브로커별)", "최대 1:500 (브로커별)"],
                ["주요 영향", "금리·경제지표·정치", "지수·상품 수급·경제"],
              ].map(([label, fx, futures], i) => (
                <tr key={i} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground text-xs font-medium">{label}</td>
                  <td className="px-4 py-3 text-center text-xs text-foreground">{fx}</td>
                  <td className="px-4 py-3 text-center text-xs text-foreground">{futures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 주의사항 */}
      <div className="glass-card p-5 border border-yellow-500/30 bg-yellow-500/5 rounded-xl mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">주의사항</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>고레버리지 FX 거래는 원금 전액 손실이 가능합니다.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>NFP·CPI·FOMC 발표 직후에는 급격한 가격 변동이 발생합니다.</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 shrink-0">•</span>입문자는 EUR/USD처럼 스프레드가 낮은 메이저 페어부터 시작하세요.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 이전/다음 내비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/basics/futures"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>이전: 해외선물 기초</span>
        </Link>
        <Link
          to="/basics/leverage"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors group"
        >
          <span>다음: 레버리지 & 마진</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default FX;
