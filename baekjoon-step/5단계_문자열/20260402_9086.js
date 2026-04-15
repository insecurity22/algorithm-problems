/**
 * 3
 * ACDKJFOWIEGHE
 * O
 * AB
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 테스트 케이스 개수 T
const T = Number(input[0]);

const textArr = [];
for(let i = 1; i <= T; i++) {
    const text = input[i];
    textArr.push(`${text[0]}${text[text.length - 1]}`);
}
console.log(textArr.join('\n'));