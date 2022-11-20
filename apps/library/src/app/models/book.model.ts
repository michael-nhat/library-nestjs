import { BaseModel } from './base.model';

export class BookModel extends BaseModel{
  static tableName = 'tags';

  name: string;
  isbn: string;
  category: string;
  author: string;
  years: number;
}
