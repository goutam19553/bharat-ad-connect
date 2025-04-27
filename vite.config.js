import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // Redirect /ar-solutions to another path (for example, to /path-to-ar-solutions)
      '/ar-solutions': '/path-to-ar-solutions',
    },
  },
  publicDir: "public", // <--- ADD THIS LINE
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
