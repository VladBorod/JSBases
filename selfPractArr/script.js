"use strict"
// VALUES AMOUNT TO ADD -----------------
// const amount = Number(prompt('Enter amount'));
// const value = prompt('Enter value');

// const array = [];

// let arrayFiller = function(am, val, arr) {
//     for (let i = 0; i < am; i++) {
//         arr.push(val);
//     }
//     // console.log(arr);
// }
// arrayFiller(amount, value, array);
// console.log(array);


// REVERSE ARRAY -------------------------
// const newArray = [1, 2, 3, 4, 5, 6]

// let arrayReverse = function(array) {
//     // const reversedArray = [];
//     // let temp;
//     for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }
// console.log(arrayReverse(newArray));

// ARRAY CLEANER AND COMPACTER -------------

// const dirtyArray = [1, 17, 'a', null, 4, 'z', undefined, 'goofy', 'protecter', 4567, 789, 's', 0, '', 78, false, 5, true, 777, 'true', 17, 'falce', 'e'];

// let arrayCleaner = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === null || array[i] === undefined) {
//             // delete array[i];
//             array.splice([i], 1);
//         } else if (array[i] === true || array[i] === false) {
//             // delete array[i];
//             array.splice([i], 1);
//         } else if (array[i] === '') {
//             // delete array[i];
//             array.splice([i], 1);
//         }
//     }
//     return array;
// }
// console.log(arrayCleaner(dirtyArray));


// ARRAY CLEANER AND COMPACTER WITH FILTER --------

// const unfilteredArray = [1, 17, 'a', null, 4, 'z', undefined, 'goofy', 'protecter', 4567.2, 789, 's', 0, '', 78, false, 5, true, 777, 'true', 17.443, 'falce', 'e', true, false, '', null, 77, 'k', undefined, 12.3];

// const filteredArray = unfilteredArray.filter(element => element !== null && element !== undefined && element !== '' && element !== false && element !== true);

// // const arrayExceptions = function() {
// //     return [null, undefined, '', false, true];
// // }
// // const filteredArray = unfilteredArray.filter(element => element !== arrayExceptions());

// console.log(unfilteredArray);
// console.log(filteredArray);

// 2D array into MAP --------------------

// const insertedArray = [
//     ['a', 1],
//     ['b', 2],
//     [3, 'c'],
//     [4, null],
//     ['some', 12.3],
//     [6, undefined],
//     [7, true],
//     [8, 'zoo'],
//     [9, false],
//     ['j', 10.0],
//     [null, 100],
//     [true, false],
//     [undefined, ''],
//     ['', null],
//     [NaN, 134.9]
// ];

// let mapArray = new Map();
// const arrayToMapCreator = function(array, map) {
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         for (let j = 0; j < element.length - 1; j++) {
//             map.set(element[j], element[j + 1]);
//         }
//     }
//     return map;
// }
// // console.log(arrayToMapCreator(insertedArray, mapArray));
// console.log(mapArray);

// DELETE SAME ELEMENTS FROM ANOTHER ARRAY --------???????

// const mainArray = [1, 4, 5, 2, 7, 3, 2, 2, 2, 1, 5, 7, 8, 0, 0, 1, 4, 7, 5, 3, 4, 8, 6, 1, 4, 7, 3, 6, 7, 1, 12, 13];
// const elementsToDelete = [0, 1, 2, 5, 13];

// const arrayReformer = function(arrayMain, arrayExceptor) {

//     // nextDelete: 
//     for (let i = 0; i < arrayExceptor.length; i++) {
//         let temp = arrayExceptor[i];
//         for (let j = 0; j < arrayMain.length; j++) {
//             if (temp === arrayMain[j]) {
//                 arrayMain.splice([j], 1);
//             } else if (temp === arrayMain[j + 1]) {
//                 arrayMain.splice([j + 1], 1);
//             }
//         }
//     }
//     return arrayMain;
// }


// console.log(arrayReformer(mainArray, elementsToDelete));
// console.log(mainArray.includes(7));

// const nonUniqueArray = [1, 1, 1, 1, 3, 3, 4, 7, 9, 0, 0, 3, 0, 1, 4];

// let unique = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === array[i + 1]) {
//             array.splice([i + 1], 1);
//         }

//     }
//     return array;
// }
// console.log(unique(nonUniqueArray));