import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    solidPlugin(),
    federation({
      name: "solid-shell",
      remotes: {
        solid_about: "http://localhost:4173/assets/remoteEntry.js",
        react_home: "http://localhost:4174/assets/remoteEntry.js",
        angular_contact: {
          external: "http://localhost:4175/assets/remoteEntry.js",
          from: "webpack",
          externalType: "url",
        },
        vue_cart: "http://localhost:4176/assets/remoteEntry.js",
        svelte_product: "http://localhost:4177/assets/remoteEntry.js",
      },
    }),
  ],
  server: {
    port: 4172,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 4172,
  },
});
