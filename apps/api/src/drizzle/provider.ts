import { Inject, Module, Provider } from '@nestjs/common';
import * as postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { ENV_TOKEN } from 'src/environment/environment.provider';
import { Environment } from 'src/environment/environment';
import { EnvironmentModule } from 'src/environment/environment.module';
import * as schema from './schemas';

const DRIZZLE_TOKEN = 'drizzleProvider';

export const DrizzleProvider: Provider = {
  provide: DRIZZLE_TOKEN,
  inject: [ENV_TOKEN],
  useFactory: async (env: Environment) => {
    const client = postgres(env.databaseConnectionString);

    return drizzle(client, {
      schema,
      logger: false,
    });
  },
};

export const InjectDb = () => Inject(DRIZZLE_TOKEN);

export type Database = PostgresJsDatabase<typeof schema>;

@Module({
  imports: [EnvironmentModule],
  providers: [DrizzleProvider],
  exports: [DrizzleProvider],
})
export class DrizzleModule {}
