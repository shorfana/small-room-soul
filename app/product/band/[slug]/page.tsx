"use client";
import React from "react";
import type { Metadata } from "next";
import { Nav } from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { useStore } from "../../../useStore"; // Adjust the import path for Zustand store

export default function Page() {
  // Accessing band data from Zustand store
  const bandName = useStore((state) => state.bandName);
  const bandImage = useStore((state) => state.bandImage);

  // Sample description, songs, and events can be modified as per your requirement
  const bandData = {
    name: bandName,
    description:
      "Deskripsi singkat tentang band ini, termasuk genre musik dan filosofi di balik karya-karyanya.",
    profileImage:
      bandImage || "https://i.ibb.co.com/qBJd5ym/medikiples-page-0001.jpg", // Default image if no image in state
    songs: [
      {
        title: "Lagu 1",
        audioSrc: "/path/to/song1.mp3",
        cover: "/path/to/cover1.jpg",
      },
      {
        title: "Lagu 2",
        audioSrc: "/path/to/song2.mp3",
        cover: "/path/to/cover2.jpg",
      },
      {
        title: "Lagu 3",
        audioSrc: "/path/to/song3.mp3",
        cover: "/path/to/cover3.jpg",
      },
      {
        title: "Lagu 4",
        audioSrc: "/path/to/song4.mp3",
        cover: "/path/to/cover4.jpg",
      },
      {
        title: "Lagu 5",
        audioSrc: "/path/to/song5.mp3",
        cover: "/path/to/cover5.jpg",
      },
      {
        title: "Lagu 6",
        audioSrc: "/path/to/song6.mp3",
        cover: "/path/to/cover6.jpg",
      },
    ],
    events: ["Event 1 - Tanggal", "Event 2 - Tanggal", "Event 3 - Tanggal"],
  };

  return (
    <div>
      <Nav />
      <section className="pt-12">
        <div className="bg-[#d7ded4] min-h-screen flex flex-col items-center p-4">
          <div className="bg-white/80 p-8 max-w-4xl mx-auto rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img
                src={bandData.profileImage}
                alt={`${bandData.name} Profile`}
                className="w-32 h-32 rounded-full border-4 border-[#004d40] shadow-md mb-4 md:mb-0 md:mr-4"
              />
              <h1 className="text-3xl font-bold text-[#004d40] text-center md:text-left">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img
                  src="/path/to/gallery-image1.jpg"
                  alt="Gallery Image 1"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img
                  src="/path/to/gallery-image2.jpg"
                  alt="Gallery Image 2"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img
                  src="/path/to/gallery-image3.jpg"
                  alt="Gallery Image 3"
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img
                  src="/path/to/gallery-image4.jpg"
                  alt="Gallery Image 4"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-[#004d40]">
                Daftar Lagu
              </h2>
              <div className="max-h-80 overflow-y-auto border p-2 rounded-lg shadow-md bg-white">
                <ul className="space-y-2">
                  {bandData.songs.map((song, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-[#f0f4c3] p-2 rounded-lg shadow-md hover:bg-[#b2dfdb] transition"
                    >
                      <img
                        src={song.cover}
                        alt={`${song.title} Cover`}
                        className="w-12 h-12 rounded-md mr-2"
                      />
                      <div className="flex-1">
                        <span className="block font-semibold text-[#004d40]">
                          {song.title}
                        </span>
                      </div>
                      <audio controls className="ml-2 w-24">
                        <source src={song.audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#004d40]">
                Event yang Sudah Perform
              </h2>
              <div className="max-h-40 overflow-y-auto border p-4 rounded-lg shadow-md bg-white">
                <ul className="list-disc list-inside text-[#37474f]">
                  {bandData.events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

// // Function to get metadata
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const slug = params.slug.replace(/Rock%20Stone%20Sound%20Jakarta/g, "");
//   return {
//     title: `SRS | ${slug}`, // Using modified slug in the title
//   };
// }
