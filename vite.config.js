import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  build: {
    commonjsOptions: { include: [] },
  },
  optimizeDeps: {
    disabled: false,
  },
});

// import { defineConfig } from "vite";
// import { NgmiPolyfill } from "vite-plugin-ngmi-polyfill";

// export default defineConfig({
//   plugins: [NgmiPolyfill()],
// });
