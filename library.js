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
    createCard(music) {
        const container     = document.querySelector('.cards-container');

        const card          = document.createElement('div');
        const removeButton  = document.createElement('button');
        const title         = document.createElement('p');
        const composer      = document.createElement('p');
        const instrument    = document.createElement('p');
        const keySig        = document.createElement('p');
        const playedButton  = document.createElement('button');

        card.classList.add('card');
        removeButton.classList.add('remove');
        playedButton.classList.add('played');
        
        title.textContent        = music.title;
        composer.textContent     = music.composer;
        instrument.textContent   = music.instrument;
        keySig.textContent       = music.keySig;
        removeButton.textContent = "REMOVE";

        container.appendChild(card);
        card.append(title, composer, instrument, keySig, playedButton, removeButton);

        this.setPlayed(playedButton, music);

        // change played status when button is clicked
        this.changePlayed();

        // Add listeners to new card
        removeButton.addEventListener('click', this.deleteCard);
        playedButton.addEventListener('click', this.changePlayed);
    }
    setPlayed(button, item) {
        if (item.playedBefore) {
            button.textContent = "PLAYED";
        } else {
            button.textContent = "NEW";
        }
    }
    deleteCard() {
        this.parentElement.remove();
    
        // remove object from myLibrary
        myLibrary.splice(this.indexVal, 1);
    } 
    changePlayed() {
        if (this.textContent === "NEW") {
            this.textContent = "PLAYED";
        } else {
            this.textContent = "NEW";
        }
    }
}

const Popup = () => {
    const form = document.querySelector('.form-popup');
    const disabler = document.querySelector('.disabler');
    const openButton = document.querySelector('.open-button');
    const enterButton = document.querySelector('.enter');

    return {
        addPopupListeners() {
            openButton.addEventListener('click', this.openForm);
            disabler.addEventListener('click', this.closeForm);
            enterButton.addEventListener('click', () => {
                this.processForm();
                this.closeForm();
            });
        },
        processForm() {
            const title        = Popup().getInput('#title');
            const composer     = Popup().getInput('#composer');
            const instrument   = Popup().getInput('#instrument');
            const keySig       = Popup().getInput('#key-sig');
            const playedBefore = Popup().getInput('#played-before');
            const indexVal     = myLibrary.length;

            const newRep = new Repertoire(title, composer, instrument, keySig, playedBefore, indexVal);
            myLibrary.push(newRep);
            newRep.createCard(newRep);
        },
        openForm() {
            // may not work...
            disabler.style.display = "block";
            form.style.display = "flex";
        }, 
        closeForm() {
            disabler.style.display = "none";
            form.style.display = "none";

            // Clear form inputs
            document.querySelector('#title').value = '';
            document.querySelector('#composer').value = '';
            document.querySelector('#instrument').value = '';
            document.querySelector('#key-sig').value = '';
            document.querySelector('#played-before').checked = false;
        }, 
        getInput(element, bool) {
            if (element === '#played-before') {
                return document.querySelector(element).checked;
            } else {
                return document.querySelector(element).value;
            }
        }
    }
}
Popup().addPopupListeners();
