import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/db'; // Import fungsi helper baru

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, email, nim, jurusan } = body;

    // 1. Validasi sederhana
    if (!nama || !email || !nim || !jurusan) {
      return NextResponse.json(
        { message: 'Semua data wajib diisi!' },
        { status: 400 }
      );
    }

    // 2. Inisialisasi Supabase secara aman di dalam handler (Runtime)
    const supabase = getSupabaseClient();

    // 3. Insert data ke tabel Supabase Cloud
    const { data, error } = await supabase
      .from('pendaftar')
      .insert([{ nama, email, nim, jurusan }]);

    // 4. Menangani error dari database
    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'Email atau NIM sudah terdaftar!' },
          { status: 400 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: 'Pendaftaran berhasil disimpan ke Cloud!' },
      { status: 201 }
    );
  } catch (error) {
    console.error("Detail Error Backend:", error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server.', error: error.message },
      { status: 500 }
    );
  }
}