type BookStatus = "achived" | "activated" | "pending"
class BookInstance{
  id: ID,
  bookId: ID,
  status: BookStatus,
}
