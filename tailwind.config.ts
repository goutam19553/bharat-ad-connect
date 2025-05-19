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
     @keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.animate-shimmer {
  animation: shimmer 2s linear infinite;
}

@keyframes swipe-glow {
  0% {
    transform: translateX(-100%) translateY(100%);
  }
  50% {
    transform: translateX(100%) translateY(-100%);
  }
  100% {
    transform: translateX(300%) translateY(-300%);
  }
}
.animate-swipe-glow {
  animation: swipe-glow 2s linear infinite;
}

@keyframes glitch-horizontal {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  60% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}
.animate-glitch-horizontal {
  animation: glitch-horizontal 1.5s infinite ease-in-out;
}

@keyframes glitch-line {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.animate-glitch-line {
  animation: glitch-line 2s infinite;
}

    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
