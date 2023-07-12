// vite.config.ts
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh()],
  // plugins: [react()],
});
