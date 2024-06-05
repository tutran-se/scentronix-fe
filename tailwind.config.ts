import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "white-orange-gradient":
          "linear-gradient(to bottom, white 60%, #FBEAFF 0%)",
      },
    },
  },
  plugins: [],
};
export default config;
