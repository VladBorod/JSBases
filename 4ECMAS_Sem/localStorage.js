'use strict';

const data = localStorage.setItem('my_data', 'something');
const data2 = localStorage.getItem('my_data');

console.log(data2);
// localStorage.removeItem('my_data');
// console.log(data2);
// localStorage.clear();
console.log(localStorage.key(0));

localStorage.user = {
  name: '<NAME>',
  age: 30,
  city: 'New York'
}

console.log(localStorage.user);
localStorage.user = JSON.stringify({
  name: '<NAME>',
  age: 30,
  city: 'New York'
});
console.log(localStorage.user);