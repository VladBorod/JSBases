// !!!!!!!!!!!!!!!!!!
// 1 ----------------
let num1 = parseInt(prompt('Enter number one'));
let num2 = parseInt(prompt('Enter number two'));
alert((num1 < 2 && num2 > 2) ? 'Condition met' : 'Condition NOT met');
// !!!!!!!!!!!!!!!!!!
// 2 ----------------
let test = true;
alert((test !== true) ? '---' : '+++');
// 2 another solution --------------
let temp = confirm('Choose Yes or No');
alert((temp === true) ? '+++' : '---');
// !!!!!!!!!!!!!!!!!!!
// 3 -----------------
let day = parseInt(prompt('Enter day number!'));
if (!(day >= 1 && day <= 31)) {
    console.log('Wrong day number!');
} else {
    if (day >= 1 && day <= 10) {
        console.log('First decade');
    } else if (day >= 11 && day <= 20) {
        console.log('Second decade');
    } else if (day >= 21 && day <= 31) {
        console.log('Third decade');
    }
}
// 3 another solution --------------
let dayTemp = parseInt(prompt('Enter day number!'));
let message = (!(dayTemp >= 1 && dayTemp <= 31)) ? 'Wrong day number!' :
    (dayTemp >= 1 && dayTemp <= 10) ? 'First decade' :
    (dayTemp >= 11 && dayTemp <= 20) ? 'Second decade' : 'Third decade';
console.log(message);
// !!!!!!!!!!!!!!!!!!!
// 4 -----------------
let number = parseFloat(prompt('Enter integer, positive number'));
if (number % 10000 < number) {
    console.log('Ten-thousandths');
    ones = number % 10;
    console.log(`Ones: ${ones}`);
    tens = number % 100;
    tens = Math.floor(tens / 10);
    console.log(`Tens: ${tens}`);
    hundreds = number % 1000;
    hundreds = Math.floor(hundreds / 100);
    console.log(`Hundreds: ${hundreds}`);
    thousands = number % 10000;
    thousands = Math.floor(thousands / 1000);
    console.log(`Thousands: ${thousands}`);
    tenThousands = number % 100000;
    tenThousands = Math.floor(tenThousands / 10000);
    console.log(`Ten-thousandths: ${tenThousands}`);
} else if (number % 1000 < number) {
    console.log('Thousandths');
    ones = number % 10;
    console.log(`Ones: ${ones}`);
    tens = number % 100;
    tens = Math.floor(tens / 10);
    console.log(`Tens: ${tens}`);
    hundreds = number % 1000;
    hundreds = Math.floor(hundreds / 100);
    console.log(`Hundreds: ${hundreds}`);
    thousands = number % 10000;
    thousands = Math.floor(thousands / 1000);
    console.log(`Thousands: ${thousands}`);
} else if (number % 100 < number) {
    console.log('Hundreds');
    ones = number % 10;
    console.log(`Ones: ${ones}`);
    tens = number % 100;
    tens = Math.floor(tens / 10);
    console.log(`Tens: ${tens}`);
    hundreds = number % 1000;
    hundreds = Math.floor(hundreds / 100);
    console.log(`Hundreds: ${hundreds}`);
} else if (number % 10 < number) {
    console.log('Tens');
    ones = number % 10;
    console.log(`Ones: ${ones}`);
    tens = number % 100;
    tens = Math.floor(tens / 10);
    console.log(`Tens: ${tens}`);
} else {
    console.log('Ones');
    console.log(`Ones: ${number}`);
}