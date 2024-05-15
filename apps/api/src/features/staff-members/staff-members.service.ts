import { Injectable } from "@nestjs/common";
import { CreateStaffMemberDto, UpdateStaffMemberDto } from "@repo/types";
import { StaffMembersRepository } from "src/features/staff-members/staff-members.repository";

@Injectable()
export class StaffMembersService {
  constructor(
    private readonly staffMembersRepo: StaffMembersRepository,
  ) {}

  async getStaffMemberById(id: string) {
    return await this.staffMembersRepo.getStaffMemberById(id);
  }

  async createStaffMember(staffMember: CreateStaffMemberDto) {
    await this.staffMembersRepo.createStaffMember(staffMember);
  }

  async updateStaffMember(id: string, staffMember: UpdateStaffMemberDto) {
    await this.staffMembersRepo.updateStaffMember(id, staffMember);
  }
}
