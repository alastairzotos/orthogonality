import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStaffMemberDto } from "src/features/staff-members/staff-members.dtos";
import { StaffMembersService } from "src/features/staff-members/staff-members.service";

@Controller('staff-members')
export class StaffMembersController {
  constructor(
    private readonly staffMembersService: StaffMembersService,
  ) {}

  @Get(':id')
  async getStaffMemberById(@Param('id') id: string) {
    return await this.staffMembersService.getStaffMemberById(id);
  }

  @Post()
  async createStaffMember(
    @Body() staffMember: CreateStaffMemberDto,
  ) {
    await this.staffMembersService.createStaffMember(staffMember);
  }

  @Put(':id')
  async updateStaffMember(
    @Param('id') id: string,
    @Body() staffMember: CreateStaffMemberDto,
  ) {
    await this.staffMembersService.updateStaffMember(id, staffMember);
  }
}
