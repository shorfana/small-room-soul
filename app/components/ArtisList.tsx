// components/ArtistsList.js
const ArtistsList = () => {
  const artists = [
    { name: "Artis A", genre: "Pop" },
    { name: "Artis B", genre: "Rock" },
    { name: "Artis C", genre: "Hip-Hop" },
  ];

  return (
    <section className="my-4 p-6 bg-mint rounded-lg shadow-lg">
      <h2 className="text-deep-green text-2xl font-bold">Daftar Artis</h2>
      <ul className="space-y-2">
        {artists.map((artist, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{artist.name}</h3>
            <p>{artist.genre}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArtistsList;
