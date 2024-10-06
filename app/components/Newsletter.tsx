// components/Newsletter.js
import React from "react";

const Newsletter = () => {
  return (
    <section className="my-8 text-center">
      <h2 className="text-3xl font-bold">Daftar Newsletter</h2>
      <p className="mt-2 text-gray-600">
        Dapatkan informasi terbaru tentang acara dan band.
      </p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Email Anda"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Daftar
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
