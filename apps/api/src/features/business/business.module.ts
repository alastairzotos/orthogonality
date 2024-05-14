import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/provider";
import { EnvironmentModule } from "src/environment/environment.module";
import { BusinessController } from "src/features/business/business.controller";
import { BusinessRepository } from "src/features/business/business.repository";
import { BusinessService } from "src/features/business/business.service";

@Module({
  imports: [EnvironmentModule, DrizzleModule],
  controllers: [BusinessController],
  providers: [
    BusinessRepository,
    BusinessService,
  ],
})
export class BusinessModule {}
