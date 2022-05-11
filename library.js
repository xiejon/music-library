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

