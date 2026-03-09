import { 
  Download, 
  FileDown, 
  Palette, 
  ClipboardCheck, 
  FileSpreadsheet,
  AlertTriangle,
  Info
} from "lucide-react";

const resources = [
  {
    id: "chart-preset",
    icon: Palette,
    title: "MT5 차트 프리셋",
    format: ".tpl",
    downloadLink: "/downloads/mt5-chart-preset.tpl",
    description: "깔끔하게 정리된 MT5 차트 설정 파일입니다. 색상, 그리드, 기본 표시 요소가 가독성 중심으로 설정되어 있습니다.",
    recommendedFor: [
      "MT5를 처음 설치한 분",
      "기본 차트 설정이 복잡하게 느껴지는 분",
      "깔끔한 차트 환경을 원하는 분",
    ],
    howToUse: [
      "MT5 열기 → 차트 창 우클릭 → '템플릿' → '템플릿 불러오기' 선택",
      "다운로드한 .tpl 파일 선택",
    ],
    caution: "이 프리셋은 개인 취향에 맞게 수정하실 수 있습니다. 보조지표는 포함되어 있지 않습니다.",
  },
  {
    id: "backtest-checklist",
    icon: ClipboardCheck,
    title: "백테스트 체크리스트",
    format: ".txt",
    downloadLink: "/downloads/backtest-checklist.txt",
    description: "백테스트를 실행하기 전, 결과를 해석할 때 확인해야 할 항목들을 정리한 체크리스트입니다.",
    recommendedFor: [
      "EA나 전략을 백테스트하려는 분",
      "백테스트 결과를 믿어도 되는지 판단하고 싶은 분",
      "과최적화(overfitting)를 피하고 싶은 분",
    ],
    howToUse: [
      "백테스트 실행 전 체크리스트 항목 확인",
      "결과 분석 시 각 항목에 맞춰 점검",
    ],
    caution: "체크리스트를 통과했다고 해서 전략이 수익을 보장하는 것은 아닙니다. 과거 성과는 미래 결과를 보장하지 않습니다.",
  },
  {
    id: "trading-journal",
    icon: FileSpreadsheet,
    title: "트레이딩 저널",
    format: ".csv",
    downloadLink: "/downloads/trading-journal.csv",
    description: "거래 기록을 체계적으로 관리할 수 있는 CSV 형식의 저널 템플릿입니다. 엑셀이나 구글 시트에서 열 수 있습니다.",
    recommendedFor: [
      "자신의 거래 패턴을 분석하고 싶은 분",
      "감정적 매매를 줄이고 싶은 분",
      "수익/손실의 원인을 파악하고 싶은 분",
    ],
    howToUse: [
      "CSV 파일을 엑셀 또는 구글 시트에서 열기",
      "거래 후 진입 이유, 결과, 감정 상태 등을 기록",
      "주간/월간 단위로 패턴 분석",
    ],
    caution: "저널 작성 자체가 수익을 만들어주지 않습니다. 기록한 내용을 바탕으로 스스로 개선점을 찾아야 합니다.",
  },
];

const Resources = () => {
  return (
    <>
        {/* Intro Section */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Download className="w-5 h-5" />
                <span className="text-sm font-medium">도구 및 리소스</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                설정과 프로세스가 결과를 만듭니다
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                좋은 트레이더는 직감으로 매매하지 않습니다.
                <br />
                명확한 설정, 체계적인 기록, 반복 가능한 프로세스를 갖추고 있습니다.
              </p>
              <p className="text-sm text-muted-foreground">
                아래 자료들은 그 기반을 만드는 데 도움이 됩니다.
                도구는 무료이지만, 실제로 사용하고 습관화하는 것은 본인의 몫입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Blocks */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="glass-card p-6 md:p-8"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <resource.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-foreground mb-1">
                          {resource.title}
                        </h2>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {resource.format}
                        </span>
                      </div>
                    </div>
                    <a
                      href={resource.downloadLink}
                      download
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
                    >
                      <FileDown className="w-4 h-4" />
                      다운로드
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Recommended For */}
                    <div>
                      <h3 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wide">
                        이런 분께 추천합니다
                      </h3>
                      <ul className="space-y-2">
                        {resource.recommendedFor.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-profit mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to Use */}
                    <div>
                      <h3 className="text-xs font-medium text-foreground mb-3 uppercase tracking-wide">
                        사용 방법
                      </h3>
                      <ol className="space-y-2">
                        {resource.howToUse.map((step, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-xs text-primary font-medium mt-0.5 shrink-0">
                              {idx + 1}.
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Caution */}
                  <div className="mt-6 p-4 rounded-lg bg-secondary/30 flex items-start gap-3">
                    <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {resource.caution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-12 border-t border-border">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-6 md:p-8 bg-destructive/5 border-destructive/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-foreground mb-3">
                      도구 사용에 관한 고지
                    </h2>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-foreground">어떤 도구도 수익을 보장하지 않습니다.</strong>
                        <br />
                        위 자료들은 트레이딩 환경 설정과 기록 습관을 돕기 위한 보조 도구일 뿐입니다.
                      </p>
                      <p>
                        <strong className="text-foreground">모든 거래 결정은 본인의 책임입니다.</strong>
                        <br />
                        이 자료를 사용한 결과에 대해 본 사이트는 어떠한 법적 책임도 지지 않습니다.
                      </p>
                      <p>
                        <strong className="text-foreground">레버리지 거래는 원금 손실 위험이 있습니다.</strong>
                        <br />
                        실거래 전 충분한 학습과 데모 거래를 권장하며, 감당 가능한 금액만 투자하세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Resources;
