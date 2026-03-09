import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export type CategoryType = "basics" | "ea" | "brokers" | "guides";

// 대분류별 중분류 메뉴 정의
const subNavigationMap: Record<CategoryType, { label: string; href: string }[]> = {
  basics: [
    { label: "기초 교육 홈", href: "/basics" },
    { label: "해외선물 기초", href: "/basics/futures" },
    { label: "FX 외환 기초", href: "/basics/fx" },
    { label: "레버리지 & 마진", href: "/basics/leverage" },
    { label: "용어사전", href: "/basics/glossary" },
  ],
  guides: [
    { label: "가이드 홈", href: "/guides" },
    { label: "MT5 설치", href: "/guides/mt5-manual" },
    { label: "주문 방법", href: "/guides/orders" },
    { label: "지표 사용법", href: "/guides/indicators" },
    { label: "계좌 유형", href: "/guides/account-types" },
    { label: "단축키", href: "/guides/shortcuts" },
    { label: "리소스 다운로드", href: "/guides/resources" },
  ],
  ea: [
    { label: "EA 홈", href: "/ea" },
    { label: "EA 설치", href: "/ea/install" },
    { label: "사용 가이드", href: "/ea/usage-guide" },
    { label: "백테스트 가이드", href: "/ea/backtest" },
    { label: "VPS 설정", href: "/ea/vps" },
    { label: "MQL5 마켓", href: "/ea/mql5-market" },
  ],
  brokers: [
    { label: "브로커 비교", href: "/brokers" },
  ],
};

interface CategorySubNavProps {
  category: CategoryType;
}

export function CategorySubNav({ category }: CategorySubNavProps) {
  const location = useLocation();
  const subItems = subNavigationMap[category];

  // 현재 활성화된 항목 확인
  const isActive = (href: string) => {
    const [path, hash] = href.split("#");
    if (hash) {
      return location.pathname === path && location.hash === `#${hash}`;
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <div className="fixed top-14 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
          {subItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "shrink-0 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
