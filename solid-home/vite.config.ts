import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    solidPlugin(),
    federation({
      name: 'solid-home',
      filename: 'remoteEntry.js',
      exposes: {
        './web-components': './src/index.ts',
      },
    }),
  ],
  server: {
    port: 4178,
  },
  build: {
    target: 'esnext',
  },
  preview: {
    port: 4178,
  },
});
