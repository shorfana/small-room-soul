// components/LatestEvents.tsx
import React from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Music Fest",
    description: "Join us for an unforgettable night of music and fun.",
    date: "2024-12-25",
    image: "https://i.ibb.co.com/mXYL47F/logo-removebg-preview.png",
  },
  {
    id: 2,
    title: "Art Exhibition",
    description: "Explore the latest trends in contemporary art.",
    date: "2024-11-15",
    image: "https://i.ibb.co.com/mXYL47F/logo-removebg-preview.png",
  },
  {
    id: 3,
    title: "Tech Conference",
    description: "Discover the future of technology with industry leaders.",
    date: "2024-10-05",
    image: "https://i.ibb.co.com/mXYL47F/logo-removebg-preview.png",
  },
];

const LatestEvents: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Latest Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-700 mt-2">{event.description}</p>
                <p className="text-gray-500 mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestEvents;
