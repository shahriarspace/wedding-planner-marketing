import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://merrilyplan.com',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
