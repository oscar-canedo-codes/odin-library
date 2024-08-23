const library = [];

function addBookToLibrary(book) {
    if (Array.isArray(book)) {
        // IF book is an array, ADD each book individually
        book.forEach(b => library.push(b));
    } else {
        // IF book is a single object, ADD it directly
        library.push(book);
    }

}

module.exports = { addBookToLibrary, library };
