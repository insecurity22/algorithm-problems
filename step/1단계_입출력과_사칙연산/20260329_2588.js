/**
 * 472
 * 385
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a * (b % 10)); // 5
console.log(a * Math.floor((b % 100) / 10)); // 85/10 → 8.5 → 8
console.log(a * Math.floor(b / 100)); // 472/100 → 4.72 → 4
console.log(a * b); // 472 * 385