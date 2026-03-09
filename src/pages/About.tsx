import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  ShieldCheck, 
  Target, 
  Heart, 
  XCircle, 
  AlertTriangle,
  BookOpen
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-medium">사이트 소개</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                이 사이트가 존재하는 이유
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                무엇을 하는 곳인지, 무엇을 하지 않는 곳인지 명확하게 설명합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Why we exist */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  왜 이 사이트를 만들었는가
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  트레이딩 관련 정보를 찾다 보면, 대부분의 사이트가 비슷한 패턴을 보입니다.
                </p>
                <p>
                  "월 수익률 300%", "누구나 쉽게", "지금 가입하면 무료"...
                  <br />
                  과장된 수익 약속, 검증되지 않은 시그널 판매, 
                  불투명한 구조의 자동매매 서비스.
                </p>
                <p>
                  이런 환경에서 진지하게 트레이딩을 배우고 싶은 사람은 
                  어디서 시작해야 할지 알기 어렵습니다.
                </p>
                <p className="text-foreground font-medium">
                  이 사이트는 다르게 접근합니다.
                </p>
                <ul className="space-y-2 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      수익을 약속하지 않습니다. 대신 <strong className="text-foreground">구조와 원리</strong>를 설명합니다.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      "이렇게 하세요"라고 강요하지 않습니다. 
                      <strong className="text-foreground">판단 기준</strong>을 제공합니다.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>
                      초보자부터 고급 사용자까지, <strong className="text-foreground">각자의 단계에 맞는 정보</strong>를 제공합니다.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core beliefs */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-profit/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-profit" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  트레이딩과 리스크에 대한 우리의 믿음
                </h2>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-5">
                  <h3 className="text-base font-medium text-foreground mb-2">
                    1. 트레이딩은 쉽지 않습니다
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    통계적으로 개인 트레이더 대부분이 손실을 봅니다. 
                    이것은 개인의 능력 부족이 아니라, 시장의 본질입니다. 
                    쉽게 돈을 벌 수 있다는 말은 거짓입니다.
                  </p>
                </div>

                <div className="glass-card p-5">
                  <h3 className="text-base font-medium text-foreground mb-2">
                    2. 리스크 관리가 수익보다 먼저입니다
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    어떤 전략도 항상 수익을 낼 수 없습니다. 
                    중요한 것은 손실이 났을 때 계좌가 무너지지 않도록 설계하는 것입니다. 
                    수익은 리스크 관리 위에서만 지속 가능합니다.
                  </p>
                </div>

                <div className="glass-card p-5">
                  <h3 className="text-base font-medium text-foreground mb-2">
                    3. 자동매매(EA)는 마법이 아닙니다
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    EA는 사람의 감정을 배제하고 규칙대로 실행하는 도구입니다. 
                    하지만 잘못된 전략을 자동화하면 손실도 자동화됩니다. 
                    EA를 쓰기 전에 그 구조와 한계를 이해해야 합니다.
                  </p>
                </div>

                <div className="glass-card p-5">
                  <h3 className="text-base font-medium text-foreground mb-2">
                    4. 과거 성과는 미래를 보장하지 않습니다
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    백테스트에서 수익이 났다고 해서 실거래에서도 그럴 것이라는 보장은 없습니다. 
                    시장은 계속 변하고, 과거에 작동한 전략이 미래에도 작동할 거란 근거는 없습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What we never do */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  이 사이트에서 절대 하지 않는 것
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">
                        수익 보장
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        "월 몇 %", "원금 보장", "손실 시 환불" 같은 약속을 하지 않습니다.
                        어떤 전략도 수익을 보장할 수 없으며, 그런 약속은 법적으로도 문제가 됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">
                        시그널 서비스 / 카피트레이딩
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        "이 타이밍에 매수하세요", "제 거래를 그대로 따라하세요" 같은 서비스를 제공하지 않습니다.
                        타인의 판단에 의존하는 거래는 스스로 통제할 수 없는 리스크를 만듭니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">
                        계좌 운용 / 투자금 위탁
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        고객의 자금을 직접 운용하거나 위탁받지 않습니다.
                        본 사이트는 금융투자업 등록 업체가 아니며, 투자 조언을 제공하지 않습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-medium text-foreground mb-1">
                        과장된 마케팅
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        "누구나 쉽게", "지금 바로 시작", "한정 기회" 같은 긴급성을 조장하는 문구를 사용하지 않습니다.
                        트레이딩은 신중하게 접근해야 하며, 조급함은 손실로 이어집니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How to use responsibly */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  이 사이트를 올바르게 사용하는 방법
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  이 사이트는 정보와 도구를 제공하지만, 
                  <strong className="text-foreground">모든 결정과 결과는 본인의 책임</strong>입니다.
                </p>

                <div className="glass-card p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-primary font-medium shrink-0">1.</span>
                    <p className="text-sm">
                      <strong className="text-foreground">먼저 배우세요.</strong>
                      <br />
                      도구나 EA를 바로 사용하기 전에, 교육 콘텐츠를 통해 구조와 원리를 이해하세요.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-primary font-medium shrink-0">2.</span>
                    <p className="text-sm">
                      <strong className="text-foreground">데모 계좌로 시작하세요.</strong>
                      <br />
                      실제 돈을 투입하기 전에 반드시 데모 환경에서 충분히 테스트하세요.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-primary font-medium shrink-0">3.</span>
                    <p className="text-sm">
                      <strong className="text-foreground">잃어도 되는 금액만 투자하세요.</strong>
                      <br />
                      레버리지 거래는 원금 전액 손실 가능성이 있습니다. 생활비나 빚은 절대 투자하지 마세요.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-primary font-medium shrink-0">4.</span>
                    <p className="text-sm">
                      <strong className="text-foreground">의심하고 검증하세요.</strong>
                      <br />
                      이 사이트의 정보도 맹신하지 마세요. 스스로 확인하고, 이해한 후에 적용하세요.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-lg border border-border bg-secondary/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      본 사이트의 모든 콘텐츠는 정보 제공 목적이며, 개인화된 투자 조언이 아닙니다.
                      거래로 인한 손실에 대해 본 사이트는 어떠한 법적 책임도 지지 않습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
