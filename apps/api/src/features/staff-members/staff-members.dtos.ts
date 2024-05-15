import { staffMemberSchema } from "@repo/types";
import { createZodDto } from "nestjs-zod";

export class CreateStaffMemberDto extends createZodDto(staffMemberSchema) {}
export class UpdateStaffMemberDto extends createZodDto(staffMemberSchema.partial()) {}
