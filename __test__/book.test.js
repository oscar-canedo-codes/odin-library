const Book = require("../src/test/book");

describe('Book Module', () => {
    let book;

    beforeEach(() => {
        book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
    });

    test('should create a book with the correct properties', () => {
        expect(book.title).toBe('The Hobbit');
        expect(book.author).toBe('J.R.R. Tolkien');
        expect(book.pages).toBe(295);
        expect(book.isRead).toBe(false);
    });

    test('should toggle read status', () => {
        book.toggleReadStatus();
        expect(book.isRead).toBe(true);
        book.toggleReadStatus();
        expect(book.isRead).toBe(false);
    });
});