import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enable dark mode using class
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
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Custom colors for Bharat-Ad
        bharat: {
          green: '#00A651',
          saffron: '#FF9933',
          navy: '#000080',
          teal: '#008080',
          lightgray: '#F5F5F5',
          darkgray: '#333333',
          // Dark Mode Custom Colors
          darkBackground: '#121212',
          darkText: '#f5f5f5',
        },
        background: 'var(--background)', // Custom CSS variable for background
        foreground: 'var(--foreground)', // Custom CSS variable for foreground
        primary: 'var(--primary)', // Custom CSS variable for primary
        secondary: 'var(--secondary)', // Custom CSS variable for secondary
        muted: 'var(--muted)', // Custom CSS variable for muted text
        accent: 'var(--accent)', // Custom CSS variable for accent
        destructive: 'var(--destructive)', // Custom CSS variable for destructive
        border: 'var(--border)', // Custom CSS variable for border
        input: 'var(--input)', // Custom CSS variable for input
        ring: 'var(--ring)', // Custom CSS variable for ring
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)', // Use custom radius variable
        md: 'calc(var(--radius) - 2px)', // Adjust based on custom radius variable
        sm: 'calc(var(--radius) - 4px)', // Adjust based on custom radius variable
      },
      fontSize: {
        // Add custom size for text-md
        'md': '1rem', // Adjust this as needed for your desired size
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
