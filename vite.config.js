// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kiroo-ride-app/', // 👈 this must match your repo name
  plugins: [react()],
})
