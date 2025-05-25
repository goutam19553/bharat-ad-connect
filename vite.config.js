import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "@supabase/supabase-js",
      "framer-motion"
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, "@supabase/supabase-js", "framer-motion"],
    },
    rollupOptions: {
      // Optional: externalize heavy 3D libs to avoid build issues
      external: ["3d-force-graph"],
    },
  },
});
