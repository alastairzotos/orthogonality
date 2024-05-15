import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/provider";
import { StaffMembersController } from "src/features/staff-members/staff-members.controller";
import { StaffMembersRepository } from "src/features/staff-members/staff-members.repository";
import { StaffMembersService } from "src/features/staff-members/staff-members.service";

@Module({
  imports: [DrizzleModule],
  controllers: [StaffMembersController],
  providers: [StaffMembersService, StaffMembersRepository],
  exports: [StaffMembersService, StaffMembersRepository],
})
export class StaffMembersModule { }