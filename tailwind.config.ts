import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        muted: "var(--muted)",
        terminal: {
          green: "var(--green)",
          yellow: "var(--yellow)",
          red: "var(--red)",
        },
        cream: "var(--surface)",
        dark: "var(--background)",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "var(--font-geist-mono)", "monospace"],
        mono: ["JetBrains Mono", "var(--font-geist-mono)", "monospace"],
        display: ["JetBrains Mono", "var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
