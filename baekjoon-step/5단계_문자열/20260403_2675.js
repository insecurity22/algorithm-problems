/**
 * 2
 * 3 ABC
 * 5 /HTP
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 테스트 케이스 개수 T
const T = Number(input[0]);

const resultArr = [];
for(let i = 1; i <= T; i++) {
    // 문자 반복 횟수 R, 문자열 S
    const [R, S] = input[i].split(' ');

    let repeated = '';
    for(let j = 0; j < S.length; j++) {
        repeated += S[j].repeat(Number(R));
    }
    resultArr.push(repeated);
}
console.log(resultArr.join('\n'));