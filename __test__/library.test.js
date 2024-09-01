const { myLibrary, addBookToLibrary, removeBookFromLibrary } = require('../src/test/library');
const Book = require('../src/test/book');

describe('Library Module', () => {
    test('should add a book to the library', () => {
        const initialLength = myLibrary.length;
        const newBook = new Book('1984', 'George Orwell', 328, true);
        addBookToLibrary(newBook);
        expect(myLibrary.length).toBe(initialLength + 1);
        expect(myLibrary[myLibrary.length - 1]).toEqual(newBook);
    });

    test('should remove a book from the library', () => {
        const initialLength = myLibrary.length;
        removeBookFromLibrary(0);
        expect(myLibrary.length).toBe(initialLength - 1);
    });
});