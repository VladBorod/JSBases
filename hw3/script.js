"use strict"

// 1 ----------------------

let userNumber = Number(prompt('Enter the number to cube'));
let cubeConstruction = function(number) {
    let degree = 3;
    let result = Math.pow(number, degree)
    let final = number + '^' + degree + ' = ' + result;
    return final;
}
console.log(`Result of cube operation: ${cubeConstruction(userNumber)}`);

// 2 ----------------------

let salary = prompt('Enter your salary!')
let cleanSalary = function(salary) {
    let result;
    let salaryAfterTaxes = null;
    let tax = 13;
    if (typeof(salary) === 'number' || !isNaN(salary)) {
        salaryAfterTaxes = salary * ((100 - tax) / 100);
        result = `The salary after taxes is equal to ${salaryAfterTaxes}`
    } else {
        result = 'Incorrect data was entered!';
    }
    return result;
}
console.log(cleanSalary(salary));

// 3 -----------------------

let firstNumber = Number(prompt('Enter first number!'));
let secondNumber = Number(prompt('Enter second number!'));
let thirdNumber = Number(prompt('Enter third number!'));
let biggestNumber = function(f, s, t) {
    let result;
    let firstPlusSecond = f + s;
    let secondPlusThird = s + t;
    if (firstPlusSecond > secondPlusThird) {
        if (f > s) {
            result = `First number = ${f} is biggest number!`;
        } else if (s > f) {
            result = `Second number = ${s} is biggest number!`;
        } else {
            result = `First number = ${f} and Second number = ${s} are equal!`
        }
    } else if (secondPlusThird > firstPlusSecond) {
        if (s > t) {
            result = `Second number = ${s} is biggest number!`;
        } else if (t > s) {
            result = `Third number = ${t} is biggest number!`;
        } else {
            result = `Second number = ${s} and Third number = ${t} are equal!`
        }
    } else if (firstPlusSecond === secondPlusThird) {
        if (f == t && t > s) {
            result = `First number = ${f} and Third number = ${t} are equal!`
        } else if (f == t && t < s) {
            result = `Second number = ${s} is biggest number!`;
        } else if (f == t && t == s) {
            result = 'All numbers are equal';
        }
    }
    return result;
}
console.log(biggestNumber(firstNumber, secondNumber, thirdNumber));

// 4 -----------------------------

let taskNumberOne = Number(prompt('Enter first number!'));
let taskNumberTwo = Number(prompt('Enter second number!'));
let operation = Number(prompt('Choose operation: \n1 - summary. \n2 - subtraction. \n3 - multiplication. \n4 - division. \n5 - break'));

let summaryFunction = function(numOne, numTwo) {
    let result = numOne + numTwo;
    return console.log(result);
}
let subtractionFunction = function(numOne, numTwo) {
    let result;
    if (numOne > numTwo) {
        result = numOne - numTwo;
    } else {
        result = numTwo - numOne;
    }
    return console.log(result);
}
let multiplicationFunction = function(numOne, numTwo) {
    let result = numOne * numTwo;
    return console.log(result);
}
let divisionFunction = function(numOne, numTwo) {
    let result = numOne / numTwo;
    return console.log(result);
}

let mapOperations = new Map();
mapOperations.set(1, summaryFunction(taskNumberOne, taskNumberTwo));
mapOperations.set(2, subtractionFunction(taskNumberOne, taskNumberTwo));
mapOperations.set(3, multiplicationFunction(taskNumberOne, taskNumberTwo));
mapOperations.set(4, divisionFunction(taskNumberOne, taskNumberTwo));
// mapOperations.get(operation);
choiceFunction(operation, mapOperations);

function choiceFunction(oper, map) {
    if (map.hasOwnProperty(oper)) {
        map.get(oper);
    }
    return;
}