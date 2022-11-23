import { Uuid } from "@library/shared/doomain"
import { Book } from './book.modelling';
import { BookStatus } from './BookStatus.type';


export class BookInstance{
  id: Uuid;
  bookInfo: Book;
  status: BookStatus;
}
