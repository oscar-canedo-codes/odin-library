/* HANDLE EVENTS: ADD books, REMOVE books, TOGGLE read status */

const { showModal, hideModal } = require('./modal');
const { myLibrary, addBookToLibrary, removeBookFromLibrary } = require('./library');
const { displayBooks } = require('./dom');
const Book = require('./book');

function setupEventListeners() {
    const addBookButton = document.getElementById("addBookButton");
    const closeModal = document.getElementById("modalClose");
    const addBookForm = document.getElementById("form");
    const library = document.getElementById("library");

    addBookButton.addEventListener('click', showModal);
    closeModal.addEventListener('click', hideModal);
    window.addEventListener('click', handleOutsideClick);
    addBookForm.addEventListener('submit', handleFormSubmit);
    library.addEventListener('click', handleLibraryActions);
}

function handleOutsideClick(event) {
    const addBookModal = document.getElementById("modal");
    if (event.target === addBookModal) {
        hideModal();
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("read").checked;
    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    displayBooks(myLibrary);
    hideModal();
    event.target.reset();
}

function handleLibraryActions(event) {
    const target = event.target;
    const bookCard = target.closest('.book');
    const index = bookCard.dataset.index;
    if (target.classList.contains('book__toggle-read')) {
        myLibrary[index].toggleReadStatus();
        displayBooks(myLibrary);
    }
    if (target.classList.contains('book__remove')) {
        removeBookFromLibrary(index);
        displayBooks(myLibrary);
    }
}

module.exports = { setupEventListeners, handleOutsideClick, handleFormSubmit, handleLibraryActions };