export default class LocalStorage {
  static loadBooks() {
    const books = localStorage.getItem('books');
    if (!books) return [];
    return JSON.parse(books);
  }

  static addBook(book) {
    const books = LocalStorage.loadBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = LocalStorage.loadBooks();
    const books2 = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books2));
  }
}
