"use strict"
// 1 --------------------

let printer = (n, s, a) => console.log(`Hello ${n} ${s} ${a} years old`);
printer('Jack', 'Nicolson', 69);


// 2 ---------------------

let someNumber = Number(prompt('Enter the number'));

let squareCalculator = function(num) {
    let square = Math.pow(num, 2);
    return square;
}
console.log(squareCalculator(someNumber));

// 3 ----------------------

let userNumber = Number(prompt('Enter some number'));

let numberCheck = function(num) {
    let answer;
    if (num >= 0) {
        answer = '+++';
    } else {
        answer = '---';
    }
    return [answer, num];
}
console.log(numberCheck(userNumber));

// 4 -----------------------

let firstNum = Number(prompt('Enter first number'));
let secondNum = Number(prompt('Enter second number'));
let thirdNum = Number(prompt('Enter third number'));

let numberSummary = function(f, s, t) {
    return [f, s, t, f + s + t];
}
console.log(numberSummary(firstNum, secondNum, thirdNum));

// 5 -------------------------

function func(num = 5) {
    console.log(num * num);
}
func(2);
func(3);
func();

// 6 -----------------------

let numberForUseOne = Number(prompt('Enter the number'));
let numberForUseTwo = Number(prompt('Enter the number'));

let userSqrt = function(num) {
    if (num < 0) {
        num = num * -1;
    }
    return Math.sqrt(num);
}

let numbersSummaryForUser = function(numO, numT) {
    let summary = numO + numT;
    return summary;
}

console.log(numbersSummaryForUser(userSqrt(numberForUseOne), userSqrt(numberForUseTwo)));

// 7 -------------------
let numberSearchOne = Number(prompt('Enter the number'));
let numberSearchTwo = Number(prompt('Enter the number'));

let searchLess = function(numO, numT) {
    let result;
    let cleanResult;
    if (numO < numT) {
        result = [numO + ' < ' + numT];
    } else if (numT < numO) {
        result = [numT + ' < ' + numO];
    } else {
        result = [numO + ' = ' + numT];
    }
    return result;
}
console.log(searchLess(numberSearchOne, numberSearchTwo));

//  8 -------------------

let weekDay = Number(prompt('Enter day of the week'));

let stringDay = function(d) {
    let result = "no such day!";
    let daysMap = new Map();
    daysMap.set(1, "Monday");
    daysMap.set(2, "Tuesday");
    daysMap.set(3, "Wednesday");
    daysMap.set(4, "Thursday");
    daysMap.set(5, "Friday");
    daysMap.set(6, "Saturday");
    daysMap.set(7, "Sunday");
    if (daysMap.has(d)) {
        result = daysMap.get(d);
    }
    return result;
}

console.log(stringDay(weekDay));

let dayPrinter = function(day) {
    let res = 'no such day number!'
    if (day === 1) {
        res = 'Monday';
    } else if (day === 2) {
        res = 'Tuesday';
    } else if (day === 3) {
        res = 'Wednesday';
    } else if (day === 4) {
        res = 'Thursday';
    } else if (day === 5) {
        res = 'Friday';
    } else if (day === 6) {
        res = 'Saturday';
    } else if (day === 7) {
        res = 'Sunday';
    }
    return res;
}
console.log(dayPrinter(weekDay));

let swichDay = function(day) {
    let res = 'no such day'
    switch (day) {
        case 1:
            res = 'Monday';
            break;
        case 2:
            res = 'Tuesday';
            break;
        case 3:
            res = 'Wednesday';
            break;
        case 4:
            res = 'Thursday';
            break;
        case 5:
            res = 'Friday';
            break;
        case 6:
            res = 'Saturday';
            break;
        case 7:
            res = 'Sunday';
            break;
        default:
            res;
            break;
    }
    return res;
}
console.log(swichDay(weekDay));

// 9 -----------------------------

let yourName = prompt('Enter your name!');

let salute = function(name) {
    let data = new Date;
    let time = data.getHours()
    let result = 'error!';
    if (5 <= time && time < 13) {
        result = `Good morning ${name}`;
    } else if (13 <= time && time < 18) {
        result = `Good day ${name}`;
    } else if (18 <= time && time < 23) {
        result = `Good evening ${name}`;
    } else {
        result = `Good night ${name}`;
    }
    return result;
}

console.log(salute(yourName));