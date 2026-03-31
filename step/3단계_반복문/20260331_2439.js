/**
 * 5
 */

const fileSystem = require('fs');

// 별 개수
const N = Number(fileSystem.readFileSync('./input.txt').toString().trim());

// N이 5라고 가정했을 때
// 공백 4, 별 1
// 공백 3, 별 2
// 공백 2, 별 3
// 공백 1, 별 4
// 공백 0, 별 5

const starArr = [];
for(let i = 1; i <= N; i++) {
    const spaces = ' '.repeat(N - i);
    const stars = '*'.repeat(i);
    starArr.push(`${spaces}${stars}`);
}
console.log(starArr.join('\n'));