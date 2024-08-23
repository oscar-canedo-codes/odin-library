const { addBookToLibrary, library } = require('../src/library');

describe('addBookToLibrary', () => {
    beforeEach(() => {
        // CLEAR the library before each test to ensure a clean slate
        library.length = 0;
    });

    it('should add a book to the library', () => {
        const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', read: false };

        addBookToLibrary(book);

        expect(library).toContain(book);
    });

    it('should increase the library length by one when a book is added', () => {
        const book = { title: '1984', author: 'George Orwell', read: false };

        addBookToLibrary(book);

        expect(library.length).toBe(1);
    });
    it('should add all books, and the library length should reflect the number of books added', () => {
        const book =
            [
                { title: 'The Joke', author: 'Milan Kundera', read: true },
                { title: 'Llano en LLamas', author: 'Juan Rulfo', read: true }];

        addBookToLibrary(book);

        expect(library.length).toBe(2);
    })
});
