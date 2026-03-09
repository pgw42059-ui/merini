import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategorySubNav } from "@/components/CategorySubNav";

const LabLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <CategorySubNav category="lab" />
      <main className="flex-1 pt-16 pb-8">
        <div className="container px-4 max-w-6xl mx-auto">
          <Breadcrumb />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LabLayout;
