import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeftRight, Bot, Shield } from "lucide-react";

const capabilities = [
  {
    icon: ArrowLeftRight,
    title: "Hedging 지원",
    text: "동일 종목에서 매수/매도 포지션 동시 보유 가능",
  },
  {
    icon: Bot,
    title: "자동화 실행",
    text: "규칙 기반 진입/청산 및 리스크 관리 자동화",
  },
  {
    icon: Shield,
    title: "양방향 시나리오",
    text: "상승/하락 양방향 대응 전략 실행 가능",
  },
];

export function ExecutionCapabilitiesSection() {
  return (
    <section className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          {/* Mobile: Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value="exec-env" className="border-none">
                <AccordionTrigger className="text-base font-semibold text-foreground py-3 hover:no-underline">
                  필요한 실행 환경 조건
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  Hedging, 양방향 포지션, 자동화된 리스크 관리가 가능한 실행 환경이 필요합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Desktop: Full display */}
          <div className="hidden md:block text-center">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
              실행 환경 요구사항
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              아래 기능을 지원하는 플랫폼에서 자동화 전략 운용이 가능합니다
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/30"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  <span className="text-xs text-muted-foreground text-center leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              특정 플랫폼이나 브로커를 추천하지 않습니다. 환경 비교 후 직접 선택하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
