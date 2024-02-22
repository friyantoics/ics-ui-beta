/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#CB2228",
        "secondary": "#fb8f03",
        "font-black": "#333333",
        "font-gray": "#8e8e8e",
        "border": "#d9d9d9",
      },
    },
  },
  plugins: [],
}

