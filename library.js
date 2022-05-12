let myLibrary = [];

function Repertoire(title, composer, genre, keySig, playedBefore) {
    this.title = title;
    this.composer = composer;
    this.genre = genre;
    this.keySig = keySig;
    this.playedBefore = playedBefore;
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
    document.querySelector('#composer').value = '';
    document.querySelector('#genre').value = '';

    // NOTE TO SELF: change to dropdown selector
    document.querySelector('#key-sig').value = '';

    document.querySelector('#played-before').checked = false;
}

const openButton = document.querySelector('.open-button');
const disabler = document.querySelector('.disabler');
openButton.addEventListener('click', openForm);
disabler.addEventListener('click', closeForm);

// store input values from form
let title;
let composer;
let genre;
let keySig;
let playedBefore;
const enterButton = document.querySelector('.enter');
enterButton.addEventListener('click', () => {
    title = document.querySelector('#title').value;
    composer = document.querySelector('#composer').value;
    genre = document.querySelector('#genre').value;
    keySig = document.querySelector('#key-sig').value;
    playedBefore = document.querySelector('#played-before').checked;

    // create new object in myLibrary and HTML div card
    const book = new Repertoire(title, composer, genre, keySig, playedBefore);
    myLibrary.push(book);
    createCard(book);

    closeForm();
});

