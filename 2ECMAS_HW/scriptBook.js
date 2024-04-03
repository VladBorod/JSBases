'use strict';

class Book {
    constructor(title, autor, size) {
        this.title = title;
        this.autor = autor;
        this.size = size;
    }
    display() {
        console.log(`Title: ${this.title}; autor: ${this.autor}; size: ${this.size}.`);
    }
}

const book1 = new Book('Book1', 'Autor1', 'Size1');
console.log(book1.display());