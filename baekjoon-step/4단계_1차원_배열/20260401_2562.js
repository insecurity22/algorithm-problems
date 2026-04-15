/**
 * 3
 * 29
 * 38
 * 12
 * 57
 * 74
 * 40
 * 85
 * 61
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n').map(Number);

let max = inputArr[0];
let maxIndex = 1;
for(let i = 1; i <= inputArr.length; i++) {
    if(max < inputArr[i]) {
        max = inputArr[i];
        maxIndex = i + 1;
    }
}
console.log(max);
console.log(maxIndex);

// [FIRST]
// const max = Math.max(...inputArr)
// console.log(max);
// console.log(inputArr.indexOf(max) + 1)
