"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Data Grafik', href: '/grafik' },
  { name: 'Analisis Citra', href: '/analisis' },
  { name: 'Tentang', href: '/tentang' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌧️</span>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Data Curah Hujan Ibun
              </span>
              <span className="text-xl font-bold text-white sm:hidden">
                CH Ibun
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Tombol Burger Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg focus:outline-none transition"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white hover:bg-opacity-20 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
