import { Knex } from 'knex';
import { BookInstanceModel } from '../../models/book-instance.db.model';

export async function seed(knex: Knex): Promise<any> {
  await BookInstanceModel.query(knex).delete();
  await BookInstanceModel.query(knex).insert([
    {
      status: 'activated',
      book_id: 51,
    },
    {
      status: 'activated',
      book_id: 51,
    },
    {
      status: 'activated',
      book_id: 51,
    },
    {
      status: 'activated',
      book_id: 51,
    },
  ]);
}
