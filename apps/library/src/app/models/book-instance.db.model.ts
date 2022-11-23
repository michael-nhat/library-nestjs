import { Model } from 'objection';
import { BaseModel } from './base.model';
import { BookStatus } from '../../../../../libs/cattalog/src/lib/modeling/BookStatus.type';
import { BookModel } from './book.db.model';
import { number } from 'fp-ts-std';

export class BookInstanceModel extends BaseModel {
  static tableName = 'book_instance';

  status: BookStatus;
  book: BookModel;
  book_id: number;

  static RelationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/book.db.model`,
      join: {
        from: 'book_instance.book_id',
        to: 'book.id',
      },
    },
  };
}
