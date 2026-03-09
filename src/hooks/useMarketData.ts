import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface MarketDailyData {
  id: string;
  day: string;
  symbol: string;
  trend_state: string;
  vol_state: string;
  difficulty: string;
  comment: string;
  updated_at: string;
}

export interface DailyWarningData {
  id: string;
  day: string;
  warning_text: string;
  updated_at: string;
}

// Symbol metadata for display
export const symbolMeta: Record<string, { name: string; nameKo: string }> = {
  ES: { name: "S&P 500 Futures", nameKo: "S&P 500 선물" },
  NQ: { name: "Nasdaq-100 Futures", nameKo: "나스닥 100 선물" },
  CL: { name: "WTI Crude Oil Futures", nameKo: "WTI 원유 선물" },
  ZN: { name: "10-Year T-Note Futures", nameKo: "미국 10년물 국채 선물" },
  SOFR: { name: "SOFR Futures", nameKo: "단기금리 선물 (SOFR)" },
  GC: { name: "Gold Futures", nameKo: "금 선물" },
};

// Get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  return new Date().toISOString().split("T")[0];
};

export const useMarketDaily = () => {
  return useQuery({
    queryKey: ["market-daily", getTodayDate()],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("market_daily")
        .select("*")
        .eq("day", getTodayDate());

      if (error) throw error;
      return data as MarketDailyData[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useDailyWarning = () => {
  return useQuery({
    queryKey: ["daily-warning", getTodayDate()],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("daily_warning")
        .select("*")
        .eq("day", getTodayDate())
        .maybeSingle();

      if (error) throw error;
      return data as DailyWarningData | null;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
