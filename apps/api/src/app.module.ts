import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ZodValidationPipe } from "nestjs-zod";
import { EnvironmentModule } from "src/environment/environment.module";
import { BusinessesModule } from "src/features/businesses/businesses.module";

@Module({
  imports: [
    EnvironmentModule,
    BusinessesModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    }
  ]
})
export class AppModule {}
