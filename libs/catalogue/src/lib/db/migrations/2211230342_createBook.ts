import { Knex } from 'knex';

const bookTable = 'book';
const bookInstanceTable = 'book_instance';
// migrate must dont have ts file
// migrate:up/down must write file.extension
// that 's all
export async function up(knex: Knex) {
  await knex.schema.createTable(bookTable, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments().primary();
    t.string('name').notNullable();
    t.string('isbn').notNullable();
    t.string('category').notNullable();
    t.integer('years');
    t.integer('available_quantity').notNullable();
    t.integer('total').notNullable();
    t.integer('lost').notNullable();
  });

  await knex.schema.createTable(bookInstanceTable, (t) => {
    t.increments().primary();
    t.string('status');
    t.integer('book_id');
  });

  await knex.schema.table('book_instance', (t) => {
    t.foreign('book_id').references('id').inTable('book')
    .onDelete('CASCADE').onUpdate('CASCADE');
  });
}

// with error: alter table "book_instance" drop constraint "book_instance_book_id_foreign"

export async function down(knex: Knex) {
  await knex.schema.table('book_instance', t => {
    t.dropForeign('book_id');
  });
  await knex.schema.dropTable(bookTable);
  await knex.schema.dropTable(bookInstanceTable);
}
