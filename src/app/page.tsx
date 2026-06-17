import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* hero sectoin */}
   <div  className="hero-section mx-auto text-center mt-15 flex flex-col">
   {/* header hero */}
   {/* Hero Section */}
<section id="home" className="pt-32 pb-20 bg-gradient-to-b from-green-950 to-green-900 text-white relative overflow-hidden">
  {/* Ornamen Latar Belakang (Opsional untuk estetika) */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]"></div>

  <div className="container mx-auto px-6 text-center relative z-10">
    {/* Sub-judul atas */}
    <p className="text-yellow-400 font-semibold tracking-widest text-sm uppercase mb-3">
      Welcome To Official Website
    </p>
    
    {/* Judul Utama */}
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 dropped-shadow-sm">
      RACANA KARIADI - KARDINAH
    </h1>
    
    {/* Nama Universitas */}
    <p className="text-xl md:text-2xl text-gray-200 font-medium mb-8">
      Universitas Bhamada Slawi
    </p>

    {/* Kotak Sambutan / Gimmick */}
    <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 mb-8 shadow-xl">
      <p className="text-gray-100 text-sm md:text-base leading-relaxed">
        Halo Kakak 👋, Selamat Datang di Website Resmi Racana Kariadi-Kardinah Universitas Bhamada Slawi. Mari berproses dan mengabdi bersama!
      </p>
    </div>

    {/* Call to Action (CTA) Button */}
    <div className="flex justify-center">
      <a 
        href="#pendaftaran" 
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
      >
        Gabung Sekarang
      </a>
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 bg-white text-gray-800">
  <div className="container mx-auto px-6 max-w-4xl text-center">
    {/* Judul dengan aksen garis bawah khas Pramuka */}
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-green-950 uppercase tracking-wider">
        Tentang Kami
      </h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
    </div>

    {/* Deskripsi Singkat */}
    <p className="text-lg leading-relaxed text-gray-600 mb-12">
      Racana Kariadi-Kardinah adalah Unit Kegiatan Mahasiswa (UKM) Pramuka di Universitas Bhamada Slawi. Nama racana ini diambil dari dua tokoh pahlawan dan pelopor kesehatan asal Jawa Tengah, yaitu dr. Kariadi (pahlawan medis pertempuran 5 hari di Semarang) dan RA Kardinah (tokoh emansipasi dan pendiri RSUD Kardinah di Tegal).
    </p>

    {/* Grid Visi & Misi */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      
      {/* Kotak Visi */}
      <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 shadow-sm">
        <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span> Visi
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Terwujudnya Pramuka Racana Kariadi-Kardinah yang unggul, berkarakter 
          Satyaku Kudarmakan, Darmaku Kubaktikan, serta aktif dalam pengembangan 
          potensi softskills dan pengabdian masyarakat di bidang kesehatan.
        </p>
      </div>

      {/* Kotak Misi */}
      <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 shadow-sm">
        <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span> Misi
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
          <li>Menyelenggarakan kegiatan kepramukaan yang adaptif dan inovatif.</li>
          <li>Membentuk kader pemimpin yang berakhlak mulia dan disiplin.</li>
          <li>Mengabdi kepada masyarakat melalui aksi nyata dan kepedulian sosial.</li>
        </ul>
      </div>

    </div>

  </div>
</section>
    
   
  </div>

   </>
  );
}
