-- Fear & Greed Index table with source tracking
CREATE TABLE public.fear_greed_index (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day DATE NOT NULL UNIQUE,
  value INTEGER NOT NULL CHECK (value >= 0 AND value <= 100),
  classification TEXT NOT NULL,
  previous_value INTEGER,
  change_value INTEGER,
  source TEXT DEFAULT 'CNN',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.fear_greed_index ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read fear_greed_index"
ON public.fear_greed_index FOR SELECT
USING (true);

CREATE INDEX idx_fear_greed_day ON public.fear_greed_index(day DESC);

-- Key Levels table with method and context tracking
-- UNIQUE constraint allows multiple level sets (pivot, session-based, ORB) per day
CREATE TABLE public.key_levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day DATE NOT NULL,
  symbol TEXT NOT NULL,
  current_price NUMERIC(12,4),
  pivot NUMERIC(12,4),
  s1 NUMERIC(12,4),
  s2 NUMERIC(12,4),
  r1 NUMERIC(12,4),
  r2 NUMERIC(12,4),
  prior_high NUMERIC(12,4),
  prior_low NUMERIC(12,4),
  prior_close NUMERIC(12,4),
  method TEXT NOT NULL DEFAULT 'pivot',
  session TEXT,
  confidence TEXT DEFAULT 'standard',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(day, symbol, method, session)
);

ALTER TABLE public.key_levels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read key_levels"
ON public.key_levels FOR SELECT
USING (true);

CREATE INDEX idx_key_levels_day_symbol ON public.key_levels(day DESC, symbol);
CREATE INDEX idx_key_levels_method ON public.key_levels(method);

-- Execution Reference table with volatility context
CREATE TABLE public.execution_reference (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day DATE NOT NULL,
  symbol TEXT NOT NULL,
  atr_14 NUMERIC(12,4),
  suggested_sl_min NUMERIC(12,4),
  suggested_sl_max NUMERIC(12,4),
  trailing_min NUMERIC(12,4),
  trailing_max NUMERIC(12,4),
  volatility_state TEXT DEFAULT 'normal',
  range_pct NUMERIC(5,2),
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(day, symbol)
);

ALTER TABLE public.execution_reference ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read execution_reference"
ON public.execution_reference FOR SELECT
USING (true);

CREATE INDEX idx_execution_ref_day_symbol ON public.execution_reference(day DESC, symbol);

-- Economic Events table with classification
CREATE TABLE public.economic_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day DATE NOT NULL,
  time_utc TIME,
  currency TEXT NOT NULL,
  country TEXT,
  category TEXT,
  event_name TEXT NOT NULL,
  impact TEXT NOT NULL CHECK (impact IN ('high', 'medium', 'low')),
  forecast TEXT,
  previous_value TEXT,
  actual_value TEXT,
  is_caution_window BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.economic_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read economic_events"
ON public.economic_events FOR SELECT
USING (true);

CREATE INDEX idx_economic_events_day ON public.economic_events(day DESC);
CREATE INDEX idx_economic_events_impact ON public.economic_events(impact);
CREATE INDEX idx_economic_events_country ON public.economic_events(country);