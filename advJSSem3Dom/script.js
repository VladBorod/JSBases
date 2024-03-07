'use strict';

// const buttonElement = document.querySelector('.button');
// let count = 0;

// buttonElement.onclick = function() {
//     console.log('JS clicks');
//     count++;
//     console.log(`clicks ${count}`);
// }

// buttonElement.addEventListener('click', function(e) {
//     console.log('click add');
// });

// const click = function() {
//         console.log('JS clicks: ');
//         count++;
//         console.log(`clicks = ${count}`);
//     }
//     // buttonElement.onclick = click;
// buttonElement.addEventListener('click', click);\


// -------------------------------------------->

// const buttonsElement = document.querySelectorAll('.button');

// buttonsElement.forEach(element => {
//     element.addEventListener('click', function(event) {
//         const target = event.target
//         console.log(target);
//     });
// });


// -------------------------------------------->

// const menuElement = document.querySelector('.menu');

// const nameFunc = (e) => {
//     console.log(e.target, e.currentTarget);
// }

// menuElement.addEventListener('click', nameFunc);

// document.addEventListener('DOMContentLoaded', function(e) {
//     console.log('loaded');
// });

// window.addEventListener('load', function(e) {
//     console.log('all loaded');
// });

// const button = document.querySelector('.button1');

// button.addEventListener('mouseover', function(e) { // mouseleave 
//     console.log('You better press me!');
// });

// keyress, keydown, kekyup
// preventDefault, stopPropagation
// getSelection
// resize
// input
// submit

// =----------------------------------------------------------------

// const containerElement = document.querySelector('div.container');
// const buttonElement = document.createElement('button');
// const buttonText = 'Click';
// buttonElement.innerHTML = buttonText;
// containerElement.appendChild(buttonElement);

// window.onload = () => {
//     console.log('Page downloaded');
//     const containerElement = document.querySelector('div.container');
//     const buttonElement = document.createElement('button');
//     const buttonText = 'Click';
//     buttonElement.innerHTML = buttonText;
//     containerElement.appendChild(buttonElement);
//     buttonElement.onclick = () => {
//         console.log('Click event');
//     }
//     buttonElement.addEventListener('click', function(e) {
//         console.log('eventListener event');
//     });
// };

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Page downloaded');
//     const containerElement = document.querySelector('div.container');
//     const buttonElement = document.createElement('button');
//     const buttonText = 'Click';
//     buttonElement.innerHTML = buttonText;
//     containerElement.appendChild(buttonElement);
//     buttonElement.onclick = () => {
//         console.log('Click event');
//     }
//     buttonElement.addEventListener('click', function(e) {
//         console.log('eventListener event');
//     });
// });

// ----------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     const containerElement = document.querySelector('div.container');
//     const newButtonElement1 = document.createElement('button');
//     newButtonElement1.innerHTML = 'Button 1';
//     const newButtonElement2 = document.createElement('button');
//     newButtonElement2.innerHTML = 'Button 2';
//     const newButtonElement3 = document.createElement('button');
//     newButtonElement3.innerHTML = 'Button 3';
//     containerElement.appendChild(newButtonElement1);
//     containerElement.appendChild(newButtonElement2);
//     containerElement.appendChild(newButtonElement3);

//     let clickFunc = function(e) {
//         console.log(e.target.innerHTML);
//     };

//     newButtonElement1.addEventListener('click', clickFunc);
//     newButtonElement2.addEventListener('click', clickFunc);
//     newButtonElement3.addEventListener('click', clickFunc);

//     const newButtonElement4 = document.createElement('button');
//     newButtonElement4.innerHTML = 'Button 4';
//     containerElement.appendChild(newButtonElement4);

//     let counter = 0;
//     newButtonElement4.addEventListener('click', function(e) {
//         console.log(++counter, e.target.innerHTML);
//     });

//     const newButtonElement5 = document.createElement('button');
//     newButtonElement5.innerHTML = 'Button 5';
//     containerElement.appendChild(newButtonElement5);

//     newButtonElement5.addEventListener('click', function(e) {
//         e.target.innerHTML = 'You press this button';
//     });

// });

// ----------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     const containerElement = document.querySelector('div.container');
//     const h1ButtonElement = document.createElement('button');
//     h1ButtonElement.innerHTML = 'H1 CREATION';
//     containerElement.appendChild(h1ButtonElement);

//     h1ButtonElement.addEventListener('click', () => {
//         const newh1 = document.createElement('h1');
//         newh1.innerHTML = 'New h1';
//         containerElement.appendChild(newh1);
//     });

//     const h1DeleteButtonElement = document.createElement('button');
//     h1DeleteButtonElement.innerHTML = 'H1 DELETION';
//     containerElement.appendChild(h1DeleteButtonElement);

//     // h1DeleteButtonElement.addEventListener('click', () => {
//     //     containerElement.removeChild(newh1);
//     // });

//     h1DeleteButtonElement.addEventListener('click', () => {
//         const titles = document.querySelectorAll('h1');
//         if (titles.length > 0) {
//             // containerElement.removeChild(titles[titles.length - 1]);
//             titles[titles.length - 1].remove();
//         }
//     });

//     const howerButton = document.createElement('button');
//     howerButton.innerHTML = 'HOWER';
//     containerElement.appendChild(howerButton);

//     howerButton.addEventListener('mouseover', function(e) {
//         console.log('You hower this button');
//     });
//     howerButton.addEventListener('mouseleave', function(e) {
//         console.log('You leave this button');
//     });
// });

// ----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('div.container');

    const ulElement = document.querySelector('ul');

    const buttonListCreator = document.createElement('button');
    buttonListCreator.innerHTML = 'List Creator';
    container.appendChild(buttonListCreator);
    let counter = 3;
    buttonListCreator.addEventListener('click', () => {
        const listElement = document.createElement('li');
        ++counter;
        listElement.innerHTML = 'element-' + counter + ' new';
        ulElement.appendChild(listElement);
        listElement.addEventListener('click', function(e) {
            e.target.remove();
        });
    });
    const buttonListDeleter = document.createElement('button');
    buttonListDeleter.innerHTML = 'List Deleter';
    container.appendChild(buttonListDeleter);

    buttonListDeleter.addEventListener('click', function(e) {
        // const fullUlElement = document.querySelectorAll('ul>li')
        // if (fullUlElement.length > 0) {
        //     fullUlElement[0].remove();
        // }
        const listElementsInUl = ulElement.querySelectorAll('li');
        if (listElementsInUl.length > 0) {
            listElementsInUl[0].remove();
        }
    });

    const buttonToAddClassClick = document.createElement('button');
    buttonToAddClassClick.innerHTML = 'Add Class Click';
    container.appendChild(buttonToAddClassClick);
    buttonToAddClassClick.addEventListener('click', function(e) {
        e.target.classList.add('click');
    });
});