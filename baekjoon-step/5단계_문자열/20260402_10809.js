/**
 * baekjoon
 */

const fileSystem = require('fs');
const S = fileSystem.readFileSync(0).toString().trim();

const result = [];
for(let i = 0; i < 26; i++) {
    const alphabet = String.fromCharCode(i + 97);
    result.push(S.indexOf(alphabet));
}
console.log(result.join(' '));