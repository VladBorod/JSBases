'use strict';

const calcRes = require('./calcSum.js');
require('colors');

// const res = calcRes([12.1, 32.2, 43.1], 0.9);
const res = calcRes([43.1], 0.9);
const resText = `Summary price ${res}`;

console.log(res > 50 ? resText.red : resText.green);