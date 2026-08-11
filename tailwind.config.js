/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          gold: "#C5A059",
          "gold-light": "#E8C872",
          "gold-dark": "#9A7B38",
          black: "#0B0B0C",
          charcoal: "#141417",
          slate: "#1E1E24",
          cream: "#FAF8F5",
          sand: "#F3EEE6",
          accent: "#D4AF37",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.25)',
        'luxe': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'luxe-hover': '0 25px 50px -12px rgba(197, 160, 89, 0.2)',
      }
    },
  },
  plugins: [],
}
