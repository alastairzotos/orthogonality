import { z } from 'zod';
import { isMobilePhone } from 'validator';

export const staffMemberPositionTypes = ['kitchen', 'service', 'PR'] as const;
export type StaffMemberPositionType = typeof staffMemberPositionTypes[number];

export const staffMemberPositionTypeSchema = z.enum(staffMemberPositionTypes, { message: 'Invalid position type' });

export const staffMemberSchema = z.object({
  businessId: z.string(),
  email: z.string().email('Invalid email').min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string().nullable()
    .refine(value => value !== null && !!value.length ? isMobilePhone(value) : true, { message: 'Invalid phone number '}),
  position: staffMemberPositionTypeSchema
});

export type StaffMemberSchema = z.infer<typeof staffMemberSchema>;
