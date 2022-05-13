let myLibrary = [];

function Repertoire(title, composer, genre, keySig, playedBefore, indexVal) {
    this.title = title;
    this.composer = composer;
    this.genre = genre;
    this.keySig = keySig;
    this.playedBefore = playedBefore;
    this.indexVal = indexVal;
}

function createCard(music) {
    const container = document.querySelector('.cards-container');
    const card = document.createElement('div');
    const removeButton = document.createElement('button');
    const title = document.createElement('p');
    const composer = document.createElement('p');
    const genre = document.createElement('p');
    const keySig = document.createElement('p');
    const playedButton = document.createElement('button');
    card.classList.add('card');
    removeButton.classList.add('remove');
    playedButton.classList.add('played');

    // add title, composer, etc. to card
    title.textContent = music.title;
    composer.textContent = music.composer;
    genre.textContent = music.genre;
    keySig.textContent = music.keySig;
    if (music.playedBefore) {
        playedButton.textContent = "PLAYED";
    } else {
        playedButton.textContent = "NEW";
    }
    removeButton.textContent = "REMOVE";
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(composer);
    card.appendChild(genre);
    card.appendChild(keySig);
    card.appendChild(playedButton);
    card.appendChild(removeButton);

    // add event listener when remove is clicked
    removeCard();
    
    // change played status when button is clicked
    changePlayedStatus();
}

// remove card button
function deleteCard() {
    this.parentElement.remove();
    console.log(this.indexVal);
    
    // remove object from myLibrary
    myLibrary.splice(this.indexVal, 1);
}
function removeCard() {
    const removeButtons = document.querySelectorAll('.remove');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', deleteCard);
    }
}

// change 'new' to 'played' when clicked, vice versa
function changeToPlayed(button) {
    if (this.textContent === "NEW") {
        this.textContent = "PLAYED";
    } else {
        this.textContent = "NEW";
    }
}
function changePlayedStatus() {
    const playedButtons = document.querySelectorAll('.played');
    for (let i = 0; i < playedButtons.length; i++) {
        playedButtons[i].addEventListener('click', changeToPlayed);
    }
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
let indexVal;
const enterButton = document.querySelector('.enter');
enterButton.addEventListener('click', () => {
    title = document.querySelector('#title').value;
    composer = document.querySelector('#composer').value;
    genre = document.querySelector('#genre').value;
    keySig = document.querySelector('#key-sig').value;
    playedBefore = document.querySelector('#played-before').checked;
    indexVal = myLibrary.length;

    // create new object in myLibrary and HTML div card
    const music = new Repertoire(title, composer, genre, keySig, playedBefore, indexVal);
    myLibrary.push(music);
    createCard(music);

    closeForm();
});
