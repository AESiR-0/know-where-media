import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-purple': '#9747FF',
        'custom-yellow': '#FEC81E',
      },
      fontFamily: {
        spaceGrotesk: ['var(--font-space-grotesk)'],
        oswald: ['var(--font-oswald)'],
      },
      boxShadow: {
        custom: "8px 8px 0px 0px #28013E",
      },
      textStrokeWidth: {
        2: "2.4px",
      },
      textStrokeColor: {
        black: "#0000",
      },
      textShadow: {
        yellow: "5px 4px 0px #FEC81E",
      },
    },
  },
  plugins: [],
} satisfies Config;
