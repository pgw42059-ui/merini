import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="이용약관 — 메린이 서비스 이용약관" description="메린이 서비스 이용약관입니다. 서비스 이용 전 반드시 확인해 주세요." path="/terms" />
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">이용약관</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                서비스 이용약관
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                시행일: 2025년 1월 1일 &nbsp;|&nbsp; 최종 개정: 2026년 3월 9일
              </p>

              <div className="prose prose-invert prose-sm max-w-none space-y-8">

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제1조 (목적)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    본 약관은 메린이(이하 "사이트")가 제공하는 서비스의 이용조건 및 절차,
                    이용자와 사이트의 권리·의무·책임사항을 규정함을 목적으로 합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제2조 (서비스의 내용)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트는 MT5 시스템 트레이딩 관련 교육 콘텐츠, 가이드, 참고 정보를 제공합니다.
                    제공되는 모든 정보는 교육 및 정보 제공 목적이며, 투자 자문·투자 권유가 아닙니다.
                    투자 결정 및 그에 따른 결과에 대한 책임은 이용자 본인에게 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제3조 (면책조항)</h2>
                  <ul className="text-muted-foreground space-y-2 leading-relaxed">
                    <li>• 사이트에서 제공하는 모든 정보는 교육 목적이며, 금융투자상품에 대한 투자 권유가 아닙니다.</li>
                    <li>• 실제 거래로 인한 손실에 대해 사이트는 어떠한 법적 책임도 지지 않습니다.</li>
                    <li>• 백테스트 결과는 과거 성과이며, 미래 수익을 보장하지 않습니다.</li>
                    <li>• EA(Expert Advisor) 사용으로 인한 결과는 이용자 본인의 책임입니다.</li>
                    <li>• 사이트는 특정 브로커, EA, 투자 상품을 추천하거나 보증하지 않습니다.</li>
                    <li>• 제3자 외부 링크(브로커 사이트 등)의 내용에 대해 사이트는 책임지지 않습니다.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제4조 (저작권)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 코드 등)의 저작권은
                    메린이에 있으며, 사전 허락 없는 무단 복제·배포·상업적 이용을 금지합니다.
                    단, 출처를 명시한 개인적·비상업적 용도의 인용은 허용합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제5조 (서비스의 변경 및 중단)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트는 운영상·기술상 필요에 따라 서비스의 내용을 변경하거나 중단할 수 있습니다.
                    서비스 변경 또는 중단으로 인한 이용자의 손해에 대해 사이트는 책임을 지지 않습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제6조 (약관의 변경)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    본 약관은 관련 법령의 변경이나 서비스 변경에 따라 수정될 수 있으며,
                    변경 시 사이트 내 공지를 통해 안내합니다.
                    변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하실 수 있으며,
                    변경 이후 서비스를 계속 이용하는 경우 변경된 약관에 동의한 것으로 간주합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">제7조 (분쟁 해결)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    사이트와 이용자 간 분쟁이 발생한 경우, 상호 협의를 통한 해결을 원칙으로 합니다.
                    협의가 이루어지지 않을 경우 관련 법령 및 절차에 따라 처리합니다.
                  </p>
                </section>

                <div className="pt-6 border-t border-border space-y-1">
                  <p className="text-xs text-muted-foreground">시행일: 2025년 1월 1일</p>
                  <p className="text-xs text-muted-foreground">최종 개정일: 2026년 3월 9일</p>
                  <p className="text-xs text-muted-foreground">운영: 메린이 &nbsp;|&nbsp; 문의: support@merini.com</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
