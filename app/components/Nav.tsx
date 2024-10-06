"use client";
import React, { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f0f4c3] p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#004d40] font-bold text-xl">Small Room Soul</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#004d40] hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-[#004d40] hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-[#004d40] hover:text-gray-300">
            Gallery
          </a>
          <a href="#" className="text-[#004d40] hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#004d40] focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              style={{ stroke: "#004d40", fill: "none" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <a href="#" className="block text-[#004d40] px-2 py-2">
          Home
        </a>
        <a href="#" className="block text-[#004d40] px-2 py-2">
          About
        </a>
        <a href="#" className="block text-[#004d40] px-2 py-2">
          Gallery
        </a>
        <a href="#" className="block text-[#004d40] px-2 py-2">
          Contact
        </a>
      </div>
    </nav>
  );
};
