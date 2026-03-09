import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const advantages = [
  {
    title: "실수를 줄이는 구조가 있다",
    description: "손절/익절을 미리 설정하면, 감정이 개입할 틈이 없습니다.",
  },
  {
    title: "백테스트로 허상을 걸러낸다",
    description: "과거 데이터로 전략을 검증하면, 기대와 현실의 차이를 먼저 확인할 수 있습니다.",
  },
  {
    title: "자동화는 수익이 아니라 규칙이다",
    description: "EA(자동매매)는 '돈을 버는 도구'가 아니라, '규칙을 지키게 하는 구조'입니다.",
  },
];

const mistakes = [
  "설치만 하고 매매법부터 찾는다",
  "브로커/계좌/스프레드 구조를 모른다",
  "백테스트 없이 실전에 들어간다",
];

export default function WhyMT5() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto space-y-16">
            
            {/* Page Header */}
            <header className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                당신이 메타트레이더를 써야 하는 이유
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                트레이딩을 '감'이 아니라 '구조'로 바꾸기 위해서입니다.
              </p>
            </header>

            {/* Section 1: What is MT5 */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                메타트레이더는 차트가 아니라, 시스템 환경입니다.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                단순히 가격을 보는 도구가 아닙니다.
                <br />
                전략을 테스트하고, 자동화하고, 리스크를 통제할 수 있는 구조가 내장되어 있습니다.
              </p>
            </section>

            {/* Section 2: Three Advantages for Beginners */}
            <section className="space-y-6">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                초보에게 특히 유리한 3가지
              </h2>
              <div className="space-y-4">
                {advantages.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card/40 border border-border/50 rounded-lg p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Common Mistakes */}
            <section className="space-y-6">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                메타트레이더를 '잘못' 쓰는 사람들의 공통점
              </h2>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-5 space-y-3">
                {mistakes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center pt-4">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/guides/before-mt5">
                  MT5 시작 전, 반드시 확인할 3가지만 보기
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
