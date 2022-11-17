function addBook(name: GeneralName, isbn: ISBN, category: Category) : BookInstance {
  BookRepo.save(name, isbn, category);
  return bookInstance;
}
