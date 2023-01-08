import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  resolve: {
    // 设置路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
