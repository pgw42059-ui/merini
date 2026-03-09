import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "NQ 스캘핑 전략 v2.1 업데이트",
    description: "진입 필터 추가 및 슬리피지 대응 로직 개선",
    date: "2025.01.05",
    category: "전략",
  },
  {
    title: "MT5 빌드 4580 호환성 패치",
    description: "최신 빌드 대응 EA 수정 완료",
    date: "2025.01.03",
    category: "시스템",
  },
  {
    title: "새해 브로커 스케줄 안내",
    description: "1월 첫째 주 거래시간 변경 사항",
    date: "2025.01.01",
    category: "공지",
  },
  {
    title: "EA 백테스트 제대로 하는 법",
    description: "Tick Data Suite 없이도 신뢰할 수 있는 테스트",
    date: "2024.12.28",
    category: "가이드",
  },
  {
    title: "스프레드 확대 시 EA 동작 이슈",
    description: "뉴스 시간대 필터 필수, 최대 스프레드 설정법",
    date: "2024.12.25",
    category: "이슈",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">블로그</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                전체 콘텐츠
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                업데이트, 가이드, 전략 분석, 실전 이슈 아카이브
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              {posts.map((post, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            {/* Notice */}
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                더 많은 콘텐츠가 준비 중입니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
