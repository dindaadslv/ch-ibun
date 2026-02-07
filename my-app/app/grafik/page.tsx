"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DataHarian {
  tgl: string;
  ch: string;
  intensitas: string;
}

export default function GrafikPage() {
  const [dataHarian, setDataHarian] = useState<DataHarian[]>([]);
  const [filteredData, setFilteredData] = useState<DataHarian[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(true);

  // Load data saat komponen dimuat
  useEffect(() => {
    fetch('/data/harian.json')
      .then(res => res.json())
      .then((data: DataHarian[]) => {
        setDataHarian(data);
        setFilteredData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setLoading(false);
      });
  }, []);

  // Filter data berdasarkan tanggal
  const handleFilter = () => {
    if (!startDate || !endDate) {
      setFilteredData(dataHarian);
      return;
    }

    const filtered = dataHarian.filter(item => {
      const itemDate = parseTanggal(item.tgl);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return itemDate >= start && itemDate <= end;
    });
    
    setFilteredData(filtered);
  };

  // Reset filter
  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setFilteredData(dataHarian);
  };

  // Parse tanggal Indonesia ke Date object
  const parseTanggal = (tglStr: string): Date => {
    const bulanMap: { [key: string]: number } = {
      'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3,
      'Mei': 4, 'Juni': 5, 'Juli': 6, 'Agustus': 7,
      'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
    };
    
    const parts = tglStr.split(' ');
    const hari = parseInt(parts[0]);
    const bulan = bulanMap[parts[1]];
    const tahun = parseInt(parts[2]);
    
    return new Date(tahun, bulan, hari);
  };

  // Hitung statistik
  const calculateStats = () => {
    const values = filteredData.map(d => parseFloat(d.ch));
    const total = values.reduce((sum, val) => sum + val, 0);
    const avg = total / values.length;
    const max = Math.max(...values);
    const min = Math.min(...values);
    const maxItem = filteredData.find(d => parseFloat(d.ch) === max);
    const minItem = filteredData.find(d => parseFloat(d.ch) === min);

    return { avg, max, min, total, maxItem, minItem };
  };

  const stats = calculateStats();

  // Data untuk Line Chart
  const lineChartData = {
    labels: filteredData.map(d => d.tgl),
    datasets: [
      {
        label: 'Curah Hujan (mm)',
        data: filteredData.map(d => parseFloat(d.ch)),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      }
    ]
  };

  // Data untuk Bar Chart
  const barChartData = {
    labels: filteredData.map(d => d.tgl),
    datasets: [
      {
        label: 'Curah Hujan (mm)',
        data: filteredData.map(d => parseFloat(d.ch)),
        backgroundColor: filteredData.map(d => {
          const val = parseFloat(d.ch);
          if (val === 0) return 'rgba(209, 213, 219, 0.8)';
          if (val < 10) return 'rgba(34, 197, 94, 0.8)';
          if (val < 20) return 'rgba(234, 179, 8, 0.8)';
          if (val < 50) return 'rgba(249, 115, 22, 0.8)';
          return 'rgba(239, 68, 68, 0.8)';
        }),
        borderColor: filteredData.map(d => {
          const val = parseFloat(d.ch);
          if (val === 0) return 'rgb(156, 163, 175)';
          if (val < 10) return 'rgb(34, 197, 94)';
          if (val < 20) return 'rgb(234, 179, 8)';
          if (val < 50) return 'rgb(249, 115, 22)';
          return 'rgb(239, 68, 68)';
        }),
        borderWidth: 2,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.parsed.y + ' mm';
            const item = filteredData[context.dataIndex];
            if (item) {
              label += ' (' + item.intensitas + ')';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Curah Hujan (mm)'
        }
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 10
          }
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat data...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            📊 Data Grafik Curah Hujan
          </h1>
          <p className="text-gray-600">
            Visualisasi data curah hujan harian periode DJF 2025-2026
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Filter Rentang Tanggal</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Mulai
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Akhir
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleFilter}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Terapkan Filter
              </button>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleReset}
                className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition font-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Statistik Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="text-sm text-gray-600 mb-1">Rata-rata</div>
            <div className="text-2xl font-bold text-gray-900">
              {stats.avg.toFixed(2)} mm
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
            <div className="text-sm text-gray-600 mb-1">Tertinggi</div>
            <div className="text-2xl font-bold text-gray-900">
              {stats.max} mm
            </div>
            {stats.maxItem && (
              <div className="text-xs text-gray-500 mt-1">{stats.maxItem.tgl}</div>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="text-sm text-gray-600 mb-1">Terendah</div>
            <div className="text-2xl font-bold text-gray-900">
              {stats.min} mm
            </div>
            {stats.minItem && (
              <div className="text-xs text-gray-500 mt-1">{stats.minItem.tgl}</div>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="text-sm text-gray-600 mb-1">Total</div>
            <div className="text-2xl font-bold text-gray-900">
              {stats.total.toFixed(1)} mm
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Grafik Tren Curah Hujan (Line Chart)
          </h2>
          <div className="h-80 md:h-96">
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Grafik Perbandingan Harian (Bar Chart)
          </h2>
          <div className="mb-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 mr-2 rounded"></div>
                <span>Tidak Ada Hujan (0 mm)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 mr-2 rounded"></div>
                <span>Ringan (&lt;10 mm)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 mr-2 rounded"></div>
                <span>Sedang (10-20 mm)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 mr-2 rounded"></div>
                <span>Lebat (20-50 mm)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 mr-2 rounded"></div>
                <span>Sangat Lebat (&gt;50 mm)</span>
              </div>
            </div>
          </div>
          <div className="h-80 md:h-96">
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
