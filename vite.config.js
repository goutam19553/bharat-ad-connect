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
      "react-hook-form", // Ensure Vite pre-bundles react-hook-form
    ], 
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, "@supabase/supabase-js"], // Include the Supabase package in the build process
    },
    rollupOptions: {
      external: ["react-hook-form"], // Add react-hook-form as an external dependency if needed
    },
  },
  esbuild: {
    loader: "tsx", // Assuming you're using TS/JSX files
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
}));
