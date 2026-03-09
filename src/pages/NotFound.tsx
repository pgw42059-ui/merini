import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-14">
        <div className="text-center px-4">
          <p className="text-6xl font-bold text-primary mb-4">404</p>
          <h1 className="text-xl font-semibold text-foreground mb-2">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            홈으로 돌아가기
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
