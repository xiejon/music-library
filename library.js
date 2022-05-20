let myLibrary = [];

class Repertoire {
    constructor(title, composer, instrument, keySig, playedBefore, indexVal) {
        this.title = title;
        this.composer = composer;
        this.instrument = instrument;
        this.keySig = keySig;
        this.playedBefore = playedBefore;
        this.indexVal = indexVal;
    }
}
function createCard(music) {
    const container = document.querySelector('.cards-container');
    const card = document.createElement('div');
    const removeButton = document.createElement('button');
    const title = document.createElement('p');
    const composer = document.createElement('p');
    const instrument = document.createElement('p');
    const keySig = document.createElement('p');
    const playedButton = document.createElement('button');
    card.classList.add('card');
    removeButton.classList.add('remove');
    playedButton.classList.add('played');

    // add title, composer, etc. to card
    title.textContent = music.title;
    composer.textContent = music.composer;
    instrument.textContent = music.instrument;
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
    card.appendChild(instrument);
    card.appendChild(keySig);
    card.appendChild(playedButton);
    card.appendChild(removeButton);

    // add event listener when remove is clicked
    removeCard.listener();
    
    // change played status when button is clicked
    playedStatus.changeListener();
}

// remove card button
const removeCard = (() => {

    function deleteCard() {
        this.parentElement.remove();
    
        // remove object from myLibrary
        myLibrary.splice(this.indexVal, 1);
    }

    const listener = () => {
        const removeButtons = document.querySelectorAll('.remove');
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener('click', deleteCard);
        }
    }

    return {
        listener: listener
    }

})();

// change 'new' to 'played' when clicked & vice versa
const playedStatus = (() => {
    function change(button) {
        if (this.textContent === "NEW") {
            this.textContent = "PLAYED";
        } else {
            this.textContent = "NEW";
        }
    }

    const changeListener = () => {
        const playedButtons = document.querySelectorAll('.played');
        for (let i = 0; i < playedButtons.length; i++) {
            playedButtons[i].addEventListener('click', change);
        }
    }

    return {
        changeListener: changeListener
    }
})();

const popupForm = (() => {
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
        document.querySelector('#title').value = '';
        document.querySelector('#composer').value = '';
        document.querySelector('#instrument').value = '';
        document.querySelector('#key-sig').value = '';
        document.querySelector('#played-before').checked = false;
    }

    const popupOpener = () => {
        const openButton = document.querySelector('.open-button');
        openButton.addEventListener('click', openForm);
    }
    
    const disabler = () => {
        const disable = document.querySelector('.disabler');
        disable.addEventListener('click', closeForm);
    }

    popupOpener();
    disabler();

    return {
        openForm: openForm,
        closeForm: closeForm, 
        clearForm: clearForm
    }
})();

const storeInput = (() => {
    let title;
    let composer;
    let instrument;
    let keySig;
    let playedBefore;
    let indexVal;
    const enterButton = document.querySelector('.enter');

    function updateVariables() {
        title = document.querySelector('#title').value;
        composer = document.querySelector('#composer').value;
        instrument = document.querySelector('#instrument').value;
        keySig = document.querySelector('#key-sig').value;
        playedBefore = document.querySelector('#played-before').checked;
        indexVal = myLibrary.length;
    }

    function pushToLibrary(item) {
        myLibrary.push(item);
    }

    function processForm() {
        updateVariables();
        const music = new Repertoire(title, composer, instrument, keySig, playedBefore, indexVal);
        pushToLibrary(music);
        createCard(music);
        popupForm.closeForm();
    }

    // on form submit: create new object in myLibrary and HTML div card
    enterButton.addEventListener('click', processForm);
})();