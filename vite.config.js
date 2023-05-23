/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
         main: resolve(__dirname, "index.html"),
         contact: resolve(__dirname, "./app/contact.html"),
         blog: resolve(__dirname, "./app/blog.html"),
         detail: resolve(__dirname, "./app/details.html"),
         about: resolve(__dirname, "./app/about.html"),
      },
    },
  },
});