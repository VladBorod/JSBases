'use strict';

class Library {
  #books = [];

  addBook(book){
    if (this.#books.includes(book)) {
      throw new Error ("Book already exists");
    } else {
      this.#books.push(book);
    }
  }

  get allBooks() {
    const bookArray = this.#books;
    bookArray.forEach(element => {
      console.log(element);
    });
    // return this.#books;
  }

  hasBook(book){
    return this.#books.includes(book);
  }

  removeBook(book){
    if (this.#books.includes(book)) {
      this.#books.splice(this.#books.indexOf(book), 1);
    } else {
      throw new Error ("Book does not exist");
    }
  }
}

const library = new Library();

const book1 = 'Book1';
const book2 = 'Book2';
const book3 = 'Book3';
const book4 = 'Book4';
const book5 = 'Book5';
const book6 = 'Book6';

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log(library.hasBook(book5));
console.log(library.hasBook(book6));

console.log(library.allBooks);

library.removeBook('Book1');
library.removeBook('Book5');

console.log(library.allBooks);

// ----------------------------------------------------------------

const initialData = [
{
  product: "Apple iPhone 13",
  reviews: [
    {
      id: "1",
      text: "Отличный телефон! Батарея держится долго.",
    },
    {
      id: "2",
      text: "Камера супер, фото выглядят просто потрясающе.",
    },
    ],
  },
  {
  product: "Samsung Galaxy Z Fold 3",
  reviews: [
    {
      id: "3",
      text: "Интересный дизайн, но дорогой.",
    },
    ],
  },
  {
  product: "Sony PlayStation 5",
  reviews: [
    {
      id: "4",
      text: "Люблю играть на PS5, графика на высоте.",
    },
    ],
  },
];

const products = document.querySelector('.products');

initialData.forEach(element => {
  const name = document.createElement('h1');
  name.innerHTML = element.product;

  const review = document.createElement('div');
  const reviewText = element.reviews;
  reviewText.forEach(element => {
    const text = document.createElement('h4');
    text.innerHTML = element.text;
    review.appendChild(text);
  });

  const field = document.createElement('input');
  field.classList.add('input-field');
  const sendBtn = document.createElement('button');
  sendBtn.classList.add('send-btn');
  sendBtn.innerHTML = 'Send';

  products.appendChild(name);
  products.appendChild(review);
  products.appendChild(field);
  products.appendChild(sendBtn);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('send-btn')) {
    const review = document.createElement('h4');
    if (e.target.previousElementSibling.value.length < 50){
      throw new Error ('Your review has to be more than 5, and less than 20 symbols!')
    } else if (e.target.previousElementSibling.value.length > 500) {
      throw new Error ('Your review has to be more than 5, and less than 20 symbols!')
    } else {
      review.innerHTML = e.target.previousElementSibling.value;
      e.target.previousElementSibling.value = '';
      e.target.previousElementSibling.previousElementSibling.append(review);
    }
  }
});





  







