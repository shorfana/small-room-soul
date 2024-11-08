// pages/index.tsx
"use client";
import React, { useState } from "react";
// import Link from "next/link";

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
    title: "LAGI SENANG",
    lyrics: 
      "Lebah-lebah riang gembira menari\n" +
      "Menghampiri Nektar bunga-bunga liar\n" +
      "Sepasang Burung Berada diatas dahan\n" +
      "Menata Tangkai-tangkai Membangun sangkar\n\n" +
      "Ahhhhhhhh…\n" +
      "Daun-daun Berjatuhan melayang menuju tanah\n" +
      "Menjadi Teman-teman Para serangga\n" +
      "Kupu-kupu Terbanglah dan hinggap disisiku\n\n" +
      "Temani Senangku Ahhh..\n\n" +
      "Reff :\n\n" +
      "Ahhh… Lagi Senang\n" +
      "Ahhh… Lagi Senang\n" +
      "Rayakanlah hal sederhana yang kita punya\n\n" +
      "Lagi Pula Hidup Kita yang tentukan arah\n" +
      "Menjadi Iblis atau malaikat\n" +
      "berilah arti karna kita pengembara\n" +
      "didunia yang fana ahhh…\n\n" +
      "Reff :\n\n" +
      "Ahhh… Sungguh Senang\n" +
      "Ahhh… Sungguh Senang\n" +
      "Sebarkanlah segala cinta yang kita punya\n" +
      "Lagi senang Sungguh senang\n" +
      "Lagi senang Sungguh senang Slalu senang",
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
      <div className="flex-1 flex items-center justify-center bg-white relative">
        <img
          src="https://i.ibb.co.com/qBJd5ym/medikiples-page-0001.jpg" // URL gambar Anda
          alt="Medikiplees Logo"
          className="w-full h-auto object-cover" // Membuat gambar memenuhi lebar kontainer dengan tinggi otomatis
        />
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

      {/* Modal */}
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
