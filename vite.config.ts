import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      buffer: 'buffer/',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'react-native-svg'], // Ensure buffer is pre-bundled
  },
  define: {
    'process.env': {}, // Prevent process-related errors
  },
});
