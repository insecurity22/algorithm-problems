/**
 * 5
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 */

const fileSystem = require("fs");
const input = fileSystem.readFileSync(0).toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [first, second] = input[i].split(' ');
    console.log(Number(first) + Number(second));
}