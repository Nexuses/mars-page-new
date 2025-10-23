/*
  # Create demo bookings table

  1. New Tables
    - `demo_bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `company_email` (text) - Company email address of the requester
      - `name` (text) - Full name of the requester
      - `position` (text) - Job position/title of the requester
      - `preferred_date` (date) - Preferred date for the demo
      - `preferred_time` (text) - Preferred time for the demo
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - Timestamp when booking was created
      - `updated_at` (timestamptz) - Timestamp when booking was last updated

  2. Security
    - Enable RLS on `demo_bookings` table
    - Add policy for public users to insert their own bookings
    - Add policy for authenticated users to view all bookings (for admin purposes)

  3. Notes
    - Public users can submit demo booking requests
    - Email validation should be handled at application level
    - Status defaults to 'pending' for new bookings
*/

CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_email text NOT NULL,
  name text NOT NULL,
  position text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  CONSTRAINT valid_email CHECK (company_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

-- Enable Row Level Security
ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert demo booking requests
CREATE POLICY "Anyone can submit demo booking requests"
  ON demo_bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Authenticated users can view all bookings (for admin dashboard)
CREATE POLICY "Authenticated users can view all bookings"
  ON demo_bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can update bookings (for admin management)
CREATE POLICY "Authenticated users can update bookings"
  ON demo_bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_demo_bookings_created_at ON demo_bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_bookings_status ON demo_bookings(status);