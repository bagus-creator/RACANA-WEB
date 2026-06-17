"use client";
import { useState } from "react";

export default function FormPendaftaran() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nim: "",
    jurusan: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: "", message: "" });

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // 1. Ambil teks mentah terlebih dahulu untuk menghindari crash pembacaan JSON
    const textData = await res.text();
    let data = {};
    
    try {
      data = JSON.parse(textData);
    } catch (parseErr) {
      // Jika gagal parse JSON, berarti server mengirim teks biasa (seperti "Internal Server Error")
      throw new Error(textData || `Server merespons dengan status ${res.status}`);
    }

    if (!res.ok) {
      throw new Error(data.message || `Terjadi kesalahan (Status: ${res.status})`);
    }

    setStatus({ type: "success", message: data.message || "Pendaftaran berhasil!" });
    setFormData({ nama: "", email: "", nim: "", jurusan: "" }); // Reset form
  } catch (err) {
    // Sekarang pesan eror "Internal Server Error" akan tampil rapi di UI, bukan bikin crash console
    setStatus({ type: "error", message: err.message });
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="pendaftaran" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">
          Form Pendaftaran Racana
        </h2>

        {status.message && (
          <div
            className={`p-3 mb-4 rounded text-sm font-medium ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-green-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">NIM</label>
            <input
              type="text"
              name="nim"
              value={formData.nim}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-green-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-green-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Jurusan</label>
            <input
              type="text"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-green-900"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-900 hover:bg-green-800 text-white font-bold py-2 rounded transition-colors disabled:bg-gray-400"
          >
            {loading ? "Memproses..." : "Daftar Sekarang"}
          </button>
        </form>
      </div>
    </section>
  );
}
