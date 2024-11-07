import React from "react";
import Link from "next/link";
import { Nav } from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const MovementPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <section className="pt-14">
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-green-600">
            Movement
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What is Movement?
            </h2>
            <p className="text-gray-700 mb-4">
              Movement refers to the act of changing physical location or
              position. In various contexts, it can relate to social movements,
              physical activity, and more.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Key Aspects of Movement:
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>
                Physical Movement: Activities that involve physical exertion.
              </li>
              <li>
                Social Movements: Organized efforts by groups to bring about
                social change.
              </li>
              <li>
                Artistic Movement: Trends in art that share similar styles or
                goals.
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

export default MovementPage;
