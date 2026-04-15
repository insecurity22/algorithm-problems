/**
 * 2
 * yzyzy
 * zyzyz
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

// 단어의 개수
const N = Number(input[0]);

let groupCount = 0;
for(let i = 1; i <= N; i++) {
    const word = input[i];
    const seen = new Set();
    
    let prevChar;
    let isGroupWord = true;

    for(let char of word) {
        if(char !== prevChar && seen.has(char)) {
            isGroupWord = false;
            break;
        }
        seen.add(char);
        prevChar = char;
    }

    if(isGroupWord) groupCount++;
}
console.log(groupCount);