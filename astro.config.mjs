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
  // The scorecard moved under /tools/. Keep old links / SEO working.
  redirects: {
    '/scorecard': '/tools/scorecard',
    '/scorecard/results': '/tools/scorecard/results',
  },
  ...(isDev ? {} : { adapter: netlify() }),
  image: {
    service: passthroughImageService(),
  },
  experimental: {
    // Editorial-Technical type system: one warm grotesk does all the work,
    // one mono carries every technical/metadata moment. Legacy CSS-var names
    // are aliased onto these in global.css so un-migrated pages stay in-system.
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Hanken Grotesk',
        cssVariable: '--font-hanken',
        weights: [400, 500, 600, 700, 800],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['system-ui', 'sans-serif'],
      },
      {
        // Display serif — the character face. Headlines + oversized numerals only;
        // body stays Hanken, technical labels stay Geist Mono. Fraunces' high
        // contrast, ball terminals and optical sizing are what break the
        // "one-grotesk Tailwind template" read. Italic carries the editorial wink.
        provider: fontProviders.google(),
        name: 'Fraunces',
        cssVariable: '--font-fraunces',
        weights: [400, 500, 600, 700],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      },
      {
        provider: fontProviders.google(),
        name: 'Geist Mono',
        cssVariable: '--font-geist-mono',
        weights: [400, 500, 600],
        styles: ['normal'],
        subsets: ['latin'],
        display: 'swap',
        fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
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
        !page.includes('/tools/scorecard/results'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
