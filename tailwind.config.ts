import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        bharat: {
          green: "#00A651",
          saffron: "#FF9933",
          navy: "#000080",
          teal: "#008080",
          lightgray: "#F5F5F5",
          darkgray: "#333333",
          darkBackground: "#121212",
          darkText: "#f5f5f5",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        destructive: "var(--destructive)",
        border: "#e5e7eb",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        md: "1rem",
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
        "3d-tilt": {
          "0%, 100%": {
            transform: "rotateX(0deg) rotateY(0deg) scale(1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          },
          "50%": {
            transform: "rotateX(8deg) rotateY(8deg) scale(1.05)",
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
          },
        },
        neonPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 8px #7f5af0, 0 0 20px #7f5af0, 0 0 30px #7f5af0",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 12px #00f0ff, 0 0 24px #00f0ff, 0 0 36px #00f0ff",
          },
        },
        liquidMove: {
          "0%, 100%": {
            transform: "translateX(0) translateY(0)",
          },
          "50%": {
            transform: "translateX(5px) translateY(-3px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "spin-slow": "spin-slow 5s linear infinite",
        spin: "spin 1s linear infinite",
        bounce: "bounce 1s infinite",
        "3d-tilt": "3d-tilt 4s ease-in-out infinite",
        neonPulse: "neonPulse 4s ease-in-out infinite",
        liquidMove: "liquidMove 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
