import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📧</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600">
              Ada pertanyaan atau saran? Jangan ragu untuk menghubungi kami
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-2">Kirim email ke:</p>
              <a href="mailto:info@curahhujan-ibun.id" className="text-blue-600 hover:text-blue-700 font-medium">
                info000@curahhujan-ibun.id
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600 text-sm mb-2">Hubungi kami di:</p>
              <a href="tel:+6281234567890" className="text-green-600 hover:text-green-700 font-medium">
                +62 812-3456-7890
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lokasi</h3>
              <p className="text-gray-600 text-sm mb-2">Wilayah Ibun</p>
              <p className="text-purple-600 font-medium">
                Kabupaten Bandung<br/>
                Jawa Barat
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subjek"
                  name="subjek"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Topik pesan Anda"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition duration-200 shadow-md hover:shadow-lg"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-xl mr-3">ℹ️</span>
                <div className="text-sm text-blue-800">
                  <strong>Catatan:</strong> Form ini hanya untuk tampilan. 
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
