import { z } from 'zod';

export const businessSchema = z.object({
  type: z.string().nullable(),
  name: z.string().min(1),
  location: z.string().min(1),
});

export type BusinessSchema = z.infer<typeof businessSchema>;
