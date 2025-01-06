import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        wave0: {
          "0%": { transform: "rotate(0deg) translateY(0) scale(1.5)" },
          "50%": { transform: "rotate(3deg) translateY(-20px) scale(1.6)" },
          "100%": { transform: "rotate(0deg) translateY(0) scale(1.5)" },
        },
        wave1: {
          "0%": { transform: "rotate(3deg) translateY(0) scale(1.5)" },
          "50%": { transform: "rotate(6deg) translateY(-25px) scale(1.6)" },
          "100%": { transform: "rotate(3deg) translateY(0) scale(1.5)" },
        },
        wave2: {
          "0%": { transform: "rotate(6deg) translateY(0) scale(1.5)" },
          "50%": { transform: "rotate(9deg) translateY(-30px) scale(1.6)" },
          "100%": { transform: "rotate(6deg) translateY(0) scale(1.5)" },
        },
        wave3: {
          "0%": { transform: "rotate(9deg) translateY(0) scale(1.5)" },
          "50%": { transform: "rotate(12deg) translateY(-35px) scale(1.6)" },
          "100%": { transform: "rotate(9deg) translateY(0) scale(1.5)" },
        },
        wave4: {
          "0%": { transform: "rotate(12deg) translateY(0) scale(1.5)" },
          "50%": { transform: "rotate(15deg) translateY(-40px) scale(1.6)" },
          "100%": { transform: "rotate(12deg) translateY(0) scale(1.5)" },
        },
        wave5: {
          "0%": { transform: "rotate(15deg) translateY(0) scale(1.5)" },
          "50%": { transform: "rotate(18deg) translateY(-45px) scale(1.6)" },
          "100%": { transform: "rotate(15deg) translateY(0) scale(1.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        blob: "blob 7s infinite",
        wave0: "wave0 10s infinite ease-in-out",
        wave1: "wave1 12s infinite ease-in-out",
        wave2: "wave2 14s infinite ease-in-out",
        wave3: "wave3 16s infinite ease-in-out",
        wave4: "wave4 18s infinite ease-in-out",
        wave5: "wave5 20s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;