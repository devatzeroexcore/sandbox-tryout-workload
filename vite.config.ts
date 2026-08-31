import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    // Sandbox preview URLs (sprites.app / trycloudflare.com) use dynamic
    // hostnames, so allow any Host header for this throwaway tryout.
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
