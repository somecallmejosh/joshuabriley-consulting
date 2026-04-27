// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

const isDev = process.argv.includes('dev');

export default defineConfig({
  site: 'https://joshuabriley.com',
  output: 'static',
  ...(isDev ? {} : { adapter: netlify() }),
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/dev/') &&
        !page.includes('/component-inventory') &&
        !page.includes('/scorecard/results'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
