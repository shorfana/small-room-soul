"use client";
import Footer from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";

interface Merchandise {
  id_merchandise: number;
  id_band: number;
  nama_produk: string;
  deskripsi: string;
  harga: number;
  stok: number;
  foto_produk: string;
  kategori: string;
  tanggal_rilis: string;
  status_produk: string;
  rating_produk: number;
  jumlah_like: number;
}

const merchandiseList: Merchandise[] = [
  {
    id_merchandise: 1,
    id_band: 1,
    nama_produk: "T-Shirt Band Rock",
    deskripsi: "Kaos dengan desain eksklusif band rock favorit.",
    harga: 150000,
    stok: 25,
    foto_produk: "/images/tshirt-rock.jpg",
    kategori: "Pakaian",
    tanggal_rilis: "2024-01-15",
    status_produk: "Tersedia",
    rating_produk: 4.5,
    jumlah_like: 150,
  },
  // Tambahkan data lainnya di sini
];

const MerchandisePage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State for popup
  const itemsPerPage = 6;

  // Hitung jumlah halaman
  const totalPages = Math.ceil(merchandiseList.length / itemsPerPage);

  // Data untuk halaman saat ini
  const currentMerchandise = merchandiseList.slice(
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

  const handleBuyClick = (itemId: number) => {
    // Show the popup instead of navigating to checkout
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Nav />
      <section className="pt-14">
        <div className="min-h-screen bg-gray-100 p-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Merchandise
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentMerchandise.map((item) => (
              <div
                key={item.id_merchandise}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.foto_produk}
                  alt={item.nama_produk}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {item.nama_produk}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    Kategori: {item.kategori}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{item.deskripsi}</p>
                  <p className="text-lg font-bold text-gray-800">
                    Rp{item.harga.toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs text-gray-400">
                    Rilis:{" "}
                    {new Date(item.tanggal_rilis).toLocaleDateString("id-ID")}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      item.status_produk === "Tersedia"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    Status: {item.status_produk}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Rating: {item.rating_produk} / 5 - {item.jumlah_like} suka
                  </p>

                  {/* Tombol Beli dengan event handler */}
                  {item.status_produk === "Tersedia" && (
                    <button
                      onClick={() => handleBuyClick(item.id_merchandise)}
                      className="mt-4 block px-4 py-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600"
                    >
                      Beli
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Popup Coming Soon */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <h2 className="text-xl font-bold mb-4">Coming Soon!</h2>
                <p>
                  Fitur pembelian akan segera hadir. Terima kasih atas kesabaran
                  Anda!
                </p>
                <button
                  onClick={closePopup}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}

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
        <Footer />
      </section>
    </div>
  );
};

export default MerchandisePage;
