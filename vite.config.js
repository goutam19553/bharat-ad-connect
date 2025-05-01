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
      "react-hook-form",  // Ensure react-hook-form is pre-bundled
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, "@supabase/supabase-js", "react-hook-form"], // Include react-hook-form in the build process
    },
    rollupOptions: {
      external: ["react-hook-form"],  // Prevent bundling react-hook-form if needed
    },
  },
  esbuild: {
    loader: "tsx",  // Assuming you're using TS/JSX files
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
}));
