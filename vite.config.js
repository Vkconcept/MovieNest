import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MovieNest/', // add this line
  plugins: [react()],
});
