'use strict';

// const body = document.querySelector('body');
// const newEl = document.createElement('div');
// newEl.innerHTML = 'Hello';

// body.appendChild(newEl);

// ----------------------------------------------------------------

// const filterElByDataAttr = (attributeName, maxPrice) => {
//   const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
//   elements.forEach(element => {
//     const price = parseFloat(element.getAttribute(attributeName));
//     if (price > maxPrice) {
//       element.style.display = 'none';
//     }
//   })
// };

// filterElByDataAttr('data-price', 75);

// const  sortElByDataAttr = attributeName => {
//   const rating = document.querySelector('.rating');
//   const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
//   elements.sort((a, b) => {
//     const ratingA = parseInt(a.getAttribute(attributeName));
//     const ratingB = parseInt(b.getAttribute(attributeName));
//     return ratingB - ratingA;
//   });
//   elements.forEach(element => {
//     rating.appendChild(element);
//   });
// }

// sortElByDataAttr('data-rating');

// ----------------------------------------------------------------

// const checkBox = document.getElementById('toggleCheckbox');
// const content = document.querySelector('.content');

// checkBox.addEventListener('change', function (e) {
//   if (this.checked) {
//     content.classList.add('visible');
//   } else {
//     content.classList.remove('visible');
//   }
// });

// ---------------------------------------------------------------

// window.addEventListener('load', function (e) {
//   const contentEl = document.querySelector('.content');
//   contentEl.classList.remove('hidden');

//   const loaderEl = document.querySelector('.loader');
//   loaderEl.style.display = 'none';
// }); 