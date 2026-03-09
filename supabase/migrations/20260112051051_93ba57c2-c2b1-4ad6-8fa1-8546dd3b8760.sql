-- Create market_daily table
CREATE TABLE public.market_daily (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day DATE NOT NULL,
  symbol TEXT NOT NULL,
  trend_state TEXT NOT NULL,
  vol_state TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  comment TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (day, symbol)
);

-- Create daily_warning table
CREATE TABLE public.daily_warning (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day DATE UNIQUE NOT NULL,
  warning_text TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.market_daily ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_warning ENABLE ROW LEVEL SECURITY;

-- Public read-only policy for market_daily
CREATE POLICY "Anyone can read market_daily"
ON public.market_daily
FOR SELECT
TO anon, authenticated
USING (true);

-- Public read-only policy for daily_warning
CREATE POLICY "Anyone can read daily_warning"
ON public.daily_warning
FOR SELECT
TO anon, authenticated
USING (true);