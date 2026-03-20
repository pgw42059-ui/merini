import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, XCircle, ExternalLink, ArrowLeft, AlertTriangle, Info } from "lucide-react";
import { brokers } from "@/data/brokers";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { PageSEO } from "@/components/PageSEO";

const BrokerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const broker = brokers.find((b) => b.slug === slug);

  if (!broker) {
    return <Navigate to="/brokers" replace />;
  }

  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <PageSEO
        title={`${broker.name} 브로커 상세 리뷰 — 스프레드·규제·플랫폼 비교`}
        description={`${broker.name} 브로커 상세 분석: ${broker.tagline}. 규제기관, 최소 증거금, 스프레드, 플랫폼 비교.`}
        path={`/brokers/${broker.slug}`}
        type="article"
      />
      {/* Back */}
      <Link
        to="/brokers"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        브로커 목록으로
      </Link>

      {/* Top ad */}
      <AdPlaceholder slot={`${broker.name}_상단`} format="leaderboard" className="mb-8" />

      {/* Header */}
      <div className="glass-card p-6 border border-border/50 rounded-xl mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{broker.name}</h1>
              {broker.featured && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-500 font-medium">
                  광고
                </span>
              )}
            </div>
            <p className="text-muted-foreground">{broker.tagline}</p>
          </div>
          <a
            href={broker.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            가입하기
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {broker.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Key specs */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">주요 스펙</h2>
        <div className="glass-card border border-border/50 rounded-xl overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-border/30">
              {[
                ["최소 입금", broker.minDeposit],
                ["레버리지", broker.leverage],
                ["스프레드", broker.spreadFrom],
                ["체결 방식", broker.executionType],
                ["규제 기관", broker.regulated],
                ["MT5 지원", broker.mt5 ? "✓ 지원" : "✗ 미지원"],
                ["한국어 지원", broker.koreanSupport ? "✓ 지원" : "✗ 미지원"],
                ["헤징 계좌", broker.hedging ? "✓ 지원" : "✗ 미지원"],
              ].map(([label, value], i) => (
                <tr key={i}>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground w-36">{label}</td>
                  <td className="px-5 py-3.5 text-sm text-foreground font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Products */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">거래 가능 상품</h2>
        <div className="flex flex-wrap gap-2">
          {broker.products.map((p, i) => (
            <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-secondary/50 text-muted-foreground border border-border/50">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">장단점</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="glass-card p-5 border border-green-500/20 bg-green-500/5 rounded-xl">
            <p className="text-sm font-semibold text-green-400 mb-3">장점</p>
            <ul className="space-y-2">
              {broker.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-5 border border-red-500/20 bg-red-500/5 rounded-xl">
            <p className="text-sm font-semibold text-red-400 mb-3">단점</p>
            <ul className="space-y-2">
              {broker.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Middle ad */}
      <AdPlaceholder slot={`${broker.name}_중간`} format="rectangle" className="mb-8" />

      {/* MT5 setup link */}
      <section className="mb-8">
        <div className="glass-card p-5 border border-primary/20 bg-primary/5 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground mb-1">이 브로커에서 MT5 설정하기</p>
              <p className="text-sm text-muted-foreground mb-3">
                브로커 계좌를 개설한 후 MT5에 로그인하는 방법을 안내합니다.
              </p>
              <Link
                to="/guides/mt5-manual"
                className="text-sm text-primary hover:underline"
              >
                MT5 설치 & 로그인 가이드 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="glass-card p-6 border border-border/50 rounded-xl text-center mb-8">
        <p className="font-semibold text-foreground mb-2">{broker.name} 시작하기</p>
        <p className="text-sm text-muted-foreground mb-4">
          공식 사이트에서 계좌를 개설하고 데모 계좌로 먼저 테스트해보세요.
        </p>
        <a
          href={broker.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          공식 사이트 방문
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 p-4 rounded-lg bg-secondary/20 border border-border/30 text-xs text-muted-foreground">
        <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
        <span>
          본 페이지는 제휴 링크를 포함하고 있습니다. 링크를 통한 가입 시 사이트 운영 수익이 발생합니다.
          모든 정보는 참고용이며 실제 거래 조건은 변경될 수 있습니다. 투자 결정 전 공식 사이트에서 직접 확인하세요.
          해외 브로커는 국내 금융 규제를 받지 않을 수 있습니다.
        </span>
      </div>

      {/* Bottom ad */}
      <AdPlaceholder slot={`${broker.name}_하단`} className="mt-8" />
    </div>
  );
};

export default BrokerDetail;
