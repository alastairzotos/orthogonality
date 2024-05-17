import { BusinessSchema, businessTypes } from '@repo/types';
import { InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  text,
  varchar,
  uniqueIndex,
  pgEnum,
} from 'drizzle-orm/pg-core';

import { DoesExtend, commonColumns } from './common';

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
