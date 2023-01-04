import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    solidPlugin(),
    federation({
      name: "solid-about",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/index.tsx",
      },
    }),
  ],
  server: {
    port: 4173,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 4173,
  },
});
