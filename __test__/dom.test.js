const { createBookCard, displayBooks } = require('../src/test/dom');
const Book = require('../src/test/book');

describe('DOM Manipulation Module', () => {
    test('should create a book card with correct content', () => {
        const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
        const card = createBookCard(book, 0);

        expect(card.querySelector('.book__title').textContent).toBe('The Hobbit');
        expect(card.querySelector('.book__author').textContent).toBe('by J.R.R. Tolkien');
        expect(card.querySelector('.book__pages').textContent).toBe('295 pages');
        expect(card.querySelector('.book__read').textContent).toBe('Not read yet');
        expect(card.querySelector('.book__toggle-read')).toBeTruthy();
        expect(card.querySelector('.book__remove')).toBeTruthy();
    });

    test('should display books', () => {
        document.body.innerHTML = '<div id="library"></div>';
        const mockLibrary = [
            new Book('The Hobbit', 'J.R.R. Tolkien', 295, false),
            new Book('1984', 'George Orwell', 328, true)
        ];
        displayBooks(mockLibrary);
        const libraryElement = document.getElementById('library');
        expect(libraryElement.children.length).toBe(2);
    });
});