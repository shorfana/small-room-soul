// pages/contact.tsx
import Footer from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <Nav />
      <section className="pt-16">
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
          <div className="max-w-md w-full bg-[#d7ded4] rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-[#004d40] mb-4">
              Contact Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium text-[#004d40] mr-2">Phone:</span>
                <span>+62 123 456 789</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-[#004d40] mr-2">Email:</span>
                <span>info@smallroomsoul.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-[#004d40] mr-2">
                  Address:
                </span>
                <span>Jl. Contoh No. 123, Kemayoran, Jakarta</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-[#004d40] mr-2">
                  Instagram:
                </span>
                <a
                  href="https://instagram.com/smallroomsoul"
                  className="text-[#004d40] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @smallroomsoul
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-[#004d40] mr-2">
                  Twitter:
                </span>
                <a
                  href="https://twitter.com/smallroomsoul"
                  className="text-[#004d40] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @smallroomsoul
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-[#004d40] mr-2">TikTok:</span>
                <a
                  href="https://tiktok.com/@smallroomsoul"
                  className="text-[#004d40] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @smallroomsoul
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-md w-full bg-[#d7ded4] rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#004d40] mb-4">
              Operating Hours
            </h2>
            <div className="space-y-2">
              <div>Monday - Friday: 9 AM - 5 PM</div>
              <div>Saturday: 10 AM - 3 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
