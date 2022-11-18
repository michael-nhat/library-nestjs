import { Uuid } from '@library/shared/domain'
import { ensure, isString, matches, TinyTypeOf } from 'tiny-types';
import { ISBN } from '../../../../catalogue/src/lib/isbn';

export class BookId extends Uuid {
  // static generate(): BookId {
  //   return super.generate();
  // }
}

export class ISBN extends TinyTypeOf<string>() {
  private static readonly very_simple_ISBN_check = new RegExp('\\d{1,9}');
}

class Book {
  id: BookId,
  isbn: ISBN,
  category: Category,
  name: BookName,
  author: AuthorName,
  year: Year,
}
