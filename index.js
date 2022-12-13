import Book from './modules/book.js';
import Client from './modules/client.js';
import LocalStorage from './modules/local-storage.js';
import { DateTime } from './modules/luxon.js';

const navLinks = document.querySelectorAll('.nav-link');
const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book');

const hideOtherSections = (currentSection) => {
  const sections = [
    document.getElementById('books-section'),
    document.getElementById('add-section'),
    document.getElementById('contact-section'),
  ];
  currentSection.classList.remove('d-none');

  // hides sections that are not currently being viewed
  const hideSections = sections.filter((section) => section != currentSection);
  hideSections.forEach((section) => section.classList.add('d-none'));
};

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    const currentSection = document.getElementById(e.target.dataset.section);
    hideOtherSections(currentSection);
  });
});

bookList.addEventListener('click', (e) => {
  const element = e.target;
  if (!element.classList.contains('remove-btn')) return;

  const bookId = Number(element.dataset.id);
  LocalStorage.removeBook(bookId);
  Client.removeBook(element);
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const title = formData.get('title');
  const author = formData.get('author');
  const book = new Book(title, author);

  LocalStorage.addBook(book);
  Client.addBook(book);

  addBookForm.reset();
});

const dateFn = () => {
  const datetime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('datetime').textContent = datetime;
};
setInterval(dateFn);

document.addEventListener('DOMContentLoaded', Client.loadBooks);
