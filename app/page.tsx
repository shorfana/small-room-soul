import type { Metadata } from "next";
import { Nav } from "./components/Nav";

import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Lates_Event from "./components/LatestEvent";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <section className="pt-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <Carousel />
          <div className="mx-auto px-4">
            <About />
            <Product />
            <Lates_Event />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Small Room Soul",
};
