import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";

const InfoKolaborasiPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <section className="pt-14">
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-green-600">
            Info Kolaborasi
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About Collaboration
            </h2>
            <p className="text-gray-700 mb-4">
              Collaboration involves two or more parties working together to
              achieve a common goal. It is an essential aspect of teamwork and
              innovation.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Benefits of Collaboration:
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>
                Increased Creativity: Bringing diverse perspectives together
                fosters innovation.
              </li>
              <li>
                Resource Sharing: Pooling resources can lead to more effective
                outcomes.
              </li>
              <li>
                Skill Enhancement: Learning from others can improve individual
                skills.
              </li>
            </ul>
            <Link
              href="/"
              className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InfoKolaborasiPage;
