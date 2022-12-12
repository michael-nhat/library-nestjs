const Knex = require('knex');

// You can dynamically pass the database name
// as a command-line argument, or obtain it from
// a .env file
const databaseName =
  process.argv.slice(2).length > 0 ? process.argv.slice(2) : 'libraryws1';

const connection = {
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: 5432,
  ssl: false,
};

async function main() {
  let knex = Knex({
    client: 'pg',
    connection,
  });

  await knex.raw('DROP DATABASE IF EXISTS ?? ', databaseName);
  // Lets create our database if it does not exist
  await knex.raw('CREATE DATABASE ?? ', databaseName);

  // Now that our database is known, let's create another knex object
  // with database name specified so that we can run our migrations
  // knex = Knex({
  //   client: 'pg',
  //   connection: {
  //     ...connection,
  //     database: databaseName,
  //   }
  // });

  // Now we can happily run our migrations
  // await knex.migrate.latest();

  // Done!!
}

main().catch(console.log).then(process.exit);
