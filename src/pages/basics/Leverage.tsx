import { Layers, AlertTriangle, ChevronRight, ArrowRight, ArrowLeft, Clock, Info, XCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { AdPlaceholder } from "@/components/AdPlaceholder";

const leverageExamples = [
  {
    leverage: "1:1",
    label: "레버리지 없음",
    capital: "$10,000",
    position: "$10,000",
    move: "1% 하락",
    loss: "-$100",
    lossRate: "-1%",
    risk: "안전",
    color: "border-border/50",
    lossColor: "text-foreground",
    icon: null,
  },
  {
    leverage: "1:10",
    label: "낮은 레버리지",
    capital: "$1,000",
    position: "$10,000",
    move: "1% 하락",
    loss: "-$100",
    lossRate: "-10%",
    risk: "주의",
    color: "border-yellow-400/30 bg-yellow-400/5",
    lossColor: "text-yellow-400",
    icon: null,
  },
  {
    leverage: "1:100",
    label: "높은 레버리지",
    capital: "$1,000",
    position: "$100,000",
    move: "1% 하락",
    loss: "-$1,000",
    lossRate: "-100%",
    risk: "위험",
    color: "border-red-500/30 bg-red-500/5",
    lossColor: "text-red-400",
    icon: XCircle,
  },
  {
    leverage: "1:500",
    label: "극단적 레버리지",
    capital: "$1,000",
    position: "$500,000",
    move: "0.2% 하락",
    loss: "-$1,000",
    lossRate: "-100%",
    risk: "매우위험",
    color: "border-red-600/40 bg-red-600/10",
    lossColor: "text-red-500",
    icon: XCircle,
  },
];

const marginTerms = [
  { term: "마진 (Margin)", desc: "포지션을 여는 데 필요한 보증금. 포지션 규모 ÷ 레버리지로 계산됩니다." },
  { term: "사용 마진 (Used Margin)", desc: "현재 열린 포지션들이 사용 중인 마진 합계." },
  { term: "잔여 마진 (Free Margin)", desc: "계좌 잔액 중 포지션에 묶이지 않은 자유 마진. 새 포지션 진입 시 이 금액을 사용합니다." },
  { term: "마진 레벨 (Margin Level)", desc: "Equity ÷ Used Margin × 100%. 낮을수록 위험합니다. 200% 이상 유지를 권장합니다." },
  { term: "마진콜 (Margin Call)", desc: "마진 레벨이 기준(보통 100%) 이하로 떨어지면 브로커가 경고를 보냅니다." },
  { term: "스탑아웃 (Stop Out)", desc: "마진 레벨이 스탑아웃 기준(보통 50%) 이하로 떨어지면 포지션이 강제 청산됩니다." },
];

const riskRules = [
  { num: 1, rule: "거래당 리스크를 계좌의 1~2% 이내로 제한하세요.", highlight: false },
  { num: 2, rule: "레버리지가 높다고 큰 포지션을 잡지 마세요. 포지션 크기는 SL 거리로 계산하세요.", highlight: false },
  { num: 3, rule: "잔여 마진(Free Margin)을 항상 여유 있게 유지하세요. 마진 레벨 200% 이상을 권장합니다.", highlight: false },
  { num: 4, rule: "포지션 진입 전 최대 손실액을 계산하고, 감당 가능한 금액인지 확인하세요.", highlight: false },
  { num: 5, rule: "SL(손절)을 항상 설정하세요. SL 없는 레버리지 거래는 계좌를 날릴 수 있습니다.", highlight: true },
];

const Leverage = () => {
  return (
    <article className="max-w-3xl">
      {/* 브레드크럼 + 진행 표시 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/basics" className="hover:text-foreground transition-colors">기초 교육</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">레버리지 & 마진</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 20분</span>
          <span className="mx-1 text-border">|</span>
          <span className="text-primary font-medium">STEP 3 / 3</span>
        </div>
      </div>

      {/* 헤더 */}
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-orange-400/10 shrink-0">
          <Layers className="w-6 h-6 text-orange-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-1">STEP 03 · 필수</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">레버리지 & 마진</h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            레버리지는 해외선물·FX 거래에서 가장 강력하면서도 가장 위험한 도구입니다.
            반드시 이해하고 시작하세요.
          </p>
        </div>
      </div>

      {/* 진행 바 */}
      <div className="flex gap-1.5 mb-8">
        {["해외선물", "FX 외환", "레버리지"].map((step, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1 rounded-full ${i <= 2 ? "bg-orange-400" : "bg-border/40"}`} />
            <p className={`text-xs mt-1 ${i <= 2 ? "text-orange-400 font-medium" : "text-muted-foreground/50"}`}>
              {step}
            </p>
          </div>
        ))}
      </div>

      <AdPlaceholder slot="레버리지_상단" className="mb-8" />

      {/* 레버리지란? */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange-400/10 text-orange-400 flex items-center justify-center text-xs font-bold">1</span>
          레버리지란?
        </h2>
        <div className="glass-card p-6 border border-border/50 rounded-xl">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              레버리지는 내 자본보다 훨씬 큰 포지션을 취할 수 있게 해주는 장치입니다.
              <strong className="text-foreground"> 1:100 레버리지</strong>면 $1,000으로 $100,000 규모의 포지션을 만들 수 있습니다.
              수익도 100배가 되지만, <strong className="text-red-400">손실도 100배</strong>가 됩니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-orange-400/5 border border-orange-400/20 text-xs text-center">
              <p className="text-muted-foreground mb-0.5">포지션 규모 계산</p>
              <p className="font-mono font-bold text-foreground">내 자본 × 레버리지 배율</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-400/5 border border-orange-400/20 text-xs text-center">
              <p className="text-muted-foreground mb-0.5">마진 계산</p>
              <p className="font-mono font-bold text-foreground">포지션 규모 ÷ 레버리지</p>
            </div>
          </div>
        </div>
      </section>

      {/* 레버리지별 리스크 비교 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange-400/10 text-orange-400 flex items-center justify-center text-xs font-bold">2</span>
          레버리지별 실제 리스크 비교
        </h2>
        <p className="text-sm text-muted-foreground mb-4 ml-8">예시: 자본 $1,000, 시장 1% 하락 시 손실</p>
        <div className="space-y-3">
          {leverageExamples.map((ex, i) => {
            const Icon = ex.icon;
            return (
              <div key={i} className={`glass-card p-4 border rounded-xl ${ex.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-foreground text-sm">{ex.leverage}</span>
                    <span className="text-xs text-muted-foreground">({ex.label})</span>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    ex.risk === "안전" ? "bg-emerald-400/10 text-emerald-400"
                    : ex.risk === "주의" ? "bg-yellow-400/10 text-yellow-400"
                    : "bg-red-400/10 text-red-400"
                  }`}>
                    {ex.risk}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {[
                    { label: "내 자본", value: ex.capital, color: "" },
                    { label: "포지션 규모", value: ex.position, color: "" },
                    { label: "가격 변동", value: ex.move, color: "" },
                    { label: "손실", value: `${ex.loss} (${ex.lossRate})`, color: ex.lossColor },
                  ].map((col, j) => (
                    <div key={j}>
                      <p className="text-muted-foreground/60 mb-0.5">{col.label}</p>
                      <p className={`font-semibold ${col.color || "text-foreground"}`}>{col.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AdPlaceholder slot="레버리지_중간" format="rectangle" className="mb-8" />

      {/* 마진 용어 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange-400/10 text-orange-400 flex items-center justify-center text-xs font-bold">3</span>
          마진 관련 용어
        </h2>
        <div className="space-y-2.5">
          {marginTerms.map((item, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl flex items-start gap-3">
              <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-0.5">{item.term}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 리스크 관리 5원칙 */}
      <section className="mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange-400/10 text-orange-400 flex items-center justify-center text-xs font-bold">4</span>
          레버리지 리스크 관리 5원칙
        </h2>
        <div className="glass-card p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
          <ul className="space-y-3">
            {riskRules.map((rule) => (
              <li key={rule.num} className={`flex items-start gap-3 text-sm ${rule.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5 ${
                  rule.highlight ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-500/10 text-emerald-400"
                }`}>
                  {rule.num}
                </span>
                <span className={rule.highlight ? "font-semibold" : ""}>{rule.rule}</span>
                {rule.highlight && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 핵심 경고 */}
      <div className="glass-card p-5 border border-red-500/30 bg-red-500/5 rounded-xl mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">절대 지켜야 할 원칙</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              레버리지는 수익도 키우지만 손실도 정비례로 키웁니다.
              <strong className="text-foreground"> 높은 레버리지 = 높은 수익</strong>이 아니라,
              <strong className="text-red-400"> 높은 레버리지 = 더 빠른 계좌 소진</strong>입니다.
              전문 트레이더도 실제 사용 레버리지는 <strong className="text-foreground">1:5~1:20 수준</strong>으로 유지합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 상담 CTA */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 mb-6">
        <div>
          <p className="text-sm font-semibold text-foreground">레버리지·증거금이 헷갈리나요?</p>
          <p className="text-xs text-muted-foreground mt-0.5">실전 설정과 리스크 관리를 1:1로 도와드립니다.</p>
        </div>
        <Link
          to="/consult"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
        >
          무료 상담
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 이전/다음 내비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/basics/fx"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>이전: FX 외환 기초</span>
        </Link>
        <Link
          to="/basics/glossary"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors group"
        >
          <span>용어사전 보기</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default Leverage;
