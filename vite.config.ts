import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: "./public", // Set the root to the src directory
  publicDir: "../public",
  build: {
    outDir: "../dist", // Output directory for the build
    emptyOutDir: true, // Empty the output directory before building
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
