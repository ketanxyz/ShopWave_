/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        ink: { 50: "#f7f6f3", 100: "#eeebd8", 200: "#ddd8c4", 300: "#c5b89a", 400: "#ab9574", 500: "#967758", 600: "#7d5f47", 700: "#664c3a", 800: "#553f32", 900: "#4a372d" },
        cream: "#faf8f3",
        charcoal: "#1a1714",
        ember: { 400: "#e85d26", 500: "#d4461a", 600: "#b83a14" },
        sage: "#6b7c5c",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [],
};
