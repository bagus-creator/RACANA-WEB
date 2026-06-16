"use client";
import { useEffect, useState } from "react";

export default function Anggota() {
  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
  fetch("/anggota.json")
    .then((res) => res.json())
    .then((data) => {
      const withId = data.map((item, index) => ({
        ...item,
        id: index + 1 // auto increment
      }));
      setAnggota(withId);
    });
}, []);


  return (
    <section id="anggota" className="py-10 bg-green-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Anggota Pramuka</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {anggota.map((item) => (
            <div
              key={item.id}
              className="bg-green-800 shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition"
            >
              <img
                src={item.foto}
                alt={item.nama}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-green-600"
              />
              <h3 className="text-lg font-semibold">{item.nama}</h3>
              <p className="text-yellow-300">{item.jabatan}</p>
              <a
                href={`mailto:${item.email}`}
                className="mt-2 text-sm text-gray-200 hover:text-yellow-400"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
