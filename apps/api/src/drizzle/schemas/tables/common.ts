import { uuid, timestamp } from 'drizzle-orm/pg-core';

// Used to ensure tables satisfy zod schemas defined in libs/types/
export type DoesExtend<T, _ extends T> = T;

export const commonColumns = {
  id: uuid('id').notNull().defaultRandom().primaryKey(),
  createdOn: timestamp('created_on').notNull().defaultNow(),
  updatedOn: timestamp('updated_on').notNull().$onUpdate(() => new Date()),
}
