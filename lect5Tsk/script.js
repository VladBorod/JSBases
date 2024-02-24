'use strict'

// const car = {
//     make: "Audi",
//     year: 2023,
//     power: 249,
// }

// console.log(car.power);
// car.power = 300;
// console.log(car.power);

// const product = {
//     name: 'table',
//     productPrice: 2000,
//     count: 2,
//     buy: function() {
//         if (product.count > 0) {
//             console.log('You bought this product.');
//             this.count--;
//         } else {
//             console.log('This product is not available!');
//         }
//     }
// }
// console.log(product);
// product.someReference = 'reference';
// console.log(product);
// delete product.someReference;
// console.log(product);
// product.count;
// product.buy();
// console.log(product.count);
// product.buy();
// console.log(product.count);
// product.buy();
// console.log(product.count);

// const car = {
//     name: this.name,
//     year: this.year,
//     power: this.power,
// }

// // let car1 = car;
// car.car1 = ('Audi', 2003, 200);
// console.log(car1);

// const productNew = {
//     name: 'table',
//     productPrice: 2000,
//     count: 2,
//     userRegister: false,
//     registration: function() {
//         this.userRegister = true;
//     },
//     buy: function() {
//         if (this.count > 0) {
//             console.log('You bought this product.');
//             this.count--;
//         } else {
//             console.log('This product is not available!');
//         }
//     },
//     buyProduct: function() {
//         if (this.userRegister === true) {
//             console.log('Product in backet');
//         } else {
//             console.log('You need registration');
//         }
//     }
// }
// productNew.buyProduct();
// productNew.registration();
// productNew.buyProduct();

// const productTest = {
//     text: 'hello',
//     price: 1000,
// }

// for (const key in productTest) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];

//     // }
//     console.log(key + ": " + productTest[key]);
//     console.log(productTest['price']);
// }


const array = [1, 2, 3, 10, 15];
const arrayUp = array.map(item => 2 * item);
console.log(arrayUp);
const arrayFilt = array.filter(item => item >= 10);
console.log(arrayFilt);
const arraySome = array.filter(item => item >= 15);
console.log(arraySome);
const arrayRed = array.reduce((a, b) => a + b) / array.length;
console.log(arrayRed);