/**
 * ljes=njak
 */

const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().trim().replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, "*");
console.log(input.length);