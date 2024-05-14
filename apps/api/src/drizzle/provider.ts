import { Inject, Module, Provider } from '@nestjs/common';
import * as postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { environment } from 'src/environment/environment';
import * as schema from './schemas';

const DRIZZLE_TOKEN = 'drizzleProvider';

export const DrizzleProvider: Provider = {
  provide: DRIZZLE_TOKEN,
  useFactory: async () => {
    const client = postgres(environment.databaseConnectionString);

    return drizzle(client, {
      schema,
      logger: false,
    });
  },
};

export const InjectDb = () => Inject(DRIZZLE_TOKEN);

export type Database = PostgresJsDatabase<typeof schema>;

@Module({
  providers: [DrizzleProvider],
  exports: [DrizzleProvider],
})
export class DrizzleModule {}
