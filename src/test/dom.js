/* UPDATE HTML */

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

function displayBooks(library) {
    const libraryElement = document.getElementById("library");
    libraryElement.innerHTML = ''; // Clear existing content
    library.forEach((book, index) => {
        const bookCard = createBookCard(book, index);
        libraryElement.appendChild(bookCard);
    });
}

module.exports = { createBookCard, displayBooks };
