/**
 * 3
 */

const fileSystem = require('fs');
const n = Number(fileSystem.readFileSync(0).toString().trim());

let sum = 0;
for(let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);