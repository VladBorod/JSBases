'use strict'

// const blockElem = document.getElementById('block');
// console.log(blockElem);

// const blockElemQuery = document.querySelector('div#block > p');
// console.log(blockElemQuery.innerHTML);

// const firstParagraphElem = document.querySelector('div#block > p.www');
// console.log(firstParagraphElem.innerHTML);

// const link = document.querySelector('a.link');
// console.log(link.textContent);
// link.textContent = 'link text js';
// link.href = 'https://developer.mozilla.org/ru/';
// console.log(link.href);

// const photoToChangeSrc = document.querySelector('img.photo').src = 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655dd52aeece0b744ad0048e_655dfa4311aa97744330de27/scale_2400';

// photoToChangeSrc.src = 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655dd52aeece0b744ad0048e_655dfa4311aa97744330de27/scale_2400';

// const content = document.querySelector('div.content')
// const paraph = document.createElement('button');
// paraph.textContent = 'New paragraph';

// content.append(paraph);

// content.appendChild(paraph);
// paraph.remove();

// const newContent = document.querySelector('div.content');
// const newButton = document.createElement('button');
// newButton.textContent = 'TEXT';
// newContent.append(newButton);
// let counter = 0;
// newButton.addEventListener('click', () => {
//     ++counter;
//     console.log(counter);
// })

// const newestContent = document.querySelector('div.content');
// const newestButton = document.createElement('button');
// newestButton.textContent = 'Send';
// newestContent.append(newestButton);
// newestButton.onclick = function() {
//     newestButton.textContent = 'Text sended';
// }


const newAnotherContent = document.querySelector('div.content');
const newAnotherButton = document.createElement('button');
newAnotherButton.textContent = 'SEND';
newAnotherContent.append(newAnotherButton);
let counter = 0;
newAnotherButton.addEventListener('click', (e) => {
    ++counter;
    console.log(counter);
    e.target.textContent = 'Text sended';
})