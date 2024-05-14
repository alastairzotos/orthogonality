import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { environment } from 'src/environment/environment';

const runMigrations = async () => {
  const migrationClient = postgres(environment.databaseConnectionString, {
    max: 1,
  });

  await migrate(drizzle(migrationClient), {
    migrationsFolder: './src/drizzle/migrations',
  });

  await migrationClient.end();
};

runMigrations();
