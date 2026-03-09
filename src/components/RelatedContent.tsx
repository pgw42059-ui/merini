import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface RelatedItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

export function RelatedContent({ items, title = "관련 콘텐츠" }: RelatedContentProps) {
  // Limit to max 3 items
  const displayItems = items.slice(0, 3);

  if (displayItems.length === 0) return null;

  return (
    <section className="pt-12 mt-12 border-t border-border/50">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
          {title}
        </h3>
        <div className="grid gap-3">
          {displayItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="group flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {item.badge && (
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-4 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
