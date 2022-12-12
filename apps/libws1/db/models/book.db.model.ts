import { Model } from 'objection';
import { BaseModel } from './base.model';
import { BookInstanceModel } from './book-instance.db.model';

export class BookModel extends BaseModel{
  static tableName = 'book';

  name: string;
  isbn: string;
  category: string;
  author?: string;
  years?: number;
  available_quantity: number;
  total: number;
  lost; number;

  static RelationMappings = {
    owner: {
      relation: Model.HasManyRelation,
      modelClass: BookInstanceModel,
      join: {
        from: 'book.id',
        to: 'book_instance.book_id'
      }
    }
  }
}
