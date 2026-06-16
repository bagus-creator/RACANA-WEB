"use client"; // kalau pakai App Router Next.js
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
            src="data:image/jpeg;base64,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"
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
          <a href="#pendaftaran" className="hover:text-yellow-300">Pendaftaran</a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-900 px-6 py-4 space-y-2">
          <a href="#home" onClick={handleNavClick} className="block hover:text-yellow-300">Home</a>
          <a href="#about" onClick={handleNavClick} className="block hover:text-yellow-300">About</a>
          <a href="#anggota" onClick={handleNavClick} className="block hover:text-yellow-300">Anggota</a>
          <a href="#pendaftaran" onClick={handleNavClick} className="block hover:text-yellow-300">Pendaftaran</a>
        </div>
      )}
    </header>
  );
}
