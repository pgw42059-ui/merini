import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Settings, TrendingUp } from "lucide-react";

const levels = [
  {
    level: 1,
    icon: HelpCircle,
    title: "메타트레이더가 처음이에요",
    description: "MT5를 들어봤거나, 설치조차 해본 적 없는 분",
    forWho: [
      "메타트레이더가 뭔지 모르겠는 분",
      "브로커, 차트, 주문 같은 용어가 낯선 분",
      "혹시 불법인지 걱정되는 분",
    ],
    whatYouGet: [
      "MT5가 무엇인지 기초 설명",
      "설치부터 로그인까지 단계별 가이드",
      "차트 열기, 버튼 조작법 안내",
    ],
    cta: "메타트레이더 처음입니다",
    href: "/guides/why-mt5",
    color: "primary",
  },
  {
    level: 2,
    icon: Settings,
    title: "MT5를 써봤지만 잘 모르겠어요",
    description: "설치는 했지만 설정이나 구조를 정확히 이해하지 못하는 분",
    forWho: [
      "차트는 열어봤지만 설정법을 모르는 분",
      "보조지표, 템플릿 등을 제대로 활용 못하는 분",
      "브로커마다 왜 다른지 궁금한 분",
    ],
    whatYouGet: [
      "보조지표와 차트 설정 정리",
      "브로커 비교 및 선택 기준",
      "무료 템플릿, 체크리스트 다운로드",
    ],
    cta: "기본 사용은 해봤습니다",
    href: "/guides/resources",
    color: "accent",
  },
  {
    level: 3,
    icon: TrendingUp,
    title: "자동매매(EA)를 검토 중이에요",
    description: "전략과 시스템에 관심이 있고, EA 구독을 고려하는 분",
    forWho: [
      "자동매매가 뭔지 대략 알고 있는 분",
      "수익 과장 광고에 속고 싶지 않은 분",
      "백테스트, 리스크를 직접 확인하고 싶은 분",
    ],
    whatYouGet: [
      "전략 구조와 진입 조건 문서",
      "백테스트 조건과 결과 투명 공개",
      "리스크 설계 기준과 구독 구조 설명",
    ],
    cta: "전략·자동매매를 이해합니다",
    href: "/markets",
    color: "secondary",
  },
];

export default function Start() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Intro Section */}
        <section className="py-10 md:py-16">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                지금 단계를 선택하세요
              </h1>
              <p className="text-sm text-muted-foreground">
                가장 가까운 상태를 고르면, 그에 맞는 가이드로 안내합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Level Cards */}
        <section className="pb-20">
          <div className="container px-4">
            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {levels.map((level) => (
                <div
                  key={level.level}
                  className="glass-card p-6 flex flex-col h-full"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <level.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground mb-1 block">
                        단계 {level.level}
                      </span>
                      <h2 className="text-lg font-semibold text-foreground">
                        {level.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5">
                    {level.description}
                  </p>

                  {/* For Who */}
                  <div className="mb-5">
                    <h3 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">
                      이런 분께 맞습니다
                    </h3>
                    <ul className="space-y-2">
                      {level.forWho.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You Get */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">
                      이 단계에서 얻는 것
                    </h3>
                    <ul className="space-y-2">
                      {level.whatYouGet.map((item, idx) => (
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

                  {/* CTA */}
                  <Button asChild className="w-full gap-2 mt-auto">
                    <Link to={level.href}>
                      {level.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Bottom message */}
            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground">
                어느 단계를 선택하든, 판매나 가입을 강요하지 않습니다.
                <br />
                천천히 읽어보고, 필요하면 다음 단계로 진행하세요.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
