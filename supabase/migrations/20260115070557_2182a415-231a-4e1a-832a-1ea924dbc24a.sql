-- Market Daily Bias table for deterministic bias computation
CREATE TABLE public.market_daily_bias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day DATE NOT NULL,
  symbol TEXT NOT NULL,
  bias_label TEXT NOT NULL CHECK (bias_label IN ('Buy-side favorable', 'Sell-side favorable', 'Neutral', 'Two-way')),
  reasons TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(day, symbol)
);

ALTER TABLE public.market_daily_bias ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read market_daily_bias"
ON public.market_daily_bias FOR SELECT
USING (true);

CREATE INDEX idx_market_daily_bias_day ON public.market_daily_bias(day DESC);
CREATE INDEX idx_market_daily_bias_symbol ON public.market_daily_bias(symbol);