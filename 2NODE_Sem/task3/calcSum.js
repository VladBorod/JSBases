
const numberPrecisionPack = require('number-precision');

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => numberPrecisionPack.plus(acc, purchase), 0);
  total = numberPrecisionPack.times(total, discount);
  return total;
}

module.exports = calculateResultSum;