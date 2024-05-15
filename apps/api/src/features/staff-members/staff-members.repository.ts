import { Injectable } from "@nestjs/common";
import { CreateStaffMemberDto, UpdateStaffMemberDto } from "@repo/types";
import { eq } from "drizzle-orm";
import { Database, InjectDb } from "src/drizzle/provider";
import { StaffMemberTable } from "src/drizzle/schemas";

@Injectable()
export class StaffMembersRepository {
  constructor(
    @InjectDb() private readonly db: Database,
  ) {}

  async getStaffMemberById(id: string) {
    return await this.db.query.StaffMemberTable.findFirst({
      where: (t, { eq }) => eq(t.id, id),
    })
  }

  async createStaffMember(staffMember: CreateStaffMemberDto) {
    await this.db
      .insert(StaffMemberTable)
      .values(staffMember);
  }

  async updateStaffMember(id: string, staffMember: UpdateStaffMemberDto) {
    await this.db
      .update(StaffMemberTable)
      .set({ id, ...staffMember })
      .where(eq(StaffMemberTable.id, id));
  }
}
