import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: {
          primary: "var(--foreground-primary)",
          secondary: "var(--foreground-secondary)",
        },
        card: "var(--card-background)",
        cardForeground: "var(--card-foreground)",
        cardBorder: "var(--card-border)",
        button: {
          background: "var(--button-background)",
          foreground: "var(--button-foreground)",
          border: "var(--button-border)",
        },
        accent: "var(--accent)",
        logo: "var(--logo)",
        info: "var(--info)",
        warning: "var(--warning)",
        success: "var(--success)",
      },
    },
  },
  plugins: [],
} satisfies Config;
