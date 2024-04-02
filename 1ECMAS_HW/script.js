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

// function factorial(number) {
//     if (number === 1) {
//         return 1;
//     }
//     return factorial(number - 1) * number;
// }

// console.log(factorial(5));

// ----------------------------------------------------------------
// const mergeArrays = function mergeFunc(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// ----------------------------------------------------------------
// const removeDuplicates = function removeDupFunc(...rest) {
//     const resultArray = rest.filter((e, i) => {
//         return rest.indexOf(e) === i;
//     });
//     return resultArray;
// }

// console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 5, 7, 6, 6, 6, 8, 9, 9, 1]));

// const removeDuplicates = (...rest) => {
//     const resultArray = rest.filter((e, i) => {
//         return rest.indexOf(e) === i;
//     });
//     return resultArray;
// };

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// const anotherDupRemover = function(...rest) {
//     const result = [...new Set(rest)];
//     return result;
// }
// console.log(anotherDupRemover(1, 2, 3, 3, 3, 2, 2, 4, 1, 5));

// ----------------------------------------------------------------

// const evenNumbers = (array) => {
//     return array.filter(e => e % 2 === 0);
// }
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 1000, 1001]));

// ----------------------------------------------------------------

// const medianValue = (array) => {
//     return array.reduce((e, acc) => e + acc) / array.length;
// }
// console.log(medianValue([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// };

// console.log(capitalizeFirstLetter('hello world'));
// console.log(capitalizeFirstLetter('Goofy'));

// const capitalizeFirstLetter = (string) => {
//     return string.replace(/(^|\s)\S/g, (char) => char.toUpperCase());
// };

// console.log(capitalizeFirstLetter('hello world hello user'));

// ----------------------------------------------------------------

// const createCalculator = (def) => {
//     return {
//         value: def,
//         add(num) {
//             this.value += num;
//             return this.value;
//         },
//         subtract(num) {
//             this.value -= num;
//             return this.value;
//         }
//     }
// }

// const objectElement = createCalculator(10);
// console.log(objectElement.value);
// console.log(objectElement.subtract(2));
// console.log(objectElement.add(3));
// console.log(objectElement.value);

// const objectElement1 = createCalculator(2);
// console.log(objectElement1.value);
// console.log(objectElement1.subtract(2));
// console.log(objectElement1.add(3));
// console.log(objectElement1.value);

// ----------------------------------------------------------------

// const createGreeting = (greet) => {
//     return (name) => {
//         return `${greet}, ${name}!`;
//     };
// }

// const createGreeting = (greet) => {
//     return () => `Hello, ${greet}!`;
// }

// const greet1 = createGreeting('Vasya');
// console.log(greet1());

// ----------------------------------------------------------------

// const createPasswordChecker = (passwordLength) => {
//     return (password) => password.length <= passwordLength;
// }

// const passLength = createPasswordChecker(10);
// console.log(passLength('<PASWORD>'));
// console.log(passLength('<PASSWORD>'));
// console.log(passLength('<PASSSWORD>'));

// ----------------------------------------------------------------

// const sumDigits = (digits) => {
//     if (digits < 10) return digits;
//     else return digits % 10 + sumDigits(Math.floor(digits / 10));
// }

// console.log(sumDigits(123));
// console.log(sumDigits(456789));


// 1 ----------------------------------------------------------------

// const someArray = [1, 5, 7, 9];
// const someArray1 = [0, 3, -5, 1, 5, 7, 9];

// console.log(Math.min(...someArray));
// console.log(Math.min(...someArray1));

// 2 ----------------------------------------------------------------

// const createCounter = (counter) => {
//     return {
//         value: counter,
//         increment() {
//             this.value += 1;
//             return this.value;
//         },
//         decrement() {
//             this.value -= 1;
//             return this.value;
//         }
//     }
// }

// const counter = createCounter(20);
// console.log(counter.value);
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.value);

// 3 ----------------------------------------------------------------

const rootElement = document.querySelector('div.first__class');
const findElementByClass = (element, className) => {
    if (element.classList.contains(className)) return element;
    for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        const result = findElementByClass(child, className);
        if (true) return result;
    }
};

const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);