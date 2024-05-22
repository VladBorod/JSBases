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



