/**
 * 5
 */

const fileSystem = require('fs');
const N = fileSystem.readFileSync(0).toString().trim();

console.log((2 ** N + 1) ** 2);
// N → 한 변
// 1 → 3 → 2^1 + 1 
// 2 → 5 → 2^2 + 1