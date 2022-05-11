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
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = book.title;
    container.appendChild(card);
    console.log(book.title);
});
