/**
 * 5
 */

const fileSystem = require('fs');
const n = Number(fileSystem.readFileSync(0).toString().trim());

for(let multiplierIndex = 1; multiplierIndex <= 9; multiplierIndex++) {
    console.log(`${n} * ${multiplierIndex} = ${n * multiplierIndex}`);
}