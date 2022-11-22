import { BookModel } from 'apps/library/src/app/models/book.db.model';
import { Model } from 'objection';
import { BaseModel } from './base.model';
import { BookStatus } from '../../../../../libs/cattalog/src/lib/modeling/book-instance.modeling';

export class BookInstanceModel extends BaseModel{
  static tableName = 'book_instance';

  status: BookStatus;

  static RelationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: BookModel,
      join: {
        from: 'book_instance.book_id',
        to: 'book.id',
      }
    }
  }
}
