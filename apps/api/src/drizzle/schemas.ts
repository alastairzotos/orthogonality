import { BusinessSchema, StaffMemberSchema, businessTypes, staffMemberPositionTypes } from '@repo/types';
import { InferSelectModel, relations } from 'drizzle-orm';
import {
  pgTable,
  text,
  varchar,
  uniqueIndex,
  uuid,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';

// Used to ensure tables satisfy zod schemas defined in libs/types/
type DoesExtend<T, _ extends T> = T;

const commonColumns = {
  id: uuid('id').notNull().defaultRandom().primaryKey(),
  createdOn: timestamp('created_on').notNull().defaultNow(),
  updatedOn: timestamp('updated_on').notNull().$onUpdate(() => new Date()),
}

// Business
export const BusinessTypeEnum = pgEnum('business_type', businessTypes);

export const BusinessTable = pgTable('business', {
  ...commonColumns,
  
  type: BusinessTypeEnum('type').default(null),
  name: varchar('name', { length: 255 }).notNull().default(''),
  location: text('location').notNull().default(''),
}, (business) => ({
  name_idx: uniqueIndex('name_idx').on(business.name),
}));

export type Business = DoesExtend<BusinessSchema, InferSelectModel<typeof BusinessTable>>;

// Staff member
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

// --------------------------------------------------------------------------------
// Relations
// --------------------------------------------------------------------------------

export const BusinessTableRelations = relations(BusinessTable, ({ many }) => ({
  staffMembers: many(StaffMemberTable),
}));

export const StaffMemberTableRelations = relations(StaffMemberTable, ({ one }) => ({
  business: one(BusinessTable, {
    fields: [StaffMemberTable.businessId],
    references: [BusinessTable.id],
  })
}));
