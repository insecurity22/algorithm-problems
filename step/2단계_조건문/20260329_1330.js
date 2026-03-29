const fileSystem = require('fs');
const input = fileSystem.readFileSync(0).toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > b) {
    console.log(">");
} else if (a < b) {
    console.log("<");
} else if (a == b) {
    console.log("==");
}