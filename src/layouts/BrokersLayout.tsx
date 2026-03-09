import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySubNav } from "@/components/CategorySubNav";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Outlet } from "react-router-dom";

interface BrokersLayoutProps {
  children?: React.ReactNode;
}

export function BrokersLayout({ children }: BrokersLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategorySubNav category="brokers" />
      
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
