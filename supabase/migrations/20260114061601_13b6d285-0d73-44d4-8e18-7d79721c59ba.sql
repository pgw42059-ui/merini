-- Create market_regime_history table for storing daily regime data
CREATE TABLE public.market_regime_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day DATE NOT NULL UNIQUE,
  regime TEXT NOT NULL CHECK (regime IN ('risk-on', 'neutral', 'risk-off')),
  bias TEXT CHECK (bias IN ('strong-bull', 'mild-bull', 'neutral', 'mild-bear', 'strong-bear')),
  volatility TEXT CHECK (volatility IN ('low', 'medium', 'high')),
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.market_regime_history ENABLE ROW LEVEL SECURITY;

-- Allow public read access (this is public market data)
CREATE POLICY "Anyone can view regime history"
ON public.market_regime_history
FOR SELECT
USING (true);

-- Create index for efficient date queries
CREATE INDEX idx_regime_history_day ON public.market_regime_history(day DESC);

-- Insert sample historical data for demonstration
INSERT INTO public.market_regime_history (day, regime, bias, volatility, note) VALUES
  ('2026-01-14', 'risk-on', 'mild-bull', 'medium', '기술주 중심 상승세'),
  ('2026-01-13', 'risk-on', 'strong-bull', 'low', '연준 비둘기파 발언'),
  ('2026-01-10', 'neutral', 'neutral', 'medium', '고용지표 발표 대기'),
  ('2026-01-09', 'risk-off', 'mild-bear', 'high', 'CPI 상승 우려'),
  ('2026-01-08', 'risk-off', 'strong-bear', 'high', '지정학적 리스크 부각'),
  ('2026-01-07', 'neutral', 'mild-bull', 'medium', '혼조세 지속'),
  ('2026-01-06', 'risk-on', 'mild-bull', 'low', '신년 랠리 기대감'),
  ('2026-01-03', 'risk-on', 'strong-bull', 'low', '연초 자금 유입'),
  ('2026-01-02', 'neutral', 'neutral', 'medium', '거래량 축소');