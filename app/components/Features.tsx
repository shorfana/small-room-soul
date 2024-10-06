// components/Features.js
const Features = () => {
  return (
    <section className="my-4 p-6 bg-mint rounded-lg shadow-lg">
      <h2 className="text-deep-green text-2xl font-bold">Playlist Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Streaming Musik</h3>
          <p>Stream lagu-lagu favoritmu kapan saja.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Playlist</h3>
          <p>Buat dan kelola playlistmu sendiri.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Rekomendasi</h3>
          <p>Dapatkan rekomendasi musik berdasarkan preferensi.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Rekomendasi</h3>
          <p>Dapatkan rekomendasi musik berdasarkan preferensi.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
