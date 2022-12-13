import LocalStorage from './local-storage.js';

export default class Client {
  static loadBooks() {
    const books = LocalStorage.loadBooks();
    books.forEach((book) => Client.addBook(book));
  }

  static addBook(book) {
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.innerHTML = `
      <p>"${book.title}" by ${book.author}</p>
      <button data-id=${book.id} class="btn-primary remove-btn">
        Remove
      </button>
    `;
    bookList.appendChild(li);
  }

  static removeBook(element) {
    element.closest('li').remove();
  }
}
