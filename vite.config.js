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
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@supabase/supabase-js"], // Ensure Vite pre-bundles @supabase/supabase-js
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, "@supabase/supabase-js"], // Include the Supabase package in the build process
    },
      rollupOptions: {
      // Don't include external at all unless you really need it
    },
  },
  esbuild: {
    // Optional: Improve module resolution if needed
    loader: 'tsx', // Assuming you're using TS/JSX files
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
}));
