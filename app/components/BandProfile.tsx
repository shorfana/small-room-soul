"use client";
// components/BandProfile.js
import React, { useState } from "react";

const bands = [
  {
    id: 1,
    name: "Band A",
    description: "Deskripsi singkat tentang Band A.",
    image: "https://via.placeholder.com/300?text=Band+A", // Example Google placeholder
  },
  {
    id: 2,
    name: "Band B",
    description: "Deskripsi singkat tentang Band B.",
    image: "https://via.placeholder.com/300?text=Band+B", // Example Google placeholder
  },
  {
    id: 3,
    name: "Band C",
    description: "Deskripsi singkat tentang Band C.",
    image: "https://via.placeholder.com/300?text=Band+C", // Example Google placeholder
  },
  {
    id: 4,
    name: "Band D",
    description: "Deskripsi singkat tentang Band D.",
    image: "https://via.placeholder.com/300?text=Band+D", // Example Google placeholder
  },
  {
    id: 5,
    name: "Band E",
    description: "Deskripsi singkat tentang Band E.",
    image: "https://via.placeholder.com/300?text=Band+E", // Example Google placeholder
  },
  {
    id: 6,
    name: "Band F",
    description: "Deskripsi singkat tentang Band F.",
    image: "https://via.placeholder.com/300?text=Band+F", // Example Google placeholder
  },
];

const BandProfile = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const bandsPerPage = 3;

  const totalPages = Math.ceil(bands.length / bandsPerPage);
  const startIndex = (currentPage - 1) * bandsPerPage;
  const currentBands = bands.slice(startIndex, startIndex + bandsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="band" className="my-8">
      <h2 className="text-3xl text-center font-bold">Band yang Terlibat</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {currentBands.map((band) => (
          <div key={band.id} className="p-4 border rounded-lg shadow-md">
            <img
              src={band.image}
              alt={band.name}
              className="w-full rounded-t-lg"
            />
            <h3 className="mt-2 text-xl font-semibold">{band.name}</h3>
            <p className="text-gray-600">{band.description}</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
              Lihat Profile
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="text-center mt-4">
        Page {currentPage} of {totalPages}
      </div>
    </section>
  );
};

export default BandProfile;
