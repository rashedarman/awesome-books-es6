export default function Book(title, author) {
  this.id = Date.now();
  this.title = title;
  this.author = author;
}
