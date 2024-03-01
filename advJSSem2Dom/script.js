'use strict';

const blockElement = document.querySelector('div.block');
// console.log(blockElement);
const itemNewElement = document.createElement('div');
itemNewElement.setAttribute('class', 'item');
itemNewElement.textContent = "Element inside";
blockElement.appendChild(itemNewElement);
itemNewElement.setAttribute('class', itemNewElement.classList + ' item_1');
// -----------------------
// const textElement = document.querySelector('div.elem div.content p.text');
// console.log(textElement);
// console.log(textElement.previousElementSibling);
// console.log(textElement.parentElement);
// console.log(textElement.parentElement.previousElementSibling);
// console.log(document.querySelector('div.elem img'));
// console.log(textElement.parentElement.parentElement);
// console.log(document.querySelector('div.elem img').parentElement);
// console.log(document.querySelector('div.elem img').parentElement.parentElement);
// ---------------------
// const subtitleElement = document.querySelector('div.item div.elem div.info h2.subtitle');
// console.log(subtitleElement); 
// let currentElement = subtitleElement;

// while (currentElement.parentElement !== null) {
//     currentElement = currentElement.parentElement;
//     console.log(currentElement);
// }
// ----------------------
const inputFormElement = document.querySelector('form input[type="text"]');
// console.log(inputFormElement);
const buttonFormElement = document.querySelector('form button.btn');
// console.log(buttonFormElement);

buttonFormElement.addEventListener('click', (event) => {
    if (inputFormElement.value === '' || inputFormElement.value === null) {
        const warningElement = document.createElement('h2');
        warningElement.setAttribute('class', 'warning');
        warningElement.textContent = 'Please enter a value';
        warningElement.style.border = '1px solid red';
        blockElement.appendChild(warningElement);
        inputFormElement.setAttribute('class', '.red_border');
    }
});