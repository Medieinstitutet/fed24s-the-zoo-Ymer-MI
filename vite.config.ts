import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "tailwindcss/base" as *;
          @use "tailwindcss/components" as *;
          @use "tailwindcss/utilities" as *;
        `
      }
    }
  }
})
