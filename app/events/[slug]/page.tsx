// app/events/[slug]/page.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Nav } from "@/app/components/Nav"; // Adjust the import path if necessary
import Footer from "@/app/components/Footer"; // Adjust the import path if necessary

interface Event {
  id_event: number;
  nama_event: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  lokasi: string;
  deskripsi_event: string;
  harga_tiket: number;
  kapasitas: number;
  kategori: string;
  poster_event: string;
}

// Sample data for a single event (replace with your own data fetching logic)
const eventDetail: Event = {
  id_event: 1,
  nama_event: "Live Concert - Rock Band",
  tanggal_mulai: "2024-11-15",
  tanggal_selesai: "2024-11-15",
  lokasi: "Stadium ABC",
  deskripsi_event: "Join us for a night of rock music with local bands.",
  harga_tiket: 150000.0,
  kapasitas: 500,
  kategori: "Music",
  poster_event: "https://i.ibb.co/mXYL47F/logo-removebg-preview.png",
};

// Helper function to generate slug from event name
const generateSlug = (eventName: string): string => {
  return eventName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

interface EventDetailPageProps {
  params: {
    slug: string; // Expecting slug from the URL
  };
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ params }) => {
  const { slug } = params;

  // In a real application, you would typically fetch event details based on the slug.
  // Here we're using a static event detail for demonstration.

  return (
    <div>
      <Nav />
      <section className="pt-12">
        <div className="bg-[#d7ded4] min-h-screen flex flex-col items-center p-4">
          <div className="bg-white/80 p-8 max-w-5xl mx-auto rounded-lg shadow-lg">
            {/* Back Button and Event Title */}
            <div className="flex items-center mb-4">
              <Link href="/events" className="mr-2">
                <svg
                  className="w-6 h-6 text-[#004d40] cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12H3m0 0l9 9m-9-9l9-9"
                  />
                </svg>
              </Link>
              <h1 className="text-4xl font-bold text-[#004d40]">
                {eventDetail.nama_event}
              </h1>
            </div>

            {/* Event Details */}
            <img
              src={eventDetail.poster_event}
              alt={eventDetail.nama_event}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <p className="text-gray-600">
              {eventDetail.tanggal_mulai} - {eventDetail.tanggal_selesai}
            </p>
            <p className="text-gray-600">Lokasi: {eventDetail.lokasi}</p>
            <p className="mt-4 text-lg">{eventDetail.deskripsi_event}</p>
            <p className="mt-4 font-semibold">
              Harga Tiket: Rp {eventDetail.harga_tiket.toLocaleString()}
            </p>
            <p className="mt-2 font-semibold">
              Kapasitas: {eventDetail.kapasitas} orang
            </p>

            {/* Book Event Button */}
            <div className="mt-6">
              <Link href={`/events/book/${eventDetail.id_event}`}>
                <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                  Book Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
