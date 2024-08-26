function displayBooks(books) {
    const libraryContainer = document.getElementById('library-container');


    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        `;
        libraryContainer.appendChild(bookElement);
    });
}

module.exports = { displayBooks };
