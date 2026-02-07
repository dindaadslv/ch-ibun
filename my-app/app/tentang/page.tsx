import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TentangPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          
          {/* Header Section */}
          <section className="text-center">
            <div className="text-6xl mb-4">🌧️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang Sistem Ini
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistem monitoring dan analisis data curah hujan wilayah Ibun untuk mendukung 
              pemahaman pola cuaca lokal.
            </p>
          </section>

          {/* Info Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lokasi</h3>
              <p className="text-gray-600">
                Wilayah Ibun<br/>
                Kabupaten Bandung<br/>
                Jawa Barat
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Periode Data</h3>
              <p className="text-gray-600">
                DJF 2025-2026<br/>
                Desember 2025<br/>
                Januari - Februari 2026
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jenis Data</h3>
              <p className="text-gray-600">
                Data Harian<br/>
                Data Per Jam<br/>
                Citra Satelit
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tentang Proyek</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Sistem ini dikembangkan untuk mendokumentasikan dan menganalisis data curah hujan 
                di wilayah Ibun selama periode DJF (Desember-Januari-Februari) tahun 2025-2026. 
                Data yang dikumpulkan mencakup pengukuran curah hujan harian dan per jam.
              </p>

              <p>
                Selain data numerik, sistem ini juga menyediakan citra satelit dari Zoom Earth 
                yang membantu dalam analisis visual kondisi cuaca dan pola awan pada waktu-waktu 
                tertentu.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Fitur Utama</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl flex-shrink-0">✓</span>
                  <span><strong>Visualisasi Grafik:</strong> Line chart dan bar chart interaktif untuk melihat tren dan perbandingan curah hujan harian.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl flex-shrink-0">✓</span>
                  <span><strong>Filter Tanggal:</strong> Kemampuan untuk memfilter data berdasarkan rentang tanggal tertentu.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl flex-shrink-0">✓</span>
                  <span><strong>Statistik Otomatis:</strong> Perhitungan rata-rata, nilai tertinggi, terendah, dan total curah hujan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl flex-shrink-0">✓</span>
                  <span><strong>Galeri Citra Satelit:</strong> Akses mudah ke citra satelit Zoom Earth dengan pemilih tanggal dan waktu.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl flex-shrink-0">✓</span>
                  <span><strong>Responsif:</strong> Tampilan optimal di perangkat mobile maupun desktop.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Klasifikasi Intensitas Hujan</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 mr-3 rounded"></div>
                    <span><strong>Tidak Ada Hujan:</strong> 0 - 5 mm/hari</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 mr-3 rounded"></div>
                    <span><strong>Hujan Ringan:</strong> 5 - 20 mm/hari</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 mr-3 rounded"></div>
                    <span><strong>Hujan Sedang:</strong> 20 - 50 mm/hari</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 mr-3 rounded"></div>
                    <span><strong>Hujan Lebat:</strong> 50 - 100 mm/hari</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 mr-3 rounded"></div>
                    <span><strong>Hujan Sangat Lebat:</strong> &gt; 100 mm/hari</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Teknologi yang Digunakan
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <div className="text-3xl">⚛️</div>
                </div>
                <p className="font-semibold text-gray-800">Next.js</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <div className="text-3xl">🎨</div>
                </div>
                <p className="font-semibold text-gray-800">Tailwind CSS</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <div className="text-3xl">📊</div>
                </div>
                <p className="font-semibold text-gray-800">Chart.js</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md mb-2">
                  <div className="text-3xl">🛰️</div>
                </div>
                <p className="font-semibold text-gray-800">Zoom Earth</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
