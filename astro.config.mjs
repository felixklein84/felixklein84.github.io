import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://felixklein84.github.io',
  integrations: [sitemap()],
});
