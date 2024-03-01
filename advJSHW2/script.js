'use strict';

// 1 --------------------------------->

const dropDownElements = document.querySelectorAll('div.dropdown div.menu a.dropdown-item');

dropDownElements.forEach(element => {
    element.setAttribute('class', element.classList + ' super-dropdown');
});

// 2 --------------------------------->

const btnElement = document.querySelector('div.dropdown button.btn');

if (btnElement.classList.contains('btn-secondary')) {
    btnElement.classList.remove('btn-secondary');
} else {
    btnElement.classList.add('btn-secondary');
}

//  3 --------------------------------->

const menuElement = document.querySelector('div.dropdown div.menu');
menuElement.classList.remove('dropdown-menu');

//  4 --------------------------------->

const dropDownMainElement = document.querySelector('div.dropdown');
dropDownMainElement.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

// 5 --------------------------------->

const elementWithIDDropdownMenuButton = document.getElementById('dropdownMenuButton');
elementWithIDDropdownMenuButton.id = 'superDropdown';

// 6 --------------------------------->

const elementWithAriaLabDrDowMenBtn = document.querySelector('[aria-labelledby="dropdownMenuButton"]')
elementWithAriaLabDrDowMenBtn.dataset['dd'] = '3';

// 7 --------------------------------->

document.querySelector('div.dropdown button.dropdown-toggle').removeAttribute('type');