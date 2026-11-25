-- Create waitlist table for Bleu
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  user_type TEXT NOT NULL CHECK (user_type IN ('individual', 'business')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create partners_interest table
CREATE TABLE IF NOT EXISTS public.partners_interest (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  user_type TEXT NOT NULL CHECK (user_type IN ('business', 'individual', 'partner', 'other')),
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS but allow public inserts (no auth required for waitlist)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners_interest ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into these tables (public forms)
CREATE POLICY "Allow public inserts to waitlist" ON public.waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts to partners_interest" ON public.partners_interest FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts to contact_submissions" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Only allow service role to read (for admin purposes)
CREATE POLICY "Service role can read waitlist" ON public.waitlist FOR SELECT USING (auth.role() = 'service_role');
CREATE POLICY "Service role can read partners_interest" ON public.partners_interest FOR SELECT USING (auth.role() = 'service_role');
CREATE POLICY "Service role can read contact_submissions" ON public.contact_submissions FOR SELECT USING (auth.role() = 'service_role');
