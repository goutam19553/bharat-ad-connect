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
    },
  },
  optimizeDeps: {
    include: [
      "@supabase/supabase-js",
      "framer-motion",
      "echarts-for-react", // ✅ Added to fix Netlify build issue
    ],
  },
  build: {
    commonjsOptions: {
      include: [
        /node_modules/,
        "@supabase/supabase-js",
        "framer-motion",
        "echarts-for-react", // ✅ Ensure it's included in CommonJS processing
      ],
    },
    rollupOptions: {
      external: [], // ✅ Leave empty to avoid externalizing necessary packages
    },
  },
}));
