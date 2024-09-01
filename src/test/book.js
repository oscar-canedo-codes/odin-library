/* HANDLES the creation of book objects and methods related to a book. */

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead;
};

module.exports = Book;
