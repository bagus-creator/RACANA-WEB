import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Memanggil client Supabase yang baru kita buat

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

    // 2. Insert data ke tabel Supabase Cloud
    const { data, error } = await db
      .from('pendaftar')
      .insert([{ nama, email, nim, jurusan }]);

    // 3. Menangani error dari database (misal data duplikat)
    if (error) {
      // Kode error '23505' di PostgreSQL artinya Unique Constraint (Email/NIM kembar)
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
