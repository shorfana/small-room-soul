"use client";
import { useState } from "react";

const EventsList = () => {
  // Sample event data
  const events = [
    { id: 1, date: "2024-10-10", location: "Kemayoran", band: "Band A" },
    { id: 2, date: "2024-10-11", location: "Kemayoran", band: "Band B" },
    { id: 3, date: "2024-10-12", location: "Kemayoran", band: "Band C" },
    { id: 4, date: "2024-10-13", location: "Kemayoran", band: "Band D" },
    { id: 5, date: "2024-10-14", location: "Kemayoran", band: "Band E" },
    { id: 6, date: "2024-10-15", location: "Kemayoran", band: "Band F" },
    { id: 7, date: "2024-10-16", location: "Kemayoran", band: "Band G" },
    { id: 8, date: "2024-10-17", location: "Kemayoran", band: "Band H" },
    { id: 9, date: "2024-10-18", location: "Kemayoran", band: "Band I" },
    { id: 10, date: "2024-10-19", location: "Kemayoran", band: "Band J" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3; // Change this value to adjust how many events to show per page

  // Calculate total pages
  const totalPages = Math.ceil(events.length / eventsPerPage);

  // Get the current events to display
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

  // Handler for next and previous page buttons
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
    <section id="jadwal" className="my-8">
      <h2 className="text-3xl text-center font-bold">Jadwal Acara</h2>
      <ul className="mt-4 space-y-4">
        {currentEvents.map((event) => (
          <li key={event.id} className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold">{event.date}</h3>
            <p>Lokasi: {event.location}</p>
            <p>Band: {event.band}</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
              Detail Event
            </button>
          </li>
        ))}
      </ul>
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

export default EventsList;
