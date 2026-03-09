import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Monitor, Smartphone, ShoppingCart, BarChart2, Layers, Keyboard, FolderDown, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarGroups = [
  {
    label: null,
    items: [
      { href: "/guides", label: "가이드 홈", icon: LayoutDashboard, step: undefined as number | undefined },
    ],
  },
  {
    label: "MT5 시작하기",
    items: [
      { href: "/guides/mt5-manual", label: "MT5 설치 가이드", icon: Monitor, step: 1 },
      { href: "/guides/mt5-pc", label: "PC 화면 가이드", icon: Laptop, step: 2 },
      { href: "/guides/mt5-mobile", label: "모바일 가이드", icon: Smartphone, step: 3 },
    ],
  },
  {
    label: "거래 방법",
    items: [
      { href: "/guides/orders", label: "주문 방법", icon: ShoppingCart, step: 4 },
      { href: "/guides/indicators", label: "지표 사용법", icon: BarChart2, step: 5 },
      { href: "/guides/account-types", label: "계좌 유형", icon: Layers, step: 6 },
    ],
  },
  {
    label: "도구 & 참고",
    items: [
      { href: "/guides/shortcuts", label: "단축키 모음", icon: Keyboard, step: undefined as number | undefined },
      { href: "/guides/resources", label: "리소스 다운로드", icon: FolderDown, step: undefined as number | undefined },
    ],
  },
];

const mobileItems = sidebarGroups.flatMap((g) => g.items);

interface GuidesLayoutProps {
  children?: React.ReactNode;
}

export function GuidesLayout({ children }: GuidesLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 모바일 서브 내비게이션 */}
      <div className="md:hidden fixed top-14 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {mobileItems.map((item) => {
              const active = location.pathname === item.href;
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
                  {item.step !== undefined && (
                    <span className="mr-1 opacity-50">{item.step}.</span>
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <main className="pt-24 md:pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex gap-8 items-start">

            {/* 사이드바 - 데스크톱 */}
            <aside className="hidden md:block w-52 shrink-0">
              <div className="sticky top-20 rounded-xl border border-border/50 bg-card overflow-hidden">
                <div className="px-4 py-3 border-b border-border/50 bg-secondary/20">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    MT5 가이드
                  </p>
                </div>
                <nav className="p-2">
                  {sidebarGroups.map((group, gi) => (
                    <div key={gi} className={gi > 0 ? "mt-1 pt-1 border-t border-border/30" : ""}>
                      {group.label && (
                        <p className="px-3 pt-2 pb-1 text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-widest">
                          {group.label}
                        </p>
                      )}
                      <div className="space-y-0.5">
                        {group.items.map((item) => {
                          const active = location.pathname === item.href;
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={cn(
                                "flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors",
                                active
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                              )}
                            >
                              {item.step !== undefined ? (
                                <span className={cn(
                                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                                  active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                                )}>
                                  {item.step}
                                </span>
                              ) : (
                                <Icon className={cn("w-4 h-4 shrink-0", active ? "text-primary" : "")} />
                              )}
                              <span className="text-xs leading-tight">{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </nav>
                <div className="mx-2 mb-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-1.5">MT5 익힌 후 →</p>
                  <Link to="/ea" className="text-xs font-medium text-primary hover:underline">
                    EA 자동매매 가이드 →
                  </Link>
                </div>
              </div>
            </aside>

            {/* 메인 콘텐츠 */}
            <div className="flex-1 min-w-0">
              {children || <Outlet />}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
