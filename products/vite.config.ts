import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: resolve(__dirname, '../public'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        puzzlework: resolve(__dirname, 'puzzlework/index.html'),
        pieceone: resolve(__dirname, 'piece-one/index.html'),
        pieceflow: resolve(__dirname, 'piece-flow/index.html'),
      },
    },
  },
})
