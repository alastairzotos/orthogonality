import { relations } from 'drizzle-orm';

import { BusinessTable, StaffMemberTable } from './tables';

export const BusinessTableRelations = relations(BusinessTable, ({ many }) => ({
  staffMembers: many(StaffMemberTable),
}));

export const StaffMemberTableRelations = relations(StaffMemberTable, ({ one }) => ({
  business: one(BusinessTable, {
    fields: [StaffMemberTable.businessId],
    references: [BusinessTable.id],
  })
}));
