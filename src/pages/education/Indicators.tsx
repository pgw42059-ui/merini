import { Link } from "react-router-dom";
import { BarChart2, Plus, Settings, Trash2, Info, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const builtinIndicators = [
  {
    category: "추세 추종",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    items: [
      { name: "Moving Average (MA)", desc: "일정 기간의 평균 가격을 연결한 선. 추세 방향과 지지/저항 역할을 합니다." },
      { name: "Bollinger Bands", desc: "MA를 중심으로 표준편차 상하에 밴드를 그립니다. 변동성과 가격 위치를 파악합니다." },
      { name: "Parabolic SAR", desc: "추세 방향과 함께 이동하는 점 표시. 추세 전환 신호로 사용합니다." },
      { name: "Ichimoku Kinko Hyo", desc: "다양한 지지/저항과 추세 강도를 한눈에 보여주는 복합 지표입니다." },
    ],
  },
  {
    category: "오실레이터 (모멘텀)",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    items: [
      { name: "RSI (Relative Strength Index)", desc: "0~100 사이에서 과매수(70↑), 과매도(30↓) 구간을 표시합니다." },
      { name: "MACD", desc: "두 이동평균의 차이와 시그널선을 이용해 추세 전환을 포착합니다." },
      { name: "Stochastic Oscillator", desc: "현재 가격이 일정 기간 고가/저가 범위 내 어디에 있는지 표시합니다." },
      { name: "CCI (Commodity Channel Index)", desc: "평균 가격과의 편차를 측정합니다. ±100을 기준으로 과매수/과매도를 판단합니다." },
    ],
  },
  {
    category: "변동성",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    items: [
      { name: "ATR (Average True Range)", desc: "평균 변동폭을 나타냅니다. SL 거리 설정이나 시장 변동성 파악에 활용합니다." },
    ],
  },
  {
    category: "거래량",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    items: [
      { name: "Volumes", desc: "틱 거래량을 막대 차트로 표시합니다. 거래 활동성을 파악할 수 있습니다." },
      { name: "On Balance Volume (OBV)", desc: "가격 방향에 따라 거래량을 누적합니다. 추세 확인에 사용합니다." },
    ],
  },
];

const howToAdd = [
  "차트를 오른쪽 클릭 → 지표 추가(Add Indicator) 선택.",
  "또는 MT5 상단 메뉴 → 삽입(Insert) → 지표(Indicators) 에서 선택.",
  "또는 네비게이터(Navigator) 창에서 Indicators 항목을 차트로 드래그.",
  "지표 설정 창에서 파라미터(기간, 색상 등)를 조정하고 OK를 클릭합니다.",
];

const howToManage = [
  { action: "설정 변경", desc: "차트에서 지표를 더블클릭하면 설정 창이 열립니다." },
  { action: "지표 삭제", desc: "차트 오른쪽 클릭 → 지표 목록(Indicators List) → 삭제할 지표 선택 후 Delete." },
  { action: "지표 표시/숨기기", desc: "지표 목록에서 눈 아이콘을 클릭하여 표시/숨기기를 전환합니다." },
  { action: "서브 창 지표", desc: "RSI, MACD 등은 차트 아래 별도의 서브 창에 표시됩니다. 서브 창 높이는 드래그로 조정 가능합니다." },
];

const Indicators = () => {
  return (
    <div className="max-w-3xl">

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">지표 사용법</span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-yellow-500 text-black text-xs font-bold tracking-wide">
            STEP 5
          </span>
          <span className="text-xs text-muted-foreground">거래 방법 · 2/3</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 15분</span>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="flex gap-1 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`h-1 flex-1 rounded-full ${n <= 2 ? "bg-yellow-500" : "bg-border/50"}`} />
        ))}
      </div>

      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-yellow-500/10">
          <BarChart2 className="w-6 h-6 text-yellow-400" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">MT5 지표 사용법</h1>
      </div>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        MT5는 수십 가지 내장 지표를 제공합니다. 지표를 차트에 추가하고 설정하는 방법과
        주요 지표의 역할을 안내합니다.
      </p>

      {/* How to add */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          <span className="flex items-center gap-2"><Plus className="w-4 h-4" />지표 추가 방법</span>
        </h2>
        <div className="glass-card p-6 border border-border/50 rounded-xl">
          <ol className="space-y-3">
            {howToAdd.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-foreground text-xs font-medium shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
            <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <span>MQL5 마켓에서 추가 지표(무료/유료)를 다운로드하여 사용할 수도 있습니다.</span>
          </div>
        </div>
      </section>

      {/* Built-in indicators */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">주요 내장 지표</h2>
        <div className="space-y-5">
          {builtinIndicators.map((cat, i) => (
            <div key={i} className={`glass-card p-5 border ${cat.border} rounded-xl`}>
              <div className={`text-xs font-semibold uppercase tracking-wide ${cat.color} mb-4`}>
                {cat.category}
              </div>
              <div className="space-y-4">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <ChevronRight className={`w-4 h-4 ${cat.color} shrink-0 mt-0.5`} />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-0.5">{item.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manage indicators */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          <span className="flex items-center gap-2"><Settings className="w-4 h-4" />지표 관리</span>
        </h2>
        <div className="space-y-3">
          {howToManage.map((item, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-secondary/50 shrink-0">
                {i === 1 ? (
                  <Trash2 className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Settings className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">{item.action}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip */}
      <div className="glass-card p-5 border border-primary/20 bg-primary/5 rounded-xl mb-10">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-2">지표 사용 팁</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• 지표를 너무 많이 쓰면 오히려 분석이 복잡해집니다. 2~3개 이내로 사용하는 것을 권장합니다.</li>
              <li>• 같은 계열(예: RSI + Stochastic)의 지표를 중복 사용하면 신호가 겹쳐 효과가 낮습니다.</li>
              <li>• 지표 파라미터(기간 등)를 변경하면 신호도 달라집니다. 기본값부터 시작하세요.</li>
              <li>• EA에서 사용하는 지표는 EA 내부에 이미 내장되어 있어 별도로 차트에 추가할 필요가 없는 경우가 많습니다.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/guides/orders"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>주문 방법</span>
        </Link>
        <Link
          to="/guides/account-types"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: 계좌 유형</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Indicators;
