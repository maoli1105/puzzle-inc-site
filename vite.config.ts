import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/puzzle-inc-site/' : '/',
  appType: 'mpa',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products/index.html'),
        pieceOne: resolve(__dirname, 'products/piece-one/index.html'),
        pieceFlow: resolve(__dirname, 'products/piece-flow/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
})