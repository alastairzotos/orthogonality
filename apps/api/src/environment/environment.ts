import { config } from 'dotenv';

config();

export interface Environment {
  databaseConnectionString: string;
}

export const environment: Environment = {
  databaseConnectionString: process.env.DB_CONNECTION_STRING as string,
};
