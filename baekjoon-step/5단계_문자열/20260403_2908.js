/**
 * 734 893
 */

const fileSystem = require('fs');
const [A, B] = fileSystem.readFileSync(0).toString().trim().split(' ').map(Number);

const reversedA = ((A % 10) * 100) + (Math.floor((A / 10) % 10) * 10) + Math.floor(A / 100);
const reversedB = ((B % 10) * 100) + (Math.floor((B / 10) % 10) * 10) + Math.floor(B / 100);
console.log(Math.max(reversedA, reversedB));