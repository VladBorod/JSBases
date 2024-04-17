# Task 1.
- change directory
cd .\2NODE_Sem\
- function running
node D:\ITStuff\GBStudy\JavaScript\JSBases\Sem1\2NODE_Sem\task1\index.js
- npm installation
npm init -y
- installation of npm package
npm i number-precision
- npm package import into code
const numberPrecisionPack = require('number-precision')
- in code realisation of package


# Task 2.
- new folder creation + new file calcSum.js creaton.
- cd D:\ITStuff\GBStudy\JavaScript\JSBases\Sem1\2NODE_Sem\task2
- npm init -y
- from package.json task1 copy depencies to same file of task2
- in terminal use command "npm install" to install dependencies
- create new file in task2 - index.js
- create module.exports { calculateResultSum } in calcSum.js file
- in index.js type: const calcRes = require('./calcSum.js'); 
we create a new variable with requirament of a path to importable file and function
- now we can use a new variable  as funcrion
- SO file culcSum has imported pack and function with depencies which connected with this pack. Next we make this function importable and use it in file index.js in new variable. Now we use this variable as function.
- add command to scrip start: in packaje.json in fiield test we changing test key to start key, in value field insert "node <file name>"
so it will be "node index.js"
- now in terminal in our directory we can use command: npm run start.


# Task 3.
- we need to color result of our function in red if it more than 50, in green if less or equals.
- cd new path
- npm init -y
- npm i colors
- npm i (to install package we use before, coz it already has depencies)
- require('colors');
- create new variable res, it's gonna be our function
- create variable resText for easy use in clg

