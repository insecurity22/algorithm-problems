/**
 * ABCDE
 * abcde
 * 01234
 * FGHIJ
 * fghij
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');
const inputMaxLength = Math.max(...input.map((v) => v.length));

let result = '';
for(let i = 0; i < inputMaxLength; i++) {
    for(let j = 0; j < 5; j++) {
        if(input[j][i]) {
            result += input[j][i];
        }
    }
}
console.log(result);