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
        background: "var(--background)",
        foreground: "var(--foreground)",
        Main:"#F1F9FB",
        TextColor:"#024F55",
        BorderColor:"#9BD8DB",
        ButtonColor:"#D5F2F8",
      },
    },
  },
  plugins: [],
};
export default config;
