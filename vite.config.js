import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "postcss.config.js", // Ensure this points to the correct config file
  },
});
