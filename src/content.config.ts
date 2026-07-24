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
    /** Path to the person's photo (used for the avatar / polaroid slab). */
    image: z.string().optional(),
    /** Use white text and a quote glyph (plum variant featured cards). */
    featured: z.boolean().optional(),
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
    /** Tailwind classes for the index card's gradient block (e.g. "from-lemon via-coral/40 to-sky/30"). */
    gradient: z.string(),
    /** Tone applied to the corner sticker on the index card. */
    sticker: z.enum(['coral', 'plum', 'sage', 'sky', 'sunset', 'lemon']),
    /** Show this post in the featured "notebook" slot on the index. */
    featured: z.boolean().default(false),
    /** Hide from listings — useful for drafts. */
    draft: z.boolean().default(false),
    /** Interactive post (embeds a tool widget): drops the TOC rail and lets
     *  `.post-tool` blocks break out wider than the reading column. */
    interactive: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Which island renders above the essay. Must be a key of ISLANDS in ToolPage.astro. */
    tool: z.enum(['ScorecardEngine', 'RoiCalculator', 'TokenPlayground', 'Diagnostic']),
    /** Shown in the hero mono-label ("Tools / Self-assessment") and on index rows. */
    kind: z.string(),
    /** Ordering on the /tools/ index. Lower runs first. */
    order: z.number(),
    /** One line describing what you get out of it. Index rows + home band. */
    takeaway: z.string(),
    /** Link text on the index. Verb-first and specific to this tool, so the
     *  four links stay distinguishable when read on their own. */
    action: z.string(),
    /** Hero pill list: the tool's properties, not topics ("No signup", "Nothing saved"). */
    props: z.array(z.string()).default([]),
    /** How to drive the tool. Renders directly above it, so it never says "below". */
    instructions: z.string(),
    /** Iconify name, used on the index bento. */
    icon: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { testimonials, posts, tools };
