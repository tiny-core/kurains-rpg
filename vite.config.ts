import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import socketIo from './services/socket-io'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), socketIo()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
