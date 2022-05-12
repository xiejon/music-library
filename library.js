let myLibrary = [
    {
        title : "Harry Potter"
    },
    {
        title : "Wizard of Oz"
    }
];

function Book(title, author, pages, read) {
    let info;

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    if (read) {
        info = `${title} by ${author}, ${pages} pages, read`;
    } else {
        info = `${title} by ${author}, ${pages} pages, not read yet`;
    }
    return info;
}

function addBookToLibrary() {
    let input = prompt("Title of Book?", '');
    myLibrary.push(input);
}

myLibrary.forEach(book => {
    createCard(book);
});

function createCard(book) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = book.title;
    container.appendChild(card);
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
const enterButton = document.querySelector('.enter');
let title;
let author;
let pages;
let read;
enterButton.addEventListener('click', () => {
    title = document.querySelector('#title').value;
    console.log(title);
    closeForm();
});