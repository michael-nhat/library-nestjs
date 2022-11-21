import { BookModel } from 'apps/library/src/app/models/book.db.model';
import { Model } from 'objection';
import { BaseModel } from './base.model';

export class BookInstanceModel extends BaseModel{
  static tableName = 'book_instance';

  name: string;
  isbn: string;
  category: string;
  author: string;
  years: number;
  status: boolean;

  static RelationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: BookModel,
      join: {
        from: 'book_instance.book_id',
        to: 'book.id'
      }
    }
  }
}
