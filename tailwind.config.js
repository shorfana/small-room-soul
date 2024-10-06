module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Jika menggunakan folder app
  ],
  theme: {
    extend: {
      colors: {
        "deep-green": "#004d40",
        brown: "#8d6e63",
        "pastel-yellow": "#f0f4c3",
        mint: "#b2dfdb",
        "light-grey": "#d7ded4",
      },
    },
  },
  plugins: [],
};
