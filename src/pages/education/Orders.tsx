import { Link } from "react-router-dom";
import {
  ShoppingCart,
  AlertTriangle,
  CheckCircle2,
  Info,
  ChevronLeft,
  ChevronRight,
  Clock,
  ImageIcon,
  Play,
} from "lucide-react";

// ─── 미디어 슬롯 컴포넌트 ────────────────────────────────────────────────────
// 이미지 추가 방법:  image 필드에 "/orders/파일명.png" 입력 → public/orders/ 폴더에 저장
// 영상 추가 방법:  youtube 필드에 YouTube 영상 ID 입력 (예: "dQw4w9WgXcQ")
// 둘 다 비어있으면 플레이스홀더가 표시됩니다

interface MediaSlotProps {
  image?: string;
  youtube?: string;
  label: string;
}

const MediaSlot = ({ image, youtube, label }: MediaSlotProps) => {
  // 유튜브 우선
  if (youtube) {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-border/30 bg-black">
      <PageSEO title="MT5 주문 방법 — 시장가·지정가·SL/TP 완전 가이드" description="MetaTrader 5에서 시장가, 지정가, 스톱 주문, 손절/익절 설정 방법을 상세히 설명합니다." path="/guides/orders" isHowTo={true} />
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtube}`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // 이미지
  if (image) {
    return (
      <div className="w-full rounded-xl overflow-hidden bg-[#0f1117] border border-border/30">
        <img
          src={image}
          alt={label}
          className="w-full object-contain max-h-72"
        />
      </div>
    );
  }

  // 플레이스홀더 (미디어 없을 때)
  return (
    <div className="w-full aspect-video rounded-xl border-2 border-dashed border-border/25 bg-secondary/5 flex flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-3 text-muted-foreground/25">
        <ImageIcon className="w-7 h-7" />
        <span className="text-muted-foreground/20 text-lg font-light">|</span>
        <Play className="w-6 h-6" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground/30 font-medium">이미지 또는 유튜브 영상</p>
        <p className="text-[10px] text-muted-foreground/20">
          image: "/orders/파일명.png" &nbsp;|&nbsp; youtube: "영상 ID"
        </p>
      </div>
    </div>
  );
};

// ─── 데이터 ──────────────────────────────────────────────────────────────────

const orderTypes = [
  {
    id: "market-order",
    name: "시장가 주문",
    sub: "Market Order",
    desc: "현재 시장 가격으로 즉시 체결되는 주문. 빠른 진입이 필요할 때 사용합니다.",
    how: [
      "주문창(F9) 열기 → 유형: Market Execution 선택",
      "Volume(Lot) 입력 후 SL/TP 설정",
      "Buy(매수) 또는 Sell(매도) 클릭 → 즉시 체결",
    ],
    warn: "슬리피지(Slippage) 주의 — 변동성이 큰 시장에서는 주문 가격과 체결 가격이 다를 수 있습니다.",
    warnType: "yellow",
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/25",
    dot: "bg-blue-500",
    // 미디어 추가: image 또는 youtube 필드를 채워주세요
    media: { image: "", youtube: "" },
  },
  {
    id: "limit-order",
    name: "지정가 주문",
    sub: "Limit Order",
    desc: "지정한 가격 또는 그보다 유리한 가격에만 체결되는 주문. 원하는 가격에 진입할 때 사용합니다.",
    how: [
      "주문창(F9) → 유형: Pending Order 선택",
      "Buy Limit: 현재가보다 낮은 가격 설정 (더 싸게 매수)",
      "Sell Limit: 현재가보다 높은 가격 설정 (더 비싸게 매도)",
    ],
    warn: "지정 가격에 도달하지 않으면 체결되지 않습니다. 미체결 주문은 직접 취소해야 합니다.",
    warnType: "yellow",
    color: "text-green-400",
    bg: "bg-green-500/8",
    border: "border-green-500/25",
    dot: "bg-green-500",
    media: { image: "", youtube: "" },
  },
  {
    id: "stop-order",
    name: "스탑 주문",
    sub: "Stop Order",
    desc: "지정한 가격에 도달하면 시장가로 즉시 체결됩니다. 돌파 진입(Breakout) 전략에 활용합니다.",
    how: [
      "주문창(F9) → 유형: Pending Order 선택",
      "Buy Stop: 현재가보다 높은 가격 설정 (상방 돌파 시 매수)",
      "Sell Stop: 현재가보다 낮은 가격 설정 (하방 돌파 시 매도)",
    ],
    warn: "스탑 가격 도달 후 시장가로 체결되어 슬리피지가 발생할 수 있습니다.",
    warnType: "yellow",
    color: "text-orange-400",
    bg: "bg-orange-500/8",
    border: "border-orange-500/25",
    dot: "bg-orange-500",
    media: { image: "", youtube: "" },
  },
  {
    id: "stop-limit-order",
    name: "스탑 리미트 주문",
    sub: "Stop Limit Order",
    desc: "스탑 가격 도달 시 지정가 주문으로 전환됩니다. 스탑과 리미트의 장점을 결합한 주문 유형입니다.",
    how: [
      "주문창(F9) → 유형: Pending Order 선택",
      "Stop 가격(트리거)과 Limit 가격(체결 한도)을 모두 입력",
      "Stop 가격 도달 → Limit 가격 범위 내에서만 체결",
    ],
    warn: "설정이 복잡하고, Limit 가격을 벗어나면 체결되지 않습니다. 초보자에겐 비추.",
    warnType: "yellow",
    color: "text-purple-400",
    bg: "bg-purple-500/8",
    border: "border-purple-500/25",
    dot: "bg-purple-500",
    media: { image: "", youtube: "" },
  },
];

const riskItems = [
  {
    id: "stop-loss",
    name: "손절",
    sub: "Stop Loss (SL)",
    desc: "포지션이 일정 손실에 도달하면 자동으로 청산됩니다. 계좌를 지키는 필수 안전장치입니다.",
    how: [
      "주문창 SL 필드에 손절 가격 입력",
      "또는 진입 후 포지션을 오른쪽 클릭 → Modify Position → SL 수정",
      "SL은 매수 시 현재가보다 아래, 매도 시 현재가보다 위에 설정",
    ],
    warn: "SL 없는 거래는 전체 계좌 손실로 이어질 수 있습니다. 반드시 설정하세요.",
    warnType: "red",
    color: "text-red-400",
    bg: "bg-red-500/8",
    border: "border-red-500/25",
    dot: "bg-red-500",
    media: { image: "", youtube: "" },
  },
  {
    id: "take-profit",
    name: "익절",
    sub: "Take Profit (TP)",
    desc: "포지션이 목표 수익에 도달하면 자동으로 청산됩니다. 감정 개입 없이 수익을 확정합니다.",
    how: [
      "주문창 TP 필드에 익절 가격 입력",
      "또는 포지션 오른쪽 클릭 → Modify Position → TP 수정",
      "TP는 매수 시 현재가보다 위, 매도 시 현재가보다 아래에 설정",
    ],
    warn: "TP 도달 후 추가 상승이 있어도 자동 청산됩니다. 비율(R:R)을 고려해 설정하세요.",
    warnType: "green",
    color: "text-emerald-400",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/25",
    dot: "bg-emerald-500",
    media: { image: "", youtube: "" },
  },
  {
    id: "trailing-stop",
    name: "트레일링 스탑",
    sub: "Trailing Stop",
    desc: "가격이 유리하게 움직이면 SL이 자동으로 따라옵니다. 수익을 지키면서 추가 수익도 노릴 수 있습니다.",
    how: [
      "포지션 오른쪽 클릭 → Trailing Stop → 원하는 포인트 선택",
      "또는 직접 입력: Custom → 포인트값 입력 (예: 30 포인트)",
      "MT5 앱이 실행 중일 때만 작동 — 앱 종료 시 비활성화됩니다",
    ],
    warn: "트레일링 스탑은 MT5가 실행 중일 때만 작동합니다. VPS 없이 PC를 끄면 비활성화됩니다.",
    warnType: "yellow",
    color: "text-cyan-400",
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/25",
    dot: "bg-cyan-500",
    media: { image: "", youtube: "" },
  },
];

// ─── 카드 컴포넌트 ────────────────────────────────────────────────────────────

interface ItemCardProps {
  id: string;
  name: string;
  sub: string;
  desc: string;
  how: string[];
  warn: string;
  warnType: string;
  color: string;
  bg: string;
  border: string;
  dot: string;
  media: { image?: string; youtube?: string };
}

const ItemCard = ({ name, sub, desc, how, warn, warnType, color, bg, border, dot, media }: ItemCardProps) => (
  <div className={`rounded-2xl border overflow-hidden ${border} bg-secondary/10`}>
    {/* 헤더 */}
    <div className={`px-5 py-4 border-b ${border} ${bg}`}>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${dot} shrink-0`} />
        <span className={`font-bold text-base ${color}`}>{name}</span>
        <span className="text-xs text-muted-foreground/60 font-mono">{sub}</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
    </div>

    {/* 미디어 슬롯 */}
    <div className="px-5 py-4 bg-[#0c0c14] border-b border-border/20">
      <MediaSlot image={media.image} youtube={media.youtube} label={name} />
    </div>

    {/* 사용 방법 */}
    <div className="px-5 py-4 space-y-4">
      <div className={`p-4 rounded-xl ${bg} border ${border}`}>
        <p className="text-xs font-semibold text-foreground mb-2.5">📋 사용 방법</p>
        <ol className="space-y-1.5">
          {how.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <span className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold mt-0.5 ${dot} text-white`}>
                {i + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 경고/팁 */}
      <div className={`flex items-start gap-2 p-3 rounded-lg text-xs ${
        warnType === "red"
          ? "bg-red-500/8 border border-red-500/20 text-red-300"
          : warnType === "green"
          ? "bg-green-500/8 border border-green-500/20 text-green-300"
          : "bg-yellow-500/8 border border-yellow-500/20 text-yellow-300"
      }`}>
        {warnType === "green"
          ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          : <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
        }
        <span>{warn}</span>
      </div>
    </div>
  </div>
);
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

// ─── 메인 페이지 ──────────────────────────────────────────────────────────────

const Orders = () => {
  return (
    <div className="max-w-3xl">

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">주문 방법</span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wide">
            STEP 4
          </span>
          <span className="text-xs text-muted-foreground">거래 방법 · 1/3</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 15분</span>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="flex gap-1 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`h-1 flex-1 rounded-full ${n <= 1 ? "bg-emerald-500" : "bg-border/50"}`} />
        ))}
      </div>

      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-emerald-500/10">
          <ShoppingCart className="w-6 h-6 text-emerald-400" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">MT5 주문 방법</h1>
      </div>
      <p className="text-muted-foreground mb-3 leading-relaxed">
        MT5의 주문 유형과 손절/익절 설정 방법을 완전히 이해하면 더 체계적인 거래가 가능합니다.
      </p>

      {/* 주문창 열기 단축키 */}
      <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground mb-10">
        <Info className="w-3.5 h-3.5 text-primary shrink-0" />
        <span>단축키 <kbd className="px-1.5 py-0.5 bg-secondary border border-border/50 rounded text-foreground font-mono text-[11px]">F9</kbd> 로 주문창을 바로 열 수 있습니다.</span>
      </div>

      {/* ── 섹션 1: 주문 유형 ── */}
      <section className="mb-14">
        <h2 className="text-base font-semibold text-foreground mb-1">주문 유형</h2>
        <p className="text-sm text-muted-foreground mb-5">진입 방식에 따라 4가지 주문 유형을 선택할 수 있습니다.</p>
        <div className="space-y-5">
          {orderTypes.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* ── 섹션 2: 손익 관리 ── */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-foreground mb-1">손익 관리</h2>
        <p className="text-sm text-muted-foreground mb-5">진입 후 자동으로 손실을 제한하고 수익을 확정하는 도구입니다.</p>
        <div className="space-y-5">
          {riskItems.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* 원칙 박스 */}
      <div className="glass-card p-5 border border-red-500/25 bg-red-500/5 rounded-xl mb-10">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">반드시 지켜야 할 원칙</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• <strong className="text-foreground">모든 포지션에 SL을 설정하세요.</strong> SL 없는 거래는 전체 계좌 손실로 이어질 수 있습니다.</li>
              <li>• Lot Size는 계좌 잔액의 <strong className="text-foreground">1~2% 리스크 이내</strong>로 계산해 설정하세요.</li>
              <li>• 처음에는 <strong className="text-foreground">데모 계좌</strong>에서 충분히 연습한 후 실계좌에 적용하세요.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/guides/mt5-mobile"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>모바일 가이드</span>
        </Link>
        <Link
          to="/guides/indicators"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: 지표 사용법</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <RelatedContent items={[
          { title: "MT5 PC 설치", description: "MT5 설치부터 로그인까지 7단계", href: "/guides/mt5-pc", badge: "설치" },
          { title: "지표 사용법", description: "MT5 내장 지표 추가 및 설정", href: "/guides/indicators", badge: "가이드" },
          { title: "계좌 유형", description: "Standard·ECN·Prime 차이 비교", href: "/guides/account-types", badge: "가이드" }
        ]} />
    </div>
  );
};

export default Orders;
