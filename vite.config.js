import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Read port from environment (used by Claude preview), fall back to 5173
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    strictPort: false,
    host: true,
  },
})
