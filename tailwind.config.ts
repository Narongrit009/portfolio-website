import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  display: ["Prompt", "Noto Sans Thai", "sans-serif"],
  body: ["Noto Sans Thai", "Outfit", "sans-serif"],
  english: ["Outfit", "sans-serif"],
},
      boxShadow: {
        "blue-glow": "0 0 40px rgba(56,189,248,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
