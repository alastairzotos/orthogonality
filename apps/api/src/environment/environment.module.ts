import { Module } from "@nestjs/common";
import { EnvProvider } from "src/environment/environment.provider";

@Module({
  imports: [],
  providers: [EnvProvider],
  exports: [EnvProvider],
})
export class EnvironmentModule { }
