import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Curah Hujan Ibun | Analisis Cuaca DJF 2025-2026",
  description: "Sistem monitoring dan analisis curah hujan wilayah Ibun periode Desember 2025 - Februari 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
