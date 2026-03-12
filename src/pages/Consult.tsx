import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Mail, AlertTriangle, CheckSquare, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { PageSEO } from "@/components/PageSEO";

const Consult = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    interest: "",
    broker: "",
    message: "",
  });

  const [privacyConsent, setPrivacyConsent] = useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = "연락처를 입력해주세요";
    } else {
      // Basic email or phone validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[\d\-+() ]{8,}$/;
      if (!emailRegex.test(formData.contact) && !phoneRegex.test(formData.contact)) {
        newErrors.contact = "올바른 이메일 또는 전화번호를 입력해주세요";
      }
    }
    
    if (!formData.interest) {
      newErrors.interest = "관심 분야를 선택해주세요";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해주세요";
    }

    if (!privacyConsent) {
      newErrors.privacyConsent = "개인정보 처리방침에 동의해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "입력 오류",
        description: "필수 항목을 모두 입력해주세요",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mrebnowp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          이름: formData.name,
          연락처: formData.contact,
          관심분야: formData.interest,
          사용브로커: formData.broker || "(미입력)",
          문의내용: formData.message,
        }),
      });

      if (response.ok) {
        navigate("/thanks");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "전송 실패",
        description: "메일 전송에 실패했습니다. 잠시 후 다시 시도하거나 직접 연락해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="무료 상담 신청 — MT5·해외선물 1:1 상담" description="해외선물 시작 방법, MT5 설정, 브로커 선택 등 트레이딩 입문 관련 무료 1:1 상담을 신청하세요." path="/consult"
        faqs={[
          { question: "상담은 무료인가요?", answer: "네, 메린이의 1:1 상담은 완전 무료입니다. MT5 설정, 브로커 선택, 해외선물 입문 관련 질문을 자유롭게 남겨주세요." },
          { question: "상담 답변은 얼마나 걸리나요?", answer: "일반적으로 영업일 기준 1~2일 이내에 답변을 드립니다. 카카오톡 채널을 통해 더 빠른 답변을 받으실 수 있습니다." },
          { question: "어떤 내용을 상담할 수 있나요?", answer: "MT5 설치 및 설정 방법, 브로커 선택 기준, EA 자동매매 설치, 해외선물 기초 개념, 리스크 관리 방법 등 트레이딩 입문에 관한 모든 질문을 받습니다." },
        ]}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 border-b border-border/50">
          <div className="container px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">무료 상담</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                1:1 무료 상담 신청
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                시스템 트레이딩, MT5 설정, EA 관련 궁금한 점을 물어보세요.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    이름 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <Label htmlFor="contact">
                    연락처 (이메일 또는 전화번호) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact"
                    placeholder="example@email.com 또는 010-1234-5678"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className={errors.contact ? "border-red-500" : ""}
                  />
                  {errors.contact && (
                    <p className="text-sm text-red-500">{errors.contact}</p>
                  )}
                </div>

                {/* Interest */}
                <div className="space-y-2">
                  <Label>
                    관심 분야 <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  >
                    <SelectTrigger className={errors.interest ? "border-red-500" : ""}>
                      <SelectValue placeholder="관심 분야를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">교육 (시스템 트레이딩 학습)</SelectItem>
                      <SelectItem value="ea">EA (자동매매 전략)</SelectItem>
                      <SelectItem value="setup">세팅 (MT5/브로커 설정)</SelectItem>
                      <SelectItem value="other">기타</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.interest && (
                    <p className="text-sm text-red-500">{errors.interest}</p>
                  )}
                </div>

                {/* Broker (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="broker">
                    사용 브로커 <span className="text-muted-foreground text-xs">(선택)</span>
                  </Label>
                  <Input
                    id="broker"
                    placeholder="예: IC Markets, XM, Exness 등"
                    value={formData.broker}
                    onChange={(e) => setFormData({ ...formData, broker: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    문의 내용 <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="구체적인 질문이나 상담 내용을 입력해주세요"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* 개인정보 동의 */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setPrivacyConsent(!privacyConsent)}
                    className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-colors ${
                      privacyConsent
                        ? "border-primary/50 bg-primary/5"
                        : errors.privacyConsent
                        ? "border-red-500/60 bg-red-500/5"
                        : "border-border/50 bg-secondary/20 hover:border-border"
                    }`}
                  >
                    {privacyConsent
                      ? <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      : <Square className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                    }
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">[필수] </span>
                      상담 신청 시 이름·연락처가 수집되며, 상담 답변 목적으로만 사용됩니다.{" "}
                      <Link
                        to="/privacy"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary underline underline-offset-2 hover:text-primary/80"
                      >
                        개인정보처리방침
                      </Link>
                      에 동의합니다.
                    </span>
                  </button>
                  {errors.privacyConsent && (
                    <p className="text-sm text-red-500">{errors.privacyConsent}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "제출 중..." : "상담 신청하기"}
                </Button>
              </form>

              {/* Notice */}
              <div className="mt-8 p-5 rounded-xl border border-amber-500/30 bg-amber-500/5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">상담 안내</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 투자 자문, 종목 추천, 수익 보장은 하지 않습니다.</li>
                      <li>• 기술적 질문(MT5 설정, EA 사용법 등)에 답변합니다.</li>
                      <li>• 응답까지 24시간이 소요될 수 있습니다.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="mt-6 p-5 rounded-xl border border-border/50 bg-card/30">
                <p className="text-sm text-muted-foreground mb-4">
                  빠른 상담을 원하시면 아래 채널로 문의하세요
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a 
                      href="https://open.kakao.com/o/gMerini" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-yellow-500" />
                      카카오톡 오픈채팅
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href="mailto:support@merini.com" className="gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      support@merini.com
                    </a>
                  </Button>
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

export default Consult;
