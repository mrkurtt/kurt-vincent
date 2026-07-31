/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          muted: "#3D4A5C",
          soft: "#5C6B7E",
        },
        stone: {
          DEFAULT: "#E8EEF2",
          light: "#F4F7F9",
          mid: "#D5DEE6",
        },
        signal: {
          DEFAULT: "#0D9488",
          dark: "#0F766E",
          soft: "#CCFBF1",
        },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
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
