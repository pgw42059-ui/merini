import { Clock } from "lucide-react";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const topics = [
  {
    title: "전략의 구성 요소",
    content: "모든 전략은 진입 조건, 청산 조건, 포지션 사이징으로 구성됩니다. 어느 하나라도 불명확하면 일관된 거래가 불가능합니다.",
  },
  {
    title: "진입 로직 설계",
    content: "언제 매수/매도할 것인가? 가격, 시간, 지표 조건을 조합하여 명확한 트리거를 정의해야 합니다.",
  },
  {
    title: "청산 로직 설계",
    content: "익절과 손절 기준을 미리 정합니다. 감정이 아닌 규칙에 따라 포지션을 닫습니다.",
  },
  {
    title: "손익비(R:R)의 의미",
    content: "리스크 대비 리워드 비율입니다. 승률 50%라도 손익비 2:1이면 수익이 납니다. 승률과 손익비의 균형을 이해하세요.",
  },
];

const relatedItems: RelatedItem[] = [
  {
    title: "시장 구조 이해",
    description: "지수선물, 브로커, 스프레드의 기본 개념",
    href: "/guides/market-basics",
    badge: "STEP 1",
  },
  {
    title: "리스크 관리",
    description: "포지션 사이징, 드로우다운 관리, 자본 보호 규칙",
    href: "/guides/risk",
    badge: "STEP 3",
  },
];

const Strategy = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b border-border/50">
        <div className="container px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                STEP 2
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                30분
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              전략 구조 학습
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              진입/청산 로직, 시간대, 손익비 설계 원리를 배웁니다.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            {topics.map((topic, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border/50 bg-card/30">
                <h2 className="text-lg font-medium text-foreground mb-3">{topic.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{topic.content}</p>
              </div>
            ))}

            {/* Related Content */}
            <RelatedContent items={relatedItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
