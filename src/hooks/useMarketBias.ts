import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface MarketBias {
  id: string;
  day: string;
  symbol: string;
  bias_label: "Buy-side favorable" | "Sell-side favorable" | "Neutral" | "Two-way";
  reasons: string[];
  updated_at: string;
}

export const useMarketBias = () => {
  return useQuery({
    queryKey: ["market-daily-bias"],
    queryFn: async (): Promise<MarketBias[]> => {
      const today = new Date().toISOString().split("T")[0];
      
      const { data, error } = await supabase
        .from("market_daily_bias")
        .select("*")
        .eq("day", today)
        .order("symbol");

      if (error) {
        console.error("Error fetching market bias:", error);
        throw error;
      }

      return (data as MarketBias[]) || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Instrument display metadata
export const instrumentMeta: Record<string, { name: string; nameKo: string }> = {
  NQ: { name: "NASDAQ", nameKo: "나스닥" },
  ES: { name: "S&P 500", nameKo: "S&P 500" },
  GC: { name: "Gold", nameKo: "금" },
  CL: { name: "Crude Oil", nameKo: "원유" },
  VIX: { name: "VIX", nameKo: "변동성지수" },
  US10Y: { name: "US 10Y Yield", nameKo: "미국 10년물" },
  US2Y: { name: "US 2Y Yield", nameKo: "미국 2년물" },
  DXY: { name: "Dollar Index", nameKo: "달러인덱스" },
};

// Display order for 8 core instruments
export const coreInstruments = ["NQ", "ES", "GC", "CL", "VIX", "US10Y", "US2Y", "DXY"];
