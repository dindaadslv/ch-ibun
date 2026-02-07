"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ImageData {
  [key: string]: string[];
}

export default function AnalisisPage() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>('');

  const imageDatabase: ImageData = {
    "1 Feb": ["15.00"],
    "2 Feb": ["15.00", "16.00", "17.00", "18.00", "19.00"],
    "4 Feb": ["17.00"],
    "5 Feb": ["13.00"],
    "27 Jan": ["14.00"],
    "28 Jan": ["16.00"],
    "29 Jan": ["10.00", "16.00", "17.00"],
    "31 Jan": ["17.00", "18.00", "19.00"],
  };

  const availableDates = Object.keys(imageDatabase).sort((a, b) => {
    // Sort berdasarkan tanggal
    const parseDate = (str: string) => {
      const [day, month] = str.split(' ');
      const monthMap: { [key: string]: number } = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4,
        'Mei': 5, 'Jun': 6, 'Jul': 7, 'Agu': 8,
        'Sep': 9, 'Okt': 10, 'Nov': 11, 'Des': 12
      };
      return parseInt(day) + (monthMap[month] || 0) * 100;
    };
    return parseDate(a) - parseDate(b);
  });

  // Update available times ketika tanggal dipilih
  useEffect(() => {
    if (selectedDate && imageDatabase[selectedDate]) {
      const times = imageDatabase[selectedDate];
      setAvailableTimes(times);
      setSelectedTime(times[0]); // Auto-pilih jam pertama
    } else {
      setAvailableTimes([]);
      setSelectedTime('');
    }
  }, [selectedDate]);

  // Update gambar ketika tanggal dan jam dipilih
  useEffect(() => {
    if (selectedDate && selectedTime) {
      const imagePath = `/images/zoomearth/${selectedDate} ${selectedTime}.png`;
      setCurrentImage(imagePath);
    } else {
      setCurrentImage('');
    }
  }, [selectedDate, selectedTime]);

  // Set default selection saat halaman dimuat
  useEffect(() => {
    if (availableDates.length > 0) {
      setSelectedDate(availableDates[0]);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            🛰️ Analisis Citra Satelit
          </h1>
          <p className="text-gray-600">
            Citra satelit Zoom Earth untuk analisis visual kondisi cuaca
          </p>
        </div>

        {/* Selector Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pilih Tanggal & Waktu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pilih Tanggal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-lg"
              >
                <option value="">-- Pilih Tanggal --</option>
                {availableDates.map(date => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-2">
                Tersedia {availableDates.length} tanggal dengan data citra
              </p>
            </div>

            {/* Pilih Jam */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Waktu (WIB)
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                disabled={!selectedDate}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-lg ${
                  !selectedDate ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <option value="">-- Pilih Waktu --</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-2">
                {selectedDate 
                  ? `Tersedia ${availableTimes.length} waktu untuk ${selectedDate}`
                  : 'Pilih tanggal terlebih dahulu'
                }
              </p>
            </div>
          </div>

          {/* Info Card */}
          {selectedDate && selectedTime && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">ℹ️</span>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Citra Terpilih
                  </h3>
                  <p className="text-blue-800">
                    Tanggal: <strong>{selectedDate} 2026</strong> | 
                    Waktu: <strong>{selectedTime} WIB</strong>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image Display Section */}
        {currentImage ? (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Citra Satelit - {selectedDate} {selectedTime} WIB
            </h2>
            
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={currentImage}
                alt={`Citra satelit ${selectedDate} ${selectedTime}`}
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5HYW1iYXIgdGlkYWsgZGl0ZW11a2FuPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>

            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Keterangan:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sumber: Zoom Earth Satellite Imagery</li>
                <li>• Lokasi: Wilayah Ibun dan sekitarnya</li>
                <li>• Gunakan citra ini untuk menganalisis pola awan dan kondisi atmosfer</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🛰️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Pilih Tanggal & Waktu
            </h3>
            <p className="text-gray-600">
              Pilih tanggal dan waktu di atas untuk menampilkan citra satelit
            </p>
          </div>
        )}

        {/* Gallery Preview (Thumbnail semua gambar yang tersedia) */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Galeri Citra Tersedia
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {availableDates.map(date => {
              const times = imageDatabase[date];
              return times.map(time => {
                const imagePath = `/images/zoomearth/${date} ${time}.png`;
                const isSelected = selectedDate === date && selectedTime === time;
                
                return (
                  <button
                    key={`${date}-${time}`}
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedTime(time);
                    }}
                    className={`relative aspect-video bg-gray-100 rounded-lg overflow-hidden border-2 transition ${
                      isSelected 
                        ? 'border-blue-500 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <img
                      src={imagePath}
                      alt={`${date} ${time}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5OL0E8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2">
                      <div className="font-semibold">{date}</div>
                      <div>{time}</div>
                    </div>
                  </button>
                );
              });
            })}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
