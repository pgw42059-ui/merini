import { Clock } from "lucide-react";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const topics = [
  {
    title: "지수선물이란?",
    content: "S&P 500, 나스닥 100 등 주가지수를 기초자산으로 하는 파생상품입니다. 실물 주식을 보유하지 않고도 지수의 등락에 따라 수익을 낼 수 있습니다.",
  },
  {
    title: "브로커의 역할",
    content: "브로커는 트레이더와 시장을 연결합니다. 스프레드, 실행 속도, 슬리피지는 브로커에 따라 크게 달라질 수 있습니다.",
  },
  {
    title: "스프레드란?",
    content: "매수가(Ask)와 매도가(Bid)의 차이입니다. 이 차이가 거래 비용이 되며, 스캘핑 전략에서는 특히 중요합니다.",
  },
  {
    title: "레버리지의 양면성",
    content: "레버리지는 적은 자본으로 큰 포지션을 취할 수 있게 합니다. 수익도, 손실도 배가됩니다. 리스크 관리의 핵심입니다.",
  },
];

const relatedItems: RelatedItem[] = [
  {
    title: "전략 구조 학습",
    description: "진입/청산 로직, 시간대, 손익비 설계 원리",
    href: "/guides/strategy",
    badge: "STEP 2",
  },
  {
    title: "리스크 관리",
    description: "포지션 사이징, 드로우다운 관리, 자본 보호 규칙",
    href: "/guides/risk",
    badge: "STEP 3",
  },
];

const MarketBasics = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-16 border-b border-border/50">
        <div className="container px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                STEP 1
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                15분
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              시장 구조 이해
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              지수선물, 브로커, 스프레드의 기본 개념부터 시작합니다.
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

export default MarketBasics;
