import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue-cart",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/main.ts",
      },
    }),
  ],
  server: {
    port: 4176,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 4176,
  },
});
