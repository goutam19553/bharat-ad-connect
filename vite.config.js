import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "echarts/map/js/india": path.resolve(__dirname, "node_modules/echarts/map/js/india.js"), // Ensure correct path to india.js
    },
  },
  optimizeDeps: {
    include: [
      "@supabase/supabase-js",
      "framer-motion",
      "echarts-for-react", // ✅ Added to fix Netlify build issue
      "echarts", // Ensure that echarts is included
    ],
  },
  build: {
    commonjsOptions: {
      include: [
        /node_modules/,
        "@supabase/supabase-js",
        "framer-motion",
        "echarts-for-react", // ✅ Ensure it's included in CommonJS processing
        "echarts", // Ensure echarts is bundled correctly
      ],
    },
    rollupOptions: {
      external: [], // ✅ Leave empty to avoid externalizing necessary packages
    },
  },
}));
