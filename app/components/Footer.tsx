import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#f0f4c3] text-[#004d40] py-4 w-full fixed bottom-0 left-0">
      <div className="text-center">
        <p>&copy; 2024 Small Room Soul. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:underline">
            Facebook
          </a>
          <a href="#" className="mx-2 hover:underline">
            Instagram
          </a>
          <a href="#" className="mx-2 hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
