export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kolom 1: Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Data Curah Hujan Ibun</h3>
            <p className="text-gray-400 text-sm">
              Sistem monitoring dan analisis curah hujan wilayah Ibun untuk periode DJF (Desember-Januari-Februari) 2025-2026.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">Beranda</a></li>
              <li><a href="/grafik" className="hover:text-white transition">Data Grafik</a></li>
              <li><a href="/analisis" className="hover:text-white transition">Analisis Citra</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-bold mb-3">Informasi</h3>
            <p className="text-gray-400 text-sm">
              Periode Data: Des 2025 - Feb 2026<br/>
              Lokasi: Ibun, Jawa Barat
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Data Curah Hujan Ibun. Dibuat untuk keperluan analisis cuaca.</p>
        </div>
      </div>
    </footer>
  );
}
