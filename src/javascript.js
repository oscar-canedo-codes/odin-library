// 1. INITIAL SETUP & EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // HANDLE all event listeners
    setupEventListeners();
    // RENDER books initially stored in 'myLibrary'
    displayBooks();
});

// 2. DEFINE 'Book' constructor and Prototype Methods

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead;
};

// 3. SETUP Event Listeners

function setupEventListeners() {
    const addBookButton = document.getElementById("addBookButton");
    const closeModal = document.getElementById("modalClose");
    const addBookForm = document.getElementById("form");
    const library = document.getElementById("library");

    // OPEN Modal
    addBookButton.addEventListener('click', showModal);
    // CLOSE Modal
    closeModal.addEventListener('click', hideModal);
    // CLOSES Modal IF clicking outside
    window.addEventListener('click', handleOutsideClick);
    // SUBMIT form to add new books
    addBookForm.addEventListener('submit', handleFormSubmit);
    // TOGGLES read status and remove
    library.addEventListener('click', handleLibraryActions);
}

// 4. Modal Functions
function showModal() {
    const addBookModal = document.getElementById("modal");
    addBookModal.classList.remove('hidden');
}

function hideModal() {
    const addBookModal = document.getElementById("modal");
    addBookModal.classList.add('hidden');
}

function handleOutsideClick(event) {
    const addBookModal = document.getElementById("modal");
    if (event.target === addBookModal) {
        hideModal();
    }
}

// 5. FORM handling

function handleFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);
    hideModal();
    event.target.reset();
}

/* 6. Library and Card Display */
const myLibrary = [
    new Book("J.R.R. Tolkien", "The Hobbit", 295, false),
    // other books...
];

function displayBooks() {
    const library = document.getElementById("library");
    library.innerHTML = ''; // Clear existing content
    myLibrary.forEach((book, index) => {
        const bookCard = createBookCard(book, index);
        library.appendChild(bookCard);
    });
}

function createBookCard(book, index) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.dataset.index = index;

    bookCard.innerHTML = `
        <h3 class="book__title">${book.title}</h3>
        <p class="book__author">by ${book.author}</p>
        <p class="book__pages">${book.pages} pages</p>
        <p class="book__read">${book.isRead ? "Read" : "Not read yet"}</p>
        <button class="book__toggle-read">Toggle Read</button>
        <button class="book__remove">Remove</button>
    `;

    return bookCard;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks(); // Update display after adding
}

/* 7. HANDLE Library ACTIONS */
function handleLibraryActions(event) {
    const target = event.target;
    const bookCard = target.closest('.book');
    const index = bookCard.dataset.index;

    if (target.classList.contains('book__toggle-read')) {
        myLibrary[index].toggleReadStatus();
        displayBooks();
    }

    if (target.classList.contains('book__remove')) {
        removeBookFromLibrary(index);
        displayBooks();
    }
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}