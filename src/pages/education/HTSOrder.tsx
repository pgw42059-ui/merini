import { Link } from "react-router-dom";
import {
  MousePointer2,
  AlertTriangle,
  Info,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Zap,
  Settings,
  ClipboardList,
} from "lucide-react";

// 이미지는 /public/hts/ 폴더에 아래 파일명으로 저장하세요
const img1Manual    = "/hts/hts-order-1-manual.png";
const img2Oneclick  = "/hts/hts-order-2-oneclick.png";
const img3Settings  = "/hts/hts-order-3-settings.png";
const img4Confirm   = "/hts/hts-order-4-confirm.png";

// ─── 공통 컴포넌트 ────────────────────────────────────────────────────────────

const StepBadge = ({ n }: { n: number }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs shrink-0">
    {n}
  </span>
);

const StepRow = ({ n, text, sub }: { n: number; text: string; sub?: string }) => (
  <div className="flex items-start gap-3">
    <StepBadge n={n} />
    <div>
      <p className="text-sm text-foreground leading-snug">{text}</p>
      {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
    </div>
  </div>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2 p-3 rounded-lg bg-red-950/40 border border-red-700/40 text-xs text-red-300">
    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-400" />
    <span>{children}</span>
  </div>
);

const TipBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
    <span>{children}</span>
  </div>
);

const ImageBox = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-xl overflow-hidden bg-[#0f1117] border border-border/30">
    <img
      src={src}
      alt={alt}
      className="w-full object-contain"
    />
  </div>
);

// ─── 메인 페이지 ──────────────────────────────────────────────────────────────

