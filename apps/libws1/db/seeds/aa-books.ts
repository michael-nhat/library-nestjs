import { Knex } from 'knex';
import { BookModel } from '../models/book.db.model';

export async function seed(knex: Knex): Promise<any> {
  await BookModel.query(knex).del();
  await knex.raw(`ALTER SEQUENCE ${BookModel.tableName}_id_seq RESTART WITH 1`);
  await BookModel.query(knex).insert([
    {
      name: 'Workout',
      isbn: '1',
      category: 'history',
      available_quantity: 10,
      total: 10,
      lost: 0,
    },
    {
      name: '10 funny',
      isbn: '2',
      category: 'physical',
      available_quantity: 10,
      total: 10,
      lost: 0,
    },
    {
      name: 'Web programing',
      isbn: '3',
      category: 'history',
      available_quantity: 10,
      total: 10,
      lost: 0,
    },
    {
      name: 'How to talk funny with people',
      isbn: '4',
      category: 'biology',
      available_quantity: 10,
      total: 10,
      lost: 0,
    },
    {
      name: 'Talk easily',
      isbn: '5',
      category: 'geography',
      available_quantity: 10,
      total: 10,
      lost: 0,
    }
  ]);
}
