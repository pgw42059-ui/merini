import { BookOpen, Search, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AdPlaceholder } from "@/components/AdPlaceholder";

const terms = [
  // 기본
  { term: "Pip", category: "기본", desc: "가격 변동의 최소 단위. EUR/USD의 경우 0.0001. 1 standard lot 기준 1 pip = $10." },
  { term: "Lot", category: "기본", desc: "거래 단위. Standard lot = 100,000 단위. Mini lot = 10,000 단위. Micro lot = 1,000 단위." },
  { term: "Spread", category: "기본", desc: "매수가(Ask)와 매도가(Bid)의 차이. 브로커의 기본 수수료. 낮을수록 유리합니다." },
  { term: "Bid / Ask", category: "기본", desc: "Bid = 브로커가 사는 가격(내가 매도할 때). Ask = 브로커가 파는 가격(내가 매수할 때)." },
  { term: "Slippage", category: "기본", desc: "주문 가격과 실제 체결 가격의 차이. 변동성이 큰 순간이나 유동성이 낮을 때 발생합니다." },
  { term: "Commission", category: "기본", desc: "거래당 고정 수수료. ECN 계좌에서 주로 발생. 스프레드 대신 커미션을 받는 구조." },
  // 주문
  { term: "Market Order", category: "주문", desc: "현재 시장 가격으로 즉시 체결하는 주문. 빠른 진입이 필요할 때 사용합니다." },
  { term: "Limit Order", category: "주문", desc: "지정한 가격 이상(매도) 또는 이하(매수)에서만 체결되는 주문. 지정가 주문." },
  { term: "Stop Order", category: "주문", desc: "지정 가격 도달 시 시장가로 체결. 돌파 진입에 사용합니다." },
  { term: "Stop Loss (SL)", category: "주문", desc: "손실을 제한하는 자동 청산 가격. 모든 포지션에 반드시 설정해야 합니다." },
  { term: "Take Profit (TP)", category: "주문", desc: "목표 수익에 도달하면 자동 청산. 설정하지 않으면 수동으로 청산해야 합니다." },
  { term: "Trailing Stop", category: "주문", desc: "가격이 유리하게 움직이면 SL이 자동으로 따라 이동. 수익 보호에 사용합니다." },
  // 마진
  { term: "Leverage", category: "마진", desc: "내 자본보다 큰 포지션을 취할 수 있는 비율. 1:100이면 $1,000으로 $100,000 포지션 가능." },
  { term: "Margin", category: "마진", desc: "포지션 개설에 필요한 보증금. 포지션 규모 ÷ 레버리지." },
  { term: "Free Margin", category: "마진", desc: "계좌에서 포지션에 묶이지 않은 자유 마진. 새 포지션 진입에 사용합니다." },
  { term: "Margin Level", category: "마진", desc: "Equity ÷ Used Margin × 100%. 낮을수록 위험. 100% 이하면 마진콜 위험." },
  { term: "Margin Call", category: "마진", desc: "마진 레벨이 기준 이하로 떨어지면 브로커가 추가 증거금을 요구하거나 경고를 보냅니다." },
  { term: "Stop Out", category: "마진", desc: "마진 레벨이 스탑아웃 기준 이하로 떨어지면 포지션이 강제 청산됩니다." },
  { term: "Equity", category: "마진", desc: "계좌 잔액 + 현재 열린 포지션의 미실현 손익. 실시간으로 변동합니다." },
  // EA/자동매매
  { term: "EA (Expert Advisor)", category: "자동매매", desc: "MT5에서 실행되는 자동매매 프로그램. 설정한 규칙에 따라 자동으로 주문을 실행합니다." },
  { term: "Magic Number", category: "자동매매", desc: "EA가 자신이 낸 주문을 구분하기 위한 고유 번호. 여러 EA 동시 사용 시 필수." },
  { term: "Backtest", category: "자동매매", desc: "과거 데이터를 사용해 EA 전략의 성과를 검증하는 과정. 미래 수익을 보장하지 않습니다." },
  { term: "Forward Test", category: "자동매매", desc: "백테스트 후 실시간 데모 계좌에서 EA를 실제 조건으로 검증하는 과정." },
  { term: "Drawdown", category: "자동매매", desc: "고점에서 저점까지의 최대 손실폭. 낮을수록 안정적인 전략입니다." },
  { term: "Profit Factor", category: "자동매매", desc: "총 수익 ÷ 총 손실. 1 이상이면 이익, 1.5 이상이면 양호한 수준입니다." },
  // 시장
  { term: "Long (매수)", category: "시장", desc: "가격이 오를 것을 예상하고 매수하는 포지션. Buy라고도 합니다." },
  { term: "Short (매도)", category: "시장", desc: "가격이 내릴 것을 예상하고 매도하는 포지션. 선물/FX는 매도부터 진입 가능합니다." },
  { term: "Liquidity", category: "시장", desc: "시장의 거래 활성도. 유동성이 높을수록 슬리피지가 적고 주문이 빠르게 체결됩니다." },
  { term: "Volatility", category: "시장", desc: "가격 변동의 크기. 변동성이 높으면 기회도 크지만 리스크도 커집니다." },
  { term: "Rollover / Swap", category: "시장", desc: "포지션을 익일로 넘길 때 발생하는 이자. 통화쌍의 금리 차이 또는 선물 만기 교체 비용." },
];

