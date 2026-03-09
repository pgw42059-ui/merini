import { Link } from "react-router-dom";
import {
  Settings,
  SlidersHorizontal,
  Activity,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";

const commonSettings = [
  {
    name: "Allow Algo Trading",
    required: true,
    desc: "EA가 자동으로 주문을 낼 수 있도록 허용합니다. 반드시 체크해야 EA가 작동합니다.",
  },
  {
    name: "Allow DLL imports",
    required: false,
    desc: "외부 DLL 파일 사용을 허용합니다. 일부 EA에서만 필요하며, 신뢰할 수 있는 EA일 때만 체크하세요.",
  },
  {
    name: "Allow external experts imports",
    required: false,
    desc: "외부 EA를 불러올 수 있도록 허용합니다. 일반적으로 체크하지 않아도 됩니다.",
  },
];

const inputParams = [
  {
    name: "Lot Size",
    example: "0.01",
    important: true,
    desc: "한 번의 거래에서 사용하는 계약 단위(랏)입니다. 계좌 잔고의 1~2% 이내로 리스크를 설정하는 것이 원칙입니다.",
    tip: "잔고 $1,000 기준: 0.01 lot(마이크로) → 핍당 약 $0.1. 무리한 lot size는 계좌를 빠르게 소진합니다.",
  },
  {
    name: "Stop Loss (SL)",
    example: "50",
    important: true,
    desc: "최대 허용 손실 거리(핍 또는 포인트)입니다. 반드시 설정하여 예상치 못한 대형 손실을 방지하세요.",
    tip: "SL이 없으면 큰 뉴스 이벤트 시 계좌 전체를 잃을 수 있습니다. EA가 SL을 제공하지 않는다면 그 EA는 사용하지 마세요.",
  },
  {
    name: "Take Profit (TP)",
    example: "100",
    important: false,
    desc: "목표 수익 거리(핍 또는 포인트)입니다. 목표에 도달하면 포지션이 자동으로 종료됩니다.",
    tip: "손익비(Risk:Reward)를 고려해 설정하세요. SL이 50핍이면 TP는 최소 75~100핍 이상이 권장됩니다.",
  },
  {
    name: "Magic Number",
    example: "12345",
    important: false,
    desc: "EA가 생성한 주문을 식별하는 고유 번호입니다. 동일 계좌에서 여러 EA를 동시에 사용할 때 서로 다른 번호를 부여해야 합니다.",
    tip: "Magic Number가 겹치면 EA가 다른 EA의 포지션을 자기 것으로 인식해 오작동할 수 있습니다.",
  },
  {
    name: "Max Spread",
    example: "20",
    important: false,
    desc: "EA가 허용하는 최대 스프레드(포인트)입니다. 이 값 이상으로 스프레드가 벌어지면 EA가 주문을 내지 않습니다.",
    tip: "뉴스 시간대나 장 시작 직후에는 스프레드가 급격히 넓어집니다. Max Spread 설정으로 불리한 시점의 진입을 막을 수 있습니다.",
  },
  {
    name: "Comment",
    example: "MyEA_v1",
    important: false,
    desc: "주문에 표시될 코멘트 텍스트입니다. 거래 내역에서 어떤 EA가 낸 주문인지 구분할 때 유용합니다.",
    tip: "여러 EA를 운영하거나 수동 매매와 병행할 때 설정해두면 거래 분류가 훨씬 편리합니다.",
  },
];

const monitorItems = [
  {
    tab: "Trade",
    desc: "현재 열려 있는 포지션과 미체결 주문을 실시간으로 확인합니다. EA가 주문을 냈다면 여기에 표시됩니다.",
  },
  {
    tab: "Experts",
    desc: "EA의 활동 로그가 기록됩니다. EA가 주문을 낸 이유, 오류 메시지, 주요 이벤트를 여기서 확인하세요.",
  },
  {
    tab: "Journal",
    desc: "MT5 전체 이벤트 로그입니다. 서버 연결 상태, 로그인 이벤트 등을 확인할 수 있습니다.",
  },
];

const EAUsageGuide = () => {
  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">EA 사용 가이드</h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        EA를 차트에 적용할 때의 설정 창 사용법과 주요 파라미터, 실행 중 모니터링 방법까지 단계별로 설명합니다.
      </p>

      {/* Warning */}
      <div className="glass-card p-4 border border-yellow-500/30 bg-yellow-500/5 mb-10 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">반드시 데모 계좌부터</p>
            <p className="text-xs text-muted-foreground">
              실계좌 적용 전 데모 계좌에서 최소 2주 이상 실제와 동일한 파라미터로 테스트하세요.
              소액으로 운영을 충분히 이해한 후 증액하세요.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Common Tab */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-1.5 rounded-md bg-primary/10">
            <Settings className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">Common 탭 설정</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          EA를 차트에 드래그하거나 더블클릭하면 설정 창이 열립니다.{" "}
          <strong className="text-foreground">Common 탭</strong>은 EA의 기본 권한을 설정하는 곳입니다.
        </p>
        <div className="space-y-3">
          {commonSettings.map((item, i) => (
            <div
              key={i}
              className={`glass-card p-4 border rounded-xl flex items-start gap-3 ${
                item.required ? "border-primary/30 bg-primary/5" : "border-border/50"
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${item.required ? "text-primary" : "text-muted-foreground/40"}`}
              />
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">
                  {item.name}
                  {item.required && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary">필수</span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Inputs Tab */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-1.5 rounded-md bg-primary/10">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">Inputs 탭 — 주요 파라미터</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          <strong className="text-foreground">Inputs 탭</strong>은 EA의 핵심 동작 파라미터를 설정합니다.
          EA마다 다른 파라미터를 제공하지만, 아래 항목은 대부분의 EA에서 공통으로 나타납니다.
        </p>
        <div className="space-y-4">
          {inputParams.map((p, i) => (
            <div key={i} className="glass-card p-5 border border-border/50 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <p className="font-semibold text-foreground text-sm">{p.name}</p>
                <code className="text-xs bg-secondary px-2 py-0.5 rounded text-muted-foreground">예: {p.example}</code>
                {p.important && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/10 text-red-400">중요</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{p.desc}</p>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">{p.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Execution Status */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-1.5 rounded-md bg-primary/10">
            <Activity className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">EA 실행 상태 확인</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="glass-card p-5 border border-green-500/30 bg-green-500/5 rounded-xl">
            <p className="text-2xl mb-2">😊</p>
            <p className="font-semibold text-green-400 text-sm mb-1">정상 작동 중</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              차트 우측 상단에 EA 이름 옆 웃는 얼굴이 보이면 정상입니다.
              자동매매 버튼이 초록색이고 EA가 마켓을 모니터링 중입니다.
            </p>
          </div>
          <div className="glass-card p-5 border border-red-500/30 bg-red-500/5 rounded-xl">
            <p className="text-2xl mb-2">😟</p>
            <p className="font-semibold text-red-400 text-sm mb-1">비활성화 상태</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              슬픈 얼굴이 표시되면 EA가 주문을 낼 수 없습니다.
              자동매매 버튼이 꺼져 있는지, Common 탭의 Allow Algo Trading이 체크되어 있는지 확인하세요.
            </p>
          </div>
        </div>
        <div className="glass-card p-4 border border-border/50 rounded-xl">
          <p className="text-xs font-medium text-foreground mb-2">비활성화 시 체크리스트</p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>• MT5 상단의 자동매매(Algo Trading) 버튼이 초록색인가?</li>
            <li>• EA 설정 창 → Common 탭 → Allow Algo Trading이 체크되어 있는가?</li>
            <li>• MT5 옵션(Ctrl+O) → Expert Advisors → "알고리즘 트레이딩 허용"이 체크되어 있는가?</li>
          </ul>
        </div>
      </section>

      {/* Section 4: Terminal Monitoring */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-1.5 rounded-md bg-primary/10">
            <Activity className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">터미널에서 EA 모니터링</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          MT5 하단 터미널(단축키: <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">Ctrl+T</code>)을 열어
          EA의 활동을 실시간으로 확인합니다.
        </p>
        <div className="space-y-3">
          {monitorItems.map((m, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl flex items-start gap-3">
              <code className="text-xs bg-secondary px-2 py-1 rounded text-primary font-medium shrink-0 mt-0.5">
                {m.tab}
              </code>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Stop/Remove EA */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-1.5 rounded-md bg-primary/10">
            <XCircle className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">EA 일시 정지 및 제거</h2>
        </div>
        <div className="space-y-3">
          <div className="glass-card p-4 border border-border/50 rounded-xl">
            <p className="text-sm font-medium text-foreground mb-1">일시 정지 (모든 EA)</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MT5 상단의{" "}
              <strong className="text-foreground">자동매매(Algo Trading) 버튼</strong>을 클릭하면 모든 EA의
              자동매매가 일시 정지됩니다. 열린 포지션은 유지됩니다. 버튼을 다시 클릭하면 재개됩니다.
            </p>
          </div>
          <div className="glass-card p-4 border border-border/50 rounded-xl">
            <p className="text-sm font-medium text-foreground mb-1">특정 EA만 제거</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              차트에서{" "}
              <strong className="text-foreground">우클릭 → Expert Advisors → Remove</strong>를 선택합니다.
              열린 포지션은 유지되며, EA만 차트에서 분리됩니다.
            </p>
          </div>
          <div className="glass-card p-4 border border-yellow-500/30 bg-yellow-500/5 rounded-xl">
            <p className="text-sm font-medium text-foreground mb-1">⚠️ 주의: MT5 종료 시</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MT5를 종료하면 EA 자동매매가 멈춥니다. 24시간 운영이 필요하다면{" "}
              <strong className="text-foreground">VPS</strong>를 사용하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/50">
        <Link
          to="/ea/install"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          설치 방법
        </Link>
        <Link
          to="/ea/backtest"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          백테스트 가이드
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default EAUsageGuide;
