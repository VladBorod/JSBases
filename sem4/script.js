'use strict'

// 1 ---       0  1  2
// const array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     console.log(`element ${[i+1]} = ${array[i]}`);
// }

// 2 ---
// const someMass = [5, 3, '', null, 'qwerty', undefined, true, 5.678098723456];
// console.log(someMass.length);

// 3 ---
// const newMass = ['a', 'b', 'c'];
// console.log(newMass);
// for (let i = 0; i < newMass.length; i++) {
//     newMass[i] = i + 1;
//     if (i > 0) {
//         newMass[i] = (i + 1) * -1;
//     }
// }
// console.log(newMass);

// 4 ---
// const maximazerArray = [1, 2, 3];
// console.log(maximazerArray);
// for (let i = 0; i < maximazerArray.length; i++) {
//     maximazerArray[i] = (maximazerArray[i] + 1) * -1;
// }
// console.log(maximazerArray);

// 5 ---
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// 6 ---
// const someArr = [1, 2, 3];
// console.log(someArr);
// for (let i = 4; i <= 5; i++) {
//     someArr.push(i);
// }
// console.log(someArr);

// 7 ---
// const elementsToDeleteArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(elementsToDeleteArray);
// console.log(elementsToDeleteArray.length);
// for (let i = 2; i <= 3; i++) {
//     // delete elementsToDeleteArray[i];
//     elementsToDeleteArray.splice([i], 1);

// }
// console.log(elementsToDeleteArray);
// console.log(elementsToDeleteArray.length);

// 8 ---
// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// 9 ---
// for (let i = 1; i < 100; i += 2) {
//     // ++i;
//     console.log(i);
// }

// 10 ---
// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// 11 ---
// let num = 9;
// let count = 1;
// while (num < 1000) {
//     num *= 3;
//     ++count;
// }
// console.log(count);
// console.log(num);

// 12 ---
// const arrayFilter = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arrayFilter.length; i++) {
//     if (arrayFilter[i] > 3 && arrayFilter[i] < 10) {
//         console.log(arrayFilter[i]);
//     }
// }

// 13 ---
// let temp = 0;
// for (let i = 0; i <= 100; i += 2) {
//     temp = temp + i;
// }
// console.log(temp);

// 14 ---
// const summArr = [2, 5, 9, 3, 1, 4];
// let someTemp = 0;
// for (let i = 0; i < summArr.length; i++) {
//     someTemp = someTemp + summArr[i];
// }
// console.log(someTemp);
// const summArr2 = [2, 5, 9, 3, 1, 4];
// console.log(summArr2.reduce((acc, cur) => acc + cur, 0));


// 15 ---
// const dummyArr = []
// let myTemp = 1;
// for (let i = 0; i < 19; i++) {
//     if (i === 0) {
//         dummyArr[i] = '-'
//     } else if (i % 2 === 0) {
//         dummyArr[i] = '-';
//     } else {
//         dummyArr[i] = myTemp++;
//     }
// }
// let someStr = dummyArr.toString();
// let newStr = someStr.split('');
// newStr.replace(/[\s.,%]/g, '')
// console.log(someStr);
// dummyArr.concat
// -----
// let str = '-';
// for (let i = 1; i <= 9; i++) {
//     str += `${i}-`;
// }
// console.log(str);


// 16 ---
// const mopsArr = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < mopsArr.length; i++) {
//     if (mopsArr[i] !== 0) {
//         console.log(mopsArr[i]);
//     } else {
//         break;
//     }
// }
// const mopsTwoArr = [2, 5, 9, 0, 3, 1, 4];
// let i = 0;
// let flag = true;
// while (flag){
//     if(mopsTwoArr[i] === 0){
//         break;
//     }
//     i++; 
// }

// 17 ---
// const goofyArr = [2, 3, 0, 5, 14, 15, 16, 21, 20, 9, 10, 8, 4, 24, 13, 7];
// for (let i = 0; i < goofyArr.length; i++) {
//     if (goofyArr[i] % 2 === 0) {
//         console.log(Math.pow(goofyArr[i], 2));
//     } else if (goofyArr[i] % 3 === 0) {
//         console.log(Math.pow(goofyArr[i], 3));
//     } else {
//         console.log('fail');
//     }
// }

// 18 ---

// 19 ---
// const massArr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let i = 0; i < massArr.length; i++) {
//     if (massArr[i] === 3) {
//         ++count;
//     }
// }
// console.log(count);
// const massArr2 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// let res = massArr2.filter(x => x === 3);
// console.log(res.length);


// // 20 ---
// const lastArr = [1, 2, 3, 4, 5];
// console.log(lastArr);
// console.log(lastArr.splice(1, 2));
// console.log(lastArr);
// const lastArr2 = [1, 2, 3, 4, 5];
// const lastArr2Copy = [];
// console.log(lastArr2);
// // lastArr2Copy = lastArr2.slice(1, 2).push
// console.log(lastArr2Copy);
// console.log(lastArr2);


// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// 1 ------
const enumerationCreator = function() {
    for (let i = 0; i < 11; i++) {
        if (i === 0) {
            console.log(`${i} - it's zero!`);
        } else if (i % 2 === 1) {
            console.log(`${i} - it's odd number`)
        } else {
            console.log(`${i} - it's even number`)
        }
    }
}
enumerationCreator();

// 2 -----
const arrayToCutOff = [1, 2, 3, 4, 5, 6, 7];
const arrayCutOff = function(array) {
    array.splice(3, 2);
    return array;
}
console.log(arrayCutOff(arrayToCutOff));

// 3 -----
let minValue = Number(prompt('Enter minimal value of array you whant to create.'));
let maxValue = Number(prompt('Enter maximal value of array you whant to create.'));
let amount = Number(prompt('Enter array length!'))
let numberToSearch = Number(prompt('Enter number you whant to find.'))
const randomArrayCreator = function(min, max, amount) {
    const randomArray = [];
    for (let i = 0; i < amount + 1; i++) {
        randomArray[i] = Math.floor(Math.random() * (max + 1 - min) + min);
    }
    return randomArray;
}
const arraySummCalculation = function(array) {
    let arraySumm = 0;
    for (let i = 0; i < array.length; i++) {
        arraySumm = arraySumm + array[i];
    }
    return arraySumm;
}
const lessNumberDefinerReducer = function(array) {
    const min = (values) => values.reduce((x, y) => Math.min(x, y));
    return min(array);
}
const numberSearcher = function(array, numToSearch) {
    let answer;
    let indexesArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numToSearch) {
            indexesArray.push(i)
            answer = `Number you search is - ${numToSearch}`;
        } else {
            answer = 'The array does not consist such number ';
        }
    }
    return answer + ` indexes - ${indexesArray}`;
}

const myArray = randomArrayCreator(minValue, maxValue, amount);
console.log(`This is your array - [${myArray}]`);
console.log(`This is summ of all elements in your array - [${arraySummCalculation(myArray)}]`);
console.log(`Min value using reducer - [${lessNumberDefinerReducer(myArray)}]`);
console.log(numberSearcher(myArray, numberToSearch));


// 4 -----
const piramidPainter = function() {
    let str = 'x';
    console.log(str);
    for (let i = 0; i < 19; i++) {
        console.log(str = str + 'x');
    }
}
piramidPainter();