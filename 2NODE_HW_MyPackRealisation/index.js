'use strict';

// npm package realisation!

const pg = require('./node_modules/trash_hard_password_generator/passGen');

const password = pg.genPassword(12);
console.log(password);