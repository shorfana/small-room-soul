"use client";
import React, { useState, useEffect, useRef } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<null | "about" | "produk">(
    null
  );
  const subMenuRefAbout = useRef<HTMLDivElement>(null);
  const subMenuRefProduk = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu: "about" | "produk") => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu); // Toggle submenus
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRefAbout.current &&
        !subMenuRefAbout.current.contains(event.target as Node) &&
        subMenuRefProduk.current &&
        !subMenuRefProduk.current.contains(event.target as Node)
      ) {
        setActiveSubMenu(null); // Close all submenus on outside click
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#f0f4c3] p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-[#004d40] font-bold text-xl">
          Small Room Soul
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-[#004d40] hover:text-gray-300">
            Beranda
          </a>
          <div ref={subMenuRefAbout} className="relative">
            <button
              onClick={() => toggleSubMenu("about")}
              className="text-[#004d40] hover:text-gray-300 focus:outline-none"
            >
              Tentang Kami
            </button>
            {activeSubMenu === "about" && (
              <div className="absolute left-0 mt-2 w-48 bg-[#f0f4c3] border border-gray-200 rounded-md shadow-lg">
                <a
                  href="/about/visimisi"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Visi & Misi
                </a>
                <a
                  href="/about/tim"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Tim
                </a>
                <a
                  href="/about/kontak"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Kontak
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Movement
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Info Kolaborasi
                </a>
              </div>
            )}
          </div>
          <div ref={subMenuRefProduk} className="relative">
            <button
              onClick={() => toggleSubMenu("produk")}
              className="text-[#004d40] hover:text-gray-300 focus:outline-none"
            >
              Produk
            </button>
            {activeSubMenu === "produk" && (
              <div className="absolute right-0 mt-2 w-48 bg-[#f0f4c3] border border-gray-200 rounded-md shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Band
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Merchandise
                </a>
              </div>
            )}
          </div>
          <a href="/auth/login" className="text-[#004d40] hover:text-gray-300">
            Login
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
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="/" className="block text-[#004d40] hover:text-gray-300">
            Beranda
          </a>
          <div ref={subMenuRefAbout} className="relative">
            <button
              onClick={() => toggleSubMenu("about")}
              className="block text-[#004d40] hover:text-gray-300 focus:outline-none"
            >
              Tentang Kami
            </button>
            {activeSubMenu === "about" && (
              <div className="mt-2 w-full bg-[#f0f4c3] rounded-md">
                <a
                  href="/about/visimisi"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Visi & Misi
                </a>
                <a
                  href="/about/tim"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Tim
                </a>
                <a
                  href="/about/kontak"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Kontak
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Movement
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Info Kolaborasi
                </a>
              </div>
            )}
          </div>
          <div ref={subMenuRefProduk} className="relative">
            <button
              onClick={() => toggleSubMenu("produk")}
              className="block text-[#004d40] hover:text-gray-300 focus:outline-none"
            >
              Produk
            </button>
            {activeSubMenu === "produk" && (
              <div className="mt-2 w-full bg-[#f0f4c3] rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Band
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#c5e1a5]"
                >
                  Merchandise
                </a>
              </div>
            )}
          </div>
          <a
            href="/auth/login"
            className="block text-[#004d40] hover:text-gray-300"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};
