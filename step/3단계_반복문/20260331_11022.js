/**
 * 5
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 테스트 케이스 개수
const T = Number(input[0]);

let result = '';
for(let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    result += `Case #${i}: ${A} + ${B} = ${A + B}\n`;
}
console.log(result);