import { BarChart3, Shield, FileCode, Package } from "lucide-react";

const values = [
  {
    icon: BarChart3,
    title: "실전 데이터 기준",
    description: "백테스트 리포트, 실제 거래 로그, 드로우다운 기록까지 투명하게 공개합니다.",
  },
  {
    icon: Shield,
    title: "리스크 설계 중심",
    description: "수익률보다 생존률. 포지션 사이징과 드로우다운 한도를 먼저 정의합니다.",
  },
  {
    icon: FileCode,
    title: "문서화된 전략",
    description: "모든 전략은 진입/청산 조건, 파라미터, 예외 상황까지 문서로 정리됩니다.",
  },
  {
    icon: Package,
    title: "재사용 가능한 도구",
    description: "템플릿, 프리셋, 체크리스트. 바로 적용할 수 있는 리소스를 제공합니다.",
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            메린이가 다루는 것
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            트레이딩 교육 콘텐츠는 많습니다. 우리는 이것에 집중합니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
