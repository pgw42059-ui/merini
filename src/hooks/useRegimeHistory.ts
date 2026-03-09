import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface RegimeHistoryRow {
  id: string;
  day: string;
  regime: "risk-on" | "neutral" | "risk-off";
  bias: "strong-bull" | "mild-bull" | "neutral" | "mild-bear" | "strong-bear" | null;
  volatility: "low" | "medium" | "high" | null;
  note: string | null;
  created_at: string;
  updated_at: string;
}

export const useRegimeHistory = (limit: number = 30) => {
  return useQuery({
    queryKey: ["regime-history", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("market_regime_history")
        .select("*")
        .order("day", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as RegimeHistoryRow[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
