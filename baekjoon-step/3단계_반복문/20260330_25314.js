/**
 * 4
 */

const fileSystem = require('fs');
const N = Number(fileSystem.readFileSync(0).toString());

// 1. 4바이트라면 long이 1번
// 2. 8바이트라면 long이 2번
// ...

let result = '';
for(let i = 1; i <= N; i += 4) {
    result += 'long ';
}
result += "int";
console.log(result);

// = "long ".repeat(n / 4) + "int"