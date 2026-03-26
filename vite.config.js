import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

import path from 'path'   // 👈 add this
import { fileURLToPath } from 'url'   // 👈 add this
const __dirname = path.dirname(fileURLToPath(import.meta.url))  // 👈 add this

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // 👈 add this
    },
  },
})