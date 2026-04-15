/**
 * 5
 * 20 10 35 30 7
 */

const fileSystem = require('fs');
const inputArr = fileSystem.readFileSync(0).toString().trim().split('\n');

const N = Number(inputArr[0]);
const intArr = inputArr[1].split(' ').map(Number);
const initialValue = intArr[0];

let min = initialValue;
let max = initialValue;

for(let i = 1; i <= N; i++) {
    if(intArr[i] < min) min = intArr[i];
    if(intArr[i] > max) max = intArr[i];
}
console.log(`${min} ${max}`);

// Math.min(...intArr), Math.max(...intArr)는 배열이 크면 (백만 이상) 에러 날 수 있다. => for문 방식이 안전