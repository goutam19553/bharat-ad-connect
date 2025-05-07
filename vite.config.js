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
      // Correct the alias to reflect the correct path for india.js
      "echarts-countries-js/india": path.resolve(
        __dirname,
        "node_modules/echarts-countries-js/india.js"
      ),
    },
  },
  optimizeDeps: {
    include: [
      "@supabase/supabase-js",
      "framer-motion",
      "echarts-for-react",
      "echarts", // Make sure echarts is included
      "echarts-countries-js", // Explicitly add echarts-countries-js
    ],
  },
  build: {
    commonjsOptions: {
      include: [
        /node_modules/,
        "@supabase/supabase-js",
        "framer-motion",
        "echarts-for-react",
        "echarts",
        "echarts-countries-js", // Include the echarts-countries-js in the CommonJS processing
      ],
    },
    rollupOptions: {
      external: [], // Make sure nothing necessary is externalized unless needed
    },
  },
}));
