import { Link } from "react-router-dom";
import { Server, Globe, Monitor, Shield, AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const whyVPS = [
  { title: "24시간 중단 없는 운영", desc: "PC를 꺼도 VPS에서 MT5가 계속 실행됩니다." },
  { title: "안정적인 인터넷 연결", desc: "데이터센터의 전용 회선을 사용해 연결 끊김을 방지합니다." },
  { title: "낮은 레이턴시", desc: "브로커 서버와 지리적으로 가까운 VPS를 선택하면 주문 처리 속도가 빨라집니다." },
  { title: "PC 자원 절약", desc: "개인 PC의 CPU·메모리 사용을 줄일 수 있습니다." },
];

const providers = [
  {
    name: "MetaTrader VPS (공식)",
    desc: "MetaQuotes가 직접 제공하는 VPS. MT5 내에서 바로 신청 가능. 브로커 서버와 동일한 데이터센터에 위치.",
    pros: ["MT5 내에서 바로 신청", "낮은 레이턴시", "자동 마이그레이션"],
    cons: ["월 비용 발생", "용량 제한"],
    recommend: true,
  },
  {
    name: "AWS / Azure / GCP",
    desc: "대형 클라우드 서비스. 자유도가 높지만 설정이 복잡합니다.",
    pros: ["높은 안정성", "다양한 지역 선택"],
    cons: ["초기 설정 복잡", "비용 관리 필요"],
    recommend: false,
  },
  {
    name: "국내 가상서버 (호스팅 업체)",
    desc: "카페24, 가비아, Vultr 등 국내외 저렴한 VPS 서비스.",
    pros: ["저렴한 가격", "한국어 지원"],
    cons: ["브로커 서버와 거리 문제", "레이턴시 높을 수 있음"],
    recommend: false,
  },
];

const setupSteps = [
  {
    title: "Windows VPS에 원격 데스크톱 연결",
    content:
      "Windows 검색에서 '원격 데스크톱 연결'을 실행합니다. VPS IP 주소를 입력하고 사용자 이름·비밀번호로 로그인합니다.",
  },
  {
    title: "VPS에 MT5 설치",
    content:
      "VPS 내에서 MetaTrader 5 공식 사이트 또는 브로커 사이트에서 MT5 설치 파일을 다운로드하여 설치합니다.",
  },
  {
    title: "브로커 계좌 로그인",
    content:
      "MT5 실행 후 파일 → 거래 계좌 로그인 에서 브로커 계좌 정보를 입력하고 서버에 연결합니다.",
  },
  {
    title: "EA 설치 및 적용",
    content:
      "EA 파일을 VPS의 MT5 데이터 폴더에 복사하고, 네비게이터에서 차트에 적용합니다. 자동매매 버튼을 활성화합니다.",
  },
  {
    title: "원격 연결 종료 (MT5는 유지)",
    content:
      "원격 데스크톱 창 닫기 버튼(X)을 누르면 연결만 종료되고 VPS에서 MT5는 계속 실행됩니다. 로그아웃하지 마세요.",
  },
];

const EAVPS = () => {
  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Server className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">VPS 설정 가이드</h1>
      </div>
      <p className="text-muted-foreground mb-10 leading-relaxed">
        VPS(가상 사설 서버)를 이용하면 PC를 꺼도 MT5와 EA가 24시간 계속 실행됩니다.
        EA를 안정적으로 운영하기 위한 필수 환경입니다.
      </p>

      {/* Why VPS */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">VPS가 필요한 이유</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {whyVPS.map((item, i) => (
            <div key={i} className="glass-card p-4 border border-border/50 rounded-xl">
              <p className="font-medium text-foreground text-sm mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Providers */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">VPS 서비스 종류</h2>
        <div className="space-y-4">
          {providers.map((p, i) => (
            <div
              key={i}
              className={`glass-card p-5 border rounded-xl ${
                p.recommend ? "border-primary/30 bg-primary/5" : "border-border/50"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <p className="font-semibold text-foreground text-sm">{p.name}</p>
                {p.recommend && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                    추천
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-medium text-green-400 mb-1">장점</p>
                  <ul className="space-y-1">
                    {p.pros.map((pro, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-green-400" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-red-400 mb-1">단점</p>
                  <ul className="space-y-1">
                    {p.cons.map((con, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <ChevronRight className="w-3 h-3 text-red-400" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Setup Steps */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">VPS 설정 순서</h2>
        <div className="space-y-4">
          {setupSteps.map((s, i) => (
            <div key={i} className="glass-card p-5 border border-border/50 rounded-xl flex items-start gap-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-medium text-foreground text-sm mb-1">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <div className="glass-card p-5 border border-yellow-500/30 bg-yellow-500/5 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm">
            <p className="font-medium text-foreground">주의사항</p>
            <ul className="space-y-1.5 text-muted-foreground text-xs">
              <li>• VPS에서 원격 연결 종료 시 <strong className="text-foreground">로그아웃(Sign Out)이 아닌 창 닫기</strong>로 종료해야 MT5가 계속 실행됩니다.</li>
              <li>• VPS 운영 비용(월 과금)을 사전에 확인하세요.</li>
              <li>• 브로커 서버와 지리적으로 가까운 리전(Region)을 선택할수록 지연시간(레이턴시)이 낮아집니다.</li>
              <li>• MetaTrader VPS는 MT5 내에서 <strong className="text-foreground">도구(Tools) → MetaTrader VPS</strong>로 신청할 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/50">
        <Link
          to="/ea/backtest"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          백테스트 가이드
        </Link>
        <Link
          to="/ea/mql5-market"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
        >
          MQL5 마켓
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default EAVPS;
