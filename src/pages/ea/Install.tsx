import { Link } from "react-router-dom";
import { Download, FolderOpen, RefreshCw, MousePointer, CheckCircle2, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "1단계 — MQL5 마켓에서 EA 받기",
    content: [
      "MT5 상단 메뉴에서 Tools → MetaQuotes Language Editor 를 클릭하거나, MT5 내에서 직접 보기 → 마켓을 클릭합니다.",
      "마켓 탭에서 원하는 EA를 검색하고 무료 다운로드 또는 구매 버튼을 클릭합니다.",
      "다운로드가 완료되면 MT5가 자동으로 EA를 설치합니다.",
    ],
    note: "MQL5 계정이 없다면 먼저 mql5.com에서 무료 계정을 만드세요.",
    noteType: "info" as const,
  },
  {
    icon: FolderOpen,
    title: "2단계 — 수동 설치 (파일이 있는 경우)",
    content: [
      "MT5 상단 메뉴에서 파일(File) → 데이터 폴더 열기(Open Data Folder) 를 클릭합니다.",
      "열린 폴더에서 MQL5 → Experts 폴더로 이동합니다.",
      "EA 파일(.ex5 또는 .mq5)을 이 Experts 폴더에 복사(붙여넣기)합니다.",
    ],
    note: ".mq5 파일은 컴파일이 필요합니다. .ex5 파일은 컴파일 없이 바로 사용 가능합니다.",
    noteType: "warn" as const,
  },
  {
    icon: RefreshCw,
    title: "3단계 — MT5 새로고침",
    content: [
      "MT5의 네비게이터(Navigator) 창에서 마우스 오른쪽 버튼을 클릭합니다.",
      "새로고침(Refresh) 을 클릭합니다.",
      "Expert Advisors 항목 아래에 설치된 EA 이름이 나타나면 설치 완료입니다.",
    ],
    note: null,
    noteType: "info" as const,
  },
  {
    icon: MousePointer,
    title: "4단계 — 차트에 EA 적용",
    content: [
      "네비게이터에서 EA 이름을 마우스로 원하는 차트로 드래그하거나, EA 이름을 더블클릭합니다.",
      "설정 창이 열리면 Common 탭에서 Allow Algo Trading(알고리즘 트레이딩 허용)에 체크합니다.",
      "Inputs 탭에서 Lot Size 등 필요한 파라미터를 설정하고 OK를 클릭합니다.",
    ],
    note: null,
    noteType: "info" as const,
  },
  {
    icon: CheckCircle2,
    title: "5단계 — 자동매매 버튼 활성화",
    content: [
      "MT5 상단 툴바에서 자동매매(Algo Trading) 버튼을 클릭하여 활성화합니다.",
      "버튼이 초록색으로 바뀌고, 차트 우측 상단에 EA 이름 옆에 웃는 얼굴 아이콘이 표시되면 정상 작동 중입니다.",
      "얼굴 아이콘이 슬픈 표정이면 자동매매가 비활성화 상태입니다. 버튼을 다시 확인하세요.",
    ],
    note: "MT5를 종료하면 EA 자동매매도 함께 중단됩니다. 24시간 운영을 위해서는 VPS가 필요합니다.",
    noteType: "warn" as const,
  },
];

const EAInstall = () => {
  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        EA 설치 방법
      </h1>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        MQL5 마켓에서 EA를 받아 MT5에 설치하고 차트에 적용하는 전체 과정을 단계별로 안내합니다.
      </p>

      <div className="space-y-5">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="glass-card p-6 border border-border/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-semibold text-foreground">{s.title}</h2>
              </div>
              <ol className="space-y-3 mb-4">
                {s.content.map((line, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-foreground text-xs font-medium shrink-0 mt-0.5">
                      {j + 1}
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ol>
              {s.note && (
                <div
                  className={`flex items-start gap-2 p-3 rounded-lg text-xs ${
                    s.noteType === "warn"
                      ? "bg-yellow-500/5 border border-yellow-500/20 text-yellow-600"
                      : "bg-primary/5 border border-primary/20 text-muted-foreground"
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{s.note}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Checklist */}
      <div className="mt-10 glass-card p-6 border border-green-500/20 bg-green-500/5 rounded-xl">
        <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          설치 완료 체크리스트
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            "네비게이터에 EA 이름이 보인다",
            "차트에 EA가 적용되었다",
            "차트 우측 상단에 EA 이름이 표시된다",
            "얼굴 아이콘이 웃는 표정이다 (자동매매 활성화)",
            "자동매매(Algo Trading) 버튼이 초록색이다",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Prev/Next Navigation */}
      <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/50">
        <Link
          to="/ea"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          EA 홈
        </Link>
        <Link
          to="/ea/usage-guide"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          사용 가이드
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default EAInstall;
