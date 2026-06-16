import type { Metadata } from "next";
import {Geist, Geist_Mono, Rubik } from "next/font/google";
import{Bebas_Neue} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Anggota from "@/components/Anggota"
import Pendaftaran from "@/components/Pendaftaran"

const BebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', // Hanya tersedia weight 400
  variable: '--font-bebas-neue', // Digunakan jika ingin diintegrasikan ke Tailwind
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RACANA KARIADI-KARDINAH",
  description: "UKM PRAMUKA UBS",
    icons: {
    icon: "./logoracana.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Header/>
      <main className={BebasNeue.className}>
         {children}
         <Anggota/>
         <Pendaftaran/>
      </main>
      <Footer/>
      </body>
    </html>
  );
}
