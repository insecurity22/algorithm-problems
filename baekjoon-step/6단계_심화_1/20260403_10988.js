/**
 * level
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim();
const inputLength = input.length;

let isPalindrome = 1;
for(let i = 0; i < inputLength; i++) {
    if(input[i] !== input[inputLength - i - 1]) {
        isPalindrome = 0;
        break;
    };
}
console.log(isPalindrome);