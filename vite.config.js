// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BudgetME_V2/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
});