/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monasans: ["Mona Sans", "sans-serif"],
      },
      colors: {
        label: "#333333",
        primary: "#039375",
        themeBlack: "#0b0d1c",
      },
      height: {
        "table-header": "44px", // Custom height for the table header
        "table-row": "78px", // Custom height for the table rows
        "table-full": "824px", // Custom height for the full table
      },
    },
  },
  plugins: [],
};
