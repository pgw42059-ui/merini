import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  breadcrumbs?: BreadcrumbItem[];
  isHowTo?: boolean;
  faqs?: FAQItem[];
}

const BASE_URL = "https://merini.com";

export const PageSEO = ({
  title,
  description,
  path,
  type = "website",
  breadcrumbs,
  isHowTo = false,
  faqs,
}: PageSEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === "/" ? `${title} | 메린이` : `${title} | 메린이`;

  // BreadcrumbList JSON-LD
  const defaultBreadcrumbs: BreadcrumbItem[] = [{ name: "홈", path: "/" }];
  const allBreadcrumbs = breadcrumbs
    ? [defaultBreadcrumbs[0], ...breadcrumbs]
    : buildBreadcrumbs(path);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allBreadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };

  // WebPage or HowTo JSON-LD
  const pageSchema = isHowTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: title,
        description,
        url,
      }
    : {
        "@context": "https://schema.org",
        "@type": type === "article" ? "Article" : "WebPage",
        name: title,
        description,
        url,
        isPartOf: { "@type": "WebSite", url: BASE_URL, name: "메린이" },
      };

  const faqSchema = faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

// Auto-generate breadcrumbs from path
function buildBreadcrumbs(path: string): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ name: "홈", path: "/" }];
  if (path === "/") return crumbs;

  const sectionNames: Record<string, string> = {
    basics: "기초 교육",
    guides: "MT5 가이드",
    ea: "EA 자동매매",
    brokers: "브로커 비교",
    consult: "상담 신청",
    about: "소개",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    "market-basics": "시장 기초",
    "why-mt5": "MT5 선택 이유",
    "before-mt5": "시작 전 준비",
    "mt5-manual": "MT5 사용 설명서",
    "mt5-pc": "MT5 PC 설치",
    "mt5-mobile": "MT5 모바일",
    orders: "주문 방법",
    indicators: "지표 사용법",
    strategy: "트레이딩 전략",
    risk: "리스크 관리",
    "account-types": "계좌 유형",
    shortcuts: "단축키",
    resources: "리소스",
    roadmap: "학습 로드맵",
    install: "EA 설치",
    "usage-guide": "EA 사용 가이드",
    backtest: "백테스트",
    vps: "VPS 설정",
    "mql5-market": "MQL5 마켓",
    futures: "선물거래 기초",
    fx: "FX 기초",
    leverage: "레버리지",
    glossary: "용어 사전",
  };

  const parts = path.split("/").filter(Boolean);
  let accumulated = "";
  for (const part of parts) {
    accumulated += `/${part}`;
    crumbs.push({
      name: sectionNames[part] ?? part,
      path: accumulated,
    });
  }
  return crumbs;
}
