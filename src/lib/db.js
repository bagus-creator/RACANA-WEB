import { createClient } from '@supabase/supabase-js';

// Buat fungsi pembantu (helper) untuk mengambil client Supabase secara dinamis
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Eror hanya akan dilempar jika fungsi ini dipanggil dan env-nya kosong
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Konfigurasi Supabase belum dipasang di environment variables.');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}