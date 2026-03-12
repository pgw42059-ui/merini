import { Link } from "react-router-dom";
import {
  Monitor,
  LogIn,
  LayoutDashboard,
  BarChart3,
  Settings,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { PageSEO } from "@/components/PageSEO";

// ─── Step Mockup Components ──────────────────────────────────────────────────

const Step1Mockup = () => (
  <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-lg text-[11px] select-none font-mono">
    {/* Title bar */}
    <div className="bg-[#1e1e2e] px-3 py-1.5 flex items-center justify-between border-b border-gray-700">
      <span className="text-gray-400 font-sans">MetaTrader 5</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-gray-600" />
      </div>
    </div>
    {/* Menu bar */}
    <div className="bg-[#252535] flex px-1 py-0.5 border-b border-gray-700 gap-0.5 font-sans">
      {["File", "View", "Insert", "Charts", "Tools", "Window", "Help"].map((m) => (
        <span
          key={m}
          className={`px-2.5 py-1 rounded cursor-pointer ${
            m === "File" ? "bg-[#3a3a5c] text-white" : "text-gray-400"
          }`}
        >
          {m}
        </span>
      ))}
    </div>
    {/* Dropdown + bg */}
    <div className="bg-[#1a1a2a] min-h-[190px] relative font-sans">
      <div className="absolute left-1 top-0 w-56 bg-[#2a2a3c] border border-gray-600 shadow-2xl z-10 rounded-b overflow-hidden">
        <div className="px-3 py-1.5 text-gray-500 flex justify-between hover:bg-[#3a3a5a]">
          <span>New Chart</span><span className="text-gray-600">Ctrl+N</span>
        </div>
        <div className="px-3 py-1.5 text-gray-500 hover:bg-[#3a3a5a]">Open Data Folder</div>
        <div className="border-t border-gray-700/60 my-0.5" />
        <div className="px-3 py-1.5 text-gray-500 hover:bg-[#3a3a5a]">Connect</div>
        {/* Highlighted item */}
        <div className="px-3 py-2 bg-blue-600 text-white font-semibold flex items-center gap-2 cursor-pointer">
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span>Login to Trade Account</span>
        </div>
        <div className="px-3 py-1.5 text-gray-500 hover:bg-[#3a3a5a]">Open an Account</div>
        <div className="border-t border-gray-700/60 my-0.5" />
        <div className="px-3 py-1.5 text-gray-500 flex justify-between hover:bg-[#3a3a5a]">
          <span>Exit</span><span className="text-gray-600">Alt+F4</span>
        </div>
      </div>
    </div>
    {/* Callout */}
    <div className="bg-blue-950/60 border-t border-blue-500/30 px-4 py-2.5 flex items-center gap-2 font-sans">
      <span className="text-blue-400 shrink-0">💡</span>
      <span className="text-blue-300">
        File 메뉴 → <strong className="text-white">Login to Trade Account</strong> 클릭
      </span>
    </div>
  </div>
);

const Step2Mockup = () => (
  <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-lg text-[11px] select-none font-sans">
    {/* Title bar */}
    <div className="bg-[#1e1e2e] px-3 py-1.5 border-b border-gray-700">
      <span className="text-gray-400">MetaTrader 5 — EURUSD, H1</span>
    </div>
    {/* Toolbar */}
    <div className="bg-[#252535] px-2 py-1 border-b border-gray-700 flex items-center gap-1.5 font-mono text-[10px]">
      <span className="text-gray-600">M1 M5 M15 M30</span>
      <span className="text-blue-400 font-bold">H1</span>
      <span className="text-gray-600">H4 D1 W1 MN</span>
      <span className="text-gray-700 mx-1">│</span>
      <span className="text-gray-500">🕯 📊 ▔</span>
    </div>
    {/* 3-Panel Layout */}
    <div className="flex h-44">
      {/* ① Market Watch */}
      <div className="w-28 bg-[#1a1a2a] border-r border-gray-700 flex flex-col shrink-0">
        <div className="px-2 py-1 bg-[#252535] border-b border-gray-700 flex items-center justify-between">
          <span className="text-gray-300 font-semibold text-[10px]">Market Watch</span>
          <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[9px]">①</span>
        </div>
        {[["EURUSD","1.0842"],["GBPUSD","1.2631"],["USDJPY","149.82"],["XAUUSD","2034"]].map(([s,p]) => (
          <div key={s} className="px-1.5 py-1 flex justify-between border-b border-gray-800/70 font-mono text-[10px]">
            <span className="text-gray-500">{s}</span>
            <span className="text-green-400">{p}</span>
          </div>
        ))}
      </div>
      {/* ② Navigator */}
      <div className="w-24 bg-[#1a1a2a] border-r border-gray-700 flex flex-col shrink-0">
        <div className="px-2 py-1 bg-[#252535] border-b border-gray-700 flex items-center justify-between">
          <span className="text-gray-300 font-semibold text-[10px]">Navigator</span>
          <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[9px]">②</span>
        </div>
        {["▸ Accounts","▸ Indicators","▸ Expert Advisors","▸ Scripts"].map((t) => (
          <div key={t} className="px-1.5 py-1 text-gray-600 border-b border-gray-800/70 text-[10px]">{t}</div>
        ))}
      </div>
      {/* ③ Chart */}
      <div className="flex-1 bg-[#0d1117] flex flex-col">
        <div className="px-2 py-1 bg-[#252535] border-b border-gray-700 flex items-center justify-between">
          <span className="text-gray-300 font-semibold text-[10px]">EURUSD, H1</span>
          <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[9px]">③</span>
        </div>
        {/* Fake candle chart */}
        <div className="flex-1 flex items-end px-1 pb-1 gap-0.5 overflow-hidden">
          {[50,40,62,48,70,55,66,42,75,60,52,68,82,58,72].map((h,i) => (
            <div key={i} className="flex-1 min-w-0 flex flex-col items-center justify-end">
              <div
                className={`w-full rounded-sm ${i%2===0 ? "bg-green-600/60" : "bg-red-600/60"}`}
                style={{height:`${h}%`}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Callout */}
    <div className="bg-blue-950/60 border-t border-blue-500/30 px-4 py-2.5 flex items-center gap-2">
      <span className="text-blue-400 shrink-0">💡</span>
      <span className="text-blue-300">① Market Watch &nbsp;·&nbsp; ② Navigator &nbsp;·&nbsp; ③ 차트 — 세 영역을 확인하세요</span>
    </div>
  </div>
);

const Step3Mockup = () => (
  <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-lg text-[11px] select-none font-sans">
    <div className="bg-[#1e1e2e] px-3 py-1.5 border-b border-gray-700">
      <span className="text-gray-400">MT5 — 차트 타입 &amp; 타임프레임</span>
    </div>
    <div className="bg-[#252535] p-5 space-y-5">
      {/* ① Chart type */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">①</span>
          <span className="text-gray-300 font-medium">차트 타입 선택</span>
        </div>
        <div className="flex gap-2">
          {[
            { symbol: "📈", name: "Line", active: false },
            { symbol: "🕯", name: "Candlestick", active: true },
            { symbol: "▕╷", name: "Bar (OHLC)", active: false },
          ].map((btn) => (
            <div
              key={btn.name}
              className={`px-4 py-2.5 rounded-lg border flex flex-col items-center gap-1.5 cursor-pointer ${
                btn.active
                  ? "bg-blue-600 border-blue-400 text-white"
                  : "bg-[#1a1a2a] border-gray-700 text-gray-500"
              }`}
            >
              <span className="text-lg leading-none">{btn.symbol}</span>
              <span className="text-[10px]">{btn.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* ② Timeframes */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">②</span>
          <span className="text-gray-300 font-medium">타임프레임 선택</span>
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono">
          {["M1","M5","M15","M30","H1","H4","D1","W1","MN"].map((tf) => (
            <span
              key={tf}
              className={`px-3 py-1.5 rounded border cursor-pointer ${
                tf === "H1"
                  ? "bg-blue-600 border-blue-400 text-white font-bold"
                  : "bg-[#1a1a2a] border-gray-700 text-gray-400"
              }`}
            >
              {tf}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-blue-950/60 border-t border-blue-500/30 px-4 py-2.5 flex items-center gap-2">
      <span className="text-blue-400 shrink-0">💡</span>
      <span className="text-blue-300">① 캔들스틱(Candlestick) 선택 → ② 원하는 타임프레임 클릭</span>
    </div>
  </div>
);

const Step4Mockup = () => (
  <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-red-800/50 shadow-lg text-[11px] select-none font-sans">
    <div className="bg-[#1e1e2e] px-3 py-1.5 border-b border-gray-700 flex items-center gap-2">
      <AlertTriangle className="w-3 h-3 text-red-400 shrink-0" />
      <span className="text-gray-400">New Order — EURUSD</span>
    </div>
    <div className="bg-[#252535] p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-gray-500 text-[10px] mb-1">Symbol</p>
          <div className="bg-[#1a1a2a] border border-gray-700 rounded px-2.5 py-1.5 text-gray-300 font-mono">EURUSD</div>
        </div>
        <div>
          <p className="text-gray-500 text-[10px] mb-1">Volume (Lots)</p>
          <div className="bg-[#1a1a2a] border border-gray-700 rounded px-2.5 py-1.5 text-gray-300 font-mono">0.10</div>
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-[10px] mb-1">Order Type</p>
        <div className="bg-[#1a1a2a] border border-gray-700 rounded px-2.5 py-1.5 text-gray-300">Market Execution</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-gray-500 text-[10px] mb-1">Stop Loss</p>
          <div className="bg-[#1a1a2a] border border-gray-700 rounded px-2.5 py-1.5 text-gray-600 font-mono">0.00000</div>
        </div>
        <div>
          <p className="text-gray-500 text-[10px] mb-1">Take Profit</p>
          <div className="bg-[#1a1a2a] border border-gray-700 rounded px-2.5 py-1.5 text-gray-600 font-mono">0.00000</div>
        </div>
      </div>
      {/* Buy/Sell buttons with no-click overlay */}
      <div className="flex gap-2 pt-1 relative">
        <div className="flex-1 bg-blue-700/50 text-white/60 py-3 rounded font-bold text-center text-sm cursor-default font-mono">
          Buy &nbsp;1.08420
        </div>
        <div className="flex-1 bg-red-700/50 text-white/60 py-3 rounded font-bold text-center text-sm cursor-default font-mono">
          Sell &nbsp;1.08400
        </div>
        {/* No-click overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-black/75 text-red-300 px-4 py-1.5 rounded-full text-[11px] font-semibold border border-red-700/60 font-sans">
            ⛔ 클릭 금지
          </span>
        </div>
      </div>
    </div>
    <div className="bg-red-950/60 border-t border-red-600/40 px-4 py-2.5 flex items-center gap-2">
      <span className="text-red-400 shrink-0">⚠️</span>
      <span className="text-red-300 font-medium">Buy / Sell 버튼 절대 클릭 금지! 화면 구성 확인만 하세요</span>
    </div>
  </div>
);

const Step5Mockup = () => (
  <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-lg text-[11px] select-none font-sans">
    <div className="bg-[#1e1e2e] px-3 py-1.5 border-b border-gray-700">
      <span className="text-gray-400">MT5 — AutoTrading 버튼 상태</span>
    </div>
    <div className="bg-[#252535] p-6">
      <div className="flex items-stretch gap-4">
        {/* OFF State */}
        <div className="flex-1 bg-[#1a1a2a] rounded-xl border border-gray-700 p-4 flex flex-col items-center gap-3">
          <p className="text-gray-500 text-[10px] font-medium">❌ 비활성화 (OFF)</p>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2a1515] border border-red-800/50 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-red-600 shrink-0" />
            <span className="text-red-400 font-semibold">AutoTrading</span>
          </div>
          <p className="text-red-400/60 text-[10px]">EA 실행 안됨</p>
        </div>
        {/* Arrow */}
        <div className="flex flex-col items-center justify-center gap-1 text-gray-600">
          <ChevronRight className="w-5 h-5" />
          <span className="text-[9px] whitespace-nowrap font-mono">Ctrl+E</span>
        </div>
        {/* ON State */}
        <div className="flex-1 bg-[#1a1a2a] rounded-xl border border-green-700/40 p-4 flex flex-col items-center gap-3">
          <p className="text-gray-400 text-[10px] font-medium">✅ 활성화 (ON)</p>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#152615] border border-green-700/50 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow shadow-green-500/50 shrink-0" />
            <span className="text-green-400 font-semibold">AutoTrading</span>
          </div>
          <p className="text-green-400/60 text-[10px]">EA 자동 실행 중</p>
        </div>
      </div>
    </div>
    <div className="bg-blue-950/60 border-t border-blue-500/30 px-4 py-2.5 flex items-center gap-2">
      <span className="text-blue-400 shrink-0">💡</span>
      <span className="text-blue-300">초록색 불 = 활성화 · EA가 자동으로 주문을 실행합니다</span>
    </div>
  </div>
);

const Step6Mockup = () => (
  <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-lg text-[11px] select-none font-sans">
    <div className="bg-[#1e1e2e] px-3 py-1.5 border-b border-gray-700">
      <span className="text-gray-400">Tools → Options → Expert Advisors</span>
    </div>
    <div className="flex min-h-[200px]">
      {/* Sidebar tabs */}
      <div className="w-36 bg-[#1a1a2a] border-r border-gray-700 flex flex-col shrink-0">
        {["Charts","Trade","Expert Advisors","Notifications","Email"].map((tab) => (
          <div
            key={tab}
            className={`px-3 py-2 border-b border-gray-800 cursor-pointer ${
              tab === "Expert Advisors"
                ? "bg-blue-600 text-white font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 p-4 bg-[#252535]">
        <p className="text-gray-200 font-bold mb-4 text-[12px]">Expert Advisors</p>
        <div className="space-y-2.5">
          {[
            { label: "Allow Automated Trading",      checked: true,  required: true  },
            { label: "Allow DLL Imports",             checked: true,  required: true  },
            { label: "Allow trading for Live Accounts", checked: true, required: true },
            { label: "Disable Speed Limits in Testing", checked: false, required: false },
          ].map((opt, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3 py-2 rounded ${
                opt.required ? "bg-green-900/20 border border-green-700/30" : ""
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                  opt.checked
                    ? "bg-blue-600 border-blue-500"
                    : "border-gray-600 bg-[#1a1a2a]"
                }`}
              >
                {opt.checked && (
                  <span className="text-white text-[8px] leading-none font-bold">✓</span>
                )}
              </div>
              <span className={opt.required ? "text-gray-200" : "text-gray-500"}>
                {opt.label}
              </span>
              {opt.required && (
                <span className="ml-auto text-green-400 text-[10px] font-semibold shrink-0">필수</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-blue-950/60 border-t border-blue-500/30 px-4 py-2.5 flex items-center gap-2">
      <span className="text-blue-400 shrink-0">💡</span>
      <span className="text-blue-300">
        <strong className="text-white">필수</strong> 표시 3가지 항목이 모두 체크(✓)되어 있어야 합니다
      </span>
    </div>
  </div>
);

// ─── Steps Data ──────────────────────────────────────────────────────────────

const steps = [
  {
    step: 1,
    title: "로그인 & 서버 연결",
    description: "File → Login to Trade Account 메뉴 클릭",
    icon: LogIn,
    mockup: <Step1Mockup />,
    highlight: "Login to Trade Account 선택",
  },
  {
    step: 2,
    title: "화면 구성 파악하기",
    description: "Market Watch, Navigator, Chart 영역 이해",
    icon: LayoutDashboard,
    mockup: <Step2Mockup />,
    highlight: "① ② ③ 영역 확인",
  },
  {
    step: 3,
    title: "차트 타입 & 타임프레임",
    description: "캔들스틱 버튼과 시간대 설정",
    icon: BarChart3,
    mockup: <Step3Mockup />,
    highlight: "① 캔들스틱 ② 타임프레임 선택",
  },
  {
    step: 4,
    title: "주문 창 확인 (주의!)",
    description: "주문 화면 구성 - Buy/Sell 클릭 금지",
    icon: AlertTriangle,
    mockup: <Step4Mockup />,
    highlight: "⚠️ 실수 클릭 주의",
    isWarning: true,
  },
  {
    step: 5,
    title: "자동매매 버튼 상태",
    description: "AutoTrading 버튼 - 빨간색 OFF → 초록색 ON",
    icon: Settings,
    mockup: <Step5Mockup />,
    highlight: "초록색 = 활성화",
  },
  {
    step: 6,
    title: "EA 옵션 체크리스트",
    description: "Tools → Options → Expert Advisors 설정",
    icon: Settings,
    mockup: <Step6Mockup />,
    highlight: "3가지 체크박스 확인",
  },
];

const relatedItems: RelatedItem[] = [
  {
    title: "MT5 모바일 가이드",
    description: "모바일에서 모니터링하는 방법",
    href: "/guides/mt5-mobile",
  },
  {
    title: "MT5 설치 가이드",
    description: "단계별 상세 클릭 가이드",
    href: "/guides/mt5-manual",
  },
  {
    title: "주문 방법",
    description: "시장가·지정가·SL/TP 설정",
    href: "/guides/orders",
    badge: "STEP 4",
  },
];

const MT5PCGuide = () => {
  return (
    <div className="max-w-3xl">
      <PageSEO title="MT5 PC 설치 방법 — 7단계 완전 가이드" description="MetaTrader 5 PC 버전 무료 다운로드부터 브로커 서버 연결, 첫 로그인까지 단계별로 안내합니다." path="/guides/mt5-pc" isHowTo={true}
        faqs={[
          { question: "MT5는 어디서 무료로 다운로드할 수 있나요?", answer: "MetaQuotes 공식 사이트(metaquotes.net) 또는 브로커 홈페이지에서 무료로 다운로드할 수 있습니다. 브로커에서 제공하는 버전을 사용하면 브로커 서버가 자동으로 설정됩니다." },
          { question: "MT5 설치 후 어떤 브로커 서버를 선택해야 하나요?", answer: "이미 계좌를 개설한 브로커의 서버를 검색해 선택하세요. 실계좌는 Live 서버, 데모 계좌는 Demo 서버를 선택합니다." },
          { question: "MT5가 실행되지 않을 때 어떻게 하나요?", answer: "Windows Defender나 백신 프로그램이 MT5를 차단하는 경우가 있습니다. 백신 예외 처리에 MT5를 추가하거나, 관리자 권한으로 실행해보세요." },
        ]}
      />

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">PC 화면 가이드</span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
            STEP 2
          </span>
          <span className="text-xs text-muted-foreground">MT5 시작하기 · 2/3</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 15분</span>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="flex gap-1 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`h-1 flex-1 rounded-full ${n <= 2 ? "bg-primary" : "bg-border/50"}`} />
        ))}
      </div>

      {/* 헤더 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <Monitor className="w-4 h-4" />
          PC 버전
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
          MT5 PC 사용 가이드
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
          처음 실행부터 차트 설정, 주문까지<br />
          한 단계씩 따라오는 클릭 설명서입니다.
        </p>
      </div>

      {/* 섹션 헤더 */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-1">단계별 가이드</h2>
        <p className="text-sm text-muted-foreground">각 단계의 화면을 보며 따라 하세요</p>
      </div>

      {/* Step Cards */}
      <div className="space-y-6 mb-10">
        {steps.map((item) => (
          <div
            key={item.step}
            className={`rounded-2xl border overflow-hidden ${
              item.isWarning
                ? "border-destructive/40 bg-destructive/5"
                : "border-border/60 bg-secondary/20"
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-4 p-5 border-b border-border/30">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm flex-shrink-0 ${
                item.isWarning
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-primary text-primary-foreground"
              }`}>
                {item.step}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <item.icon className={`w-4 h-4 ${item.isWarning ? "text-destructive" : "text-primary"}`} />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              <span className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                item.isWarning
                  ? "bg-destructive/20 text-destructive"
                  : "bg-primary/10 text-primary"
              }`}>
                {item.highlight}
              </span>
            </div>

            {/* Mockup */}
            <div className="p-5 bg-[#0f1117]">
              {item.mockup}
            </div>
          </div>
        ))}
      </div>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30 mb-8">
        <Link
          to="/guides/mt5-manual"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>MT5 설치 가이드</span>
        </Link>
        <Link
          to="/guides/mt5-mobile"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: 모바일 가이드</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Related Content */}
      <RelatedContent items={relatedItems} />
    </div>
  );
};

export default MT5PCGuide;
