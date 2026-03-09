import { useState } from "react";
import { FileText, BookMarked, Layers, AlertTriangle, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "updates", label: "최신 업데이트", icon: Clock },
  { id: "guides", label: "필독 가이드", icon: BookMarked },
  { id: "strategies", label: "전략 라이브러리", icon: Layers },
  { id: "issues", label: "실전 이슈", icon: AlertTriangle },
];

const contentByTab: Record<string, { title: string; desc: string; date?: string; tag?: string; link: string }[]> = {
  updates: [
    { title: "NQ 스캘핑 전략 v2.1 업데이트", desc: "진입 필터 추가 및 슬리피지 대응 로직 개선", date: "2025.01.05", tag: "전략", link: "/blog" },
    { title: "MT5 빌드 4580 호환성 패치", desc: "최신 빌드 대응 EA 수정 완료", date: "2025.01.03", tag: "시스템", link: "/blog" },
    { title: "새해 브로커 스케줄 안내", desc: "1월 첫째 주 거래시간 변경 사항", date: "2025.01.01", tag: "공지", link: "/blog" },
  ],
  guides: [
    { title: "MT5 처음 설치부터 첫 거래까지", desc: "완전 초보자를 위한 단계별 가이드", tag: "입문", link: "/guides/mt5-pc" },
    { title: "EA 백테스트 제대로 하는 법", desc: "Tick Data Suite 없이도 신뢰할 수 있는 테스트", tag: "중급", link: "/guides" },
    { title: "VPS 선택과 설정 가이드", desc: "지연시간, 위치, 비용 기준 비교", tag: "고급", link: "/guides" },
  ],
  strategies: [
    { title: "NQ 아시안 세션 브레이크아웃", desc: "아시안 레인지 돌파 전략, 백테스트 3년 데이터", tag: "검증됨", link: "/markets" },
    { title: "ES 변동성 수축 패턴", desc: "ATR 기반 진입, 드로우다운 10% 이내", tag: "검증됨", link: "/markets" },
    { title: "골드 스윙 추세 추종", desc: "4시간봉 기반 중기 전략", tag: "베타", link: "/markets" },
  ],
  issues: [
    { title: "스프레드 확대 시 EA 동작 이슈", desc: "뉴스 시간대 필터 필수, 최대 스프레드 설정법", tag: "주의", link: "/blog" },
    { title: "슬리피지가 백테스트와 다른 이유", desc: "실시장 vs 히스토리 데이터 차이점", tag: "필독", link: "/blog" },
    { title: "브로커별 틱 데이터 품질 비교", desc: "IC Markets, Pepperstone, Exness 비교", tag: "분석", link: "/blog" },
  ],
};

export function ContentTabsSection() {
  const [activeTab, setActiveTab] = useState("updates");

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            콘텐츠 허브
          </h2>
          <p className="text-muted-foreground mt-2">
            업데이트, 가이드, 전략, 실전 이슈를 한곳에서
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {contentByTab[activeTab].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group glass-card p-5 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                {item.tag && (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {item.tag}
                  </span>
                )}
                {item.date && (
                  <span className="text-[10px] text-muted-foreground">
                    {item.date}
                  </span>
                )}
              </div>
              <h3 className="text-base font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.desc}
              </p>
              <div className="mt-3 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            전체 콘텐츠 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
