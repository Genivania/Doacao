import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 800, // Ajuste o limite conforme necessário
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Se desejar, você pode ajustar a lógica para particionar manualmente os chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
