import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySubNav, CategoryType } from "@/components/CategorySubNav";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Outlet } from "react-router-dom";

interface EALayoutProps {
  children?: React.ReactNode;
}

export function EALayout({ children }: EALayoutProps) {
  const category: CategoryType = "ea";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategorySubNav category={category} />
      
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