const categories = ["전체", "기본", "주문", "마진", "자동매매", "시장"];

const categoryColors: Record<string, string> = {
  "기본": "bg-blue-400/10 text-blue-400",
  "주문": "bg-emerald-400/10 text-emerald-400",
  "마진": "bg-orange-400/10 text-orange-400",
  "자동매매": "bg-purple-400/10 text-purple-400",
  "시장": "bg-pink-400/10 text-pink-400",
};

const Glossary = () => {
  const [selected, setSelected] = useState("전체");
  const [search, setSearch] = useState("");

  const filtered = terms.filter((t) => {
    const matchCat = selected === "전체" || t.category === selected;
    const matchSearch =
      search === "" ||
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <article className="max-w-3xl">
      {/* 브레드크럼 */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
        <Link to="/basics" className="hover:text-foreground transition-colors">기초 교육</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">트레이딩 용어사전</span>
      </div>

      {/* 헤더 */}
      <div className="flex items-start gap-4 mb-8">
        <div className="p-3 rounded-xl bg-purple-400/10 shrink-0">
          <BookOpen className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-1">용어사전</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">트레이딩 용어사전</h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            해외선물·FX·EA 자동매매에서 자주 사용하는 {terms.length}개 핵심 용어를 정리했습니다.
          </p>
        </div>
      </div>

      <AdPlaceholder slot="용어사전_상단" className="mb-8" />

      {/* 검색 */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
        <input
          type="text"
          placeholder="용어 또는 설명으로 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border/50 bg-secondary/20 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        )}
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selected === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {cat}
            {cat !== "전체" && (
              <span className="ml-1.5 opacity-60">
                {terms.filter((t) => t.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 결과 카운트 */}
      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length}개의 용어 {search && `(검색: "${search}")`}
      </p>

      {/* 용어 목록 */}
      <div className="space-y-2 mb-10">
        {filtered.length === 0 ? (
          <div className="py-12 text-center">
            <Search className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">검색 결과가 없습니다.</p>
            <button
              onClick={() => { setSearch(""); setSelected("전체"); }}
              className="mt-2 text-xs text-primary hover:underline"
            >
              필터 초기화
            </button>
          </div>
        ) : (
          filtered.map((t, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl flex items-start gap-4 hover:border-border transition-colors">
              <div className="shrink-0 min-w-[90px]">
                <span className="font-mono font-bold text-sm text-foreground block mb-1.5">{t.term}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[t.category] || "bg-secondary text-muted-foreground"}`}>
                  {t.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))
        )}
      </div>

      <AdPlaceholder slot="용어사전_하단" format="rectangle" className="mb-8" />

      {/* 이전/다음 내비게이션 */}
      <div className="flex items-center justify-between pt-6 border-t border-border/30">
        <Link
          to="/basics/leverage"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>이전: 레버리지 & 마진</span>
        </Link>
        <Link
          to="/guides/mt5-manual"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors group"
        >
          <span>다음: MT5 설치 가이드</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default Glossary;
