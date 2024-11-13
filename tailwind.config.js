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
        primary: "#673CFF",
        accent: "#141525",
        accentLight: "#1B1E2A",
        themeBlack: "#0b0d1c",
        textMenu: "#9298B4",
        textMenuHover: "#664FFF",
        gradientBorder: "#5A5F9C"
      },
      height: {
        "table-header": "44px", 
        "table-row": "78px", 
        "table-full": "824px",
      },
      width: {
        '5px': "5px",
        "9px": "9px",
        "18px": "18px",
        "260px": "260px",
        "352px": "352px",
        "1120px": "1120px"
      },
      maxWidth: {
        '11rem': '11rem',
        '32p': '32%'
      },
      maxHeight: {
        '17.5rem': '17.5rem',
      },
      spacing: {
        "72px": "72px", // Add your custom spacing here
      }
    },
  },
  plugins: [],
};
