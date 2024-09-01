/* MANAGE collection of books */

const Book = require('./book');

const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
    // other books...
];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}

module.exports = { myLibrary, addBookToLibrary, removeBookFromLibrary };