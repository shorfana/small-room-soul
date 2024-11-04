// pages/index.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  const titles = [
    {
      title: "U DOLL",
      lyrics:
        "Lewat judi ngarep bisa beli lamborghini\n\nDalam hidup kita perlu tuk mencari uang\nTuk penuhi kebutuhan di zaman yang edan\nDalam hidup kita perlu tuk mencari uang\nTuk lengkapi kebutuhan sandang, pangan,\n\nTapi temanku, ingatlah bahwa\nUang bukan segalanya\nTapi segalanya itu pasti perlu uang juga ..\n\nZaman sekarang bisa cari uang lewat permainan\nBisa jadi jalan pintas tuk dapatkan kesenangan\n\nReff:\nKuota dan pulsa\nMenjelma menjadi senjata ga peduli\nJangan ngarep lewat judi bisa beli lamborghini lagi ......\n\nReff:\nKuota dan Pulsa\nMenjelma menjadi senjata ga peduli\nJangan ngarep lewat judi bisa beli lamborghini lagi ......  ",
    },
    {
      title: "PERCAYA GA PERCAYA",
      lyrics:
        "Kau telah berjanji untuk sehidup semati\nMaka tolong jangan ingkari\nKau dan aku telah terikat janji\n\nKau telah berjanji untuk tidak mengingkari\nMaka tolong jangan berlari\nKau dan aku telah terikat janji\n\nReff:\nAku percaya padamu, ku harap kau tahu itu\nMaka jangan sekalipun kau berfikir tuk ingkari karena\n\nKau telah berjanji untuk sehidup semati\nMaka tolong jangan ingkari\nKau dan aku telah terikat janji\n\nReff:\nSemua sumpah juga janjimu ku percaya semua itu\nTapi yang kau berikan\nKau ingkari semua itu\n\nReff:\nSemua sumpah juga janjimu ku percaya semua itu\nTapi yang kau berikan\nKau ingkari semua itu  ",
    },
    {
      title: "judul 3",
      lyrics:
        "Karma adalah hukum alam yang tidak bisa kita hindari. Apa yang kita lakukan, baik atau buruk, akan kembali pada kita, cepat atau lambat. Aku tahu bahwa setiap tindakan punya konsekuensinya sendiri, tapi kadang aku tidak siap menghadapi apa yang datang. Hidup ini seperti roda yang terus berputar, kadang kita di atas, kadang kita di bawah. Ketika aku merasa aman, itulah saat karma datang, mengingatkan aku bahwa semua ini sementara. Setiap kebaikan yang kulakukan, setiap keburukan yang kuucapkan, semua itu tercatat dalam catatan karma. Dan sekarang, aku hanya bisa berharap bahwa apa yang aku lakukan di masa lalu, tidak akan terlalu berat untuk aku tanggung di masa depan. Tapi siapa yang bisa benar-benar siap? Karma datang tanpa peringatan, dan saat itu datang, kita hanya bisa menerima.",
    },
    {
      title: "judul 4",
      lyrics:
        "itulah yang aku rasakan saat ini. Seperti burung yang terperangkap di dalam sangkar, sayapku seolah-olah patah, tak bisa terbang bebas seperti dulu. Aku ingin lepas dari rasa ini, ingin melawan, tapi kekuatan itu seolah hilang dari dalam diriku. Setiap harapan yang kubangun seakan runtuh di hadapanku, menjadi serpihan-serpihan kecil yang tidak bisa ku rangkai kembali. Aku mencari kekuatan di dalam diriku, mencoba menemukan alasan untuk terus bertahan, tapi semua terasa sia-sia. Dalam setiap helaan napas, aku merasakan kekosongan, sebuah kehampaan yang sulit untuk dijelaskan. Tak berdaya, aku terjebak dalam lingkaran ini, berharap suatu hari nanti aku akan menemukan kembali kekuatanku, dan bangkit dari kejatuhan ini.",
    },
    {
      title: "Judul 5",
      lyrics:
        "hidup ini selalu memberi kita kesempatan kedua. Meskipun ada hari-hari yang penuh kegelapan, selalu ada harapan di balik setiap badai. Aku selalu percaya bahwa ada pelangi setelah hujan, bahwa setelah rasa sakit, akan ada kebahagiaan yang datang. Mungkin aku tidak selalu kuat, mungkin aku sering merasa takut, tapi untungnya, aku selalu punya alasan untuk bertahan. Aku tidak akan menyerah, karena aku tahu bahwa setiap langkah kecil yang kuambil adalah bagian dari perjalanan panjang yang indah. Untungnya, aku tidak sendirian dalam perjalanan ini. Aku punya sahabat, keluarga, dan orang-orang yang peduli padaku. Mereka adalah cahaya yang menerangi jalanku saat aku tersesat dalam gelap. Dengan semua itu, aku percaya bahwa aku bisa menghadapi apapun yang datang. Untungnya, aku selalu punya harapan.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLyrics, setCurrentLyrics] = useState("");

  const openModal = (lyrics: string) => {
    setCurrentLyrics(lyrics);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentLyrics("");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Title Section */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <h1 className="text-5xl font-bold text-black transform md:rotate-[-15deg]">
          MEDIKIPLESS
        </h1>
      </div>

      {/* Menu Section */}
      <div className="flex-1 bg-[#1c3216] flex flex-col justify-center items-start px-8 md:items-start md:justify-center md:px-8 space-y-4">
        {titles.map((song, index) => (
          <button
            key={index}
            onClick={() => openModal(song.lyrics)}
            className="text-2xl font-bold text-[#ff9b7c] hover:underline"
          >
            {song.title}
          </button>
        ))}
      </div>

{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Lirik Lagu</h2>
      <div className="text-lg mb-4 space-y-2">
        {currentLyrics.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <button
        onClick={closeModal}
        className="px-4 py-2 bg-[#ff9b7c] text-white rounded-md hover:bg-[#ff8b6c]"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default HomePage;
