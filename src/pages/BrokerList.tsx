import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, ExternalLink, Star, Info } from "lucide-react";
import { brokers } from "@/data/brokers";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { PageSEO } from "@/components/PageSEO";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const BrokerList = () => {
  const featured = brokers.filter((b) => b.featured);
  const regular = brokers.filter((b) => !b.featured);

  return (
    <div className="container px-4 py-8 max-w-5xl mx-auto">
      <PageSEO title="해외선물 브로커 비교 추천 — MT5 지원 브로커" description="MT5를 지원하는 해외선물 브로커를 수수료, 레버리지, 안전성, 한국어 지원으로 비교 분석합니다." path="/brokers"
        faqs={[
          { question: "해외선물 브로커 선택 시 가장 중요한 기준은?", answer: "규제 기관 등록 여부(FCA, ASIC, CySEC 등), 수수료와 스프레드, MT5 지원 여부, 한국어 고객 지원을 우선 확인하세요." },
          { question: "MT5를 지원하는 브로커는 어디인가요?", answer: "Pepperstone, IC Markets, XM, FP Markets 등 주요 국제 브로커들이 MT5를 지원합니다. 각 브로커의 계좌 유형과 수수료 구조가 다르므로 비교 후 선택하세요." },
          { question: "데모 계좌로 연습할 수 있나요?", answer: "네, 대부분의 브로커는 무료 데모 계좌를 제공합니다. 실제 시장 데이터로 리스크 없이 MT5 거래를 연습할 수 있습니다." },
          { question: "브로커 계좌 개설에 최소 입금액은 얼마인가요?", answer: "브로커마다 다르지만, 많은 브로커들이 $200~$500의 최소 입금액을 요구합니다. 일부는 최소 입금액이 없거나 $100 이하인 경우도 있습니다." },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">브로커 비교</h1>
        <p className="text-muted-foreground leading-relaxed">
          MT5를 지원하는 해외 브로커를 비교합니다. 각 브로커의 주요 스펙과 특징을 확인하고
          본인에게 맞는 브로커를 선택하세요.
        </p>
      </div>

      {/* Top ad */}
      <AdPlaceholder slot="브로커목록_상단" format="leaderboard" className="mb-10" />

      {/* Disclaimer */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30 border border-border/50 text-xs text-muted-foreground mb-8">
        <Info className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
        <span>
          일부 브로커 링크는 제휴 링크입니다. 링크를 통해 가입 시 사이트 운영 수익이 발생할 수 있습니다.
          모든 정보는 참고용이며 투자 결정 전 각 브로커의 공식 사이트에서 직접 확인하시기 바랍니다.
        </span>
      </div>

      {/* Featured brokers */}
      {featured.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <h2 className="text-base font-semibold text-foreground">추천 브로커</h2>
            <span className="text-xs text-muted-foreground">(광고)</span>
          </div>
          <div className="space-y-4">
            {featured.map((broker) => (
              <BrokerCard key={broker.slug} broker={broker} featured />
            ))}
          </div>
        </section>
      )}

      {/* Regular brokers */}
      {regular.length > 0 && (
        <section className="mb-10">
          <h2 className="text-base font-semibold text-foreground mb-4">전체 브로커 목록</h2>
          <div className="space-y-4">
            {regular.map((broker) => (
              <BrokerCard key={broker.slug} broker={broker} featured={false} />
            ))}
          </div>
      <RelatedContent items={[
          { title: "계좌 유형", description: "브로커별 계좌 유형 이해하기", href: "/guides/account-types", badge: "가이드" },
          { title: "MT5 시작 전 준비", description: "브로커 계좌 개설 준비사항", href: "/guides/before-mt5", badge: "준비" },
          { title: "무료 상담 신청", description: "브로커 선택 1:1 무료 상담", href: "/consult", badge: "상담" }
        ]} />

        </section>
      )}

      {/* Middle ad */}
      <AdPlaceholder slot="브로커목록_중간" format="rectangle" className="mb-10" />

      {/* Comparison tips */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">브로커 선택 시 확인 사항</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "MT5 헤징 계좌 지원", desc: "EA 자동매매를 운영한다면 헤징 계좌가 필수입니다." },
            { title: "규제 기관", desc: "FCA, ASIC, CySEC 등 신뢰할 수 있는 규제기관 등록 여부를 확인하세요." },
            { title: "스프레드와 커미션", desc: "실제 거래 비용을 계산해보세요. ECN 계좌는 스프레드가 낮지만 커미션이 있습니다." },
            { title: "입출금 방법", desc: "한국에서 사용 가능한 입출금 방법과 처리 시간을 확인하세요." },
            { title: "고객지원", desc: "한국어 지원 여부와 응답 시간을 확인하세요." },
            { title: "데모 계좌", desc: "반드시 데모 계좌에서 먼저 테스트 후 실계좌로 이동하세요." },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom ad */}
      <AdPlaceholder slot="브로커목록_하단" format="leaderboard" />
    </div>
  );
};

function BrokerCard({ broker, featured }: { broker: typeof brokers[0]; featured: boolean }) {
  return (
    <div
      className={`glass-card p-5 border rounded-xl ${
        featured ? "border-yellow-500/30 bg-yellow-500/5" : "border-border/50"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-foreground">{broker.name}</h3>
            {featured && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-500 font-medium">
                광고
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{broker.tagline}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Link
            to={`/brokers/${broker.slug}`}
            className="text-xs px-3 py-1.5 rounded-md border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            상세 보기
          </Link>
          <a
            href={broker.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-1"
          >
            가입하기
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Specs grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { label: "최소 입금", value: broker.minDeposit },
          { label: "레버리지", value: broker.leverage },
          { label: "스프레드", value: broker.spreadFrom },
          { label: "체결 방식", value: broker.executionType },
        ].map((spec, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground/60 mb-0.5">{spec.label}</p>
            <p className="text-xs font-medium text-foreground">{spec.value}</p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {broker.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
            {tag}
          </span>
        ))}
        <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
          broker.mt5 ? "bg-green-500/10 text-green-400" : "bg-secondary text-muted-foreground"
        }`}>
          {broker.mt5 ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
          MT5
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
          broker.koreanSupport ? "bg-blue-500/10 text-blue-400" : "bg-secondary text-muted-foreground"
        }`}>
          {broker.koreanSupport ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
          한국어
        </span>
        <span className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${
          broker.hedging ? "bg-purple-500/10 text-purple-400" : "bg-secondary text-muted-foreground"
        }`}>
          {broker.hedging ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
          헤징
        </span>
      </div>
    </div>
  );
}

export default BrokerList;
