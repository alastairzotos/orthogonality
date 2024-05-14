import { defineConfig } from 'drizzle-kit';
import { environment } from 'src/environment/environment';

export default defineConfig({
  dbCredentials: {
    url: environment.databaseConnectionString,
  },
  dialect: 'postgresql',
  schema: './src/drizzle/schemas.ts',
  out: './src/drizzle/migrations',
  strict: true,
  verbose: true,
});
