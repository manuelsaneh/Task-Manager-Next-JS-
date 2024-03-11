import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2196f3",
        secondary: "#fff",
        tertiary: "#f5f5f5",
      },
      screens: {
        sm: "480px",
        md: "780px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
