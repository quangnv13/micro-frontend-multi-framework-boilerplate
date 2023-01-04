import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react_home",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/index.tsx",
      },
    }),
  ],
  server: {
    port: 4174,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 4174,
  },
});
