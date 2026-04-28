// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';
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
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Fraunces',
        cssVariable: '--font-fraunces',
        weights: [300, 400, 500, 600, 700, 800, 900],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['Georgia', 'serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'DM Sans',
        cssVariable: '--font-dm-sans',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['system-ui', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Space Grotesk',
        cssVariable: '--font-space-grotesk',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['system-ui', 'sans-serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'JetBrains Mono',
        cssVariable: '--font-jetbrains-mono',
        weights: [400],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['ui-monospace', 'monospace'],
      },
      {
        provider: fontProviders.google(),
        name: 'Style Script',
        cssVariable: '--font-style-script',
        weights: [400],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['cursive'],
      },
    ],
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
