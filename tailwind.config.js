/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C1917",
          muted: "#57534E",
          soft: "#8A8178",
        },
        stone: {
          DEFAULT: "#EFE8DF",
          light: "#F7F3EE",
          mid: "#E4D9CC",
        },
        signal: {
          DEFAULT: "#BE4B4B",
          dark: "#9F3A3A",
          deeper: "#7F2D2D",
          soft: "#F8E8E4",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(28, 25, 23, 0.04), 0 8px 24px rgba(28, 25, 23, 0.04)",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(1.25rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-up-delay": "fade-up 0.8s ease-out 0.15s both",
        "fade-up-delay-2": "fade-up 0.8s ease-out 0.3s both",
        "fade-in": "fade-in 1s ease-out both",
      },
    },
  },
  plugins: [],
};
