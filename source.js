const addBook = document.getElementById('newBook'); // + Add book button
const form = document.getElementById('form'); // toggling the form
const fade = document.getElementById('fade'); // ^ toggles the background fade
const submit = document.getElementById('submit') // submit button in form
const library = document.getElementById('library') // library div element

let myLibrary = []; // library array

let bookTitle = document.getElementById('bookTitle');
let bookAuthor = document.getElementById('bookAuthor');
let bookPages = document.getElementById('bookPages');
let bookRead = document.getElementById('bookRead');

addBook.addEventListener('click', () => {
    formToggle();
});

submit.addEventListener('click', () => {
    newBook();
    showBook();
    formToggle();
});

function Book(title, author, pages, read) { //object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function newBook() { // adds new book to library via Bookmaker constructor
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    myLibrary.push(book);
};

function showBook() {
    let shelf = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('button');
    let removeButton = document.createElement('button');
    let removeTarget = bookTitle.value.split(" ").join(""); // creates string thehobbit to use elsewhere
    let readTarget = removeTarget + 'Erf';
    title.innerText = `"${bookTitle.value}"`;
    author.innerText = bookAuthor.value;
    pages.innerText = bookPages.value + " pages";
    shelf.append(title);
    shelf.append(author);
    shelf.append(pages)
    read.classList.add(readTarget);
    if (bookRead.checked) {
        read.innerText = 'Read';
        read.classList.add('read');
    }
    else {
        read.innerText = 'Not read';
        read.classList.add('notRead');
    }
    shelf.append(read);
    //remove stuff
    removeButton.classList.add(removeTarget);
    removeButton.classList.add('removeButton');
    removeButton.innerText = 'Remove';
    shelf.append(removeButton);
    //append it all to the library
    library.append(shelf);
    //add the event listener for read or not button and the remove button 
    readListener(readTarget);
    removeListener(removeTarget, shelf);
}

function removeListener(target, div) {
    let remove = document.querySelector(`.${target}`);
    remove.addEventListener('click', () => {
        div.remove();
    });
};

function readListener(target) {
    let readButton = document.querySelector(`.${target}`);
    readButton.addEventListener('click', () => {
        let text = readButton.innerText;
        if (text == 'Read') {
            readButton.innerText = 'Not read';
            readButton.classList.remove('read');
            readButton.classList.add('notRead');
        }
        else {
            readButton.innerText = 'Read';
            readButton.classList.remove('notRead');
            readButton.classList.add('read');
        }
    })
};

function formToggle() {
    form.classList.toggle('formDisplay');
    fade.classList.toggle('fadeDisplay');



}