import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Search from "./components/Search";
import ArtistsList from "./components/ArtisList";
import About from "./components/About";
import EventSchedule from "./components/Schedule";
import BandProfile from "./components/BandProfile";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Lates_Event from "./components/LatestEvent";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
    // <StoreProvider>
    //   <html lang="en">
    //     <body>
    //       <section className={styles.container}>
    //         <Nav />
    //         <Carousel />
    //         <div className="container mx-auto px-4">
    //           <About />
    //           <EventSchedule />
    //           <BandProfile />
    //           <Gallery />
    //           <Testimonials />
    //           <Newsletter />
    //           <Footer />
    //         </div>
    //       </section>
    //     </body>
    //   </html>
    // </StoreProvider>
  );
}
