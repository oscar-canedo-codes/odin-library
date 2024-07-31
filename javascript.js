/* USER INTERFACE */

// EVENT CLICK
const addBookBtn = document.getElementById('addBookBtn');

// MODAL ADD BOOK
const addBookModal = document.getElementById('modal');

// FORM ADD NEW BOOK
const addBookForm = document.getElementById('form')

// VALIDATION
const errorMsg = document.getElementById('errorMsg');

// DISPLAY CARD
const booksGrid = document.getElementById('booksGrid')



1. /* STORE book (objects) in array "myLibrary"
ADD function to the script (not the constructor)
    // GET user's input
    // STORE in new book objects into an array
*/

/* CONSTRUCTOR */
const myLibrary = [];

function Book(author, title, numberOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = false;
    this.sayInfo = function () {
        console.log(`${title} by ${author}, is ${numberOfPages}, ${isRead}`)
    };

    theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
}

function addBookToLibrary() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    return new Book(title, author, pages, isRead)

}

/* PROTOTYPE */
// FUNCTION -> that toggles a book’s read status on your Book prototype instance.


2. /* 
Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display. */

/* DISPLAY */

3. /* Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.How you decide to display this form is up to you.For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. This is where event.preventDefault(); will come in handy. Check out the documentation for event.preventDefault and see how you can solve this issue!
    Add a button on each book’s display to remove the book from the library. */

// LOOP forEach books array to display in cards

4. /*     You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
     */

5. /* Add a button on each book’s display to change its read status.
    
        To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
     */

/* EVENT HANDLERS */

//FORM -> ADD NEW BOOK 
// event.preventDefault();

// UPDATE display
// REMOVE book object
// TOGGLE read status
