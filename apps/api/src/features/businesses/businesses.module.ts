import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/provider";
import { BusinessesController } from "src/features/businesses/businesses.controller";
import { BusinessesRepository } from "src/features/businesses/businesses.repository";
import { BusinessesService } from "src/features/businesses/businesses.service";

@Module({
  imports: [DrizzleModule],
  controllers: [BusinessesController],
  providers: [
    BusinessesRepository,
    BusinessesService,
  ],
})
export class BusinessesModule {}
