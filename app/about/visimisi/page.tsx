// pages/index.tsx
// "use client";
import type { Metadata } from "next";
import React from "react";
import { Nav } from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const Visimisi: React.FC = () => {
  return (
    <div>
      <Nav />
      <section className="pt-16">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white/40 p-8 max-w-4xl mx-auto rounded-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-[#004d40]">Visi</h2>
              <div className="rounded-lg bg-[#d7ded4] p-6 shadow-md">
                <p className="text-[#37474f]">
                  Menjadi katalisator perubahan kreatif yang menginspirasi dan
                  memberdayakan generasi muda untuk menciptakan dampak positif
                  melalui seni, budaya, dan solidaritas, serta memperkuat
                  komunitas di tengah dinamika urban.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#004d40]">Misi</h2>
              <div className="rounded-lg bg-[#d7ded4] p-6 space-y-4 shadow-md">
                <p className="text-[#37474f]">
                  MEMBUKA RUANG BAGI KOLABORASI KREATIF YANG INKLUSIF ANTARA
                  MUSIK, SENI, BUDAYA, DAN MASYARAKAT.
                </p>
                <p className="text-[#37474f]">
                  MENGGERAKKAN AKSI-AKSI SOSIAL YANG BERLANDASKAN PADA NILAI
                  KEPEMUDAAN, SOLIDARITAS, DAN KEPEDULIAN TERHADAP ISU-ISU
                  SOSIAL SERTA LINGKUNGAN.
                </p>
                <p className="text-[#37474f]">
                  MENDORONG EKSPRESI ARTISTIK DAN INOVASI YANG MEMBERIKAN DAMPAK
                  PADA PELESTARIAN BUDAYA DAN PENGEMBANGAN KOMUNITAS URBAN.
                </p>
                <p className="text-[#37474f]">
                  MENYEDIAKAN PLATFORM BAGI KAUM MUDA UNTUK BERANI
                  BEREKSPERIMEN, BERKARYA, DAN BERKONTRIBUSI TERHADAP PERUBAHAN
                  SOSIAL MELALUI MEDIUM KREATIF.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Visimisi;
export const metadata: Metadata = {
  title: "SRS | Visi Misi",
};
