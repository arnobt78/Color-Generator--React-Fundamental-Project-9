import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Enables Fast Refresh and JSX/React compilation for .jsx files
  plugins: [react()],
  build: {
    rollupOptions: {
      // Suppress "use client" directive warning from deps like react-toastify (harmless in client-only Vite apps)
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
})
