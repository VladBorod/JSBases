'use strict';

// let range = {
//   from: 1,
//   to: 6
// };

// range [Symbol. iterator] = function () {
//     return {
//       current: this.from,
//       last: this.to,
//     next() {
//       return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
//     }
//   }
// };

// for (let num of range) {
//   console.log(num);
// };

// ----------------------------------------------------------------

// let range = {
//   from: 1,
//   to: 9,
//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },
//   next() {
//     return this.current <= this.to ? { done: false, value: this.current++ } : {
//     done: true };
//   }
// };
// for (let number of range) {
//   console. log (number);
// }

// ----------------------------------------------------------------

// let pseudo = {
//   0: "first",
//   1: "second",
//   length: 2
// }
// let array = Array.from(pseudo);
// console.log(array);
// console.log(array.pop());
// // Даже со строкой работает
// let pseudo2 = "It`s Array Like!";
// let array2 = Array.from(pseudo2);
// console.log(array2);

// ----------------------------------------------------------------


// // Функция для добавления метаданных к объектам
// function addMetadata(book, metadataType, data) {
//   // Добавить код
//   book[metadataType] = [data];
// }

// function addValueArray(book, value, ...args) {
//   if (book[value]){
//     book[value].push(...args)
//   } else {
//     book[value] = [...args];
//   }
// }
//   // Функция для извлечения метаданных из объекта
// function getMetadata (book, metadataType) {
//   // вернуть
//   return book[metadataType];
// }
//   // Создание объекта книги и добавление метаданных
// const book = {
//   title: "1984",
//   author: "George Orwell"
// };

// const reviewSymbol = Symbol ('review');
// const ratingSymbol = Symbol('rating'); 
// const tagsSymbol = Symbol ('tags');
// const authorID = Symbol('authorID');
// const someValue = Symbol('someValue');

// addValueArray(book, reviewSymbol, "Отличная книга о дистопии!");
// addValueArray(book, ratingSymbol, 5);
// addValueArray(book, tagsSymbol, "dystopia");
// addValueArray(book, authorID, 76);
// addValueArray(book, someValue, "value 1", "value 2", "value 3", "value 4", "value 5", "value 6");

// // Вывод метаданных для книги
// console. log (getMetadata(book, reviewSymbol));//["Отличная книга о дистопии! "]
// console.log(getMetadata(book, ratingSymbol));//["5"]
// console.log(getMetadata(book, tagsSymbol));//["dystopia"]
// console.log(getMetadata(book, authorID));//["76"]
// console.log(getMetadata(book, someValue));

// ----------------------------------------------------------------

// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ]

// books[Symbol.iterator] = function() {
//   return {
//     current: 0, 
//     to: this.length,
//     next() {
//       return this.current < this.to 
//       ? { done: false, value: books[this.current++] } 
//       : { done: true }; 
//     }
//   }
// }

// let num = Number(0);

// for (let book of books) {
//   num++;
//   book.id = num; 
// }

// for (const book of books) {
//   console.log(book.id, book.title, book.author);
// }

// ----------------------------------------------------------------

// const myArray = Array.from(document.querySelectorAll('div'));

// const active = myArray.filter(elem => elem.hasAttribute('data-active'));

// active.forEach(element => {
//   console.log(element.innerHTML);
// });

// ----------------------------------------------------------------

// const lessons = new Map();
// lessons.set("Math", "Smirnov");
// lessons.set("History", "Ivanova");

// const ivanLessons = new Set();
// ivanLessons.add('Math')
//   .add('History');

// const students = new Map();
// students.set("Kirill", ivanLessons);

// console.log(lessons.get("Math"));
// console.log([...students.get("Kirill")]);


// ----------------------------------------------------------------

const musicCollection = [{
  title: "Ragoon",
  artist: "Sphread killers",
  year: "1999"
},
{
  title: "Pomp",
  artist: "Destroyer",
  year: "2001"
},
{
  title: "Zikkurat",
  artist: "Black pinguin",
  year: "1994"
},
{
  title: "Def",
  artist: "Def Deffo",
  year: "2002"
}
]

musicCollection[Symbol.iterator] = function() {
  return {
    current: 0, 
    to: this.length,
    next() {
      return this.current < this.to 
      ? { done: false, value: musicCollection[this.current++] } 
      : { done: true }; 
    }
  }
}

for (const album of musicCollection) {
  console.log(album.title, album.artist, album.year);
}

// ----------------------------------------------------------------

// Create a Map to store the dishes and their cooks
const dishes = new Map();
dishes.set("Пицца Маргарита", "Виктор");
dishes.set("Пицца Пепперони", "Виктор");
dishes.set("Суши Филадельфия", "Ольга");
dishes.set("Суши Калифорния", "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

// Create a Map to store the clients and their orders
const orders = new Map();

// Create client objects
const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIra = { name: "Ирина" };

// Add orders to the clients
orders.set(clientAlexey, ["Пицца Пепперони", "Тирамису"]);
orders.set(clientMaria, ["Суши Калифорния", "Пицца Маргарита"]);
orders.set(clientIra, ["Чизкейк"]);

// Function to display the orders and the cooks preparing them
function displayOrders() {
  for (const [client, order] of orders.entries()) {
    console.log(`${client.name} заказал:`);
    order.forEach((dish) => {
      const cook = dishes.get(dish);
      console.log(`- ${dish} (повар: ${cook})`);
    });
  }
}

// Display the orders and the cooks preparing them
displayOrders();