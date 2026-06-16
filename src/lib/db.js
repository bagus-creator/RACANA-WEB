import Database from 'better-sqlite3';
import path from 'path';

// Menyimpan file database di root proyek dengan nama pendaftaran.db
const dbPath = path.resolve(process.cwd(), 'pendaftaran.db');
const db = new Database(dbPath);

// Membuat tabel pendaftar secara otomatis jika belum ada
db.prepare(`
  CREATE TABLE IF NOT EXISTS pendaftar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    nim TEXT NOT NULL,
    jurusan TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export default db;