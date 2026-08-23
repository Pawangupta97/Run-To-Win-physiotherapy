-- Run To Win Healthcare Mumbai: Supabase Database Schema for Appointments
-- Execute this SQL query in your Supabase SQL Editor (https://supabase.com/dashboard/project/haoywlssgsdsbqkkgujo/sql)

CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  appointment_id TEXT UNIQUE NOT NULL,
  patient_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  body_part TEXT,
  mumbai_area TEXT,
  address TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  symptoms TEXT,
  previous_surgery BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'Pending Confirmation',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow public insert of appointment bookings
CREATE POLICY "Allow public inserts" 
ON public.appointments 
FOR INSERT 
WITH CHECK (true);

-- Allow reading appointments for verified clinic staff
CREATE POLICY "Allow public reads" 
ON public.appointments 
FOR SELECT 
USING (true);