const HTSOrder = () => {
  return (
    <div className="max-w-3xl">

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/guides/orders" className="hover:text-foreground transition-colors">주문 방법</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">HTS 실전 주문</span>
      </div>

      {/* 뱃지 */}
      <div className="flex items-center gap-2 mb-6">
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
          실전 가이드
        </span>
        <span className="text-xs text-muted-foreground">HTS 화면으로 따라하는 주문 가이드</span>
      </div>

      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <MousePointer2 className="w-6 h-6 text-emerald-400" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          MT5 HTS 주문하기
        </h1>
      </div>
      <p className="text-muted-foreground mb-5 leading-relaxed">
        실제 MT5 HTS 화면을 보며 따라하는 주문 가이드입니다.
        수동 진입과 원클릭 즉시 주문 두 가지 방법을 안내합니다.
      </p>

      {/* 공지 */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-300 mb-10">
        <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-yellow-400" />
        <span>설치 및 브로커 프로그램마다 일부 화면이 다를 수 있습니다.</span>
      </div>

      {/* ───────── SECTION 1: 수동 진입 ───────── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-1.5 rounded-lg bg-emerald-500/10">
            <ShoppingCart className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">1. 수동 진입 (기본 주문)</h2>
        </div>

        <ImageBox src={img1Manual} alt="MT5 수동 진입 주문 화면" />

        <div className="mt-5 glass-card border border-border/50 rounded-xl p-5 space-y-4">
          <StepRow
            n={1}
            text="원쪽 ①번 Market Watch에서 진입할 통화 더블클릭"
            sub="또는 차트 상단 '새주문' 버튼 클릭 (단축키: F9)"
          />
          <StepRow
            n={2}
            text="②번 주문창에서 거래수(LOT) 지정"
            sub="손절(Stop Loss) · 이익실현(Take Profit) 범위도 이 창에서 설정 가능"
          />
          <StepRow
            n={3}
            text="③번 방향 선택 후 실행"
          />
          <div className="pl-9 space-y-2 pt-1">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>올라갈 것 같으면 → <strong className="text-blue-400">매수(Buy)</strong> 클릭</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
              <span>내려갈 것 같으면 → <strong className="text-red-400">매도(Sell)</strong> 클릭</span>
            </div>
          </div>
          <WarningBox>
            매수/매도 버튼은 클릭 즉시 주문이 체결됩니다. 방향과 LOT을 먼저 꼭 확인하세요.
          </WarningBox>
        </div>
      </section>

      {/* ───────── SECTION 2: 원클릭 즉시 주문 ───────── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-1.5 rounded-lg bg-blue-500/10">
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">2. 원클릭 즉시 주문 활성화</h2>
        </div>

        <ImageBox src={img2Oneclick} alt="MT5 원클릭 즉시 주문 화면" />

        <div className="mt-5 glass-card border border-border/50 rounded-xl p-5 space-y-4">
          <StepRow
            n={1}
            text="매매할 차트 클릭 후 → 마우스 오른쪽 버튼"
            sub="컨텍스트 메뉴에서 '원클릭 매매' 항목을 선택하면 차트 상단에 즉시 매매창이 활성화됩니다"
          />
          <div className="px-3 py-3 bg-secondary/30 rounded-lg border border-border/40 text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">활성화되면?</p>
            <p>차트 좌상단에 <strong className="text-white">SELL / BUY</strong> 버튼이 나타납니다. 클릭 한 번으로 즉시 시장가 주문이 실행됩니다.</p>
          </div>
          <TipBox>
            원클릭 즉시 매매가 보이지 않을 경우 — 아래 ③번 도구(옵션) 설정을 먼저 확인하세요.
          </TipBox>
          <StepRow
            n={2}
            text="원클릭 매매가 비활성화된 경우 → 도구(O) → 옵션 메뉴 진입"
          />
        </div>
      </section>

      {/* ───────── SECTION 3: 원클릭 거래 옵션 설정 ───────── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-1.5 rounded-lg bg-orange-500/10">
            <Settings className="w-5 h-5 text-orange-400" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">3. 원클릭 거래 옵션 설정</h2>
        </div>

        <ImageBox src={img3Settings} alt="MT5 원클릭 거래 옵션 설정" />

        <div className="mt-5 glass-card border border-border/50 rounded-xl p-5 space-y-4">
          <p className="text-sm text-muted-foreground">
            상단 메뉴 <strong className="text-foreground">도구(T) → 옵션(O)</strong>을 클릭하면 옵션 창이 열립니다.
            <strong className="text-foreground"> 거래</strong> 탭을 선택 후 아래 두 가지를 확인하세요.
          </p>
          <StepRow
            n={1}
            text="'원클릭 거래' 체크박스 활성화"
            sub="체크가 되어 있어야 차트에서 원클릭 매매창이 나타납니다"
          />
          <StepRow
            n={2}
            text="동의사항 확인 버튼 클릭"
            sub="처음 활성화 시 위험 고지 동의 팝업이 나타납니다. 확인을 눌러 진행하세요"
          />
          <TipBox>
            설정 후 차트로 돌아오면 즉시 원클릭 매매창이 표시됩니다. 참 쉽죠~?
          </TipBox>
        </div>
      </section>

      {/* ───────── SECTION 4: 주문 확인하기 ───────── */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-1.5 rounded-lg bg-purple-500/10">
            <ClipboardList className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-lg font-semibold text-foreground">4. 주문 확인하기</h2>
        </div>

        <ImageBox src={img4Confirm} alt="MT5 주문 체결 확인" />

        <div className="mt-5 glass-card border border-border/50 rounded-xl p-5 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            주문이 체결되면 <strong className="text-foreground">MT5 하단 터미널 패널</strong>에
            새로운 체결 목록이 생성됩니다.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "티켓(Ticket)", desc: "주문 고유번호" },
              { label: "시간", desc: "주문 체결 시각" },
              { label: "유형(Type)", desc: "Buy(매수) / Sell(매도)" },
              { label: "가격", desc: "체결 가격" },
              { label: "S/L · T/P", desc: "손절 / 이익실현 가격" },
              { label: "수익", desc: "실시간 손익 (자동 갱신)" },
            ].map((item) => (
              <div key={item.label} className="bg-secondary/30 rounded-lg px-3 py-2">
                <p className="text-xs font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-900/20 border border-emerald-700/30 text-xs text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
            <span>
              수익(마지막 열)은 <strong>실시간으로 자동 갱신</strong>됩니다.
              포지션을 청산하려면 해당 행을 오른쪽 클릭 → <strong>포지션 청산</strong>을 선택하세요.
            </span>
          </div>
        </div>
      </section>

      {/* 빠른 정리 */}
      <div className="glass-card p-5 border border-border/50 rounded-xl mb-10 bg-secondary/10">
        <p className="text-sm font-semibold text-foreground mb-3">📋 주문 방법 요약</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-20 text-xs font-medium text-foreground shrink-0">수동 주문</span>
            <span>Market Watch 더블클릭 → LOT 설정 → 매수/매도</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-20 text-xs font-medium text-foreground shrink-0">원클릭</span>
            <span>차트 우클릭 → 원클릭 매매 활성화 → SELL/BUY 즉시 클릭</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-20 text-xs font-medium text-foreground shrink-0">주문 확인</span>
            <span>하단 터미널 탭에서 체결 목록 및 실시간 수익 확인</span>
          </div>
        </div>
      </div>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30 mb-8">
        <Link
          to="/guides/orders"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>주문 방법</span>
        </Link>
        <Link
          to="/guides/indicators"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: 지표 사용법</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default HTSOrder;
