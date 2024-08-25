const { addBookToLibrary, library } = require("../src/library");

describe("addBookToLibrary", () => {
    beforeEach(() => {
        // CLEAR the library before each test to ensure a clean slate
        library.length = 0;
    });

    it("should add a book to the library", () => {
        const book = {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            read: false,
        };

        addBookToLibrary(book);

        expect(library).toContain(book);
    });

    it("should increase the library length by one when a book is added", () => {
        const book = { title: "1984", author: "George Orwell", read: false };

        addBookToLibrary(book);

        expect(library.length).toBe(1);
    });
    it("should add all books, and the library length should reflect the number of books added", () => {
        const book = [
            { title: "The Joke", author: "Milan Kundera", read: true },
            { title: "Llano en LLamas", author: "Juan Rulfo", read: true },
        ];

        addBookToLibrary(book);

        expect(library.length).toBe(2);
    });
    it("should add the very first book to an empty library", () => {
        const book = {
            title: "Blood Meridian",
            author: "Cormac McCarthy",
            read: false,
        };

        addBookToLibrary(book);

        expect(library).toContain(book);
    });

    it("should not add a book without a title and return an error", () => {
        const book = { title: "", author: "Unknown Author", read: false };

        const result = addBookToLibrary(book); // Assuming the function returns a boolean or error message

        expect(result).toBe(false); // or expect(result).toBe('Error message');
        expect(library).not.toContain(book);
        expect(library.length).toBe(0); // Assuming the library was initially empty
    });
});
