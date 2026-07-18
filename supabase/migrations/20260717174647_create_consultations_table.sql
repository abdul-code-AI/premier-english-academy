/*
# Create consultations table for free consultation requests

1. Purpose
   Stores consultation requests submitted from the public "Ready to Speak With Confidence?"
   form on the Premier English Academy website. This is a single-tenant, no-auth app: there is
   no sign-in screen, so the frontend talks to Supabase with the anon key.

2. New Tables
   - `consultations`
     - `id` (uuid, primary key, auto-generated)
     - `full_name` (text, not null) — the learner's name
     - `email` (text, not null) — contact email
     - `phone` (text, not null) — contact phone number
     - `interest_area` (text, not null) — selected area of interest (e.g. Spoken English, Public Speaking)
     - `learning_format` (text, not null) — preferred format (Live Online, In-person, Hybrid, 1:1 Coaching)
     - `message` (text, nullable) — optional message from the learner
     - `status` (text, not null, default 'new') — lead status for internal tracking
     - `created_at` (timestamptz, default now()) — submission timestamp

3. Security
   - Enable RLS on `consultations`.
   - INSERT policy scoped to `anon, authenticated` so the public anon-key frontend can submit
     consultation requests without signing in. This is intentionally public write access for lead
     capture — the only operation the public needs.
   - No SELECT / UPDATE / DELETE policies are created for anon, so submitted leads cannot be
     read, modified, or deleted from the anon-key client. Those operations are reserved for the
     Supabase dashboard / service role for academy staff to review submissions.

4. Notes
   - Idempotent: uses IF NOT EXISTS and DROP POLICY IF EXISTS so re-running is safe.
   - No user_id / auth.users reference — this is a no-auth lead-capture table.
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  interest_area text NOT NULL,
  learning_format text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultations" ON consultations;
CREATE POLICY "anon_insert_consultations"
ON consultations FOR INSERT
TO anon, authenticated
WITH CHECK (true);
