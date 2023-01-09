// vite.config.ts
import { defineConfig } from "file:///home/quangnv/workspace/micro-fe-workspace/react-home/node_modules/.pnpm/vite@4.0.3/node_modules/vite/dist/node/index.js";
import react from "file:///home/quangnv/workspace/micro-fe-workspace/react-home/node_modules/.pnpm/@vitejs+plugin-react@3.0.0_vite@4.0.3/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///home/quangnv/workspace/micro-fe-workspace/react-home/node_modules/.pnpm/@originjs+vite-plugin-federation@1.1.12/node_modules/@originjs/vite-plugin-federation/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "react_home",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/index.tsx"
      }
    })
  ],
  server: {
    port: 4174
  },
  build: {
    target: "esnext"
  },
  preview: {
    port: 4174
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9xdWFuZ252L3dvcmtzcGFjZS9taWNyby1mZS13b3Jrc3BhY2UvcmVhY3QtaG9tZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcXVhbmdudi93b3Jrc3BhY2UvbWljcm8tZmUtd29ya3NwYWNlL3JlYWN0LWhvbWUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcXVhbmdudi93b3Jrc3BhY2UvbWljcm8tZmUtd29ya3NwYWNlL3JlYWN0LWhvbWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogXCJyZWFjdF9ob21lXCIsXG4gICAgICBmaWxlbmFtZTogXCJyZW1vdGVFbnRyeS5qc1wiLFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICBcIi4vd2ViLWNvbXBvbmVudHNcIjogXCIuL3NyYy9pbmRleC50c3hcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDQxNzQsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogNDE3NCxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFFdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1Asb0JBQW9CO0FBQUEsTUFDdEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
