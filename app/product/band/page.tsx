"use client";
import Footer from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { NextPage } from "next";
import React, { useState } from "react";

interface Band {
  id_band: number;
  nama_band: string;
  genre: string;
  deskripsi: string;
  tahun_terbentuk: number;
  kota_asal: string;
  jumlah_anggota: number;
  foto_band: string;
  kontak: string;
  website: string;
  media_sosial: string;
  status_aktif: boolean;
  tanggal_dibuat: string;
}

const bands: Band[] = [
  {
    id_band: 1,
    nama_band: "Medikipless",
    genre: "Rock",
    deskripsi: "Band rock dengan pengaruh dari era klasik.",
    tahun_terbentuk: 2005,
    kota_asal: "Jakarta",
    jumlah_anggota: 5,
    foto_band: "https://i.ibb.co.com/qBJd5ym/medikiples-page-0001.jpg",
    kontak: "rockers@contact.com",
    website: "http://therockers.com",
    media_sosial: "@therockers",
    status_aktif: true,
    tanggal_dibuat: "2005-06-15",
  },
  {
    id_band: 2,
    nama_band: "Rock Stone Sound Jakarta",
    genre: "Jazz",
    deskripsi: "Band jazz dengan permainan alat musik yang penuh improvisasi.",
    tahun_terbentuk: 2010,
    kota_asal: "Bandung",
    jumlah_anggota: 4,
    foto_band:
      "https://i.ibb.co.com/qn3Yqss/Whats-App-Image-2024-11-03-at-16-12-10-c44d5853.jpg",
    kontak: "jazzmasters@contact.com",
    website: "http://jazzmasters.com",
    media_sosial: "@jazzmasters",
    status_aktif: true,
    tanggal_dibuat: "2010-09-12",
  },
  {
    id_band: 3,
    nama_band: "Seladjaknjalah",
    genre: "Pop",
    deskripsi: "Band pop dengan lagu-lagu hits yang digemari anak muda.",
    tahun_terbentuk: 2015,
    kota_asal: "Surabaya",
    jumlah_anggota: 6,
    foto_band:
      "https://i.ibb.co.com/QNdP1cg/Whats-App-Image-2024-11-03-at-16-35-21-c0e4ac3a.jpg",
    kontak: "popsensation@contact.com",
    website: "http://popsensation.com",
    media_sosial: "@popsensation",
    status_aktif: false,
    tanggal_dibuat: "2015-03-22",
  },
  {
    id_band: 4,
    nama_band: "Pudjadamai",
    genre: "Pop",
    deskripsi: "Band pop dengan lagu-lagu hits yang digemari anak muda.",
    tahun_terbentuk: 2015,
    kota_asal: "Surabaya",
    jumlah_anggota: 6,
    foto_band:
      "https://i.ibb.co.com/FgGwzyx/Whats-App-Image-2024-11-03-at-16-31-23-5b6096ac.jpg",
    kontak: "popsensation@contact.com",
    website: "http://popsensation.com",
    media_sosial: "@popsensation",
    status_aktif: false,
    tanggal_dibuat: "2015-03-22",
  },
];

const BandsPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Ganti angka ini untuk mengubah jumlah item per halaman

  // Hitung jumlah halaman
  const totalPages = Math.ceil(bands.length / itemsPerPage);

  // Data band untuk halaman saat ini
  const currentBands = bands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Nav />
      <section className="pt-14">
        <div className="min-h-screen bg-gray-100 p-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Band
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentBands.map((band) => (
              <div
                key={band.id_band}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={band.foto_band}
                  alt={band.nama_band}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {band.nama_band}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    {band.genre} - {band.kota_asal}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{band.deskripsi}</p>
                  <p className="text-xs text-gray-400">
                    Tahun Terbentuk: {band.tahun_terbentuk}
                  </p>
                  <p className="text-xs text-gray-400">
                    Jumlah Anggota: {band.jumlah_anggota}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      band.status_aktif ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Status: {band.status_aktif ? "Aktif" : "Tidak Aktif"}
                  </p>
                  <a
                    href={band.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Kunjungi Website
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-l disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 text-gray-800">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-r disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BandsPage;
