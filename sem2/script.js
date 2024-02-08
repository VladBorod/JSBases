"use strict"
// let age = parseInt(prompt('Your age?'));
// console.log(age);
// let yourName = prompt('Your name?');
// console.log(yourName);

// let a = 13;
// let b = 5;
// // a = a % 10;
// // b = b % 10;
// let c = a % b;
// console.log(`Остаток: ${c}`);

// console.log('abc' * 3);

// let a = '2';
// let b = '3';
// console.log(parseFloat(a) + parseFloat(b));
// console.log(+a + (+b));
// console.log(Number(a) + Number(b));

// let numberOne = parseFloat(prompt('Enter 1 number'))
// let numberTwo = parseFloat(prompt('Enter 2 number'))
// console.log(`Summ: ${numberOne + numberTwo}`);
// console.log(`Diff: ${numberOne - numberTwo}`);
// console.log(`Mult: ${numberOne * numberTwo}`);
// console.log(`Divsn: ${numberOne / numberTwo}`);
// console.log(`Rem div: ${numberOne % numberTwo}`);

// let number = Number(prompt('Enter 1 number'));
// let message = (number > 5) ? 'Bigger 5' : 
//     (number < 5) ? 'Less 5' : 'Equals 5'; 
// console.log(message);

// if (number < 5) {
//     console.log('less');
// } else if (number > 5) {
//     console.log('bigger');
// } else {
//     console.log('equals');
// }

// let numberOne = Number(prompt('Enter 1 number'));
// let numberTwo = Number(prompt('Enter 2 number'));
// let message = (numberOne > numberTwo) ? '1 > 2' :
//     (numberOne < numberTwo) ? '1 < 2' : 'Equals';
// console.log(message);

// let numberOne = Number(prompt('Enter 1 number'));
// let numberTwo = Number(prompt('Enter 2 number'));
// let message = (numberOne > numberTwo) ? `First bigger ${numberOne}` :
//     (numberOne < numberTwo) ? `Second bigger ${numberTwo}` : 'Equals';
// console.log(message);


let numberTest = Number(prompt('Enter number'));
let typeMess = (typeof numberTest === 'number' && !isNaN(numberTest)) ? 'ok' : 'not ok';
console.log(typeMess);
let message = (0 < numberTest && numberTest < 15) ? 'Valid' : 'Not valid';
console.log(message);