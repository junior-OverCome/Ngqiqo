import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Sora: ["var(--font-sora)", "sans-serif"],
      },
      keyframes: {
        bounceBlink: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-10px)', opacity: '0.5' },
        },
        glitch: {
          '0%': { textShadow: '0px 2px #FF3D00, 0px -2px #00DFFC' },
          '50%': { textShadow: '02px -2px #FF3D00, 0px 2px #00DFFC' },
          '100%': { textShadow: '0px 2px #FF3D00, 0px -2px #00DFFC' },
        },
      },
      animation: {
        bounceBlink: 'bounceBlink 1s infinite',
        glitch: 'glitch .5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
