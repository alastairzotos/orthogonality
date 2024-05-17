import { z } from 'zod';

export const businessTypes = ['bar', 'restaurant', 'club', 'hotel', 'cafe'] as const;
export type BusinessType = typeof businessTypes[number];

export const businessTypeSchema = z.enum(businessTypes, { message: 'Invalid business type' });

export const businessSchema = z.object({
  type: businessTypeSchema.nullable(),
  name: z.string().min(1),
  location: z.string().min(1),
});

export type BusinessSchema = z.infer<typeof businessSchema>;
