'use strict';

const handlebars = require('handlebars');

//  1 ------------------------------ ------------------------------
// const template = handlebars.compile('<p>{{someVar}}</p>');
// const result = template({someVar: "Hello!"});

// console.log(result);

//  2 ------------------------------ ------------------------------
// const template = handlebars.compile(
//   '{{#if bold}} <b>Hello</b> {{else}} <p>Hello</p> {{/if}}'
// );

// console.log(template({ bold: true }));
// console.log(template({ bold: false }));

// 3 ------------------------------ ------------------------------
const items = [
  { name: 'first item', number: 3},
  { name:'second item', number: 4},
  { name: 'third item', number: 5},
  { name: 'fourth item', number: 6},
  { name: 'fifth item', number: 7},
  { name:'sixth item', number: 8},
];

// const template = handlebars.compile(
//   '{{#each items}}<li>{{this.name}}</li>{{/each}}'
// );

const template = handlebars.compile(
  '{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}'
);

console.log(template({ items }));