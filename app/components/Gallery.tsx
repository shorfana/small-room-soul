"use client";
// components/Gallery.js
import React, { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 1
    alt: "Event 1",
  },
  {
    id: 2,
    src: "https://scontent.cdninstagram.com/v/t39.30808-6/450780917_18358060213100403_2731907229778130458_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1usVNplXG4sQ7kNvgGPbXme&_nc_gid=4ed7eeb372cf43218d3eac287ea714aa&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQwODcwMTY1OTM5OTM3ODM1Ng%3D%3D.3-ccb7-5&oh=00_AYBvgGX1fMrBhpv-By97QK24JcMEYgdQOBN22StimPRFjw&oe=67082E86&_nc_sid=10d13b", // Image 2
    alt: "Event 2",
  },
  {
    id: 3,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 3
    alt: "Event 3",
  },
  {
    id: 4,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 4
    alt: "Event 4",
  },
  {
    id: 5,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 4
    alt: "Event 4",
  },
  {
    id: 6,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 4
    alt: "Event 4",
  },
  {
    id: 7,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 4
    alt: "Event 4",
  },
  {
    id: 8,
    src: "https://instagram.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/450817705_18358354636100403_988280385214615679_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgk12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jg-_VXdHchMQ7kNvgG-BNkK&_nc_gid=67059cae2727431b86036e8a4e52a28e&edm=ALQROFkAAAAA&ccb=7-5&ig_cache_key=MzQxMDE4Mjk3NDY2MTY3ODMzNw%3D%3D.3-ccb7-5&oh=00_AYBxFo4sCuAdjEaBwd2QioY4n8WCIEFzB5NA0DRN_G7npA&oe=67080AEF&_nc_sid=fc8dfb", // Image 4
    alt: "Event 4",
  },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4; // Number of images to display per page

  // Calculate total pages
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Get the current images to display
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

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
    <section id="galeri" className="my-8">
      <h2 className="text-3xl font-bold text-center">Galeri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {currentImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="w-full rounded-lg"
          />
        ))}
      </div>

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

export default Gallery;
