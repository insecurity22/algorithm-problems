/**
 * shiftpsh
 * 6
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

const S = input[0];
const i = Number(input[1]);
console.log(S[i - 1]);