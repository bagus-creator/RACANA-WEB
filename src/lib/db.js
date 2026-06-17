import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Konfigurasi Supabase belum dipasang di environment variables.');
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: fetch,
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}