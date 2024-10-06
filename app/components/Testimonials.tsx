"use client";
// components/Testimonials.js
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Acara di Small Room Soul selalu luar biasa!",
    author: "Pengunjung A",
  },
  {
    id: 2,
    text: "Band favorit saya selalu tampil di sini.",
    author: "Pengunjung B",
  },
  {
    id: 3,
    text: "Sangat menikmati setiap penampilan!",
    author: "Pengunjung C",
  },
  {
    id: 4,
    text: "Tempat yang nyaman dan musik yang hebat!",
    author: "Pengunjung D",
  },
  {
    id: 5,
    text: "Pengalaman yang tak terlupakan setiap kali datang!",
    author: "Pengunjung E",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="my-8 text-center">
      <h2 className="text-3xl font-bold">Testimoni</h2>
      <div className="mt-4 relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="min-w-full p-4">
              <p className="italic">{testimonial.text}</p>
              <cite className="block mt-2 font-semibold">
                {testimonial.author}
              </cite>
            </blockquote>
          ))}
        </div>

        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
