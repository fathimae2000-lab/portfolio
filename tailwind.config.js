/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b132b",
        accent: {
          DEFAULT: "#3a86ff", // Bright navy-blue accent
          hover: "#2667cc",   // Slightly darker on hover
          dark: "#1c2541",    // Deep navy for borders/cards
          light: "#5bc0eb",   // Light sky blue for highlights/glows
        },
      },
      fontFamily: {
        primary: ["var(--font-jetbrains-mono)"],
      },
      // ... keep your animations/keyframes
    },
  },
  plugins: [],
};