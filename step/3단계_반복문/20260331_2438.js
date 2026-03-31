/**
 * 5
 */

const fileSystem = require('fs');
const N = Number(fileSystem.readFileSync('./input.txt').toString().trim());

const starArr = [];
for(let i = 1; i <= N; i++) {
    starArr.push("*".repeat(i));
}
console.log(starArr.join('\n'));