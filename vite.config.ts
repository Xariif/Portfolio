import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    // Enable code splitting and minification
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      maxParallelFileOps: 16, // Increase parallel file operations
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          framer: ['framer-motion']
        }
      }
    },
    // Optimize build performance
    target: 'es2020',
    sourcemap: false, // Disable in production for smaller builds
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  // Asset optimization
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material', 'framer-motion']
  }
})
