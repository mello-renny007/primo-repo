import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0a0a0a",
        fg: "#e8e8e8",
        dim: "#999999",
        faint: "#777777",
        rule: "#2a2a2a",
        teal: "#2dd4bf",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
