// vite.config.ts
import { defineConfig } from "file:///Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import typescript2 from "file:///Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import dts from "file:///Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { quasar, transformAssetUrls } from "file:///Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui/node_modules/@quasar/vite-plugin/dist/index.js";
var __vite_injected_original_dirname = "/Users/denisibanezrodriguesvieira/Documents/Projetos/master/components/purevite/design-system-ui";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass"
    }),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/index.ts",
      name: "myLibraryVueTs",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `design-system-ui.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: path.resolve(__vite_injected_original_dirname, "src/index.ts")
      },
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css")
            return "design-system-ui.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGVuaXNpYmFuZXpyb2RyaWd1ZXN2aWVpcmEvRG9jdW1lbnRzL1Byb2pldG9zL21hc3Rlci9jb21wb25lbnRzL3B1cmV2aXRlL2Rlc2lnbi1zeXN0ZW0tdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kZW5pc2liYW5lenJvZHJpZ3Vlc3ZpZWlyYS9Eb2N1bWVudHMvUHJvamV0b3MvbWFzdGVyL2NvbXBvbmVudHMvcHVyZXZpdGUvZGVzaWduLXN5c3RlbS11aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGVuaXNpYmFuZXpyb2RyaWd1ZXN2aWVpcmEvRG9jdW1lbnRzL1Byb2pldG9zL21hc3Rlci9jb21wb25lbnRzL3B1cmV2aXRlL2Rlc2lnbi1zeXN0ZW0tdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgdHlwZXNjcmlwdDIgZnJvbSAncm9sbHVwLXBsdWdpbi10eXBlc2NyaXB0Mic7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IHF1YXNhciwgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSAnQHF1YXNhci92aXRlLXBsdWdpbidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHsgdHJhbnNmb3JtQXNzZXRVcmxzIH1cbiAgICB9KSxcblxuICAgIHF1YXNhcih7XG4gICAgICBzYXNzVmFyaWFibGVzOiAnc3JjL3F1YXNhci12YXJpYWJsZXMuc2FzcydcbiAgICB9KSxcbiAgICBkdHMoe1xuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICB9KSxcbiAgICB0eXBlc2NyaXB0Mih7XG4gICAgICBjaGVjazogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbXCJzcmMvY29tcG9uZW50cy8qKi8qLnZ1ZVwiXSxcbiAgICAgIHRzY29uZmlnT3ZlcnJpZGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgICAgICBzb3VyY2VNYXA6IHRydWUsXG4gICAgICAgICAgZGVjbGFyYXRpb246IHRydWUsXG4gICAgICAgICAgZGVjbGFyYXRpb25NYXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZXhjbHVkZTogW1widml0ZS5jb25maWcudHNcIl1cbiAgICB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBuYW1lOiAnbXlMaWJyYXJ5VnVlVHMnLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJjanNcIiwgXCJ1bWRcIl0sXG4gICAgICBmaWxlTmFtZTogZm9ybWF0ID0+IGBkZXNpZ24tc3lzdGVtLXVpLiR7Zm9ybWF0fS5qc2BcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkIG5vdCBiZSBidW5kbGVkXG4gICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIilcbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gJ21haW4uY3NzJykgcmV0dXJuICdkZXNpZ24tc3lzdGVtLXVpLmNzcyc7XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2QsU0FBUyxvQkFBb0I7QUFDL2UsT0FBTyxTQUFTO0FBQ2hCLFlBQVksVUFBVTtBQUN0QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxRQUFRLDBCQUEwQjtBQUwzQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFDakMsQ0FBQztBQUFBLElBRUQsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLElBQ2pCLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyx5QkFBeUI7QUFBQSxNQUNuQyxrQkFBa0I7QUFBQSxRQUNoQixpQkFBaUI7QUFBQSxVQUNmLFFBQVE7QUFBQSxVQUNSLFdBQVc7QUFBQSxVQUNYLGFBQWE7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDLGdCQUFnQjtBQUFBLElBQzVCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBLE1BQzVCLFVBQVUsWUFBVSxvQkFBb0I7QUFBQSxJQUMxQztBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdiLE9BQU87QUFBQSxRQUNMLE1BQVcsYUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDOUM7QUFBQSxNQUNBLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUztBQUFZLG1CQUFPO0FBQzFDLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
