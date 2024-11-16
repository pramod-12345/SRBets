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
        gradientBorder: "#5A5F9C",
        btnSecondary: "#F02A83",
        btnPrimary: "#5B2AED",
        arrowDisabled: "#1F2136",
        arrowActive: "#585E77",
        "table-row":"#9298B4"
      },
      height: {
        "table-header": "44px", 
        "table-row": "78px", 
        "table-full": "824px",
      },
      width: {
        '1.1': "5px",
        "2.1": "9px",
        "4.2": "18px",
        "64.5": "260px",
        "85.2": "352px",
        "1120": "1120px"
      },
      maxWidth: {
        '32p': '32%'
      },
      maxHeight: {
        '70': '17.5rem',
      },
      spacing: {
        "18": "72px", // Add your custom spacing here
      }
    },
  },
  plugins: [],
};
