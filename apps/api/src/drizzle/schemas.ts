import { InferSelectModel, relations, sql } from 'drizzle-orm';
import {
  pgTable,
  text,
  varchar,
  uniqueIndex,
  uuid,
  timestamp,
} from 'drizzle-orm/pg-core';

export const BusinessTable = pgTable('business', {
  id: uuid('id').notNull().defaultRandom().primaryKey(),
  type: varchar('type').default(''),
  name: varchar('name', { length: 255 }).notNull().default(''),
  location: text('location').notNull().default(''),

  createdOn: timestamp('createdOn').notNull().defaultNow(),
  updatedOn: timestamp('updatedOn').notNull().$onUpdate(() => new Date()),
}, (business) => ({
  name_idx: uniqueIndex('name_idx').on(business.name),
}));

export type Business = InferSelectModel<typeof BusinessTable>;

// --------------------------------------------------------------------------------
// Relations
// --------------------------------------------------------------------------------
