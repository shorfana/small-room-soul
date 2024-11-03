"use client";
import React, { useState, useEffect, useRef } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        closeSubMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    closeSubMenu();
  };

  return (
    <nav className="bg-[#f0f4c3] p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-[#004d40] font-bold text-xl">
          Small Room Soul
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-[#004d40] hover:text-gray-300">
            Home
          </a>
          <div ref={subMenuRef} className="relative group">
            <button
              onClick={toggleSubMenu}
              className="text-[#004d40] hover:text-gray-300 focus:outline-none"
            >
              About
            </button>
            {isSubMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#f0f4c3] border border-gray-200 rounded-md shadow-lg transition-transform duration-300 transform opacity-100 translate-y-0">
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Team
                </a>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Careers
                </a>
              </div>
            )}
          </div>
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
        <div ref={subMenuRef} className="relative">
          <button
            onClick={toggleSubMenu}
            className="block text-[#004d40] px-2 py-2 focus:outline-none"
          >
            About
          </button>
          {isSubMenuOpen && (
            <div className="pl-4 transition-all duration-300 ease-in-out transform opacity-100">
              <a
                href="#"
                onClick={handleLinkClick}
                className="block text-[#004d40] px-2 py-2"
              >
                Our Story
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="block text-[#004d40] px-2 py-2"
              >
                Team
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="block text-[#004d40] px-2 py-2"
              >
                Careers
              </a>
            </div>
          )}
        </div>
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
