'use strict';

// const select = document.forms.superForm.selectForm;

// // select.options[2].selected = true;
// // select.selectedIndex = 2;
// select.value = 'SB';

// const selected = Array.from(select.options)
//     .filter((option) => option.selected)
//     .map((option) => option.value);
// console.log(selected);

// ----------------------------------------------------------------

// const selectElement = document.querySelector('#country-select');
// const capitalInfoElement = document.querySelector('#capital-info');

// selectElement.onchange = function () {
//   const selectedCountry = selectElement.value;
//   let capital = '';
  
//   switch (selectedCountry) {
//     case 'russia':
//       capital = 'Moscow';
//       break;
//     case 'usa':
//       capital = 'Washington';
//       break;
//     case 'china':
//       capital = 'Beijing';
//       break;
//     default:
//   };  

//   capitalInfoElement.textContent = capital;
// };

// 0----------------------------------------------------------------

// const sortSelect = document.querySelector('#sort-select');
// const productList = document.querySelector('#product-list');
// const productItems = Array.from(document.querySelectorAll('.product-item'));

// sortSelect.onchange = function () {
//   const selectedOption = sortSelect.value;

//   if (selectedOption === 'asc'){
//     productItems.sort((a, b) => {
//       const priceA = parseInt(a.textContent.split('- $')[1]);
//       const priceB = parseInt(b.textContent.split('- $')[1]);
//       return priceA - priceB;
//     });
//   } else if (selectedOption === 'desc'){
//     productItems.sort((a, b) => {
//       const priceA = parseInt(a.textContent.split('- $')[1]);
//       const priceB = parseInt(b.textContent.split('- $')[1]);
//       return priceB - priceA;
//     });
//   }
//   productItems.forEach(item => productList.appendChild(item));
// };


// ----------------------------------------------------------------

// const input = document.forms.superForm.input;
// const error = document.querySelector('#error');

// input.onblur = function() {
//   if (!input.value.includes('@')) {
//     input.classList.add('invalid');
//     error.innerHTML = 'enter email';
//   }
// };

// input.onfocus = function() {
//   if (this.classList.contains('invalid')) {
//     input.classList.remove('invalid');
//     error.innerHTML = "";
//   }
// };

// input.addEventListener('blur', function (e) {
//     if (!input.value.includes('@')) {
//       input.classList.add('invalid');
//       error.innerHTML = 'enter email';
//   }
// });

// input.addEventListener('focus', function (e) {
//     if (this.classList.contains('invalid')) {
//       input.classList.remove('invalid');
//       error.innerHTML = "";
//   }
// });

// ---------------------------------------------------------------- 

(async () => {
  const url = 'https://catfact.ninja/fact';
  const response = await fetch(url);
  console.log(response.status);
  console.log(response.ok);
  const fact = await response.json();
  console.log(fact);
})();
