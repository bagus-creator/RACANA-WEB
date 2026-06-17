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
             
              <h3 className="text-lg font-semibold">{item.nama}</h3>
              <p className="text-yellow-300">{item.jabatan}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
