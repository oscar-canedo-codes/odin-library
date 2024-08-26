const { displayBooks } = require("../src/tests/renderDisplay");

describe("displayBooks", () => {
    // SET UP the DOM element before each test
    beforeEach(() => {
        // CLEAR any previous DOM elements and set up a new container
        document.body.innerHTML = '<div id="library-container"></div>';
    });

    it("should render a single book correctly", () => {
        const books = [
            { title: "1984", author: "George Orwell", pages: 328, read: true },
        ];

        displayBooks(books);

        const libraryContainer = document.getElementById("library-container");
        const bookElements = libraryContainer.getElementsByClassName("book");

        // CHECK if the library container contains one book element
        expect(bookElements.length).toBe(1);

        // CHECK the content of the first book element
        const bookElement = bookElements[0];
        expect(bookElement.querySelector("h3").textContent).toBe("1984");
        expect(bookElement.querySelector("p").textContent).toContain(
            "George Orwell"
        );
        expect(bookElement.querySelector("p:nth-of-type(2)").textContent).toContain(
            "328"
        );
        expect(bookElement.querySelector("p:nth-of-type(3)").textContent).toContain(
            "Yes"
        );
    });

    it("should render multiple books correctly", () => {
        const books = [
            { title: "1984", author: "George Orwell", pages: 328, read: true },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                pages: 281,
                read: false,
            },
        ];

        displayBooks(books);

        const libraryContainer = document.getElementById("library-container");
        const bookElements = libraryContainer.getElementsByClassName("book");

        // CHECK if the library container contains two book elements
        expect(bookElements.length).toBe(2);

        // CHECK the content of the first book element
        const firstBook = bookElements[0];
        expect(firstBook.querySelector("h3").textContent).toBe("1984");
        expect(firstBook.querySelector("p").textContent).toContain("George Orwell");
        expect(firstBook.querySelector("p:nth-of-type(2)").textContent).toContain(
            "328"
        );
        expect(firstBook.querySelector("p:nth-of-type(3)").textContent).toContain(
            "Yes"
        );

        // CHECK the content of the second book element
        const secondBook = bookElements[1];
        expect(secondBook.querySelector("h3").textContent).toBe(
            "To Kill a Mockingbird"
        );
        expect(secondBook.querySelector("p").textContent).toContain("Harper Lee");
        expect(secondBook.querySelector("p:nth-of-type(2)").textContent).toContain(
            "281"
        );
        expect(secondBook.querySelector("p:nth-of-type(3)").textContent).toContain(
            "No"
        );
    });

    it("should append new books to the library container without clearing existing ones", () => {
        const initialBooks = [
            { title: "1984", author: "George Orwell", pages: 328, read: true },
        ];

        // First render
        displayBooks(initialBooks);

        const newBooks = [
            {
                title: "Brave New World",
                author: "Aldous Huxley",
                pages: 268,
                read: false,
            },
        ];

        // ADD new books without clearing
        displayBooks(newBooks);

        const libraryContainer = document.getElementById("library-container");
        const bookElements = libraryContainer.getElementsByClassName("book");

        // CHECK if the library container now contains both book elements
        expect(bookElements.length).toBe(2);
    });
});
