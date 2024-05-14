import { InferSelectModel, relations } from 'drizzle-orm';
import {
  date,
  integer,
  json,
  pgTable,
  serial,
  text,
  varchar,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core';

export const BusinessTable = pgTable('business', {
  id: uuid('id').notNull().defaultRandom().primaryKey(),
  type: varchar('type').default(''),
  name: varchar('name', { length: 255 }).notNull().default(''),
  location: text('location').notNull().default(''),

  createdOn: date('createdOn', { mode: 'string' }).defaultNow().notNull(),
  updatedOn: date('updatedOn', { mode: 'string' }).defaultNow().notNull(),
}, (business) => ({
  name_idx: uniqueIndex('name_idx').on(business.name),
}));

export type Business = InferSelectModel<typeof BusinessTable>;

// --------------------------------------------------------------------------------
// Relations
// --------------------------------------------------------------------------------
