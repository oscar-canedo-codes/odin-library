Overview

Create a JavaScript function to iterate over a book array and render each book as a card or table entry on the page. Implement a "NEW BOOK" button to trigger a form for adding new books. Handle form submission, including preventing default behavior. Add buttons to remove or mark books as read.
Requirements

    Display Books:
        Create a function to render book data as cards or table rows.
    Add Book Form:
        Implement a form for inputting book details (author, title, pages, read status).
    Form Submission:
        Handle form submission, preventing default behavior.
        Process form data to add a new book.
    Remove Book:
        Add buttons to remove books from the display and underlying data structure.
    Toggle Read Status:
        Implement functionality to change a book's read status.
    DOM-Data Association:
        Connect DOM elements to book objects for manipulation.

Additional Notes

    Data persistence is not required for this assignment.
    Consider using data-attributes to link DOM elements and book objects.
    Explore using <dialog> or similar methods for displaying the book form.

document.addEventListener('DOMContentLoaded', () => {

    /* setupEventListeners(): Handles all the event listeners for the page.
    displayBooks(): Renders the books initially stored in myLibrary */

    // DISPLAY CARD
    const library = document.getElementById("library");

    // EVENT CLICK -> BUTTON
    const addBookButton = document.getElementById("addBookButton");

    // MODAL -> FORM
    const addBookModal = document.getElementById("modal");

    // FORM -> ADD NEW BOOK
    const addBookForm = document.getElementById("form");

    // MODAL: CLOSE
    const closeButton = document.getElementById("modalClose");

    // VALIDATION
    const errorMsg = document.getElementById("errorMsg");

    /* ARRAY -> Book Objects  */
    const myLibrary = [
        new Book("J.R.R. Tolkien", "The Hobbit", 295, false),
        new Book("Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 216, true),
        new Book("Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 216, true),
        new Book("Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 216, true),
        new Book("Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 216, true),
        new Book("Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 216, true),
    ];

    /* CONSTRUCTOR */
    function Book(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    /* PROTOTYPE */
    Book.prototype.toggleRead = function () {
        this.isRead = !this.isRead;
    }


    /* FUNCTION -> STORE new books in array: "myLibrary"
        // GET user's input
        // STORE in new book objects into an array  */
    const addBook = (book) => {
        const newBook = new Book(book.title, book.author, book.pages, book.isRead);
        myLibrary.push(newBook);
        displayBook();
    };

    /* FUNCTION -> LOOP through array and DISPLAY each book as a card */

    /* DISPLAY */
    const displayBook = () => {

        /* LOOP */
        myLibrary.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book");
            // TARGET for removal
            bookCard.dataset.index = index;

            // POPULATE card with book information
            bookCard.innerHTML = `
            <h3 class="book__title">${book.title}</h3>
            <p class="book__author">by ${book.author}</p>
            <p class="book__pages">${book.pages} pages</p>
            <p class="book__read">${book.isRead ? "Read" : "Not read yet"}</p>
            <button class="book__toggle-read">Toggle Read</button>
            <button class="book__remove">Remove</button>`;
            library.appendChild(bookCard);
        });
    };

    /* EVENT HANDLERS */

    /* MODAL */
    if (addBookButton && addBookModal && closeButton) {
        // FUNCTION -> SHOW the modal
        const showModal = () => {
            addBookModal.classList.remove('hidden');
        };

        // FUNCTION -> HIDE the modal
        const hideModal = () => {
            addBookModal.classList.add('hidden');
        };

        // EVENT LISTENER -> SHOW the modal when the "Add Book" button is clicked
        addBookButton.addEventListener('click', showModal);

        // EVENT LISTENER -> HIDE the modal when the close button is clicked
        closeButton.addEventListener('click', hideModal);

        // Event listener to hide the modal when clicking outside the modal
        window.addEventListener('click', (event) => {
            if (event.target === addBookModal) {
                hideModal();
            }
        });

        /* FORM */
        addBookForm.addEventListener("submit", (event) => {
            // PREVENT page reload
            event.preventDefault();

            // GET form values
            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const pages = document.getElementById("pages").value;
            const isRead = document.getElementById("read").checked;

            const newBook = new Book(title, author, pages, isRead);
            myLibrary.push(newBook);

            addBook(newBook);

            // RENDER display
            displayBook();
            // HIDE modal
            hideModal();
            addBookForm.reset();
        });
    } else {
        console.error("One or more elements are missing:", { addBookButton, addBookModal, closeButton });
    }

    /* TOGGLE -> "isRead" */

    library.addEventListener("click", (event) => {
        if (event.target.classList.contains("book__toggle-read")) {
            const index = event.target.closest(".book").dataset.index;
            myLibrary[index].toggleRead();

            // Update read status text within the specific card
            const bookCard = event.target.closest(".book");
            const readStatusElement = bookCard.querySelector(".book__read");
            readStatusElement.textContent = myLibrary[index].isRead ? "Read" : "Not read yet";
        }

        if (event.target.classList.contains("book__remove")) {
            const index = event.target.closest(".book").dataset.index;
            myLibrary.splice(index, 1);
            displayBook();
        }
    });

});
