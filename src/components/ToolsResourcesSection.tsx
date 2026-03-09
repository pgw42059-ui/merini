import { Monitor, TrendingUp, ClipboardCheck, FileDown, ExternalLink, FileText, FileSpreadsheet, Palette, ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import resourcesData from "@/content/resources.json";

interface GuideItem {
  id: string;
  category: string;
  title: string;
  description: string;
  link: string | null;
  icon: string;
  isDownload?: boolean;
  comingSoon?: boolean;
}

interface DownloadItem {
  id: string;
  category: string;
  title: string;
  description: string;
  format: string;
  link: string;
  icon: string;
  isExternal?: boolean;
  isDownload?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  TrendingUp,
  ClipboardCheck,
  FileText,
  FileSpreadsheet,
  Palette,
};

export function ToolsResourcesSection() {
  const guides = resourcesData.guides as GuideItem[];
  const downloads = resourcesData.downloads as DownloadItem[];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            도구 & 리소스
          </h2>
          <p className="text-muted-foreground mt-2">
            바로 사용할 수 있는 가이드와 템플릿
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              Quick Start 가이드
            </h3>
            <div className="space-y-3">
              {guides.map((guide) => {
                const IconComponent = iconMap[guide.icon] || Monitor;
                
                if (guide.comingSoon) {
                  return (
                    <div
                      key={guide.id}
                      className="flex items-center gap-4 glass-card p-4 opacity-60 cursor-not-allowed"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-muted-foreground">
                          {guide.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-1 rounded bg-muted text-muted-foreground">
                        준비중
                      </span>
                    </div>
                  );
                }
                
                if (guide.isDownload && guide.link) {
                  return (
                    <a
                      key={guide.id}
                      href={guide.link}
                      download
                      className="group flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {guide.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                      <FileDown className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                }
                
                if (!guide.link) return null;
                
                return (
                  <Link
                    key={guide.id}
                    to={guide.link}
                    className="group flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {guide.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              다운로드
            </h3>
            <div className="space-y-3">
              {downloads.map((item) => {
                const IconComponent = iconMap[item.icon] || FileText;
                
                if (item.isExternal) {
                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                        {item.format}
                      </span>
                    </a>
                  );
                }
                
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    download
                    className="group flex items-center gap-4 glass-card p-4 hover:border-primary/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">
                      {item.format}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="sm">
            <Link to="/guides/resources" className="gap-2">
              전체 자료 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
