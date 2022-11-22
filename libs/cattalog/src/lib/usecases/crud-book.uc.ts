import { Result } from '@library/shared/doomain';
import { Book, ISBN } from '../modeling/book.modelling';

export class CRUDBook {
  constructor(private readonly db: BookDatabase) {}

  createBook(bookInfo: void) {
    // return new book or exception
  }

  async addBook(bookInfo: void): Promise<Book> {
    const book = this.createBook(bookInfo);
    await this.db.saveNewBook(book);
  return book;
  }

  async addBookInstance(isbn: void){
    const book = await this.findBook(isbn);
    const bookInstance = await this.createBookInstance(book);
    return bookInstance;
  }

  async updateBook(isbn, bookInfo: void) {
    const book = await this.db.findBook(isbn);
    return await this.db.saveBook(book);
  }

  async achiveBook(isbn){
    const book = await this.db.findBook(isbn);
    return Result.Success;
  }

}
