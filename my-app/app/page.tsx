import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <span className="text-6xl">🌧️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Data Curah Hujan Ibun
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-2">
              Periode DJF (Desember - Januari - Februari)
            </p>
            <p className="text-lg text-blue-200">
              2025 - 2026
            </p>
          </div>
        </section>

        {/* Statistik Cepat */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">67</h3>
              <p className="text-gray-600">Hari Monitoring</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-cyan-500">
              <div className="text-3xl mb-2">💧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Data Harian</h3>
              <p className="text-gray-600">& Data Per Jam</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
              <div className="text-3xl mb-2">🛰️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Citra Satelit</h3>
              <p className="text-gray-600">Zoom Earth</p>
            </div>
          </div>
        </section>

        {/* Menu Utama */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Akses Data</h2>
            <p className="text-gray-600">Pilih menu di bawah untuk melihat data curah hujan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Grafik */}
            <Link href="/grafik">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Grafik</h3>
                <p className="text-gray-600 mb-4">
                  Visualisasi data curah hujan dalam bentuk grafik line chart dan bar chart. 
                  Dilengkapi dengan filter tanggal dan statistik (rata-rata, tertinggi, terendah).
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Lihat Grafik</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* Card Analisis */}
            <Link href="/analisis">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition">
                  🛰️
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Analisis Citra</h3>
                <p className="text-gray-600 mb-4">
                  Galeri citra satelit Zoom Earth untuk analisis visual kondisi cuaca. 
                  Pilih tanggal dan jam untuk melihat citra yang tersedia.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Lihat Citra</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tentang Data Ini
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Data curah hujan wilayah Ibun ini dikumpulkan selama periode DJF (Desember-Januari-Februari) 
                  tahun 2025-2026. Data mencakup pengukuran harian dan per jam untuk analisis mendalam 
                  pola curah hujan di wilayah ini.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dilengkapi dengan citra satelit Zoom Earth untuk memberikan gambaran visual kondisi 
                  atmosfer dan pola awan pada waktu-waktu tertentu.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fitur Utama</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span>Grafik interaktif dengan filter rentang tanggal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span>Statistik otomatis (rata-rata, maksimum, minimum)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span>Galeri citra satelit dengan pemilih waktu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span>Tampilan responsif (HP & Desktop)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
