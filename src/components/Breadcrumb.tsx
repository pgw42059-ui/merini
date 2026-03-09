import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

// Route segment to label mapping
const segmentLabels: Record<string, string> = {
  // Main categories
  "basics": "기초 교육",
  "ea": "EA 자동매매",
  "brokers": "브로커",
  "guides": "MT5 가이드",

  // Basics sub-routes
  "futures": "해외선물 기초",
  "fx": "FX 외환 기초",
  "leverage": "레버리지 & 마진",
  "glossary": "용어사전",

  // EA sub-routes
  "install": "EA 설치",
  "usage-guide": "사용 가이드",
  "backtest": "백테스트 가이드",
  "vps": "VPS 설정",
  "mql5-market": "MQL5 마켓",

  // Brokers sub-routes
  "criteria": "선택 기준",
  "market-guide": "시장 상황별 가이드",
  "list": "브로커 리스트",

  // Guides sub-routes
  "market-basics": "시장 구조 이해",
  "strategy": "전략 구조 학습",
  "risk": "리스크 관리",
  "why-mt5": "왜 MT5인가",
  "before-mt5": "MT5 시작 전 필수 지식",
  "mt5-pc": "MT5 PC 가이드",
  "mt5-mobile": "MT5 모바일 가이드",
  "mt5-manual": "MT5 설치 가이드",
  "resources": "자료실",
  "roadmap": "학습 로드맵",
  "orders": "주문 방법",
  "indicators": "지표 사용법",
  "account-types": "계좌 유형",
  "shortcuts": "단축키",
};

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Don't show breadcrumb on home page
  if (pathname === "/" || pathname === "") {
    return null;
  }
  
  // Split pathname into segments and filter empty ones
  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" }
  ];
  
  // Build breadcrumb items from path segments
  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = segmentLabels[segment] || segment;
    
    // Last segment is current page (no link)
    if (index === segments.length - 1) {
      breadcrumbs.push({ label });
    } else {
      breadcrumbs.push({ label, path: currentPath });
    }
  });
  
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          {index > 0 && (
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          )}
          {item.path ? (
            <Link 
              to={item.path} 
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              {index === 0 && <Home className="w-3.5 h-3.5" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
