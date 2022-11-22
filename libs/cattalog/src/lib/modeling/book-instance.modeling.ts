import { Uuid } from "@library/shared/doomain"
import { Book } from './book.modelling';

export type BookStatus = "achived" | "activated" | "pending"

export class BookInstance{
  id: Uuid;
  bookInfo: Book;
  status: BookStatus;
}
