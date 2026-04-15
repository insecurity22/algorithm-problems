const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);