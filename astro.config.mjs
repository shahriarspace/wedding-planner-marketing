import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://minemeraj.github.io',
  base: '/wedding-planner-marketing',
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
