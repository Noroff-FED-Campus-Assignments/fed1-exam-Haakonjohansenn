/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
         main: resolve(__dirname, "index.js"),
         contact: resolve(__dirname, "contact.js"),
         blog: resolve(__dirname, "blog.js"),
         detail: resolve(__dirname, "details.js"),
         about: resolve(__dirname, "about.js"),
      },
    },
  },
});