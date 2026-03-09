import { ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    number: 1,
    headline: "브로커마다 거래 조건은 완전히 다릅니다",
    explanation: "같은 MT5라도 브로커가 다르면\n스프레드, 체결 방식, 수수료 구조가 전혀 다릅니다.",
    bullets: [
      "고정 스프레드 vs 변동 스프레드",
      "체결 지연과 슬리피지",
      "숨겨진 수수료 구조",
    ],
    emphasis: "문제는 실력이 아니라, 조건일 수 있습니다.",
  },
  {
    number: 2,
    headline: "계좌 종류에 따라 결과가 달라집니다",
    explanation: "같은 매매를 해도\n계좌 종류에 따라 손익은 다르게 나옵니다.",
    bullets: [
      "스탠다드 / ECN / 센트 계좌 차이",
      "레버리지 설정의 의미",
      "최소 거래 단위와 리스크 착시",
    ],
    emphasis: "계좌는 '그릇'이고, 결과는 그 안에서 결정됩니다.",
  },
  {
    number: 3,
    headline: "주문 방식과 스프레드를 이해하지 않으면 항상 불리합니다",
    explanation: "초보 손실의 상당수는\n'언제, 어떻게 체결되는지'를 모르기 때문에 발생합니다.",
    bullets: [
      "시장가 주문과 지정가 주문의 차이",
      "스프레드가 넓어지는 순간",
      "뉴스 시간대 체결 리스크",
    ],
    emphasis: "모르고 누르면, 항상 불리한 쪽에서 체결됩니다.",
  },
];

export default function BeforeMT5() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto space-y-12">

            {/* Page Header */}
            <header className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                MT5 시작 전, 반드시 확인할 3가지
              </h1>
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>이 세 가지를 모르고 시작하면,</p>
                <p>전략과 실력과 무관하게 손실이 발생합니다.</p>
              </div>
            </header>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.number}
                  className="bg-card/40 border border-border/50 rounded-lg p-6 md:p-8 space-y-5"
                >
                  {/* Section Headline */}
                  <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                      {section.number}
                    </span>
                    <span>{section.headline}</span>
                  </h2>

                  {/* Explanation */}
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line pl-10">
                    {section.explanation}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 pl-10">
                    {section.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Emphasis */}
                  <div className="pl-10 pt-2">
                    <p className="text-sm md:text-base font-medium text-foreground/90 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      {section.emphasis}
                    </p>
                  </div>
                </section>
              ))}
            </div>

            {/* Final Section */}
            <section className="text-center space-y-6 pt-4">
              <div className="text-muted-foreground leading-relaxed">
                <p>이 세 가지를 이해하면,</p>
                <p>매매 실력 이전에 손실을 줄일 수 있는 구조를 갖추게 됩니다.</p>
              </div>

              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/guides/mt5-pc">
                  MT5 구조를 기준으로 세팅하는 방법 보기
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
