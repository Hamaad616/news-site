import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  category_id: z.number(),
  content: z.string(),
  status: z.string(),
  category: z.object({
    id: z.number(),
    name: z.string(),
  }),
})

export const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  children: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      status: z.boolean().optional().nullable(),
  })).nullable().optional(),
  status: z.boolean().optional().nullable(),
})
