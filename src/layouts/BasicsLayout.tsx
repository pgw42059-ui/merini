import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";
import { TrendingUp, DollarSign, Layers, BookOpen, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { href: "/basics", label: "기초 교육 홈", icon: LayoutDashboard, step: null },
  { href: "/basics/futures", label: "해외선물 기초", icon: TrendingUp, step: 1 },
  { href: "/basics/fx", label: "FX 외환 기초", icon: DollarSign, step: 2 },
  { href: "/basics/leverage", label: "레버리지 & 마진", icon: Layers, step: 3 },
  { href: "/basics/glossary", label: "용어사전", icon: BookOpen, step: null },
];

export function BasicsLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 모바일 서브 내비게이션 */}
      <div className="md:hidden fixed top-14 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {sidebarItems.map((item) => {
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
                  {item.step && <span className="mr-1 opacity-50">{item.step}.</span>}
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
                    기초 교육
                  </p>
                </div>
                <nav className="p-2 space-y-0.5">
                  {sidebarItems.map((item) => {
                    const active = location.pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                          active
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                      >
                        {item.step !== null ? (
                          <span
                            className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                              active
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-muted-foreground"
                            )}
                          >
                            {item.step}
                          </span>
                        ) : (
                          <Icon className={cn("w-4 h-4 shrink-0", active ? "text-primary" : "")} />
                        )}
                        <span className="leading-tight">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
                {/* 다음 단계 */}
                <div className="mx-2 mb-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-1.5">기초 완료 후 →</p>
                  <Link
                    to="/guides/mt5-manual"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    MT5 설치 가이드 →
                  </Link>
                </div>
              </div>
            </aside>

            {/* 메인 콘텐츠 */}
            <div className="flex-1 min-w-0">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
