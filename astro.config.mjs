import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://leonardofdsantos.github.io',
  base: '/Tereshkova-Engenharia',
  server: {
    port: 3000
  }
});
