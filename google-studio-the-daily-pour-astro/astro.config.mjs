import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  vite: {
    plugins: [tailwind()],
    server: {
      hmr: false,
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
