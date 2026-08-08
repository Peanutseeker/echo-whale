import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/echo-whale/' : '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
