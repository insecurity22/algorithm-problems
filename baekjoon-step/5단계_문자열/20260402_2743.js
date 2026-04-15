/**
 * pulljima
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim();
console.log(input.length);