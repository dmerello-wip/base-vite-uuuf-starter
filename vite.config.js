import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // build: {
    // outDir: './html/dist', // Cartella di output per i file compilati
    // publicDir: './html/', // Cartella di output per i file compilati
    // assetsDir: '.', // Directory da cui caricare gli asset
    // rollupOptions: {
    //   input: {
    //     index: resolve(__dirname, 'src/js/index.js'),
    //   },
    // },
  // },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pages: resolve(__dirname, 'pages/test.html'),
      },
    },
  },
  resolve: {
      alias: {
          '@': '/src',
          '@Components': '/src/js/components',
          '@Scss': '/src/scss',
      },
  }
});