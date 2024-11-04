// components/GalleryDisplay.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../useStore"; // Adjust the path as necessary

interface Band {
  id: number;
  name: string;
  location: string;
  image: string;
}

const bands: Band[] = [
  {
    id: 1,
    name: "Medikipless",
    location: "Batavia",
    image: "https://i.ibb.co.com/qBJd5ym/medikiples-page-0001.jpg",
  },
  {
    id: 2,
    name: "Rock Stone Sound Jakarta",
    location: "Jakarta",
    image:
      "https://i.ibb.co.com/qn3Yqss/Whats-App-Image-2024-11-03-at-16-12-10-c44d5853.jpg",
  },
  {
    id: 3,
    name: "Seladjaknjalah",
    location: "",
    image:
      "https://i.ibb.co.com/QNdP1cg/Whats-App-Image-2024-11-03-at-16-35-21-c0e4ac3a.jpg",
  },
  {
    id: 4,
    name: "Pudjadamai",
    location: "",
    image:
      "https://i.ibb.co.com/FgGwzyx/Whats-App-Image-2024-11-03-at-16-31-23-5b6096ac.jpg",
  },
];

const GalleryDisplay: React.FC = () => {
  const router = useRouter();
  const setBand = useStore((state) => state.setBand);

  const handleBandClick = (band: Band) => {
    setBand(band.name, band.image);
    const slug = band.name.replace(/\s+/g, "-"); // Replace spaces with hyphens
    router.push(`/product/band/${slug}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Our Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {bands.map((band) => (
          <div key={band.id} className="relative">
            <div
              className="w-full h-80 overflow-hidden"
              onClick={() => handleBandClick(band)}
            >
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={band.image}
                alt={band.name}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-2">
              <div className="font-bold text-lg">{band.name}</div>
              <p className="text-sm">{band.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDisplay;
