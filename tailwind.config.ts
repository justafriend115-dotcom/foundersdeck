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
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        ring: "var(--ring)",
        brand: {
          50: "#FBF7EE",
          100: "#F5EDDB",
          200: "#EEE2C8",
          300: "#E6D6B4",
          400: "#DECAA0",
          500: "#D5BD8B",
          600: "#C4A978",
          700: "#AC8F5F",
          800: "#8A7048",
          900: "#6B5536",
          950: "#4A3A24",
        },
        navy: {
          50: "#F4F7FB",
          100: "#E6ECF5",
          200: "#C9D6E8",
          300: "#A7BAD6",
          400: "#7E93B4",
          500: "#5F7495",
          600: "#47587A",
          700: "#36445F",
          800: "#22304A",
          900: "#14203A",
          950: "#0A1120",
        },
        steel: {
          50: "#F2F6FB",
          100: "#E3EBF6",
          200: "#C3D4EA",
          300: "#A3BCD9",
          400: "#7FA3C6",
          500: "#5E83AE",
          600: "#4A6A92",
          700: "#3B5377",
          800: "#2C3E5A",
          900: "#1F2C42",
          950: "#141E30",
        },
        gold: {
          50: "#FBF6EA",
          100: "#F5EAD0",
          200: "#EAD9AC",
          300: "#E3CC98",
          400: "#DCC28A",
          500: "#CBA967",
          600: "#B8914D",
          700: "#99763C",
          800: "#7A5C2E",
          900: "#5C4421",
          950: "#3D2D15",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(17, 17, 19, 0.06)",
        glow: "0 0 40px -12px rgba(203, 169, 103, 0.35)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
