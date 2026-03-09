-- Ensure economic_events can be safely upserted without accumulating duplicates
-- Strategy:
-- 1) Backfill NULL time_utc to '00:00:00' so it can participate in a uniqueness key
-- 2) Add a UNIQUE constraint on (day, time_utc, currency, event_name)

-- 1) Backfill
UPDATE public.economic_events
SET time_utc = '00:00:00'::time
WHERE time_utc IS NULL;

-- 2) Add unique constraint (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'economic_events_day_time_currency_event_unique'
  ) THEN
    ALTER TABLE public.economic_events
      ADD CONSTRAINT economic_events_day_time_currency_event_unique
      UNIQUE (day, time_utc, currency, event_name);
  END IF;
END $$;
