import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Gateway() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 py-20">
        <div className="max-w-2xl mx-auto space-y-16">
          
          {/* SECTION 1: Strong Opening */}
          <section className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              당신이 매번 손실을 보는 이유
            </h1>
            <div className="space-y-1 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>전략이나 지표의 문제가 아닐 수 있습니다.</p>
              <p>대부분의 손실은 구조를 이해하지 못한 상태에서</p>
              <p>같은 결정을 반복하기 때문에 발생합니다.</p>
            </div>
          </section>

          {/* SECTION 2: Reframing the Problem */}
          <section className="text-center">
            <div className="bg-card/30 border border-border/50 rounded-lg p-8 md:p-10">
              <div className="space-y-1 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>많은 트레이더가 더 좋은 전략을 찾으려 하지만,</p>
                <p>문제는 전략 이전의 구조에 있습니다.</p>
                <p className="pt-2 text-foreground/80">
                  구조를 이해하지 못하면
                </p>
                <p className="text-foreground/80">
                  어떤 전략도 오래 작동하지 않습니다.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: Move Forward */}
          <section className="text-center pt-4">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
            >
              <Link to="/start">
                내 단계 선택하기
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </section>
          
        </div>
      </main>
    </div>
  );
}
