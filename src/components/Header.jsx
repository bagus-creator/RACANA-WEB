"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(false); // tutup menu setelah klik
  };

  return (
    <header className="bg-green-900 text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmClAhp4WpqePtwho3Vh9duiJB0gFgfNyuRv0J7N4DQw&s"
            alt="Logo UKM"
            className="w-12 h-10 rounded-full"
          />
          <span className="font-bold text-lg">RACANA KARIADI-KARDINAH</span>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#anggota" className="hover:text-yellow-300">Anggota</a>
        </nav>
      </div>

      {/* Mobile menu - PERBAIKAN DI SINI (Kurung penutup sudah ditambahkan dengan benar) */}
      {isOpen && (
        <div className="md:hidden bg-green-900 px-6 py-4 space-y-2">
          <a href="#home" onClick={handleNavClick} className="block hover:text-yellow-300">Home</a>
          <a href="#about" onClick={handleNavClick} className="block hover:text-yellow-300">About</a>
          <a href="#anggota" onClick={handleNavClick} className="block hover:text-yellow-300">Anggota</a>
        </div>
      )}
    </header>
  );
}
