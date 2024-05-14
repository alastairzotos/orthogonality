import { Module } from "@nestjs/common";
import { EnvironmentModule } from "src/environment/environment.module";
import { BusinessesModule } from "src/features/businesses/businesses.module";

@Module({
  imports: [
    EnvironmentModule,
    BusinessesModule,
  ],
})
export class AppModule {}