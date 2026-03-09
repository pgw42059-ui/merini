import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">개인정보처리방침</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                개인정보처리방침
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                시행일: 2025년 1월 1일 &nbsp;|&nbsp; 최종 개정: 2026년 3월 9일
              </p>

              <div className="prose prose-invert prose-sm max-w-none space-y-8">

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">1. 수집하는 개인정보 항목 및 수집 방법</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    사이트는 회원가입 기능을 제공하지 않습니다.
                    1:1 무료 상담 신청 시에만 아래 정보를 수집합니다.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• <strong className="text-foreground">필수 항목:</strong> 이름, 연락처(이메일 또는 전화번호)</li>
                    <li>• <strong className="text-foreground">선택 항목:</strong> 관심 분야, 사용 브로커, 문의 내용</li>
                    <li>• <strong className="text-foreground">수집 방법:</strong> 상담 신청 폼을 통한 직접 입력</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">2. 개인정보 이용 목적</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    수집된 개인정보는 1:1 무료 상담 답변 전송 목적으로만 사용됩니다.
                    마케팅, 광고, 제3자 제공 등 다른 목적으로 사용하지 않습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">3. 개인정보 보유 및 이용 기간 / 파기</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    수집된 개인정보는 상담 목적 달성 후 지체 없이 파기합니다.
                    단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관 후 파기합니다.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 전자적 파일: 복구 불가능한 방식으로 영구 삭제</li>
                    <li>• 출력물 등: 분쇄 또는 소각</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">4. 쿠키 및 로컬 스토리지 사용</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    사이트는 이용 편의를 위해 브라우저의 <strong className="text-foreground">로컬 스토리지(LocalStorage)</strong>를 사용합니다.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• <strong className="text-foreground">저장 항목:</strong> 다크/라이트 테마 설정 (개인 식별 정보 없음)</li>
                    <li>• <strong className="text-foreground">목적:</strong> 재방문 시 사용자 화면 설정 유지</li>
                    <li>• 브라우저 설정을 통해 언제든지 삭제하실 수 있습니다.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">5. 제3자 서비스</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    사이트는 다음 제3자 서비스를 사용하며, 해당 서비스의 개인정보처리방침이 적용됩니다.
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>
                      • <strong className="text-foreground">Google Fonts</strong> — 폰트 로드 시 Google 서버에 IP 주소가 전달될 수 있습니다.
                      (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google 개인정보처리방침</a>)
                    </li>
                    <li>
                      • <strong className="text-foreground">Formspree</strong> — 상담 폼 전송 시 입력 데이터가 Formspree 서버를 경유합니다.
                      (<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Formspree 개인정보처리방침</a>)
                    </li>
                    <li>
                      • <strong className="text-foreground">YouTube</strong> — 가이드 페이지에 YouTube 영상이 임베드될 수 있으며, YouTube의 쿠키 정책이 적용됩니다.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">6. 이용자의 권리</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    이용자는 자신의 개인정보에 대해 다음 권리를 행사할 수 있습니다.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• <strong className="text-foreground">열람</strong> — 수집된 개인정보 내용 확인 요청</li>
                    <li>• <strong className="text-foreground">정정</strong> — 부정확한 정보 수정 요청</li>
                    <li>• <strong className="text-foreground">삭제</strong> — 수집된 정보 삭제 요청</li>
                    <li>• <strong className="text-foreground">처리정지</strong> — 개인정보 이용 중단 요청</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    권리 행사는 아래 개인정보 보호책임자에게 이메일로 요청하시면
                    지체 없이 조치하겠습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">7. 개인정보 보호책임자</h2>
                  <div className="text-muted-foreground space-y-1">
                    <p>• <strong className="text-foreground">담당:</strong> 메린이 운영자</p>
                    <p>• <strong className="text-foreground">이메일:</strong> support@merini.com</p>
                    <p className="mt-2 text-xs">
                      개인정보 관련 민원은 개인정보보호위원회(privacy.go.kr) 또는
                      개인정보침해신고센터(118)에 신고하실 수 있습니다.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-base font-semibold text-foreground mb-3">8. 방침의 변경</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    본 방침은 법령 변경 또는 서비스 변경에 따라 수정될 수 있습니다.
                    변경 시 사이트 내 공지를 통해 안내하며, 변경 전후 내용을 비교할 수 있도록 합니다.
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

export default Privacy;
