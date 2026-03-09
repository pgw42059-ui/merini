import { Mail, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/logo-mark.png";

const quickLinks = [
  { label: "가이드", href: "/guides" },
  { label: "EA 자동매매", href: "/ea" },
  { label: "브로커 비교", href: "/brokers" },
  { label: "무료 상담", href: "/consult" },
];

const legalLinks = [
  { label: "이용약관", href: "/terms", icon: FileText },
  { label: "개인정보처리방침", href: "/privacy", icon: Shield },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoMark} alt="메린이" className="h-5 w-auto opacity-70" />
              <span className="text-sm font-medium text-muted-foreground">메린이</span>
            </Link>
            <nav className="flex items-center gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:support@merini.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60">
            © 2025 메린이. 본 플랫폼은 시장 판단 참고용이며, 투자 조언을 제공하지 않습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
