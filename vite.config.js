import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pages: resolve(__dirname, 'pages/test.html'),
      },
    },
    cssCodeSplit: true,
    manifest: true,
    minify: true,
  },
  resolve: {
      alias: {
          '@': '/src',
          '@Components': '/src/js/components',
          '@Scss': '/src/scss',
      },
  },
});