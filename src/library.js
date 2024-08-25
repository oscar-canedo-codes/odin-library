const library = [];

function addBookToLibrary(book) {
    if (Array.isArray(book)) {
        // If `book` is an array, iterate and add each book individually
        book.forEach(b => {
            if (!b.title) {
                throw new Error('Each book must have a title');
            }
            library.push(b);
        });
    } else {
        // If `book` is a single object, check for a title before adding
        if (!book.title) {
            throw new Error('Book must have a title');
        }
        library.push(book);
    }
}

module.exports = { addBookToLibrary, library };
