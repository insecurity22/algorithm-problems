/**
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

const resultArr = [];
for(let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    resultArr.push(A + B)
}
console.log(resultArr.join('\n'));