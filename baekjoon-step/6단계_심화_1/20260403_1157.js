/**
 * zZa
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().toUpperCase();

// A, B, C, D, E ...
const alphabetArr = Array(26).fill(0);
for(let char of input) {
    alphabetArr[char.charCodeAt(0) - 65] += 1;
}

const max = Math.max(...alphabetArr);
const maxIndex = alphabetArr.indexOf(max);
const isDuplicateMax = alphabetArr.filter((v) => v === max).length > 1;
console.log(isDuplicateMax ? '?' : String.fromCharCode(maxIndex + 65));