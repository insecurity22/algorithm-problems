/**
 * 77 77 7777
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log(a + b + c);