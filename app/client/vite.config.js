// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   '/api': 'http://localhost:3031', // Target your Express server's port
    // },
    port: process.env.PORT,
  },

  define: {
    '__APP_VERSION__': JSON.stringify('1.0.0'),
    'process.env.PORT': JSON.stringify(process.env.PORT || 5173), // Example for Node.js specific variable
  },
});