import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Monitor,
  Settings,
  BarChart3,
  MousePointer,
  Bot,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const relatedItems: RelatedItem[] = [
  {
    title: "MT5 PC 가이드",
    description: "화면 기반 단계별 설정 가이드",
    href: "/guides/mt5-pc",
  },
  {
    title: "MT5 모바일 가이드",
    description: "모바일에서 모니터링하는 방법",
    href: "/guides/mt5-mobile",
  },
  {
    title: "주문 방법",
    description: "시장가·지정가·SL/TP 설정",
    href: "/guides/orders",
    badge: "STEP 4",
  },
];

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 my-4">
    <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
    <div className="text-yellow-200/90 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const SuccessBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 my-4">
    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
    <div className="text-green-400 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const DangerBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 my-4">
    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
    <div className="text-red-400 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const StepCard = ({ step, title, icon: Icon, children }: {
  step: number;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
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
      </div>
    </div>
  </section>
);

const ClickStep = ({ number, children }: { number?: number; children: React.ReactNode }) => (
  <div className="flex items-start gap-3 py-2 pl-1">
    {number ? (
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-medium flex-shrink-0">
        {number}
      </span>
    ) : (
      <MousePointer className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
    )}
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

const CodeTag = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-secondary/80 px-2 py-0.5 rounded text-primary text-sm font-medium">{children}</code>
);

