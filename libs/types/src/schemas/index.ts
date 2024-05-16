import { z } from 'zod';
import { isMobilePhone } from 'validator';

// Business

export const businessTypes = ['bar', 'restaurant', 'club', 'hotel', 'cafe'] as const;
export type BusinessType = typeof businessTypes[number];

export const businessTypeSchema = z.enum(businessTypes, { message: 'Invalid business type' });

export const businessSchema = z.object({
  type: businessTypeSchema.nullable(),
  name: z.string().min(1),
  location: z.string().min(1),
});

export type BusinessSchema = z.infer<typeof businessSchema>;

// Staff member

export const staffMemberPositionTypes = ['kitchen', 'service', 'PR'] as const;
export type StaffMemberPositionType = typeof staffMemberPositionTypes[number];

export const staffMemberPositionTypeSchema = z.enum(staffMemberPositionTypes, { message: 'Invalid position type' });

export const staffMemberSchema = z.object({
  businessId: z.string(),
  email: z.string().email('Invalid email').min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string().nullable()
    .refine(value => value !== null ? isMobilePhone(value) : true, { message: 'Invalid phone number '}),
  position: staffMemberPositionTypeSchema
});

export type StaffMemberSchema = z.infer<typeof staffMemberSchema>;
