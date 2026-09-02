import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://tereshkovaengenharia.com.br',
  base: '/',
  server: {
    port: 3000
  }
});
