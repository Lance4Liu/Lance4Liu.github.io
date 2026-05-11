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

export const collections = { posts };
