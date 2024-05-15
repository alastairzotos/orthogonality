import { StaffMemberSchema, type BusinessSchema } from "../schemas";
import { AsTable } from "../util";

export type GetBusinessDto = AsTable<BusinessSchema & { staffMembers: GetStaffMembersDto }>;
export type GetBusinessesDto = Array<AsTable<BusinessSchema>>;
export type CreateBusinessDto = BusinessSchema;
export type UpdateBusinessDto = Partial<BusinessSchema>;

export type GetStaffMemberDto = AsTable<StaffMemberSchema>;
export type GetStaffMembersDto = Array<AsTable<StaffMemberSchema>>;
export type CreateStaffMemberDto = StaffMemberSchema;
export type UpdateStaffMemberDto = Partial<StaffMemberSchema>;
