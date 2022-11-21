import {Knex, knex}  from 'knex';
import { TagModel } from '../../models/tag.model';

export async function seed(knex: Knex): Promise<any> {
  console.log("why it run 8888");
  return await TagModel.query(knex).insert([
    {
      name: 'Workout'
    },
    {
      name: 'Food'
    },
    {
      name: 'Diary'
    },
    {
      name: 'Cinema'
    },
    {
      name: 'Books'
    }
  ]);
}
