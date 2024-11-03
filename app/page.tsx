import type { Metadata } from "next";
import { Nav } from "./components/Nav";

import Carousel from "./components/Carousel";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Lates_Event from "./components/LatestEvent";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <section className="pt-16">
        {" "}
        {/* Adjust this padding as necessary */}
        <div className="container mx-auto px-4">
          <Carousel />
          <div className="container mx-auto px-4">
            <About />
            <Product />
            {/* <Gallery /> */}
            <Lates_Event />
            <Testimonials />
            {/* <Newsletter /> */}
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
