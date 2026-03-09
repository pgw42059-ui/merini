import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container px-4">
            <div className="max-w-md mx-auto text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>

              {/* Message */}
              <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
                상담 신청이 접수되었습니다
              </h1>
              <p className="text-muted-foreground mb-8">
                <span className="text-foreground font-medium">24시간 이내</span>에 
                입력하신 연락처로 답변드리겠습니다.
              </p>

              {/* Contact Options */}
              <div className="space-y-3 mb-8">
                <p className="text-sm text-muted-foreground mb-4">
                  빠른 상담을 원하시면 아래 채널로 연락주세요
                </p>
                
                <Button asChild variant="outline" className="w-full justify-start gap-3">
                  <a 
                    href="https://open.kakao.com/o/gMerini" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-yellow-500" />
                    </div>
                    <span>카카오톡 오픈채팅</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full justify-start gap-3">
                  <a href="mailto:support@merini.com">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>support@merini.com</span>
                    <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground" />
                  </a>
                </Button>
              </div>

              {/* Back to Home */}
              <Button asChild variant="ghost" size="sm">
                <Link to="/">홈으로 돌아가기</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Thanks;
