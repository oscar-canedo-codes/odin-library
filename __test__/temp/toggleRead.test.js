describe('Library Functionality', () => {
    test.todo('should add a book to the library');
    test.todo('should increase the library length by one when a book is added');
    test('should add the very first book to an empty library', () => {
        const book = { title: 'Blood Meridian', author: 'Cormac McCarthy', read: false };
        addBookToLibrary(book);
        expect(library).toContain(book);
    });
    test.todo('should not add a book without a title and return an error');
});
