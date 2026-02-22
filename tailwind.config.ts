import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        bg: "#111111",
        fg: "#E8E8E8",
        dim: "#9C9C9C",
        faint: "#777777",
        accent: "#2F3E46",
        rule: "#2F3E46",
      },
      maxWidth: {
        prose: "700px",
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
