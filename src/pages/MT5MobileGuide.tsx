import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle2,
  Smartphone,
  Eye,
  Bell,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  ImageIcon,
  Play,
} from "lucide-react";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { PageSEO } from "@/components/PageSEO";

// ─── Media Slot ───────────────────────────────────────────────
type MediaData = { image: string; youtube: string };

const MediaSlot = ({ media, label }: { media: MediaData; label: string }) => {
  if (media.youtube) {
    return (
      <div className="mt-5 rounded-xl overflow-hidden aspect-video">
      <PageSEO title="MT5 모바일 앱 설치 및 사용법" description="iPhone·Android에서 MetaTrader 5 앱 설치와 기본 설정, 모바일 주문 방법을 안내합니다." path="/guides/mt5-mobile" isHowTo={true} />
        <iframe
          src={`https://www.youtube.com/embed/${media.youtube}`}
          className="w-full h-full"
          allowFullScreen
          title={label}
        />
      </div>
    );
  }
  if (media.image) {
    return (
      <div className="mt-5 rounded-xl overflow-hidden bg-[#0f1117]">
        <img src={media.image} alt={label} className="w-full object-contain" />
      </div>
    );
  }
  return (
    <div className="mt-5 rounded-xl border-2 border-dashed border-border/30 py-7 flex flex-col items-center gap-2 text-muted-foreground/30">
      <div className="flex items-center gap-3">
        <ImageIcon className="w-5 h-5" />
        <Play className="w-5 h-5" />
      </div>
      <p className="text-xs">{label} — 이미지 또는 영상</p>
    </div>
  );
};

// ─── Step media data ──────────────────────────────────────────
// image: "/mobile/파일명.png"  또는  youtube: "유튜브_ID"
const stepMedia: MediaData[] = [
  { image: "", youtube: "" }, // Step 1: 앱 설치 & 로그인
  { image: "", youtube: "" }, // Step 2: 기본 화면 이해
  { image: "", youtube: "" }, // Step 3: 포지션 모니터링
  { image: "", youtube: "" }, // Step 4: 긴급 청산
  { image: "", youtube: "" }, // Step 5: 알림 설정
  { image: "", youtube: "" }, // Step 6: 흔한 실수 방지
  { image: "", youtube: "" }, // Step 7: 체크리스트
];

// ─── Sub-components ───────────────────────────────────────────
const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 my-4">
    <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
    <div className="text-yellow-200/90 text-sm leading-relaxed">{children}</div>
  </div>
);

const DangerBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 my-4">
    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
    <div className="text-red-400 text-sm leading-relaxed">{children}</div>
  </div>
);

const SuccessBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 my-4">
    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
    <div className="text-green-400 text-sm leading-relaxed">{children}</div>
  </div>
);

const StepCard = ({
  step,
  title,
  icon: Icon,
  children,
  media,
}: {
  step: number;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  media?: MediaData;
}) => (
  <section className="mb-8 scroll-mt-24" id={`step-${step}`}>
    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-secondary/40 to-secondary/20 overflow-hidden">
      <div className="flex items-center gap-4 p-5 border-b border-border/40 bg-secondary/30">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
          {step}
        </div>
        <div className="flex items-center gap-3 flex-1">
          <Icon className="w-5 h-5 text-primary" />
          <h2 className="text-lg md:text-xl font-semibold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="p-5 md:p-6 space-y-4 text-muted-foreground leading-relaxed">
        {children}
        {media && <MediaSlot media={media} label={title} />}
      </div>
    </div>
  </section>
);

const ClickStep = ({ number, children }: { number: number; children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-2 pl-1">
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-medium flex-shrink-0">
      {number}
    </span>
    <span className="text-foreground/90">{children}</span>
  </div>
);

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-1.5">
    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
    </div>
    <span className="text-foreground/90">{children}</span>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h3 className="text-foreground font-medium text-sm uppercase tracking-wide opacity-80">{title}</h3>
    {children}
  </div>
);

const MistakeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-1.5">
    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
    <span className="text-foreground/90">{children}</span>
  </div>
);

