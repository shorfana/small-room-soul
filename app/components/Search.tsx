// components/Search.js
"use client";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementasikan logika pencarian
    console.log(query);
  };

  return (
    <div className="p-8 mb-0 mt-0">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Cari lagu, artis, atau album..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-r">
          Cari
        </button>
      </form>
    </div>
  );
};

export default Search;
