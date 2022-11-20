import { Uuid } from '@library/shared/domain';
import { LengthMaxStringP, NotEmptyStringP, Year } from '@library/shared/doomain';
import { ensure, isString, matches, TinyTypeOf, Predicate, isNumber } from 'tiny-types';

export class BookId extends Uuid {
  static generate(): BookId {
    return super.generate();
  }
}

export class Category extends TinyTypeOf<string>() {
  constructor(categoryName: string) {
    super(categoryName);
    ensure(
      'Category',
      categoryName,
      isString(),
      NotEmptyStringP,
      LengthMaxStringP(30)
    );
    // must be in available category??
  }
}
export class BookName extends TinyTypeOf<string>() {
  constructor(name: string) {
    super(name);
    ensure('BookName', name, isString(),NotEmptyStringP,);
  }
}

export class ISBN extends TinyTypeOf<string>() {
  private static readonly very_simple_ISBN_check = new RegExp('\\d{1,9}');
  constructor(isbn: string) {
    super(isbn.trim());
    ensure(
      'ISBN',
      isbn.trim(),
      isString(),
      matches(ISBN.very_simple_ISBN_check)
    );
  }
}

export class PeoleName extends TinyTypeOf<string>() {
  constructor(peopleName: string) {
    super(peopleName);
    ensure(
      'PeopleName',
      peopleName,
      isString(),
      NotEmptyStringP,
      LengthMaxStringP(100),
    );
  }
}

export class Book {
  id: BookId;
  isbn: ISBN;
  category: Category;
  name: BookName;
  author: PeoleName;
  year: Year;
}
