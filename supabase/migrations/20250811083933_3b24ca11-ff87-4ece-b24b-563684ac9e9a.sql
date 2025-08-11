-- Enable required extension for UUIDs
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create table for waitlist signups
CREATE TABLE IF NOT EXISTS public.waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  source TEXT DEFAULT 'waitlist_form',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for merchant inquiries
CREATE TABLE IF NOT EXISTS public.merchant_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.merchant_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies: allow anyone to INSERT (public forms), but no SELECT/UPDATE/DELETE by default
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'waitlist_signups' AND policyname = 'Allow public inserts to waitlist_signups'
  ) THEN
    CREATE POLICY "Allow public inserts to waitlist_signups"
    ON public.waitlist_signups
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'merchant_inquiries' AND policyname = 'Allow public inserts to merchant_inquiries'
  ) THEN
    CREATE POLICY "Allow public inserts to merchant_inquiries"
    ON public.merchant_inquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
  END IF;
END $$;

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_created_at ON public.waitlist_signups (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_merchant_inquiries_created_at ON public.merchant_inquiries (created_at DESC);
