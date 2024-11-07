"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer";

const eventsData = [
  {
    id_event: 1,
    slug: "live-concert-rock-band",
    nama_event: "Live Concert - Rock Band",
    tanggal_mulai: "2024-11-15",
    tanggal_selesai: "2024-11-15",
    lokasi: "Stadium ABC",
    poster_event: "https://i.ibb.co/mXYL47F/logo-removebg-preview.png",
    kategori: "Music",
    deskripsi_event: "Join us for a night of rock music with local bands.",
    harga_tiket: 150000.0,
    kapasitas: 500,
  },
  {
    id_event: 2,
    slug: "art-festival",
    nama_event: "Art Festival",
    tanggal_mulai: "2024-12-05",
    tanggal_selesai: "2024-12-07",
    lokasi: "City Art Gallery",
    poster_event: "https://i.ibb.co/mXYL47F/logo-removebg-preview.png",
    kategori: "Art",
    deskripsi_event: "Explore creativity at the annual Art Festival.",
    harga_tiket: 80000.0,
    kapasitas: 300,
  },
  {
    id_event: 3,
    slug: "food-expo",
    nama_event: "Food Expo",
    tanggal_mulai: "2025-01-20",
    tanggal_selesai: "2025-01-21",
    lokasi: "Convention Center",
    poster_event: "https://i.ibb.co/mXYL47F/logo-removebg-preview.png",
    kategori: "Food",
    deskripsi_event: "Taste dishes from around the world at the Food Expo.",
    harga_tiket: 100000.0,
    kapasitas: 1000,
  },
  {
    id_event: 4,
    slug: "tech-conference",
    nama_event: "Tech Conference",
    tanggal_mulai: "2025-02-15",
    tanggal_selesai: "2025-02-17",
    lokasi: "Tech Hub",
    poster_event: "https://i.ibb.co/mXYL47F/logo-removebg-preview.png",
    kategori: "Technology",
    deskripsi_event:
      "Join us for the latest in technology at the Tech Conference.",
    harga_tiket: 120000.0,
    kapasitas: 400,
  },
  // Add more events as needed
];

const EventsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<any>(null); // State to manage the selected event for the modal
  const [showComingSoon, setShowComingSoon] = useState(false); // State for "Coming Soon" popup

  // Filter events by category
  const filteredEvents =
    selectedCategory === "All"
      ? eventsData
      : eventsData.filter((event) => event.kategori === selectedCategory);

  const totalEvents = filteredEvents.length;
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  // Get events to display on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Functions for pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  const openModal = (event: any) => {
    setSelectedEvent(event); // Set the selected event to be displayed in the modal
  };

  const closeModal = () => {
    setSelectedEvent(null); // Reset the selected event to close the modal
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close modal if click is outside the modal content
    }
  };

  const handleBookEventClick = () => {
    // Show the "Coming Soon" popup
    setShowComingSoon(true);
  };

  const closeComingSoonPopup = () => {
    setShowComingSoon(false);
  };

  return (
    <div className="bg-[#0000]">
      <Nav />
      <section className="pt-12">
        <div className="min-h-screen p-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            Upcoming Events
          </h1>

          {/* Category Filter with Dropdown */}
          <div className="mb-6 text-center">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-2 border border-gray-400 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700 transition duration-200"
            >
              <option value="All">All Categories</option>
              <option value="Music">Music</option>
              <option value="Art">Art</option>
              <option value="Food">Food</option>
              <option value="Technology">Technology</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentEvents.map((event) => (
              <div
                key={event.id_event}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-200 transform hover:scale-105"
              >
                <img
                  src={event.poster_event}
                  alt={event.nama_event}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{event.nama_event}</h2>
                  <p className="text-gray-600">
                    {event.tanggal_mulai} - {event.tanggal_selesai}
                  </p>
                  <p className="text-gray-600">Lokasi: {event.lokasi}</p>
                  <button
                    onClick={() => openModal(event)}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Modal for Event Details */}
        {selectedEvent && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleOutsideClick}
          >
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto max-h-[80vh] overflow-y-auto relative shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedEvent.nama_event}
              </h2>
              <img
                src={selectedEvent.poster_event}
                alt={selectedEvent.nama_event}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p>
                <strong>Dates:</strong> {selectedEvent.tanggal_mulai} -{" "}
                {selectedEvent.tanggal_selesai}
              </p>
              <p>
                <strong>Location:</strong> {selectedEvent.lokasi}
              </p>
              <p>
                <strong>Description:</strong> {selectedEvent.deskripsi_event}
              </p>
              <p>
                <strong>Ticket Price:</strong> Rp{" "}
                {selectedEvent.harga_tiket.toLocaleString()}
              </p>
              <p>
                <strong>Capacity:</strong> {selectedEvent.kapasitas} people
              </p>

              {/* Book Event Button */}
              <div className="mt-4">
                <button
                  onClick={handleBookEventClick}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
                >
                  Book Event
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Coming Soon Popup */}
        {showComingSoon && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeComingSoonPopup}
          >
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto shadow-lg">
              <h2 className="text-xl font-bold mb-4">Coming Soon!</h2>
              <p>
                Fitur pemesanan akan segera hadir. Terima kasih atas kesabaran
                Anda!
              </p>
              <button
                onClick={closeComingSoonPopup}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default EventsPage;
