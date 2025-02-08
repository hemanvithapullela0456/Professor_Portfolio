import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          :root {
            --primary: #005acd;
            --secondary: #0093cb;
            --accent: #6dd7fd;
            --light: #bef0ff;
            --background: #f5ffff;
          }
        `
      }
    }
  }
})
