import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const testimonialVariant = z.enum(['polaroid', 'sticky', 'index', 'plum']);
const avatarTone = z.enum(['coral', 'plum', 'sage', 'sky', 'navy']);
const tilt = z.enum(['rot-1', 'rot-2', 'rot-3', 'rot-4', 'rot-5']);
const tape = z.enum(['left', 'right', 'center', 'left-coral', 'right-coral']).optional();
const pin = z.enum(['coral', 'plum', 'sage']).optional();

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    initials: z.string(),
    avatarTone: avatarTone,
    variant: testimonialVariant,
    tilt: tilt,
    pin: pin,
    tape: tape,
    /** For polaroid variant: gradient applied to the avatar slab. */
    slabGradient: z.string().optional(),
    /** Use white text and a quote glyph (plum variant featured cards). */
    featured: z.boolean().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    category: z.enum(['services-fit', 'process-timeline', 'deliverables', 'logistics']),
    order: z.number(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Plain-text category shown above the post title (e.g. "Design Systems"). */
    category: z.string(),
    /** Optional sticker badges shown on the index card hero (max ~3). */
    tags: z.array(z.string()).default([]),
    /** Read time in minutes (computed by hand for now). */
    readMinutes: z.number(),
    /** Iconify name for the gradient hero block on the index card. */
    icon: z.string(),
    /** Tailwind classes for the index card's gradient block (e.g. "from-peach via-lemon/70 to-coral/30"). */
    gradient: z.string(),
    /** Tone applied to the corner sticker on the index card. */
    sticker: z.enum(['coral', 'plum', 'sage', 'sky', 'sunset', 'lemon']),
    /** Show this post in the featured "notebook" slot on the index. */
    featured: z.boolean().default(false),
    /** Hide from listings — useful for drafts. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { testimonials, faqs, posts };
