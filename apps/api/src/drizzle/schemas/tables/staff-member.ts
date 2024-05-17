import { StaffMemberSchema, staffMemberPositionTypes } from '@repo/types';
import { InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  varchar,
  uniqueIndex,
  uuid,
  pgEnum,
} from 'drizzle-orm/pg-core';

import { DoesExtend, commonColumns } from './common';
import { BusinessTable } from './business';

export const StaffMemberPositionTypeEnum = pgEnum('staff_member_position_type', staffMemberPositionTypes);

export const StaffMemberTable = pgTable('staff_member', {
  ...commonColumns,

  businessId: uuid('business_id').notNull().references(() => BusinessTable.id),
  email: varchar('email', { length: 255 }).notNull().default(''),
  firstName: varchar('first_name', { length: 255 }).notNull().default(''),
  lastName: varchar('last_name', { length: 255 }).notNull().default(''),
  phoneNumber: varchar('phone_number', { length: 255 }).default(''),
  position: StaffMemberPositionTypeEnum('position').notNull().default('kitchen'),
}, (staffMember) => ({
  email_idx: uniqueIndex('email_idx').on(staffMember.email),
}));

export type StaffMember = DoesExtend<StaffMemberSchema, InferSelectModel<typeof StaffMemberTable>>;
