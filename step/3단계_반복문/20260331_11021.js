/**
 * 5
 * 1 1
 * 12 34
 * 5 500
 * 40 60
 * 1000 1000
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 테스트 케이스 개수
const T = Number(input[0]);

// 출력이 엄청 많은 수만-수십만 줄 이상이 아니라면 괜찮다. (성능 문제 생길 때만 모아 출력하면 된다)
let result = '';
for(let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    result += `Case #${i}: ${A + B}\n`;
}
console.log(result);