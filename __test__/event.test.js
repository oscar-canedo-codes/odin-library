const { setupEventListeners, handleOutsideClick, handleFormSubmit, handleLibraryActions } = require('../src/test/event');
const { showModal, hideModal } = require('../src/test/modal');
const { myLibrary } = require('../src/test/library');

jest.mock('../src/test/modal');

describe('Event Handling Module', () => {
    beforeEach(() => {
        myLibrary.length = 0;

        document.body.innerHTML = `
      <button id="addBookButton"></button>
      <div id="modal"><span id="modalClose"></span></div>
      <form id="form">
        <input id="title" value="Test Book">
        <input id="author" value="Test Author">
        <input id="pages" value="100">
        <input id="read" type="checkbox">
        <button type="submit"></button>
      </form>
      <div id="library"></div>
    `;
    });

    test('should set up event listeners', () => {
        setupEventListeners();
        expect(document.getElementById('addBookButton').onclick).toBeDefined();
        expect(document.getElementById('modalClose').onclick).toBeDefined();
        expect(document.getElementById('form').onsubmit).toBeDefined();
        expect(document.getElementById('library').onclick).toBeDefined();
    });

    test('should handle outside click', () => {
        const modalElement = document.getElementById('modal');
        handleOutsideClick({ target: modalElement });
        expect(hideModal).toHaveBeenCalled();
    });

    test('handleFormSubmit adds a new book', () => {
        const mockReset = jest.fn();
        const event = {
            preventDefault: jest.fn(),
            target: { reset: mockReset }
        };
        handleFormSubmit(event);
        expect(myLibrary.length).toBe(1);
        expect(myLibrary[0].title).toBe('Test Book');
        expect(event.preventDefault).toHaveBeenCalled();
        expect(mockReset).toHaveBeenCalled();
    });

    test('handleLibraryActions toggles read status', () => {
        // Add a book to the library
        myLibrary.push({ title: 'Test Book', isRead: false, toggleReadStatus: jest.fn() });

        const toggleButton = document.createElement('button');
        toggleButton.classList.add('book__toggle-read');
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.dataset.index = '0';
        bookCard.appendChild(toggleButton);
        document.getElementById('library').appendChild(bookCard);

        handleLibraryActions({ target: toggleButton });

        expect(myLibrary[0].toggleReadStatus).toHaveBeenCalled();
    });

    test('handleLibraryActions removes a book', () => {
        // Add a book to the library
        myLibrary.push({ title: 'Test Book' });

        const removeButton = document.createElement('button');
        removeButton.classList.add('book__remove');
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.dataset.index = '0';
        bookCard.appendChild(removeButton);
        document.getElementById('library').appendChild(bookCard);

        handleLibraryActions({ target: removeButton });

        expect(myLibrary.length).toBe(0);
    });
});
