import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#fafafa",
      black: "#2a2a2a",
      primary: "#fe3f40",
      secondary: "#03a4ed",
    },
    container: {
      center: true,
      screens: {
        lg: "1350px",
      },
    },
  },
  plugins: [],
};
export default config;
