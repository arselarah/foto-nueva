import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        cinzel: ["Cinzel", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        negro: "rgb(35, 35, 35)",
      },
      transitionDuration: {
        "1500": "1500ms",
      },
      fontSize: {
        "clamp-lg": "clamp(1.5rem, 2.5vw, 3rem)",
        "clamp-md": "clamp(1rem, 2vw, 2rem)",
        "clamp-sm": "clamp(0.875rem, 1.5vw, 1.5rem)",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
    screens: {
      // Mover 'screens' fuera de 'extend'
      xsm: "480px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      lgx: "1080px",
      // => @media (min-width: 1080px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

export default config;
