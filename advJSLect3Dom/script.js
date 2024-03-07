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

const button = document.querySelector('.button1');

button.addEventListener('mouseover', function(e) { // mouseleave 
    console.log('You better press me!');
});

// keyress, keydown, kekyup
// preventDefault, stopPropagation
// getSelection
// resize
// input
// submit