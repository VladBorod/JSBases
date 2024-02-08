"use strict"

// let num = Number(1);
// for (let index = 0; index < 4; index++) {
//     // let num = Number(1);
//     console.log(num);
//     num++;
// }

//                     0    1    2    3
// const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// for (let i = 0; i < arrayLetters.length; i++) {
//     console.log(arrayLetters[i]);
// }

// let word = '';
// while (word.length < 5) {
//     const value = prompt('Enter a letter');
//     if (!value) {
//         // const value = prompt('Enter a letter');
//         console.log('you have to enter a letter');
//         break;
//     }
//     word = word + value;
//     console.log(word);
// }

// do{

// } while(x < 3)

// const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// for (let letter of arrayLetters) {
//     console.log('letter: ', letter);
// }

// const user = {
//     name: 'Hyi',
//     age: '24',
//     isMarried: false,
// };
// for (let key in user) {
//     // console.log(key);
//     console.log(key, user[key]);
// }

// 1 ------
// Numbers from 1 to 10
// let num = Number(10);
// for (let num = 1; num < 11; num++) {
//     console.log(num);
// }

// 2 ------
// Multiplication table
// let input = prompt('Enter number!')
// let number = Number(input);

// if (typeof number !== 'number' || (isNaN(number))) {
//     console.log('You are dummy!!!');
// } else if (number > 0 && number < 11) {
//     for (let factor = 1; factor <= 10; factor++) {
//         let result = factor * number;
//         console.log(`${factor} * ${number} = ${result}`);
//     }
// } else {
//     console.log('You entered too big number for mult. table, dummy!');
// }


// 3 ------
// Summ of all numbers from 1 to x
// let number = Number(prompt('Enter number!'));
// let summOfNumbers = parseFloat(0);  
// for (let index = 0; index <= number; index++) { 
//     console.log(`${index} + ${summOfNumbers} = ${summOfNumbers += index}`); 
// }
// console.log(summOfNumbers);

// 4 ------
// String reverse
// let string = prompt('Enter some string');
// let stringArray = [];
// stringArray.push(string.split(''));

// console.log(stringArray);
// let count = stringArray.length;
// for (let i = 0; i <= stringArray.length / 2; i++) {
//     let temporary = stringArray[count - i];
//     stringArray[count - i] = stringArray[i]
//     stringArray[i] = temporary;
// }

// console.log(stringArray);

// 4 ------ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);
// var temp;
// for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
// }
// console.log(arr);

// a b c d e
// 0 1 2 3 4

// HW 22:40!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let string = prompt('Enter some string')
// let stringArray = string.split('');

// console.log(stringArray);
// let temporary;
// for (let i = 0, j = stringArray.length - 1; i < j; i++, j--) {
//     temporary = stringArray[j];
//     stringArray[j] = stringArray[i];
//     stringArray[i] = temporary;
// }
// console.log(stringArray);

// 4.1 ---------
// Array creation + Eratosfen SIEVE

// let input = prompt('Enter the number');
// let number = Number(input);
// let numbersArray = [];

// if (typeof number !== 'number' || (isNaN(number))) {
//     console.log('Not a number was entered');
// } else {
//     // let numbersArrayLength = number + 1;
//     // // let temporaryLength = Number(121);
//     // for (let i = 1; i < numbersArrayLength; i++) {
//     //     numbersArray.push(i);
//     // }
//     let allNumbersArray = [];
//     let limit = Math.sqrt(number);
//     let resultArray = [];
//     let secondArrayVariant = [];
//     for (let i = 2; i < number; i++) {
//         allNumbersArray.push(true);
//     }
//     for (let i = 2; i <= limit; i++) {
//         if (allNumbersArray[i]);
//         for (let j = i * i; j < number; j += i) {
//             allNumbersArray[j] = false;
//         }

//     }
//     for (let i = 2; i < number; i++) {
//         if (allNumbersArray[i]) {
//             resultArray.push(i);
//         }
//     }
//     console.log(resultArray);

//     nextPrime:
//         for (let i = 2; i <= number; i++) {
//             for (let j = 2; j < i; j++) {
//                 if (i % j == 0) continue nextPrime;
//             }
//             secondArrayVariant.push(i)
//         }
//     console.log(secondArrayVariant);
// }
// console.log(numbersArray);

// function create() {

//     let count = 0;

//     function increment() {
//         count++;
//     }


//     function log() {
//         let message = `Count = ${count}`;
//         console.log(message);
//     }

//     return [increment, log];
// }
// const [increment, log] = create();
// increment();
// increment();
// increment();
// log();

// if (true) {
//     // let x = 1;
//     const y = 2;

// }