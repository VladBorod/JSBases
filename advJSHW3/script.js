'use strict';

// 1 ------------------------------------------->
document.addEventListener('DOMContentLoaded', function() {
    console.log('All tegs are loaded');
});
// 2 ------------------------------------------->
window.addEventListener('load', function() {
    console.log('Everything is loaded');
});
// 3 ------------------------------------------->
document.addEventListener('click', function(e) {
    let target = e.target
    if (target.classList.contains('super_element')) {
        console.log('We have find class: "super_element"!!!');
        console.log(`Class ${target.classList} presented in element ${target.tagName}`);
    } else {
        console.log('Here is no class: "super_element".');
        console.log(`Class ${target.classList} presented in element ${target.tagName}`);
    }
});
//  4 ------------------------------------------>
document.addEventListener('DOMContentLoaded', function() {
    const textAreaElement = document.querySelector('textarea');
    textAreaElement.addEventListener('mouseover', function(e) {
        console.log('This is <textarea>');
    });
});
// 5 ------------------------------------------>
document.addEventListener('DOMContentLoaded', function() {
    const ulElement = document.querySelector('ul');
    ulElement.addEventListener('click', function(e) {
        console.log(`Text: ${e.target.innerHTML}`);
    });
});
// 6 ------------------------------------------>
// Выполнение кода идет каскадом от элементов родителей к элементам детям. Когда дети найдены, начинает выполнятся код в обратном порядке и он начинает ИМЕННО напрямую выполнятся. То есть от самого младшего ребенка (а в данном случае от текста в этом ребенке, что можно считать элементарной частицей ребенка) -> выполнение кода -> ребенок старше -> выполнение кода и т.д.
// 7 ------------------------------------------>
document.addEventListener('DOMContentLoaded', function() {
    const ulPart = document.querySelector('ul');
    const buttonElementsInUl = ulPart.querySelectorAll('button');
    if (buttonElementsInUl.length > 0) {
        for (let i = 1; i < buttonElementsInUl.length; i += 2) {
            buttonElementsInUl[i].classList.add('change_color');
        }
    }
});