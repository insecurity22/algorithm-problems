/**
 * 5 11
 * baekjoononlinejudge
 * startlink
 * codeplus
 * sundaycoding
 * codingsh
 * baekjoon
 * codeplus
 * codeminus
 * startlink
 * starlink
 * sundaycoding
 * codingsh
 * codinghs
 * sondaycoding
 * startrink
 * icerink
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync('./input.txt').toString().trim().split('\n');

// 문자열의 개수(집합 S에 포함되어 있는 문자열, 검사해야하는 문자열)
const [N, M] = input[0].split(' ').map(Number);

// 집합 S
const set = new Set(input.slice(1, N + 1));

// 검사할 문자열
const stringsToCheck = input.slice(N + 1);

let count = 0;
for(let i = 0; i < M; i++) {
    if(set.has(stringsToCheck[i])) {
        count++;
    }
}
console.log(count);