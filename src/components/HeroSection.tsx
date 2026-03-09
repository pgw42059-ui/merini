import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMain from "@/assets/hero-main.png";
import logoMark from "@/assets/logo-mark.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[auto] md:min-h-[80vh] flex flex-col md:flex-row items-center overflow-hidden pt-20">
      {/* Mobile: Text content first, Image below */}
      {/* Desktop: Image as background with text overlay */}
      
      {/* Background Image - hidden on mobile, shown on desktop */}
      <div className="hidden md:block absolute inset-0">
        <img 
          src={heroMain} 
          alt="시스템 트레이딩 환경" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Subtle logo watermark - top left area (desktop only) */}
      <div className="hidden md:block absolute top-24 left-8 z-10">
        <img 
          src={logoMark} 
          alt="" 
          className="h-12 w-auto opacity-40"
          aria-hidden="true"
        />
      </div>

      {/* Text Content - Always first on mobile */}
      <div className="container relative z-10 px-6 py-12 md:py-16">
        <div className="max-w-xl">
          {/* Mobile logo watermark */}
          <div className="md:hidden mb-6">
            <img 
              src={logoMark} 
              alt="" 
              className="h-8 w-auto opacity-50"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-6 leading-snug md:leading-tight text-foreground">
            메타트레이더 구조를 이해하는
            <br />
            시스템 트레이딩 교육 허브
          </h1>

          {/* Sub Heading */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-8 leading-relaxed">
            자동매매 이전에 반드시 알아야 할
            <br />
            구조 · 리스크 · 설계 기준을 정리합니다.
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="gap-2 w-full md:w-auto">
            <Link to="/start">
              구조부터 배우기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Hero Image - shown below text */}
      <div className="md:hidden w-full px-4 pb-8">
        <div className="rounded-xl overflow-hidden">
          <img 
            src={heroMain} 
            alt="시스템 트레이딩 환경" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
