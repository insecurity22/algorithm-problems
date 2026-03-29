const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);