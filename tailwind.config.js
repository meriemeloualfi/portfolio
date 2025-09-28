/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: 'class', // IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ffd2a9', // tu pourra utiliser "text-accent" / "bg-accent"
      },
    },
  },
  plugins: [],
}
