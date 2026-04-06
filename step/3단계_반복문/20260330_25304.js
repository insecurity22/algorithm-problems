/**
 * 260000
 * 4
 * 20000 5
 * 30000 2
 * 10000 6
 * 5000 8
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 영수증에 적힌 총 금액 X
const X = Number(input[0]);

// 영수증에 적힌 구매한 물건의 종류의 수 N
const N = Number(input[1]);

let sum = 0;
for(let i = 2; i < N + 2; i++) {
    const [price, count] = input[i].split(' ').map(Number);
    sum += price * count;
}

console.log(sum === X ? "Yes" : "No");