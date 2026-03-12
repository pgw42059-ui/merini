import { Link } from "react-router-dom";
import { ShoppingBag, Search, Star, BarChart3, Download, AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const sections = [
  {
    icon: Search,
    title: "MQL5 마켓 접근 방법",
    items: [
      { label: "MT5 내에서", desc: "MT5 상단 메뉴 → 보기(View) → 마켓(Market) 클릭. MT5 안에서 바로 탐색, 구매, 다운로드 가능." },
      { label: "웹에서", desc: "웹 브라우저에서 mql5.com/ko/market 접속. 로그인 후 PC MT5와 연동됩니다." },
    ],
  },
  {
    icon: Star,
    title: "EA 평가 시 확인할 것",
    items: [
      { label: "리뷰와 별점", desc: "실제 사용자 리뷰를 꼼꼼히 읽으세요. 별점보다 리뷰 내용이 더 중요합니다." },
      { label: "공개된 백테스트 결과", desc: "개발자가 제공하는 백테스트 기간, 심볼, 파라미터를 확인합니다. 단기간 데이터만 있으면 주의하세요." },
      { label: "실계좌 통계 (Myfxbook 등)", desc: "실계좌 운영 통계가 있으면 신뢰도가 높아집니다. 없다면 신중하게 접근하세요." },
      { label: "업데이트 빈도", desc: "개발자가 EA를 꾸준히 업데이트하는지 확인합니다. 마지막 업데이트 날짜를 체크하세요." },
      { label: "Q&A 응답 여부", desc: "개발자가 사용자 질문에 적극적으로 답변하는지 확인합니다." },
    ],
  },
  {
    icon: BarChart3,
    title: "무료 EA vs 유료 EA",
    items: [
      { label: "무료 EA", desc: "품질 편차가 큽니다. 다운로드 수와 리뷰를 꼼꼼히 확인하고, 반드시 데모 계좌에서 충분히 테스트하세요." },
      { label: "유료 EA", desc: "가격이 품질을 보장하지는 않습니다. 환불 정책을 확인하고, 구매 전 데모 버전(있다면)을 먼저 테스트하세요." },
      { label: "임대(Rent) 옵션", desc: "일부 EA는 월 단위 임대가 가능합니다. 비용 부담 없이 테스트하기 좋습니다." },
    ],
  },
  {
    icon: Download,
    title: "구매 후 설치 방법",
    items: [
      { label: "MT5 내 마켓에서 구매", desc: "구매 완료 후 다운로드 버튼이 활성화됩니다. 클릭하면 MT5가 자동으로 EA를 설치합니다." },
      { label: "다운로드 확인", desc: "네비게이터(Navigator) → Expert Advisors 에 EA 이름이 나타나면 설치 완료. 표시 안 되면 새로고침(Refresh)을 클릭합니다." },
      { label: "여러 기기 사용", desc: "구매한 EA는 동일 MQL5 계정으로 로그인한 MT5에서 사용 가능합니다. 기기 수 제한이 있을 수 있으니 약관을 확인하세요." },
    ],
  },
];

const EAMQL5Market = () => {
  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <PageSEO title="MQL5 마켓 — EA·인디케이터 구매 가이드" description="MQL5 마켓에서 EA와 인디케이터를 구매하고 MT5에 설치하는 방법을 단계별로 안내합니다." path="/ea/mql5-market" />
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <ShoppingBag className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">MQL5 마켓 활용법</h1>
      </div>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        MQL5 마켓은 전 세계 개발자들이 만든 EA, 지표, 스크립트를 사고파는 공식 마켓플레이스입니다.
        올바른 EA를 선택하는 방법부터 설치까지 안내합니다.
      </p>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <section key={i}>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-primary/10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <h2 className="font-semibold text-foreground">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.items.map((item, j) => (
                  <div key={j} className="glass-card p-4 border border-border/50 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-0.5">{item.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
      <RelatedContent items={[
          { title: "EA 설치 방법", description: "구매한 EA 설치하는 방법", href: "/ea/install", badge: "설치" },
          { title: "EA 사용 가이드", description: "EA 파라미터 설정 완전 가이드", href: "/ea/usage-guide", badge: "운영" },
          { title: "백테스트 가이드", description: "구매 전 백테스트로 검증하기", href: "/ea/backtest", badge: "검증" }
        ]} />

            </section>
          );
        })}
      </div>

      {/* Warning */}
      <div className="mt-10 glass-card p-5 border border-yellow-500/30 bg-yellow-500/5 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-2">구매 전 반드시 확인</p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• 과거 수익률이 미래 수익을 보장하지 않습니다. 과거 백테스트 결과가 좋아도 실계좌에서는 다를 수 있습니다.</li>
              <li>• 환불 정책을 확인하세요. MQL5 마켓의 디지털 상품은 일반적으로 환불이 어렵습니다.</li>
              <li>• 데모 버전이 있다면 반드시 먼저 테스트하고 구매를 결정하세요.</li>
              <li>• 외부 사이트의 불법 복제(크랙) EA는 악성코드 위험이 있으므로 MQL5 공식 마켓만 이용하세요.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/50">
        <Link
          to="/ea/vps"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          VPS 설정
        </Link>
        <Link
          to="/ea"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          EA 홈
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default EAMQL5Market;
