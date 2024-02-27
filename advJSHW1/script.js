'use strict'

// 1 ----------------------
const superLink = document.getElementById('super_link');
console.log(superLink);

// 2 ----------------------      
const allCardLinks = document.querySelectorAll('a.card-link');
allCardLinks.forEach((link) => {
    link.textContent = 'ССЫЛКА';
});

// 3 ----------------------
const allCardLinksInCardBody = document.querySelectorAll('div.card-body > a.card-link');
console.log(allCardLinksInCardBody);

// 4 ----------------------
const dataNumberElement = document.querySelector('[data-number="50"]');
console.log(dataNumberElement);

// 5 ----------------------
const titleElement = document.querySelector('title');
console.log(titleElement);
console.log(titleElement.textContent);

// 6 ----------------------
const cardTitleElement = document.querySelector('.card-title');
console.log(cardTitleElement.parentNode);

// 7 ----------------------
const newElementP = document.createElement('p');
newElementP.textContent = 'Привет';
const cardElement = document.querySelector('div.card');
cardElement.prepend(newElementP);