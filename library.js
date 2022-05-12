let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createCard(book) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    const removeButton = document.createElement('button');
    card.classList.add('card');
    removeButton.classList.add('remove');
    card.textContent = book.title;
    container.appendChild(card);
    card.appendChild(removeButton);
    console.log(book.title);
}

// open & close pop-up
function openForm() {
    document.querySelector('.disabler').style.display = "block";
    document.querySelector('.form-popup').style.display = "flex";
}

function closeForm() {
    document.querySelector('.disabler').style.display = "none";
    document.querySelector('.form-popup').style.display = "none";
    clearForm();
}

function clearForm() {
    title = '';
    author = '';
    pages = '';
    read = false;
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
}

const openButton = document.querySelector('.open-button');
const disabler = document.querySelector('.disabler');
openButton.addEventListener('click', openForm);
disabler.addEventListener('click', closeForm);

// store input values from form
let title;
let author;
let pages;
let read;
const enterButton = document.querySelector('.enter');
enterButton.addEventListener('click', () => {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked;

    // create new object in myLibrary and HTML div card
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    createCard(book);

    closeForm();
});

