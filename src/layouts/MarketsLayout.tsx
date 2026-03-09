import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySubNav } from "@/components/CategorySubNav";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Outlet } from "react-router-dom";

interface MarketsLayoutProps {
  children?: React.ReactNode;
}

export function MarketsLayout({ children }: MarketsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategorySubNav category="markets" />
      
      <main className="pt-28 pb-16">
        <div className="container px-4">
          <Breadcrumb />
        </div>
        {children || <Outlet />}
      </main>
      
      <Footer />
    </div>
  );
}
