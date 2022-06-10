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
    const container = document.querySelector(".cards-container");

    const card = document.createElement("div");
    const removeButton = document.createElement("button");
    const title = document.createElement("p");
    const composer = document.createElement("p");
    const instrument = document.createElement("p");
    const keySig = document.createElement("p");
    const playedButton = document.createElement("button");

    card.classList.add("card");
    removeButton.classList.add("remove");
    playedButton.classList.add("played");

    title.textContent = music.title;
    composer.textContent = music.composer;
    instrument.textContent = music.instrument;
    keySig.textContent = music.keySig;
    removeButton.textContent = "REMOVE";

    container.appendChild(card);
    card.append(
      title,
      composer,
      instrument,
      keySig,
      playedButton,
      removeButton
    );

    this.setPlayed(playedButton);

    // Add listeners to new card
    removeButton.addEventListener("click", () => {
      this.deleteCard(removeButton);
      this.updateIndexes();
    });
    playedButton.addEventListener("click", () =>
      this.changePlayed(playedButton)
    );
  }
  deleteCard(btn) {
    btn.parentElement.remove();
    // Remove item from myLibrary
    myLibrary.splice(this.indexVal, 1);
  }
  setPlayed(btn) {
    this.playedBefore
      ? (btn.textContent = "PLAYED")
      : (btn.textContent = "NEW");
  }
  changePlayed(btn) {
    let played;
    if (this.playedBefore) {
      played = false;
      btn.textContent = "NEW";
    } else {
      played = true;
      btn.textContent = "PLAYED";
    }
    myLibrary[this.indexVal].playedBefore = played;
    console.log(myLibrary[this.indexVal].playedBefore);
  }
  updateIndexes() {
    myLibrary.forEach((item, index) => {
      item.indexVal = index;
    });
  }
}

const Popup = () => {
  const form = document.querySelector(".form-popup");
  const disabler = document.querySelector(".disabler");
  const openButton = document.querySelector(".open-button");
  const enterButton = document.querySelector(".enter");

  return {
    addPopupListeners() {
      openButton.addEventListener("click", this.openForm);
      disabler.addEventListener("click", this.closeForm);
      enterButton.addEventListener("click", () => {
        this.processForm();
        this.closeForm();
      });
    },
    processForm() {
      const title = Popup().getInput("#title");
      const composer = Popup().getInput("#composer");
      const instrument = Popup().getInput("#instrument");
      const keySig = Popup().getInput("#key-sig");
      const playedBefore = Popup().getInput("#played-before");

      const newRep = new Repertoire(
        title,
        composer,
        instrument,
        keySig,
        playedBefore
      );
      myLibrary.push(newRep);
      newRep.createCard(newRep);

      // Add index to new item
      newRep.updateIndexes();
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
      document.querySelector("#title").value = "";
      document.querySelector("#composer").value = "";
      document.querySelector("#instrument").value = "";
      document.querySelector("#key-sig").value = "";
      document.querySelector("#played-before").checked = false;
    },
    getInput(element) {
      if (element === "#played-before") {
        return document.querySelector(element).checked;
      } else {
        return document.querySelector(element).value;
      }
    },
  };
};
Popup().addPopupListeners();

// Local Storage
const locStorage = () => {
  return {
    save() {
      localStorage.setItem("library", JSON.stringify(myLibrary));
    },
    getLibrary() {
      return JSON.parse(localStorage.getItem("library"));
    },
    render() {
      const cards = this.getLibrary();
      console.log(localStorage);
      if (cards) {
        for (let card of cards) {
          let newCard = Object.assign(new Repertoire(), card);
          myLibrary.push(newCard);
          newCard.createCard(newCard);
        }
      }
    },
  };
};
window.onload = () => locStorage().render();
window.onunload = () => locStorage().save();
