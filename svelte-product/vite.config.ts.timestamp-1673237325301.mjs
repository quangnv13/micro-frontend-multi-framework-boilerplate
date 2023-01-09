// vite.config.ts
import { defineConfig } from "file:///home/quangnv/workspace/micro-fe-workspace/svelte-product/node_modules/.pnpm/vite@4.0.3/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/quangnv/workspace/micro-fe-workspace/svelte-product/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@2.0.2_svelte@3.55.0+vite@4.0.3/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";
import federation from "file:///home/quangnv/workspace/micro-fe-workspace/svelte-product/node_modules/.pnpm/@originjs+vite-plugin-federation@1.1.12/node_modules/@originjs/vite-plugin-federation/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "svelte-product",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/main.ts"
      }
    })
  ],
  server: {
    port: 4177
  },
  build: {
    target: "esnext"
  },
  preview: {
    port: 4177
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9xdWFuZ252L3dvcmtzcGFjZS9taWNyby1mZS13b3Jrc3BhY2Uvc3ZlbHRlLXByb2R1Y3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3F1YW5nbnYvd29ya3NwYWNlL21pY3JvLWZlLXdvcmtzcGFjZS9zdmVsdGUtcHJvZHVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9xdWFuZ252L3dvcmtzcGFjZS9taWNyby1mZS13b3Jrc3BhY2Uvc3ZlbHRlLXByb2R1Y3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHN2ZWx0ZSgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogJ3N2ZWx0ZS1wcm9kdWN0JyxcbiAgICAgIGZpbGVuYW1lOiAncmVtb3RlRW50cnkuanMnLFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICAnLi93ZWItY29tcG9uZW50cyc6ICcuL3NyYy9tYWluLnRzJyxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDQxNzcsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQxNzcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxvQkFBb0I7QUFDMVgsU0FBUyxjQUFjO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBR3ZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLG9CQUFvQjtBQUFBLE1BQ3RCO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
