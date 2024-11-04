// pages/profile.tsx
"use client";
import React from "react";
import { Nav } from "@/app/components/Nav";

const BandProfile: React.FC = () => {
  // Contoh data, silakan ganti dengan data yang sesuai
  const bandData = {
    name: "Nama Band",
    description:
      "Deskripsi singkat tentang band ini, termasuk genre musik dan filosofi di balik karya-karyanya.",
    profileImage: "/path/to/profile-image.jpg", // Ganti dengan path gambar profil band
    songs: ["Lagu 1", "Lagu 2", "Lagu 3", "Lagu 4", "Lagu 5"],
    events: ["Event 1 - Tanggal", "Event 2 - Tanggal", "Event 3 - Tanggal"],
  };

  return (
    <div>
      <Nav />
      <div className="bg-[#d7ded4] min-h-screen flex flex-col items-center p-4">
        <div className="bg-white/80 p-8 max-w-4xl mx-auto rounded-lg shadow-lg">
          <div className="flex items-center mb-8">
            <img
              src={bandData.profileImage}
              alt={`${bandData.name} Profile`}
              className="w-32 h-32 rounded-full border-4 border-[#004d40] shadow-md"
            />
            <h1 className="text-3xl font-bold text-[#004d40] ml-4">
              {bandData.name}
            </h1>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-[#004d40]">
              Deskripsi
            </h2>
            <p className="text-[#37474f]">{bandData.description}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-[#004d40]">Galeri</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Ganti dengan gambar galeri sesuai kebutuhan */}
              <img
                src="/path/to/gallery-image1.jpg"
                alt="Gallery Image 1"
                className="rounded-lg shadow-md"
              />
              <img
                src="/path/to/gallery-image2.jpg"
                alt="Gallery Image 2"
                className="rounded-lg shadow-md"
              />
              <img
                src="/path/to/gallery-image3.jpg"
                alt="Gallery Image 3"
                className="rounded-lg shadow-md"
              />
              <img
                src="/path/to/gallery-image4.jpg"
                alt="Gallery Image 4"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-[#004d40]">
              Daftar Lagu
            </h2>
            <ul className="list-disc list-inside text-[#37474f]">
              {bandData.songs.map((song, index) => (
                <li key={index}>{song}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#004d40]">
              Event yang Sudah Perform
            </h2>
            <ul className="list-disc list-inside text-[#37474f]">
              {bandData.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandProfile;
