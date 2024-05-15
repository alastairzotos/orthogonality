import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ZodValidationPipe } from "nestjs-zod";
import { BusinessesModule } from "src/features/businesses/businesses.module";
import { StaffMembersModule } from "src/features/staff-members/staff-members.module";

@Module({
  imports: [
    BusinessesModule,
    StaffMembersModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    }
  ]
})
export class AppModule {}