const relatedItems: RelatedItem[] = [
  {
    title: "MT5 PC 가이드",
    description: "PC에서 MT5 설정하는 방법",
    href: "/guides/mt5-pc",
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

const MT5MobileGuide = () => {
  return (
    <div className="max-w-3xl">

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">모바일 가이드</span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold tracking-wide">
            STEP 3
          </span>
          <span className="text-xs text-muted-foreground">MT5 시작하기 · 3/3</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 10분</span>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="flex gap-1 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-1 flex-1 rounded-full bg-cyan-500" />
        ))}
      </div>

      {/* 헤더 */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-4">
          <Smartphone className="w-4 h-4" />
          모바일 버전
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          MT5 모바일 가이드
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
          모바일 MT5는 <strong className="text-foreground">모니터링 전용</strong>입니다.<br />
          EA 실행, 최적화, 복잡한 분석은 PC에서만 가능합니다.
        </p>
      </div>

      {/* Important Notice */}
      <div className="mb-10 p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Eye className="w-5 h-5 text-cyan-400" />
          모바일 MT5의 역할
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 포지션 상태 확인</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 수익/손실 모니터링</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 긴급 청산 (비상시에만)</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> 알림 확인</li>
        </ul>
        <DangerBox>
          <strong>모바일에서 하면 안 되는 것:</strong> EA 설정 변경, 새로운 전략 실행, 복잡한 주문 입력.
          모바일은 "확인"만 하는 도구입니다.
        </DangerBox>
      </div>

      {/* Step 1 */}
      <StepCard step={1} title="앱 설치 & 로그인" icon={Smartphone} media={stepMedia[0]}>
        <SubSection title="앱 다운로드">
          <ClickStep number={1}>App Store (iOS) 또는 Play Store (Android)에서 "MetaTrader 5" 검색</ClickStep>
          <ClickStep number={2}>MetaQuotes Ltd.가 개발한 공식 앱 설치</ClickStep>
        </SubSection>

        <WarningBox>
          <strong>주의:</strong> "MT5", "MetaTrader" 등 유사한 이름의 가짜 앱이 많습니다.
          반드시 <strong>MetaQuotes Ltd.</strong>가 개발한 공식 앱인지 확인하세요.
        </WarningBox>

        <SubSection title="로그인">
          <ClickStep number={1}>앱 실행 → 우측 상단 ☰ 메뉴</ClickStep>
          <ClickStep number={2}>"계정 관리" 또는 "Manage Accounts" 탭</ClickStep>
          <ClickStep number={3}>"+" 버튼 → "기존 계정에 로그인"</ClickStep>
          <ClickStep number={4}>브로커 이름 검색 (예: XM, Exness 등)</ClickStep>
          <ClickStep number={5}>서버 선택 → 계정번호, 비밀번호 입력</ClickStep>
        </SubSection>

        <SuccessBox>
          <strong>성공 확인:</strong> 상단에 계정 번호와 잔액이 표시되면 로그인 완료입니다.
        </SuccessBox>
      </StepCard>

      {/* Step 2 */}
      <StepCard step={2} title="기본 화면 이해" icon={Eye} media={stepMedia[1]}>
        <SubSection title="하단 탭 구성">
          <div className="space-y-3 mt-2">
            <div className="p-3 bg-secondary/40 rounded-lg border border-border/40">
              <p className="font-medium text-foreground text-sm">시세 (Quotes)</p>
              <p className="text-xs text-muted-foreground">심볼 목록과 현재 가격 — 차트로 이동 가능</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-lg border border-border/40">
              <p className="font-medium text-foreground text-sm">차트 (Chart)</p>
              <p className="text-xs text-muted-foreground">선택한 심볼의 차트 표시</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-lg border border-border/40">
              <p className="font-medium text-foreground text-sm">거래 (Trade)</p>
              <p className="text-xs text-muted-foreground">현재 열린 포지션과 잔액 확인 — <strong className="text-primary">가장 중요한 탭</strong></p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-lg border border-border/40">
              <p className="font-medium text-foreground text-sm">내역 (History)</p>
              <p className="text-xs text-muted-foreground">과거 거래 내역 확인</p>
            </div>
          </div>
        </SubSection>

        <div className="pt-4">
          <CheckItem>"거래" 탭에서 열린 포지션을 확인할 수 있다</CheckItem>
          <CheckItem>잔액(Balance)과 실현손익을 구분할 수 있다</CheckItem>
        </div>
      </StepCard>

      {/* Step 3 */}
      <StepCard step={3} title="포지션 모니터링" icon={Eye} media={stepMedia[2]}>
        <SubSection title="확인해야 할 항목">
          <div className="space-y-2 pl-1">
            <CheckItem><strong>Symbol</strong> — 어떤 통화쌍/심볼인지</CheckItem>
            <CheckItem><strong>Volume</strong> — 거래량 (랏 사이즈)</CheckItem>
            <CheckItem><strong>Price</strong> — 진입 가격</CheckItem>
            <CheckItem><strong>S/L</strong> — 손절가 (Stop Loss)</CheckItem>
            <CheckItem><strong>T/P</strong> — 익절가 (Take Profit)</CheckItem>
            <CheckItem><strong>Profit</strong> — 현재 미실현 손익</CheckItem>
          </div>
        </SubSection>

        <WarningBox>
          <strong>초보자 주의:</strong> Profit이 빨간색(음수)이라고 당황하지 마세요.
          EA가 손절가(S/L)를 설정해두었다면 그 이상 손실이 나지 않습니다.
          감정적으로 청산하지 마세요.
        </WarningBox>
      </StepCard>

      {/* Step 4 */}
      <StepCard step={4} title="긴급 청산 (비상시만)" icon={AlertTriangle} media={stepMedia[3]}>
        <DangerBox>
          <strong>이 기능은 비상시에만 사용하세요.</strong><br />
          EA가 정상 작동 중이라면 수동 청산하지 마세요.
          전략이 무너질 수 있습니다.
        </DangerBox>

        <SubSection title="수동 청산 방법">
          <ClickStep number={1}>"거래" 탭에서 청산할 포지션을 길게 터치</ClickStep>
          <ClickStep number={2}>"포지션 닫기" 또는 "Close Position" 선택</ClickStep>
          <ClickStep number={3}>확인 팝업에서 "닫기" 클릭</ClickStep>
        </SubSection>

        <SubSection title="긴급 청산이 필요한 상황">
          <ul className="space-y-1 text-sm pl-1">
            <li className="text-muted-foreground">• 브로커 서버 문제로 EA가 작동하지 않을 때</li>
            <li className="text-muted-foreground">• VPS가 다운되었을 때</li>
            <li className="text-muted-foreground">• 예상치 못한 대형 뉴스 이벤트 (전쟁, 금융위기 등)</li>
          </ul>
        </SubSection>
      </StepCard>

      {/* Step 5 */}
      <StepCard step={5} title="알림 설정" icon={Bell} media={stepMedia[4]}>
        <p className="text-sm">
          MT5 모바일은 PC에서 설정한 알림을 받을 수 있습니다.
        </p>

        <SubSection title="알림 활성화">
          <ClickStep number={1}>앱 설정 → 알림(Notifications) 허용</ClickStep>
          <ClickStep number={2}>PC MT5에서 MetaQuotes ID 연동 필요</ClickStep>
        </SubSection>

        <WarningBox>
          알림 설정은 PC MT5에서 먼저 완료해야 합니다.
          모바일에서는 알림을 받기만 할 수 있습니다.
        </WarningBox>
      </StepCard>

      {/* Step 6 */}
      <StepCard step={6} title="흔한 실수 방지" icon={XCircle} media={stepMedia[5]}>
        <SubSection title="모바일에서 절대 하지 말아야 할 것">
          <div className="space-y-2">
            <MistakeItem>손실이 보인다고 감정적으로 청산하기</MistakeItem>
            <MistakeItem>EA가 실행 중인데 수동으로 추가 주문하기</MistakeItem>
            <MistakeItem>모바일에서 새로운 EA 전략 테스트하기</MistakeItem>
            <MistakeItem>손절가(S/L)를 임의로 수정하기</MistakeItem>
            <MistakeItem>Wi-Fi가 불안정한 상태에서 주문하기</MistakeItem>
          </div>
        </SubSection>

        <SuccessBox>
          <strong>모범 사용법:</strong> 모바일은 "확인"과 "모니터링"만 합니다.
          모든 전략 실행과 설정은 PC에서만 하세요.
        </SuccessBox>
      </StepCard>

      {/* Step 7 */}
      <StepCard step={7} title="체크리스트" icon={CheckCircle2} media={stepMedia[6]}>
        <p className="text-sm mb-4">
          모바일 MT5를 올바르게 사용하고 있는지 확인하세요.
        </p>

        <div className="space-y-2 mb-6 p-4 rounded-lg bg-secondary/30 border border-border/40">
          <CheckItem>공식 MetaQuotes 앱을 설치했다</CheckItem>
          <CheckItem>로그인이 완료되었다</CheckItem>
          <CheckItem>"거래" 탭에서 포지션을 확인할 수 있다</CheckItem>
          <CheckItem>긴급 청산 방법을 알고 있다</CheckItem>
          <CheckItem>감정적 청산을 하지 않겠다고 다짐했다</CheckItem>
        </div>

        <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-center">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
            <Smartphone className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-foreground font-medium text-lg mb-2">모바일 설정 완료</p>
          <p className="text-sm text-muted-foreground">
            모바일은 모니터링 도구입니다.<br />
            모든 중요한 작업은 PC에서 진행하세요.
          </p>
        </div>
      </StepCard>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30 mb-8">
        <Link
          to="/guides/mt5-pc"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PC 화면 가이드</span>
        </Link>
        <Link
          to="/guides/orders"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: 주문 방법</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Related Content */}
      <RelatedContent items={relatedItems} />
    </div>
  );
};

export default MT5MobileGuide;
