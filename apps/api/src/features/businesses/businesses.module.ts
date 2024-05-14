import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/provider";
import { EnvironmentModule } from "src/environment/environment.module";
import { BusinessesController } from "src/features/businesses/businesses.controller";
import { BusinessesRepository } from "src/features/businesses/businesses.repository";
import { BusinessesService } from "src/features/businesses/businesses.service";

@Module({
  imports: [EnvironmentModule, DrizzleModule],
  controllers: [BusinessesController],
  providers: [
    BusinessesRepository,
    BusinessesService,
  ],
})
export class BusinessesModule {}
