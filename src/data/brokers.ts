export interface Broker {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  minDeposit: string;
  leverage: string;
  spreadFrom: string;
  mt5: boolean;
  koreanSupport: boolean;
  regulated: string;
  executionType: string;
  hedging: boolean;
  featured: boolean;      // 광고비 받은 브로커 상단 노출
  affiliateLink: string;  // 제휴 링크 (브로커별 입력)
  pros: string[];
  cons: string[];
  products: string[];     // 거래 가능 상품
}

// 브로커 데이터 — 실제 브로커 추가 시 이 배열에 입력하세요
export const brokers: Broker[] = [
  {
    slug: "broker-template",
    name: "브로커 이름",
    tagline: "브로커 핵심 특징 한 줄 요약",
    tags: ["해외선물", "FX", "MT5"],
    minDeposit: "$200",
    leverage: "최대 1:500",
    spreadFrom: "EUR/USD 0.0 pips~",
    mt5: true,
    koreanSupport: true,
    regulated: "FCA, ASIC",
    executionType: "ECN/STP",
    hedging: true,
    featured: true,
    affiliateLink: "https://example.com/register?ref=merini",
    pros: [
      "MT5 헤징 계좌 지원",
      "낮은 최소 입금액",
      "한국어 고객지원",
      "다양한 입출금 방법",
    ],
    cons: [
      "국내 규제기관 미등록",
      "출금 처리 2-3영업일",
    ],
    products: ["나스닥(NQ)", "S&P500(ES)", "금(GC)", "오일(CL)", "EUR/USD", "GBP/USD"],
  },
];
