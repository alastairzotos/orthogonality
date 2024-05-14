import { Module } from "@nestjs/common";
import { EnvironmentModule } from "src/environment/environment.module";
import { BusinessModule } from "src/features/business/business.module";

@Module({
  imports: [
    EnvironmentModule,
    BusinessModule,
  ],
})
export class AppModule {}