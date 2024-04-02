'use strict';

// const arr = [1, 5];

// function max(par1, par2) {
//     if (par1 > par2) {
//         return par1;
//     } else if (par1 < par2) {
//         return par2;
//     } else {

//         return 'equals';
//     }
// }
// console.log(max(...arr));

// const arr = [3, 5];

// console.log(Math.max(...arr));

function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return factorial(number - 1) * number;
}

console.log(factorial(5));