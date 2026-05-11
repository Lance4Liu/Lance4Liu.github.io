import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['tech', 'product', 'diary']),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.string().optional()
  })
});

const devlog = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    type: z.enum(['milestone', 'feature', 'fix', 'improvement']),
    status: z.enum(['done', 'in-progress', 'planned']),
    priority: z.enum(['high', 'medium', 'low']).optional(),
  })
});

export const collections = { posts, devlog };
