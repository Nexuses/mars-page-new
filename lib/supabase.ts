import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type DemoBooking = {
  id?: string
  company_email: string
  name: string
  position: string
  preferred_date: string
  preferred_time: string
  status?: string
  created_at?: string
  updated_at?: string
}
