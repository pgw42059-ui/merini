import { Link } from "react-router-dom";
import { Layers, CheckCircle2, XCircle, AlertTriangle, Info, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const types = [
  {
    name: "헤징 계좌 (Hedging Account)",
    desc: "같은 심볼에 매수/매도 포지션을 동시에 보유할 수 있습니다. 대부분의 MT5 브로커에서 기본 제공합니다.",
    pros: [
      "매수와 매도를 동시에 보유 가능",
      "포지션별로 개별 SL/TP 설정",
      "여러 EA를 같은 심볼에 동시 운영 가능",
      "Lock(잠금) 전략 사용 가능",
    ],
    cons: [
      "포지션이 많아지면 관리가 복잡",
      "스프레드가 중복으로 발생할 수 있음",
    ],
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    recommend: "대부분의 소매 트레이더, EA 자동매매 사용자",
  },
  {
    name: "네팅 계좌 (Netting Account)",
    desc: "같은 심볼에 하나의 포지션만 유지됩니다. 반대 방향 주문 시 기존 포지션이 상쇄(Netting)됩니다.",
    pros: [
      "포지션이 단순하게 유지됨",
      "증거금 사용이 효율적",
    ],
    cons: [
      "매수/매도 동시 보유 불가",
      "여러 EA를 같은 심볼에 운영 시 서로 간섭",
      "개별 포지션 관리 어려움",
    ],
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
    recommend: "기관 트레이더, 선물 거래 전문가",
  },
];

const examples = [
  {
    scenario: "헤징 계좌에서 EURUSD 0.1 lot 매수 후, 0.1 lot 매도 주문 시",
    result: "두 포지션이 모두 유지됩니다. 총 2개의 포지션. 순 익스포저는 0이지만 각각 별도로 관리됩니다.",
    type: "hedging",
  },
  {
    scenario: "네팅 계좌에서 EURUSD 0.1 lot 매수 후, 0.1 lot 매도 주문 시",
    result: "두 포지션이 상쇄(Netting)되어 포지션이 0이 됩니다. 사실상 청산과 같습니다.",
    type: "netting",
  },
  {
    scenario: "네팅 계좌에서 EURUSD 0.2 lot 매수 후, 0.1 lot 매도 주문 시",
    result: "0.2 - 0.1 = 0.1 lot 매수 포지션만 남습니다.",
    type: "netting",
  },
];

const howToCheck = [
  "MT5에서 새 계좌를 만들 때 계좌 유형을 선택할 수 있습니다.",
  "기존 계좌의 유형은 MT5 툴바 → 계좌 정보(Account Info) 또는 브로커 포털에서 확인 가능합니다.",
  "계좌 유형은 생성 후 변경할 수 없습니다. 필요하면 새 계좌를 개설해야 합니다.",
];

const AccountTypes = () => {
  return (
    <div className="max-w-3xl">

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">계좌 유형</span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide">
            STEP 6
          </span>
          <span className="text-xs text-muted-foreground">거래 방법 · 3/3</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 10분</span>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="flex gap-1 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-1 flex-1 rounded-full bg-orange-500" />
        ))}
      </div>

      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-orange-500/10">
          <Layers className="w-6 h-6 text-orange-400" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">MT5 계좌 유형</h1>
        </div>
        <span className="ml-auto text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 font-semibold border border-orange-500/20">
          필수
        </span>
      </div>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        MT5에는 헤징(Hedging)과 네팅(Netting) 두 가지 계좌 유형이 있습니다.
        EA 자동매매를 사용한다면 계좌 유형이 매우 중요합니다.
      </p>

      {/* Account Types */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">계좌 유형 비교</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {types.map((t, i) => (
            <div key={i} className={`glass-card p-5 border ${t.border} ${t.bg} rounded-xl`}>
              <p className={`text-base font-bold ${t.color} mb-2`}>{t.name}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.desc}</p>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-medium text-green-400 mb-1.5">장점</p>
                  <ul className="space-y-1">
                    {t.pros.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-red-400 mb-1.5">단점</p>
                  <ul className="space-y-1">
                    {t.cons.map((c, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <XCircle className="w-3 h-3 text-red-400 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary/30 text-xs text-muted-foreground">
                <span className="text-foreground font-medium">추천 대상: </span>
                {t.recommend}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">실전 예시</h2>
        <div className="space-y-3">
          {examples.map((ex, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    ex.type === "hedging"
                      ? "bg-blue-400/10 text-blue-400"
                      : "bg-orange-400/10 text-orange-400"
                  }`}
                >
                  {ex.type === "hedging" ? "헤징" : "네팅"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="text-foreground font-medium">상황: </span>
                {ex.scenario}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">결과: </span>
                {ex.result}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to check */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">계좌 유형 확인 방법</h2>
        <div className="glass-card p-6 border border-border/50 rounded-xl">
          <ol className="space-y-3">
            {howToCheck.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-foreground text-xs font-medium shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Key takeaway */}
      <div className="glass-card p-5 border border-yellow-500/30 bg-yellow-500/5 rounded-xl mb-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-2">EA 사용 시 주의사항</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• 여러 EA를 같은 심볼에 운영할 경우 <strong className="text-foreground">헤징 계좌</strong>를 사용해야 서로 간섭하지 않습니다.</li>
              <li>• 네팅 계좌에서는 EA A가 연 포지션을 EA B가 청산할 수 있어 의도치 않은 결과가 생깁니다.</li>
              <li>• EA 판매자가 특정 계좌 유형을 요구하는 경우 해당 유형을 사용하세요.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10 flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
        <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
        <span>국내 대부분의 해외선물 브로커는 헤징 계좌를 기본으로 제공합니다. 브로커에 따라 계좌 유형 선택이 불가능한 경우도 있습니다.</span>
      </div>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/guides/indicators"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>지표 사용법</span>
        </Link>
        <Link
          to="/guides/shortcuts"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: 단축키 모음</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default AccountTypes;
