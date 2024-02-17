'use strict'

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