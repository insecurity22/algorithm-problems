/**
 * 25
 * 7000000000000000000000000
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 숫자의 개수, 숫자
const [numCount, num] = input;

let sum = 0;
for(let i = 0; i < numCount; i++) {
    sum += Number(num[i]);
}
console.log(sum);