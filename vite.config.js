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
      "echarts-for-react",
      "echarts-gl", // ✅ Make sure to include 'echarts-gl' if you're using it directly
    ],
  },
  build: {
    commonjsOptions: {
      include: [
        /node_modules/,
        "@supabase/supabase-js",
        "framer-motion",
        "echarts-for-react",
        "echarts-gl", // ✅ Ensure 'echarts-gl' is handled during CommonJS processing
      ],
    },
    rollupOptions: {
      external: [], // ✅ Keep empty to ensure necessary packages are bundled
    },
  },
}));
