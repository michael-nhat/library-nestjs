import 'dotenv/config';
import  {Knex, knex} from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import { ConfigModule } from '@nestjs/config';
module.exports = {
  client: 'pg',
  // connection: process.env.DATABASE_URL,
  connection: {
    // filename: "./example.sqlite",
    database:  'lib1',
    // userName: 'postgres',
    password: 'postgres',
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    ssl: false,
  },
  migrations: {
    directory: './migrations',
    stub: './stub/migration.stub',
  },
  seeds: {
    directory: './seeds',
    stub: './stub/seed.stub'
  },
  ...knexSnakeCaseMappers()
} as Knex.Config;
