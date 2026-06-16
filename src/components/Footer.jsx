export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 border-t border-green-900 py-12 mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Konten Utama Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-green-900/60">
          
          {/* Identitas Singkat */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg tracking-wide">
              RACANA KARIADI - KARDINAH
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Universitas Bhamada Slawi · Tegal, Jawa Tengah
            </p>
          </div>

          {/* Sosial Media dengan Efek Hover Emas */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform duration-200 brightness-0 invert hover:brightness-100 hover:invert-0"
              style={{ filter: 'brightness(0) invert(1)' }} /* Memaksa ikon jadi putih */
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" 
                alt="Facebook" 
                className="w-6 h-6" 
              />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" 
                alt="Instagram" 
                className="w-6 h-6 " 
              />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" 
                alt="YouTube" 
                className="w-7 h-5" 
              />
            </a>
          </div>

        </div>

        {/* Hak Cipta / Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Racana Kariadi - Kardinah. All rights reserved.</p>
          <p className="tracking-wide">Satyaku Kudarmakan, Darmaku Kubaktikan.</p>
        </div>

      </div>
    </footer>
  );
}