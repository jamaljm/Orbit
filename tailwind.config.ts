/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#FFFFFF0",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        body1: ["Inter", "sans-serif"],
        body2: ["Sora", "sans-serif"],
        sans: ["Neue Haas Grotesk", "Helvetica", "sans-serif"],
        serif: ["Garamond", "serif"],
        mono: ["Courier New", "monospace"],
      },
      fontWeight: {
        400: 400,
        300: 300,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [ nextui()],
};
