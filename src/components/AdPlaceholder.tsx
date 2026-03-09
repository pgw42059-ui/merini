import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  slot?: string;
  format?: "banner" | "rectangle" | "leaderboard";
  className?: string;
}

const formatSizes = {
  banner: "h-[90px]",         // 728×90
  rectangle: "h-[250px]",    // 300×250
  leaderboard: "h-[90px]",   // 970×90
};

/**
 * Google AdSense 플레이스홀더
 * 실제 적용 시 이 컴포넌트를 AdSense 스크립트 + ins 태그로 교체하세요.
 *
 * 교체 예시:
 * <ins className="adsbygoogle"
 *   style={{ display: "block" }}
 *   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *   data-ad-slot="XXXXXXXXXX"
 *   data-ad-format="auto"
 *   data-full-width-responsive="true" />
 */
export function AdPlaceholder({ slot = "광고", format = "banner", className }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center rounded-lg border border-dashed border-border/40 bg-secondary/10",
        formatSizes[format],
        className
      )}
    >
      <span className="text-xs text-muted-foreground/40 select-none">
        광고 영역 · {slot}
      </span>
    </div>
  );
}
