'use strict';

// const numberPrecisionPack = require('number-precision');

// function calculateResultSum(purchases, discount) {
//   // let total = purchases.reduce((acc, purchase) => acc += purchase, 0);
//   let total = purchases.reduce((acc, purchase) => numberPrecisionPack.plus(acc, purchase), 0);
//   // total = total * discount;
//   total = numberPrecisionPack.times(total, discount);
//   return total;
// }

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(total);