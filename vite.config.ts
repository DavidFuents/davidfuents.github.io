import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Replace <repo-name> with your GitHub repo name
export default defineConfig({
  base: 'hdb',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});