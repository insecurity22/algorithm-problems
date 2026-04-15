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

// 테스트 케이스의 개수
const T = Number(input[0]);

// 1,000,000번 출력해서 반복 횟수가 많아지면 입출력(I/O)이 병목되어 시간 초과 발생 (console.log는 실제 OS와 통신)
// for(let i = 1; i <= T; i++) {
//     const [A, B] = input[i].split(' ').map(Number);
//     console.log(A + B);
// }

const result = [];
for(let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    result.push(A + B);
}
console.log(result.join("\n"));