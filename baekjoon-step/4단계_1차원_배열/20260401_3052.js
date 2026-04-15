/**
* 39
* 40
* 41
* 42
* 43
* 44
* 82
* 83
* 84
* 85
*/

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n').map(Number);

const DIVISOR = 42;
const remainders = inputArr.map((num) => num % DIVISOR);
const uniqueCount = new Set(remainders).size;
console.log(uniqueCount);