const MT5Manual = () => {
  return (
    <div className="max-w-3xl">

      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
        <Link to="/guides" className="hover:text-foreground transition-colors">가이드 홈</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium">MT5 설치 가이드</span>
      </div>

      {/* 스텝 인디케이터 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
            STEP 1
          </span>
          <span className="text-xs text-muted-foreground">MT5 시작하기 · 1/3</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>약 20분</span>
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="flex gap-1 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`h-1 flex-1 rounded-full ${n <= 1 ? "bg-primary" : "bg-border/50"}`} />
        ))}
      </div>

      {/* Page Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <Monitor className="w-4 h-4" />
          PC 버전
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          MT5 사용 설명서
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
          아무것도 모르는 상태에서 실수 없이 MT5를 실행하기 위한
          최소한의 클릭 가이드입니다.
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="mb-10 p-5 rounded-xl bg-secondary/30 border border-border/40">
        <h3 className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">목차</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {[
            "MT5 설치하기",
            "MT5 실행 & 로그인",
            "기본 화면 정리",
            "차트 열기 & 설정",
            "주문 화면 익히기",
            "자동매매 기본 스위치",
            "완료 확인"
          ].map((item, index) => (
            <a
              key={index}
              href={`#step-${index + 1}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors py-2 px-3 rounded-lg"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs">{index + 1}</span>
              <span className="text-sm">{item}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Step 0: Before You Start */}
      <div className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-sm font-medium">0</span>
          </div>
          <h2 className="font-semibold text-foreground">시작 전 확인</h2>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground pl-11">
          <li>• Windows PC가 있어야 합니다 (Mac은 별도 가이드 필요)</li>
          <li>• 브로커 계정이 이미 있어야 합니다 (계정 개설은 이 가이드 범위 밖)</li>
          <li>• 이메일로 받은 로그인 정보 (계정번호, 비밀번호, 서버명)를 준비하세요</li>
        </ul>
      </div>

      {/* Step 1: Installation */}
      <StepCard step={1} title="MT5 설치하기" icon={Download}>
        <SubSection title="다운로드 위치">
          <ClickStep number={1}>브로커 공식 웹사이트에서 MT5 다운로드 링크를 찾습니다</ClickStep>
          <ClickStep number={2}>또는 MetaTrader 5 공식 사이트: metatrader5.com/download</ClickStep>
        </SubSection>

        <SubSection title="설치 방법">
          <ClickStep number={1}>다운로드된 mt5setup.exe 파일을 더블클릭합니다</ClickStep>
          <ClickStep number={2}>"Next"를 계속 클릭합니다 (설정 변경 불필요)</ClickStep>
          <ClickStep number={3}>"Finish"를 클릭하면 MT5가 자동으로 실행됩니다</ClickStep>
        </SubSection>

        <WarningBox>
          <strong>흔한 실수:</strong> MT4와 MT5는 완전히 다른 프로그램입니다.
          브로커가 MT5 계정을 제공했다면 반드시 MT5를 설치하세요.
          MT4를 설치하면 로그인이 되지 않습니다.
        </WarningBox>

        <div className="pt-2">
          <p className="text-xs text-muted-foreground/60">완료 체크리스트</p>
          <CheckItem>MT5 설치가 완료되었다</CheckItem>
        </div>
      </StepCard>

      {/* Step 2: Launch & Login */}
      <StepCard step={2} title="MT5 실행 & 로그인" icon={Monitor}>
        <SubSection title="로그인 방법">
          <ClickStep number={1}>상단 메뉴에서 <CodeTag>File</CodeTag> 클릭</ClickStep>
          <ClickStep number={2}><CodeTag>Login to Trade Account</CodeTag> 클릭</ClickStep>
          <ClickStep number={3}>Login (계정번호) 입력</ClickStep>
          <ClickStep number={4}>Password (비밀번호) 입력</ClickStep>
          <ClickStep number={5}>Server (서버) 선택 — 드롭다운에서 정확한 서버명 선택</ClickStep>
          <ClickStep number={6}><CodeTag>OK</CodeTag> 클릭</ClickStep>
        </SubSection>

        <WarningBox>
          <strong>서버가 틀리면:</strong> "Invalid account" 또는 "No connection" 에러가 발생합니다.
          브로커에게 받은 이메일에서 정확한 서버명을 확인하세요.
          서버명은 대소문자와 숫자까지 정확히 일치해야 합니다.
        </WarningBox>

        <SuccessBox>
          <strong>성공 확인:</strong> 화면 오른쪽 하단에 연결 상태 표시 (숫자/kb)가 보이면 로그인 성공입니다.
        </SuccessBox>

        <div className="pt-2">
          <p className="text-xs text-muted-foreground/60">완료 체크리스트</p>
          <CheckItem>로그인이 완료되었다 (우측 하단에 연결 표시)</CheckItem>
        </div>
      </StepCard>

      {/* Step 3: Screen Layout */}
      <StepCard step={3} title="기본 화면 정리" icon={Settings}>
        <p className="text-sm">
          MT5를 처음 열면 창이 너무 많아서 혼란스럽습니다.
          지금은 필수 창만 남겨두세요.
        </p>

        <SubSection title="닫아도 되는 창">
          <ul className="space-y-1 text-sm pl-1">
            <li className="text-muted-foreground">• Toolbox (하단의 탭들) — 지금은 불필요</li>
            <li className="text-muted-foreground">• Data Window — 닫아도 됨</li>
            <li className="text-muted-foreground">• 그 외 떠 있는 팝업 창들</li>
          </ul>
        </SubSection>

        <SubSection title="반드시 남겨야 하는 창">
          <CheckItem><strong>Market Watch</strong> (좌측) — 거래 가능한 심볼 목록</CheckItem>
          <CheckItem><strong>Navigator</strong> (좌측) — EA, 지표 등 실행 도구 목록</CheckItem>
          <CheckItem><strong>차트 영역</strong> (중앙) — 가격 차트가 표시되는 공간</CheckItem>
        </SubSection>

        <WarningBox>
          창을 닫았는데 다시 열고 싶다면: 상단 메뉴 <CodeTag>View</CodeTag>에서 해당 창 이름을 클릭하면 다시 나타납니다.
        </WarningBox>
      </StepCard>

      {/* Step 4: Chart Setup */}
      <StepCard step={4} title="차트 열기 & 설정" icon={BarChart3}>
        <SubSection title="차트 열기">
          <ClickStep number={1}>Market Watch에서 원하는 심볼(예: EURUSD)을 찾습니다</ClickStep>
          <ClickStep number={2}>심볼을 <strong>더블클릭</strong>하거나, 우클릭 → Chart Window</ClickStep>
        </SubSection>

        <SubSection title="캔들스틱으로 변경">
          <ClickStep number={1}>차트 위에서 우클릭 → Properties</ClickStep>
          <ClickStep number={2}>또는 상단 툴바에서 캔들 아이콘 클릭</ClickStep>
        </SubSection>

        <SubSection title="타임프레임 선택">
          <ClickStep number={1}>상단 툴바에서 M1, M5, M15, H1, D1 등 버튼 클릭</ClickStep>
          <p className="text-xs text-muted-foreground pl-9">M1 = 1분봉, H1 = 1시간봉, D1 = 일봉</p>
        </SubSection>

        <SubSection title="자동 스크롤 & 차트 이동">
          <ClickStep number={1}>차트 우클릭 → Properties → Common 탭</ClickStep>
          <div className="pl-9 space-y-1">
            <CheckItem><strong>Auto Scroll</strong> — 새 캔들이 생기면 자동으로 오른쪽 끝으로 이동</CheckItem>
            <CheckItem><strong>Chart Shift</strong> — 차트 오른쪽에 여백 생성 (권장)</CheckItem>
          </div>
        </SubSection>
      </StepCard>

      {/* Step 5: Order Window */}
      <StepCard step={5} title="주문 화면 익히기" icon={MousePointer}>
        <DangerBox>
          <strong>⚠️ 이 단계에서는 실제 주문을 하지 않습니다.</strong> 화면만 익힙니다.
        </DangerBox>

        <SubSection title="주문 창 열기">
          <ClickStep number={1}>차트 위에서 우클릭 → <CodeTag>Trading</CodeTag> → <CodeTag>New Order</CodeTag></ClickStep>
          <ClickStep number={2}>또는 키보드 F9</ClickStep>
        </SubSection>

        <SubSection title="주문 유형 이해">
          <div className="space-y-3 mt-2">
            <div className="p-3 bg-secondary/40 rounded-lg border border-border/40">
              <p className="font-medium text-foreground text-sm">Market Execution (시장가 주문)</p>
              <p className="text-xs text-muted-foreground">지금 바로 현재 가격에 주문 — 초보자가 이해하기 쉬움</p>
            </div>
            <div className="p-3 bg-secondary/40 rounded-lg border border-border/40">
              <p className="font-medium text-foreground text-sm">Pending Order (예약 주문)</p>
              <p className="text-xs text-muted-foreground">특정 가격에 도달하면 자동으로 주문 — 나중에 배움</p>
            </div>
          </div>
        </SubSection>

        <WarningBox>
          <strong>지금 클릭하지 마세요:</strong> Buy, Sell 버튼을 누르면 실제 주문이 들어갑니다.
          지금은 화면 구성만 확인하고 창을 닫으세요 (X 버튼 또는 ESC).
        </WarningBox>
      </StepCard>

      {/* Step 6: AutoTrading */}
      <StepCard step={6} title="자동매매 기본 스위치" icon={Bot}>
        <p className="text-sm">
          EA(Expert Advisor)를 실행하려면 MT5에서 자동매매를 허용해야 합니다.
        </p>

        <SubSection title="AutoTrading 버튼">
          <ClickStep number={1}>상단 툴바에서 <CodeTag>AutoTrading</CodeTag> 버튼 클릭</ClickStep>
          <p className="text-xs text-muted-foreground pl-9">버튼이 녹색이면 활성화, 빨간색이면 비활성화</p>
        </SubSection>

        <SubSection title="Expert Advisors 설정">
          <ClickStep number={1}>상단 메뉴 <CodeTag>Tools</CodeTag> → <CodeTag>Options</CodeTag></ClickStep>
          <ClickStep number={2}><CodeTag>Expert Advisors</CodeTag> 탭 클릭</ClickStep>
        </SubSection>

        <SubSection title="필수 체크 항목">
          <CheckItem><strong>Allow algorithmic trading</strong> — 반드시 체크</CheckItem>
          <CheckItem><strong>Allow DLL imports</strong> — EA에 따라 필요할 수 있음</CheckItem>
        </SubSection>

        <WarningBox>
          <strong>EA가 실행되지 않는 3가지 이유:</strong>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>AutoTrading 버튼이 비활성화 상태(빨간색)</li>
            <li>Tools → Options → Expert Advisors에서 "Allow algorithmic trading" 미체크</li>
            <li>차트에 EA를 올리지 않음 (Navigator에서 드래그 필요)</li>
          </ol>
        </WarningBox>
      </StepCard>

      {/* Step 7: Completion */}
      <StepCard step={7} title="완료 확인" icon={CheckCircle2}>
        <p className="text-sm mb-4">
          모든 단계를 완료했다면, 아래 체크리스트를 확인하세요.
        </p>

        <div className="space-y-2 mb-6 p-4 rounded-lg bg-secondary/30 border border-border/40">
          <CheckItem>MT5가 설치되어 있다</CheckItem>
          <CheckItem>로그인이 완료되었다 (우측 하단에 연결 표시)</CheckItem>
          <CheckItem>Market Watch, Navigator 창이 보인다</CheckItem>
          <CheckItem>차트를 열고 캔들스틱으로 설정했다</CheckItem>
          <CheckItem>AutoTrading 버튼이 녹색이다</CheckItem>
          <CheckItem>Expert Advisors 설정에서 algorithmic trading이 체크되어 있다</CheckItem>
        </div>

        <div className="p-6 bg-primary/10 border border-primary/30 rounded-xl text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <p className="text-foreground font-medium text-lg mb-2">준비 완료</p>
          <p className="text-sm text-muted-foreground">
            아직 최적화하거나 실거래를 시작하지 마세요.<br />
            먼저 MT5가 어떤 '환경'인지 이해해야 합니다.
          </p>
        </div>
      </StepCard>

      {/* 이전 / 다음 네비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30 mt-4 mb-8">
        <Link
          to="/guides"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>가이드 홈</span>
        </Link>
        <Link
          to="/guides/mt5-pc"
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <span>다음: PC 화면 가이드</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Related Content */}
      <RelatedContent items={relatedItems} />
    </div>
  );
};

export default MT5Manual;
