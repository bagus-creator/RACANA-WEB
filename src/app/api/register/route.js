import { NextResponse } from 'next/server';
import db from '@/lib/db'; // sesuaikan path jika berbeda

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, email, nim, jurusan } = body;

    // Validasi sederhana
    if (!nama || !email || !nim || !jurusan) {
      return NextResponse.json(
        { message: 'Semua data wajib diisi!' },
        { status: 400 }
      );
    }

    // Insert data ke database SQLite
    const stmt = db.prepare(
      'INSERT INTO pendaftar (nama, email, nim, jurusan) VALUES (?, ?, ?, ?)'
    );
    stmt.run(nama, email, nim, jurusan);

    return NextResponse.json(
      { message: 'Pendaftaran berhasil disimpan!' },
      { status: 201 }
    );
  } catch (error) {
    // Menangani error jika email duplikat
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return NextResponse.json(
        { message: 'Email sudah terdaftar!' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'Terjadi kesalahan server.', error: error.message },
      { status: 500 }
    );
  }
}